import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface NavbarProps {
  // define your props here
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Web
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
