import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import * as S from "./RegisterForm.styled";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useEffect } from "react";
import { IGuestRegisterPayload } from "@interfaces/user.interfaces";
import { RegisterValidationSchema } from "@utils/auth.utils";
import { findFaculties } from "@store/faculty";

interface IRegisterFormProps {
  onSubmit: (values: IGuestRegisterPayload) => void;
  loading?: boolean;
}

const initialValues: IGuestRegisterPayload = {
  email: "",
  facultyId: "",
};

const RegisterForm = ({ onSubmit, loading }: IRegisterFormProps) => {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
  }, [dispatch]);

  return (
    <S.Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={RegisterValidationSchema}
      >
        <Form>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <FormError name="email" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Faculty</FormLabel>
            <FormInput component="select" name="facultyId">
              <option value="">Please select a faculty</option>
              {faculties.map((faculty) => (
                <option key={faculty._id} value={faculty._id}>
                  {faculty.name}
                </option>
              ))}
            </FormInput>
            <FormError name="facultyId" />
          </FormGroup>
          {/* <Link to="/email-sent"> */}
          <FormButton type="submit" disabled={loading}>
            {loading ? "Loading..." : "Continue"}
          </FormButton>
          {/* </Link> */}
        </Form>
      </Formik>
    </S.Container>
  );
};

export default RegisterForm;
