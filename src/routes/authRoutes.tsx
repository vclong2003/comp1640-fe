import { IRoute } from "../interfaces/common.interfaces";
import NewRegister from "../pages/NewRegister/NewRegister";
import Login from "../pages/authPages/Login/Login";
import SetupAccount from "../pages/authPages/SetupAccount/SetupAccount";

export const authRoutes: IRoute[] = [
  {
    path: "login",
    component: <Login />,
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
