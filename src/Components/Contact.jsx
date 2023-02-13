import React from 'react';
import { Container, Typography } from '@mui/material';

function Contact() {
  return (
    <Container id='contact'>
      <Typography
        variant='h3'
        sx={{ my: 16, textAlign: 'center', textTransform: 'uppercase' }}
      >
        Contact
      </Typography>
      <Typography align='center' sx={{ mb: '12rem' }}>
        I am actively looking for new opportunities and would be happy to hear
        from you. Email is the best way to contact me and the address is
        included in my CV.
      </Typography>
    </Container>
  );
}

export default Contact;
