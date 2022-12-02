import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center"
}))

const StyledMenuItem = styled(MenuItem)({
  fontSize:"14px"
})


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block"
            }
          }}>
          Facebook
        </Typography>
        <FacebookIcon sx={{
          display: {
            xs: "block", fontSize: "25px",
            sm: "none"
          }
        }} />
        <Search>
          <InputBase placeholder='Search' />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <MailIcon color="white" />
          </Badge>

          <Badge badgeContent={5} color="error">
            <NotificationsIcon color="white" />
          </Badge>

          <Avatar
          style={{ width: "30px", height: "30px" }}
          src="https://i.pinimg.com/originals/bd/63/21/bd63218d80c817c6e45ed83435ff9226.jpg"
          alt="avatar"
          onClick={(e) => setOpen(true)} />
        </Icons>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <StyledMenuItem>Profile</StyledMenuItem>
        <StyledMenuItem>My account</StyledMenuItem>
        <StyledMenuItem>Logout</StyledMenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar