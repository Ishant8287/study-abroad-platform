const express = require("express");
const { listStudents } = require("../controllers/adminController");
const { requireAuth, requireRole } = require("../middleware/auth");

const router = express.Router();

// All routes here require the user to be logged in and have the 'admin' role
router.use(requireAuth);
router.use(requireRole("admin"));

router.get("/students", listStudents);

module.exports = router;
