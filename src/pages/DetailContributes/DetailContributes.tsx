import * as S from "./DetailContributes.styled";
import LeftDetailPage from "./LeftDetailPage/LeftDetailPage";
import RightDetailPage from "./RightDetailPage/RightDetailPage";

const DetailContributes = () => {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Left>
          <LeftDetailPage />
        </S.Left>
        <S.Right>
          <RightDetailPage />
        </S.Right>
      </S.TopContainer>
      <S.BottomContainer></S.BottomContainer>
    </S.Container>
  );
};

export default DetailContributes;
