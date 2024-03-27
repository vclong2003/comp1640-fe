import { IRoute } from "../interfaces/common.interfaces";
import Home from "../pages/Home/Home";
import EventDetail from "../pages/EventEdit/EventEdit";
import AuthorizedPage from "../components/AuthorizedPage/AuthorizedPage";
import Profile from "../pages/Profile/Profile";
import { ERole } from "../interfaces/user.interfaces";
import AddContribution from "../pages/AddContribution/AddContribution";
import ContributionDetail from "../pages/ContributionDetail/ContributionDetail";
import EventList from "../pages/EventList/EventList.styled";

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
    component: (
      <AuthorizedPage>
        <EventList />
      </AuthorizedPage>
    ),
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
    path: "contribution/:id",
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
