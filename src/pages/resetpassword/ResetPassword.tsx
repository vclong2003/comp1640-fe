import React from "react";
import * as S from "./ResetPassword.styled";
import Reset from "../../assets/images/Reset.png";
import FormReset from "./FormReset/FormReset";

const ResetPassword = () => {
  return (
    <S.Container>
      <S.Left>
        <FormReset />
      </S.Left>
      <S.Right>
        <img src={Reset} alt="" />
      </S.Right>
    </S.Container>
  );
};

export default ResetPassword;
