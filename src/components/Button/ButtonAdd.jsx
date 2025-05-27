import { Button } from '@mui/material';

import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const ButtonAdd = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
    >
      Add contact
    </Button>
  );
};

export default ButtonAdd;
