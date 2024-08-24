import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TabsComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Overview" />
        <Tab label="Q&A" />
        <Tab label="Notes" />
        <Tab label="Announcements" />
        <Tab label="Reviews" />
        <Tab label="Learning tools" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Overview content...
      </TabPanel>
      <TabPanel value={value} index={1}>
        Q&A content...
      </TabPanel>
      <TabPanel value={value} index={2}>
        Notes content...
      </TabPanel>
      <TabPanel value={value} index={3}>
        Announcements content...
      </TabPanel>
      <TabPanel value={value} index={4}>
        Reviews content...
      </TabPanel>
      <TabPanel value={value} index={5}>
        Learning tools content...
      </TabPanel>
    </div>
  );
};

export default TabsComponent;
