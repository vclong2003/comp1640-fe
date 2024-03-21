import * as S from "./LeftDetailPage.styled";
import Detail from "../../../assets/images/detail.png";
import LeftComment from "../../../components/ContributionsDetail/LeftComment/LeftComment";
import { FiEdit } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import ContributionsDetail from "../../../components/ContributionsDetail/ContributionsDetail";
import Ava from "../../../assets/images/avt.png";
import { IoSend } from "react-icons/io5";

const LeftDetailPage = () => {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Image src={Detail} />
        <S.Text>
          <S.Status>
            <S.TextStatus>Published</S.TextStatus>
          </S.Status>
        </S.Text>
        <S.Icon>
          <FiEdit />
        </S.Icon>
        <S.Bottom>
          <S.Description>Dream Weekends #2 on the edge world</S.Description>
          <S.Author>
            <LeftComment />
          </S.Author>
        </S.Bottom>
      </S.TopContainer>
      <S.BottomContainer>
        <S.Title>
          <S.Person>
            <IoMdPerson />
          </S.Person>
          <S.TextCmt>Comments</S.TextCmt>
        </S.Title>
        <S.CmtItem>
          <ContributionsDetail />
        </S.CmtItem>
        <S.AddCmt>
          <S.ImageAva src={Ava} />
          <S.InputCmt></S.InputCmt>
          <S.IconSent>
            <IoSend />
          </S.IconSent>
        </S.AddCmt>
      </S.BottomContainer>
    </S.Container>
  );
};

export default LeftDetailPage;
