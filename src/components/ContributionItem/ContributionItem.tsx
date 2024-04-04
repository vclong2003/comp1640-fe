import * as S from "./ContributionItem.styled";
import image from "../../assets/images/food.png";
import { IContribution } from "@interfaces/contribution.interfaces";

interface IContributionProps extends JSX.IntrinsicAttributes {
  contribution: Partial<IContribution>;
}

export default function ContributionItem({
  contribution,
  ...props
}: IContributionProps): JSX.Element {
  return (
    <S.Container {...props}>
      <S.Image
        src={contribution?.banner_image_url || image}
        alt="placeholder"
      />
      <S.Title>{contribution?.title}</S.Title>
      <S.Description>{contribution?.description}</S.Description>
      <S.InteractionContainer>
        <S.Like>{contribution?.likes} Like</S.Like>
        <S.Comment>{contribution?.comments} Comment</S.Comment>
      </S.InteractionContainer>
    </S.Container>
  );
}
