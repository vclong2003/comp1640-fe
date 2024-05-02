import { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AddNewEventModal from "./EventModal/AddNewEventModal";
import { Headline } from "./Event.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { TextList } from "./Event.styled";
import { MiddleContainer } from "./Event.styled";
import EventRow from "./EventRow/EventRow";
import { findEvents } from "@store/event";
import Filter from "./Filter";
export default function Event() {
  const { events, filter } = useSelector(
    (state: RootState) => state.eventState,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findEvents(filter));
  }, [dispatch, filter]);

  const [openAddNewEventModal, setOpenAddNewEventModal] = useState(false);
  const handleOpenAddNewEventModal = () => setOpenAddNewEventModal(true);
  const handleCloseAddNewEventModal = () => setOpenAddNewEventModal(false);

  return (
    <>
      <Headline>Events</Headline>

      <Filter />
      <MiddleContainer>
        <TextList>List Of Event</TextList>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleOpenAddNewEventModal}
        >
          Add new
        </Button>
      </MiddleContainer>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Start date</TableCell>
              <TableCell align="left">First Closure Date</TableCell>
              <TableCell align="left">Final Closure Date</TableCell>
              <TableCell align="left">Faculty Name</TableCell>
              <TableCell align="left">Number of Contributions</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <EventRow key={event._id} event={event} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddNewEventModal
        open={openAddNewEventModal}
        handleClose={handleCloseAddNewEventModal}
      />
    </>
  );
}
