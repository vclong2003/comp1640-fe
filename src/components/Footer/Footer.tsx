import * as S from "./Footer.styled";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

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
          <S.ThirdLeft>
            <FaFacebook />
            <FaTwitter />
            <RiInstagramFill />
            <FaYoutube />
          </S.ThirdLeft>
        </S.Left>
        <S.Middle>
          <S.MiddleFirst>Header Text</S.MiddleFirst>
          <S.MiddleSecond>Button</S.MiddleSecond>
          <S.MiddleSecond>Button</S.MiddleSecond>
          <S.MiddleThird>Button</S.MiddleThird>
        </S.Middle>
        <S.Right>
          <S.RightFirst>Header Text</S.RightFirst>
          <S.RightSecond>Button</S.RightSecond>
          <S.RightSecond>Button</S.RightSecond>
          <S.RightThird>Button</S.RightThird>
        </S.Right>
      </S.ContainerTop>
      <S.ContainerMiddle>
        <S.Line></S.Line>
      </S.ContainerMiddle>
      <S.ContainerBottom>
        <S.TextBottom>
          <S.Icon>
            <FaRegCopyright />
          </S.Icon>
          <S.Text>2020 Y101, All rights reserved.</S.Text>
        </S.TextBottom>
      </S.ContainerBottom>
    </S.Foot>
  );
};

export default Footer;
