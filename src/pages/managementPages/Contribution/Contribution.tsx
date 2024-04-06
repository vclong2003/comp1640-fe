import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import InputAdornment from "@mui/material/InputAdornment";
import { HeadlineAndDelete, Headline } from "./Contribution.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ContributionRows from "./ContributionRows/ContributionRows";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { findContributions } from "@store/contribution";
import { useEffect } from "react";
import { findFaculties } from "@store/faculty";

const Contribution: React.FC = () => {
  const { contributions } = useSelector(
    (state: RootState) => state.contributionState,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
    dispatch(findContributions({}));
  }, [dispatch]);

  return (
    <>
      <Headline>Contributions</Headline>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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

        <Button variant="contained" size="medium">
          Sort by
        </Button>
      </Box>

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
            {contributions.map((contribution) => (
              <ContributionRows
                key={contribution._id}
                contribution={contribution}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contribution;
