import { IContribution } from "@interfaces/contribution.interfaces";
import * as S from "./ListItem.styled";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import Placeholder from "@assets/images/banner_placeholder.jpg";
import { useNavigate } from "react-router";

interface IListItemProps {
  contribution: IContribution;
}

export default function ListItem({ contribution }: IListItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contribution/${contribution._id}`);
  };
  return (
    <S.Container onClick={handleClick}>
      <S.ImageContainer>
        <S.Image src={contribution.banner_image_url || Placeholder} />
      </S.ImageContainer>
      <S.ContentContainer>
        <S.EventName>{contribution.event.name}</S.EventName>
        <S.Title>{contribution.title}</S.Title>
        <S.Description dangerouslySetInnerHTML={{ __html: contribution.description }} />
        <S.InteractionContainer>
          <S.Like>
            <AiFillLike />
            <p>{contribution.likes}</p>
          </S.Like>
          <S.Comment>
            <FaCommentAlt />
            <p>{contribution.comments}</p>
          </S.Comment>
        </S.InteractionContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
