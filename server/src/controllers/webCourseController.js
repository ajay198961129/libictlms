const { Course, Content } = require("../models/course");
const MyCourse = require("../models/myCourse");

// @access  Public
const getCourses = async (req, res) => {
  const { academyId } = req.body;

  const courses = await Course.find({ academyId: academyId })
    .populate("category")
    .exec();

  if (courses) {
    res.json(courses);
  } else {
    res.status(404).json({ message: "Courses not found" });
  }
};

const getCourseDetails = async (req, res) => {
  const { academyId, courseId } = req.params;

  const courses = await Course.findOne({ academyId: academyId, _id: courseId })
    .populate("category")
    .exec();

  if (courses) {
    res.json(courses);
  } else {
    res.status(404).json({ message: "Courses not found" });
  }
};

const getContent = async (req, res) => {
  const { academyId, courseId } = req.params;
  const content = await Content.find({ academyId: academyId, course: courseId })
    .populate(["course", "chapter"])
    .exec();

  if (content) {
    res.json(content);
  } else {
    res.status(404).json({ message: "Content not found" });
  }
};

const getOnlyContent = async (req, res) => {
  const { academyId, courseId } = req.params;
  const content = await Content.find({ academyId: academyId, course: courseId })
    .populate(["course", "chapter"])
    .exec();

  if (content) {
    res.json(content);
  } else {
    res.status(404).json({ message: "Content not found" });
  }
};

const getMyCourse = async (req, res) => {
  const { academyId, userId } = req.body;
  const myCourse = await MyCourse.find({ academyId: academyId, userId: userId })
    .populate({
      path: "courseId", // Populate the 'books' field in Author
      populate: {
        path: "category", // In 'books', also populate 'publisher'
      },
    })
    .exec();

  if (myCourse) {
    res.json(myCourse);
  } else {
    res.status(404).json({ message: "Content not found" });
  }
};

const getPurchased = async (req, res) => {
  const { academyId, userId, courseId } = req.params;
  const isPurchased = await MyCourse.findOne({
    academyId: academyId,
    userId: userId,
    courseId: courseId,
  });

  if (isPurchased) {
    res.json({
      isPurchased: true,
    });
  } else {
    res.json({ isPurchased: false });
  }
};

const getContentSingleData = async (req, res) => {
  const { academyId, contentId } = req.params;
  const singelContent = await Content.findOne({
    academyId: academyId,
    _id: contentId,
  });

  if (singelContent) {
    res.status(200).json({ singelContent });
  } else {
    res.json({ msg: "Content Not Found" });
  }
};

const addMyCourse = async (req, res) => {
  const { academyId, userId, courseId } = req.body;
  const getCourse = await MyCourse.findOne({
    academyId: academyId,
    userId: userId,
    courseId: courseId,
  });

  if (!getCourse) {
    const myCourse = await MyCourse.create({ academyId, courseId, userId });
    if (myCourse) {
      res.json({
        message: "Order Successfully Placed!",
      });
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } else {
    res.json({
      message: "Course already added",
    });
  }
};

module.exports = {
  getPurchased,
  getCourses,
  getOnlyContent,
  getContent,
  getCourseDetails,
  getContentSingleData,
  getMyCourse,
  addMyCourse,
};
