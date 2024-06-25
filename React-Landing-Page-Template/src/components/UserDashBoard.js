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
  AppBar,
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
const drawerWidth = 240;

const UserDashBoard = () => {
  const navigate = useNavigate()
  const {login,setLogin,showUserDashboard,setShowuserDashboard,showAdminDashboard,setShowadminDashboard} = useLogin()
  // Load data from localStorage on component mount
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setLogin(true)
      setShowuserDashboard(true)
      
    }
console.log(login,showUserDashboard)
  },[])
  
if(login&&showUserDashboard)
  {
  return (
    <>
      {/* <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          
           <Outlet />
          
        </div>
      </div> */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <HeaderComp />
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <Link
                to="select-rooms"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ListItem>
                  <Button variant="contained" color="primary" fullWidth>
                    Select Rooms
                  </Button>
                </ListItem>
              </Link>

              <Link to="selected-rooms"  
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}>
                <ListItem>
                  <Button variant="contained" color="secondary" fullWidth>
                    Selected Rooms
                  </Button>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
const goToLogin =()=>{

  navigate("/login")
}

return (<>{goToLogin()}</>)

};

export default UserDashBoard;
