import { ERole, IFindUsersPayload } from "@interfaces/user.interfaces";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { AppDispatch, RootState } from "@store/index";
import { setFilter } from "@store/user";
import { Field, Form, Formik } from "formik";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const mobileMediaQuery = {
  "@media only screen and (max-width: 600px)": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    mb: "8px",
  },
};

const FilterMediaQuery = {
  "@media only screen and (max-width: 600px)": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    mb: "8px",
  },
};

const initialValues: IFindUsersPayload = {
  name: "",
  email: "",
  role: "",
  facultyId: "",
};

export default function UserFilter() {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: IFindUsersPayload) => {
    dispatch(setFilter(values));
  };

  const onReset = () => {
    dispatch(setFilter(initialValues));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} onReset={onReset}>
      <Form>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media only screen and (max-width: 600px)": {
              display: "block",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",
              ...mobileMediaQuery,
            }}
          >
            <Field
              as={TextField}
              id="outlined-basic"
              name="name"
              label="User Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch />
                  </InputAdornment>
                ),
              }}
              sx={{ width: "45%", height: "40px", mr: "10px" }}
              variant="outlined"
              size="small"
            />
            <Field
              as={TextField}
              id="outlined-basic"
              label="Email"
              name="email"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch />
                  </InputAdornment>
                ),
              }}
              sx={{ width: "45%", height: "40px" }}
              variant="outlined"
              size="small"
            />
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",

              "@media only screen and (max-width: 600px)": {
                display: "block",
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                width: "60%",
                display: "flex",
                justifyContent: "flex-end",
                height: "40px",
                ...FilterMediaQuery,
              }}
            >
              <Field
                as={TextField}
                name="role"
                label="Role"
                select
                defaultValue=""
                size="small"
                sx={{ width: "45%", height: "40px", mr: 2 }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value={ERole.Admin}>Admin</MenuItem>
                <MenuItem value={ERole.MarketingCoordinator}>
                  Marketing Coordinator
                </MenuItem>
                <MenuItem value={ERole.Student}>Student</MenuItem>
                <MenuItem value={ERole.MarketingManager}>
                  Marketing Manager
                </MenuItem>
                <MenuItem value={ERole.Guest}>Guest</MenuItem>
              </Field>

              <Field
                as={TextField}
                name="facultyId"
                label="Faculty"
                select
                defaultValue=""
                size="small"
                sx={{ width: "45%", height: "40px" }}
              >
                <MenuItem value="">All</MenuItem>
                {faculties.map((faculty) => (
                  <MenuItem key={faculty._id} value={faculty._id}>
                    {faculty.name}
                  </MenuItem>
                ))}
              </Field>
            </Box>

            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                ...FilterMediaQuery,
              }}
            >
              <Button
                variant="outlined"
                size="medium"
                color="info"
                sx={{ mr: "8px" }}
                onClick={onReset}
                type="reset"
              >
                Reset All
              </Button>
              <Button
                variant="contained"
                type="submit"
                size="medium"
                color="info"
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
}
