const connectDatabase = require("../config/database");
const Application = require("../models/Application");
const Program = require("../models/Program");
const Student = require("../models/Student");
const University = require("../models/University");
const seedData = require("../data/seedData");

function assertSafeToSeed(runtimeEnv = process.env) {
  if (runtimeEnv.NODE_ENV === "production") {
    throw new Error("Cannot seed in production!");
  }
}

async function seed(options = {}) {
  const {
    runtimeEnv = process.env,
    connect = connectDatabase,
    applicationModel = Application,
    programModel = Program,
    studentModel = Student,
    universityModel = University,
    data = seedData,
  } = options;

  assertSafeToSeed(runtimeEnv);

  await connect();

  await Promise.all([
    applicationModel.deleteMany({}),
    programModel.deleteMany({}),
    studentModel.deleteMany({}),
    universityModel.deleteMany({}),
  ]);

  const universities = await universityModel.insertMany(data.universities);

  const universityByName = universities.reduce((accumulator, university) => {
    accumulator[university.name] = university;
    return accumulator;
  }, {});

  const programs = await programModel.insertMany(
    data.programs.map((program) => ({
      ...program,
      university: universityByName[program.universityName]._id,
    })),
  );

  const programByTitle = programs.reduce((accumulator, program) => {
    accumulator[program.title] = program;
    return accumulator;
  }, {});

  const students = await studentModel.create(data.students);

  const studentByEmail = students.reduce((accumulator, student) => {
    accumulator[student.email] = student;
    return accumulator;
  }, {});

  const applications = data.applications.map((application) => {
    const student = studentByEmail[application.studentEmail];
    const program = programByTitle[application.programTitle];
    const university = universityByName[program.universityName];

    return {
      student: student._id,
      program: program._id,
      university: university._id,
      destinationCountry: program.country,
      intake: application.intake,
      status: application.status,
      timeline: application.timeline,
    };
  });

  await applicationModel.insertMany(applications);

  console.log("Seed completed successfully.");
}

if (require.main === module) {
  seed()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seed failed", error);
      process.exit(1);
    });
}

module.exports = {
  assertSafeToSeed,
  seed,
};
