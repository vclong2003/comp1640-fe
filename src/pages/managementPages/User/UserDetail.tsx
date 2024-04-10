import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Field, Formik } from "formik";
import { Form } from "@components/formComponents";
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
import { MenuItem, Select, TextField, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import service from "@service/user";
import { useFormikContext } from "formik";
import { ImageStyled } from "./User.styled";

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

  const [bannerImage] = useState<File>();

  useEffect(() => {
    if (!userId) return;
    service.getUserById({ id: userId }).then((user) => setUser(user));
  }, [userId]);

  const onUpdateProfile = (values: IUpdateUserPayload) =>
    dispatch(updateUser(values))
      .unwrap()
      .then(() => notifySuccess("Profile updated successfully"));

  return (
    <>
      <Typography variant="h4">User profile</Typography>
      <Box
        sx={{
          display: "flex",

          width: "100%",
          mt: 5,
        }}
      >
        <Box
          sx={{
            width: "50%",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <ImageStyled
            src={
              (bannerImage && URL.createObjectURL(bannerImage)) ||
              user?.avatar_url ||
              ""
            }
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={onUpdateProfile}
            validationSchema={UpdateUservalidationSchema}
          >
            <Form>
              <UserDetailUpdater user={user} />
              <Field
                as={TextField}
                id="email"
                name="email"
                variant="outlined"
                sx={{ mb: 2 }}
              />

              <Field
                label="Name"
                as={TextField}
                id="name"
                name="name"
                variant="outlined"
                sx={{ mb: 2 }}
              />

              <Field
                label="Phone"
                as={TextField}
                variant="outlined"
                type="text"
                name="phone"
                sx={{ mb: 2 }}
              />

              <Field
                label="Date of Birth"
                as={TextField}
                variant="outlined"
                type="date"
                name="dob"
                sx={{ mb: 2 }}
              />

              <Field
                as={Select}
                variant="outlined"
                name="gender"
                sx={{ mb: 2 }}
              >
                <MenuItem value={EGender.Male}>Male </MenuItem>
                <MenuItem value={EGender.Female}>Female</MenuItem>
                <MenuItem value={EGender.Other}>Other</MenuItem>
              </Field>

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
      email: user.email,
    });
  }, [user, setValues]);

  return "";
}

export default UserDetail;
