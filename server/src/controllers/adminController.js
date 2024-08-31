const User = require("../models/user");
const multer = require("multer");
const admin = require("../models/admin");
const generateToken = require("../utils/generateToken");
const { Course, Content, Chapter, Category } = require("../models/course");
const Institutes = require("../models/institutes");

// @access  Public
const adminAuthUser = async (req, res) => {
  const { email, password } = req.body;

  const adminUser = await admin.findOne({ email });

  if (adminUser && (await adminUser.matchPassword(password))) {
    res.json({
      _id: adminUser._id,
      name: adminUser.name,
      email: adminUser.email,
      token: generateToken(adminUser._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

const registerUser = async (req, res) => {
  const { name, email, password, academyId } = req.body;

  const userExists = await admin.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await admin.create({
    name,
    email,
    password,
    academyId,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      academyId: user.academyId,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

const getUsers = async (req, res) => {
  const { academyId } = req.body;

  const adminUser = await User.find({ academyId: academyId });

  if (adminUser) {
    res.json(adminUser);
  } else {
    res.status(401).json({ message: "server error" });
  }
};

const getCategory = async (req, res) => {
  const { academyId } = req.body;

  const queryData = await Category.find({ academyId: academyId });

  if (queryData) {
    res.json(queryData);
  } else {
    res.status(401).json({ message: "server error" });
  }
};

const getChapter = async (req, res) => {
  const { academyId } = req.body;

  const queryData = await Chapter.find({ academyId: academyId });

  if (queryData) {
    res.json(queryData);
  } else {
    res.status(401).json({ message: "server error" });
  }
};

const getContent = async (req, res) => {
  const { academyId } = req.body;

  const queryData = await Content.find({ academyId: academyId })
    .populate(["course", "chapter"])
    .exec();

  if (queryData) {
    res.json(queryData);
  } else {
    res.status(401).json({ message: "server error" });
  }
};

const getCourses = async (req, res) => {
  const { academyId } = req.body;

  const queryData = await Course.find({ academyId: academyId })
    .populate("category")
    .exec();

  if (queryData) {
    res.json(queryData);
  } else {
    res.status(401).json({ message: "server error" });
  }
};

const getInstitutes = async (req, res) => {
  const queryData = await Institutes.find();

  if (queryData) {
    res.json(queryData);
  } else {
    res.status(401).json({ message: "server error" });
  }
};

const addInstitute = async (req, res) => {
  const { name, email, password } = req.body;

  const instituteExits = await Institutes.findOne({ email });

  if (instituteExits) {
    return res.status(400).json({ message: "Institute already exists" });
  }

  const institute = await Institutes.create({
    name,
    email,
    password,
  });

  if (institute) {
    res.status(201).json({
      _id: institute._id,
      name: institute.name,
      email: institute.email,
      token: generateToken(institute._id),
    });
  } else {
    res.status(400).json({ message: "Invalid Institute data" });
  }
};

const addChapter = async (req, res) => {
  const { title, academyId } = req.body;

  const institute = await Chapter.create({
    title,
    academyId,
  });

  if (institute) {
    res.status(201).json({
      message: "Chapter Successfully Created!",
    });
  } else {
    res.status(400).json({ message: "Invalid Chapter data" });
  }
};

const addCategory = async (req, res) => {
  const { name, academyId } = req.body;

  const category = await Category.create({
    name,
    academyId,
  });

  if (category) {
    res.status(201).json({
      message: "Category Successfully Created!",
    });
  } else {
    res.status(400).json({ message: "Invalid Category data" });
  }
};

const upload = multer({ dest: "src/uploads/" });

const addCourse = async (req, res) => {
  const {
    title,
    academyId,
    price,
    instructor,
    description,
    whyCourse,
    certification,
    category,
  } = req.body;

  const courseImage = req.file;

  if (!courseImage) {
    return res.status(400).json({ message: "Course image is required" });
  }

  const course = await Course.create({
    title,
    academyId,
    price,
    instructor,
    description,
    whyCourse,
    certification,
    category,
    imageUrl: `uploads/${courseImage.filename}`,
  });

  if (course) {
    res.status(201).json({
      message: "Course Successfully Created!",
    });
  } else {
    res.status(400).json({ message: "Invalid Course data" });
  }
};

const addContent = async (req, res) => {
  const { title, academyId, course, chapter } = req.body;

  const contentFile = req.file;

  console.log(req.body);
  console.log(contentFile);

  if (!contentFile) {
    return res.status(400).json({ message: "Content File is required" });
  }

  const content = await Content.create({
    title,
    academyId,
    course,
    chapter,
    fileUrl: `uploads/${contentFile.filename}`,
    fileName: contentFile.filename,
  });

  if (content) {
    res.status(201).json({
      message: "Content Successfully Created!",
    });
  } else {
    res.status(400).json({ message: "Invalid Content data" });
  }
};

module.exports = {
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
  addCourse: [upload.single("courseImage"), addCourse],
  addContent: [upload.single("contentFile"), addContent],
};
