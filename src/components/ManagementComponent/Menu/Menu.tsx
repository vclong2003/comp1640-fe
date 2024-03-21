import { AdminMenu, Logo } from "./Menu.styled";
import { Link } from "react-router-dom";
import { MdOutlineEventAvailable } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { FaUsers, FaFile, FaHome } from "react-icons/fa";
export const Menu = () => {
  return (
    <>
      <AdminMenu>
        <Logo>
          <h2>ALHKQ</h2>
        </Logo>
        <Link to="/manage">
          <button>
            <FaHome /> Home
          </button>
        </Link>

        <Link to="/manage/faculty">
          <button>
            <LuSchool /> Faculty
          </button>
        </Link>

        <Link to="/manage/user">
          <button>
            <FaUsers /> User
          </button>
        </Link>
        <Link to="/manage/event">
          <button>
            <MdOutlineEventAvailable /> Events
          </button>
        </Link>
        <Link to="/manage/contribution">
          <button>
            <FaFile /> Contributions
          </button>
        </Link>
      </AdminMenu>
    </>
  );
};
