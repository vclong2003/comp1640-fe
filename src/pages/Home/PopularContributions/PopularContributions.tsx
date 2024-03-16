import React from "react";
import * as S from "./PopularContributions.styled";
import PopularContributionItem from "./PopularContributionItem/PopularContributionItem";

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
        <PopularContributionItem />
        <PopularContributionItem />
        <PopularContributionItem />
        <PopularContributionItem />
        <PopularContributionItem />
        <PopularContributionItem />
      </S.PopularContributionItemsContainer>
    </S.Container>
  );
};

export default PopularContributions;
