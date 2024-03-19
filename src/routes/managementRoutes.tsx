import React from "react";
import { IRoute } from "../interfaces";
import Home from "../pages/Home/Home";

export const managementRoutes: IRoute[] = [
  {
    path: "manage/",
    component: <Home />,
  },
];
