import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import {
  Form,
  FormError,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { EGender, IUpdateUserPayload } from "@interfaces/user.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { toIsoDate } from "@utils/date.utils";
import { notifySuccess } from "@utils/notification.utils";
import { UpdateUservalidationSchema } from "@utils/user.utils";
import { updateUser } from "@store/user";
import { Typography } from "@mui/material";

const UserDetail = () => {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: IUpdateUserPayload = {
    name: user?.name,
    phone: user?.phone,
    dob: user?.dob && toIsoDate(user.dob),
    gender: user?.gender,
  };

  const onUpdateProfile = (values: IUpdateUserPayload) =>
    dispatch(updateUser(values))
      .unwrap()
      .then(() => notifySuccess("Profile updated successfully"));

  return (
    <>
      <Typography variant="h4">User profile</Typography>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "50%" }}>
          <img></img>
        </Box>
        <Box sx={{ width: "50%", border: "1px" }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onUpdateProfile}
            validationSchema={UpdateUservalidationSchema}
          >
            <Form>
              <FormLabel>Email</FormLabel>
              <FormInput
                disabled={true}
                type="text"
                name="email"
                value={user?.email}
              />

              <FormLabel>Name</FormLabel>
              <FormInput type="text" name="name" />
              <FormError name="name" />

              <FormLabel>Phone</FormLabel>
              <FormInput type="text" name="phone" />

              <FormLabel>DOB</FormLabel>
              <FormInput type="date" name="dob" />

              <FormLabel>Gender</FormLabel>
              <FormInput component="select" name="gender">
                {Object.values(EGender).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FormInput>

              <Box
                sx={{
                  mt: "24px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{ width: "50%" }}
                  variant="contained"
                  color="warning"
                  type="submit"
                >
                  Save
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default UserDetail;
