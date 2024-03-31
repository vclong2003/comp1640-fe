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

const initialValues: ILoginPayload = {
  email: "",
  password: "",
};

interface ILoginFormProps {
  onSubmit: (values: ILoginPayload) => void;
  onGoogleLogin?: () => void;
}

export default function LoginForm({
  onSubmit,
  onGoogleLogin,
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
