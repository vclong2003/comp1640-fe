import React from "react";

import { IRoute } from "../interfaces";
import Home from "../pages/Home/Home";

export const defaultLayoutRoutes: IRoute[] = [
  {
    path: "/",
    component: <Home />,
  },
];
