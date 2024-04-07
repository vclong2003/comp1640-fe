import * as S from "./Navbar.styled";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import OffCanvas from "@components/OffCanvas/OffCanvas";
import Link from "@components/Link/Link";
import AuthorizedComponent from "@components/AuthorizedComponent/AuthorizedComponent";
import { ERole } from "@interfaces/user.interfaces";

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
            <S.NavItem to="/home">Home</S.NavItem>
            <S.NavItem to="/event">Events</S.NavItem>
            <S.NavItem to="/about-us">About Us</S.NavItem>
          </S.VerticalNavList>
        </OffCanvas>
        <S.Logo>
          <Link to="/home">MagBook™</Link>
        </S.Logo>
        <S.NavList>
          <S.NavItem to="/home">Home</S.NavItem>
          <AuthorizedComponent
            allowedRoles={[
              ERole.Guest,
              ERole.Student,
              ERole.MarketingCoordinator,
            ]}
          >
            <S.NavItem to="/event">Events</S.NavItem>
          </AuthorizedComponent>
          <AuthorizedComponent
            allowedRoles={[
              ERole.Admin,
              ERole.MarketingManager,
              ERole.MarketingCoordinator,
            ]}
          >
            <S.NavItem to="/manage">Manage</S.NavItem>
          </AuthorizedComponent>
          <S.NavItem to="/about-us">About Us</S.NavItem>
        </S.NavList>
        <S.Profile>
          <ProfileDropdown />
        </S.Profile>
      </S.ContainerTop>

      <S.Dash></S.Dash>
    </S.Container>
  );
};

export default Navbar;
