import * as S from "./ItemDocumentFile.styled";
import { TiDeleteOutline } from "react-icons/ti";
import Word from "../../../../assets/images/Word.png";

const ItemDocumentFile = () => {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.ImageDoc src={Word} />
        <S.TitleDoc>Ideas 1.docx</S.TitleDoc>
      </S.LeftContainer>
      <S.RightContainer>
        <TiDeleteOutline />
      </S.RightContainer>
    </S.Container>
  );
};

export default ItemDocumentFile;
