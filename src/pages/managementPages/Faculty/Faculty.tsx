import AuthorizedPage from "../../../components/AuthorizedPage/AuthorizedPage";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import InputAdornment from "@mui/material/InputAdornment";
import {
  AddAndSort,
  Form,
  HeadlineAndDelete,
  Headline,
} from "./Faculty.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import React from "react";
import Typography from "@mui/material/Typography";

function createData(no: number, id: string, name: string, decription: string) {
  return { no, id, name, decription };
}

const rows = [
  createData(1, "A123", "IT", "test decription"),
  createData(2, "A123", "IT", "test decription"),
  createData(3, "A123", "IT", "test decription"),
  createData(4, "A123", "IT", "test decription"),
];

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};

const Faculty = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <AuthorizedPage>
      <Headline>Faculty</Headline>

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
            onClick={handleOpen}
          >
            Add new
          </Button>

          <Button variant="contained" size="medium">
            Sort by
          </Button>
        </AddAndSort>
      </Form>

      <HeadlineAndDelete>
        <Headline>List of Faculties</Headline>
        <Button variant="contained" size="medium" color="error">
          Delete All
        </Button>
      </HeadlineAndDelete>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name&nbsp;</TableCell>
              <TableCell align="left">Decription&nbsp;</TableCell>
              <TableCell align="left">Action&nbsp;</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.no}
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.decription}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    size="small"
                    color="warning"
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new Faculty
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <TextField
              id="outlined-basic"
              label="ID"
              variant="outlined"
              sx={{ mr: 2 }}
            />
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <TextField
              id="outlined-basic"
              label="Decription"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Upload" variant="outlined" />
          </Box>

          <Button
            variant="contained"
            size="medium"
            color="primary"
            sx={{ mt: 4, left: "40%" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </AuthorizedPage>
  );
};

export default Faculty;
