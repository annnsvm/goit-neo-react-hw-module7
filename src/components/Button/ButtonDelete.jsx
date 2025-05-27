import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const ButtonDelete = ({ onClick }) => {
  return (
    <IconButton color="primary" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default ButtonDelete;
