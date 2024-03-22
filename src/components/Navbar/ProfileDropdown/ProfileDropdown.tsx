import Dropdown, {
  EDropDownPosition,
} from "../../../components/Dropdown/Dropdown";
import { MdAccountCircle } from "react-icons/md";
import * as S from "./ProfileDropdown.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

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
  const { name } =
    useSelector((state: RootState) => state.userState.user) || {};

  return (
    <Dropdown
      position={EDropDownPosition.RIGHT}
      toggleButton={
        <S.ProfileButton>
          <MdAccountCircle />
          <p>{name}</p>
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
