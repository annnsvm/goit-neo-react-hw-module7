import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoading } from 'redux/Contacts/selectors';
import { useAuth } from 'hooks';
import AuthNav from 'components/AuthNav/AuthNav';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { grey } from '@mui/material/colors';

const Header = () => {
  const isLoading = useSelector(selectIsLoading);

  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2 }}
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <OtherHousesIcon sx={{ color: grey[50] }} />
              </Link>
            </IconButton>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};

export default Header;
