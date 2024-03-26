import { IRoute } from "../interfaces/common.interfaces";
import NewLogin from "../pages/NewLogin/NewLogin";
import NewRegister from "../pages/NewRegister/NewRegister";
import SetupAccount from "../pages/authPages/SetupAccount/SetupAccount";

export const authRoutes: IRoute[] = [
  {
    path: "login",
    component: <NewLogin />,
  },
  {
    path: "register",
    component: <NewRegister />,
  },
  {
    path: "setup-account/:token",
    component: <SetupAccount />,
  },
];
