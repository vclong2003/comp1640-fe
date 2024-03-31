import * as S from "./EmailConfirmed.styled";
import Success from "@assets/images/Success.png";
import BackGround from "@assets/images/login-background.png";
import { Link } from "react-router-dom";

const EmailConfirmed = () => {
  return (
    <S.Container>
      <S.Background>
        <S.Image src={BackGround}></S.Image>
      </S.Background>
      <S.RightContent>
        <S.Title>Check your Email!</S.Title>
        <S.Description>We sent an email to you!</S.Description>

        <S.EmailImage src={Success}></S.EmailImage>

        <Link to="/login">
          <S.BackToLoginBtn>Back to Login</S.BackToLoginBtn>
        </Link>
      </S.RightContent>
    </S.Container>
  );
};

export default EmailConfirmed;
