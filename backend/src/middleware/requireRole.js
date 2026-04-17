const HttpError = require("../utils/httpError");

/**
 * Role-based access control middleware.
 *
 * Usage:
 *   router.get("/admin-only", requireAuth, requireRole("admin"), handler)
 *   router.get("/staff", requireAuth, requireRole("admin", "counselor"), handler)
 *
 * Must be placed AFTER requireAuth so that req.user is populated.
 */
function requireRole(...roles) {
  return (req, _res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new HttpError(403, "Insufficient permissions.");
    }
    next();
  };
}

module.exports = requireRole;
