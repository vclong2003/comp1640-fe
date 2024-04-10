import { HeadlineAndDelete, Headline } from "./Contribution.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ContributionRows from "./ContributionRows/ContributionRows";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { findContributions } from "@store/contribution";
import { useEffect } from "react";
import { findFaculties } from "@store/faculty";
import Filter from "./Filter";

const Contribution: React.FC = () => {
  const { contributions, filter } = useSelector(
    (state: RootState) => state.contributionState,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
    dispatch(findContributions({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(findContributions(filter));
  }, [dispatch, filter]);

  return (
    <>
      <Headline>Contributions</Headline>

      <Filter />

      <HeadlineAndDelete>
        <Headline>List of contributions</Headline>
      </HeadlineAndDelete>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Author&nbsp;</TableCell>
              <TableCell align="left">Faculty&nbsp;</TableCell>
              <TableCell align="left">Event&nbsp;</TableCell>
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
