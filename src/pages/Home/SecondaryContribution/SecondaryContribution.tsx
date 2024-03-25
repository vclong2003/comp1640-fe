import * as S from "./SecondaryContribution.styled";
import image from "../../../assets/images/Secondary.png";

const SecondaryContribution = () => {
  return (
    <S.Container>
      <S.Image src={image} alt="placeholder" />
      <S.Divider />
      <S.Title>Secondary Contribution</S.Title>
      <S.Description>
        This is a secondary contribution. It could be a blog post, a video, a
        podcast, or anything else that we want to highlight.
      </S.Description>
      <S.Bottom>
        <S.Text>EQUIPMENT | HOW TO </S.Text>
      </S.Bottom>
    </S.Container>
  );
};

export default SecondaryContribution;
