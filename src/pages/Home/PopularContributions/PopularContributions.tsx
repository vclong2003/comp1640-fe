import * as S from "./PopularContributions.styled";

const PopularContributions = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Popular Contributions</S.Title>
      </S.Header>
      <S.PopularContributionItemsContainer>
        <S.Item />
        <S.Item />
        <S.Item />
        <S.Item />
      </S.PopularContributionItemsContainer>
    </S.Container>
  );
};

export default PopularContributions;
