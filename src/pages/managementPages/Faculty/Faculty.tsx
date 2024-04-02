import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import InputAdornment from "@mui/material/InputAdornment";
import { AddAndSort, Form, Headline } from "./Faculty.styled";
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

      <Form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
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

        <AddAndSort>
          <Button
            variant="contained"
            size="medium"
            color="success"
            onClick={handleOpenAddNewFacultyModal}
          >
            Add new
          </Button>

          <Button variant="contained" size="medium">
            Sort by
          </Button>
        </AddAndSort>
      </Form>

      <TableContainer sx={{ mt: 5 }}>
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
