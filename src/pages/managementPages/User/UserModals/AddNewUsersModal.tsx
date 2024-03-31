// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
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

const AddNewUserModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add new User
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <TextField
            id="outlined-basic"
            label="Gmail"
            variant="outlined"
            sx={{ mr: 2 }}
          />
          <FormControl sx={{ minWidth: 240 }}>
            <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"IT"}>IT</MenuItem>
              <MenuItem value={"Business"}>Business</MenuItem>
            </Select>
          </FormControl>
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

export default AddNewUserModal;
