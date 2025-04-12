import React, { useState } from "react";
import { TextField, Button, Box, Autocomplete } from "@mui/material";
import FlightCard from "./FlightCard";
import onewayData from "../data/ONEWAY.json";
import roundwayData from "../data/ROUNDWAY.json";

const FlightSearch = ({ type }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);

const extractLocations = (data) => {
  return [
    data.godeparture,
    data.goarrival,
    data.backdeparture,
    data.backarrival
  ];
};
const locationSet = new Set([...extractLocations(onewayData),...extractLocations(roundwayData)
]);
const locations = Array.from(locationSet);


const handleSearch = () => {
  if (!from || !to || !departureDate || (type === "roundtrip" && !returnDate)) {
    alert("Please fill in all required fields.");
    return;
  }

  const rawData = type === "oneway" ? [onewayData] : [roundwayData]; //  

  const filteredData = rawData.filter((flight) => {
    return (
      flight.godeparture === from &&
      flight.goarrival === to
    );
  });

  setSearchResults(filteredData);
};

  return (
    <Box>
      <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
      <Autocomplete
        options={locations}
        value={from}
        onChange={(e, newVal) => setFrom(newVal)}
        renderInput={(params) =><TextField {...params} label="From" size="small" />}/>

      <Autocomplete
        options={locations}
        value={to}
        onChange={(e, newVal) => setTo(newVal)}
        renderInput={(params) => <TextField {...params} label="To" size="small" />}
      />
        <TextField
          label="Departure Date"
          size="small"
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        {type === "roundtrip" && (
          <TextField
            label="Return Date"
            size="small"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        )}
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {searchResults.map((flight, index) => (
        <FlightCard key={index} flight={flight} type={type} />
      ))}
    </Box>
  );
};

export default FlightSearch;
