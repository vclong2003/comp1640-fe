import LeftTemplate from "./LeftTemplate/LeftTemplate";
import ForGot from "../../../assets/images/Forgot.png";
import * as S from "./ForgotPassword.styled";

const ForgotPassword = () => {
  return (
    <S.Container>
      <S.Left>
        <LeftTemplate />
      </S.Left>
      <S.Right>
        <img src={ForGot} alt="" />
      </S.Right>
    </S.Container>
  );
};

export default ForgotPassword;
