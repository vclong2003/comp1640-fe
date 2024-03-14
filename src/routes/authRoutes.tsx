import React from "react";

import { IRoute } from "../interfaces";
import Login from "../pages/authPages/Login/Login";
import SetupAccount from "../pages/authPages/SetupAccount/SetupAccount";

export const authRoutes: IRoute[] = [
  {
    path: "login",
    component: <Login />,
  },
  {
    path: "setup-account/:token",
    component: <SetupAccount />,
  },
];
