import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  TextField,
  InputAdornment,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import AddNewUserModal from "./UserModals/AddNewUsersModal";
import { AddAndSort, Headline, HeadlineAndDelete } from "./User.styled";
import UserRow from "./UserRows/UserRows";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { findFaculties } from "@store/faculty";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { findUsers } from "@store/user";

const mobileMediaQuery = {
  "@media only screen and (max-width: 600px)": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    mb: "8px",
  },
};

const FilterMediaQuery = {
  "@media only screen and (max-width: 600px)": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    mb: "8px",
  },
};

const User: React.FC = () => {
  const { users } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
    dispatch(findUsers({}));
  }, [dispatch]);

  const [openAddNewUserModal, setOpenAddNewUserModal] = useState(false);

  const handleOpenAddNewUserModal = () => setOpenAddNewUserModal(true);
  const handleCloseAddNewUserModal = () => setOpenAddNewUserModal(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Headline>Users</Headline>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "@media only screen and (max-width: 600px)": {
            display: "block",
          },
        }}
      >
        <Box
          sx={{
            width: "50%",
            ...mobileMediaQuery,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CiSearch />
                </InputAdornment>
              ),
            }}
            sx={{ width: "45%", height: "40px", mr: "10px" }}
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CiSearch />
                </InputAdornment>
              ),
            }}
            sx={{ width: "45%", height: "40px" }}
            variant="outlined"
            size="small"
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",

            "@media only screen and (max-width: 600px)": {
              display: "block",
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "flex-end",
              height: "40px",
              ...FilterMediaQuery,
            }}
          >
            <FormControl size="small" sx={{ width: "45%", mr: "8px" }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ width: "45%" }}>
              <InputLabel>Faculty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "flex-end",
              ...FilterMediaQuery,
            }}
          >
            <Button
              variant="outlined"
              size="medium"
              color="info"
              sx={{ mr: "8px" }}
            >
              Reset All
            </Button>
            <Button variant="contained" size="medium" color="info">
              Apply
            </Button>
          </Box>
        </Box>
      </Box>
      <HeadlineAndDelete>
        <Headline>List of Users</Headline>
        <AddAndSort>
          <Button
            variant="contained"
            size="medium"
            color="success"
            onClick={handleOpenAddNewUserModal}
          >
            Add new
          </Button>

          <Button variant="contained" size="medium" color="error">
            Delete All
          </Button>
        </AddAndSort>
      </HeadlineAndDelete>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Facutly</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.name} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddNewUserModal
        open={openAddNewUserModal}
        handleClose={handleCloseAddNewUserModal}
      />
    </>
  );
};

export default User;
