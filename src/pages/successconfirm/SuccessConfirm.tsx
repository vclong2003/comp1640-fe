import React from "react";
import * as S from "./SuccessConfirm.styled";
import Success from "../../assets/images/Success.png";

const SuccessConfirm = () => {
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

export default SuccessConfirm;
