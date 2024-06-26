import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
import { Textarea } from "@mui/joy";
import { ERole, IUser } from "@interfaces/user.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { Field, Form, Formik } from "formik";
import { ICreateFacultyPayload } from "@interfaces/faculty.interfaces";
import { notifyInfo, notifySuccess } from "@utils/notification.utils";
import { findUsers } from "@store/user";
import { createFaculty } from "@store/faculty";

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

const initialValues: Partial<ICreateFacultyPayload> = {
  name: "",
  description: "",
  mcId: "",
};

export default function FacultyModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const { users: mcList } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const [bannerImage, setBannerImage] = useState<File>();

  useEffect(() => {
    dispatch(findUsers({ role: ERole.MarketingCoordinator }));
  }, [dispatch]);

  const onSelectBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setBannerImage(file);
  };

  const handleSubmit = (values: Partial<ICreateFacultyPayload>) => {
    if (!bannerImage) {
      notifyInfo("Please select banner image");
      return;
    }
    dispatch(createFaculty({ ...values, bannerImage } as ICreateFacultyPayload))
      .unwrap()
      .then(() => notifySuccess("Create faculty successfully"))
      .then(() => handleClose());
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
                gap: "var(--s-4)",
              }}
            >
              {/* Name ------------------------------------- */}
              <Field
                as={TextField}
                label="Name"
                variant="outlined"
                name="name"
                id="name"
                size="small"
              />
              {/* Select MC ------------------------------- */}
              <Field
                as={TextField}
                label="Select MC"
                variant="outlined"
                name="mcId"
                size="small"
                id="mcId"
                select
                sx={{ minWidth: 200 }}
              >
                <MenuItem value="">Select MC</MenuItem>
                {mcList.map((mc: IUser) => (
                  <MenuItem key={mc._id} value={mc._id}>
                    {mc.name}, {mc.email}
                    <br />
                    Current Faculty: {mc.faculty?.name}
                  </MenuItem>
                ))}
              </Field>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 2,
              }}
            >
              {/* Description ------------------ */}
              <Field
                as={Textarea}
                id="description"
                name="description"
                placeholder="Decription"
                variant="outlined"
              />
              {/* Banner Image ------------------ */}
              <Button variant="outlined" component="label">
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={onSelectBannerImage}
                />
                {bannerImage ? bannerImage.name : "Select Banner Image"}
              </Button>
            </Box>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              sx={{ mt: 4, left: "40%" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
}
