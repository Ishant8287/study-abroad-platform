const axios = require("axios");
const env = require("../config/env");

function extractJson(content) {
  const trimmed = content.trim();

  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    return trimmed;
  }

  const firstBrace = trimmed.indexOf("{");
  const lastBrace = trimmed.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    throw new Error("Groq response did not contain valid JSON.");
  }

  return trimmed.slice(firstBrace, lastBrace + 1);
}

function sanitizeRecommendations(recommendations) {
  if (!Array.isArray(recommendations)) {
    return [];
  }

  return recommendations
    .map((item) => {
      const matchScore = Number(item.matchScore);
      const reasons = Array.isArray(item.reasons)
        ? item.reasons.filter((reason) => typeof reason === "string")
        : [];

      return {
        programId: String(item.programId || ""),
        matchScore: Number.isFinite(matchScore)
          ? Math.max(0, Math.min(100, Math.round(matchScore)))
          : 0,
        reasons,
      };
    })
    .filter((item) => item.programId);
}

async function rankProgramsWithGroq({ student, programs }) {
  if (!env.groqApiKey) {
    throw new Error("GROQ_API_KEY is not configured.");
  }

  const promptPayload = {
    student: {
      id: String(student._id),
      fullName: student.fullName,
      targetCountries: student.targetCountries || [],
      interestedFields: student.interestedFields || [],
      maxBudgetUsd: student.maxBudgetUsd,
      preferredIntake: student.preferredIntake,
      englishTestScore: student.englishTest?.score || null,
    },
    programs: programs.map((program) => ({
      programId: String(program._id),
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
    })),
  };

  const response = await axios.post(
    `${env.groqBaseUrl}/chat/completions`,
    {
      model: env.groqModel,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "You are a study-abroad recommendation engine. Return ONLY valid JSON with this shape: {\"recommendations\":[{\"programId\":\"string\",\"matchScore\":number,\"reasons\":[\"string\"]}]}. Keep matchScore between 0 and 100 and include at most 5 recommendations.",
        },
        {
          role: "user",
          content: JSON.stringify(promptPayload),
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${env.groqApiKey}`,
        "Content-Type": "application/json",
      },
      timeout: env.groqTimeoutMs,
    },
  );

  const content = response.data?.choices?.[0]?.message?.content || "";
  const parsed = JSON.parse(extractJson(content));

  return sanitizeRecommendations(parsed.recommendations).slice(0, 5);
}

module.exports = {
  rankProgramsWithGroq,
};
