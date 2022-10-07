import { Groups, Mail, Notifications } from '@mui/icons-material';
import { Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {Menu} from '@mui/material';
import React, { useState } from "react"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  gap:"20px",
  alignItems:"centre" ,
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:"10px",
  alignItems:"centre" ,
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" >
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >GROUP ZONE</Typography>
        <Groups sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:25, height:25}} src='https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg'
          onClick = { e => setOpen(true) }
          />
        </Icons>
        <UserBox onClick = { e => setOpen(true)}>
          <Avatar sx={{width:25, height:25}} src='https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg' />
          <Typography variant="span">Jhon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
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
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;