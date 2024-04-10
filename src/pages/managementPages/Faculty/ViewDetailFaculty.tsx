import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Field, Formik } from "formik";
import { Form } from "@components/formComponents";
import {
  IUpdateFacultyPayload,
  IFaculty,
} from "@interfaces/faculty.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";

import { notifySuccess } from "@utils/notification.utils";

import { updateFaculty } from "@store/faculty";
import { MenuItem, TextField, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import service from "@service/faculty";
import { useFormikContext } from "formik";
import Textarea from "@mui/joy/Textarea";
import styled from "styled-components";
import { findUsers } from "@store/user";
import { ERole } from "@interfaces/user.interfaces";
const ImageStyled = styled.img`
  width: 100%;
  border-radius: 8px;
`;
const FacultyDetail = () => {
  const { facultyId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [faculty, setFaculty] = useState<IFaculty>();
  const [loading, setLoading] = useState(false);

  const { users: mcs } = useSelector((state: RootState) => state.userState);

  useEffect(() => {
    dispatch(findUsers({ role: ERole.MarketingCoordinator }));
  }, [dispatch]);

  const initialValues: Partial<IUpdateFacultyPayload> = {
    name: "",
    description: "",
    mcId: "",
  };

  const [bannerImage, setBannerImage] = useState<File>();
  const onSelectBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setBannerImage(file);
  };

  useEffect(() => {
    if (!facultyId) return;

    service
      .getFacultyById({ id: facultyId })
      .then((faculty) => setFaculty(faculty));
  }, [facultyId]);

  const onUpdateFacultyDetail = (values: Partial<IUpdateFacultyPayload>) => {
    if (!faculty) return;
    setLoading(true);
    const payload = { ...values, _id: faculty._id };
    if (bannerImage) payload.bannerImage = bannerImage;
    dispatch(updateFaculty(payload))
      .unwrap()
      .then(() => notifySuccess("Faculty updated successfully"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Typography variant="h4">Event information</Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          mt: 5,
          "@media only screen and (max-width: 600px)": {
            display: "block",
          },
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
              faculty?.banner_image_url ||
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
            width: "50%",
            ml: 2,
            "@media only screen and (max-width: 600px)": {
              width: "100%",
              ml: 0,
              mt: 2,
            },
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={onUpdateFacultyDetail}
          >
            <Form>
              <FacultyDetailUpdater faculty={faculty} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-3)",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 1,
                  gap: "var(--s-2)",
                }}
              >
                <Field as={Textarea} id="name" name="name" variant="outlined" />
                <Field
                  as={Textarea}
                  id="description"
                  name="description"
                  placeholder="Decription"
                  variant="outlined"
                />
                <Field
                  as={TextField}
                  id="mcId"
                  name="mcId"
                  variant="outlined"
                  select
                >
                  {mcs?.map((mc) => (
                    <MenuItem key={mc._id} value={mc._id}>
                      {mc.name}
                      <br />
                      {mc.faculty && `Current faculty: ${mc.faculty.name}`}
                    </MenuItem>
                  ))}
                  <MenuItem value=""> No MC</MenuItem>
                </Field>
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
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
};

function FacultyDetailUpdater({ faculty }: { faculty?: IFaculty }) {
  const { setValues } = useFormikContext();

  useEffect(() => {
    if (!faculty) return;
    setValues({
      name: faculty.name,
      description: faculty.description,
      mcId: faculty.mc?._id,
      mcName: faculty.mc?.name,
      mcEmail: faculty.mc?.email,
    });
  }, [faculty, setValues]);

  return "";
}

export default FacultyDetail;
