import * as S from "./ProfileDropdown.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { EDropDownPosition } from "../../Dropdown/dropdown.enums";
import Dropdown from "../../Dropdown/Dropdown";
import Avatar from "../../Avatar/Avatar";

const profileItems = [
  {
    label: "My Contribution",
    link: "/contribution",
  },
  {
    label: "Edit Profile",
    link: "/profile",
  },
  {
    label: "Log out",
    link: "/logout",
  },
];

export default function ProfileDropdown() {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <Dropdown
      position={EDropDownPosition.LEFT}
      toggleButton={
        <S.ProfileButton>
          <S.AvatarContainer>
            <Avatar imageUrl={user?.avatar_url} />
          </S.AvatarContainer>
          <S.UserName>{user?.name}</S.UserName>
        </S.ProfileButton>
      }
    >
      <S.DropdownContent>
        {profileItems.map((item) => (
          <S.DropdownItem key={item.label}>{item.label}</S.DropdownItem>
        ))}
      </S.DropdownContent>
    </Dropdown>
  );
}
