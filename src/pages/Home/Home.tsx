import React from "react";
import AuthorizedPage from "../../components/Authorized/AuthorizedPage";
import { ERole } from "../../enums/user.enums";

const Home = (): JSX.Element => {
  return <AuthorizedPage allowedRoles={[ERole.Admin]}>Home</AuthorizedPage>;
};

export default Home;
