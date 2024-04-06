import * as S from "./ItemImageFile.styled";


interface IItemImageFileProps{
  file_name: string;
  file_url: string;
}

const ItemImageFile = ({file_name, file_url}:IItemImageFileProps) => {
  return (
    <S.Container>
      <S.Image src={ file_url}></S.Image>   
    </S.Container>
  );
};

export default ItemImageFile;
