import React,{useEffect,useState} from 'react';
import {Button,CardContent,TextField,Select,MenuItem,InputLabel,Box} from '@mui/material';
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
import { Stack } from '@mui/system';
import axios from 'axios';
import moment from 'moment';
import { number } from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddParticipants({batch,checkData,type,session}) {
    console.log(session,"<------batchbatchbatchbatchbatch",checkData,"hhhhhhhhhh",type)
  const intialState={
    "education":"",
     "husbandName":"",
      "caste":"", 
      "type":"",
       "firstName":" test",
        "participant_day1":"", 
        "nameOfSHG":"",
         "contact_no":"", "dob":"", "age":""}
  
  const [open, setOpen] = React.useState(false);
   const [caste,setCaste] = useState([]);
   const [education,setEducation] = useState([]);
   const [participant, setParticipant] = useState(false);
   const [enterData,setEnterData] = React.useState(intialState)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
  setOpen(false)
    
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    casted();
    educationd();
    
}, [])
  const casted = async =>{
    var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://bdms.buzzwomen.org/appTest/getCaste.php',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setCaste(response.data?.data)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const educationd = async =>{
    var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://bdms.buzzwomen.org/appTest/getEducation.php',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setEducation(response.data?.list)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }
  const handleCloseSaveBtn = ()=>{
    console.log(enterData, "entered data")
    if(enterData.age==""|| enterData.firstName==""|| enterData.caste =="" ||enterData.contact_no==""
    || enterData.husbandName==""|| enterData.nameOfSHG==""){
      alert("Please fil all the required data ")
    }else{
      setOpen(false);
    }
  }
  const day = new Date()
  const hitApi = () =>{
    const roleid = JSON.parse(localStorage.getItem('userDetails'))?.id
    var data = JSON.stringify({
        "education": enterData?.education,
        "husbandName": enterData?.husbandName,
        "caste": enterData?.caste,
        "type": "02-03-2023 07:11 PM",
        "firstName": enterData?.firstName,
        // "participant_day1": "02-03-2023 07:11 PM",
        "nameOfSHG": enterData?.nameOfSHG,
        "project_id": (batch)?batch?.data?.project_id:session?.project_id,
        "contact_no": enterData?.contact_no,
        "dob": "",
         "tb_id":(batch)?batch?.data?.primary_id:'',
        "age": enterData?.age,
       //tb_id:79124,
        // "trainer_id": batch?.data?.user_id
        "trainer_id":roleid,
        participant_day1:(batch)?moment(day)?.format():'',
        type:(type=='vyapar')? type:moment(day)?.format()
      });
      if(data.education =="" || data.husbandName == ""){
        console.log("error")
alert("error!!!!!!")
      }else{
        var config = {
          method: 'post',
        maxBodyLength: Infinity,
          url: 'https://bdms.buzzwomen.org/appTest/createParticipant.php',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          if(response?.data?.code ==200){
              handleCloseSaveBtn()
          }
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    
  }
  return (
    <div>
      {(checkData?.data?.check_in_time_day1!="" )?
      <Button  onClick={handleClickOpen} color="inherit">
      Add Participants
      </Button>:null}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color:'white'}} variant="h6" component="div">
              Add Participants 
            </Typography>
            <Button autoFocus color="inherit" onClick={hitApi}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Stack mt={10}>
        <CardContent>
        <TextField fullWidth id="Name"onChange={(e)=>{setEnterData({...enterData,firstName:e?.target?.value})}} label="Name" variant="outlined" required />
        </CardContent>
    </Stack>
    <Stack mt={1}>
        <CardContent>
        <TextField fullWidth type="number" id="Age" required onChange={(e)=>{setEnterData({...enterData,age:e?.target?.value})}} label="Age" variant="outlined" />
        </CardContent>
    </Stack>
    <Stack mt={1}>
        <CardContent>
        <TextField fullWidth id="fathername" onChange={(e)=>{setEnterData({...enterData,husbandName:e?.target?.value})}}label="Father/Husband name / Mother's name" variant="outlined" />
        </CardContent>
    </Stack>
    <Stack mt={1}>
        <CardContent>
        <TextField fullWidth id="Number" onChange={(e)=>{
          console.log(e.target.value.toString().length)
          if(e.target.value.toString().length<= 10){
            setEnterData({...enterData,contact_no:e?.target?.value})
          }
          }} type="Number" label="Contact Number" variant="outlined" 
          value={enterData.contact_no}
          
          />
        </CardContent>
    </Stack>
    <Stack mt={1}>
        <CardContent>
        <TextField fullWidth id="shg" onChange={(e)=>{setEnterData({...enterData,nameOfSHG:e?.target?.value})}} label="Name of SHG" variant="outlined" />
        </CardContent>
    </Stack>
    <CardContent>
    <InputLabel id="demo-simple-select-label">Caste</InputLabel>
  <Select
  fullWidth
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={enterData?.caste}
    label="Age"
    onChange={(e)=>{
        setEnterData({...enterData,caste:e?.target?.value})
        console.log(e,"<-----qweqweqweqweq")
    }}>
    {caste?.map(itm=>{
        console.log(itm,"<-----sadadasdasfasfasf")
        return(
            <MenuItem value={itm?.id}>{itm?.name}</MenuItem>
        )
    })}
  </Select>
  </CardContent>
  <CardContent>
  <InputLabel id="demo-simple-select-label">Education</InputLabel>
  <Select
    fullWidth
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={enterData?.education}
    label="Age"
    onChange={(e)=>{
        setEnterData({...enterData,education:e?.target?.value})
    }}
  >
   {education?.map(itm=>{
        console.log(itm,"<-----sadadasdasfasfasf")
        return(
            <MenuItem value={itm?.name}>{itm?.name}</MenuItem>
        )
    })}
  </Select>
  </CardContent>
      </Dialog>
    </div>
  );
}