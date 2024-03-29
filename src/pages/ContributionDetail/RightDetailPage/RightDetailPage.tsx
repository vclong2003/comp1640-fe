import ContributionsDetail from "../../../components/ContributionsDetail/ContributionsDetail";
import ItemDocumentFile from "./ItemDocumentFile/ItemDocumentFile";
import ItemImageFile from "./ItemImageFile/ItemImageFile";
import * as S from "./RightDetailPage.styled";
import { IoMdAdd } from "react-icons/io";
import { BsPersonFillLock } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { Formik } from "formik";

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
              <Formik>
                <S.BtnAddDocs>
                  <IoMdAdd />
                  <S.BtnText>Add Docs</S.BtnText>
                </S.BtnAddDocs>
              </Formik>
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
          <ContributionsDetail />
          <ContributionsDetail />
          <ContributionsDetail />
          <Formik>
          <S.InputAddCmt>
            <S.Input placeholder="Add Comment"></S.Input>
            <S.IconSent>
              <IoSend />
            </S.IconSent>
          </S.InputAddCmt>
          </Formik>
        </S.PrivateCmt>
      </S.TopContainer>
      <S.BottomContainer>
        <Formik>
        <S.BtnPublish>Publish</S.BtnPublish>
        </Formik>
      </S.BottomContainer>
    </S.Container>
  );
};

export default RightDetailPage;
