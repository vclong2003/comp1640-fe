import * as S from "./CommentItem.styled";
import { SlOptionsVertical } from "react-icons/sl";
import LeftComment from "./LeftComment/LeftComment";
import { IComment } from "@interfaces/contribution.interfaces";

interface IEventItemProps {
  comment: IComment;
}

export default function CommentItem({ comment }: IEventItemProps) {
  return (
    <S.Container>
      <S.Left>
        <LeftComment commnet={comment} />
      </S.Left>
      <S.Right>
        <SlOptionsVertical />
      </S.Right>
    </S.Container>
  );
}
