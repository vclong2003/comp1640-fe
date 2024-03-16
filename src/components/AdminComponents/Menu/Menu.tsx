import React from "react";
import { AdminMenu, Logo } from "./Menu.styled";
import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <>
      <AdminMenu>
        <Logo>
          <h2>ALHKQ</h2>
        </Logo>
        <Link to="/admin">
          <button>Home</button>
        </Link>

        <Link to="/admin/account">
          <button>Your Profile</button>
        </Link>
        <Link to="/admin/faculty">
          <button>Faculty</button>
        </Link>

        <button>User</button>
        <button>Events</button>
        <button>Contributions</button>
      </AdminMenu>
    </>
  );
};
