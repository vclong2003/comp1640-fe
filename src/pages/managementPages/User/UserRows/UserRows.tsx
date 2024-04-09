import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import DeleteUserModal from "../UserModals/DeleteUserModal";
import ViewIcon from "@mui/icons-material/Visibility";
import { IUser } from "@interfaces/user.interfaces";
import { useNavigate } from "react-router";

interface UserRowProps {
  user: IUser;
}

const UserRow: React.FC<UserRowProps> = ({ user }: UserRowProps) => {
  const navigate = useNavigate();
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);

  const handleOpenDeleteUserModal = () => setOpenDeleteUserModal(true);
  const handleCloseDeleteUserModal = () => setOpenDeleteUserModal(false);

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left">{user?.name}</TableCell>
        <TableCell align="left">{user?.email}</TableCell>
        <TableCell align="left">{user?.faculty?.name}</TableCell>
        <TableCell align="left">{user?.role}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<ViewIcon />}
            sx={{ mr: 4 }}
            onClick={() => navigate(`${user._id}`)}
          >
            View
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleOpenDeleteUserModal}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <DeleteUserModal
        open={openDeleteUserModal}
        handleClose={handleCloseDeleteUserModal}
      />
    </>
  );
};

export default UserRow;
