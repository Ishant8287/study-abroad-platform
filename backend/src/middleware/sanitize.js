/**
 * Input sanitization middleware.
 *
 * Strips HTML / script tags from string fields in req.body to prevent
 * stored-XSS attacks (e.g. via fullName, note, intake, etc.).
 */

/**
 * Recursively sanitise all string values inside an object.
 * - Strips any HTML / XML tags.
 * - Trims leading / trailing whitespace.
 */
function stripTags(value) {
  if (typeof value === "string") {
    return value.replace(/<[^>]*>/g, "").trim();
  }

  if (Array.isArray(value)) {
    return value.map(stripTags);
  }

  if (value !== null && typeof value === "object") {
    const cleaned = {};
    for (const key of Object.keys(value)) {
      cleaned[key] = stripTags(value[key]);
    }
    return cleaned;
  }

  return value;
}

/**
 * Express middleware that sanitises req.body in-place.
 */
function sanitizeBody(req, _res, next) {
  if (req.body && typeof req.body === "object") {
    req.body = stripTags(req.body);
  }
  next();
}

module.exports = sanitizeBody;
