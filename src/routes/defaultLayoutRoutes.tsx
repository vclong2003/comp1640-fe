import { IRoute } from "@interfaces/common.interfaces";
import Home from "@pages/Home/Home";
import AuthorizedPage from "@components/AuthorizedPage/AuthorizedPage";
import Profile from "@pages/Profile/Profile";
import { ERole } from "@interfaces/user.interfaces";
import AddContribution from "@pages/AddContribution/AddContribution";
import ContributionDetail from "@pages/ContributionDetail/ContributionDetail";
import Event from "@pages/Event/Event";
import AboutUs from "@pages/AboutUs/AboutUs";
import EventDetail from "@pages/EventDetail/EventDetail";

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
      <AuthorizedPage
        allowedRoles={[ERole.Guest, ERole.MarketingCoordinator, ERole.Student]}
      >
        <Event />
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
    path: "/contribution",
    component: (
      <AuthorizedPage>
        <ContributionDetail />
      </AuthorizedPage>
    ),
  },
  {
    path: "/add-contribution",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Student, ERole.Admin]}>
        <AddContribution />
      </AuthorizedPage>
    ),
  },
  {
    path: "/event/:eventId",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Student, ERole.Admin]}>
        <EventDetail />
      </AuthorizedPage>
    ),
  },
  {
    path: "about-us",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Student, ERole.Admin, ERole.Guest]}>
        <AboutUs />
      </AuthorizedPage>
    ),
  },
];
