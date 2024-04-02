import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteUserModal from "../UserModals/DeleteUserModal";
import ViewIcon from "@mui/icons-material/Visibility";
interface UserRowProps {
  User: {
    no: number;
    fullname: string;
    email: string;
    faculty: string;
  };
}

const UserRow: React.FC<UserRowProps> = ({ User }) => {
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);

  const handleOpenDeleteUserModal = () => setOpenDeleteUserModal(true);
  const handleCloseDeleteUserModal = () => setOpenDeleteUserModal(false);

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {User.no}
        </TableCell>
        <TableCell align="left">{User.fullname}</TableCell>
        <TableCell align="left">{User.email}</TableCell>
        <TableCell align="left">{User.faculty}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<ViewIcon />}
            sx={{ mr: 4 }}
            // onClick={handleOpenViewDetailUserModal}
          >
            View
          </Button>
          {/* <Button
            variant="outlined"
            size="small"
            color="warning"
            startIcon={<EditIcon />}
            sx={{ mr: 4 }}
            // onClick={handleOpenViewDetailUserModal}
          >
            Edit
          </Button> */}
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
      {/* <ViewDetailUserModal
        open={openViewDetailUserModal}
        handleClose={handleCloseViewDetailUserModal}
      /> */}
      <DeleteUserModal
        open={openDeleteUserModal}
        handleClose={handleCloseDeleteUserModal}
      />
    </>
  );
};

export default UserRow;