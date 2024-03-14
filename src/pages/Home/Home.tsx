import React from "react";
import AuthorizedPage from "../../components/Authorized/AuthorizedPage";
import { ERole } from "../../enums/user.enums";

const Home = (): JSX.Element => {
  // add auth page for testing
  return (
    <AuthorizedPage allowedRoles={[ERole.Student, ERole.Admin]}>
      Home
    </AuthorizedPage>
  );
};

export default Home;
