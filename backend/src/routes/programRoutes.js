const express = require("express");

const { getProgramById, listPrograms } = require("../controllers/programController");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/", requireAuth, listPrograms);
router.get("/:id", requireAuth, getProgramById);

module.exports = router;
