const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  academyId: { type: Number, default: 1 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
});

const MyCourse = mongoose.model("MyCourse", orderSchema);

module.exports = MyCourse;
