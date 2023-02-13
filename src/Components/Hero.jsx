import { Grid, Container } from '@mui/material';
import React from 'react';
import Bio from './Bio';
import Menu from './Menu';

function Hero() {
  return (
    <Container sx={{ my: '2rem' }}>
      <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Menu />
        <Bio />
      </Grid>
    </Container>
  );
}

export default Hero;
