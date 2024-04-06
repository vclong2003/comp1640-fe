import * as S from "./LoginForm.styled";

import {
  Form,
  FormButton,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "@components/formComponents";
import { ILoginPayload } from "@interfaces/user.interfaces";
import { LoginValidationSchema } from "@utils/auth.utils";
import { Link } from "react-router-dom";

const initialValues: ILoginPayload = {
  email: "",
  password: "",
};

interface ILoginFormProps {
  onSubmit: (values: ILoginPayload) => void;
  onGoogleLogin?: () => void;
  loading?: boolean;
}

export default function LoginForm({
  onSubmit,
  onGoogleLogin,
  loading,
}: ILoginFormProps) {
  return (
    <S.Container>
      <S.FormContainer
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => onSubmit(values as ILoginPayload)}
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
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <FormError name="password" />
          </FormGroup>
          <FormButton type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </FormButton>
          <S.BtnLoginWithGoogle
            type="button"
            onClick={onGoogleLogin}
            disabled={loading}
          >
            Login With Google
          </S.BtnLoginWithGoogle>
        </Form>
      </S.FormContainer>
      <Link to="/register">
        <S.LinkRegis>Don't have an account? Register here!</S.LinkRegis>
      </Link>
      <Link to="/forgot-password">
        <S.LinkForgot>Forgot Password.</S.LinkForgot>
      </Link>
    </S.Container>
  );
}
