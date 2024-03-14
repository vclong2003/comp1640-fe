import React from "react";
import { RootState } from "../../store";
import { ERole } from "../../enums/user.enums";
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
