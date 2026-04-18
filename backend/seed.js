require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Student = require("./src/models/Student");
const University = require("./src/models/University");
const Program = require("./src/models/Program");
const Application = require("./src/models/Application");

const env = require("./src/config/env");

async function seed() {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");

    console.log("Clearing existing data...");
    await Promise.all([
      Student.deleteMany({}),
      University.deleteMany({}),
      Program.deleteMany({}),
      Application.deleteMany({}),
    ]);

    console.log("Creating Admin User...");
    const admin = await Student.create({
      fullName: "Platform Admin",
      email: "admin@stepabroad.com",
      password: "password123",
      role: "admin",
      profileComplete: true,
    });

    console.log("Creating Mock Students...");
    const studentsData = [
      { fullName: "Emma Watson", email: "emma@example.com", password: "password123", targetCountries: ["UK"], interestedFields: ["Computer Science"], profileComplete: true },
      { fullName: "Liam Smith", email: "liam@example.com", password: "password123", targetCountries: ["Canada"], interestedFields: ["Data Science"], profileComplete: true },
      { fullName: "Sophia Chen", email: "sophia@example.com", password: "password123", targetCountries: ["Australia"], interestedFields: ["Business"], profileComplete: true },
      { fullName: "Noah Patel", email: "noah@example.com", password: "password123", targetCountries: ["Canada"], interestedFields: ["Engineering"], profileComplete: true },
      { fullName: "Olivia Davis", email: "olivia@example.com", password: "password123", targetCountries: ["UAE"], interestedFields: ["Arts"], profileComplete: true },
    ];
    const students = await Student.insertMany(studentsData);

    console.log("Creating Universities...");
    const uniData = [
      { name: "University College London", city: "London", country: "UK", description: "A leading global university.", qsRanking: 8, popularScore: 95, partnerType: "direct", scholarshipAvailable: true },
      { name: "University of British Columbia", city: "Vancouver", country: "Canada", description: "Excellence in research.", qsRanking: 34, popularScore: 90, partnerType: "institution-partner", scholarshipAvailable: true },
      { name: "Monash University", city: "Melbourne", country: "Australia", description: "Top ranking in Australia.", qsRanking: 42, popularScore: 88, partnerType: "direct", scholarshipAvailable: false },
      { name: "University of Waterloo", city: "Waterloo", country: "Canada", description: "Innovation and engineering.", qsRanking: 112, popularScore: 85, partnerType: "direct", scholarshipAvailable: true },
      { name: "American University in Dubai", city: "Dubai", country: "UAE", description: "Premier business education.", qsRanking: 601, popularScore: 70, partnerType: "institution-partner", scholarshipAvailable: false },
    ];
    const universities = await University.insertMany(uniData);

    console.log("Creating Programs...");
    const progData = [
      { title: "MSc Computer Science", field: "Computer Science", degreeLevel: "master", tuitionFeeUsd: 25000, intakes: ["Sep"], durationMonths: 12, university: universities[0]._id, universityName: universities[0].name, country: universities[0].country, city: universities[0].city },
      { title: "Master of Data Science", field: "Data Science", degreeLevel: "master", tuitionFeeUsd: 20000, intakes: ["Jan", "Sep"], durationMonths: 24, university: universities[1]._id, universityName: universities[1].name, country: universities[1].country, city: universities[1].city },
      { title: "MBA", field: "Business", degreeLevel: "master", tuitionFeeUsd: 40000, intakes: ["Feb", "Sep"], durationMonths: 18, university: universities[2]._id, universityName: universities[2].name, country: universities[2].country, city: universities[2].city },
      { title: "BSc Engineering", field: "Engineering", degreeLevel: "bachelor", tuitionFeeUsd: 30000, intakes: ["Sep"], durationMonths: 48, university: universities[3]._id, universityName: universities[3].name, country: universities[3].country, city: universities[3].city },
      { title: "BA Business", field: "Arts", degreeLevel: "bachelor", tuitionFeeUsd: 15000, intakes: ["Sep"], durationMonths: 36, university: universities[4]._id, universityName: universities[4].name, country: universities[4].country, city: universities[4].city },
    ];
    const programs = await Program.insertMany(progData);

    console.log("Creating Applications...");
    const appData = [
      { student: students[0]._id, program: programs[0]._id, university: universities[0]._id, destinationCountry: universities[0].country, intake: "Sep 2026", status: "under-review", timeline: [{ status: "draft", note: "Created" }, { status: "submitted", note: "Submitted" }, { status: "under-review", note: "Reviewing" }] },
      { student: students[1]._id, program: programs[1]._id, university: universities[1]._id, destinationCountry: universities[1].country, intake: "Jan 2027", status: "submitted", timeline: [{ status: "draft", note: "Created" }, { status: "submitted", note: "Submitted" }] },
      { student: students[2]._id, program: programs[2]._id, university: universities[2]._id, destinationCountry: universities[2].country, intake: "Sep 2026", status: "offer-received", timeline: [{ status: "submitted", note: "Submitted" }, { status: "offer-received", note: "Offer" }] },
      { student: students[3]._id, program: programs[3]._id, university: universities[3]._id, destinationCountry: universities[3].country, intake: "Sep 2026", status: "enrolled", timeline: [{ status: "offer-received", note: "Offer" }, { status: "enrolled", note: "Enrolled" }] },
      { student: students[4]._id, program: programs[4]._id, university: universities[4]._id, destinationCountry: universities[4].country, intake: "Sep 2026", status: "rejected", timeline: [{ status: "submitted", note: "Submitted" }, { status: "rejected", note: "Rejected" }] },
    ];
    await Application.insertMany(appData);

    console.log("✅ Seed completed successfully!");
    console.log("Admin login -> Email: admin@stepabroad.com | Password: password123");
    
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
}

seed();
