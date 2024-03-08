import React from "react";
import LeftTemplate from "./LeftTemplate/LeftTemplate";
import ForGot from "../../assets/images/Forgot.png";
import * as S from "./ForgotPass.styled";


const ForgotPass = () => {
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

export default ForgotPass;
