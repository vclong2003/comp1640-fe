import { MdOutlineEventAvailable } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { FaUsers, FaFile } from "react-icons/fa";
import AuthorizedPage from "../../../components/AuthorizedPage/AuthorizedPage";
import Box from "@mui/material/Box";
import { InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const BoxDashBoardStyled = {
  width: "24%",
  height: "160px",
  borderRadius: 2,
  boxShadow: 3,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BoxItemStyled = (color: string[]) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: color,
  mr: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
});

const Home = () => {
  const colors = ["#5B93FF", "#605BFF", "#FF8F6B", "#605BFF"];
  return (
    <AuthorizedPage>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
      >
        <h2>Dashboard</h2>
        <TextField
          id="outlined-basic"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
      >
        <Box sx={BoxDashBoardStyled}>
          <Box sx={BoxItemStyled([colors[0]])}>
            <FaUsers />
          </Box>
          <Box>
            <h3>178+</h3>
            <p>Student</p>
          </Box>
        </Box>
        <Box sx={BoxDashBoardStyled}>
          <Box sx={BoxItemStyled([colors[1]])}>
            <LuSchool />
          </Box>
          <Box>
            <h3>6+</h3>
            <p>Faculty</p>
          </Box>
        </Box>
        <Box sx={BoxDashBoardStyled}>
          <Box sx={BoxItemStyled([colors[2]])}>
            <FaFile />
          </Box>
          <Box>
            <h3>190+</h3>
            <p>Files</p>
          </Box>
        </Box>
        <Box sx={BoxDashBoardStyled}>
          <Box sx={BoxItemStyled([colors[3]])}>
            <MdOutlineEventAvailable />
          </Box>
          <Box>
            <h3>12+</h3>
            <p>Events</p>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "40px" }}
      >
        <Box
          sx={{ width: "30%", boxShadow: 3, height: 240, borderRadius: 2 }}
        ></Box>
        <Box
          sx={{ width: "60%", boxShadow: 3, height: 240, borderRadius: 2 }}
        ></Box>
      </Box>
    </AuthorizedPage>
  );
};

export default Home;
