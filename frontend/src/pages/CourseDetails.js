import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { academyId, userApiUrl } from "../api/config";
import TransformData from "../components/TransformData";
import Loader from "../components/Loader";

function CourseDetails() {
  const { courseId } = useParams();
  const [load, setLoad] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [courseDetials, setCourseDetials] = useState([]);
  const [contentData, setContentData] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const fetchContent = async () => {
    setLoad(false);
    try {
      const response = await axios.get(
        `${userApiUrl}/content/${academyId}/${courseId}`
      );
      setLoad(true);
      setContentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCourses = async () => {
    setLoad(false);
    try {
      const response = await axios.get(
        `${userApiUrl}/course/${academyId}/${courseId}`
      );
      setLoad(true);
      setCourseDetials(response.data);
      fetchContent();

      if (userId != null) {
        getPurchased();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPurchased = async () => {
    try {
      const response = await axios.get(
        `${userApiUrl}/my-purchased/${academyId}/${userId}/${courseId}`
      );
      if (response) {
        setIsPurchased(response.data.isPurchased);
      }
    } catch (error) {
      console.log(error);
      setIsPurchased(false);
    }
  };

  const addMyCourse = async () => {
    const sendData = {
      academyId: academyId,
      courseId: courseId,
      userId: userId,
    };
    if (userId != null) {
      try {
        const response = await axios.post(`${userApiUrl}/my-course`, sendData);
        setBtnLoad(true);
        if (userId != null) {
          getPurchased();
        }
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div className="course-details-wrapper">
        {!load ? (
          <Loader />
        ) : (
          <div className="course-details-content">
            <div className="course-title-wrapper">
              <div className="course-title-left">
                <h1>{courseDetials.title}</h1>
                <p>{courseDetials.description}</p>
                {isPurchased ? (
                  <Link className="btn-enroll btn-purchased">
                    Continue Your Course
                  </Link>
                ) : (
                  <div className="btn-enroll" onClick={addMyCourse}>
                    Enroll Now
                  </div>
                )}
              </div>
              <img src={courseDetials.imageUrl} alt={courseDetials.title} />
            </div>
            <div className="course-details-body">
              <div className="course-details-body-left">
                <h2>Description</h2>
                <p>{courseDetials.description}</p>
                <h3>Course Content</h3>
                {contentData.length === 0 ? (
                  <div className="course-content-item">
                    <p>Content Not Available!</p>
                  </div>
                ) : (
                  <TransformData data={contentData} />
                )}
                <h2>Who Should Take This Course?</h2>
                <p>{courseDetials.whyCourse}</p>
                <h2>Certification</h2>
                <p>{courseDetials.certification}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CourseDetails;
