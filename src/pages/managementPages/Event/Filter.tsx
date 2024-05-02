import AuthorizedComponent from "@components/AuthorizedComponent/AuthorizedComponent";
import { IFindEventsPayload } from "@interfaces/event.interfaces";
import { ERole } from "@interfaces/user.interfaces";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { setFilter } from "@store/event";
import { findFaculties } from "@store/faculty";
import { AppDispatch, RootState } from "@store/index";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialValues: IFindEventsPayload = {
  name: "",
  facultyId: "",
  start_date: "",
  final_closure_date: "",
  mcName: "",
};

export default function Filter() {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
  }, [dispatch]);

  const onSubmit = (values: IFindEventsPayload) => {
    dispatch(setFilter(values));
  };

  const onReset = () => {
    dispatch(setFilter(initialValues));
  };

  const styled = {
    width: "150px",
    height: "56px",
    m: "16px",
    ml: 0,
  };
  return (
    <Box width="100%" marginTop={2}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <Form>
          {/* Faculty selector ---------------------------------- */}
          <AuthorizedComponent
            allowedRoles={[ERole.Admin, ERole.MarketingManager]}
          >
            <Field
              as={TextField}
              name="facultyId"
              label="Faculty"
              select
              defaultValue=""
              sx={styled}
            >
              <MenuItem value="">All</MenuItem>
              {faculties.map((faculty) => (
                <MenuItem key={faculty._id} value={faculty._id}>
                  {faculty.name}
                </MenuItem>
              ))}
            </Field>
          </AuthorizedComponent>

          <Field
            as={TextField}
            name="name"
            label="Name"
            variant="outlined"
            sx={styled}
          />

          <Field
            as={TextField}
            name="mcName"
            label="MC Name"
            variant="outlined"
            fullWidth
            sx={styled}
          />

          <Field
            as={TextField}
            type="date"
            variant="outlined"
            sx={styled}
            label="Start Date"
          />

          <Field
            as={TextField}
            label="Final Closure Date"
            type="date"
            variant="outlined"
            sx={styled}
          />

          <Button variant="contained" type="submit" sx={styled} size="large">
            Apply
          </Button>

          <Button variant="outlined" type="reset" sx={styled}>
            Reset
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
