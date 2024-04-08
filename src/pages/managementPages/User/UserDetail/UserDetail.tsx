import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import {
  Form,
  FormError,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import {
  EGender,
  IUpdateUserPayload,
  IUser,
} from "@interfaces/user.interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { toIsoDate } from "@utils/date.utils";
import { notifySuccess } from "@utils/notification.utils";
import { UpdateUservalidationSchema } from "@utils/user.utils";
import { updateUser } from "@store/user";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import service from "@service/user";
import { useFormikContext } from "formik";

const UserDetail = () => {
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<IUser>();

  const initialValues: IUpdateUserPayload = {
    name: "",
    phone: "",
    dob: "",
    gender: EGender.Female,
  };

  useEffect(() => {
    if (!userId) return;
    service.getUserById({ id: userId }).then((user) => setUser(user));
  });

  const onUpdateProfile = (values: IUpdateUserPayload) =>
    dispatch(updateUser(values))
      .unwrap()
      .then(() => notifySuccess("Profile updated successfully"));

  return (
    <>
      <Typography variant="h4">User profile</Typography>
      <Box sx={{ display: "flex"  ,width: "100%" }}>
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
              <UserDetailUpdater user={user} />
              <FormLabel>Email</FormLabel>
              <FormInput
                value={user?.email}
                disabled={true}
                type="text"
                name="email"
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

function UserDetailUpdater({ user }: { user?: IUser }) {
  const { setValues } = useFormikContext();

  useEffect(() => {
    if (!user) return;
    setValues({
      name: user.name,
      phone: user.phone,
      dob: user.dob && toIsoDate(user.dob),
      gender: user.gender,
    });
  }, [user, setValues]);

  return "";
}

export default UserDetail;
