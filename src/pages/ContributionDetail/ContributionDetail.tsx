import BottomDetailPage from "./BottomDetailPage/BottomDetailPage";
import * as S from "./ContributionDetail.styled";
import LeftDetailPage from "./LeftDetailPage/LeftDetailPage";
import RightDetailPage from "./RightDetailPage/RightDetailPage";

export default function ContributionDetail() {
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
      <S.BottomContainer>
        <BottomDetailPage />
      </S.BottomContainer>
    </S.Container>
  );
}
