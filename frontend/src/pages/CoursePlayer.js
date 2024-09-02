import React, { useEffect, useState } from "react";
import TabsComponent from "../components/TabsComponent";
import "./CoursePlayer.css";
import Loader from "../components/Loader";
import axios from "axios";
import { academyId, baseUrl, userApiUrl } from "../api/config";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { MdExpandMore, MdPlayCircle } from "react-icons/md";
import Error from "../components/error";
import pptFile from "../file/samplepptx.pptx";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function CoursePlayer() {
  const [load, setLoad] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [currentVideoData, setCurrentVideoData] = useState([]);
  const [documentPath, setDocumentPath] = useState([]);
  const { courseId } = useParams();

  const headers = {
    "Content-Type": "application/json",
  };

  const getSingleContent = async (id) => {
    setLoad(false);
    try {
      const response = await axios.get(
        `${userApiUrl}/player-content/${academyId}/${id}`
      );

      if (response) {
        setLoad(true);
        setCurrentVideoData(response.data.singelContent);
        setDocumentPath([
          {
            uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
            fileType: "pptx",
            fileName: "Sample-PPT-File-500kb.ppt",
          },
          {
            uri: `${baseUrl}/${response.data.singelContent.fileUrl}`,
            fileType: response.data.singelContent.fileType,
            fileName: `${response.data.singelContent.fileName}`,
            // uri: pptFile,
          },
          {
            uri: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
            fileType: "pptx",
            fileName: "samplepptx.pptx",
          },
        ]);
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
      setCurrentVideoData(response.data[0]);

      setDocumentPath([
        {
          uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
          fileType: "pptx",
          fileName: "Sample-PPT-File-500kb.ppt",
        },
        {
          uri: `${baseUrl}/${response.data[0].fileUrl}`,
          fileType: response.data[0].fileType,
          fileName: `${response.data[0].fileName}`,
          // uri: pptFile,
        },
        {
          uri: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          fileType: "pptx",
          fileName: "samplepptx.pptx",
        },
      ]);

      console.log(documentPath);

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

      setLoad(true);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const docs = [
    {
      uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
      fileType: "pptx",
      fileName: "Sample-PPT-File-500kb.ppt",
    },
    {
      uri: require("../file/31203d11-2326-49dd-9ba3-6c8ce761349e.pptx"),
      fileType: "pptx",
      fileName: "31203d11-2326-49dd-9ba3-6c8ce761349e.pptx",
    },
  ];
  // const [error, setError] = useState(null);

  console.log(documentPath);

  return load ? (
    currentVideoData == null ? (
      <Error error="No Content Found!" />
    ) : (
      <div className="course-player">
        <div className="video-section">
          <div className="video-player">
            <DocViewer
              style={{ height: "400px" }}
              documents={documentPath}
              pluginRenderers={DocViewerRenderers}
              prefetchMethod="GET"
              requestHeaders={headers}
            />
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
