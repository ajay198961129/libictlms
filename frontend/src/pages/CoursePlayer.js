import React, { useEffect, useState } from "react";
import TabsComponent from "../components/TabsComponent";
import "./CoursePlayer.css";
import Loader from "../components/Loader";
import axios from "axios";
import { academyId, baseUrl, userApiUrl } from "../api/config";
import { useParams } from "react-router-dom";
import video from "../upload/1724345852682.mp4";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { MdExpandMore, MdPlayCircle } from "react-icons/md";

function CoursePlayer() {
  const [load, setLoad] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [currentVideoData, setCurrentVideoData] = useState([]);
  const { courseId } = useParams();

  const getSingleContent = async (id) => {
    setLoad(false);
    console.log(id);
    try {
      const response = await axios.get(
        `${userApiUrl}/player-content/${academyId}/${id}`
      );
      if (response) {
        setLoad(true);
        setCurrentVideoData(response.data.singelContent);
      }
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  const fetchContent = async () => {
    try {
      const response = await axios.get(
        `${userApiUrl}/player/${academyId}/${courseId}`
      );
      console.log(response.data);
      setCurrentVideoData(response.data[0]);

      // Step 1: Group by chapter
      const transformedData = response.data.reduce((acc, item) => {
        const chapterTitle = item.chapter.title;

        // Find if the chapter already exists in the accumulator
        const chapterIndex = acc.findIndex(
          (chap) => chap.chapter === chapterTitle
        );

        if (chapterIndex >= 0) {
          // Chapter already exists, so add to its contentData array
          acc[chapterIndex].contentData.push({
            contentTitle: item.title,
            _id: item._id,
          });
        } else {
          // Chapter does not exist, so create a new entry
          acc.push({
            chapter: chapterTitle,
            contentData: [{ contentTitle: item.title, _id: item._id }],
          });
        }

        return acc;
      }, []);

      setCourseData(transformedData);
      console.log(transformedData);

      console.log(response.data);

      setLoad(true);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);
  return load ? (
    currentVideoData == null ? (
      <h3>Data Not Found</h3>
    ) : (
      <div className="course-player">
        <div className="video-section">
          {/* video player Section */}
          <div className="video-player">
            <video width="100%" controls>
              <source
                src={`${baseUrl}/${currentVideoData.path.replace(/\\/g, "/")}`}
                // src={video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3>{`${baseUrl}/${currentVideoData.path.replace(/\\/g, "/")}`}</h3>
            <h3>{`${currentVideoData.title}`}</h3>
          </div>
          <TabsComponent />
        </div>
        {/* Course Content Section */}
        <div className="course-content">
          {courseData.map((section, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<MdExpandMore />}>
                <Typography>{section.chapter}</Typography>
                {/* <Typography style={{ marginLeft: "auto" }}>
              {section.duration}
            </Typography> */}
              </AccordionSummary>
              <AccordionDetails>
                {section.contentData.map((data, index) => (
                  <Typography
                    onClick={() => getSingleContent(data._id)}
                    key={index}
                    style={{ marginBottom: "10px" }}
                  >
                    <MdPlayCircle style={{ marginRight: "5px" }} />
                    {` ${data.contentTitle}`}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    )
  ) : (
    <Loader />
  );
}

export default CoursePlayer;
