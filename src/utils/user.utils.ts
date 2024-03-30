import * as Yup from "yup";

export const UpdateUservalidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});
