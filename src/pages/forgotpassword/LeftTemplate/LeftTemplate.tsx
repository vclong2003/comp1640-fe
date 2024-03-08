import React from "react";
import * as S from "./LeftTemplate.styled";

const LeftTemplate = () => {
  return (
    <S.Container>
      <S.TitleTop>FORGET PASSWORD</S.TitleTop>
      <S.Center>
        <S.Middle>
          <S.MiddleTop>
            <S.Description>
              Type in your registered email address to reset password
            </S.Description>
            <S.Description2>Enter email address</S.Description2>
          </S.MiddleTop>
          <S.MiddleBottom></S.MiddleBottom>
        </S.Middle>
      </S.Center>

      <S.Bottom></S.Bottom>
    </S.Container>
  );
};

export default LeftTemplate;
