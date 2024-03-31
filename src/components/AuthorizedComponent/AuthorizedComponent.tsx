import { ERole } from "@interfaces/user.interfaces";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

interface IAuthorizedComponentProps {
  allowedRoles: ERole[];
  children: React.ReactNode;
}

export default function AuthorizedComponent({
  allowedRoles,
  children,
}: IAuthorizedComponentProps) {
  const { user } = useSelector((state: RootState) => state.userState);
  if (!user) return "";

  if (!allowedRoles || allowedRoles.includes(user!.role)) {
    return children;
  }

  return "";
}
