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
            <NavList />
          </S.VerticalNavList>
        </OffCanvas>
        <S.Logo>
          <Link to="/home">ALHKQ™</Link>
        </S.Logo>
        <S.NavList>
          <NavList />
        </S.NavList>
        <S.Profile>
          <ProfileDropdown />
        </S.Profile>
      </S.ContainerTop>

      <S.Dash></S.Dash>
    </S.Container>
  );
};

function NavList() {
  return (
    <>
      <S.NavItem to="/home">Home</S.NavItem>
      {/* To event ----------------------------------  */}
      <AuthorizedComponent allowedRoles={[ERole.Student]}>
        <S.NavItem to="/event">Events</S.NavItem>
      </AuthorizedComponent>
      {/* To manage admin/mm ------------------------ */}
      <AuthorizedComponent allowedRoles={[ERole.Admin, ERole.MarketingManager]}>
        <S.NavItem to="/manage">Manage</S.NavItem>
      </AuthorizedComponent>
      {/* TO manage mc -------------------------- */}
      <AuthorizedComponent allowedRoles={[ERole.MarketingCoordinator]}>
        <S.NavItem to="/manage/event">Manage</S.NavItem>
      </AuthorizedComponent>
      <S.NavItem to="/about-us">About Us</S.NavItem>
    </>
  );
}

export default Navbar;
