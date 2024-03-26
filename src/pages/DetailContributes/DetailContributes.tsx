import AuthorizedPage from "../../components/AuthorizedPage/AuthorizedPage";
import BottomDetailPage from "./BottomDetailPage/BottomDetailPage";
import * as S from "./DetailContributes.styled";
import LeftDetailPage from "./LeftDetailPage/LeftDetailPage";
import RightDetailPage from "./RightDetailPage/RightDetailPage";

const DetailContributes = () => {
  return (
    <AuthorizedPage>
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
    </AuthorizedPage>
  );
};

export default DetailContributes;
