import Link from "@components/Link/Link";
import * as S from "./FormForgot.styled";

const FormForgot = () => {
  return (
    <S.Container>
      <S.ContainerForm>
        <>
          <S.Input placeholder="Enter your Email"></S.Input>
          <S.BtnContinue>Continue</S.BtnContinue>
          <Link to="/Login">
            <S.BtnBack>Back to Login</S.BtnBack>
          </Link>
        </>
      </S.ContainerForm>
    </S.Container>
  );
};

export default FormForgot;
