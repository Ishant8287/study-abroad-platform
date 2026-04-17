const Program = require("../models/Program");
const Student = require("../models/Student");
const HttpError = require("../utils/httpError");
const env = require("../config/env");
const { rankProgramsWithGroq } = require("./groqService");

function withEngineMeta(payload, engine, fallbackFrom = null) {
  const meta = {
    ...(payload.meta || {}),
    engine,
  };

  if (fallbackFrom) {
    meta.fallbackFrom = fallbackFrom;
  }

  return {
    ...payload,
    meta,
  };
}

async function buildRuleBasedProgramRecommendations(studentId) {
  const student = await Student.findById(studentId).lean();

  if (!student) {
    throw new HttpError(404, "Student not found.");
  }

  const recommendations = await Program.aggregate([
    // Only consider programs from student's target countries
    {
      $match: {
        country: { $in: student.targetCountries },
      },
    },

    // Calculate match score
    {
      $addFields: {
        matchScore: {
          $add: [
            // +35 if country matches
            {
              $cond: [{ $in: ["$country", student.targetCountries] }, 35, 0],
            },
            // +30 if any interestedField is found (case-insensitive) in the program's field
            {
              $cond: [
                {
                  $gt: [
                    {
                      $size: {
                        $filter: {
                          input: student.interestedFields,
                          as: "f",
                          cond: {
                            // FIX: match "$$f" (student field) as regex against "$field" (program field)
                            // options "i" handles case — no need for $toLower
                            $regexMatch: {
                              input: "$field",
                              regex: "$$f",
                              options: "i",
                            },
                          },
                        },
                      },
                    },
                    0,
                  ],
                },
                30,
                0,
              ],
            },
            // +20 if within budget
            {
              $cond: [
                { $lte: ["$tuitionFeeUsd", student.maxBudgetUsd] },
                20,
                0,
              ],
            },
            // +10 if preferred intake available
            {
              $cond: [{ $in: [student.preferredIntake, "$intakes"] }, 10, 0],
            },
            // +5 if IELTS score meets minimum
            {
              $cond: [
                {
                  $gte: [student.englishTest?.score || 0, "$minimumIelts"],
                },
                5,
                0,
              ],
            },
          ],
        },

        // Build reasons array
        reasons: {
          $concatArrays: [
            {
              $cond: [
                { $in: ["$country", student.targetCountries] },
                [{ $concat: ["Preferred country match: ", "$country"] }],
                [],
              ],
            },
            {
              $cond: [
                { $lte: ["$tuitionFeeUsd", student.maxBudgetUsd] },
                ["Within budget range"],
                [],
              ],
            },
            {
              $cond: [
                { $in: [student.preferredIntake, "$intakes"] },
                [
                  {
                    $concat: [
                      "Preferred intake available: ",
                      student.preferredIntake,
                    ],
                  },
                ],
                [],
              ],
            },
            {
              $cond: [
                { $gte: [student.englishTest?.score || 0, "$minimumIelts"] },
                ["English test score meets requirement"],
                [],
              ],
            },
          ],
        },
      },
    },

    // Sort by score descending
    { $sort: { matchScore: -1 } },

    // Top 5 only
    { $limit: 5 },

    // Clean up output
    {
      $project: {
        title: 1,
        field: 1,
        country: 1,
        city: 1,
        universityName: 1,
        degreeLevel: 1,
        tuitionFeeUsd: 1,
        intakes: 1,
        minimumIelts: 1,
        scholarshipAvailable: 1,
        matchScore: 1,
        reasons: 1,
      },
    },
  ]);

  return {
    data: {
      student: {
        id: student._id,
        fullName: student.fullName,
        targetCountries: student.targetCountries,
        interestedFields: student.interestedFields,
      },
      recommendations,
    },
    meta: {
      total: recommendations.length,
    },
  };
}

async function buildGroqProgramRecommendations(studentId) {
  const student = await Student.findById(studentId).lean();

  if (!student) {
    throw new HttpError(404, "Student not found.");
  }

  const candidates = await Program.find({
    country: { $in: student.targetCountries },
  })
    .limit(30)
    .lean();

  if (!candidates.length) {
    return {
      data: {
        student: {
          id: student._id,
          fullName: student.fullName,
          targetCountries: student.targetCountries,
          interestedFields: student.interestedFields,
        },
        recommendations: [],
      },
      meta: {
        total: 0,
      },
    };
  }

  const ranked = await rankProgramsWithGroq({ student, programs: candidates });
  if (!ranked.length) {
    throw new Error("Groq returned no usable recommendations.");
  }

  const programById = new Map(
    candidates.map((program) => [String(program._id), program]),
  );

  const recommendations = ranked
    .map((item) => {
      const program = programById.get(item.programId);
      if (!program) {
        return null;
      }

      return {
        title: program.title,
        field: program.field,
        country: program.country,
        city: program.city,
        universityName: program.universityName,
        degreeLevel: program.degreeLevel,
        tuitionFeeUsd: program.tuitionFeeUsd,
        intakes: program.intakes,
        minimumIelts: program.minimumIelts,
        scholarshipAvailable: program.scholarshipAvailable,
        matchScore: item.matchScore,
        reasons: item.reasons,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);

  return {
    data: {
      student: {
        id: student._id,
        fullName: student.fullName,
        targetCountries: student.targetCountries,
        interestedFields: student.interestedFields,
      },
      recommendations,
    },
    meta: {
      total: recommendations.length,
    },
  };
}

function getPreferredRecommendationEngine() {
  return env.groqApiKey ? "groq" : "rule-based";
}

async function buildProgramRecommendations(studentId) {
  if (!env.groqApiKey) {
    const payload = await buildRuleBasedProgramRecommendations(studentId);
    return withEngineMeta(payload, "rule-based");
  }

  try {
    const payload = await buildGroqProgramRecommendations(studentId);
    return withEngineMeta(payload, "groq");
  } catch (error) {
    console.warn(
      "Groq recommendations failed. Falling back to rule-based recommendations.",
      error.message,
    );
    const payload = await buildRuleBasedProgramRecommendations(studentId);
    return withEngineMeta(payload, "rule-based", "groq");
  }
}

module.exports = {
  buildProgramRecommendations,
  buildRuleBasedProgramRecommendations,
  getPreferredRecommendationEngine,
};
