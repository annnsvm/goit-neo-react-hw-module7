import { Box, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Button color="inherit">
        <NavLink
          to="/register"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Sign up
        </NavLink>
      </Button>

      <Button color="inherit">
        <NavLink
          to="/login"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Sign in
        </NavLink>
      </Button>
    </Box>
  );
};

export default AuthNav;
