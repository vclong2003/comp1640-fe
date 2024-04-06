// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Textarea } from "@mui/joy";
import { ICreateEventPayload } from "@interfaces/event.interfaces";
import { useEffect, useState } from "react";
import { notifyInfo, notifySuccess } from "@utils/notification.utils";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { Field, Form, Formik } from "formik";
import { MenuItem } from "@mui/material";
import { IFaculty } from "@interfaces/faculty.interfaces";
import { createEvent, findEvents } from "@store/event";
import { findFaculties } from "@store/faculty";

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

const intialValues: Partial<ICreateEventPayload> = {
  name: "",
  description: "",
  start_date: "",
  first_closure_date: "",
  final_closure_date: "",
  facultyId: "",
};

const AddNewEventModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const dispatch = useDispatch<AppDispatch>();

  const [bannerImage, setBannerImage] = useState<File | null>(null);

  useEffect(() => {
    dispatch(findFaculties({}));
    dispatch(findEvents({}));
  }, [dispatch]);

  const onSelectBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setBannerImage(file);
  };

  const handleSubmit = (values: Partial<ICreateEventPayload>) => {
    if (!bannerImage) {
      notifyInfo("Please select banner image");
      return;
    }
    console.log(values);
    dispatch(createEvent({ ...values, bannerImage } as ICreateEventPayload))
      .unwrap()
      .then(() => notifySuccess("Create event successfully"))
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
          Add new Event
        </Typography>
        <Formik initialValues={intialValues} onSubmit={handleSubmit}>
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
                gap: "var(--s-2)",
              }}
            >
              <Field
                as={TextField}
                label="Select Faculty"
                variant="outlined"
                name="facultyId"
                size="small"
                id="fcId"
                select
                sx={{ minWidth: 200 }}
              >
                <MenuItem value="">Select Faculty</MenuItem>
                {faculties.map((fc: IFaculty) => (
                  <MenuItem key={fc._id} value={fc._id}>
                    {fc.name}
                    <br />
                    {/* Current Faculty: {fc.?.name} */}
                  </MenuItem>
                ))}
              </Field>
              <Field
                as={TextField}
                label="Name"
                variant="outlined"
                name="name"
                id="name"
                size="small"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 1,
                gap: "var(--s-2)",
              }}
            >
              <Field
                as={Textarea}
                id="description"
                name="description"
                placeholder="Decription"
                variant="outlined"
              />
              <Field
                as={TextField}
                name="start_date"
                placeholder="Start Date"
                variant="outlined"
                size="small"
                type="datetime-local"
              />
              <Field
                as={TextField}
                name="first_closure_date"
                placeholder="First Closure Date"
                variant="outlined"
                size="small"
                type="datetime-local"
              />
              <Field
                as={TextField}
                name="final_closure_date"
                placeholder="Final Closure Date"
                variant="outlined"
                size="small"
                type="datetime-local"
              />
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
};

export default AddNewEventModal;
