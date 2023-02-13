import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Header() {
  return (
    <Box sx={{ pt: 4 }}>
      <Typography variant='h3'>Jon Smiles</Typography>
      <Typography variant='h6'>Developer</Typography>
    </Box>
  );
}

export default Header;
