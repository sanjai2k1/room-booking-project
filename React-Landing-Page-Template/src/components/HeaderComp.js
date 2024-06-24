import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

import './HeaderComp.css'; // Import custom CSS
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useLogin } from './LoginContext';

const HeaderComp = () => {
  const navigate = useNavigate()
  const {login,showUserDashboard,setShowuserDashboard} = useLogin()

  const {id} = useParams()
  const logout = ()=>{
    setShowuserDashboard(false)
    


    navigate("/landing")


  }
  if(login && showUserDashboard)
    {
  return (


  
    <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo-color.png" alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <Typography variant="h6" noWrap component="div">
          SNKM ROOMS
          </Typography>
          <Button onClick={logout}>Log Out</Button>
        </Box>
      </Toolbar>
    
  
);
    }
    const goToLogin =()=>{

      navigate("/login")
    }
    
    return (<>{goToLogin()}</>)

}

export default HeaderComp;

