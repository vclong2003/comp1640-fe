import { IContribution } from "@interfaces/contribution.interfaces";
import * as S from "./ContributionList.styled";
import ListItem from "./ListItem/ListItem";

interface IContributionListProps {
  contributions: IContribution[];
}

const ContributionList = ({ contributions }: IContributionListProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Browse popular contributions</S.TitleHeader>
      </S.Header>
      <S.Content>
        {contributions.map((contribution) => (
          <ListItem key={contribution._id} contribution={contribution} />
        ))}
      </S.Content>
      <S.Bottom>{/* <S.Button>Load more</S.Button> */}</S.Bottom>
    </S.Container>
  );
};

export default ContributionList;
