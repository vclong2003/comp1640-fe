import React from "react";
import { Headline, Button, ListOfActions } from "./Admin.styled";
import HeaderComponent from "../../components/AdminComponents/Header/Header";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Headline>Dashboard</Headline>

      <ListOfActions>
        <Link to="/admin/account">
          <Button color="#DF6A2E">Your profile</Button>
        </Link>

        <Button color="#71984A">Users</Button>
      </ListOfActions>
      <ListOfActions>
        <Button color="#C2C6E8">Faculty</Button>
        <Button color="#236192">Contributes</Button>
      </ListOfActions>
      <ListOfActions>
        <Button color="#F2BA1D">Events</Button>
      </ListOfActions>
    </>
  );
};

export default Admin;
