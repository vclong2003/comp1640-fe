import * as S from "./FeaturedContribution.styled";
import image from "../../../assets/images/detail.png";

const FeaturedContribution = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>Featured Contribution</S.Title>
        <S.Description>
          This is a featured contribution. It could be a blog post, a video, a
          podcast, or anything else that we want to highlight.
        </S.Description>
      </S.TextContainer>
      <S.Image src={image} alt="placeholder" />
    </S.Container>
  );
};

// https://placehold.co/800x450
export default FeaturedContribution;
