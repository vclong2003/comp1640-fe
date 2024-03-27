import * as S from "./ResetPassword.styled";
import Reset from "../../../assets/images/Reset.png";
import PasswordForm from "./PasswordForm/PasswordForm";

const ResetPassword = () => {
  return (
    <S.Container>
      <S.First></S.First>
      <S.Left>
        <S.Title>RESET PASSWORD</S.Title>
        <PasswordForm />
      </S.Left>
      <S.Right>
        <img src={Reset} alt="" />
      </S.Right>
    </S.Container>
  );
};

export default ResetPassword;
