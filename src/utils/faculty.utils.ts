import * as Yup from "yup";

export const UpdateFacultyvalidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});
