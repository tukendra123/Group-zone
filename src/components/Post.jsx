import React from 'react';
import { Avatar, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = () => {
  return (
    <Card sx={{margine:5}} >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Potato Curry "
      subheader="September 30, 2022"
    />
    <CardMedia
      component="img"
      height="5%"
      image="https://www.cookwithmanali.com/wp-content/uploads/2017/09/Instant-Pot-Potato-Chickpea-Curry-500x500.jpg"
      alt=""
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        An easy and comforting Potato Curry made in a tomato gravy in the Instant Pot. This North Indian Potato Curry is also known as Aloo Rasedar. This vegan and gluten free potato curry is great for quick weeknight dinners.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post;