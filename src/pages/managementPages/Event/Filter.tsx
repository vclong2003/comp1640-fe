import { IFindEventsPayload } from "@interfaces/event.interfaces";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
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

  return (
    <Box width="100%" marginTop={2}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item>
              <Field
                as={TextField}
                name="facultyId"
                label="Faculty"
                select
                helperText="Select faculty"
                defaultValue=""
              >
                <MenuItem value="">All</MenuItem>
                {faculties.map((faculty) => (
                  <MenuItem key={faculty._id} value={faculty._id}>
                    {faculty.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            <Grid item>
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Field
                as={TextField}
                name="mcName"
                label="MC Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Field
                as={TextField}
                name="start_date"
                type="date"
                variant="outlined"
                fullWidth
                helperText="Start Date"
              />
            </Grid>
            <Grid item>
              <Field
                as={TextField}
                name="final_closure_date"
                helperText="Final Closure Date"
                type="date"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                Apply
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" type="reset">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
}
