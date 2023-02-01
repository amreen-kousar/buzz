import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Button,Box,TextField,Stack, CardContent,Card,FormControl,InputLabel,Select,MenuItem} from '@mui/material/';
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
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import moment from 'moment/moment';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateTrainerBatch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const [village, setVillage] = useState([]);
  const [date, setDate] = useState("")
  const [trainerData,setTrainerData] = useState({
    "batch_name": "",
    "sub_village": "",
    "project_id": "",
    "contact_person": "",
    "number_of_participants": "",
    "day1": new Date(),
    "day2": new Date(),
    "location_id": "",
    "contact_number": "",
    "trainer_id": "",
    "talaq_id":""
  })
    const [data, setData] = useState({
       
        talaq_id: '',
        
    })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    villageList();

}, [])
 const villageList = async =>{
  var data = JSON.stringify({
    "taluk_id": 45
  });
  
  var config = {
    method: 'post',
    url: 'https://bdms.buzzwomen.org/appTest/getVillageList.php',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    setVillage(response.data)
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
 }
 const createTrainerBatch = async =>{
  const datass = village?.list?.filter(it=>{ return it?.id===trainerData?.talaq_id})
  console?.log(datass,village?.list,trainerData?.talaq_id,"<--kjughfd")
  var data = JSON.stringify({
    "batch_name": datass[0]?.name,
    "sub_village": trainerData?.sub_village,
    "project_id": "292",
    "contact_person": trainerData?.contact_person,
    "number_of_participants": trainerData?.number_of_participants,
    "day1": moment(trainerData?.day1)?.format('YYYY/MM/DD  h:mm:ss a'),
    "day2":moment(trainerData?.day2)?.format('YYYY/MM/DD  h:mm:ss a'),
    "location_id": 30233,
    "contact_number": trainerData?.contact_number,
    "trainer_id": "653"
  });
  
  var config = {
    method: 'post',
    url: 'https://bdms.buzzwomen.org/appTest/createTrainingBatch.php',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    if(response?.data?.code){
      alert(response?.data?.message)
    }
   /// setTrainerData(response.data)
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
 }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       New Training Batch
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
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
            Create  New Training Batch
            </Typography>
            <Button  autoFocus color="inherit" onClick={createTrainerBatch}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Card style={{marginTop:20}}>
            <CardContent>
            <Stack style={{marginTop:20}}>
                <Typography>Project : njnjnnjnjn22</Typography>
                </Stack>
                <Stack style={{marginTop:20}}>
                <Typography> Partner : test Partnner 11</Typography>
                </Stack>
            </CardContent>
        </Card>
        <Stack mt={3}>
          {console.log(trainerData,"><0khjhgbfd")}
            <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Village</InputLabel>
                        <Select
                            // labelId="demo-simple-select-label"
                            //id="demo-simple-select"
                            value={trainerData?.talaq_id}
                            label="Select Village"
                            onChange={(e => {
                              console.log(e?.target)
                              setTrainerData({...trainerData,talaq_id:e?.target?.value})
                                //setData({ ...data, taluk_id: e?.target?.value })
                                
                            })}
                        >
                            <MenuItem value="" default disabled>Choose Village</MenuItem>
                            {village?.list?.map(itm => {
                                return (
                                    <MenuItem name={itm?.name} value={itm?.id}>{itm?.name}</MenuItem>
                                )
                            })
                            }
                        </Select>
                    </FormControl></Stack>
        <Stack style={{marginTop:20}}>
        <TextField
          fullWidth
          error
          id="outlined-error"
          onChange={(e)=>{setTrainerData({...trainerData,sub_village:e?.target?.value})}}
          label="Sub Village"  />
        </Stack>
        <Stack style={{marginTop:20}}>
        <TextField
          fullWidth
          error
          id="outlined-error"
          label="Number Of Participants" 
          onChange={(e)=>{setTrainerData({...trainerData,number_of_participants:e?.target?.value})}}
          />
          </Stack>
          <Stack style={{marginTop:20}}>
           <TextField
          fullWidth
          onChange={(e)=>{setTrainerData({...trainerData,contact_person:e?.target?.value})}}
          error
          id="outlined-error"
          label="Contact Person"  />
          </Stack>
        <Stack style={{marginTop:20}}>
           <TextField
          fullWidth
          onChange={(e)=>{setTrainerData({...trainerData,contact_number:e?.target?.value})}}
          error
          id="outlined-error"
          label="Contact Number"  />
          </Stack>
         <Stack style={{marginTop:40}}>
          <Typography>Day 1</Typography>
          </Stack>
          <Stack style={{marginTop:20}}>

          <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={trainerData?.day1}
        onChange={(newValue) => {
          setTrainerData({...trainerData,day1:newValue})
          //setValue(newValue);
        }}
      />
      </Stack>

      <Stack style={{marginTop:40}}>
          <Typography>Day 2</Typography>
          </Stack>
          <Stack style={{marginTop:20}}>

          <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={trainerData?.day2}
        // value={value}
        
        onChange={(newValue) => {
          setTrainerData({...trainerData,day2:newValue})
          //setValue(newValue);
        }}
      />
      </Stack>
      </Dialog>
    </div>
  );
}