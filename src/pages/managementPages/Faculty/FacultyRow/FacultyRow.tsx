import { Button, TableCell, TableRow } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { IFaculty } from "@interfaces/faculty.interfaces";
import DeleteFacultyModal from "../FacultyModal/DeleteFacultyModal";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { deleteFaculty } from "@store/faculty";
import { notifySuccess } from "@utils/notification.utils";
import { useNavigate } from "react-router";
export interface IFacultyRowProps {
  faculty: Omit<IFaculty, "description" | "banner_image_url">;
}

export default function FacultyRow({ faculty }: IFacultyRowProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [openDeleteFacultyModal, setOpenDeleteFacultyModal] =
    React.useState(false);
  const handleOpenDeleteFacultyModal = () => setOpenDeleteFacultyModal(true);
  const handleCloseDeleteFacultyModal = () => setOpenDeleteFacultyModal(false);

  const handleDeleteFaculty = () => {
    dispatch(deleteFaculty({ _id: faculty._id }))
      .unwrap()
      .then(() => notifySuccess("You deleted faculty successfully"))
      .then(() => handleCloseDeleteFacultyModal());
  };
  const navigate = useNavigate();

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {faculty._id}
        </TableCell>
        <TableCell align="left">{faculty.name}</TableCell>
        <TableCell align="left">{faculty.mc?.name || "No MC"}</TableCell>
        <TableCell align="left">{faculty.mc?.email || "No MC"}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="warning"
            startIcon={<EditIcon />}
            sx={{ mr: 4 }}
            onClick={() => navigate(`${faculty._id}`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleOpenDeleteFacultyModal}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <DeleteFacultyModal
        open={openDeleteFacultyModal}
        handleClose={handleCloseDeleteFacultyModal}
        onConfirmDelete={handleDeleteFaculty}
      />
    </>
  );
}
