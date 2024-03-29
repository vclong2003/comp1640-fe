import AuthorizedPage from "../../../components/AuthorizedPage/AuthorizedPage";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import InputAdornment from "@mui/material/InputAdornment";
import { AddAndSort, Form, HeadlineAndDelete, Headline } from "./Event.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ViewIcon from "@mui/icons-material/Visibility";
function createData(
  no: number,
  name: string,
  faculty: string,
  startdate: string,
) {
  return { no, name, faculty, startdate };
}

const Eventsrows = [
  createData(1, "Event 1", "IT", "01/01/2023"),
  createData(2, "Event 2", "IT", "01/01/2023"),
  createData(3, "Event 3", "IT", "01/01/2023"),
  createData(4, "Event 4", "IT", "01/01/2023"),
];
const User = () => {
  return (
    <AuthorizedPage>
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
          <Button variant="contained" size="medium" color="success">
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
              <TableCell align="left">Faculty&nbsp;</TableCell>
              <TableCell align="left">Start date&nbsp;</TableCell>
              <TableCell align="left">Action&nbsp;</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Eventsrows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.no}
                </TableCell>

                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.faculty}</TableCell>
                <TableCell align="left">{row.startdate}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    startIcon={<ViewIcon />}
                  >
                    View
                  </Button>
                </TableCell>
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
    </AuthorizedPage>
  );
};

export default User;
