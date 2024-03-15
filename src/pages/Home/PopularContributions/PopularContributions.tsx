import React from "react";
import * as S from "./PopularContributions.styled";
import PopularContributionItem from "./PopularContributionItem/PopularContributionItem";

const PopularContributions = () => {
  return (
    <S.Container>
      <PopularContributionItem />
      <PopularContributionItem />
      <PopularContributionItem />
      <PopularContributionItem />
    </S.Container>
  );
};

export default PopularContributions;
