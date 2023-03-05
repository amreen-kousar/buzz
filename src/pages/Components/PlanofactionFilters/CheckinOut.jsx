import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";
import {Button,Stack} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function CheckinOut() {
    const newTime = new Date()
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [lats,setLats] = React.useState({
    lat:"",
    lng:""
  })
  const [location,setLocation] = React.useState('')
  const [checkIn,setCheckIn] = useState({
    location:"",
    time:""
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLats({lat:position.coords.latitude,lng:position.coords.longitude})
var data = JSON.stringify({
  "latitude": position.coords.latitude,
  "longitude": position.coords.longitude
});

var config = {
  method: 'post',
  url: 'https://bdms.buzzwomen.org/appTest/getlocationName.php',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response?.data,",----ewrwerwer")
  setLocation(response?.data)
//  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error,",----ewrwerwer");
});
      
    });
  },[])

  const checkinout = async(type) =>{
    var data = JSON.stringify({
        "location_name": location,
        "user_id": 23,
        "lon": lats?.lng,
        "id": 81268,
        "type": type,
        "lat": lats?.lat
      });
      
      var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://bdms.buzzwomen.org/appTest/checkInOut.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        
        if(type ===1){
            setCheckIn({
                location:location,
                time:newTime
            })
        }
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Check IN / Check Out
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             Check In / Check Out 
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  label="Day1" {...a11yProps(0)} />
          <Tab label="Day2" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Stack>
        <Typography>
            Self Shakti Training Batch 
        </Typography>
        <Typography mt={3} mb={2}>
        TEST12_TB81170
        </Typography>
        <Typography mb={2}>
        Thursday Feb 23 2023
        </Typography>
        <Divider />
        <Typography mt={2}>
            Start :11:40 PM
        </Typography>
        <Button>
            CHECK IN
        </Button>
        <Typography>
            Checked In  :
        </Typography>
        <Typography>
           Location  :
        </Typography>
        <Typography>
            Start :11:40 PM
        </Typography>
        <Button>
            CHECK OUT
        </Button>
        <Typography>
            Checked In  :
        </Typography>
        <Typography>
           Location  :
        </Typography>
       </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Stack>
        <Typography>
            Self Shakti Training Batch 
        </Typography>
        <Typography mt={3} mb={2}>
        TEST12_TB81170
        </Typography>
        <Typography mb={2}>
        Thursday Feb 23 2023
        </Typography>
        <Divider />
        <Typography mt={2}>
            Start :11:40 PM
        </Typography>
        <Button 
        onClick={()=>{checkinout(1)}}>
        
        
            CHECK IN
        </Button>
        <Typography>
            Checked In  : {checkIn?.time}
        </Typography>
        <Typography>
           Location  :{checkIn?.location}
        </Typography>
        <Typography>
            Start :11:40 PM
        </Typography>
        <Button onClick={()=>{checkinout(2)}}>
            CHECK OUT
        </Button>
        <Typography>
            Checked In  :
        </Typography>
        <Typography>
           Location  :
        </Typography>
       </Stack>
      </TabPanel>
    
    </Box>
      </Dialog>
    </div>
  );
}