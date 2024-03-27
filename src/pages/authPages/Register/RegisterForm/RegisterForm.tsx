import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import * as S from "./RegisterForm.styled";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { useEffect } from "react";
import { findFaculties } from "@store/faculty/facultyActions";
import { IGuestRegisterPayload } from "@interfaces/user.interfaces";

interface IRegisterFormProps {
  onSubmit: (values: IGuestRegisterPayload) => void;
  error: string;
}

const initialValues: IGuestRegisterPayload = {
  email: "",
  facultyId: "",
};

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!"),
  facultyId: Yup.string().required("Required!"),
});

const RegisterForm = ({ onSubmit, error }: IRegisterFormProps) => {
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
        validationSchema={RegisterSchema}
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
                <option value={faculty._id}>{faculty.name}</option>
              ))}
            </FormInput>
            <FormError name="facultyId" />
          </FormGroup>
          <FormButton type="submit">Continue</FormButton>
          {error && <S.Error>{error}</S.Error>}
        </Form>
      </Formik>
    </S.Container>
  );
};

export default RegisterForm;
