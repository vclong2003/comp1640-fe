import * as S from "./DetailContributes.styled";
import LeftDetailPage from "./LeftDetailPage/LeftDetailPage";

const DetailContributes = () => {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Left>
          <LeftDetailPage />
        </S.Left>
        <S.Right></S.Right>
      </S.TopContainer>
      <S.BottomContainer></S.BottomContainer>
    </S.Container>
  );
};

export default DetailContributes;
