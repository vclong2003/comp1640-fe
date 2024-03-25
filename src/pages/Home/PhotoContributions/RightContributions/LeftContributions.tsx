import * as S from "./LeftContribution.styled";
import image from "../../../../assets/images/RightPopular.png";

const RightContributions = () => {
  return (
    <S.Container>
      <S.Image src={image} alt="placeholder" />
      <S.Divider />
      <S.Title>Gulf Craft Majesty 155 and Majesty 110 </S.Title>
      <S.Description>
        This is a featured contribution. It could be a blog post, a video, a
        podcast, or anything else that we want to highlight.
      </S.Description>
    </S.Container>
  );
};

export default RightContributions;
