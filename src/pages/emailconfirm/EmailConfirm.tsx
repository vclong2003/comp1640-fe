import React from "react";
import ConformForm from "./ConfirmForm/ConformForm";
import Confirm from "../../assets/images/Confirm.png";
import * as S from "./EmailConfirm.styled";

const EmailConfirm = () => {
  return (
    <S.Container>
      <S.Left>
        <ConformForm />
      </S.Left>
      <S.Right>
        <img src={Confirm} alt="" />
      </S.Right>
    </S.Container>
  );
};

export default EmailConfirm;
