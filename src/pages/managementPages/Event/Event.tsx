import { useState } from "react";
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

export default function Event() {
  const [openAddNewEventModal, setOpenAddNewEventModal] = useState(false);

  const handleOpenAddNewEventModal = () => setOpenAddNewEventModal(true);
  const handleCloseAddNewEventModal = () => setOpenAddNewEventModal(false);

  return (
    <>
      <Headline>Events</Headline>

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
              <TableCell>No</TableCell>
              <TableCell align="left">Name Event&nbsp;</TableCell>
              <TableCell align="left">Event&nbsp;</TableCell>
              <TableCell align="left">Start date&nbsp;</TableCell>
              <TableCell align="left">Action&nbsp;</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{/* Map evt here */}</TableBody>
        </Table>
      </TableContainer>

      <AddNewEventModal
        open={openAddNewEventModal}
        handleClose={handleCloseAddNewEventModal}
      />
    </>
  );
}
