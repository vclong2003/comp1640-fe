import ItemDocumentFile from "./ItemDocumentFile/ItemDocumentFile";
import ItemImageFile from "./ItemImageFile/ItemImageFile";
import * as S from "./RightDetailPage.styled";
import { BsPersonFillLock } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import UserInfo from "../UserInfo/UserInfo";
import { IContribution } from "@interfaces/contribution.interfaces";

interface IRightDeatilPageProps {
  contribution: IContribution;
}

const RightDetailPage = ({ contribution }: IRightDeatilPageProps) => {
  const { images, documents } = contribution;
  return (
    <S.Container>
      <S.TopContainer>
        <S.ContainerDocument>
          <S.DocumentFile>
            <S.Title>Files</S.Title>
            <S.Content>
              {documents.map((item, index) => (
                <ItemDocumentFile
                  key={index}
                  file_name={item.file_name}
                  file_url={item.file_url}
                />
              ))}
              <S.BtnAddDocs>
                <S.BtnText>Download file (zip.file)</S.BtnText>
              </S.BtnAddDocs>
            </S.Content>
            <S.Divider></S.Divider>
          </S.DocumentFile>
          <S.DocumentImg>
            {images.map((item, index) => (
              
              <ItemImageFile
                key={index}
                file_name={item.file_name}
                file_url={item.file_url}
              />
            ))}
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
