import {
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import * as S from "./RegisterForm.styled";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useEffect } from "react";
import { findFaculties } from "@store/faculty/facultyActions";

interface IRegisterFormProps {}

const RegisterForm = () => {
  const { faculties } = useSelector((state: RootState) => state.facultyState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findFaculties({}));
  }, [dispatch]);

  return (
    <S.Container>
      <Formik>
        <Form>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Faculty</FormLabel>
            <FormInput component="select" name="gender">
              <option value="">Please select a faculty</option>
              {faculties.map((faculty) => (
                <option value={faculty._id}>{faculty.name}</option>
              ))}
            </FormInput>
          </FormGroup>
          <FormButton type="submit">Continue</FormButton>
        </Form>
      </Formik>
    </S.Container>
  );
};

export default RegisterForm;
