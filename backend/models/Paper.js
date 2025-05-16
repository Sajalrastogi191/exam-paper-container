const mongoose = require("mongoose")

const PaperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  semester: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: "",
  },
  fileUrl: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Add text index for search functionality
PaperSchema.index({ title: "text", subject: "text", description: "text" })

module.exports = mongoose.model("Paper", PaperSchema)
