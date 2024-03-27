import * as S from "./ForgotPassword.styled";

const ForgotPassword = () => {
  return (
    <S.Container>
      <S.Title>FORGET PASSWORD</S.Title>
      <S.MiddleContainer>
        <S.Left>
          <S.Description>Type in your registered email address to reset password</S.Description>
        </S.Left>
        <S.Right></S.Right>
      </S.MiddleContainer>
      <S.BtnBottom>BACK TO LOGIN</S.BtnBottom>
    </S.Container>
  );
};

export default ForgotPassword;
