import * as S from "./Footer.styled";
import { FaQq, FaRegCopyright } from "react-icons/fa6";
import {
  GitHub,
  Instagram,
  Pinterest,
  Reddit,
  WhatsApp,
  X,
  YouTube,
} from "@mui/icons-material";
import { BsTiktok, BsWechat } from "react-icons/bs";

const Footer = () => {
  return (
    <S.Foot>
      <S.ContainerTop>
        <S.Left>
          <S.FirstLeft>ALHKQ™</S.FirstLeft>
          <S.SecondLeft>Your Hub for Creative Expression.</S.SecondLeft>
          <S.ThirdLeft>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <GitHub />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <X />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <Instagram />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <YouTube />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <Reddit />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <WhatsApp />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <BsTiktok />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <Pinterest />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <FaQq />
            </S.IconUrl>
            <S.IconUrl href="https://github.com/vclong2003" target="_blank">
              <BsWechat />
            </S.IconUrl>
          </S.ThirdLeft>
        </S.Left>
      </S.ContainerTop>
      <S.ContainerMiddle>
        <S.Line></S.Line>
      </S.ContainerMiddle>
      <S.ContainerBottom>
        <S.TextBottom>
          <FaRegCopyright />
          <S.Text>2024 ALHKQ Team. All rights reserved.</S.Text>
        </S.TextBottom>
      </S.ContainerBottom>
    </S.Foot>
  );
};

export default Footer;
