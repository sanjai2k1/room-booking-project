import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

import './HeaderComp.css'; // Import custom CSS

const HeaderComp = () => (


  
    <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo-color.png" alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <Typography variant="h6" noWrap component="div">
          SNKM ROOMS
          </Typography>
        </Box>
      </Toolbar>
    
  
);

export default HeaderComp;

