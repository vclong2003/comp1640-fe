import Avatar from "@components/Avatar/Avatar";
import * as S from "./LeftComment.styled";

const LeftComment = () => {
  return (
    <S.Container>
      <S.Ava>
        <Avatar />
      </S.Ava>
      <S.InfoComment>
        <S.Author>
          <S.UserInfor>Bui Thi Huong</S.UserInfor>
          <S.DateComment>14/03/2024</S.DateComment>
        </S.Author>
      </S.InfoComment>
    </S.Container>
  );
};

export default LeftComment;
