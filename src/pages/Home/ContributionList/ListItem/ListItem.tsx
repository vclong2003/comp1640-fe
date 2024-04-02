import * as S from "./ListItem.styled";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

export default function ListItem() {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src="https://picsum.photos/600/400"></S.Image>
      </S.ImageContainer>
      <S.ContentContainer>
        {/* <S.NameAuthor>Thao Huong</S.NameAuthor> */}
        <S.EventName>Event Name</S.EventName>
        <S.Title>Bui, new to the site! The hottest assets are out now</S.Title>
        <S.Description>
          Edgar Shaw, a famous sailor and photographer, sails in remote parts of
          the world and makes his photo experience. Edgar Shaw, a famous sailor
          and photographer, sails in remote parts of the world and
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
      </S.ContentContainer>
    </S.Container>
  );
}