import React from "react";
import * as S from "./Navbar.styled";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <S.Container>
      <S.ContainerTop>
        <S.Logo>LOGO</S.Logo>
        <S.ListUl>
          <S.ListLi>Home</S.ListLi>
          <S.ListLi>Events</S.ListLi>
          <S.ListLi>Contact Us</S.ListLi>
          <S.ListLi>About Us</S.ListLi>
        </S.ListUl>
        <S.Search>
          <S.SearchBox placeholder="Search Anything"></S.SearchBox>
          <S.LogoSearch>
            <FaSearch />
          </S.LogoSearch>
        </S.Search>
        <S.TextAccount onClick={() => setOpenProfile((prev)=> !prev)}>
          <MdAccountCircle />
          Behzad
        </S.TextAccount>
      </S.ContainerTop>
      {openProfile && <Dropdown />}
      <S.ContainerBottom>
        <S.Dash></S.Dash>
      </S.ContainerBottom>
    </S.Container>
  );
};

export default Navbar;
