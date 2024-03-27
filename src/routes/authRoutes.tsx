import { IRoute } from "../interfaces/common.interfaces";
import Login from "../pages/authPages/Login/Login";
import Register from "../pages/authPages/Register/Register";
import SetupAccount from "../pages/authPages/SetupAccount/SetupAccount";

export const authRoutes: IRoute[] = [
  {
    path: "login",
    component: <Login />,
  },
  {
    path: "register",
    component: <Register />,
  },
  {
    path: "setup-account/:token",
    component: <SetupAccount />,
  },
];
