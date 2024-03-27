import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ERole } from "@interfaces/user.interfaces";
import { RootState } from "@store/index";

interface IAuthorizedPageProps {
  allowedRoles?: ERole[];
  children: React.ReactNode;
}

const AuthorizedPage = ({
  allowedRoles,
  children,
}: IAuthorizedPageProps): ReactNode => {
  const { user } = useSelector((state: RootState) => state.userState);

  const { pathname } = useLocation();

  if (!user) return <Navigate to={"/login" + "?redirect=" + pathname} />;

  return !allowedRoles || allowedRoles.includes(user!.role) ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
export default AuthorizedPage;
