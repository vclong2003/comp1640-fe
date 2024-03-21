import { Headline, Button, ListOfActions } from "./Home.styled";
import { Link } from "react-router-dom";
import { MdOutlineEventAvailable } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { FaUsers, FaFile } from "react-icons/fa";
import AuthorizedPage from "../../../components/Authorized/AuthorizedPage";
const Home = () => {
  return (
    <AuthorizedPage>
      <Headline>Dashboard</Headline>
      <ListOfActions>
        <Link to="/manage/user">
          <Button color="#71984A">
            <FaUsers /> Users
          </Button>
        </Link>
      </ListOfActions>
      <ListOfActions>
        <Link to="/manage/faculty">
          <Button color="#C2C6E8">
            <LuSchool /> Faculty
          </Button>
        </Link>

        <Link to="/manage/contribution">
          <Button color="#236192">
            <FaFile /> Contributions
          </Button>
        </Link>
      </ListOfActions>
      <ListOfActions>
        <Link to="/manage/event">
          <Button color="#F2BA1D">
            <MdOutlineEventAvailable /> Events
          </Button>
        </Link>
      </ListOfActions>
    </AuthorizedPage>
  );
};

export default Home;
