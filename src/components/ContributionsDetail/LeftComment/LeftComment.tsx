<<<<<<< HEAD

=======
>>>>>>> 385194944c35f703f8a451b1f469b81d21430bd6
import * as S from "./LeftComment.styled";
import Avatar from "../../../assets/images/avt.png";

const LeftComment = () => {
  return (
    <S.Container>
      <S.Ava>
        <img src={Avatar} alt="" />
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
