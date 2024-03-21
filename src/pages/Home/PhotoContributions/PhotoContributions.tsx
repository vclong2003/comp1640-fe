import * as S from "./PhotoContributions.styled";
import RightContributions from "./RightContributions/LeftContributions";
import LeftContributions from "./LeftContributions/RightContributions";

const PhotoContributions = () => {
  return (
    <S.Container>
      <S.Title>Photos</S.Title>
      <S.Center>
        <S.Right>
          <RightContributions />
        </S.Right>
        <S.Left>
          <LeftContributions />
        </S.Left>
      </S.Center>
    </S.Container>
  );
};

export default PhotoContributions;
