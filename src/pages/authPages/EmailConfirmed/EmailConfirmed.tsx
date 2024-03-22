import * as S from "./EmailConfirmed.styled";
import Success from "../../assets/images/Success.png";

const EmailConfirmed = () => {
  return (
    <S.Container>
      <S.Top>
        <S.Title>Your email has already been confirmed !</S.Title>
        <S.Description>You can now login to the application.</S.Description>
      </S.Top>
      <S.Middel>
        <img src={Success} alt="" />
      </S.Middel>
      <S.Bottom>
        <S.BtnLogin>LOGIN</S.BtnLogin>
      </S.Bottom>
    </S.Container>
  );
};

export default EmailConfirmed;
