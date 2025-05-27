import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Authorization/selectors';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const HomeScreen = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
      }}
    >
      <Typography variant="h2" component="h1" text-align="center">
        Welcome to your Phone Book
      </Typography>
      <Stack direction="row" spacing={20} m={20}>
        <PhoneEnabledIcon sx={{ fontSize: 200 }} color="primary"/>
        <PermContactCalendarIcon sx={{ fontSize: 200 }} color="primary"/>
        <BorderColorIcon sx={{ fontSize: 200 }} color="primary"/>
      </Stack>

      {!isLoggedIn ? (
        <Typography variant="h4" component="p">
          Please{' '}
          <Button variant="contained">
            <Link
              to="/register"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Sign up
            </Link>
          </Button>{' '}
          or{' '}
          <Button variant="contained">
            <Link
              to="/login"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Sign in
            </Link>
          </Button>
        </Typography>
      ) : (
        <h2>
          Open your{' '}
          <Button variant="contained">
            <Link
              to="/contacts"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Contacts
            </Link>
          </Button>
        </h2>
      )}
    </Box>
  );
};

export default HomeScreen;
