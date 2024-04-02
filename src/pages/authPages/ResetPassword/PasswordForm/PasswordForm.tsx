import * as S from "./PasswordForm.styled";
import { Formik } from "formik";
import { Form, FormError, FormGroup } from "@components/formComponents";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IResetPasswordPayload } from "@interfaces/user.interfaces";
import { ResetPasswordValidationSchema } from "@utils/auth.utils";

const initialValues: Partial<IResetPasswordPayload> = {
  password: "",
};

const PasswordForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setSemail] = useState("slkdjfskjf");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      navigate("/");
      return;
    }
    setToken(token);
  }, [searchParams, navigate]);

  useEffect(() => {}, [email]);

  return (
    <S.ContainerForm>
      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordValidationSchema}
      >
        <Form>
          <FormGroup>
            <S.Label>Email</S.Label>
            <S.Input disabled value={email} />
          </FormGroup>
          <FormGroup>
            <S.Label>Password</S.Label>
            <S.Input name="password" />
            <FormError name="password" />
          </FormGroup>
        </Form>
      </Formik>
      <S.BtnReset>Reset</S.BtnReset>
      <S.Text>Back To Login</S.Text>
    </S.ContainerForm>
  );
};

export default PasswordForm;
