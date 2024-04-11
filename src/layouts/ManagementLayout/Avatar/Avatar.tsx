import * as S from "./Avatar.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { EDropDownPosition } from "@components/Dropdown/dropdown.enums";
import Dropdown from "@components/Dropdown/Dropdown";
import Avatar from "@components/Avatar/Avatar";
import Link from "@components/Link/Link";
import { logout } from "@store/user";

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
        <S.DropdownItem>
          <Link to="/home">Home</Link>
        </S.DropdownItem>
        <S.DropdownItem onClick={onLogout}>Logout</S.DropdownItem>
      </S.DropdownContent>
    </Dropdown>
  );
}
