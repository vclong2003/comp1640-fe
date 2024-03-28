import * as S from "./ContributionList.styled";
import { IoFilterSharp } from "react-icons/io5";
import ItemList from "./ItemList/ItemList";

const ContributionList = () => {
  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Browse latest articles</S.TitleHeader>
        <S.Filters>
          <S.Icon>
            <IoFilterSharp />
          </S.Icon>
          <S.Text>Filter</S.Text>
        </S.Filters>
      </S.Header>
      <S.Content>
        <ItemList />
        <ItemList />
        <ItemList />
      </S.Content>
      <S.Bottom>
        <S.Button>Load More Contributions</S.Button>
      </S.Bottom>
    </S.Container>
  );
};

export default ContributionList;
