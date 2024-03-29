import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Box, TextField, Stack, CardContent, Card, FormControl, InputLabel, Select, MenuItem } from '@mui/material/';
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
import { DialogContentText } from '@mui/material';
import dayjs from 'dayjs';
import moment from 'moment/moment';
import Iconify from 'src/components/Iconify';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTrainingBatch({batch,editSession, setEditsession}) {
  
    console.log(batch,"batchdataaaaaaaaaaa")
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const [village, setVillage] = useState([]);
  const [date, setDate] = useState("")
  const [trainerData, setTrainerData] = useState({
    "batch_name":batch?.data?.batch_name,
    "sub_village": batch?.data?.sub_village,
    "project_id": batch?.data?.project_id,
    "contact_person": batch?.data?.contact_person,
    "number_of_participants": batch?.data?.participants,
    "day1": new Date(),
    "day2": new Date(),
    "location_id": batch?.data?.location_id,
    "contact_number": batch?.data?.contact_number,
    "trainer_id": batch?.data?.trainer_name,
    "talaq_id": batch?.data?.taluk_id
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
//   useEffect(() => {
//     villageList(props?.data1);

//   }, [props?.data1])
  
//   console.log(props?.data1?.location_id,"location")

useEffect(()=>{
    villageList(batch?.data)
},[batch?.data])
  const villageList = async(i) => {
    
    var data = JSON.stringify({
      "taluk_id":i?.taluk_id
    });
console.log(batch?.data?.taluk_id    ,"<----------------------props?.data1?.location_idprops?.data1?.location_id")
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getVillageList.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
console.log(data,"data")
    axios(config)
      .then(function (response) {
        setVillage(response.data)
        console.log(JSON.stringify(response.data),"<-----reponsievdevsvs");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const EditTraining= ()=>{
    var data = JSON.stringify({
      "batch_name": batch?.data?.batch_name,
      "sub_village": trainerData?.sub_village,
      "contact_person": trainerData?.contact_person,
      "number_of_participants":trainerData?.number_of_participants,
      "day2": trainerData?.day2,
      "day1": trainerData?.day1,
      "tb_id": batch?.data?.id,
      "location_id": trainerData?.location_id,
      "contact_number": trainerData?.contact_number
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/editTrainingBatch.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };


    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      handleClose();
    })
    .catch(function (error) {
      console.log(error);
      
    });
    alert(response.data.message)
   
  
  }
  const styles = {
    buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left" },
    tableRowStyle: { justifyContent: 'center', alignItems: 'center', marginLeft: 200 },
    linkStyle: { textDecoration: 'none', color: "black" }
  }
 
 
  React.useEffect(() => {
    //setShown(shown)
    setOpen(editSession)
  }, [editSession])


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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" style={{color:"white"}}>
               Training Batch 
            </Typography>
            <Button autoFocus color="inherit" onClick={EditTraining} >
              
              Save
            </Button>
          </Toolbar>
        </AppBar>
        {/* <Card style={{ marginTop: 20 }}>
          <CardContent>
            <Stack style={{ marginTop: 20 }}>
              <Typography>Project : {props?.data1?.project_name}</Typography>
            </Stack>
            <Stack style={{ marginTop: 20 }}>
              <Typography> Partner : {props?.data1?.partnerName}</Typography>
            </Stack>
          </CardContent>
        </Card> */}
      <DialogContentText style={{ marginLeft: 20 ,marginTop: 20}}>
      {/* <Typography>Project&nbsp;:&nbsp; {props?.data1?.project_name}</Typography>
        <Typography> Partner &nbsp;:&nbsp; {props?.data1?.partnerName}</Typography> */}
      </DialogContentText>
     
        
       
        <Stack mt={3}>
          {console.log(trainerData, "><0khjhgbfd")}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" color="common">Select Village</InputLabel>
            <Select color="common"
              // labelId="demo-simple-select-label"
              //id="demo-simple-select"
              
              defaultValue={batch?.data?.taluq_id}
              label="Select Village"
              
              onChange={(e => {
                console.log(e?.target)
                setTrainerData({ ...trainerData, talaq_id: e?.target?.value })
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
        <Stack style={{ marginTop: 20 }}>
          <TextField
            fullWidth
            color="common"
            defaultValue={batch?.data?.sub_village}
            id="outlined-error"
            type="text"
            onChange={(e) => { setTrainerData({ ...trainerData, sub_village: e?.target?.value }) }}
            label="Sub Village" />
        </Stack>
        <Stack style={{ marginTop: 20 }}>
          <TextField
            fullWidth
            color="common"
            id="outlined-error"
            label="Number Of Participants"
            defaultValue={batch?.data?.participants}
            type='number'
            onChange={(e) => { setTrainerData({ ...trainerData, number_of_participants: e?.target?.value }) }}
          />
        </Stack>
        <Stack style={{ marginTop: 20 }}>
          <TextField
            fullWidth
            color="common"
            defaultValue={batch?.data?.contact_person}
            onChange={(e) => { setTrainerData({ ...trainerData, contact_person: e?.target?.value }) }}
            type="text"
            id="outlined-error"
            label="Contact Person" />
        </Stack>
        <Stack style={{ marginTop: 20 }}>
          <TextField defaultValue={batch?.data?.contact_number}
            fullWidth
            color="common"
            
            onChange={(e) => { 
              const limitChar = 10
              if (e.target.value.toString().length <= limitChar) {
                console.log("number change", e.target.value)
                setTrainerData({ ...trainerData, contact_number: e?.target?.value }) 
              }
            }}
            value= {trainerData.contact_number}
            type="number"
            id="outlined-error"
            inputProps={{ maxLength: 10 }}
            label="Contact Number " />
        </Stack>
        <Stack style={{ marginTop: 40 }}>
          <Typography>Day 1</Typography>
        </Stack>
        <Stack style={{ marginTop: 20 }} color="common" >

          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            color="common"
            defaultValue={batch?.data?.day1}
            value={trainerData?.day1}
            onChange={(newValue) => {
              setTrainerData({ ...trainerData, day1: newValue })
              //setValue(newValue);
            }}
            PopperProps={{
              placement: "top"
          
            }}
          />
        </Stack>

        <Stack style={{ marginTop: 40 }}>
          <Typography>Day 2</Typography>
        </Stack>
        <Stack style={{ marginTop: 20 }}>

          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={trainerData?.day2}
            // value={value}
            PopperProps={{
              placement: "top"
          
            }}
            onChange={(newValue) => {
              setTrainerData({ ...trainerData, day2: newValue })
              //setValue(newValue);
            }}
          />
        </Stack>
      </Dialog>
    </div>
  );
}