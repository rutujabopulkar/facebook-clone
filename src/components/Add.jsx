import {
  Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled,
  TextField, Tooltip, Typography
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

const StyledButton= styled(ButtonGroup)({
  display:"flex",
})

function Add() {
  const [open, SetOpen] = useState(false);
  return (
    <Box>
      <Tooltip onClick={(e) => SetOpen(true)}
        title="Delete"
        sx={{
          position: "fixed", bottom: 20, left:
            { xs: "calc(50% - 25px)", md: 30 }
        }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => SetOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280}
          bgcolor="white" p={3} borderRadius={5}>
          <Typography variant='h6' color="gray"
            textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="./assets/avatar.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}
              variant="span">Rutuja Bopulkar</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2}
            mb={3}>
            <EmojiEmotionsIcon color="primary"
            />
            <AddPhotoAlternateIcon
              color="secondary" />
            <VideoCallIcon
              color="success" />
            <PersonAddIcon color="error"
            />
          </Stack>
          <StyledButton variant="contained" aria-label="outlined primary button group">
            <Button style={{flex:"4"}}>Post</Button>
            <Button>
              <CalendarMonthIcon/>
            </Button>
          </StyledButton>
        </Box>
      </StyledModal>
    </Box>
  )
}
export default Add
