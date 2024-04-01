import * as S from "./ContributionList.styled";
import ListItem from "./ListItem/ListItem";

const ContributionList = () => {
  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Browse popular contributions</S.TitleHeader>
      </S.Header>
      <S.Content>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </S.Content>
      <S.Bottom>
        <S.Button>Load more</S.Button>
      </S.Bottom>
    </S.Container>
  );
};

export default ContributionList;
