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
import Iconify from 'src/components/Iconify';
import Autocomplete from '@mui/material/Autocomplete';
import moment from 'moment';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BusEdit({ clcikData,busesd,updatedata ,admin, reloadHandler ,busDetails}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = useState('paper');
  const [age, setAge] = React.useState('');
  const [editData, setEditData] = useState('')
  const [date, setDate] = useState(new Date())
  const userDetails = localStorage?.getItem('userId')
  const [sendData, setSendData] = useState({
    lastUpdatedBy: "",
    chassis_number: "",
    insurance_number: "",
    register_date: new Date(),
    insurance_company: "",
    insurance_start_date: new Date(),
    last_service_date:new Date(),
    emission_date: new Date(),
    insurance_end_date: new Date(),
    createdBy: "",
    engine_number: "",
    permit: new Date(),
    fitness_certificate: new Date(),
    register_number: "",
    bus_id: "",
    next_service_due_date: new Date()
  });
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

  const enterData = () => {
    console.log(clcikData,"-----------------" ,sendData, "<---sendDataefewfs")
    setSendData({
      chassis_number: clcikData?.chassis_number || busDetails?.chassis_number,
      "lastUpdatedBy": "",
      "insurance_number": clcikData?.insurance_number,
      "register_date": moment(clcikData?.register_date).format('DD/MM/YYYY'),
      "insurance_company": clcikData?.insurance_company,
      "insurance_start_date": moment(clcikData?.insurance_start_date).format('DD/MM/YYYY'),
      "last_service_date":moment( clcikData?.last_service_date).format('DD/MM/YYYY'),
      "emission_date": moment(clcikData?.emission_date).format('DD/MM/YYYY'),
      "insurance_end_date":moment( clcikData?.insurance_end_date).format('DD/MM/YYYY'),
      "createdBy": clcikData?.createdBy,
      "engine_number": clcikData?.engine_number,
      "permit": moment(clcikData?.permit).format('DD/MM/YYYY'),
      "fitness_certificate": moment(clcikData?.fitness_certificate).format('DD/MM/YYYY'),
      "register_number": clcikData?.register_number,
      "bus_id": clcikData?.bus_id || busDetails?.bus_id,
      "next_service_due_date":moment( clcikData?.next_service_due_date).format('DD/MM/YYYY')

    })
  }
  
  console.log(clcikData,"-----------------clicked data in edit ")

  useEffect(() => {
    enterData()
  }, [clcikData,busDetails]
  )
  console.log(busDetails ,"busDetails in edit")
  const edit = async => {
  
    handleClose()
    
    var data = JSON.stringify({
      "lastUpdatedBy": "144",
      "chassis_number": sendData?.chassis_number,
      "insurance_number": sendData?.insurance_number,
      "register_date":sendData?.register_date,
      "insurance_company": sendData?.insurance_company,
      "insurance_start_date": sendData?.insurance_start_date,
      "last_service_date": sendData?.last_service_date,
      "emission_date": sendData?.emission_date,
      "insurance_end_date": sendData?.insurance_end_date,
      "createdBy": sendData?.createdBy,
      "engine_number": sendData?.engine_number,
      "permit": sendData?.permit,
      "fitness_certificate": sendData?.fitness_certificate,
      "register_number": sendData?.register_number,
      "bus_id": sendData?.bus_id || busDetails?.bus_id,
      // "bus_id": "4",
      "next_service_due_date": sendData?.next_service_due_date
    });
   console.log(data,"-------------------->dataaaaaaaa")
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/editBus.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setEditData(response.data)
        updatedata();
        reloadHandler()
        console.log(response.data, '<----------njknjjkkjn');
      })
      .catch(function (error) {
        console.log(error);
      });
  }


 
  const getCaaled = () => {
    edit();
    
  }

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{
          '&:hover': {
            backgroundColor: 'white',
          },
          '&:active':{
            backgroundColor: 'white',
          }
        }} >
        <Iconify id="edit-bus-btn" icon="material-symbols:edit" style={
        admin?  { width: '30px', height: '30px', color: '#e69138' }: { width: '30px', height: '30px', color: '#e69138', marginLeft: "190px"}
      
        } 
        
        ></Iconify>
      </Button>
      <Dialog
        id="edit-bus-scroll-dialog-title"
        open={open}
        fullScreen
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography id="edit-bus-details" sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
              Edit Bus Details <br/>{clcikData?.register_number}
            </Typography>


            <Button id="save-btn" autoFocus color="inherit" onClick={getCaaled}>
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
            {console.log(clcikData, "<-----qwertyuio")}
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <div style={{ background: 'white', padding: '2rem', borderRadius: '10px' }}>
                <TextField fullWidth id="outlined-basic" value={sendData?.register_number} onChange={(e) => { setSendData({ ...sendData, register_number: e?.target?.value }) }} label="Bus Number" variant="outlined" />
              {console.log(clcikData?.register_date,"registerdateeeeeeeee")}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                   defaultValue={clcikData?.register_date}
                    onChange={(e) => {
                      setSendData({ ...sendData, register_date: e }),
                      // setSendData({...sendData, register_date:e })
                      console.log(e, "<----werewrewrewrewr")
                      console.log(moment(new Date(e?.$d)))
                    }}
                    label="Registration Date"
                   

                    renderInput={(params) => <TextField value={sendData?.register_date} {...params} fullWidth />}
                  /></LocalizationProvider>
                 {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    // label="Date"
                    defaultValue={sendData?.register_date}
                    onChange={(newValue) => {
                      setSendData({ ...sendData, register_date: newValue })
                    }}
                    label="Registration Date"
                    value={sendData?.register_date}
                    renderInput={(params) => <TextField value={sendData?.register_date} {...params} fullWidth />}
                  />
                </LocalizationProvider> */}
                  {/* {console.log(moment(new Date(sendData?.register_date)).format("DD/MM/YYYY"), "<----(sendData?.register_date(sendData?.register_date")} */}
               
                <Stack style={{ marginTop: 10 }}>
                  <TextField id="outlined-basic" value={sendData?.engine_number} onChange={(e) => { setSendData({ ...sendData, engine_number: e?.target?.value }) }} label="Engine Number" variant="outlined" />
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <TextField fullWidth id="outlined-basic" value={sendData?.chassis_number} onChange={(e) => { setSendData({ ...sendData, chassis_number: e?.target?.value }) }} label="Chasis Number" variant="outlined" />
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <TextField fullWidth id="outlined-basic" value={sendData?.insurance_number} onChange={(e) => { setSendData({ ...sendData, insurance_number: e?.target?.value }) }} label="Insurance Number" variant="outlined" />
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <TextField fullWidth id="outlined-basic" value={sendData?.insurance_company} onChange={(e) => { setSendData({ ...sendData, insurance_company: e?.target?.value }) }} label="Insurance Company" variant="outlined" />
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(e) => {
                        setSendData({ ...sendData, insurance_start_date:e }),
                        console.log(e, "<----werewrewrewrewr")
                      }}
                      label="Insurance Start Date"
                      defaultValue={sendData?.insurance_start_date}

                      renderInput={(params) => <TextField value={sendData?.insurance_start_date} {...params} fullWidth />}
                    />

                  </LocalizationProvider>
                  
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(e) => {
                        setSendData({ ...sendData, insurance_end_date:e}),
                        console.log(e, "<----insurance_end_date")
                      }}
                      label="Insurance End Date"
                      value={sendData?.insurance_end_date}

                      renderInput={(params) => <TextField value={sendData?.insurance_end_date} {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(e) => {
                        setSendData({ ...sendData, last_service_date:e}),
                        console.log(e, "<----last_service_date")
                      }}
                      label="Last Service Date"
                      value={sendData?.last_service_date}

                      renderInput={(params) => <TextField value={sendData?.last_service_date} {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(e) => {
                        setSendData({ ...sendData, next_service_due_date:e}),
                        console.log(e, "<----next_service_due_date")
                      }}
                      label="Next Service Date"
                      value={sendData?.next_service_due_date}

                      renderInput={(params) => <TextField value={sendData?.next_service_due_date} {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(e) => {
                        setSendData({ ...sendData, fitness_certificate: e}),
                        console.log(e, "<----fitness_certificate")
                      }}
                      label="Fitness Certificate"
                     

                      renderInput={(params) => <TextField value={sendData?.fitness_certificate} {...params} fullWidth />}
                      value={sendData?.fitness_certificate}
                    />
                  </LocalizationProvider>
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    // moment(new Date(e?.$d)).format("DD/MM/YYYY")
                      onChange={(e) => {
                        setSendData({ ...sendData, permit: moment(new Date(e?.$d)).format("DD/MM/YYYY")}),
                        console.log(e, "<----permit")
                      }}
                      label="Permit Details"
                      value={sendData?.permit}

                      renderInput={(params) => <TextField value={sendData?.permit} {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Stack>
                <Stack style={{ marginTop: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(e) => {
                        setSendData({ ...sendData, emission_date: moment(new Date(e?.$d)).format("DD/MM/YYYY")}),
                        console.log(e, "<----emission_date")
                      }}
                      label="Emission Date"
                      value={sendData?.emission_date}

                      renderInput={(params) => <TextField value={sendData?.emission_date} {...params} fullWidth />}
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
