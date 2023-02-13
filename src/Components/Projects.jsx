import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EITS from './Projects/eits';
import MLVIZ from './Projects/mlviz';
import Oakcraft from './Projects/oakcraft';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';

function Projects() {
  return (
    <Container id='projects'>
      <Typography
        variant='h3'
        sx={{ my: 16, textAlign: 'center', textTransform: 'uppercase' }}
      >
        Portfolio
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          marginRight: { xs: 0, md: '2vh' },
        }}
      >
        <EITS />

        <MLVIZ />
        <Oakcraft />
      </Box>
      <IconButton
        aria-label='Deployed Site'
        href='#'
        sx={{ mt: '2rem', mx: '95%' }}
      >
        <HomeIcon />
      </IconButton>
    </Container>
  );
}

export default Projects;
