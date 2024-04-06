import ItemDocumentFile from "./ItemDocumentFile/ItemDocumentFile";
import ItemImageFile from "./ItemImageFile/ItemImageFile";
import * as S from "./RightDetailPage.styled";
import { IoMdAdd } from "react-icons/io";
import { BsPersonFillLock } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import CommentItem from "../CommentItem/CommentItem";

const RightDetailPage = () => {
  return (
    <S.Container>
      <S.TopContainer>
        <S.ContainerDocument>
          <S.DocumentFile>
            <S.Title>Files</S.Title>
            <S.Content>
              <ItemDocumentFile />
              <ItemDocumentFile />
              <ItemDocumentFile />

              <S.BtnAddDocs>
                <IoMdAdd />
                <S.BtnText>Add Docs</S.BtnText>
              </S.BtnAddDocs>
            </S.Content>
            <S.Divider></S.Divider>
          </S.DocumentFile>
          <S.DocumentImg>
            <ItemImageFile />
            <ItemImageFile />
            <ItemImageFile />
            <S.AddImg>
              <S.AddIcon>
                <IoMdAdd />
              </S.AddIcon>
            </S.AddImg>
          </S.DocumentImg>
        </S.ContainerDocument>
        <S.PrivateCmt>
          <S.TitleComment>
            <BsPersonFillLock />
            <S.TextTitle>1 Private Comments</S.TextTitle>
          </S.TitleComment>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <S.InputAddCmt>
            <S.Input placeholder="Add Comment"></S.Input>
            <S.IconSent>
              <IoSend />
            </S.IconSent>
          </S.InputAddCmt>
        </S.PrivateCmt>
      </S.TopContainer>
      <S.BottomContainer>
        <S.BtnPublish>Publish</S.BtnPublish>
      </S.BottomContainer>
    </S.Container>
  );
};

export default RightDetailPage;
