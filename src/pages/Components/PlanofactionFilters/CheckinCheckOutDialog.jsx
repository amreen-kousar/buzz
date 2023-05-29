import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import axios from 'axios';
import Swal from "sweetalert2";
import { useGeolocated } from 'react-geolocated';
import Geocode from 'react-geocode';
import { useState } from 'react';
import { useEffect } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CheckinCheckOutDialog({ photos, setCheck, batch ,getGFSessionData  ,getTrainingBatch}) {
console.log("🚀 ~ file: CheckinCheckOutDialog.jsx:27 ~ FullScreenDialog ~ batch:", batch)
//   console.log(batch, '<--------shownshownshown')
const [data ,setData]= useState()




console.log("🚀 ~ file: CheckinCheckOutDialog.jsx:30 ~ FullScreenDialog ~ data:", data)


  const [open, setOpen] = React.useState(false);
  // console.log("🚀 ~ file: CheckinCheckOutDialog.jsx:78 ~ FullScreenDialog ~ open:", batch.plan_date.split(" "))
  React.useEffect(() => {
    //setShown(shown)
    
    setOpen(photos)
    GetStatus()
  }, [photos])

  const handleClickOpen = () => {
    setCheck(true)
    setOpen(true);
    GetStatus();
  };

  const handleClose = () => {
    setCheck(false)
    setOpen(false);
  };

  const newTime = new Date()
//   const [open, setOpen] = React.useState(false);
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        "user_id": batch?.user_id,
        "lon": lats?.lng,
        "id": batch?.id,
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
        GetStatus();
        getGFSessionData()
        getTrainingBatch()
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
     
      })
      .catch(function (error) {
        console.log(error);
      });
  }
// useEffect(()=>{
//   GetStatus()
// })
//poa type=2, type="3" for GF 
//"poa_type": 1,"type": 2, for Trainer 
console.log(checkIn,"checkintime")
const GetStatus = async=>{
  var data = JSON.stringify({
    "project_id": batch?.project_id,
    "poa_type": 2,
    "type": 3,
    "tb_id": batch?.id
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
      <Dialog
        fullScreen
        open={open}
        
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" style={{color:'white'}}>
              Check in / CheckOut 
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}


          </Toolbar>
        </AppBar>
<Card >
<CardContent>
<Stack>
        <Typography>
     Gelathi Session
        </Typography>
        <Typography mt={3} mb={2}>
        {batch?.data?.name}
        </Typography>
        <Typography mb={2}>
        {moment(batch?.data?.day1_actual)?.format('DD-MM-YYYY')}
        </Typography>
        <Divider />
        <Typography mt={2}>
            Start :{batch?.plan_date?.split(" ")[0]}
        </Typography><br/>
        {(checkData?.data?.check_in_date_day1=='')?<Button style={{float:'left',position:'absolute',left:20,top:170,color:'#ff7424',marginTop:5,marginBottom:5}} onClick={()=>checkinout(1)} sx={{
             '&:hover': {
               backgroundColor: '#ffd796',
             },
             color: '#ff7424',
             backgroundColor: '#ffd796',
             marginLeft: '10px',
           }}>
            CHECK IN</Button>
        :<Button disabled style={{float:'left',position:'absolute',left:20,top:160,marginTop:5,marginBottom:5}}>CheckIN</Button>
        
        }<br/>
     
        {(checkData?.data?.check_in_date_day1!='')?<><Typography>
            Checked In  : {checkData?.data?.check_in_date_day1} &nbsp; {checkData?.data?.check_in_time_day1}
        </Typography>
        <Typography>
           Location  : {checkData?.data?.check_in_location_day1}
        </Typography></>:null}<br/> <Divider />
        {/* </>:null} */}
        <Typography mt={2}>
            End :
        </Typography>
        {(checkData?.data?.check_in_date_day1!='' && checkData?.data?.check_out_date_day1=='' )?<Button onClick={()=>checkinout(2)} style={{float:'left',position:'absolute',left:20,top:350,marginBottom:2,color:'#ff7424'}} sx={{
             '&:hover': {
               backgroundColor: '#ffd796',
             },
             color: '#ff7424',
             backgroundColor: '#ffd796',
             marginLeft: '10px',
           }}>
            CHECK OUT
        </Button>:<Button disabled style={{float:'left',position:'absolute',left:20,top:350,marginBottom:2}}>CHECKOUT</Button>}<br/><br/>
       {(checkData?.data?.check_out_date_day1!="")?<><Typography>
            Checked Out  : {checkData?.data?.check_out_date_day1} &nbsp; {checkData?.data?.check_out_time_day1}
        </Typography>
        <Typography>
           Location  :  {checkData?.data?.check_out_location_day1}
        </Typography></>:null}
       </Stack>
</CardContent>
</Card>
        {/* <List>
          <>

            {batch?.photos?.map(itm => {
              return (
                <>
                  <img src={itm?.photo1 ? itm?.photo1 : ""} />
                  <img src={itm?.photo2 ? itm?.photo2 : ""} />
                </>
              )
            })}
          </>
        </List> */}
                {/* <Stack style={{ top: 40 }}>
          <Card sx={{mt:2,ml:2}}>
           
            <TableContainer component={Paper} sx={{width:'50vw'}}>
          <Table aria-label="customized table">
           
            <TableBody>
              
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Project </TableCell><TableCell>:&nbsp;&nbsp;{batch?.data?.projectName}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Training&nbsp;Batch </TableCell><TableCell>:&nbsp;&nbsp;{batch?.data?.name}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Day 1</TableCell><TableCell>: &nbsp;&nbsp;{batch?.data?.day1}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Day 2</TableCell><TableCell>:&nbsp;&nbsp; {batch?.data?.day2}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Contact&nbsp;Person </TableCell><TableCell>: &nbsp;&nbsp;{batch?.data?.contact_person}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Contact&nbsp;Number</TableCell><TableCell>: &nbsp;&nbsp;{batch?.data?.contact_number}</TableCell></TableRow>  </TableBody>
          </Table>
        </TableContainer>

          
          </Card>
        </Stack> */}
      </Dialog>
    </div>
  );
}