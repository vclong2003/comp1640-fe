import { Formik } from "formik";
import * as S from "./SetupForm.styled";
import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { EGender, ISetupAccountPayload } from "@interfaces/user.interfaces";
import { SetupAccountValidationSchema } from "@utils/auth.utils";

interface ISetupFormProps {
  onSubmit: (values: Omit<ISetupAccountPayload, "token">) => void;
  error: string;
  email: string;
}

const initialValues: Omit<ISetupAccountPayload, "token"> = {
  password: "",
  name: "",
  phone: "",
  gender: EGender.Male,
  dob: "",
};

const SetupForm = ({ email, error, onSubmit }: ISetupFormProps) => {
  return (
    <S.Container>
      <S.Title>Setup Your Account</S.Title>
      {email && <S.Description>Setting up account for {email}</S.Description>}
      <Formik
        initialValues={initialValues}
        validationSchema={SetupAccountValidationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {/* Name ----------------------------------- */}
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="name" />
            <FormError name="name" />
          </FormGroup>
          {/* Phone ----------------------------------- */}
          <FormGroup>
            <FormLabel>Phone</FormLabel>
            <FormInput type="text" name="phone" />
            <FormError name="phone" />
          </FormGroup>
          {/* Date of Birth ---------------------------- */}
          <FormGroup>
            <FormLabel>Date of Birth</FormLabel>
            <FormInput type="date" name="dob" />
            <FormError name="dob" />
          </FormGroup>
          {/* Gender ----------------------------------- */}
          <FormGroup>
            <FormLabel>Gender</FormLabel>
            <FormInput component="select" name="gender">
              <option value={EGender.Male}>Male</option>
              <option value={EGender.Female}>Female</option>
              <option value={EGender.Other}>Other</option>
            </FormInput>
          </FormGroup>
          {/* Password --------------------------------- */}
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" name="password" />
            <FormError name="password" />
          </FormGroup>
          <FormButton type="submit">Submit</FormButton>
          {error && <S.Error>{error}</S.Error>}
        </Form>
      </Formik>
    </S.Container>
  );
};b

export default SetupForm;
