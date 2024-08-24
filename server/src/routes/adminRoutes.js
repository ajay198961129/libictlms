const express = require("express");
const { addContent } = require("../controllers/adminController");

const adminRoutes = express.Router();

adminRoutes.post("/content", addContent);

module.exports = adminRoutes;
