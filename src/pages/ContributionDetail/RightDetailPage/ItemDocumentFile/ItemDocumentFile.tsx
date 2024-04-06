import * as S from "./ItemDocumentFile.styled";
import Word from "../../../../assets/images/Word.png";

const ItemDocumentFile = () => {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.ImageDoc src={Word} />
        <S.TitleDoc>Ideas 1.docx</S.TitleDoc>
      </S.LeftContainer>
    </S.Container>
  );
};

export default ItemDocumentFile;
