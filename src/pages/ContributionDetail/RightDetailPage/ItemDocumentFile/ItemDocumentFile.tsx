import * as S from "./ItemDocumentFile.styled";
import Word from "../../../../assets/images/Word.png";

interface IItemDocumnetFileProps {
  file_name: string;
  file_access_url: string;
}

const ItemDocumentFile = ({
  file_name,
  file_access_url,
}: IItemDocumnetFileProps) => {
  return (
    <S.Container onClick={() => window.open(file_access_url)}>
      <S.LeftContainer>
        <S.ImageDoc src={Word} />
        <S.TitleDoc>{file_name}</S.TitleDoc>
      </S.LeftContainer>
    </S.Container>
  );
};

export default ItemDocumentFile;
