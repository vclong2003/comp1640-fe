import { useEffect, useState } from "react";
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
import AddNewEventModal from "./EventModal/AddNewEventModal";
import { AddAndSort, Form, Headline, HeadlineAndDelete } from "./Event.styled";
import EventFilterModal from "./EventModal/EventFilterModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";

import EventRow from "./EventRow/EventRow";
import { findEvents } from "@store/event";
export default function Event() {
  const { events } = useSelector((state: RootState) => state.eventState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findEvents({}));
  }, [dispatch]);

  const [openAddNewEventModal, setOpenAddNewEventModal] = useState(false);
  const handleOpenAddNewEventModal = () => setOpenAddNewEventModal(true);
  const handleCloseAddNewEventModal = () => setOpenAddNewEventModal(false);

  const [openEventFilterModal, setOpenEventFilterModal] = useState(false);
  const handleOpenEventFilterModal = () => setOpenEventFilterModal(true);
  const handleCloseEventFilterModal = () => setOpenEventFilterModal(false);
  return (
    <>
      <Headline>Events</Headline>

      <Form>
        <Button
          variant="contained"
          size="medium"
          onClick={handleOpenEventFilterModal}
        >
          Filter
        </Button>

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
            onClick={handleOpenAddNewEventModal}
          >
            Add new
          </Button>

          <Button variant="contained" size="medium">
            Sort by
          </Button>
        </AddAndSort>
      </Form>

      <HeadlineAndDelete>
        <Headline>List of events</Headline>
        <Button variant="contained" size="medium" color="error">
          Delete All
        </Button>
      </HeadlineAndDelete>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Start date&nbsp;</TableCell>
              <TableCell align="left">First Closure Date</TableCell>
              <TableCell align="left">Final Closure Date</TableCell>
              <TableCell align="left">Faculty Name</TableCell>
              <TableCell align="left">Action&nbsp;</TableCell>
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
      <EventFilterModal
        open={openEventFilterModal}
        handleClose={handleCloseEventFilterModal}
      />
    </>
  );
}
