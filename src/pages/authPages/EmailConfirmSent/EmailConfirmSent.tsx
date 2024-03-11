import React from "react";
import Confirm from "../../../assets/images/Confirm.png";
import * as S from "./EmailConfirmSent.styled";
import ConfirmForm from "./ConfirmForm/ConfirmForm";

const EmailConfirmSent = () => {
  return (
    <S.Container>
      <S.Left>
        <ConfirmForm />
      </S.Left>
      <S.Right>
        <img src={Confirm} alt="" />
      </S.Right>
    </S.Container>
  );
};

export default EmailConfirmSent;
