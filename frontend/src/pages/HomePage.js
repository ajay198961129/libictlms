import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import { academyId, userApiUrl } from "../api/config";
import axios from "axios";
import Loader from "../components/Loader";

const HomePage = () => {
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
    <div>
      <Hero />
      {load ? <PopularCourses data={courseData} /> : <Loader />}
    </div>
  );
};

export default HomePage;
