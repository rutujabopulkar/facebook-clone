import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { post } from '../data/feedData.js';




function Feed() {
  return (
    <Box flex={2} p={2}>
      {post.map((user) => (
        <Card sx={{margin:"10px"}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="card">
                {user.avatar}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={user.title}
            subheader={user.date} />

          <CardMedia
            component="img"
            image={user.img}
            alt="User-img"
            style={{ maxWidth: "100%", height: "250px" }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {user.caption}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorite'>
              <Checkbox icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon sx={{ color: "red" }} />} />
            </IconButton>

            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export default Feed