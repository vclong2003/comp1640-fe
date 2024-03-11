import React from "react";
import * as S from "./Dropdown.styled";

const Dropdown = () => {
  return (
    <S.dropdownProfile>
      <S.dropUl>
        <S.textLi>My Contribution</S.textLi>
        <S.textLi>Edit Profile</S.textLi>
        <S.textLi>Log out</S.textLi>
      </S.dropUl>
    </S.dropdownProfile>
  );
};

export default Dropdown;
