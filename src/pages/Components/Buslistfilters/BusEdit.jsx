import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import Autocomplete from '@mui/material/Autocomplete';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BusEdit({clcikData}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = useState('paper');
  const [age, setAge] = React.useState('');
  const [editData,setEditData] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    edit()
    },[clcikData]
    )
  const edit = async =>{
    var data = JSON.stringify({
        "lastUpdatedBy": "144",
        "chassis_number": "",
        "insurance_number": "8888",
        "register_date": "25-01-2023",
        "insurance_company": "kkkkk",
        "insurance_start_date": "25-01-2023",
        "last_service_date": "25-01-2023",
        "emission_date": "25-01-2023",
        "insurance_end_date": "25-01-2023",
        "createdBy": "144",
        "engine_number": "77777",
        "permit": "10-01-2023",
        "fitness_certificate": "10-01-2023",
        "register_number": "SAWEEE78999",
        "bus_id": 153,
        "next_service_due_date": "10-01-2023"
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/editBus.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        setEditData(response.data)
        console.log(response.data,'<----------njknjjkkjn');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Edit Bus Details
      </Button>
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
          <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
            Edit Bus Details {clcikData?.register_number}
            </Typography>


            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
       
        </AppBar>
       
        {/* <DialogTitle id="scroll-dialog-title">Add User</DialogTitle> */}
        <DialogContent dividers={scroll === 'paper'} sx={{ background: '#f9fafb' }}>
          <DialogContentText
            id="scroll-dialog-description"
            //   ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <div style={{ background: 'white', padding: '2rem', borderRadius: '10px' }}>
                <TextField fullWidth id="outlined-basic" label="Bus Number" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Registration Date"
                    // value={sendData?.date}
                   
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                <Stack style={{marginTop:10}}>
                <TextField id="outlined-basic" label="Engine Number" variant="outlined" />
                </Stack>
                <Stack style={{marginTop:10}}>
                <TextField fullWidth id="outlined-basic" label="Chasis Number" variant="outlined" />
                </Stack>
                <Stack style={{marginTop:10}}>
                <TextField fullWidth id="outlined-basic" label="Insurance Number" variant="outlined" />
                </Stack>
                <Stack style={{marginTop:10}}>
                <TextField fullWidth id="outlined-basic" label="Insurance Company" variant="outlined" />
                </Stack>
                <Stack style={{marginTop:10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Insurance Start Date"
                    // value={sendData?.date}
                   
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Stack>
                <Stack style={{marginTop:10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Insurance End Date"
                    // value={sendData?.date}
                    
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Stack>
                <Stack style={{marginTop:10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Last Service Date"
                    // value={sendData?.date}
                   
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Stack>
                <Stack style={{marginTop:10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Next Service Date"
                    // value={sendData?.date}
                   
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Stack>
                <Stack style={{marginTop:10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Fitness Certificate"
                    // value={sendData?.date}
                    
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Stack>
                <Stack style={{marginTop:10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Permit Details"
                    // value={sendData?.date}
                    
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Stack>
                <Stack style={{marginTop:10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Emission Date"
                    // value={sendData?.date}
                   
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Stack>



              
               
              </div>

            
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
