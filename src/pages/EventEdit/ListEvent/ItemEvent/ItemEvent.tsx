import * as S from "./ItemEvent.styled";
import sport from "../../../../assets/images/sport.png";

const ItemEvent = () => {
  return (
    <S.Container>
      <S.Image src={sport} alt="placeholder" />
      <S.Title>Contribution Title</S.Title>
      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </S.Description>
      <S.InteractionContainer>
        <S.Like>Like</S.Like>
        <S.Comment>Comment</S.Comment>
      </S.InteractionContainer>
    </S.Container>
  );
};

export default ItemEvent;
