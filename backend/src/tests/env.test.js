describe("env config", () => {
  const { buildEnv } = require("../config/env");

  it("falls back to the dev secret in test", () => {
    const env = buildEnv({ NODE_ENV: "test" });

    expect(env.jwtSecret).toBe("dev-secret");
  });

  it("throws when JWT_SECRET is missing in production", () => {
    expect(() => buildEnv({ NODE_ENV: "production" })).toThrow(
      "JWT_SECRET must be set outside development and test.",
    );
  });
});
