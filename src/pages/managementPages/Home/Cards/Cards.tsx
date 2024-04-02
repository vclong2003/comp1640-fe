import React from "react";
import { MdOutlineEventAvailable } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { FaUsers, FaFile } from "react-icons/fa";
import Box from "@mui/material/Box";

const BoxDashBoardStyled: React.CSSProperties = {
  width: "24%",
  height: "160px",
  borderRadius: 2,
  boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BoxItemStyled = (color: string[]): React.CSSProperties => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: color[0],
  marginRight: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
});

const Cards = () => {
  const colors = ["#5B93FF", "#605BFF", "#FF8F6B", "#605BFF"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <Box sx={BoxDashBoardStyled}>
        <Box sx={BoxItemStyled(colors)}>
          <FaUsers />
        </Box>
        <Box>
          <h3>178+</h3>
          <p>Student</p>
        </Box>
      </Box>
      <Box sx={BoxDashBoardStyled}>
        <Box sx={BoxItemStyled(colors)}>
          <LuSchool />
        </Box>
        <Box>
          <h3>6+</h3>
          <p>Faculty</p>
        </Box>
      </Box>
      <Box sx={BoxDashBoardStyled}>
        <Box sx={BoxItemStyled(colors)}>
          <FaFile />
        </Box>
        <Box>
          <h3>190+</h3>
          <p>Files</p>
        </Box>
      </Box>
      <Box sx={BoxDashBoardStyled}>
        <Box sx={BoxItemStyled(colors)}>
          <MdOutlineEventAvailable />
        </Box>
        <Box>
          <h3>12+</h3>
          <p>Events</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
