const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Category Schema
const categorySchema = new Schema({
  academyId: { type: Number, default: 1 },
  name: { type: String, required: true, unique: true },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
