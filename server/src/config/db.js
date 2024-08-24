const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/lms-api");
    await mongoose.connect(
      "mongodb+srv://ajay198961129:E1jv5q42q1vI6tom@cluster0.hm3aw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
