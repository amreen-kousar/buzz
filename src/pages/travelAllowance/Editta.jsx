import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react"
import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
import { Input } from '@mui/material';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import { Dialog, Toolbar, DialogContent, DialogContentText, Card } from '@mui/material'
import PropTypes from 'prop-types';
// import Toolbar from '@mui/material/Toolbar';
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
import moment from 'moment'
import { orange } from '@mui/material/colors';
import Webcam from "react-webcam";
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
const orangecolor = orange[800];


Edittraveldialog.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};


export default function Edittraveldialog({ isOpenFilter, onOpenFilter, onCloseFilter, viewMessage, editData, list }) {
  Geocode.setApiKey("AIzaSyAQZSphbIdAeypWHytAIHtJ5K-wuUHBfx4");
  const [open, setOpen] = useState(true);
  const [startTime, setStartTime] = useState('');
  const [images, setImages] = useState();
  const [upload, setUpload] = useState();
  const [taData,setTaData]=useState();

  const [sendData, setSendData] = useState(editData);

  // const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [datadrop, setDataDrop] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
  
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const handleClose = () => {
    setOpen(false);
    console.log("closedddddddd")
    console.log(open)
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

  useEffect(() => {
    setSendData(editData)
    // {
    //   odimeter: "",
    //   location: "",
    //   poa: "",
    //   date: new Date(),
    //   mode_of_travel: "",
    //   rate_per_KM: "",
    //   da: "",
    //   telephone: "",
    //   printing: "",
    //   stationary: "",
    //   others: "",
    //   other_text: "",
    //   end_odometer: "",
    //   end_location_name: "",
    //   totalkm: ""
    // }

    console.log(sendData, "sendDataaaaaaaaaaaaaa")
  }, [])

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
  const SendData = async => {
    console.log(sendData)
    var data = JSON.stringify({
      "ta_id": sendData?.id,
      "date": sendData?.date,
      "insideBangalore": false,
      "end_odometer": sendData?.end_odometer,
      "telephone": sendData?.telephone,
      "end_location_name": sendData?.end_location_name,
      "printing": sendData?.printing,
      "start_location_name": sendData?.start_location_name,
      "poa_id": sendData?.poa_id,
      "start_odometer": sendData?.start_odometer,
      "rate_per_KM": sendData?.rate_per_KM,
      "stationery": sendData?.stationery,
      "klmtr": sendData?.rate_per_KM,
      "da": sendData?.da,
      "others": sendData?.others,
      "emp_id": userid,
      "mode_of_travel": sendData?.mode_of_travel,
      "other_text": sendData?.other_text
    });


    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/updateTa.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };


    console.log(config)
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        viewMessage('Travel allowance edited sucessfully')
        list()
        onCloseFilter()
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const postImages = async () => {
    if (image.length === 0) {
      alert("No photos to upload.")
      throw new Error('No photos to upload.');
    }
    var dataImage = []
    const form = new FormData()
    form?.append("emp_id", userid)
    //form?.append("file[]",imagePath[0])

    const data = imagePath?.map(itm => {
      form?.append("file[]", itm)
    })
    var requestOptions = {
      method: 'POST',
      body: form,
      redirect: 'follow'
    };
    let res = fetch("https://bdms.buzzwomen.org/appTest/new/taAttachments.php", requestOptions).then(itn => {
      console.log(itn, "<--itemgh")
    })
      .catch(err => {
        console.log(err, "<---wertyu")
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
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    var data = JSON.stringify({
      "emp_id":userid,
      "role_id": role,
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

  useEffect(() => {
getTadata()
  
  }, [editData]
  )
  const getTadata=()=>{
    var data = JSON.stringify({
      "ta_id": editData?.id
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/getTa.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setTaData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  


console.log(editData,"editabledtaaaaaaaaaa",taData)





  return (
    <div>
      <Dialog id="edit-ta-dialog" fullScreen open={isOpenFilter} onClose={onCloseFilter}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        {/* <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}> */}
        <Toolbar id="edit-ta-toolbar" sx={{ bgcolor: '#ff7424', color: 'white' }} >
          <IconButton id="close-icon" edge="start" sx={{ color: "inherit" }} onClick={onCloseFilter} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography id="edit-travel-allowances" sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
            View Travel Allowance
          </Typography>

{/* 
          <Button disabled id="save-button" autoFocus color="inherit" onClick={() => SendData()}>
            save
          </Button> */}
        </Toolbar>
        {/* <Webcam
    ref={webcamRef}
    screenshotFormat="image/jpeg"odimeter:"",

    /> */}
        {/* </AppBar> */}
        <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            <div style={{ margin: "1rem" }}>


              <Stack style={{ marginTop: 20 }}>
                <TextField  disabled type="number" id="outlined-basic" defaultValue={editData?.start_odometer} onChange={(e) => { setSendData({ ...sendData, start_odometer: e?.target?.value }) }} label="Start Odometer Reading" variant="outlined" color="common" />
              </Stack>
              <Stack id="location" style={{ marginTop: 20 }}>
                <TextField disabled defaultValue={editData?.start_location_name} id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, start_location_name: e?.target?.value }) }} label="Location" variant="outlined" color="common" />
              </Stack><br></br>
              <Stack id="form" style={{ marginTop: 20 }}>
                <FormControl fullWidth >
                  <InputLabel disabled id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424', fontWeight: 700 }}>Poa</InputLabel>
                  <Select disabled labelId="Select Poa" id="demo-simple-select" defaultValue={editData?.poa_id} label="Poa" onChange={(e) => setSendData({ ...sendData, poa_id: e?.target?.value })} variant="standard" color="common">
                    {datadrop?.data?.map(itm => {
                      return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                    })}

                    {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>

              </Stack><br></br>

              <Stack id="date-pickers" style={{ marginTop: 20 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                  disabled
                    // label="Date"
                    id="edit-data-date"
                    defaultValue={editData?.date}
                    onChange={(newValue) => {
                      setSendData({ ...sendData, date: newValue })
                    }}
                    renderInput={(params) => <TextField disabled {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Stack><br></br>
              <Stack id="mode-of-travel" style={{ marginTop: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424', fontWeight: 700 }}>Mode Of Travel</InputLabel>
                  <Select disabled variant="standard" color="common" sx={{ fontSize: '13px' }}
                    labelId="Select Mode Of Travel"
                    id="demo-simple-select"
                    defaultValue={editData?.mode_of_travel}
                    onChange={(e) => setSendData({ ...sendData, mode_of_travel: e?.target?.value })}
                    label="select Mode Of Travel"

                  //onChange={handleChange}
                  >
                    {datadrop?.Mode_of_Travel?.map(itm => {
                      return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                    })}
                  </Select>
                </FormControl>
              </Stack><br></br>
              <Stack id="rate-per-km" style={{ marginTop: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424', fontWeight: 700 }}>Rate Per Km</InputLabel>
                  <Select disabled variant="standard" color="common" sx={{ fontSize: '13px' }}
                    labelId="Select Rate Per Km"
                    id="demo-simple-select"
                    defaultValue={editData?.rate_per_KM}
                    label="Select Rate Per Km"
                    onChange={(e) => setSendData({ ...sendData, rate_per_KM: e?.target?.value })}
                  >
                    {datadrop?.Rate_per_KM?.map(itm => {
                      console.log(itm)
                      return (<MenuItem value={itm?.amount}>{itm?.amount}</MenuItem>)
                    })}
                  </Select>
                </FormControl>
              </Stack><br></br>
              <Stack style={{ marginTop: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424', fontWeight: 700 }}>Food Expenses </InputLabel>
                  <Select disabled variant="standard" color="common" sx={{ fontSize: '13px' }}
                    labelId="Select Food Expenses"
                    id="demo-simple-select"
                    defaultValue={editData?.da}
                    label="Select Food Expenses"
                    onChange={(e) => setSendData({ ...sendData, da: e?.target?.value })}
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
              <Stack id="phone-charges" style={{ marginTop: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424', fontWeight: 700 }} >Phone Charges</InputLabel>
                  <Select disabled variant="standard" color="common" sx={{ fontSize: '13px' }}
                    labelId="Select Phone Charges"
                    id="demo-simple-select"
                    defaultValue={editData?.telephone}
                    label="Select Phone Charges"
                    onChange={(e) => setSendData({ ...sendData, telephone: e?.target?.value })}
                  >
                    {datadrop?.telephone?.map(itm => {
                      return (<MenuItem value={itm}>{itm}</MenuItem>)
                    })}
                  </Select>
                </FormControl>
              </Stack>

              <Stack style={{ marginTop: 20 }}>
                <TextField disabled id="outlined-basic" defaultValue={editData?.printing} onChange={(e) => { setSendData({ ...sendData, printing: e?.target?.value }) }} label="Printing" variant="outlined" color="common" />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField disabled id="outlined-basic" defaultValue={editData?.stationery} onChange={(e) => { setSendData({ ...sendData, stationery: e?.target?.value }) }} label="Stationary" variant="outlined" color="common" />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField disabled defaultValue={editData?.others} id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, others: e?.target?.value }) }} label="other expenses" variant="outlined" color="common" />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField disabled id="outlined-basic" defaultValue={editData?.other_text} onChange={(e) => { setSendData({ ...sendData, other_text: e?.target?.value }) }} label="other expenses amounnt" variant="outlined" color="common" />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField disabled id="outlined-basic" defaultValue={editData?.end_odometer} onChange={(e) => { setSendData({ ...sendData, end_odometer: e?.target?.value }) }} label="end odometer reading" variant="outlined" color="common" />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField disabled id="outlined-basic" defaultValue={editData?.end_location_name} onChange={(e) => { setSendData({ ...sendData, end_location_name: e?.target?.value }) }} label="end location" variant="outlined" color="common" />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField disabled id="outlined-basic" defaultValue={editData?.location} onChange={(e) => { setSendData({ ...sendData, location: e?.totalkm?.value }) }} label="total Kilometer" variant="outlined" color="common" />
              </Stack>
              <br /><br />
              {/* <div>
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
                    sx={{ width: 25, height: 25, ml: 2, color: "#ff7424" }}
                  />&nbsp;
                  Click to upoad images
                  <input style={{ display: "none" }} id="inputTag" type="file" onChange={(e) => { convertImage(e) }} />
                </label>
              </div>
              <Button onClick={postImages}
                sx={{
                  '&:hover': {
                    backgroundColor: '#ffd796',
                  },
                  color: "#ff7424"
                }}>Send Images</Button>
              <br /><br />

              <Button onClick={() => capture()}>Click here to to upload snaps</Button>

           
            <Button onClick={() => SendData()} variant="filled" sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
              },
              color: "#ff7424",

            }}>Upload</Button><br></br> */}
            <div>
                <div style={{ display: "flex" }}>
                  {
                    viewImage ?
                      image.map((i, index) => {
                        return <div style={{ display: "flex", margin: "1rem" }}>
                          <img id="img-hello" src={i} style={{ height: "50px", width: "70px" }} alt="hello" />
                          <Iconify
                            id="delete-image-icon"
                            onClick={() => { deleteImage(index) }}
                            icon={'typcn:delete'}
                            sx={{ width: 16, height: 16, ml: 1, color: "red" }}
                          />
                        </div>
                      }) : null
                  }
                </div>
                {/* <div style={{display:'flex'}}>
                <label id="input-tag" for="inputTag" style={{ cursor: "pointer", display: "flex" }} disabled>
                  <Iconify disabled
                    id="icon-camera"
                    icon={'mdi:camera'}
                    sx={{ width: 25, height: 25, ml: 2, color: "#ff7424" }}
                  />&nbsp;
                  Click here to Add images
                  <input style={{ display: "none" }} accept="image/png, image/gif, image/jpeg" id="inputTag" type="file" onChange={(e) => { convertImage(e) }} />
                </label>
                <Button disabled id="post-images-button" onClick={postImages} 
                sx={{
                  '&:hover': {
                    backgroundColor: '#ffd796',
                  },
                  color: "#ff7424",
                  backgroundColor:'#ffd796',
                  marginLeft:'10px'
                }}>Upload</Button></div> */}

<div><Typography variant="h6">Uploaded Images</Typography> <br/>
  {(taData?.files?.length>0)?<img src={taData?.files[0]}/>:"No Images Found"}
</div>

              </div>

 </div>
          </DialogContentText></DialogContent>  </Dialog>
    </div>
  );
}


// import React from 'react'
// export default function Edittraveldialog()
// {
//   return(
//     <>
//     <div>edit Travel allowance</div>
//     </>
//   )
// }