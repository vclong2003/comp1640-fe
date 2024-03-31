import * as S from "./ContributionItem.styled";
import image from "../../assets/images/food.png";

export default function ContributionItem(
  props: JSX.IntrinsicAttributes,
): JSX.Element {
  return (
    <S.Container {...props}>
      <S.Image src={image} alt="placeholder" />
      <S.Title>Contribution Title</S.Title>
      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </S.Description>
      <S.InteractionContainer>
        <S.Like>Like</S.Like>
        <S.Comment>Comment</S.Comment>
      </S.InteractionContainer>
    </S.Container>
  );
}
