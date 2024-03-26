import { IRoute } from "../interfaces/common.interfaces";
import NewLogin from "../pages/NewLogin/NewLogin";
import SetupAccount from "../pages/authPages/SetupAccount/SetupAccount";

export const authRoutes: IRoute[] = [
  {
    path: "login",
    component: <NewLogin />,
  },
  {
    path: "setup-account/:token",
    component: <SetupAccount />,
  },
];
