import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  createTheme,
  // styled,
} from "@mui/material";
import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import Link from "@components/Link/Link";
import { FaUsers, FaFile, FaHome } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { MdOutlineEventAvailable } from "react-icons/md";
// import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import AppBar from "./Header";
import Drawer from "./Menu";

// const pages = ["Dashboard", "Faculties", "Events", "Users", "Contributions"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const mainListItems = (
  <React.Fragment>
    <Link to="/manage">
      <ListItemButton>
        <ListItemIcon>
          <FaHome />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/manage/faculty">
      <ListItemButton>
        <ListItemIcon>
          <LuSchool />
        </ListItemIcon>
        <ListItemText primary="Faculties" />
      </ListItemButton>
    </Link>
    <Link to="/manage/event">
      <ListItemButton>
        <ListItemIcon>
          <MdOutlineEventAvailable />
        </ListItemIcon>
        <ListItemText primary="Events" />
      </ListItemButton>
    </Link>
    <Link to="/manage/user">
      <ListItemButton>
        <ListItemIcon>
          <FaUsers />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    </Link>
    <Link to="/manage/contribution">
      <ListItemButton>
        <ListItemIcon>
          <FaFile />
        </ListItemIcon>
        <ListItemText primary="Contributions" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ManagementLayout() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null,
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null,
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="a"
              variant="h4"
              color="inherit"
              noWrap
              href="/home"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ALHQK
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> 
             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

            <Box
              sx={{ width: "85%", display: "flex", justifyContent: "flex-end" }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip title="Open settings">
                  {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                {/* <Menu
                  sx={{
                    mt: "45px",
                    "@media only screen and (max-width: 600px)": {
                      display: "none",
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{}}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu> */}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "@media only screen and (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ padding: 3 }}>
            {/* Page goes here --- VCL */}
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
