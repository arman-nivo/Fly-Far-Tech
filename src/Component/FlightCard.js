import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FlightCard = ({ flight, type }) => {
  const { segments,careerName, customerPrice, godeparture, goarrival, class: cabin } = flight;
  const departureAirport = segments.go[0].departureAirport;
  const departureTime = segments.go[0].departureTime;
  const arrivalLocation = segments.go[0].arrivalLocation;
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">
            {careerName} - {godeparture} to {goarrival}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            BDT {customerPrice}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          Flight Info : <br></br>
          departure-Time : {departureTime} <br></br> 
          departure-Airport: {departureAirport} <br></br>
          Cabin: {cabin}<br></br> 
          Arrival-location : {arrivalLocation} 
        </Typography>
        {type === "roundtrip" && (
          <>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              Return Flight Info :<br></br>
              Return-tiime: {flight.segments.back[0].departureTime} <br></br>
              departure-Location : {flight.segments.back[0].departureLocation} <br></br>
              departure-Airport : {flight.segments.back[0].departureAirport}
              
            </Typography>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default FlightCard;
