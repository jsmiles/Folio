import { Typography, Link } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { indigo } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

function EITS() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: { xs: 0, md: '2rem' },
        mb: { xs: '2rem', md: 0 },
        ':hover': {
          boxShadow: 20,
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: indigo[300] }} aria-label='recipe'>
            E
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Eye In The Sky'
        subheader='NASA satellite images'
      />
      <CardMedia
        component='img'
        height='194'
        image='../../../Images/eits.JPG'
        alt='NASA Image API App'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          A React app that renders the closest satellite image.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='Deployed Site'
          href='https://eyeinthesky.netlify.app/'
        >
          <LanguageIcon />
        </IconButton>
        <IconButton
          aria-label='Github Repo'
          href='https://github.com/jsmiles/EyeInTheSky'
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default EITS;
