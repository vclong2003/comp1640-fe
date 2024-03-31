import * as S from "./ProfileDropdown.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { EDropDownPosition } from "../../Dropdown/dropdown.enums";
import Dropdown from "../../Dropdown/Dropdown";
import Avatar from "../../Avatar/Avatar";
import { logout } from "@store/user/userActions";
import Link from "@components/Link/Link";

export default function ProfileDropdown() {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Dropdown
      position={EDropDownPosition.LEFT}
      toggleButton={
        <S.ProfileButton>
          <S.AvatarContainer>
            <Avatar imageUrl={user?.avatar_url} />
          </S.AvatarContainer>
          {/*  */}
        </S.ProfileButton>
      }
    >
      <S.DropdownContent>
        <S.DropdownItem>
          <S.UserInfoContainer>
            <S.UserName>{user?.name}</S.UserName>
            <S.UserRole>{user?.role}</S.UserRole>
          </S.UserInfoContainer>
        </S.DropdownItem>
        <S.DropdownItem>
          <Link to="/profile">My Profile</Link>
        </S.DropdownItem>
        <S.DropdownItem>My Contribution</S.DropdownItem>
        <S.DropdownItem onClick={onLogout}>Logout</S.DropdownItem>
      </S.DropdownContent>
    </Dropdown>
  );
}
