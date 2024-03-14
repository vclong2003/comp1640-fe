import React from "react";

import { IRoute } from "../interfaces";
import { Student } from "../pages/Student/Student.styled";

export const defaultLayoutRoutes: IRoute[] = [
  {
    path: "/",
    component: <Student />,
  },
];
