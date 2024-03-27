import * as S from "./LoginForm.styled";
import * as Yup from "yup";

import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "../../../../components/formComponents";
import { ILoginPayload } from "@interfaces/user.interfaces";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string().min(8, "Too short!").required("Required!"),
});

const initialValues: ILoginPayload = {
  email: "",
  password: "",
};

interface ILoginFormProps {
  error: string;
  onSubmit: (values: ILoginPayload) => void;
  onGoogleLogin?: () => void;
}

export default function LoginForm({
  error,
  onSubmit,
  onGoogleLogin,
}: ILoginFormProps) {
  return (
    <S.Container>
      <S.FormContainer
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => onSubmit(values as ILoginPayload)}
      >
        <Form>
          {error && <S.Error>{error}</S.Error>}
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
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <FormError name="password" />
          </FormGroup>
          <FormButton type="submit">LOGIN</FormButton>
          <S.BtnLoginWithGoogle type="button" onClick={onGoogleLogin}>
            Login With Google
          </S.BtnLoginWithGoogle>
        </Form>
      </S.FormContainer>
      <S.LinkRegis>Don't have an account? Register here!</S.LinkRegis>
    </S.Container>
  );
}
