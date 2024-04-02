import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const TimeLineFilter = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  return (
    <Box sx={{ mt: "20px", display: "flex", justifyContent: "space-between" }}>
      <TextField
        id="start-date"
        label="Start Date"
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: "45%" }}
      />
      <TextField
        id="end-date"
        label="End Date"
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: "45%" }}
      />
    </Box>
  );
};

export default TimeLineFilter;
