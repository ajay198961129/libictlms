import React, { useEffect, useState } from "react";
import "./CoursesPage.css";
import CourseCard from "../components/CourseCard";
import { academyId, userApiUrl } from "../api/config";
import axios from "axios";
import Loader from "../components/Loader";

const CoursesPage = () => {
  const [load, setLoad] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const fetchCourses = async () => {
    // Data to be sent in the POST request
    const data = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${userApiUrl}/courses`, data);
      setCourseData(response.data);
      setLoad(true);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="course-wrapper">
      {load ? (
        <>
          <h1>Viewing {courseData.length} Courses</h1>
          <div className="courses-grid">
            {courseData.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CoursesPage;
