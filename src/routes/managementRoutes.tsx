import { IRoute } from "../interfaces/common.interfaces";
import Home from "../pages/managementPages/Home/Home";
import User from "../pages/managementPages/User/User";
import Faculty from "../pages/managementPages/Faculty/Faculty";
import Event from "../pages/managementPages/Event/Event";
import Contribution from "../pages/managementPages/Contribution/Contribution";

export const managementRoutes: IRoute[] = [
  {
    path: "manage/",
    component: <Home />,
  },
  {
    path: "manage/user",
    component: <User />,
  },
  {
    path: "manage/faculty",
    component: <Faculty />,
  },
  {
    path: "manage/event",
    component: <Event />,
  },
  {
    path: "manage/contribution",
    component: <Contribution />,
  },
];
