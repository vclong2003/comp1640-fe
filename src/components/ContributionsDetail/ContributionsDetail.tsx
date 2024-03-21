import React from "react";
import * as S from "./ContributionsDetail.styled";
import Avatar from "../../assets/images/avt.png";
import { SlOptionsVertical } from "react-icons/sl";

const ContributionsDetail = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Ava>
          <img src={Avatar} alt="" />
        </S.Ava>
        <S.InfoComment>
          <S.Author>
            <S.UserInfor>Bui Thi Huong</S.UserInfor>
            <S.DateComment>14/03/2024</S.DateComment>
          </S.Author>
          <S.TypeComment>This is private comment</S.TypeComment>
        </S.InfoComment>
      </S.Left>
      <S.Right>
        <SlOptionsVertical />
      </S.Right>
    </S.Container>
  );
};

export default ContributionsDetail;
