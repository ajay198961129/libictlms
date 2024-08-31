const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isBlock: {
    type: String,
    default: 0,
  },
});

const Institutes = mongoose.model("Institute", dataSchema);

module.exports = Institutes;
