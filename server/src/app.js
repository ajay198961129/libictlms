const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");
const app = express();
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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

// const allowedOrigins = [
//   "https://www.libict.org",
//   "http://localhost:3000",
//   "https://libictlms-frontend.vercel.app",
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

app.use(
  cors({
    origin: "https://www.libict.org",
  })
);

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/uploads/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, "uploads", filename);
  res.sendFile(filepath);
});
// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
