const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors({
origin:{"https://libictlms-api.vercel.app"},
methods:["POST","GET"],
credentials:true
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
