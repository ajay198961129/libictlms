const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Content Schema
const contentSchema = new Schema({
  academyId: { type: Number, default: 1 },
  title: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  chapter: { type: mongoose.Schema.Types.ObjectId, ref: "Chapter" },
  filename: { type: String, required: true },
  contentType: { type: String },
  path: { type: String, required: true },
  size: { type: Number, required: true },
});

const Content = mongoose.model("Content", contentSchema);
module.exports = {
  Content,
};
