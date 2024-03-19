import React from "react";
import { Headline, Button, ListOfActions } from "./Home.styled";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdOutlineEventAvailable } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { FaUsers, FaFile } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <Headline>Dashboard</Headline>
      <ListOfActions>
        <Link to="/admin/account">
          <Button color="#DF6A2E">
            <MdAccountCircle /> Your profile
          </Button>
        </Link>

        <Link to="/admin/user">
          <Button color="#71984A">
            <FaUsers /> Users
          </Button>
        </Link>
      </ListOfActions>
      <ListOfActions>
        <Link to="/admin/faculty">
          <Button color="#C2C6E8">
            <LuSchool /> Faculty
          </Button>
        </Link>

        <Link to="/admin/contribution">
          <Button color="#236192">
            <FaFile /> Contributions
          </Button>
        </Link>
      </ListOfActions>
      <ListOfActions>
        <Link to="/admin/event">
          <Button color="#F2BA1D">
            <MdOutlineEventAvailable /> Events
          </Button>
        </Link>
      </ListOfActions>
    </>
  );
};

export default Home;
