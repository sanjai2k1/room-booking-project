import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Header from "../components/HeaderComp";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import {
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  CssBaseline,
} from "@mui/material";

import SelectCity from "../Pages/SelectCity";
import SelectedRooms from "../Pages/SelectedRooms";
import data from "../data/roomdata.json"; // Import your data
import HomeComp from "../Pages/HomeComp";
import HeaderComp from "../components/HeaderComp";
import { useLogin } from "./LoginContext";

import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
  },
}));

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const StyledNavLink = ({ to, text }) => (
  <StyledLink to={to}>
    <CustomListItemButton>
      <CustomListItemText primary={text} />
    </CustomListItemButton>
  </StyledLink>
);

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const UserDashBoard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {
    login,
    setLogin,
    showUserDashboard,
    setShowuserDashboard,
    showAdminDashboard,
    setShowadminDashboard,
  } = useLogin();
  // Load data from localStorage on component mount
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setLogin(true);
      setShowuserDashboard(true);
    }
    console.log(login, showUserDashboard);
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const logout = () => {
    setShowuserDashboard(false);
    sessionStorage.clear("user");

    navigate("/landing");
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  if (login && showUserDashboard) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/images/logo-color.png"
                  alt="Logo"
                  style={{ width: 40, height: 40, marginRight: 10 }}
                />
                <Typography variant="h6" noWrap component="div">
                  SNKM ROOMS
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
              <Button
              variant="contained"
              color="secondary"
              onClick={logout}
              >
              Log Out
            </Button>
            </Box>

            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <List>
              <Box
                sx={{ display: "flex", alignItems: "center", margin: "10px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("select-rooms")}
                  fullWidth
                >
                  Select Rooms
                </Button>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", margin: "10px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("selected-rooms")}
                  fullWidth
                >
                  Selected Rooms
                </Button>
              </Box>
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />

            <Outlet />
          </Main>
        </Box>

      </>
    );
  }
  const goToLogin = () => {
    navigate("/login");
  };

  return <>{goToLogin()}</>;
};

export default UserDashBoard;
