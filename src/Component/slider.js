import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import img1 from  '../img/images.jpeg';
import img2 from  '../img/images1.jpeg';
import img3 from  '../img/landing-page_3jan-2x.avif';

import "./StyleComponent.css";

const slides = [
  {
    id: 1,
    title: "Umrah 14 Days Package",
    image: img1
  },
  {
    id: 2,
    title: "Hot Deals: FlyDubai",
    image: img2
  },
  {
    id: 3,
    title: "US-Bangla Flight Offer",
    image: img3
  }
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box className="slider">
      <img src={slides[index].image} alt="banner" className="slide-image" />
      <Typography variant="h6" className="slide-title">
        {slides[index].title}
      </Typography>

      <IconButton className="nav-button left" onClick={prevSlide}>
        <ArrowBackIos />
      </IconButton>

      <IconButton className="nav-button right" onClick={nextSlide}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Slider;
