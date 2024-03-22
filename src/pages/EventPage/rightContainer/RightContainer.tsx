import * as S from "./RightContainer.styled";
import ItemEvent from "./ItemEvent/ItemEvent";

const RightContainer = () => {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Title>List Event</S.Title>
        <S.InputSearch>
          <input type="search" placeholder="Search Anything" />
        </S.InputSearch>
      </S.TopContainer>
      <S.CenterContainer>
        <S.ItemEvent>
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
        </S.ItemEvent>
        <S.LoadMore>
          <S.BtnLoad>Load More</S.BtnLoad>
        </S.LoadMore>
      </S.CenterContainer>
      <S.BottomContainer>
        <S.Status>
          <S.ColorStatus></S.ColorStatus>
          <S.StatusEvent>Done</S.StatusEvent>
        </S.Status>
        <S.Status>
          <S.ColorStatus1></S.ColorStatus1>
          <S.StatusEvent>In Process</S.StatusEvent>
        </S.Status>
        <S.Status>
          <S.ColorStatus2></S.ColorStatus2>
          <S.StatusEvent>Out Date</S.StatusEvent>
        </S.Status>
      </S.BottomContainer>
    </S.Container>
  );
};

export default RightContainer;
