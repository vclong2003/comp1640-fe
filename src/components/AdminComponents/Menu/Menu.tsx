import React from "react";
import { AdminMenu, Logo } from "./Menu.styled";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdOutlineEventAvailable } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { FaUsers, FaFile, FaHome } from "react-icons/fa";
export const Menu = () => {
  return (
    <>
      <AdminMenu>
        <Logo>
          <h2>ALHKQ</h2>
        </Logo>
        <Link to="/admin">
          <button>
            <FaHome /> Home
          </button>
        </Link>

        <Link to="/admin/account">
          <button>
            <MdAccountCircle /> Your Profile
          </button>
        </Link>
        <Link to="/admin/faculty">
          <button>
            <LuSchool /> Faculty
          </button>
        </Link>

        <Link to="/admin/user">
          <button>
            <FaUsers /> User
          </button>
        </Link>
        <Link to="/admin/event">
          <button>
            <MdOutlineEventAvailable /> Events
          </button>
        </Link>
        <Link to="/admin/contribution">
          <button>
            <FaFile /> Contributions
          </button>
        </Link>
      </AdminMenu>
    </>
  );
};
