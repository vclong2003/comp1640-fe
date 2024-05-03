import { IRoute } from "@interfaces/common.interfaces";
import Home from "@pages/managementPages/Home/Home";
import User from "@pages/managementPages/User/User";
import Faculty from "@pages/managementPages/Faculty/Faculty";
import Event from "@pages/managementPages/Event/Event";
import Contribution from "@pages/managementPages/Contribution/Contribution";
import AuthorizedPage from "@components/AuthorizedPage/AuthorizedPage";
import { ERole } from "@interfaces/user.interfaces";
import UserDetail from "@pages/managementPages/User/UserDetail";
import EventDetailManage from "@pages/managementPages/Event/EventDetailManage/EventDetailManage";
import ViewDetailFaculty from "@pages/managementPages/Faculty/ViewDetailFaculty";
import ContributionDetail from "@pages/ContributionDetail/ContributionDetail";
import EditContribution from "@pages/EditContribution/EditContribution";
export const managementRoutes: IRoute[] = [
  {
    path: "manage/",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Admin, ERole.MarketingManager]}>
        <Home />
      </AuthorizedPage>
    ),
  },
  {
    path: "manage/user",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Admin]}>
        <User />
      </AuthorizedPage>
    ),
  },
  {
    path: "manage/faculty",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Admin, ERole.MarketingManager]}>
        <Faculty />
      </AuthorizedPage>
    ),
  },
  {
    path: "manage/event",
    component: (
      <AuthorizedPage
        allowedRoles={[
          ERole.Admin,
          ERole.MarketingCoordinator,
          ERole.MarketingManager,
        ]}
      >
        <Event />
      </AuthorizedPage>
    ),
  },
  {
    path: "manage/event/:eventId",
    component: (
      <AuthorizedPage
        allowedRoles={[
          ERole.Admin,
          ERole.MarketingCoordinator,
          ERole.MarketingManager,
        ]}
      >
        <EventDetailManage />
      </AuthorizedPage>
    ),
  },

  {
    path: "manage/contribution",
    component: (
      <AuthorizedPage
        allowedRoles={[
          ERole.Admin,
          ERole.MarketingCoordinator,
          ERole.MarketingManager,
        ]}
      >
        <Contribution />
      </AuthorizedPage>
    ),
  },
  {
    path: "manage/user/:userId",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Admin]}>
        <UserDetail />
      </AuthorizedPage>
    ),
  },
  {
    path: "manage/faculty/:facultyId",
    component: (
      <AuthorizedPage allowedRoles={[ERole.Admin]}>
        <ViewDetailFaculty />
      </AuthorizedPage>
    ),
  },

  {
    path: "manage/contribution/:contributionId",
    component: (
      <AuthorizedPage
        allowedRoles={[
          ERole.Admin,
          ERole.MarketingCoordinator,
          ERole.MarketingManager,
        ]}
      >
        <ContributionDetail />
      </AuthorizedPage>
    ),
  },
  {
    path: "manage/contribution/:contributionId/edit",
    component: (
      <AuthorizedPage allowedRoles={[ERole.MarketingCoordinator]}>
        <EditContribution />
      </AuthorizedPage>
    ),
  },
];
