const { CacheService } = require("../services/cacheService");

describe("CacheService", () => {
  it("hydrates memory from Redis hits using the remaining TTL", async () => {
    const cacheService = new CacheService();
    const value = { programs: [1, 2, 3] };

    cacheService.provider = "redis";
    cacheService.redis = {
      getRecord: jest.fn().mockResolvedValue({
        value,
        ttlSeconds: 42,
      }),
      set: jest.fn(),
    };
    cacheService.memory = {
      get: jest.fn(),
      getRecord: jest.fn(),
      set: jest.fn(),
    };

    await expect(cacheService.get("programs")).resolves.toEqual(value);

    expect(cacheService.redis.getRecord).toHaveBeenCalledWith("programs");
    expect(cacheService.memory.set).toHaveBeenCalledWith("programs", value, 42);
    expect(cacheService.memory.getRecord).not.toHaveBeenCalled();
  });

  it("rehydrates Redis from memory fallback using the remaining TTL", async () => {
    const cacheService = new CacheService();
    const value = { overview: true };

    cacheService.provider = "redis";
    cacheService.redis = {
      getRecord: jest.fn().mockResolvedValue(null),
      set: jest.fn(),
    };
    cacheService.memory = {
      get: jest.fn(),
      getRecord: jest.fn().mockResolvedValue({
        value,
        ttlSeconds: 9,
      }),
      set: jest.fn(),
    };

    await expect(cacheService.get("dashboard-overview")).resolves.toEqual(value);

    expect(cacheService.redis.getRecord).toHaveBeenCalledWith("dashboard-overview");
    expect(cacheService.memory.getRecord).toHaveBeenCalledWith("dashboard-overview");
    expect(cacheService.redis.set).toHaveBeenCalledWith("dashboard-overview", value, 9);
  });

  it("returns null when neither Redis nor memory has the key", async () => {
    const cacheService = new CacheService();

    cacheService.provider = "redis";
    cacheService.redis = {
      getRecord: jest.fn().mockResolvedValue(null),
      set: jest.fn(),
    };
    cacheService.memory = {
      get: jest.fn().mockResolvedValue(null),
      getRecord: jest.fn().mockResolvedValue(null),
      set: jest.fn(),
    };

    await expect(cacheService.get("missing")).resolves.toBeNull();
    expect(cacheService.redis.set).not.toHaveBeenCalled();
  });
});
