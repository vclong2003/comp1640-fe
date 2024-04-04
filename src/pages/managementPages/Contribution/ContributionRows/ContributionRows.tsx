import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteContributionModal from "../ContributionModal/DeleteContributionModal";
import ViewIcon from "@mui/icons-material/Visibility";
import { IContribution } from "@interfaces/contribution.interfaces";

interface ContributionRowProps {
  contribution: IContribution;
}

const ContributionRow: React.FC<ContributionRowProps> = ({
  contribution,
}: ContributionRowProps) => {
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
          {contribution._id}
        </TableCell>
        <TableCell align="left">{contribution.title}</TableCell>
        <TableCell align="left">{contribution.author.name}</TableCell>
        <TableCell align="left">{contribution.event.name}</TableCell>
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
