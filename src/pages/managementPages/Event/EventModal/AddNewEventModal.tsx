// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

const AddNewEventModal = ({
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
          Add new Event
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
          <Button
            variant="outlined"
            size="small"
            startIcon={<CloudUploadIcon />}
            sx={{ width: 222.67, color: "gray", borderColor: "gray" }}
          >
            Upload Image
          </Button>
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
  );
};

export default AddNewEventModal;
