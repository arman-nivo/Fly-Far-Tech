import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import FlightSearch from "./FlightSearch";
import "./StyleComponent.css";
import Slider from "./slider";

const SearchTabs = () => {
  const [num_tab, setNum_tab] = useState(0);

  return (
    <Box className="styleserch" >
      <Tabs  value={num_tab} onChange={(event,tab_num) => setNum_tab(tab_num)} centered>
        <Tab label="Landing Page" ></Tab>
        <Tab label="One-Way"></Tab>
        <Tab label="Round-Trip"></Tab>
        <Tab label="Multi-City" ></Tab>
      </Tabs>
      <Box mt={5}>
        {num_tab === 0 && <Slider type="Landing Page"></Slider>}
      </Box>
      <Box sx={{    display: "flex",
                    padding: "28px 4%",
                    flexWrap: "nowrap",
                    justifyContent: "center"}}>
        {num_tab === 1 && <FlightSearch type="oneway" />}
        {num_tab === 2 && <FlightSearch type="roundtrip" />}
        {num_tab === 3 && <div>Multi-City design placeholder</div>}
      </Box>
    </Box>
  );
};

export default SearchTabs;