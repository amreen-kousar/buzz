import { useEffect, useState } from 'react';
import axios, * as others from 'axios';
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
import Label from 'src/components/Label';
import InputAdornment from '@mui/material/InputAdornment';


import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalPrintshop from '@mui/icons-material/LocalPrintshop';
import CurrencyRupee  from '@mui/icons-material/CurrencyRupee';
import DiamondRounded  from '@mui/icons-material/DiamondRounded';
import  Room  from '@mui/icons-material/Room';
import { date } from 'yup';
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
const orangecolor = orange[800];

export default function TravelDialog({ viewMessage }) {
  Geocode.setApiKey("AIzaSyAQZSphbIdAeypWHytAIHtJ5K-wuUHBfx4");
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [images, setImages] = useState();
  const [upload, setUpload] = useState();

  const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
  const [sendData, setSendData] = useState({
    odimeter: "",
    location: "",
    poa: "",
    srpoa:"",
    date: new Date(),          
    modeoftravel: "",
    rateperkm: "",
    foodexpenses: "",
    telephonecharges: "",
    printing: "",
    stationery: "",
    otherExpenses: "",
    OtherAmount: "",
    endOdimeter: "",
    endLocation: "",
    totalkm: "",
    fairamount:""
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
    setSendData([])
    
  }, [coords,open]
  )
  const [image, setImage] = React.useState([]);
  const [imagePath, setImagePath] = React.useState([]);
  const [viewImage, setViewImage] = React.useState(false);
  const [locationS,setLocation] = useState()
  const hiddenFileInput = React.useRef(null);
  const [dropDownValues, setDropDownValues] = useState([])

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

console.log("submittedddddddd")
    var data = JSON.stringify({
      "date": moment(sendData?.date)?.format('YYYY-MM-DD'),
      "insideBangalore": false,
      "end_odometer": sendData?.endOdimeter,
      "telephone": sendData?.telephonecharges,
      "end_location_name":locationS,
      "fairamount":sendData?.fairamount,
      "printing": sendData?.printing,
      "start_location_name": locationS,
      "poa_id": sendData?.poa,
      "srpoa":sendData?.srpoa,
      "start_odometer": sendData?.odimeter,
      "rate_per_KM": sendData?.rateperkm,
      "stationery": sendData?.stationery,
      "klmtr": sendData?.rateperkm,
      "da": sendData?.foodexpenses,
      "others": sendData?.otherExpenses,
      "emp_id":userid,
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
console.log("successsssssssss",data)
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        viewMessage('Travel allowance added sucessfully')
        handleClose()
      })
      .catch(function (error) {
        console.log(error);
      });

  }
