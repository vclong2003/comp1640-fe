import { Formik } from "formik";
import Link from "@components/Link/Link";
import * as S from "./FormForgot.styled";
import userService from "@service/user";
import { ISendResetPasswordEmailPayload } from "@interfaces/user.interfaces";
import { notifySuccess } from "@utils/notification.utils";
import { useState } from "react";

const initialValues: ISendResetPasswordEmailPayload = {
  email: "",
};

const FormForgot = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: ISendResetPasswordEmailPayload) => {
    setLoading(true);
    await userService
      .sendResetPasswordEmail(values)
      .then(() => notifySuccess("Done, please check your email!"))
      .finally(() => setLoading(false));
  };

  return (
    <S.Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <S.ContainerForm>
          <S.Input placeholder="Enter your Email" name="email"></S.Input>
          <S.BtnContinue type="submit" disabled={loading}>
            {loading ? "Loading..." : "Continue"}
          </S.BtnContinue>
          <Link to="/Login">
            <S.BtnBack type="button">Back to Login</S.BtnBack>
          </Link>
        </S.ContainerForm>
      </Formik>
    </S.Container>
  );
};

export default FormForgot;
