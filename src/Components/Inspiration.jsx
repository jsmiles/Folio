import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Image from 'mui-image';

function Inspiration() {
  return (
    <Container id='inspiration'>
      <Typography
        variant='h3'
        sx={{ my: 16, textAlign: 'center', textTransform: 'uppercase' }}
      >
        Inspiration
      </Typography>
      <Box>
        <Typography variant='h6'>Otl Aicher</Typography>
        <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Typography
            sx={{
              width: { sm: 1, md: 1 / 3 },
              pt: '2rem',
              mb: { xs: '2rem', md: 0 },
            }}
          >
            An innovative German designer who spent many years teaching at the
            Ulm School of Design. I am a particular fan of his work on the 1972
            Summer Olympics in Munich. The famous pictograms are inspirational
            for how simple, functional and beautiful they are.
          </Typography>
          <Box
            sx={{
              width: { sm: 3 / 5, md: 1 / 4 },
              height: { sm: 3 / 5, md: 1 / 4 },
              mx: { sm: 0, md: '12rem' },
            }}
          >
            <Image src='https://img.olympicchannel.com/images/image/private//f_auto/primary/w8nzaz1v46yjrzpk920c' />
          </Box>
        </Grid>
      </Box>

      <Box sx={{ mt: '6rem' }}>
        <Typography variant='h6'>Harry Beck</Typography>
        <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Typography
            sx={{
              width: { sm: 1, md: 1 / 3 },
              pt: '2rem',
              mb: { xs: '2rem', md: 0 },
            }}
          >
            The initial tube map was a colour highlighted version of a London
            Street Map. Beck's key idea was that spatial accuracy was
            comprimising functionality. His new design sacrificed some spatial
            accuracy for much improved utility. Order and interchange were key
            not effective distance as is natural to assume. It is a design
            pattern used almost universally on mass transit systems today.
          </Typography>
          <Box
            sx={{
              width: { sm: 3 / 5, md: 1 / 4 },
              height: { sm: 3 / 5, md: 1 / 4 },
              mx: { sm: 0, md: '12rem' },
            }}
          >
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Tube_map_1908-2.jpg/1280px-Tube_map_1908-2.jpg' />
            <Image src='https://upload.wikimedia.org/wikipedia/en/0/06/Beck_Map_1933.jpg' />
          </Box>
        </Grid>
      </Box>

      <Box sx={{ mt: '6rem' }}>
        <Typography variant='h6'>Hans Hilfiker</Typography>
        <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Typography
            sx={{
              width: { sm: 1, md: 1 / 3 },
              pt: '2rem',
              mb: { xs: '2rem', md: 0 },
            }}
          >
            Hilfiker designed the classic Swiss Railway Clock. A sleek, elegant
            and functional design. The pause of the second hand to allow
            synchronisation of train departures across the network is a
            fantastic idea. Also, playfully the second hand is made to resemble
            a train signaling disk.
          </Typography>
          <Box
            sx={{
              width: { sm: 3 / 5, md: 1 / 4 },
              height: { sm: 3 / 5, md: 1 / 4 },
              mx: { sm: 0, md: '12rem' },
            }}
          >
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/0/0d/SBB_railway_clock_animated.gif'
              height='100%'
              width='100%'
            />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}

export default Inspiration;
