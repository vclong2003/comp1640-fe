import { Link } from "react-router-dom";
import { MdOutlineEventAvailable } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { FaUsers, FaFile, FaHome } from "react-icons/fa";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AdminMenu } from "./Menu.styled";
import AuthorizedComponent from "@components/AuthorizedComponent/AuthorizedComponent";
import { ERole } from "@interfaces/user.interfaces";
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const Menu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AdminMenu>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 0, borderColor: "divider" }}
      >
        {/* Home ---------------------------------------- */}
        <Link to="/manage">
          <Tab
            icon={<FaHome />}
            iconPosition="start"
            label="Dashboard"
            {...a11yProps(0)}
            sx={{ width: "100%", justifyContent: "flex-start" }}
          />
        </Link>
        {/* Faculty -------------------------------------- */}
        <AuthorizedComponent
          allowedRoles={[ERole.Admin, ERole.MarketingManager]}
        >
          <Link to="/manage/faculty">
            <Tab
              icon={<LuSchool />}
              iconPosition="start"
              label="Faculties"
              {...a11yProps(1)}
              sx={{ width: "100%", justifyContent: "flex-start" }}
            />
          </Link>
        </AuthorizedComponent>
        {/* Event ----------------------------------------- */}
        <Link to="/manage/event">
          <Tab
            icon={<MdOutlineEventAvailable />}
            iconPosition="start"
            label="Events"
            {...a11yProps(2)}
            sx={{ width: "100%", justifyContent: "flex-start" }}
          />
        </Link>
        {/* User ------------------------------------------ */}
        <AuthorizedComponent allowedRoles={[ERole.Admin]}>
          <Link to="/manage/user">
            <Tab
              icon={<FaUsers />}
              iconPosition="start"
              label="Users"
              {...a11yProps(3)}
              sx={{ width: "100%", justifyContent: "flex-start" }}
            />
          </Link>
        </AuthorizedComponent>
        {/* Contribution ----------------------------------- */}
        <Link to="/manage/contribution">
          <Tab
            icon={<FaFile />}
            iconPosition="start"
            label="Contributions"
            {...a11yProps(4)}
            sx={{ width: "100%", justifyContent: "flex-start" }}
          />
        </Link>
      </Tabs>
    </AdminMenu>
  );
};
