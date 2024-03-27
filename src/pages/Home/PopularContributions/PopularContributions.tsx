import * as S from "./PopularContributions.styled";
import Item from "../../../components/Item/Item";

const PopularContributions = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Popular Contributions</S.Title>
        <S.MoveButtonsContainer>
          <S.LeftButton>Left</S.LeftButton>
          <S.RightButton>Right</S.RightButton>
        </S.MoveButtonsContainer>
      </S.Header>
      <S.PopularContributionItemsContainer>
        <Item />
        <Item />
        <Item />
        <Item />
      </S.PopularContributionItemsContainer>
    </S.Container>
  );
};

export default PopularContributions;
