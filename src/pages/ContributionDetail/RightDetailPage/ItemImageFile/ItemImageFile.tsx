import * as S from "./ItemImageFile.styled";
import img from "../../../../assets/images/imageFile.png";
import { MdDeleteOutline } from "react-icons/md";

const ItemImageFile = () => {
  return (
    <S.Container>
      <S.Image src={img}></S.Image>
        <S.IconDelete>
          <MdDeleteOutline />
        </S.IconDelete>      
    </S.Container>
  );
};

export default ItemImageFile;
