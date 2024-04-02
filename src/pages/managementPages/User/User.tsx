import React, { useState } from "react";
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
  Select,
  MenuItem,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import AddNewUserModal from "./UserModals/AddNewUsersModal";
import { AddAndSort, Form, Headline, HeadlineAndDelete } from "./User.styled";
import UserRow from "./UserRows/UserRows";

interface UserData {
  no: number;
  fullname: string;
  email: string;
  faculty: string;
}

const createData = (
  no: number,
  fullname: string,
  email: string,
  faculty: string,
): UserData => {
  return { no, fullname, email, faculty };
};

const Usersrows: UserData[] = [
  createData(1, "NguyenVanA", "nguyenvana@gmail.com", "IT"),
  createData(2, "NguyenVanA", "nguyenvana@gmail.com", "IT"),
  createData(3, "NguyenVanA", "nguyenvana@gmail.com", "IT"),
  createData(4, "NguyenVanA", "nguyenvana@gmail.com", "IT"),
];

const User: React.FC = () => {
  const [openAddNewUserModal, setOpenAddNewUserModal] = useState(false);

  const handleOpenAddNewUserModal = () => setOpenAddNewUserModal(true);
  const handleCloseAddNewUserModal = () => setOpenAddNewUserModal(false);

  const [openUserFilterModal, setOpenUserFilterModal] = useState(false);
  const handleOpenUserFilterModal = () => setOpenUserFilterModal(true);
  const handleCloseUserFilterModal = () => setOpenUserFilterModal(false);
  return (
    <>
      <Headline>Users</Headline>

      <Form>
        {/* <Button
          variant="contained"
          size="medium"
          onClick={handleOpenUserFilterModal}
        >
          Filter
        </Button> */}

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "var(--s-5)",
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
            sx={{ width: "20%", height: "40px" }}
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
            sx={{ width: "20%", height: "40px" }}
            variant="outlined"
            size="small"
          />
          <Select
            disabled={false}
            placeholder="Role"
            // size="sm"
            variant="outlined"
            sx={{ width: "10%", height: "40px" }}
          >
            <MenuItem value="@">ten</MenuItem>
            <MenuItem value="!">ten</MenuItem>
            <MenuItem value="yes">ten</MenuItem>
            <MenuItem value="alo">ten</MenuItem>
          </Select>
          <Select
            disabled={false}
            placeholder="Faculty"
            // size="sm"
            variant="outlined"
            sx={{ width: "10%", height: "40px" }}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
          </Select>
          <Button variant="contained" size="medium" color="error">
            Reset All
          </Button>
          <Button variant="contained" size="medium" color="error">
            Apply
          </Button>
        </Box>
      </Form>
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
              <TableCell>No</TableCell>
              <TableCell align="left">Full Name &nbsp;</TableCell>
              <TableCell align="left">Email&nbsp;</TableCell>
              <TableCell align="left">Facutly&nbsp;</TableCell>
              <TableCell align="left">Action&nbsp;</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Usersrows.map((User) => (
              <UserRow key={User.no} User={User} />
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
