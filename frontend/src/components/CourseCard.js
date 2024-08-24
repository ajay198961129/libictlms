import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import { academyId } from "../api/config";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.imageUrl} alt={course.title} />
      <div className="course-info">
        <h2>{course.title}</h2>
        <p className="course-instructor">Taught by {course.instructor}</p>
        <Link to={`/course-details/${course._id}`}>View Course</Link>
      </div>
    </div>
  );
};

export default CourseCard;
