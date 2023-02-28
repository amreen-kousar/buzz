import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import Poafunders from './Poafunders';
import Avatar from '@mui/material/Avatar';
import { useGeolocated } from "react-geolocated";
import Geocode from "react-geocode";
import React from 'react';
// material
import {
  Grid,
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  Card,
  CardContent,
} from '@mui/material';
// components


// ----------------------------------------------------------------------

PoaFilter.propTypes = {
  isOpenEvent: PropTypes.bool,
  onOpenEvent: PropTypes.func,
  onCloseEvent: PropTypes.func,
};

export default function PoaFilter({ isOpenEvent, onCloseEvent, select }) {
  
  
  const [locationS,setLocation] = useState();
  const [checkin, setCheckIn] = useState();
  const [checkout, setCheckout] = useState('')
  const [checkvisible,setCheckvisible]= useState(false);
  const [image, setImage] = React.useState([]);
  const [imagePath, setImagePath] = React.useState([]);
  const [viewImage, setViewImage] = React.useState(false);
  const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    console.log("click", event.target)
    hiddenFileInput.current.click();
  };

  function getBase64(file, callback) {

    const reader = new FileReader();

    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(file);
  }
  const data = new FormData();

  const convertImage = (e) => {
    console.log("this is calleddddfdsfs")
    data.append('emp_id', userid);
    data.append('file', e.target.files[0]);
    setImagePath([...imagePath, e.target.files[0]])
    const imageData = URL.createObjectURL(e.target.files[0]);
    console.log(imageData, "files")
    getBase64(e.target.files[0], function (base64Data) {
      setImage([...image, base64Data])
      setViewImage(true)
    });
  }
  const postImages = async () => {
    var dataImage = []
    const form = new FormData()
  
    form?.append("event_id",78385)
    

    const data = image?.map(itm => {
      form?.append("file[]", itm)
    })
    var requestOptions = {
      method: 'POST',
      body: form,
      redirect: 'follow'
    };
  
    let res = fetch("https://bdms.buzzwomen.org/appTest/uploadEventPhotos.php", requestOptions).then(itn => {
      console.log(itn, "<--itemgh")
    })
      .catch(err => {
        console.log(err, "<---wertyu")
      })
    //console.log(res,"<----2werdcfvghbj")


  }

  const deleteImage = (index) => {

    image.splice(index, 1);
    setImage([...image])
  }

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
   location()
  }, [coords]
  )

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
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
  console.log(response,",----ewrwerwer")
  setLocation(response?.data)
//  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error,",----ewrwerwer");
});
      
    });
  },[])

  
  const location = () => {
    Geocode.fromLatLng(coords?.latitude, coords?.longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address, "<----addressss");
      },
      (error) => {
        console.error(error);
      }
    )
  }
  const [eventData, setEventData] = useState('')
  const [addImage, setAddImage] = useState('')
 
  const [idEvent, setIdEvent] = [{
    event_id: "",
    user_id: ""
  }]
  useEffect(() => {
    event();

  }, [select]);

const handlecheckin=()=>{
     setCheckIn(locationS)
     setCheckvisible(true)
}

const handlecheckout=()=>{
  setCheckout(locationS)
}
  const event = async => {
    var data = JSON.stringify({
      // "event_id": select?.id,
      // "user_id": "651",
      "event_id":select?.id,
       "user_id":35,
      "check_in_location":"RCC4+M26, Narayanapuram, Andhra Pradesh 534411, India"
    });
      console.log(select?.id,"selectedddddd")
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getEventDetail.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setEventData(response.data)
        console.log(response.data, '<------------setEventDatasetEventDatasetEventData');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      {/* <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button> */}

      <Drawer
        anchor="right"
        open={isOpenEvent}
        onClose={() => {
          //setSelect(),
          setEventData("")
          onCloseEvent()
        }}
        PaperProps={{
          sx: { width: 320, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25, color: 'black' }}>
            Event Detail
          </Typography>
          <IconButton onClick={() => {
            onCloseEvent()
          }}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />
        {console.log(eventData, "<--hgdsgdsgfdgfdgfd")}
        <Scrollbar>
          {/* <Stack spacing={3} sx={{ p: 3 }}> */}
          <div>

            <Card style={{ backgroundColor: '#f6f8fb', marginTop: 20 }}>
              <CardContent>
                <Typography  variant="body1">Event Title :
                  {eventData?.name}
                </Typography>
                <Typography variant="body1">Event&nbsp;date&nbsp;and&nbsp;time :{eventData?.date1}
                </Typography>
               
                <Typography  variant="body1">Description :
                 {eventData?.description}
                </Typography>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: '#f6f8fb', marginTop: 20 }}>
              <CardContent>
                <Typography style={{textAlign:'center'}}><u>CheckIn/Out Status</u></Typography>
                <br/>
                {(!checkvisible)?<Button sx={{
                  '&:hover': {
                    backgroundColor: '#ffd796',
                  },
                  color: '#ff7424'
                }} onClick={handlecheckin}>CHECK IN</Button>:
          
                 <Button sx={{
                  '&:hover': {
                    backgroundColor: '#ffd796',
                  },
                  color: '#ff7424'
                }} onClick={handlecheckout} disabled={checkout}>CHECK OUT</Button>}
                {console.log(location,"locationnnnnnnnn")}
                <Typography variant="body1">Checkin Time: {eventData?.check_in}</Typography>
                <Typography>Checkin Location: {checkin}</Typography>
                <Typography>Checkout Time : {eventData?.check_out}</Typography>
                <Typography>Checkout Location: {checkout}</Typography>

              </CardContent>
            </Card>

            <div>
                <div style={{ display: "flex" }}>
                  {
                    viewImage ?
                      image.map((i, index) => {
                        return <div style={{ display: "flex", margin: "1rem" }}>
                          <img src={i} style={{ height: "50px", width: "70px" }} alt="hello" />
                          <Iconify
                            onClick={() => { deleteImage(index) }}
                            icon={'typcn:delete'}
                            sx={{ width: 16, height: 16, ml: 1, color: "red" }}
                          />
                        </div>
                      }) : null
                  }
                </div><br/>
                {<div style={{display:'flex'}}>
                <label for="inputTag" style={{ cursor: "pointer", display: "flex" }}>
                  <Iconify
                    icon={'mdi:camera'}
                    sx={{ width: 25, height: 25, ml: 2, color: "#ff7424" }}
                  />&nbsp;
                  
                  <input style={{ display: "none" }} id="inputTag" type="file" onChange={(e) => { convertImage(e) }} />
                </label>Add Photos<br/>
                <Button onClick={postImages} 
                sx={{
                  '&:hover': {
                    backgroundColor: '#ffd796',
                  },
                  color: "#ff7424",
                  backgroundColor:'#ffd796',
                  marginLeft:'10px'
                }}>Upload</Button>
                </div>}
              </div>

          <Card style={{ marginTop: 20 }}>
              <CardContent>
              <div >
              <img src={eventData?.photo1 ? eventData?.photo1 : ""} />
                 
            </div>
              </CardContent>
          </Card>
          </div>
        </Scrollbar>

      </Drawer>
    </>
  );
}
