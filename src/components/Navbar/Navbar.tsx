import * as S from "./Navbar.styled";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const Navbar = () => {
  return (
    <S.Container>
      <S.ContainerTop>
        <S.Logo>MagBook™</S.Logo>
        <S.ListUl>
          <S.ListLi>Home</S.ListLi>
          <S.ListLi>Events</S.ListLi>
          <S.ListLi>Contact Us</S.ListLi>
          <S.ListLi>About Us</S.ListLi>
        </S.ListUl>
        <ProfileDropdown />
      </S.ContainerTop>
      <S.ContainerBottom>
        <S.Dash></S.Dash>
      </S.ContainerBottom>
    </S.Container>
  );
};

export default Navbar;
