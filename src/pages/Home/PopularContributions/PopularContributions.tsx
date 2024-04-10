import { IContribution } from "@interfaces/contribution.interfaces";
import * as S from "./PopularContributions.styled";

interface IPopularContributionsProps {
  contributions: IContribution[];
}

const PopularContributions = ({
  contributions,
}: IPopularContributionsProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Popular Contributions</S.Title>
      </S.Header>
      <S.PopularContributionItemsContainer>
        {contributions.map((contribution) => (
          <S.Item key={contribution._id} contribution={contribution} />
        ))}
      </S.PopularContributionItemsContainer>
    </S.Container>
  );
};

export default PopularContributions;
