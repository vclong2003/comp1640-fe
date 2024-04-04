import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ViewDetailEventModal from "../EventModal/ViewDetailEventModal";
import DeleteEventModal from "../EventModal/DeleteEventModal";
import ViewIcon from "@mui/icons-material/Visibility";
import { IEvent } from "@interfaces/event.interfaces";
import { toIsoDate, toLocaleDateTime } from "@utils/date.utils";
interface EventRowProps {
  event: IEvent;
}

const EventRow: React.FC<EventRowProps> = ({ event }: EventRowProps) => {
  const [openViewDetailEventModal, setOpenViewDetailEventModal] =
    useState(false);
  const [openDeleteEventModal, setOpenDeleteEventModal] = useState(false);

  const handleOpenViewDetailEventModal = () =>
    setOpenViewDetailEventModal(true);
  const handleCloseViewDetailEventModal = () =>
    setOpenViewDetailEventModal(false);
  const handleOpenDeleteEventModal = () => setOpenDeleteEventModal(true);
  const handleCloseDeleteEventModal = () => setOpenDeleteEventModal(false);

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
        <TableCell align="left">{toIsoDate(event.final_closure_date)}</TableCell>
        <TableCell align="left">{event.faculty?.name}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<ViewIcon />}
            sx={{ mr: 4 }}
            onClick={handleOpenViewDetailEventModal}
          >
            View
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="warning"
            startIcon={<EditIcon />}
            sx={{ mr: 4 }}
            onClick={handleOpenViewDetailEventModal}
          >
            Edit
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
      />
    </>
  );
};

export default EventRow;
