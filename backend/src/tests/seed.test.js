const { assertSafeToSeed, seed } = require("../scripts/seed");

describe("seed safety", () => {
  it("blocks production seeding", () => {
    expect(() => assertSafeToSeed({ NODE_ENV: "production" })).toThrow(
      "Cannot seed in production!",
    );
  });

  it("fails before connecting to the database in production", async () => {
    const connect = jest.fn();

    await expect(
      seed({
        runtimeEnv: { NODE_ENV: "production" },
        connect,
      }),
    ).rejects.toThrow("Cannot seed in production!");

    expect(connect).not.toHaveBeenCalled();
  });
});
