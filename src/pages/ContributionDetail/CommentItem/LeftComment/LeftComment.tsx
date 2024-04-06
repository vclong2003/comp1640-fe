import Avatar from "@components/Avatar/Avatar";
import * as S from "./LeftComment.styled";
import { IComment } from "@interfaces/contribution.interfaces";
import { toIsoDate } from "@utils/date.utils";

interface ILeftCommentProps {
  commnet: IComment;
}

const LeftComment = ({ commnet }: ILeftCommentProps) => {
  return (
    <S.Container>
      <S.Ava>
        <Avatar imageUrl={commnet.author.avatar_url} />
      </S.Ava>
      <S.InfoComment>
        <S.Author>
          <S.UserInfor>{commnet.author.name}</S.UserInfor>
          <S.DateComment>{toIsoDate(commnet.posted_at)}</S.DateComment>
        </S.Author>
      </S.InfoComment>
    </S.Container>
  );
};

export default LeftComment;
