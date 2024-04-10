import { IContribution } from "@interfaces/contribution.interfaces";
import * as S from "./SecondaryContribution.styled";
import Placeholder from "@assets/images/Secondary.png";
import { useNavigate } from "react-router";

interface ISecondaryContributionProps {
  contribution: IContribution;
}

const SecondaryContribution = ({
  contribution,
}: ISecondaryContributionProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contribution/${contribution._id}`);
  };
  return (
    <S.Container onClick={handleClick}>
      <S.Image
        src={contribution.banner_image_url || Placeholder}
        alt="placeholder"
      />
      <S.Divider />
      <S.Title>{contribution.title}</S.Title>
      <S.Description dangerouslySetInnerHTML={{ __html: contribution.description }} />
      <S.Bottom>
        <S.Text>{contribution.faculty.name}</S.Text>
      </S.Bottom>
    </S.Container>
  );
};

export default SecondaryContribution;
