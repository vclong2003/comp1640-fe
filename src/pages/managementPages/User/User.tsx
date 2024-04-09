import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import AddNewUserModal from "./UserModals/AddNewUsersModal";
import { AddAndSort, Headline, HeadlineAndDelete } from "./User.styled";
import UserRow from "./UserRows/UserRows";

import { findFaculties } from "@store/faculty";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { findUsers } from "@store/user";
import UserFilter from "./UserFilter";

const User: React.FC = () => {
  const { users, filter } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(findUsers(filter));
  }, [dispatch, filter]);

  const [openAddNewUserModal, setOpenAddNewUserModal] = useState(false);

  const handleOpenAddNewUserModal = () => setOpenAddNewUserModal(true);
  const handleCloseAddNewUserModal = () => setOpenAddNewUserModal(false);

  return (
    <>
      <Headline>Users</Headline>

      <UserFilter />

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
