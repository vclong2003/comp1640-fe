import { Formik } from "formik";
import * as S from "./FormForgot.styled";

const FormForgot = () => {
  return (
    <S.Container>
      <Formik>
        <S.ContainerForm>
          <S.Input placeholder="Enter your Email"></S.Input>
          <S.BtnContinue>Continue</S.BtnContinue>
          <S.BtnBack>Back to Login</S.BtnBack>
        </S.ContainerForm>
      </Formik>
    </S.Container>
  );
};

export default FormForgot;
