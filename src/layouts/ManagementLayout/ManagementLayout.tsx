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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  createTheme,
  // styled,
} from "@mui/material";
import { Outlet } from "react-router";
import Link from "@components/Link/Link";
import { FaUsers, FaFile, FaHome } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { MdOutlineEventAvailable } from "react-icons/md";
// import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import AppBar from "./Header";
import Drawer from "./Menu";
import Avatar from "@components/Avatar/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

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
  const { user } = useSelector((state: RootState) => state.userState);
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
              sx={{ width: "92%", display: "flex", justifyContent: "flex-end" }}
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
