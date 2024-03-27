import * as S from "./ForgotPassword.styled";
import image from "../../../assets/images/Forgot.png";
import FormForgot from "./FormForgot/FormForgot";

const ForgotPassword = () => {
  return (
    <S.Container>
      <S.BackgroundContainer>
        <S.Background src={image}></S.Background>
      </S.BackgroundContainer>
      <S.Form>
        <S.Title>FORGET PASSWORD</S.Title>
        <S.Description>
          Type in your registered email address to reset password
        </S.Description>
        <S.Text>Enter email address</S.Text>
        <FormForgot />
      </S.Form>
      <S.Divider></S.Divider>
    </S.Container>
  );
};

export default ForgotPassword;
