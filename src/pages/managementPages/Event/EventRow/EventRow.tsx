import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewDetailEventModal from "../EventModal/ViewDetailEventModal";
import DeleteEventModal from "../EventModal/DeleteEventModal";
import ViewIcon from "@mui/icons-material/Visibility";
import { IEvent } from "@interfaces/event.interfaces";
import { toIsoDate, toLocaleDateTime } from "@utils/date.utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { deleteEvent } from "@store/event";
import { useNavigate } from "react-router";
import { notifySuccess } from "@utils/notification.utils";
import { API_BASE_URL } from "@config/api.config";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
interface EventRowProps {
  event: IEvent;
}

const EventRow: React.FC<EventRowProps> = ({ event }: EventRowProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openViewDetailEventModal, setOpenViewDetailEventModal] =
    useState(false);
  const [openDeleteEventModal, setOpenDeleteEventModal] = useState(false);

  // const handleOpenViewDetailEventModal = () =>
  //   setOpenViewDetailEventModal(true);
  const handleCloseViewDetailEventModal = () =>
    setOpenViewDetailEventModal(false);
  const handleOpenDeleteEventModal = () => setOpenDeleteEventModal(true);
  const handleCloseDeleteEventModal = () => setOpenDeleteEventModal(false);

  const handleDeleteEvent = () => {
    dispatch(deleteEvent({ _id: event._id }))
      .unwrap()
      .then(() => notifySuccess("You deleted event successfully"))
      .then(() => handleCloseDeleteEventModal());
  };

  const handleDownload = () => {
    window.open(`${API_BASE_URL}/contribution/download?eventId=${event._id}`);
  };

  const navigate = useNavigate();

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {event.name}
        </TableCell>
        <TableCell align="left">{toLocaleDateTime(event.start_date)}</TableCell>
        <TableCell align="left">
          {toIsoDate(event.first_closure_date)}
        </TableCell>
        <TableCell align="left">
          {toIsoDate(event.final_closure_date)}
        </TableCell>
        <TableCell align="left">{event.faculty?.name}</TableCell>
        <TableCell align="left">{event.number_of_contributions}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<ViewIcon />}
            sx={{ mr: 4 }}
            onClick={() => navigate(`${event._id}`)}
          >
            View
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="success"
            startIcon={<FileDownloadIcon />}
            sx={{ mr: 4 }}
            onClick={handleDownload}
          >
            Download
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleOpenDeleteEventModal}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <ViewDetailEventModal
        open={openViewDetailEventModal}
        handleClose={handleCloseViewDetailEventModal}
      />
      <DeleteEventModal
        open={openDeleteEventModal}
        handleClose={handleCloseDeleteEventModal}
        onConfirmDelete={handleDeleteEvent}
      />
    </>
  );
};

export default EventRow;
