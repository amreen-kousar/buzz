import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react"
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
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
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Geocode from "react-geocode";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useGeolocated } from "react-geolocated";
import Iconify from 'src/components/Iconify';
import { orange } from '@mui/material/colors';
import Webcam from "react-webcam";
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
const orangecolor = orange[800];

export default function FullScreenDialog() {

  Geocode.setApiKey("AIzaSyAQZSphbIdAeypWHytAIHtJ5K-wuUHBfx4");
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [images, setImages] = useState();
  const [upload, setUpload] = useState();


  const [sendData, setSendData] = useState({
    odimeter: "",
    location: "",
    poa: "",
    date: new Date(),
    modeoftravel: "",
    rateperkm: "",
    foodexpenses: "",
    telephonecharges: "",
    printing: "",
    stationary: "",
    otherExpenses: "",
    OtherAmount: "",
    endOdimeter: "",
    endLocation: "",
    totalkm: ""
  });

  // const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [datadrop, setDataDrop] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  console.log(coords, "<----coordscoordscoordscoords")
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    drop()
    //imageUpload()
    location()
  }, [coords]
  )
  const [image, setImage] = React.useState([]);
  const [imagePath, setImagePath] = React.useState([]);
  const [viewImage, setViewImage] = React.useState(false);
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
    data.append('emp_id', 651);
    data.append('file', e.target.files[0]);
    setImagePath([...imagePath, e.target.files[0]])
    const imageData =  URL.createObjectURL(e.target.files[0]);
    console.log(imageData, "files")
    getBase64(e.target.files[0], function (base64Data) {
      setImage([...image, base64Data])
      setViewImage(true)
    });
  }

  const SendData = async => {

    var data = JSON.stringify({
      "date": sendData?.date,
      "insideBangalore": false,
      "end_odometer": sendData?.endOdimeter,
      "telephone": sendData?.telephonecharges,
      "end_location_name": sendData?.endLocation,
      "printing": sendData?.printing,
      "start_location_name": "RCC4+M26, Narayanapuram, Andhra Pradesh 534411, India",
      "poa_id": sendData?.poa,
      "start_odometer": sendData?.odimeter,
      "rate_per_KM": sendData?.rateperkm,
      "stationery": sendData?.stationary,
      "klmtr": sendData?.rateperkm,
      "da": sendData?.foodexpenses,
      "others": sendData?.otherExpenses,
      "emp_id": 651,
      "mode_of_travel": sendData?.modeoftravel,
      "other_text": sendData?.OtherAmount
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/addNewTA.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {

        console.log(JSON.stringify(response.data));
        handleClose()
        postImages()
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const postImages = async () => {
    var dataImage = []
    const form = new FormData()
    form?.append("emp_id",651)
    //form?.append("file[]",imagePath[0])

    const data = imagePath?.map(itm=>{
      form?.append("file[]",itm)
    })
    var requestOptions = {
      method: 'POST',
      body: form,
      redirect: 'follow'
    };
    // var config = {
    //   method: 'post',
    //   url: "https://bdms.buzzwomen.org/appTest/new/taAttachments.php",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: form
    // };
    //console.log(config)
    let res =  fetch("https://bdms.buzzwomen.org/appTest/new/taAttachments.php", requestOptions).then(itn=>{
      console.log(itn,"<--itemgh")
    })
    .catch(err=>{
      console.log(err,"<---wertyu")
    })
    //console.log(res,"<----2werdcfvghbj")
    

  }

  const location = () => {
    Geocode.fromLatLng(coords?.latitude, coords?.longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address, "<----addressss");
      },
      (error) => {
        console.error(error);
      }
    );
  }

  const drop = async => {
    var data = JSON.stringify({
      "emp_id": "329",
      "role_id": "5",
      "date": "2022/08/11"
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/getPoaTa.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setDataDrop(response.data)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // const [imgSrc, setImgSrc] = React.useState(null);
  // const WebcamCapture = () => {
  // const webcamRef = React.useRef(null);

  // }
  // const capture =() => {
  //   // console.log(webcamRef.current,"<----webcamRef.current")
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setImgSrc(imageSrc);
  // };


  // console.log(imgSrc, "<-----gfvimageSrc")



  const imageApiCall = (config) => {

  }

  const deleteImage = (index) => {

    image.splice(index, 1);
    setImage([...image])
  }

  //   const clickImages = () =>{
  //     console.log("fefefergregre");
  //    // handleClose()
  //     return(
  //         <>


  //       <button onClick={capture}>Capture photo</button>
  //       {imgSrc && (
  //         <img
  //           src={imgSrc}
  //         />
  //       )}
  //     </>
  //     )
  //   }
  return (
    <div>


      <Button variant="contained" style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }} onClick={handleClickOpen} sx={{
        ':hover': {
          bgcolor: '#ffd796', // theme.palette.primary.main
          color: '#ed6c02',
          border: '#ffd796'
        },
        ':active': {
          bgcolor: '#ffd796',
          color: "#ed6c02"
        },
        bgcolor: '#ffd796',
        color: "#ed6c02",
        border: 'none'
      }} >
        <span style={{ fontSize: "2rem" }}>+</span>
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} >
        <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
              Create Allowances
            </Typography>


            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
          {/* <Webcam
    ref={webcamRef}
    screenshotFormat="image/jpeg"odimeter:"",

    /> */}
        </AppBar>

        <div style={{ margin: "1rem" }}>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, odimeter: e?.target?.value }) }} label="Start Odometer Reading" variant="outlined" color="common" />
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, location: e?.target?.value }) }} label="Location" variant="outlined" color="common" />
          </Stack><br></br>
          <Stack style={{ marginTop: 20 }}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row',color:'#ed6c02',fontWeight:700}}>Poa</InputLabel>
              <Select labelId="Select Poa" id="demo-simple-select" value={sendData?.poa} label="Poa" onChange={(e) => setSendData({ ...sendData, poa: e?.target?.value })} variant="standard" color="common">
                {datadrop?.data?.map(itm => {
                  return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                })}

                {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
           
          </Stack><br></br>

          <Stack style={{ marginTop: 20 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // label="Date"
                value={sendData?.date}
                onChange={(newValue) => {
                  setSendData({ ...sendData, date: newValue })
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Stack><br></br>
          <Stack style={{ marginTop: 20 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row',color:'#ed6c02',fontWeight:700}}>Mode Of Travel</InputLabel>
              <Select variant="standard" color="common" sx={{fontSize:'13px'}}
                labelId="Select Mode Of Travel"
                id="demo-simple-select"
                value={sendData?.modeoftravel}
                onChange={(e) => setSendData({ ...sendData, modeoftravel: e?.target?.value })}
                label="select Mode Of Travel"
                
              //onChange={handleChange}
              >
                {datadrop?.Mode_of_Travel?.map(itm => {
                  return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </Stack><br></br>
          <Stack style={{ marginTop: 20 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"  style={{ flexDirection: 'row',color:'#ed6c02',fontWeight:700}}>Rate Per Km</InputLabel>
              <Select variant="standard" color="common" sx={{fontSize:'13px'}}
                labelId="Select Rate Per Km"
                id="demo-simple-select"
                value={sendData?.rateperkm}
                label="Select Rate Per Km"
                onChange={(e) => setSendData({ ...sendData, rateperkm: e?.target?.value })}
              >
                {datadrop?.Rate_per_KM?.map(itm => {
                  return (<MenuItem value={itm?.amount}>{itm?.amount}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </Stack><br></br>
          <Stack style={{ marginTop: 20 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"  style={{ flexDirection: 'row',color:'#ed6c02',fontWeight:700}}>Food Expenses </InputLabel>
              <Select variant="standard" color="common" sx={{fontSize:'13px'}}
                labelId="Select Food Expenses" 
                id="demo-simple-select"
                value={sendData?.foodexpenses}
                label="Select Food Expenses" 
                onChange={(e) => setSendData({ ...sendData, foodexpenses: e?.target?.value })}
              >
                {datadrop?.DA?.map(itm => {
                  return (<MenuItem value={itm?.amount}>{itm?.name}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </Stack><br></br>
          <Stack style={{ marginTop: 20 }}>
            <h4>Other Benefits</h4>
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"  style={{ flexDirection: 'row',color:'#ed6c02',fontWeight:700 }} >Phone Charges</InputLabel>
              <Select variant="standard" color="common" sx={{fontSize:'13px'}}
                labelId="Select Phone Charges"
                id="demo-simple-select"
                value={sendData?.telephonecharges}
                label="Select Phone Charges"
                onChange={(e) => setSendData({ ...sendData, telephonecharges: e?.target?.value })}
              >
                {datadrop?.telephone?.map(itm => {
                  return (<MenuItem value={itm}>{itm}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </Stack>

          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, printing: e?.target?.value }) }} label="Printing" variant="outlined" color="common" />
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, stationary: e?.target?.value }) }} label="Stationary" variant="outlined" color="common"/>
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, otherExpenses: e?.target?.value }) }} label="other expenses" variant="outlined" color="common" />
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, OtherAmount: e?.target?.value }) }} label="other expenses amounnt" variant="outlined" color="common" />
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, endOdimeter: e?.target?.value }) }} label="end odometer reading" variant="outlined" color="common" />
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, endLocation: e?.target?.value }) }} label="end location" variant="outlined" color="common" />
          </Stack>
          <Stack style={{ marginTop: 20 }}>
            <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, location: e?.totalkm?.value }) }} label="total Kilometer" variant="outlined" color="common" />
          </Stack>
          <br /><br />
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
            </div>
            <label for="inputTag" style={{ cursor: "pointer", display: "flex" }}>
              <Iconify
                icon={'mdi:camera'}
                sx={{ width: 25, height: 25, ml: 2, color: "#ed6c02" }}
              />&nbsp;
              Click to upoad images
              <input style={{ display: "none" }} id="inputTag" type="file" onChange={(e) => { convertImage(e) }} />
            </label>
          </div>
          <Button onClick={postImages}>Send Images</Button>
          <br /><br />

          {/* <Button onClick={() => capture()}>Click here to to upload snaps</Button> */}

        </div>
        <Button onClick={() => SendData()} variant="filled">Upload</Button>
      </Dialog>
    </div>
  );
}