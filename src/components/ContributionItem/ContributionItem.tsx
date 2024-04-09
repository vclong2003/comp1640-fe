import * as S from "./ContributionItem.styled";
import image from "../../assets/images/food.png";
import { IContribution } from "@interfaces/contribution.interfaces";
import { useNavigate } from "react-router";

interface IContributionProps extends JSX.IntrinsicAttributes {
  contribution: Partial<IContribution>;
}

export default function ContributionItem({
  contribution,
  ...props
}: IContributionProps): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/contribution/${contribution?._id}`);

  return (
    <S.Container {...props} onClick={handleClick}>
      <S.Image
        src={contribution?.banner_image_url || image}
        alt="placeholder"
      />
      <S.Title>{contribution?.title}</S.Title>
      <S.Description>{contribution?.description}</S.Description>
      <S.InteractionContainer>
        <S.Like>{contribution?.likes} Like</S.Like>
        <S.Like>{contribution?.is_liked && "Liked"}</S.Like>
        <S.Comment>{contribution?.comments} Comment</S.Comment>
      </S.InteractionContainer>
    </S.Container>
  );
}
