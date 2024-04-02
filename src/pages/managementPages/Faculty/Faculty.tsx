import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import InputAdornment from "@mui/material/InputAdornment";
import { Headline } from "./Faculty.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import AddNewFacultyModal from "./FacultyModal/AddNewFacultyModal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { findFaculties } from "@store/faculty/facultyActions";
import FacultyRow from "./FacultyRow/FacultyRow";

const Faculty = () => {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
  }, [dispatch]);

  const [openAddNewFacultyModal, setOpenAddNewFacultyModal] =
    React.useState(false);
  const handleOpenAddNewFacultyModal = () => setOpenAddNewFacultyModal(true);
  const handleCloseAddNewFacultyModal = () => setOpenAddNewFacultyModal(false);

  return (
    <>
      <Headline>Faculty</Headline>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "@media only screen and (max-width: 600px)": {
            display: "block",
          },
        }}
      >
        <Box component="form" noValidate autoComplete="off">
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
            sx={{
              "@media only screen and (max-width: 600px)": {
                width: "100%",
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleOpenAddNewFacultyModal}
          sx={{
            "@media only screen and (max-width: 600px)": {
              width: "100%",
              mt: "10px",
            },
          }}
        >
          Add new
        </Button>
      </Box>

      <TableContainer
        sx={{
          mt: "10px",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">MC Name</TableCell>
              <TableCell align="left">MC Email</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faculties.map((faculty) => (
              <FacultyRow key={faculty._id} faculty={faculty} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddNewFacultyModal
        open={openAddNewFacultyModal}
        handleClose={handleCloseAddNewFacultyModal}
      />
    </>
  );
};

export default Faculty;
