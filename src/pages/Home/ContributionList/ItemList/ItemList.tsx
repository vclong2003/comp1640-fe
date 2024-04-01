import * as S from "./ItemList.styled";
import image from "../../../../assets/images/Heart.png";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

const ItemList = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Image src={image}></S.Image>
      </S.Left>
      <S.Right>
        <S.NameAuthor>Thao Huong</S.NameAuthor>
        <S.Title>Bui,  new to the site! The hottest assets are out now</S.Title>
        <S.Description>
          Edgar Shaw, a famous sailor and photographer, sails in remote parts
          of the world and makes his photo experience.
        </S.Description>
        <S.InteractionContainer>
          <S.Like>
            <AiFillLike />
            <p>100</p>
          </S.Like>
          <S.Comment>
            <FaCommentAlt />
            <p>100</p>
          </S.Comment>
        </S.InteractionContainer>
      </S.Right>
    </S.Container>
  );
};

export default ItemList;
