import { IRoute } from "../interfaces/common.interfaces";
import NewRegister from "../pages/NewRegister/NewRegister";
import Login from "../pages/authPages/Login/Login";
import SetupAccount from "../pages/authPages/SetupAccount/SetupAccount";
import ForgotPassword from "../pages/authPages/ForgotPassword/ForgotPassword";

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

  {
    path: "forgot-password",
    component: <ForgotPassword />,
  },
];
