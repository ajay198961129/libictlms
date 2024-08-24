const { Course, Content } = require("../models/course");
const MyCourse = require("../models/myCourse");
const multer = require("multer");
const path = require("path");

// @access  Public
const addContent = async (req, res) => {
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "uploads/");
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + path.extname(file.originalname));
  //   },
  // });

  // const upload = multer({ storage: storage });
  // upload.single("file");
  // const { filename, contentType, path, size } = req.file;
  const { academyId, title, courseId, chapterId } = req.body;

  res.status(200).json({
    academyId: academyId,
    title: title,
    courseId: courseId,
    chapterId: chapterId,
    filename: filename,
    contentType: contentType,
    path: path,
    size: size,
  });

  // const file = req.file;

  // if (!file) {
  //   return res.status(400).json({ message: "No file uploaded" });
  // }

  // const content = await Content.save({
  //   academyId: academyId,
  //   title: title,
  //   course: courseId,
  //   chapter: chapterId,
  //   filename: filename,
  //   contentType: contentType,
  //   path: path,
  //   size: size,
  // });

  // if (content) {
  //   res.json(content);
  //   res.status(200).json({ message: "Content Uploaded!" });
  // } else {
  //   res.status(404).json({ message: "Content Not Uploaded!" });
  // }
};

module.exports = {
  addContent,
};
