import { IRoute } from "../interfaces/common.interfaces";
import Home from "../pages/Home/Home";
import EventPage from "../pages/EventPage/EventPage";
import EventDetail from "../pages/EventEdit/EventEdit";
import AuthorizedPage from "../components/AuthorizedPage/AuthorizedPage";
import Profile from "../pages/Profile/Profile";
import { ERole } from "../interfaces/user.interfaces";
import AddContribution from "../pages/AddContribution/AddContribution";
import ContributionDetail from "../pages/ContributionDetail/ContributionDetail";

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
    path: "/profile",
    component: (
      <AuthorizedPage>
        <Profile />
      </AuthorizedPage>
    ),
  },
  {
    path: "/contribution",
    component: (
      <AuthorizedPage>
        <ContributionDetail />
      </AuthorizedPage>
    ),
  },
  {
    path: "add-contribution",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Student, ERole.Admin]}>
        <AddContribution />
      </AuthorizedPage>
    ),
  },
  {
    path: "/eventdetail",
    component: <EventDetail />,
  },
];
