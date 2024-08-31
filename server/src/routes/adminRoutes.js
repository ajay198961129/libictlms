const express = require("express");
const {
  adminAuthUser,
  registerUser,
  getUsers,
  getCategory,
  getChapter,
  getContent,
  getCourses,
  getInstitutes,
  addInstitute,
  addChapter,
  addCategory,
  addCourse,
} = require("../controllers/adminController");

const courseController = require("../controllers/adminController");

const adminRoutes = express.Router();

adminRoutes.post("/login", adminAuthUser);
adminRoutes.post("/register", registerUser);
adminRoutes.post("/users", getUsers);
adminRoutes.post("/categories", getCategory);
adminRoutes.post("/chapters", getChapter);
adminRoutes.post("/contents", getContent);
adminRoutes.post("/courses", getCourses);
adminRoutes.get("/institutes", getInstitutes);
adminRoutes.post("/add-institute", addInstitute);
adminRoutes.post("/add-chapter", addChapter);
adminRoutes.post("/add-category", addCategory);
adminRoutes.post("/add-course", courseController.addCourse);
adminRoutes.post("/add-content", courseController.addContent);

module.exports = adminRoutes;