console.log(sendData?.odimeter,"startodimeter")
  const postImages = async () => {
    if(image.length===0){
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
    // var config = {
    //   method: 'post',
    //   url: "https://bdms.buzzwomen.org/appTest/new/taAttachments.php",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: form
    // };
    //console.log(config)
    let res = fetch("https://bdms.buzzwomen.org/appTest/new/taAttachments.php", requestOptions).then(itn => {
      console.log(itn, "<--itemgh")
      alert("added succesfully ")
    })
      .catch(err => {
        console.log(err, "<---wertyu")
      })
    //console.log(res,"<----2werdcfvghbj")


  }
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
    );
  }

  const drop = async => {
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    var data = JSON.stringify({
      "emp_id": userid,
     
      
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
        //filter by date, assign to another variable (dropdown values)
        const date = moment(new Date()).format('YYYY-MM-DD')
        console.log("🚀 ~ file: TravelDialog.jsx:294 ~ new:", date)
        let dropDownValues = response.data.data.filter(x=> {
          const date1 = moment(x.date)?.format('YYYY-MM-DD')
          return  date1=== date;
        })
        setDropDownValues(dropDownValues);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



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
  const userDetails = localStorage?.getItem('userId')
  console.log(userDetails,"userrrrrrrrrrrrrrr")
  return (
    <div>


{( userDetails ==3 ||userDetails==4 || userDetails==5 || userDetails==6 || userDetails==12 || userDetails==13)?<Button variant="contained" style={{
        float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
        position: 'fixed', zIndex: '1', bottom: 40, right: 40
      }} onClick={handleClickOpen} sx={{
        ':hover': {
          bgcolor: '#ffd796', // theme.palette.primary.main
          color: '#ff7424',
          border: '#ffd796'
        },
        ':active': {
          bgcolor: '#ffd796',
          color: "#ff7424"
        },
        bgcolor: '#ffd796',
        color: "#ff7424",
        border: 'none'
      }} >
        <span style={{ fontSize: "2rem" }}>+</span>
      </Button>:null}
      <Dialog fullScreen open={open} onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        {/* <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}> */}
      <form onSubmit={(e)=>{e.preventDefault(); SendData()}}>
      <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
        <Toolbar sx={{ bgcolor: '#ff7424', color: 'white' }} >
          <IconButton edge="start" sx={{ color: "inherit" }} onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
            Create Allowance
          </Typography>

          <Button autoFocus color="inherit" type="submit">
          <Iconify icon="material-symbols:save" width={30} height={30} />
          </Button>
        </Toolbar>
        </AppBar>
        {/* <Webcam
    ref={webcamRef}
    screenshotFormat="image/jpeg"odimeter:"",

    /> */}
        {/* </AppBar> */}
        {/* <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          > */}
            <div style={{ margin: "1rem" }}>
            <Stack style={{ marginTop: 90 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424'}}>{sendData?.modeoftravel==""?"Select Mode of Travel":"Mode of Travel"}</InputLabel>
                  <Select required variant="standard" color="common" sx={{ fontSize: '13px' }}
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
              {console.log(datadrop?.Mode_of_Travel,"modeeeeeeeeeeee",sendData?.modeoftravel)}
              {(sendData?.modeoftravel&&sendData?.modeoftravel===1 | sendData?.modeoftravel===4 | sendData?.modeoftravel===5 | sendData?.modeoftravel===6)?<Stack style={{ marginTop: 20 }}>
                <TextField required id="outlined-basic" type="number" onChange={(e) => { setSendData({ ...sendData, fairamount: e?.target?.value }) }} label="Fair amount" variant="outlined" color="common" />
              </Stack>:
              <Stack style={{ marginTop: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424'}}>{sendData?.rateperkm==""?"Select Rate per KM":"Rate per KM"}</InputLabel>
                  <Select required variant="standard" color="common" sx={{ fontSize: '13px' }}
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
              </Stack> 
              
              }<br></br>
                {   (sendData?.modeoftravel&&sendData?.modeoftravel===3 )?   <Stack style={{ marginTop: 20 }}>
             <TextField id="outlined-basic" 
              type="number"  
inputProps={{inputmode: 'numeric',pattern: '[0-9]*' }} onChange={(e) => { setSendData({ ...sendData, odimeter: e?.target?.value }) }} label="Start Odometer Reading *" variant="outlined" color="common" 
             />
           </Stack>:null}

              {/* <Stack style={{ marginTop: 20 }}>
                <TextField id="outlined-basic" 
                 type="number"  
  inputProps={{inputmode: 'numeric',pattern: '[0-9]*' }} onChange={(e) => { setSendData({ ...sendData, odimeter: e?.target?.value }) }} label="Start Odometer Reading *" variant="outlined" color="common" 
                />
              </Stack> */}
              <Stack style={{ marginTop: 20 ,color:'black'}}>
                <TextField id="outlined-basic" value={locationS} disabled={true} onChange={(e) => { setSendData({ ...sendData, location: e?.target?.value }) }} label="Start Location" variant="outlined" color="common" 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                    <Room sx={{color:"green"}} />
                    </InputAdornment>
                   ),
               }}  />
              </Stack><br></br>
              
              {/* <Stack style={{ marginTop: 20 }}>

                     <ListItemButton
            autoFocus
          //  onClick={() => handleListItemClick('addAccount')}
          >
          <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar> 
            <ListItemText primary="Add account" />
          </ListItemButton>  


          
                {(userDetails===12)?<FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424'}}>Poa</InputLabel> 
                {(userDetails===12)?
                  
                  <TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, poa: e?.target?.value }) }} label="poa" color="common" />
                  <Select labelId="Select Poa" id="demo-simple-select" value={sendData?.poa} label="Poa" onChange={(e) => setSendData({ ...sendData, poa: e?.target?.value })} variant="standard" color="common">
                    {datadrop?.data?.map(itm => {
                      return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                    })}
                  </Select>
               
             
                </FormControl>
                :
                <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424', fontWeight: 700 }}>Poa</InputLabel>
                <Select labelId="Select Poa" id="demo-simple-select" value={sendData?.poa} label="Poa" onChange={(e) => setSendData({ ...sendData, poa: e?.target?.value })} variant="standard" color="common">
                  {datadrop?.data?.map(itm => {
                    return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                  })}
                </Select>
                </FormControl>

              </Stack><br></br> */}
              <Stack style={{ marginTop: 20 }}>       
             <FormControl fullWidth >
            {console.log(userDetails,"userdetailsssssssssssss")}
              {/* {(userDetails===12)?<TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, poa: e?.target?.value }) }} label="poa" color="common" />:null} */}
             

             {/* you want to filter thr date map dropDownValues insted of dropdata.data */}
             
              <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424'}}>{sendData?.poa==""?"Select POA *":"POA *"}</InputLabel>
                {(datadrop?.data.length>0)?<Select required labelId="Select Poa" id="demo-simple-select" value={sendData?.poa} label="Select Poa" onChange={(e) => setSendData({ ...sendData, poa: e?.target?.value })} variant="standard" color="common">

                  {datadrop?.data.map(itm => {
                    return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                  })}
                </Select>:<Typography variant="body2" style={{marginLeft:20,marginTop:40}}>No POA</Typography>}
                </FormControl>
              </Stack>

              <Stack style={{ marginTop: 20 }}>       
             <FormControl fullWidth >
            {console.log(userDetails,"userdetailsssssssssssss")}
              {userDetails==12?<TextField id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, srpoa: e?.target?.value }) }} label="Create poa" color="common" />:null}
             
              {/* <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424'}}>Poa</InputLabel>
                <Select labelId="Select Poa" id="demo-simple-select" value={sendData?.poa} label="Poa" onChange={(e) => setSendData({ ...sendData, poa: e?.target?.value })} variant="standard" color="common">
                
                  {datadrop?.data?.map(itm => {
                    return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                  })}
                </Select> */}
                </FormControl>
              </Stack>

              <Stack style={{ marginTop: 20 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    inputFormat="YYYY-MM-DD"
                    views={["year", "month", "day"]}
                    // label="Date"
                    value={sendData?.date}
                    onChange={(newValue) => {
                      setSendData({ ...sendData, date: newValue })
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Stack>
              <br></br>
   
             
              <Stack style={{ marginTop: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424'}}>{sendData?.foodexpenses==""?"Select Food Expenses":"Food Expenses"}</InputLabel>
                  <Select required variant="standard" color="common" sx={{ fontSize: '13px' }}
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
                  <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ff7424'}}>{sendData?.telephonecharges==""?"Select Phone Charges":"Phone Charges"}</InputLabel>
                  <Select required variant="standard" color="common" sx={{ fontSize: '13px' }}
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
                <TextField id="outlined-basic" type="number" onChange={(e) => { 
                
                  setSendData({ ...sendData, printing: e?.target?.value }) }} label="printing" variant="outlined" color="common" 
                InputProps={{
                     endAdornment: (
                       <InputAdornment position="start">
                       <LocalPrintshop color="secondary" />
                       </InputAdornment>
                      ),
                  }} />
              
              </Stack>
              <Stack style={{ marginTop: 20 }}>  
                <TextField id="outlined-basic" type="number" onChange={(e) => { setSendData({ ...sendData, stationery: e?.target?.value }) }} label="stationery" variant="outlined" color="common" 
                InputProps={{
                     endAdornment: (
                       <InputAdornment position="start">
                       <AttachMoneyIcon />
                       </InputAdornment>
                      ),
                  }} />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField id="outlined-basic" type="number" onChange={(e) => { setSendData({ ...sendData, otherExpenses: e?.target?.value }) }} label="Other Expenses" variant="outlined" color="common"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                  
                  {/* <Iconify icon="material-symbols:diamond-rounded " /> */}
                  <DiamondRounded sx={{color:"red"}}/>
                    </InputAdornment>
                   ),
               }}  />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField id="outlined-basic" type="number" onChange={(e) => { setSendData({ ...sendData, OtherAmount: e?.target?.value }) }} label="Other Expenses Amount" variant="outlined" color="common" 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                    <CurrencyRupee sx={{color:"green"}}/>
                    </InputAdornment>
                   ),
               }} />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField id="outlined-basic" type="number" onChange={(e) => { setSendData({ ...sendData, endOdimeter: e?.target?.value }) }} label="End Odometer Reading" variant="outlined" color="common" />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField id="outlined-basic" disabled={true} value={locationS} onChange={(e) => { setSendData({ ...sendData, endLocation: e?.target?.value }) }} label="End Location" variant="outlined" 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                    <Room sx={{color:"green"}} />
                    </InputAdornment>
                   ),
               }}   />
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField required type="number" id="outlined-basic" onChange={(e) => { setSendData({ ...sendData, location: e?.totalkm?.value }) }} label="Total Kilometer" variant="outlined" color="common"   />
              </Stack>
              <br /><br /> 
            </div></form> 
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
                <div style={{display:'flex'}}>
                <label for="inputTag" style={{ cursor: "pointer", display: "flex" }}>
                  <Iconify
                    icon={'mdi:camera'}
                    sx={{ width: 25, height: 25, ml: 2, color: "#ff7424" }}
                  />&nbsp;
                  Click here to Add images
                  <input style={{ display: "none" }} accept="image/png, image/gif, image/jpeg" id="inputTag" type="file" onChange={(e) => { convertImage(e) }} />
                </label>
                <Button onClick={postImages} 
                sx={{
                  '&:hover': {
                    backgroundColor: '#ffd796',
                  },
                  color: "#ff7424",
                  backgroundColor:'#ffd796',
                  marginLeft:'10px'
                }}>Upload</Button></div>
              </div>
              
             

              {/* <Button onClick={() => capture()}>Click here to to upload snaps</Button> */}

          
            {/* <Button onClick={() => SendData()}  sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
              },
              color: "#ff7424",

            }}>Upload</Button><br></br> */}
            
          {/* </DialogContentText></DialogContent>  */}
           </Dialog>
    </div>
  );
}