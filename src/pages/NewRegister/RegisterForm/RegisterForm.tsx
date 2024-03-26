import * as S from "./RegisterForm.styled";

const RegisterForm = () => {
  return (
    <S.Container>
      <S.ContainerForm>
        <>
          <S.Input placeholder="Enter your Email"></S.Input>
          <S.BtnContinue>Continue</S.BtnContinue>
        </>
      </S.ContainerForm>
    </S.Container>
  );
};

export default RegisterForm;
