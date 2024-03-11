import React from "react";
import * as S from "./GuestRegisterForm.styled";

const GuestRegisterForm = () => {
  return (
    <S.ContainerRight>
      <S.RightForm>
        <S.RegisDescription>Welcome, Register.</S.RegisDescription>
        <S.RegisDescription2>Nice to meet you</S.RegisDescription2>
        <S.TextEmailRegis>Email</S.TextEmailRegis>
        <S.TextFill>Fill your mail hear</S.TextFill>
        <S.EmailInputRegis placeholder="commitcomunity@gmail.com"></S.EmailInputRegis>
        <S.CheckTermRegis>
          <input type="checkbox" /> <b>Term of Use</b> and <b>Condition</b> &{" "}
          <b>Privacy Policy.</b>
        </S.CheckTermRegis>
      </S.RightForm>
      <S.RightFoot>
        <S.BtnContineuRegis>CONTINEU</S.BtnContineuRegis>
      </S.RightFoot>
    </S.ContainerRight>
  );
};

export default GuestRegisterForm;
