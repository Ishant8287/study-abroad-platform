jest.mock("axios", () => ({
  post: jest.fn(),
}));

const axios = require("axios");
const env = require("../config/env");
const { rankProgramsWithGroq } = require("../services/groqService");

describe("groqService", () => {
  const originalGroqApiKey = env.groqApiKey;

  beforeEach(() => {
    env.groqApiKey = "test-key";
    axios.post.mockReset();
  });

  afterAll(() => {
    env.groqApiKey = originalGroqApiKey;
  });

  it("sanitizes timeout errors", async () => {
    axios.post.mockRejectedValue({
      code: "ECONNABORTED",
      message: "timeout of 5000ms exceeded",
    });

    await expect(
      rankProgramsWithGroq({
        student: { _id: "student-1", fullName: "Student" },
        programs: [],
      }),
    ).rejects.toThrow("Groq recommendation request timed out.");
  });

  it("sanitizes non-timeout transport errors", async () => {
    axios.post.mockRejectedValue(new Error("socket hang up"));

    await expect(
      rankProgramsWithGroq({
        student: { _id: "student-1", fullName: "Student" },
        programs: [],
      }),
    ).rejects.toThrow("Groq recommendation request failed.");
  });
});
