import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteContributionModal from "../ContributionModal/DeleteContributionModal";
import ViewIcon from "@mui/icons-material/Visibility";
interface ContributionRowProps {
  Contribution: {
    no: number;
    title: string;
    author: string;
    event: string;
  };
}

const ContributionRow: React.FC<ContributionRowProps> = ({ Contribution }) => {
  const [openDeleteContributionModal, setOpenDeleteContributionModal] =
    useState(false);

  const handleOpenDeleteContributionModal = () =>
    setOpenDeleteContributionModal(true);
  const handleCloseDeleteContributionModal = () =>
    setOpenDeleteContributionModal(false);

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {Contribution.no}
        </TableCell>
        <TableCell align="left">{Contribution.title}</TableCell>
        <TableCell align="left">{Contribution.author}</TableCell>
        <TableCell align="left">{Contribution.event}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<ViewIcon />}
            sx={{ mr: 4 }}
          >
            View
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleOpenDeleteContributionModal}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <DeleteContributionModal
        open={openDeleteContributionModal}
        handleClose={handleCloseDeleteContributionModal}
      />
    </>
  );
};

export default ContributionRow;
