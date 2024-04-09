import { IEvent, IUpdateEventPayload } from "@interfaces/event.interfaces";
import { AppDispatch } from "@store/index";
import { Field, Form, Formik, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import service from "@service/event";
import { updateEvent } from "@store/event";
import { notifySuccess } from "@utils/notification.utils";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Textarea } from "@mui/joy";
import { toInputDateTime } from "@utils/date.utils";

import { toInputDateTime } from "@utils/date.utils";

const EventDetailManage = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [event, setEvent] = useState<IEvent>();
  const { faculties } = useSelector((state: RootState) => state.facultyState);

  const intialValues: Partial<IUpdateEventPayload> = {
    name: "",
    description: "",
    start_date: new Date().toISOString(),
    first_closure_date: "",
    final_closure_date: "",
  };
  const [bannerImage, setBannerImage] = useState<File>();
  const onSelectBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setBannerImage(file);
  };

  useEffect(() => {
    if (!eventId) return;
    service.findEventById({ _id: eventId }).then((event) => setEvent(event));
  }, []);

  const onUpdateEvent = (values: Partial<IUpdateEventPayload>) => {
    if (!event) return;
    const payload: IUpdateEventPayload = { _id: event?._id, ...values };
    if (bannerImage) payload.bannerImage = bannerImage;
    dispatch(updateEvent(payload))
      .unwrap()
      .then(() => notifySuccess("Event updated successfully"));
  };
  return (
    <>
      <Typography variant="h4">Event information</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 5,
        }}
      >
        <Box
          sx={{
            width: "50%",
            border: "1px",
          }}
        >
          <Formik initialValues={intialValues} onSubmit={onUpdateEvent}>
            <Form>
              <EventDetailUpdater event={event} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-3)",
                }}
              >
                <Field
                  as={TextField}
                  label="Name"
                  variant="outlined"
                  name="name"
                  id="name"
                  size="small"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 1,
                  gap: "var(--s-2)",
                }}
              >
                <Field
                  as={Textarea}
                  id="description"
                  name="description"
                  placeholder="Decription"
                  variant="outlined"
                />
                <Field
                  as={TextField}
                  name="start_date"
                  placeholder="Start Date"
                  variant="outlined"
                  size="small"
                  type="datetime-local"
                />
                <Field
                  as={TextField}
                  name="first_closure_date"
                  placeholder="First Closure Date"
                  variant="outlined"
                  size="small"
                  type="datetime-local"
                />
                <Field
                  as={TextField}
                  name="final_closure_date"
                  placeholder="Final Closure Date"
                  variant="outlined"
                  size="small"
                  type="datetime-local"
                />
                <img
                  src={
                    (bannerImage && URL.createObjectURL(bannerImage)) ||
                    event?.banner_image_url ||
                    ""
                  }
                />
                <Button variant="outlined" component="label">
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={onSelectBannerImage}
                  />
                  {bannerImage ? bannerImage.name : "Select Banner Image"}
                </Button>
              </Box>
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

function EventDetailUpdater({ event }: { event?: IEvent }) {
  const { setValues } = useFormikContext();

  useEffect(() => {
    if (!event) return;
    setValues({
      name: event.name,
      description: event.description,
      start_date: toInputDateTime(event.start_date),
      first_closure_date: toInputDateTime(event.first_closure_date),
      final_closure_date: toInputDateTime(event.final_closure_date),
    });
  }, [event]);
  return "";
}

export default EventDetailManage;
