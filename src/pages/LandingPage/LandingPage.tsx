import React from "react";
import * as S from "./LandingPage.styled";

const LandingPage = () => {
  return (
    <S.Container>
      <S.Title>Team name here</S.Title>
      <S.Button>
        <S.Register>
          <S.BtnRegister>Register</S.BtnRegister>
        </S.Register>
        <S.Login>
          <S.BtnLogin>Login</S.BtnLogin>
        </S.Login>
      </S.Button>
    </S.Container>
  );
};

export default LandingPage;
