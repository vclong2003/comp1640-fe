// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FacultyFilter from "../EventFilter/FacultyFilter";
import StatusFilter from "../EventFilter/StatusFilter";
import MCFilter from "../EventFilter/MCFilter";
import TimeLineFilter from "../EventFilter/TimeLineFilter";
import Button from "@mui/material/Button";

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

const EventFilterModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Event Filter
        </Typography>

        <FacultyFilter />
        <StatusFilter />
        <MCFilter />

        <TimeLineFilter />

        <Button variant="contained" sx={{ width: "100%", mt: 2 }}>
          Filter
        </Button>
      </Box>
    </Modal>
  );
};

export default EventFilterModal;
