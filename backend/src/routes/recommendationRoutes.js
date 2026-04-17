const express = require("express");
const {
  getOwnRecommendations,
  getRecommendations,
} = require("../controllers/recommendationController");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/me", requireAuth, getOwnRecommendations);
router.get("/:studentId", requireAuth, getRecommendations);

module.exports = router;
