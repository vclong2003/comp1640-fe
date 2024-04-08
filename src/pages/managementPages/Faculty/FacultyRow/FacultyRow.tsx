import { Button, TableCell, TableRow } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { IFaculty } from "@interfaces/faculty.interfaces";
import ViewDetailFacultyModal from "../FacultyModal/ViewDetailFacultyModal";
import DeleteFacultyModal from "../FacultyModal/DeleteFacultyModal";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { deleteFaculty } from "@store/faculty";
import { notifySuccess } from "@utils/notification.utils";
export interface IFacultyRowProps {
  faculty: Omit<IFaculty, "description" | "banner_image_url">;
}

export default function FacultyRow({ faculty }: IFacultyRowProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [openViewDetailFacultyModal, setOpenViewDetailFacultyModal] =
    React.useState(false);
  const handleOpenViewDetailFacultyModal = () =>
    setOpenViewDetailFacultyModal(true);
  const handleCloseViewDetailFacultyModal = () =>
    setOpenViewDetailFacultyModal(false);

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
            onClick={handleOpenViewDetailFacultyModal}
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
      <ViewDetailFacultyModal
        open={openViewDetailFacultyModal}
        handleClose={handleCloseViewDetailFacultyModal}
      />
      <DeleteFacultyModal
        open={openDeleteFacultyModal}
        handleClose={handleCloseDeleteFacultyModal}
        onConfirmDelete={handleDeleteFaculty}
      />
    </>
  );
}
