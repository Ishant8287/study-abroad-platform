const Student = require("../models/Student");
const asyncHandler = require("../utils/asyncHandler");

const listStudents = asyncHandler(async (req, res) => {
  const { search, country, statusFilter, page = 1, limit = 10 } = req.query;

  const filters = { role: "student" }; // Only fetch students, not other admins

  if (search) {
    filters.$or = [
      { fullName: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  if (country && country !== "All Countries") {
    filters.targetCountries = country;
  }

  if (statusFilter && statusFilter !== "All Statuses") {
    filters.profileComplete = statusFilter === "Complete";
  }

  const pageNumber = Math.max(Number(page), 1);
  const pageSize = Math.min(Math.max(Number(limit), 1), 50);

  const [students, total] = await Promise.all([
    Student.find(filters)
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .select("-password")
      .lean(),
    Student.countDocuments(filters),
  ]);

  res.json({
    success: true,
    data: students,
    meta: {
      page: pageNumber,
      limit: pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  });
});

module.exports = {
  listStudents
};
