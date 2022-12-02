import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            src='https://images.unsplash.com/photo-1664575197593-2e7085ef086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Marry' />

          <Avatar
            src='https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Riya' />

          <Avatar
            src='https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Jully' />

          <Avatar
            src='https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Priya' />

          <Avatar
            src='https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='Rangoli' />

          <Avatar
            src='https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Riya' />

          <Avatar
            src='https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Jully' />

          <Avatar
            src='https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Priya' />

          <Avatar
            src='https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='Rangoli' />

        </AvatarGroup>

        <Typography
          variant='h6'
          fontWeight={100} mt={2} mb={2}>
          Lates Post
        </Typography>

        <ImageList cols={3} rowHeight={110}>

          <ImageListItem>
            <img
              alt='Post-1'
              src='https://images.unsplash.com/photo-1638198320819-b40ddb2b9676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          </ImageListItem>

          <ImageListItem>
            <img
              alt='Post-2'
              src='https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </ImageListItem>

          <ImageListItem>
            <img
              alt='Post-3'
              src='https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          </ImageListItem>

          <ImageListItem>
            <img
              alt='Post-4'
              src='https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </ImageListItem>

          <ImageListItem>
            <img
              alt='Post-5'
              src='https://images.unsplash.com/photo-1669127449576-fd40e1d8fa5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          </ImageListItem>

          <ImageListItem>
            <img
              alt='Post-6'
              src='https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          </ImageListItem>
        </ImageList>

        <Typography
          variant='h6'
          fontWeight={100}
          mt={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

          <ListItem alignItems='flex-start'>

            <ListItemAvatar>
              <Avatar
                alt='Rohini'
                src='https://plus.unsplash.com/premium_photo-1668638806052-4544af05f648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGFsb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </ListItemAvatar>

            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color="primary.text">
                    Sonam Jain
                  </Typography>
                  {" - What's going on !"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component="li" />

          <ListItem alignItems='flex-start'>

            <ListItemAvatar>
              <Avatar
                alt='Rakesh'
                src='https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwcG9zZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            </ListItemAvatar>

            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color="primary.text">
                    Rakesh Sharma
                  </Typography>
                  {" - Plz call me Urgently!"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component="li" />

        </List>
      </Box>
    </Box>
  )
}

export default Rightbar