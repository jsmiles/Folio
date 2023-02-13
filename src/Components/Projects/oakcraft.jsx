import { Typography, Link, Box } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { green } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

function Oakcraft() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: { xs: 0, md: '2rem' },
        ':hover': {
          boxShadow: 20,
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[300] }} aria-label='recipe'>
            O
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Oakcraft'
        subheader='Furniture marketing website'
      />
      <CardMedia
        component='img'
        height='194'
        image='../../../Images/oakcraft.JPG'
        alt='Oakcraft Furniture Photo'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          A marketing website for a family bespoke furniture maker.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='Deployed Site'
          href='https://oakcraft.netlify.app/'
        >
          <LanguageIcon />
        </IconButton>
        <IconButton
          aria-label='Github Repo'
          href='https://github.com/jsmiles/oakcraft'
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Oakcraft;
