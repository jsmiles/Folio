import { Typography, Link } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

function MLVIZ() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 100,
        mx: { xs: 0, md: '2rem' },
        mb: { xs: '2rem', md: 0 },
        ':hover': {
          boxShadow: 20,
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[700] }} aria-label='recipe'>
            M
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='ML-Viz'
        subheader='ML in the Browser '
      />
      <CardMedia
        component='img'
        height='194'
        image='../../../Images/mlviz.JPG'
        alt='Machine Learning in the Browser '
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          An implementation of the KMeans clustering algorithm.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='Deployed Site'
          href='https://mlviz.netlify.app/'
        >
          <LanguageIcon />
        </IconButton>
        <IconButton
          aria-label='Github Repo'
          href='https://github.com/jsmiles/ml-viz'
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default MLVIZ;
