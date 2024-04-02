import * as S from "./PasswordForm.styled";
import { Formik } from "formik";
import { Form, FormError, FormGroup } from "@components/formComponents";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IResetPasswordPayload } from "@interfaces/user.interfaces";
import { ResetPasswordValidationSchema } from "@utils/auth.utils";
import userService from "@service/api/user";
import { notifySuccess } from "@utils/notification.utils";

const initialValues: Partial<IResetPasswordPayload> = {
  password: "",
};

const PasswordForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      navigate("/");
      return;
    }
    setToken(token);
  }, [searchParams, navigate]);

  const resetPassword = (values: Partial<IResetPasswordPayload>) => {
    console.log(token);
    if (!token) return;
    userService
      .resetPassword({ token, ...values } as IResetPasswordPayload)
      .then(() =>
        notifySuccess("Password reset successfully, you can login now!"),
      )
      .then(() => navigate("/login"));
  };

  return (
    <S.ContainerForm>
      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordValidationSchema}
        onSubmit={resetPassword}
      >
        <Form>
          <FormGroup>
            <S.Label>Password</S.Label>
            <S.Input name="password" />
            <FormError name="password" />
          </FormGroup>
          <S.BtnReset type="submit">Reset</S.BtnReset>
        </Form>
      </Formik>

      <S.Text>Back To Login</S.Text>
    </S.ContainerForm>
  );
};

export default PasswordForm;
