import ItemDocumentFile from "./ItemDocumentFile/ItemDocumentFile";
import ItemImageFile from "./ItemImageFile/ItemImageFile";
import * as S from "./RightDetailPage.styled";
import { BsPersonFillLock } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import UserInfo from "../UserInfo/UserInfo";


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
                <S.BtnText>Download file (zip.file)</S.BtnText>
              </S.BtnAddDocs>
            </S.Content>
            <S.Divider></S.Divider>
          </S.DocumentFile>
          <S.DocumentImg>
            <ItemImageFile />
            <ItemImageFile />
            <ItemImageFile />
          </S.DocumentImg>
        </S.ContainerDocument>
        <S.PrivateCmt>
          <S.TitleComment>
            <BsPersonFillLock />
            <S.TextTitle>1 Private Comments</S.TextTitle>
          </S.TitleComment>
          <UserInfo />
          <S.InputAddCmt>
            <S.Input placeholder="Add Comment"></S.Input>
            <S.IconSent>
              <IoSend />
            </S.IconSent>
          </S.InputAddCmt>
        </S.PrivateCmt>
      </S.TopContainer>
    </S.Container>
  );
};

export default RightDetailPage;
