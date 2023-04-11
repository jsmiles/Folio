import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

function Menu() {
  return (
    <Typography>
      <Grid sx={{ display: 'flex', flexDirection: 'column', pl: 5 }}>
        <Link href='#projects' underline='hover'>
          {'Portfolio'}
        </Link>
        <Link href='https://jtsblog.netlify.app/' underline='hover'>
          {'Blog'}
        </Link>
        <Link href='#inspiration' underline='hover'>
          {'Inspiration'}
        </Link>
        <Link href='#contact' underline='hover'>
          {'Contact'}
        </Link>
      </Grid>
    </Typography>
  );
}

export default Menu;
