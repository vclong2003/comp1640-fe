import * as S from "./PopularContributionItem.styled";

const PopularContributionItem = () => {
  return (
    <S.Container>
      <S.Image src="https://via.placeholder.com/800/450" alt="placeholder" />
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

export default PopularContributionItem;
