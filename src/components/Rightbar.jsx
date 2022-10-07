import { 
          Avatar, 
          AvatarGroup, 
          Box, 
          List, 
          ListItemAvatar, 
          ListItemText, 
          ListItem, 
          Divider ,
          ImageList, 
          ImageListItem, 
          Typography 
        } from '@mui/material'
import React from 'react';

const Rightbar = () => {
  return (
    <Box

      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300} >
        <Typography variant='h5' fontWeight={100} >
          Friends...
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt="Remy Sharp"
            src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" />
          <Avatar
            alt="Travis Howard"
            src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" />
          <Avatar
            alt="Cindy Baker"
            src="https://i0.wp.com/api.duniagames.co.id/api/content/upload/file/14055166521599123794.jpg?ssl=1" />
          <Avatar
            alt="Agnes Walker"
            src="https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg" />
          <Avatar
            alt="Trevor Henderson"
            src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant='h5' fontWeight={100} mt={4} mb={2} >
          Latest
        </Typography>
        <ImageList variant="masonry" cols={3} rowHeight={100} gap={8} >
          <ImageListItem >
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/originals/eb/e4/a3/ebe4a37984a8745e78555906765df486.jpg"
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/originals/ed/91/6c/ed916c50b2691e4d48fd205675538385.jpg"
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h5' fontWeight={100} mt={4} >
          Latest Conversations...
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://i0.wp.com/api.duniagames.co.id/api/content/upload/file/14055166521599123794.jpg?ssl=1" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar