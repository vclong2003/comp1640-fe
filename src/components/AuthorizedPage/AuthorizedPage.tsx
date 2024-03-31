import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ERole } from "@interfaces/user.interfaces";
import { RootState } from "@store/index";
import { notifyError } from "@utils/notification.utils";

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

  if (!allowedRoles || allowedRoles.includes(user!.role)) {
    return <>{children}</>;
  }

  notifyError("You are not authorized to access this page!");
  return <Navigate to="/" />;
};
export default AuthorizedPage;
