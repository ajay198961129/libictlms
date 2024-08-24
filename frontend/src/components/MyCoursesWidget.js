import React from "react";
import { Link } from "react-router-dom";
import("../pages/MyCourse.css");

export default function MyCoursesWidget(props) {
  return (
    <div className="mycourse-wrapper">
      <img
        src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
        alt=""
      />
      <div className="mycourse-content">
        <h3>{props.data.courseId.title}</h3>
        <div className="mycourse-footer">
          <div className="mycourse-footer-content">
            <p>{props.data.courseId.instructor}</p>
            <p>{props.data.courseId.category.name}</p>
          </div>
          <div className="mycourse-action">
            <Link to={`/course-player/${props.data.courseId._id}`}>
              Resume Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
