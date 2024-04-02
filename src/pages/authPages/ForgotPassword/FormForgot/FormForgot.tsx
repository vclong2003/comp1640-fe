import { Formik } from "formik";
import * as S from "./FormForgot.styled";
import userService from "@service/api/user";
import { ISendResetPasswordEmailPayload } from "@interfaces/user.interfaces";
import { notifySuccess } from "@utils/notification.utils";

const initialValues: ISendResetPasswordEmailPayload = {
  email: "",
};

const FormForgot = () => {
  const handleSubmit = async (values: ISendResetPasswordEmailPayload) => {
    await userService
      .sendResetPasswordEmail(values)
      .then(() => notifySuccess("Done, please check your email!"));
  };

  return (
    <S.Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <S.ContainerForm>
          <S.Input placeholder="Enter your Email" name="email"></S.Input>
          <S.BtnContinue type="submit">Continue</S.BtnContinue>
          <S.BtnBack type="button">Back to Login</S.BtnBack>
        </S.ContainerForm>
      </Formik>
    </S.Container>
  );
};

export default FormForgot;
