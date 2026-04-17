const env = require("../config/env");
const Redis = require("ioredis");

class MemoryCacheService {
  constructor() {
    this.store = new Map();
  }

  async get(key) {
    const record = this.store.get(key);

    if (!record) {
      return null;
    }

    if (record.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }

    return record.value;
  }

  async set(key, value, ttlSeconds = env.cacheTtlSeconds) {
    this.store.set(key, {
      value,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }

  async delete(key) {
    this.store.delete(key);
  }
}

class RedisCacheService {
  constructor(redisUrl) {
    this.client = new Redis(redisUrl, {
      enableOfflineQueue: false,
      lazyConnect: true,
      maxRetriesPerRequest: 1,
    });
    this.connected = false;
  }

  async connect() {
    try {
      await this.client.connect();
      this.connected = true;
      return true;
    } catch (error) {
      this.connected = false;
      console.warn("Redis unavailable. Falling back to in-memory cache.", error.message);
      return false;
    }
  }

  async get(key) {
    if (!this.connected) {
      return null;
    }

    try {
      const value = await this.client.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.warn("Redis get failed. Serving from in-memory cache.", error.message);
      return null;
    }
  }

  async set(key, value, ttlSeconds = env.cacheTtlSeconds) {
    if (!this.connected) {
      return;
    }

    try {
      await this.client.set(key, JSON.stringify(value), "EX", ttlSeconds);
    } catch (error) {
      console.warn("Redis set failed. Continuing with in-memory cache.", error.message);
    }
  }

  async delete(key) {
    if (!this.connected) {
      return;
    }

    try {
      await this.client.del(key);
    } catch (error) {
      console.warn("Redis delete failed. Continuing with in-memory cache.", error.message);
    }
  }

  async disconnect() {
    if (this.client.status !== "end") {
      await this.client.quit();
    }

    this.connected = false;
  }
}

class CacheService {
  constructor() {
    this.memory = new MemoryCacheService();
    this.redis = null;
    this.provider = "memory";
  }

  async initialize() {
    const wantsRedis = env.cacheProvider.toLowerCase() === "redis";
    if (!wantsRedis || !env.redisUrl) {
      this.provider = "memory";
      return;
    }

    this.redis = new RedisCacheService(env.redisUrl);
    const connected = await this.redis.connect();
    this.provider = connected ? "redis" : "memory";
  }

  getProvider() {
    return this.provider;
  }

  async get(key) {
    if (this.provider === "redis" && this.redis) {
      const redisValue = await this.redis.get(key);
      if (redisValue !== null) {
        return redisValue;
      }
    }

    return this.memory.get(key);
  }

  async set(key, value, ttlSeconds = env.cacheTtlSeconds) {
    await this.memory.set(key, value, ttlSeconds);

    if (this.provider === "redis" && this.redis) {
      await this.redis.set(key, value, ttlSeconds);
    }
  }

  async delete(key) {
    await this.memory.delete(key);

    if (this.provider === "redis" && this.redis) {
      await this.redis.delete(key);
    }
  }

  async shutdown() {
    if (this.redis) {
      await this.redis.disconnect();
    }
  }
}

module.exports = new CacheService();
