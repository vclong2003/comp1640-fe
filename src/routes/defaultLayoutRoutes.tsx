import { IRoute } from "../interfaces";
import Home from "../pages/Home/Home";
import EventPage from "../pages/EventPage/EventPage";
import AddContributions from "../pages/Contributions/AddContributions/AddContributions";
import EditProfile from "../pages/EditProfifle/EditProfile";
import DetailContributes from "../pages/DetailContributes/DetailContributes";

export const defaultLayoutRoutes: IRoute[] = [
  {
    path: "/home",
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
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
  {
    path: "/detailcontributes",
    component: <DetailContributes />,
  },
];
