import { IRoute } from "../interfaces/common.interfaces";
import Home from "../pages/Home/Home";
import EventPage from "../pages/EventPage/EventPage";
import AddContributions from "../pages/Contributions/AddContributions/AddContributions";
import DetailContributes from "../pages/DetailContributes/DetailContributes";
import EventDetail from "../pages/EventEdit/EventEdit";
import AuthorizedPage from "../components/AuthorizedPage/AuthorizedPage";
import Profile from "../pages/Profile/Profile";

export const defaultLayoutRoutes: IRoute[] = [
  {
    path: "/home",
    component: (
      <AuthorizedPage>
        <Home />
      </AuthorizedPage>
    ),
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
    path: "/profile",
    component: (
      <AuthorizedPage>
        <Profile />
      </AuthorizedPage>
    ),
  },
  {
    path: "/detailcontributes",
    component: <DetailContributes />,
  },
  {
    path: "/eventdetail",
    component: <EventDetail />,
  },
];
