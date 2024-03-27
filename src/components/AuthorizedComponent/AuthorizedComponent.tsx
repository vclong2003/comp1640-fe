import { ERole } from "@interfaces/user.interfaces";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

interface IAuthorizedComponent {
  allowedRoles: ERole[];
  children: React.ReactNode;
}

const AuthorizedComponent = ({
  allowedRoles,
  children,
}: IAuthorizedComponent) => {
  const { user } = useSelector((state: RootState) => state.userState);
  if (!user) return "";
  return !allowedRoles || allowedRoles.includes(user!.role) ? children : "";
};
export default AuthorizedComponent;
