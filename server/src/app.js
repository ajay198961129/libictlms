const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const cors = require("cors");

// Middleware
app.use(express.json());
// Connect to MongoDB
connectDB();

// app.use(cors());

// app.use(
//   cors({
//     origin: ["https://www.libict.org"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

// app.options(
//   "*",
//   cors({
//     origin: ["https://www.libict.org"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: ["https://www.libict.org"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.options(
  "*",
  cors({
    origin: ["https://www.libict.org"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/public/uploads/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, "../public/uploads", filename);
  res.sendFile(filepath);
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
