const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Chapter Schema
const chapterSchema = new Schema({
  academyId: { type: Number, default: 1 },
  title: { type: String, required: true, unique: true },
});

const Chapter = mongoose.model("Chapter", chapterSchema);
module.exports = Chapter;
