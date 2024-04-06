import * as S from "./ItemImageFile.styled";
import img from "../../../../assets/images/imageFile.png";

const ItemImageFile = () => {
  return (
    <S.Container>
      <S.Image src={img}></S.Image>   
    </S.Container>
  );
};

export default ItemImageFile;
