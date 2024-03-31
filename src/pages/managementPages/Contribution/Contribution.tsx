import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import InputAdornment from "@mui/material/InputAdornment";
import {
  AddAndSort,
  Form,
  HeadlineAndDelete,
  Headline,
} from "./Contribution.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ContributionRows from "./ContributionRows/ContributionRows";

interface ContributionData {
  no: number;
  title: string;
  author: string;
  event: string;
}
function createData(no: number, title: string, author: string, event: string) {
  return { no, title, author, event };
}

const Contributions: ContributionData[] = [
  createData(1, "Nguyen Van A", "Bui Huong", "IT"),
  createData(2, "Nguyen Van A", "Bui Huong", "IT"),
  createData(3, "Nguyen Van A", "Bui Huong", "IT"),
  createData(4, "Nguyen Van A", "Bui Huong", "IT"),
];
const Contribution: React.FC = () => {
  return (
    <>
      <Headline>Contributions</Headline>

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
        <Headline>List of contributions</Headline>
        <Button variant="contained" size="medium" color="error">
          Delete All
        </Button>
      </HeadlineAndDelete>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Author&nbsp;</TableCell>
              <TableCell align="left">Faculty&nbsp;</TableCell>
              <TableCell align="left">Action&nbsp;</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Contributions.map((row) => (
              <ContributionRows key={row.no} Contribution={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contribution;
