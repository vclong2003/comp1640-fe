import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import WarningIcon from "@mui/icons-material/Warning";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};

const DeleteUserModal = ({
  open,
  handleClose,
  onConfirmDisable,
}: {
  open: boolean;
  handleClose: () => void;
  onConfirmDisable: () => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          <WarningIcon sx={{ mr: 1, fontSize: 20 }} />
          Are you sure you want to disable this User?
        </Typography>

        <Typography
          id="modal-modal-description"
          variant="body1"
          sx={{ textAlign: "center", mt: 2 }}
        >
          Disabling a user will prevent them from accessing the system.
        </Typography>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="contained"
            size="medium"
            color="success"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="error"
            onClick={onConfirmDisable}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
