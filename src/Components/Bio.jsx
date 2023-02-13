import { Typography, Grid } from '@mui/material';
import React from 'react';

function Bio() {
  return (
    <Grid container justifyContent='flex-end' sx={{ mt: '2rem' }}>
      <Typography sx={{ width: { sm: 4 / 5, md: 1 / 5 } }}>
        I am an experienced tech professional making the transition from Data to
        Dev. My background is in quantitative analytics in both academia and the
        private sector. I am actively looking for new opportunities.
      </Typography>
    </Grid>
  );
}

export default Bio;
