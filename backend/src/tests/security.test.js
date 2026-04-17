const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const env = require("../config/env");
const Application = require("../models/Application");
const Program = require("../models/Program");
const Student = require("../models/Student");
const University = require("../models/University");

jest.setTimeout(30000);

describe("Security guards", () => {
  const runId = new mongoose.Types.ObjectId().toString();
  const studentEmail = `security-student-${runId}@test.com`;
  const counselorEmail = `security-counselor-${runId}@test.com`;

  let studentId;
  let studentToken;
  let counselorId;
  let counselorToken;
  let applicationId;
  let programId;
  let universityId;
  let program;

  beforeAll(async () => {
    await mongoose.connect(env.mongoUri, {
      serverSelectionTimeoutMS: 20000,
    });

    const university = await University.create({
      name: `Security Test University ${runId}`,
      country: "Canada",
      city: "Toronto",
      partnerType: "direct",
      qsRanking: 99,
      scholarshipAvailable: true,
      popularScore: 75,
      tags: ["security-test"],
      websiteUrl: "https://example.edu",
    });

    universityId = university._id.toString();

    program = await Program.create({
      university: university._id,
      universityName: university.name,
      country: university.country,
      city: university.city,
      title: `Security Test Program ${runId}`,
      field: "Computer Science",
      degreeLevel: "master",
      tuitionFeeUsd: 25000,
      intakes: ["September"],
      durationMonths: 12,
      minimumIelts: 6.5,
      scholarshipAvailable: true,
      stem: true,
    });

    programId = program._id.toString();

    const studentRes = await request(app).post("/api/auth/register").send({
      fullName: "Security Student",
      email: studentEmail,
      password: "Test1234!",
    });

    studentId = studentRes.body.data.user.id;
    studentToken = studentRes.body.data.token;

    await Student.findByIdAndUpdate(studentId, {
      targetCountries: [program.country],
      interestedFields: [program.field],
      preferredIntake: program.intakes[0] || "September",
      maxBudgetUsd: program.tuitionFeeUsd + 1000,
      englishTest: {
        exam: "IELTS",
        score: program.minimumIelts || 6,
      },
      profileComplete: true,
    });

    const counselorRes = await request(app).post("/api/auth/register").send({
      fullName: "Security Counselor",
      email: counselorEmail,
      password: "Test1234!",
      role: "counselor",
    });

    counselorId = counselorRes.body.data.user.id;
    counselorToken = counselorRes.body.data.token;

    const application = await Application.create({
      student: studentId,
      program: programId,
      university: program.university,
      destinationCountry: program.country,
      intake: program.intakes[0] || "September",
      status: "submitted",
      timeline: [
        { status: "draft", note: "Application created for security test." },
        { status: "submitted", note: "Student submitted the application." },
      ],
    });

    applicationId = application._id.toString();
  });

  afterAll(async () => {
    const studentIds = [studentId, counselorId].filter(Boolean);

    if (studentIds.length) {
      await Application.deleteMany({
        student: { $in: studentIds },
      });
      await Student.deleteMany({
        _id: { $in: studentIds },
      });
    }

    if (programId) {
      await Program.deleteOne({ _id: programId });
    }

    if (universityId) {
      await University.deleteOne({ _id: universityId });
    }

    await mongoose.disconnect();
  });

  it("should reject counselor status updates without explicit assignment", async () => {
    const res = await request(app)
      .patch(`/api/applications/${applicationId}/status`)
      .set("Authorization", `Bearer ${counselorToken}`)
      .send({ status: "under-review" });

    expect(res.statusCode).toBe(403);
    expect(res.body.message).toMatch(/without explicit assignment/i);

    const application = await Application.findById(applicationId).lean();
    expect(application.status).toBe("submitted");
  });

  it("should reject invalid application ids with a 400", async () => {
    const res = await request(app)
      .patch("/api/applications/not-an-object-id/status")
      .set("Authorization", `Bearer ${studentToken}`)
      .send({ status: "submitted" });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Invalid application id.");
  });

  it("should return own recommendations from /me", async () => {
    const res = await request(app)
      .get("/api/recommendations/me")
      .set("Authorization", `Bearer ${studentToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.student.fullName).toBe("Security Student");
  });

  it("should reject invalid recommendation ids with a 400", async () => {
    const res = await request(app)
      .get("/api/recommendations/not-an-object-id")
      .set("Authorization", `Bearer ${studentToken}`);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Invalid studentId.");
  });
});
