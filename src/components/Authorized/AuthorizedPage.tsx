import React from "react";
import { RootState } from "../../store";
import { ERole } from "../../enums/user.enums";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface IAuthorizedPageProps {
  allowedRoles: ERole[];
  children: React.ReactNode;
}

const AuthorizedPage = ({ allowedRoles, children }: IAuthorizedPageProps) => {
  const { user } = useSelector((state: RootState) => state.userState);

  console.log(user);

  if (!user) return <Navigate to="/login" />;

  return allowedRoles.includes(user!.role) ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
export default AuthorizedPage;
