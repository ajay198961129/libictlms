const express = require("express");
const {
  registerUser,
  authUser,
  getUserProfile,
} = require("../controllers/userController");
const protect = require("../middleware/auth");
const {
  getCourses,
  getContent,
  getCourseDetails,
  getMyCourse,
  addMyCourse,
  getPurchased,
  getOnlyContent,
  getContentSingleData,
} = require("../controllers/webCourseController");

const router = express.Router();
router.post("/signup", registerUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.post("/courses", getCourses);
router.post("/my-course", getMyCourse);
router.get("/my-purchased/:academyId/:userId/:courseId", getPurchased);
router.post("/my-course", addMyCourse);
router.get("/course/:academyId/:courseId", getCourseDetails);
router.get("/content/:academyId/:courseId", getContent);
router.get("/player/:academyId/:courseId", getOnlyContent);
router.get("/player-content/:academyId/:contentId", getContentSingleData);

module.exports = router;
