import { useEffect, useState } from 'react';
import React from "react";
import axios from 'axios';

import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ProfileCard from './Components/ProfileCard'

export default function Profile(index) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [profileData,setProfileData]= useState()
  const [userUpdate,setUserUpdate]=useState(false)
  useEffect(()=>{
    profile()
    },[userUpdate]
    )
  const profile = async => {
    const userData = localStorage?.getItem('userDetails')
    
    var data = JSON.stringify({
      "id": JSON?.parse(userData)?.id
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getProfileData.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      setProfileData(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;
  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
    {/* <Grid>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
       </Grid> */}
       <Grid sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
      }}>
       <ProfileCard changeUser={()=>{setUserUpdate(!userUpdate)}}  profileData={profileData}/>
       </Grid>
       

    </Grid>
  );
}