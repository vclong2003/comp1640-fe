// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { Textarea } from "@mui/joy";
// import { IUser } from "@interfaces/user.interfaces";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
  "@media only screen and (max-width: 600px)": {
    width: "90%",
  },
};

export default function FacultyModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  // const [mcList, setMcList] = useState<IUser[]>([]);
  const [bannerImageUrl, setBannerImageUrl] = useState("");

  const onSelectBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setBannerImageUrl(URL.createObjectURL(file));
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
          Add new Faculty
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            "@media only screen and (max-width: 600px)": {
              display: "block",
            },
          }}
        >
          <Select
            defaultValue=""
            variant="outlined"
            required
            sx={{
              minWidth: 200,
              "@media only screen and (max-width: 600px)": {
                width: "100%",
              },
            }}
          >
            <MenuItem value="">Select MC</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{
              "@media only screen and (max-width: 600px)": {
                width: "100%",
                mt: 2,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <Textarea
            id="outlined-basic"
            placeholder="Decription"
            variant="outlined"
          />
          <Button variant="outlined" component="label">
            <input
              id="bannerImageInput"
              type="file"
              accept="image/*"
              hidden
              onChange={onSelectBannerImage}
            />
            Select Banner Image
          </Button>
        </Box>

        <Box sx={{ mt: 4 }}>
          {bannerImageUrl && (
            <img src={bannerImageUrl} alt="Banner" style={{ width: "100%" }} />
          )}
        </Box>

        <Box sx={{ display: "flex", mt: 4, justifyContent: "center" }}>
          <Button variant="contained" size="medium" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
