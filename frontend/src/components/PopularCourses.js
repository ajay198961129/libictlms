import React from "react";
import "./PopularCourses.css";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const PopularCourses = (props) => (
  <div className="course-wrapper">
    <h1>Popular Courses</h1>
    <div className="courses-grid">
      {props.data.slice(0, 6).map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
    <div className="course-footer">
      <Link to="/courses">Shaw All Courses</Link>
    </div>
  </div>
);

export default PopularCourses;
