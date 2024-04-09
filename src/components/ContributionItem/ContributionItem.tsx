import * as S from "./ContributionItem.styled";
import image from "../../assets/images/food.png";
import { IContribution } from "@interfaces/contribution.interfaces";
import { useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";

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
      <S.Description
        dangerouslySetInnerHTML={{ __html: contribution?.description || "" }}
      />
      <S.InteractionContainer>
        <S.Like $isLiked={contribution?.is_liked}>
          {contribution?.likes} <FaHeart />
        </S.Like>
        <S.Comment>
          {contribution?.comments} <FaCommentSms />
        </S.Comment>
      </S.InteractionContainer>
    </S.Container>
  );
}
