import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function AuthLayout(): JSX.Element {
  const [searchParams] = useSearchParams();
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <>
      {user && <Navigate to={searchParams.get("redirect") || "/home"} />}
      <Outlet />
    </>
  );
}