import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Field, Formik } from "formik";
import { Form } from "@components/formComponents";
import {
  IUpdateFacultyPayload,
  IFaculty,
} from "@interfaces/faculty.interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";

import { notifySuccess } from "@utils/notification.utils";
import { UpdateFacultyvalidationSchema } from "@utils/faculty.utils";
import { updateFaculty } from "@store/faculty";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import service from "@service/faculty";
import { useFormikContext } from "formik";

const FacultyDetail = () => {
  const { facultyId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [faculty, setFaculty] = useState<IFaculty>();

  const initialValues: IUpdateFacultyPayload = {
    name: "",
    _id: "",
    description: "",
    mcId: "",
  };

  useEffect(() => {
    if (!facultyId) return;

    service
      .getFacultyById({ id: facultyId })
      .then((faculty) => setFaculty(faculty));
  });

  const onUpdateFacultyDetail = (values: IUpdateFacultyPayload) =>
    dispatch(updateFaculty(values))
      .unwrap()
      .then(() => notifySuccess("Faculty updated successfully"));

  return (
    <>
      <Typography variant="h4">Faculty Detail</Typography>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "50%" }}>
          <img></img>
        </Box>
        <Box sx={{ width: "50%", border: "1px" }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onUpdateFacultyDetail}
            validationSchema={UpdateFacultyvalidationSchema}
          >
            <Form>
              <FacultyDetailUpdater Faculty={faculty} />
              <Field
                value={faculty?._id}
                disabled={true}
                type="text"
                name="id"
                label="ID"
              ></Field>

              <Field
                value={faculty?.name}
                type="text"
                name="name"
                sx={{ mb: "12px" }}
              ></Field>

              <Field
                value={faculty?.mc?.name}
                type="text"
                name="mcName"
                label="MC Name"
              ></Field>

              <Field
                value={faculty?.description}
                type="text"
                name="description"
                label="Description"
                multiline
              ></Field>

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

function FacultyDetailUpdater({ Faculty }: { Faculty?: IFaculty }) {
  const { setValues } = useFormikContext();

  useEffect(() => {
    if (!Faculty) return;
    setValues({
      name: Faculty.name,
      id: Faculty._id,
      description: Faculty.description,
      mcName: Faculty.mc?.name,
      mcEmail: Faculty.mc?.email,
    });
  }, [Faculty, setValues]);

  return "";
}

export default FacultyDetail;
