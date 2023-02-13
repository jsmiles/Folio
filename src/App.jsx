import { Box, Container, CssBaseline, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Inspiration from './Components/Inspiration';
import Contact from './Components/Contact';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '90vh',
          border: 1,
          mt: '5vh',
        }}
      >
        <Header />
        <Hero />
        <Box sx={{ mt: 'auto', mb: '2vh' }}>
          <Link href='https://github.com/jsmiles'>
            <GitHubIcon color='disablednpm' />
          </Link>
        </Box>
      </Container>
      <Container>
        <Projects />
        <Inspiration />
        <Contact />
      </Container>
    </React.Fragment>
  );
}
