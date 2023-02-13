import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';

function About() {
  return (
    <Container>
      <Typography
        variant='h1'
        sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}
      >
        Test
      </Typography>
      <Typography variant='h2'>Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 300 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant='h3'>{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                non repudiandae accusantium, alias perspiciatis error doloribus,
                delectus sunt magni at sit deleniti dolorem. Suscipit blanditiis
                amet voluptatem consectetur non et.
              </Typography>
              <Button variant='contained' color='secondary' sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default About;
