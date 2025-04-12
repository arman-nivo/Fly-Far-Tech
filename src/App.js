import React from "react";
import {Typography, Box } from "@mui/material";
import SearchTabs from "./Component/SearchTabs";


const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/94/17/78/stunning-beauty-of-cox.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
        width: "100%",
        height: '400px',
      }}
    >
      <Box maxWidth="md" sx={{height:"90vh", backgroundColor: "rgba(255, 255, 255, 0.85)",padding:"10px 2%",margin:"0px auto", 
        position:"relative", top:'20px', borderRadius:"10px"}}>

        <Typography sx={{marginTop:"20px", fontWeight:"bold"}} variant="h4" align="center" gutterBottom >
          FlyFar Flight Search
        </Typography>
        <SearchTabs/>
      </Box>
    </Box>
  );
};

export default App;
