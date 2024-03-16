import React from "react";

import { IRoute } from "../interfaces";
import Home from "../pages/Home/Home";
import EventPage from "../pages/EventPage/EventPage";
import AddContributions from "../pages/Contributions/AddContributions/AddContributions";

export const defaultLayoutRoutes: IRoute[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/event",
    component: <EventPage />,
  },
  {
    path: "/addcontributions",
    component: <AddContributions />,
  },
];
