import React, { useEffect, useState } from "react";
import "./MyCourse.css";
import { academyId, userApiUrl } from "../api/config";
import axios from "axios";
import MyCoursesWidget from "../components/MyCoursesWidget";
import Loader from "../components/Loader";

function MyCourse() {
  const [load, setLoad] = useState(false);
  const [myCourseData, setMyCourseData] = useState([]);
  const fetchCourses = async () => {
    // Data to be sent in the POST request

    try {
      const userId = localStorage.getItem("userId");

      let sendData = {
        academyId: academyId,
        userId: userId,
      };
      const response = await axios.post(`${userApiUrl}/my-course/`, sendData);
      setMyCourseData(response.data);
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
    <div className="main-content">
      {load ? (
        <>
          <h2>My Courses</h2>
          {myCourseData.map((myCourse, index) => (
            <MyCoursesWidget key={index} data={myCourse} />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MyCourse;
