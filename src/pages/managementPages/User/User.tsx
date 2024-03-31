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
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import AddNewUserModal from "./UserModals/AddNewUsersModal";
import AuthorizedPage from "../../../components/AuthorizedPage/AuthorizedPage";
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

  return (
    <AuthorizedPage>
      <Headline>Users</Headline>

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
            onClick={handleOpenAddNewUserModal}
          >
            Add new
          </Button>

          <Button variant="contained" size="medium">
            Sort by
          </Button>
        </AddAndSort>
      </Form>

      <HeadlineAndDelete>
        <Headline>List of Users</Headline>
        <Button variant="contained" size="medium" color="error">
          Delete All
        </Button>
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
    </AuthorizedPage>
  );
};

export default User;
