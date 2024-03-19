import React from "react";
import { IRoute } from "../interfaces";
import { AdminAccount } from "../pages/managementPages/Account/Account";

export const managementRoutes: IRoute[] = [
  {
    path: "manage/account",
    component: <AdminAccount />,
  },
];
