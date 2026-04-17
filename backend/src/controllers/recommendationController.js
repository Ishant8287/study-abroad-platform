const asyncHandler = require("../utils/asyncHandler");
const HttpError = require("../utils/httpError");
const {
  buildProgramRecommendations,
  getPreferredRecommendationEngine,
} = require("../services/recommendationService");
const cacheService = require("../services/cacheService");

const getRecommendations = asyncHandler(async (req, res) => {
  const { studentId } = req.params;

  // Students may only request their own recommendations
  if (
    req.user.role === "student" &&
    req.user._id.toString() !== studentId
  ) {
    throw new HttpError(403, "You are not authorised to view these recommendations.");
  }

  const preferredEngine = getPreferredRecommendationEngine();
  const cacheKey = `recommendations-${studentId}-${preferredEngine}`;
  const cached = await cacheService.get(cacheKey);

  if (cached) {
    return res.json({
      success: true,
      ...cached,
      meta: { ...cached.meta, cache: "hit" },
    });
  }

  const payload = await buildProgramRecommendations(studentId);
  await cacheService.set(cacheKey, payload);

  res.json({
    success: true,
    ...payload,
    meta: { ...payload.meta, cache: "miss" },
  });
});

module.exports = { getRecommendations };
