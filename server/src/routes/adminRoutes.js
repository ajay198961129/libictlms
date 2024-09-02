const express = require("express");

const courseController = require("../controllers/adminController");

const adminRoutes = express.Router();

adminRoutes.post("/login", courseController.adminAuthUser);
adminRoutes.post("/register", courseController.registerUser);
adminRoutes.post("/users", courseController.getUsers);
adminRoutes.post("/categories", courseController.getCategory);
adminRoutes.post("/chapters", courseController.getChapter);
adminRoutes.post("/contents", courseController.getContent);
adminRoutes.post("/courses", courseController.getCourses);
adminRoutes.get("/institutes", courseController.getInstitutes);
adminRoutes.post("/add-institute", courseController.addInstitute);
adminRoutes.post("/add-chapter", courseController.addChapter);
adminRoutes.post("/add-category", courseController.addCategory);
adminRoutes.post("/add-course", courseController.addCourse);
adminRoutes.post("/add-content", courseController.addContent);
adminRoutes.delete("/delete-category/:id", courseController.deleteCategory);
adminRoutes.delete("/delete-chapter/:id", courseController.deleteChapter);
adminRoutes.delete("/delete-course/:id", courseController.deleteCourse);
adminRoutes.delete("/delete-content/:id", courseController.deleteContent);

module.exports = adminRoutes;
