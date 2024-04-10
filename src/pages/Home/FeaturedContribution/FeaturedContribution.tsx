import * as S from "./FeaturedContribution.styled";
import PlaceholderImg from "@assets/images/detail.png";
import { IContribution } from "@interfaces/contribution.interfaces";
import { useNavigate } from "react-router";

interface IFeaturedContributionProps {
  contribution: IContribution;
}
const FeaturedContribution = ({ contribution }: IFeaturedContributionProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contribution/${contribution._id}`);
  };
  return (
    <S.Container onClick={handleClick}>
      <S.TextContainer>
        <S.Title>{contribution.title}</S.Title>
        <S.Description
          dangerouslySetInnerHTML={{ __html: contribution.description }}
        />
      </S.TextContainer>
      <S.Image
        src={contribution.banner_image_url || PlaceholderImg}
        alt="placeholder"
      />
    </S.Container>
  );
};

// https://placehold.co/800x450
export default FeaturedContribution;
