import React from "react";
import * as S from "./ConfirmForm.styled";

const ConformForm = () => {
  return (
    <S.Container>
      <S.Top>
        <S.Title>Confirm your email address</S.Title>
        <S.Description>
          Please check your email for the next step to signup.
        </S.Description>
      </S.Top>
      <S.Back>
        <S.BtnBack>BACK TO LOGIN</S.BtnBack>
      </S.Back>
    </S.Container>
  );
};

export default ConformForm;
