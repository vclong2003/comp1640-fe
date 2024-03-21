import React from "react";
import * as S from "./ContributionsDetail.styled";
import { SlOptionsVertical } from "react-icons/sl";
import LeftComment from "./LeftComment/LeftComment";

const ContributionsDetail = () => {
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
};

export default ContributionsDetail;
