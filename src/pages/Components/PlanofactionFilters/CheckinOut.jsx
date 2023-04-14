import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";
import {Button,CardContent,Stack,Card} from '@mui/material';
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
import moment from 'moment';
import { useGeolocated } from 'react-geolocated';
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

export default function CheckinOut({photos,batch,setCheck}) {
  {console.log(batch,"batchhhhhhhhhh",setCheck)}
    const newTime = new Date()
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [checkData,setCheckData]=React.useState('');
  const [lats,setLats] = React.useState({
    lat:"",
    lng:""
  })
  const [location,setLocation] = React.useState('')
  const [checkIn,setCheckIn] = useState({
    location:"",
    time:""
  })
  const [checkOut,setCheckOut] = useState({
    location:"",
    time:""
  })
  const [Day2checkIn,setDay2CheckIn] = useState({
    location:"",
    time:""
  })
  const [Day2checkOut,setDay2CheckOut] = useState({
    location:"",
    time:""
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
    GetStatus();
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
        "user_id": batch?.data?.user_id,
        "lon": lats?.lng,
        "id": batch?.data?.id,
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
        if(type ===2){
          setCheckOut({
              location:location,
              time:newTime
          })
      }
      GetStatus();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
// useEffect(()=>{
//   GetStatus()
// })
console.log(checkIn,"checkintime")
  const GetStatus = async=>{
    var data = JSON.stringify({
      "project_id": batch?.data?.project_id,
      "poa_type": 1,
      "type": 2,
      "tb_id": batch?.data?.id
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getCheckInOutStatus.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data),"dataaaaaaaaaaaa");
      setCheckData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  {console.log(checkData,"checkdataaaaaaaaaaaaa")}
  return (
    <div>
     <Card><CardContent><Button variant="standard" onClick={handleClickOpen} >
      Check IN / Check Out
      </Button></CardContent> </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424'}}>
          <Toolbar >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" style={{color:'white'}}>
             Check In / Check Out 
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} indicatorColor='warning' aria-label="basic tabs example">
          <Tab label="Day1" {...a11yProps(0)}  sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },

                  color: 'black',
                }} style={
                  value == 0
                    ? {
                        borderBottom: '3px solid #ed6c02',
                        color: '#ed6c02',
                      }
                    : null
                }/>
          <Tab label="Day2" {...a11yProps(1)} sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },

                  color: 'black',
                }} 
                 style={
                  value == 1
                    ? {
                        borderBottom: '3px solid #ed6c02',
                        color: '#ed6c02',
                      }
                    : null
                }
                />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Stack>
        <Typography>
            Self Shakti Training Batch 
        </Typography>
        <Typography mt={3} mb={2}>
        {batch?.data?.name}
        </Typography>
        <Typography mb={2}>
        {moment(batch?.data?.day1_actual)?.format('DD-MM-YYYY')}
        </Typography>
        <Divider />
        <Typography mt={2}>
            Start :{batch?.data?.day1?.split(" ")[1]}&nbsp;{batch?.data?.day1?.split(" ")[2]}
        </Typography>
        {(checkData?.data?.check_in_date_day1=='')?<Button style={{float:'left',position:'absolute',left:20,top:300,color:'#ff7424',marginTop:5,marginBottom:5}} onClick={()=>checkinout(1)}>
            CHECK IN</Button>
        :<Button disabled style={{float:'left',position:'absolute',left:20,top:300,marginTop:5,marginBottom:5}}>CheckIN</Button>
        
        }<br/><br/>
     
        {(checkData?.data?.check_in_date_day1!='')?<><Typography>
            Checked In  : {checkData?.data?.check_in_date_day1}
        </Typography>
        <Typography>
           Location  : {checkData?.data?.check_in_location_day1}
        </Typography></>:null}<br/> <Divider />
        {/* </>:null} */}
        <Typography mt={2}>
            End :{batch?.data?.day2?.split(" ")[1]}&nbsp;{batch?.data?.day2?.split(" ")[2]}
        </Typography>
        {(checkData?.data?.check_in_date_day1!='' && checkData?.data?.check_out_date_day1=='' )?<Button onClick={()=>checkinout(2)} style={{float:'left',position:'absolute',left:20,top:500,marginBottom:2,color:'#ff7424'}}>
            CHECK OUT
        </Button>:<Button disabled style={{float:'left',position:'absolute',left:20,top:500,marginBottom:2}}>CHECKOUT</Button>}<br/><br/><br/>
       {(checkData?.data?.check_out_date_day1!="")?<><Typography>
            Checked Out  : {checkData?.data?.check_out_date_day1}
        </Typography>
        <Typography>
           Location  :  {checkData?.data?.check_out_location_day1}
        </Typography></>:null}
       </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Stack>
        <Typography>
            Self Shakti Training Batch 
        </Typography>
        <Typography mt={3} mb={2}>
        {batch?.data?.name}
        </Typography>
        <Typography mb={2}>
        {moment(batch?.data?.day2_actual)?.format('DD-MM-YYYY')}
        </Typography>
        <Divider />
        <Typography mt={2}>
            Start :{batch?.data?.day2?.split(" ")[1]}&nbsp;{batch?.data?.day2?.split(" ")[2]}
        </Typography>
        {(checkData?.data?.check_in_date_day2=='')?<Button style={{float:'left',position:'absolute',left:20,top:300,color:'#ff7424',marginTop:5,marginBottom:5}} onClick={()=>checkinout(1)}>
            CHECK IN</Button>
        :<Button disabled style={{float:'left',position:'absolute',left:20,top:300,marginTop:5,marginBottom:5}}>CheckIN</Button>
        
        }<br/><br/>
       
        {(checkData?.data?.check_in_date_day2!='')?<><Typography>
            Checked In  : {checkData?.data?.check_in_date_day2}
        </Typography>
        <Typography>
           Location  : {checkData?.data?.check_in_location_day2}
        </Typography></>:null}<br/> <Divider />
  
        <Typography mt={2}>
            End :{batch?.data?.day2?.split(" ")[1]}&nbsp;{batch?.data?.day2?.split(" ")[2]}
        </Typography>
        {(checkData?.data?.check_in_date_day2!='' && checkData?.data?.check_out_date_day2=='' )?<Button onClick={()=>checkinout(2)} style={{float:'left',position:'absolute',left:20,top:500,marginTop:5,marginBottom:5,color:'#ff7424'}}>
            CHECK OUT
        </Button>:<Button disabled style={{float:'left',position:'absolute',left:20,top:500,marginBottom:10}}>CHECKOUT</Button>}<br/><br/>
       {(checkData?.data?.check_out_date_day2!='')?<><Typography>
            Checked Out  : {checkData?.data?.check_out_date_day2}
        </Typography>
        <Typography>
           Location  :  {checkData?.data?.check_out_location_day2}
        </Typography></>:null}
       </Stack>
      </TabPanel>
    
    </Box>
      </Dialog>
    </div>
  );
}