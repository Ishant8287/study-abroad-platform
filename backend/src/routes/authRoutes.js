const express = require("express");
const rateLimit = require("express-rate-limit");

const { login, me, register, refresh, logout, updateProfile } = require("../controllers/authController");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// Brute-force protection: 10 login attempts per 15 min window per IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Too many login attempts. Please try again after 15 minutes." },
});

// Spam protection: 5 registrations per 15 min window per IP
const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Too many accounts created. Please try again after 15 minutes." },
});

// Refresh token abuse protection: 30 per 15 min window per IP
const refreshLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Too many refresh requests. Please try again later." },
});

router.post("/register", registerLimiter, register);
router.post("/login", loginLimiter, login);
router.post("/refresh", refreshLimiter, refresh);
router.post("/logout", requireAuth, logout);
router.get("/me", requireAuth, me);
router.patch("/profile", requireAuth, updateProfile);

module.exports = router;
