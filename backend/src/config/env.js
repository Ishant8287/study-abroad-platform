const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  cacheProvider: process.env.CACHE_PROVIDER || "memory",
  cacheTtlSeconds: Number(process.env.CACHE_TTL_SECONDS) || 300,
  groqApiKey: process.env.GROQ_API_KEY || "",
  groqBaseUrl: process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1",
  groqModel: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
  groqTimeoutMs: Number(process.env.GROQ_TIMEOUT_MS) || 5000,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
  jwtSecret: process.env.JWT_SECRET || "dev-secret",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/waygood-evaluation",
  port: Number(process.env.PORT) || 4000,
  redisUrl: process.env.REDIS_URL || "",
};
