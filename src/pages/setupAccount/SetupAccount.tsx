import React from "react";
import * as S from "./SetupAccount.styled";
import Setup from "../../assets/images/Setup.png";

const SetupAccount = () => {
  return (
    <S.Setup>
      <S.Right>
        <img src={Setup} alt="" />
      </S.Right>
      <S.Left>
        <S.Title></S.Title>
        <S.Form></S.Form>
        <S.Condition></S.Condition>
        <S.BtnRegis></S.BtnRegis>
      </S.Left>
    </S.Setup>
  );
};

export default SetupAccount;
