import { Button, Stack } from '@mui/material';
import { useAuth } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Authorization/operations';
import Avatar from '@mui/material/Avatar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: '16px', 
});

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    if (name && name.split(' ').length >= 2) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    } else if (name) {
      // Handle the case where there's only one word in the name
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: name[0],
      };
    } else {
      // Handle the case where name is undefined or empty
      return {
        sx: {
          bgcolor: 'defaultBackgroundColor', // Provide a default background color
        },
        children: 'N', // Provide a default initial if name is empty
      };
    }
  }
  

  return (
    <StyledStack direction="row" spacing={2}>
      <Button color="inherit">
        <Link
          to="/register"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Contacts
        </Link>
      </Button>

      <Button
        type="button"
        color="inherit"
        startIcon={<Avatar {...stringAvatar(user.name)} />}
        onClick={() => dispatch(logOut())}
        size="small"
      >
        Log Out
      </Button>
    </StyledStack>
  );
};

export default UserMenu;
