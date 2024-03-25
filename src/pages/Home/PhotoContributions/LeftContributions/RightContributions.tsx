import * as S from "./RightContribution.styled";
import image from "../../../../assets/images/LeftPopular.png";

const LeftContributions = () => {
  return (
    <S.Container>
      <S.Image src={image} alt="placeholder" />
      <S.Title>Clipper Race: How I won the round-the-world race</S.Title>
      <S.Description>
        The history of the most difficult race for the most unprepared.
      </S.Description>
      <S.Divider></S.Divider>
      <S.Bottom>Experineces | PSanya Serenity Coast...</S.Bottom>
    </S.Container>
  );
};

export default LeftContributions;
