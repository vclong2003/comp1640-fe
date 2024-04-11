import { IFindContributionsPayload } from "@interfaces/contribution.interfaces";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { setFilter } from "@store/contribution";
import { findFaculties } from "@store/faculty";
import { AppDispatch, RootState } from "@store/index";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findEvents } from "@store/event";

const initialValues: IFindContributionsPayload = {
  title: "",
  facultyId: "",
  eventId: "",
  authorName: "",
};

export default function Filter() {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const { events } = useSelector((state: RootState) => state.eventState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(findEvents({}));
  }, [dispatch]);

  const onSubmit = (values: IFindContributionsPayload) => {
    dispatch(setFilter(values));
  };

  const onReset = () => {
    dispatch(setFilter(initialValues));
  };

  const styled = {
    width: "160px",
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

          <Field
            as={TextField}
            name="eventId"
            label="Event"
            select
            defaultValue=""
            sx={styled}
          >
            <MenuItem value="">All</MenuItem>
            {events.map((event) => (
              <MenuItem key={event._id} value={event._id}>
                {event.name}
              </MenuItem>
            ))}
          </Field>

          <Field
            as={TextField}
            name="title"
            label="Title"
            variant="outlined"
            sx={styled}
          />

          <Field
            as={TextField}
            name="authorName"
            label="Author Name"
            variant="outlined"
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

          <Button variant="contained" type="submit" sx={styled}>
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
