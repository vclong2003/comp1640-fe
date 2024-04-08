// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import { ERole, ICreateUserPayload } from "@interfaces/user.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import services from "@service/user";
import { notifySuccess } from "@utils/notification.utils";
import { Field, Form, Formik } from "formik";
import { IFaculty } from "@interfaces/faculty.interfaces";
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

const intialValues: ICreateUserPayload = {
  email: "",
  facultyId: "",
  role: ERole.Student,
};

const AddNewUserModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
  }, [dispatch]);

  const handleSubmit = (values: ICreateUserPayload) => {
    console.log(values);
    services
      .createuser(values)
      .then(() => notifySuccess("Create user successfully"))
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
          Add new User
        </Typography>
        <Formik initialValues={intialValues} onSubmit={handleSubmit}>
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-4)",
                mt: 2,
              }}
            >
              <Field
                as={TextField}
                id="outlined-basic"
                label="Gmail"
                variant="outlined"
                name="email"
                type="email"
              />
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
                label="Select Role"
                variant="outlined"
                name="role"
                size="small"
                id="fcId"
                select
                sx={{ minWidth: 200 }}
              >
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value={ERole.Student}>Student</MenuItem>
                <MenuItem value={ERole.Admin}>Admin</MenuItem>
                <MenuItem value={ERole.MarketingCoordinator}>
                  Marketing Condiantor
                </MenuItem>
                <MenuItem value={ERole.MarketingManager}>
                  Marketing Manager
                </MenuItem>
              </Field>
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

export default AddNewUserModal;
