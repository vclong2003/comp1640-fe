import * as S from "./Navbar.styled";
import { FaSearch } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const Navbar = () => {
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
        <ProfileDropdown />
      </S.ContainerTop>
      <S.ContainerBottom>
        <S.Dash></S.Dash>
      </S.ContainerBottom>
    </S.Container>
  );
};

export default Navbar;
