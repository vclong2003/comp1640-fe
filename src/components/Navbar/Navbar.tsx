import * as S from "./Navbar.styled";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import OffCanvas from "@components/OffCanvas/OffCanvas";

const Navbar = () => {
  const location = useLocation();

  const [isOffcanavsVisible, setIsOffCanvasVisible] = useState<boolean>(false);
  const openOffcanvas = () => setIsOffCanvasVisible(true);
  const closeOffCanvas = () => setIsOffCanvasVisible(false);

  useEffect(() => {
    closeOffCanvas();
  }, [location]);
  return (
    <S.Container>
      <S.ContainerTop>
        <S.ResponsiveNavButton onClick={openOffcanvas}>
          <GiHamburgerMenu />
        </S.ResponsiveNavButton>
        <OffCanvas show={isOffcanavsVisible} onClose={closeOffCanvas}>
          <S.VerticalNavList>
            <S.ListLi>Home</S.ListLi>
            <S.ListLi>Events</S.ListLi>
            <S.ListLi>Contact Us</S.ListLi>
            <S.ListLi>About Us</S.ListLi>
          </S.VerticalNavList>
        </OffCanvas>
        <S.Logo>MagBook™</S.Logo>
        <S.ListUl>
          <S.ListLi>Home</S.ListLi>
          <S.ListLi>Events</S.ListLi>
          <S.ListLi>Contact Us</S.ListLi>
          <S.ListLi>About Us</S.ListLi>
        </S.ListUl>
        <S.Profile>
          <ProfileDropdown />
        </S.Profile>
      </S.ContainerTop>

      <S.Dash></S.Dash>
    </S.Container>
  );
};

export default Navbar;
