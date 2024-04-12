import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router";
import Link from "@components/Link/Link";
import { FaUsers, FaFile, FaHome } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { MdOutlineEventAvailable } from "react-icons/md";
import Avatar from "./Avatar/Avatar";
import AuthorizedComponent from "@components/AuthorizedComponent/AuthorizedComponent";
import { ERole } from "@interfaces/user.interfaces";
const drawerWidth = 240;

export default function ManagementLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const mainListItems = (
    <>
      <AuthorizedComponent allowedRoles={[ERole.Admin, ERole.MarketingManager]}>
        <Link to="/manage">
          <ListItemButton>
            <ListItemIcon>
              <FaHome />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Link>
      </AuthorizedComponent>
      {/* Manage/faculty------------------------------------- */}
      <AuthorizedComponent allowedRoles={[ERole.Admin, ERole.MarketingManager]}>
        <Link to="/manage/faculty">
          <ListItemButton>
            <ListItemIcon>
              <LuSchool />
            </ListItemIcon>
            <ListItemText primary="Faculties" />
          </ListItemButton>
        </Link>
      </AuthorizedComponent>
      {/* Manage/event------------------------------------- */}
      <Link to="/manage/event">
        <ListItemButton>
          <ListItemIcon>
            <MdOutlineEventAvailable />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>
      </Link>
      {/* Manage/user------------------------------------- */}
      <AuthorizedComponent allowedRoles={[ERole.Admin]}>
        <Link to="/manage/user">
          <ListItemButton>
            <ListItemIcon>
              <FaUsers />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </Link>
      </AuthorizedComponent>
      {/* Manage/contribution------------------------------------- */}
      <Link to="/manage/contribution">
        <ListItemButton>
          <ListItemIcon>
            <FaFile />
          </ListItemIcon>
          <ListItemText primary="Contributions" />
        </ListItemButton>
      </Link>
    </>
  );

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List component="nav">{mainListItems}</List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/home">ALHKQ</Link>

          <Avatar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
