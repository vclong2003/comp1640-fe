import * as S from "./PopularContributions.styled";
import Item from "../../../components/ContributionItem/ContributionItem";

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
        <S.Item>
          <Item />
        </S.Item>
        <S.Item>
          <Item />
        </S.Item>
        <S.Item>
          <Item />
        </S.Item>
        <S.Item>
          <Item />
        </S.Item>
      </S.PopularContributionItemsContainer>
    </S.Container>
  );
};

export default PopularContributions;
