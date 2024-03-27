import * as Yup from "yup";

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string().min(8, "Too short!").required("Required!"),
});

export const RegisterValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!"),
  facultyId: Yup.string().required("Required!"),
});

export const SetupAccountValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required!"),
  password: Yup.string().min(8, "Too short!").required("Required!"),
  phone: Yup.string().required("Required!"),
  dob: Yup.date().required("Required!"),
});
