import * as S from "./CommentItem.styled";
import { SlOptionsVertical } from "react-icons/sl";
import LeftComment from "./LeftComment/LeftComment";

export default function CommentItem() {
  return (
    <S.Container>
      <S.Left>
        <LeftComment />
      </S.Left>
      <S.Right>
        <SlOptionsVertical />
      </S.Right>
    </S.Container>
  );
}
