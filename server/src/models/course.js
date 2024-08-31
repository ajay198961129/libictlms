const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Course Schema
const courseSchema = new Schema(
  {
    academyId: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: {
      type: String,
      required: true,
    },
    instructor: { type: String, required: true },
    description: { type: String, required: true },
    whyCourse: { type: String, required: true },
    certification: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

//Category Schema
const categorySchema = new Schema(
  {
    academyId: { type: Number, default: 1 },
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

//Content Schema
const contentSchema = new Schema(
  {
    academyId: { type: Number, default: 1 },
    title: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    chapter: { type: mongoose.Schema.Types.ObjectId, ref: "Chapter" },
    fileUrl: { type: String, required: true },
    fileName: { type: String, required: true },
  },
  { timestamps: true }
);

//Chapter Schema
const chapterSchema = new Schema(
  {
    academyId: { type: Number, default: 1 },
    title: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Chapter = mongoose.model("Chapter", chapterSchema);
const Content = mongoose.model("Content", contentSchema);
const Category = mongoose.model("Category", categorySchema);
const Course = mongoose.model("Course", courseSchema);
module.exports = {
  Chapter,
  Content,
  Category,
  Course,
};
