import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { MdExpandMore, MdPlayCircle } from "react-icons/md";

const CourseContent = (props) => {
  return (
    <div className="course-content">
      {props.data.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<MdExpandMore />}>
            <Typography>{section.chapter}</Typography>
            {/* <Typography style={{ marginLeft: "auto" }}>
              {section.duration}
            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            {section.contentData.map((data, index) => (
              <Typography key={index} style={{ marginBottom: "10px" }}>
                <MdPlayCircle style={{ marginRight: "5px" }} />
                {` ${data.contentTitle}`}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseContent;
