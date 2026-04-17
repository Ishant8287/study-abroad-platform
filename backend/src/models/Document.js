const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true,
      index: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
      index: true,
    },
    docType: {
      type: String,
      required: true,
      enum: ["sop", "transcript", "passport", "english-test", "other"],
    },
    originalName: {
      type: String,
      required: true,
    },
    cloudinaryUrl: {
      type: String,
      required: true,
    },
    cloudinaryPublicId: {
      type: String,
      required: true,
    },
    sizeBytes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate doc types per application (e.g. only one SOP per application)
documentSchema.index({ application: 1, docType: 1 }, { unique: true });

module.exports = mongoose.model("Document", documentSchema);
