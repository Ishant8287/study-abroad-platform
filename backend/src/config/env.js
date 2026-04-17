const dotenv = require("dotenv");

dotenv.config();

function resolveJwtSecret(runtimeEnv, jwtSecret) {
  if (jwtSecret) {
    return jwtSecret;
  }

  if (runtimeEnv === "development" || runtimeEnv === "test") {
    return "dev-secret";
  }

  throw new Error("JWT_SECRET must be set outside development and test.");
}

function buildEnv(source = process.env) {
  const nodeEnv = source.NODE_ENV || "development";

  return {
    cacheProvider: source.CACHE_PROVIDER || "memory",
    cacheTtlSeconds: Number(source.CACHE_TTL_SECONDS) || 300,
    cloudinaryApiKey: source.CLOUDINARY_API_KEY || "",
    cloudinaryApiSecret: source.CLOUDINARY_API_SECRET || "",
    cloudinaryCloudName: source.CLOUDINARY_CLOUD_NAME || "",
    corsOrigin: source.CORS_ORIGIN || "http://localhost:5173",
    groqApiKey: source.GROQ_API_KEY || "",
    groqBaseUrl: source.GROQ_BASE_URL || "https://api.groq.com/openai/v1",
    groqModel: source.GROQ_MODEL || "llama-3.1-8b-instant",
    groqTimeoutMs: Number(source.GROQ_TIMEOUT_MS) || 5000,
    jwtExpiresIn: source.JWT_EXPIRES_IN || "15m",
    jwtSecret: resolveJwtSecret(nodeEnv, source.JWT_SECRET),
    mongoUri:
      source.MONGODB_URI ||
      "mongodb://127.0.0.1:27017/waygood-evaluation",
    nodeEnv,
    port: Number(source.PORT) || 4000,
    redisUrl: source.REDIS_URL || "",
    refreshTokenExpiresIn: source.REFRESH_TOKEN_EXPIRES_IN || "7d",
    refreshTokenSecret: source.REFRESH_TOKEN_SECRET || (nodeEnv === "development" || nodeEnv === "test" ? "dev-refresh-secret" : (() => { throw new Error("REFRESH_TOKEN_SECRET must be set outside development and test."); })()),
    smtpFrom: source.SMTP_FROM || "noreply@studyabroad.com",
    smtpHost: source.SMTP_HOST || "",
    smtpPass: source.SMTP_PASS || "",
    smtpPort: Number(source.SMTP_PORT) || 587,
    smtpUser: source.SMTP_USER || "",
  };
}

module.exports = buildEnv();
module.exports.buildEnv = buildEnv;
module.exports.resolveJwtSecret = resolveJwtSecret;
