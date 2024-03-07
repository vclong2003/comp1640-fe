import React from "react";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Foot>
      <S.ContainerTop>
        <S.Left>
          <S.FirstLeft>Header</S.FirstLeft>
          <S.SecondLeft>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum
          </S.SecondLeft>
          <S.ThirdLeft>Header</S.ThirdLeft>
        </S.Left>
        <S.Middle>
          <S.MiddleFirst>Header Text</S.MiddleFirst>
          <S.MiddleSecond>Button</S.MiddleSecond>
          <S.MiddleThird>Button</S.MiddleThird>
        </S.Middle>
        <S.Right>
          <S.RightFirst>Header Text</S.RightFirst>
          <S.RightSecond>Button</S.RightSecond>
          <S.RightThird>Button</S.RightThird>
        </S.Right>
      </S.ContainerTop>
      <S.ContainerMiddle>
        <S.Line></S.Line>
      </S.ContainerMiddle>
      <S.ContainerBottom>
        <S.TextBottom></S.TextBottom>
      </S.ContainerBottom>
    </S.Foot>
  );
};

export default Footer;
