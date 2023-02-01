import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Button from '@mui/material/Button';
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

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PoaCreate({setSucess}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = useState('paper');
  const [addPoa,setAddPoa] = useState("");
 
  const [value, setValue] = React.useState(false);

  const handleChangeTime = (newValue) => {
    console.log(newValue,"<----1234567u8")
   // setValue(newValue);
  };
  const [addData,setAddData] = useState({
        date:dayjs( new Date()),
        user_id: "",
        name: "",
        all_day: 0,
        description: "",
        date2:dayjs( new Date())
  })
  const handleChange2 = (event) => {
 
  
     console.log(event,"<--jyhfgd")
  
    setAddData({...addData,date2:event})
  }
  const handleChange = (event) =>{
    setAddData({...addData,date:event})
  }

  const handleClickOpen = () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(()=>{
    //AddPoa()
    },[]
     )
 
  const AddPoa = async =>{
    console.log(addData,"<0hgdfvfdbgdf")
    var data = JSON.stringify({
        "date": addData?.date,
        "user_id": "651",
        "name":addData?.name,
        "all_day":addData?.all_day,
        "description": addData?.description,
        "date2":addData?.date2
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/createEvent.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        if(response?.data?.code === 200)
        {
        
        setSucess("this is success create")
       
        handleClose()
        }
        else{
            setValue(true)
            console?.log(response?.data?.message,"<---response?.data?.message")
            setAddPoa(response?.data?.message)
        }
       // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen} style={{float:"right",color:"#ed6c02"}} sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
                borderColor:"#ed6c02"
              },  
              borderColor:"#ed6c02",
              color:"#ed6c02"
            }}>
       Create New Poa
      </Button> */}
      <Button variant="contained" onClick={handleClickOpen}  style={{ float: "right", marginLeft:100, borderRadius: "50%", padding: "0.2rem", position:'relative', zIndex: '1',marginRight:10,marginTop:15}} sx={{
                ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                    border: '#ffd796'
                },
                bgcolor: '#ffd796',
                color: "#ed6c02",
                border: 'none'
            }} >
              {/* style={{ float: "right", marginLeft:100, borderRadius: "50%", padding: "0.2rem", position:'relative', zIndex: '-1',marginRight:10,marginTop:15}} */}
                <span style={{ fontSize: "2rem" }}>+</span>
            </Button>
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {console.log(addPoa,"<----qwedrftgyhujikkmijnuhbygtv")}
              <Snackbar open={value} autoHideDuration={6000} onClose={()=>{setAddPoa(''),
            setValue(false)
            }}>
        <Alert onClose={()=>{setAddPoa(''),
         setValue(false)
    }} severity="error" sx={{ width: '100%' }}>
        {addPoa}
        </Alert>
      </Snackbar>

          <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
              ADD New POA
            </Typography>


            <Button autoFocus color="inherit" onClick={AddPoa}>
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
                <TextField fullWidth value={addData?.name} onChange={(e)=>{setAddData({...addData,name:e?.target?.value}),
            console.log(e,"<---EWWEREWREW")
            }} id="outlined-basic" label="Add Title" variant="outlined" color="common" />
                 <Stack direction={'row'}>
                 <Typography>All Day</Typography>
                 <Switch value={addData?.all_day} onChange={(e)=>{setAddData({...addData,all_day:addData?.all_day===1?0:1})}} {...label} />
                 </Stack>

                 <Stack direction={'row'}>
               
                <DateTimePicker
          label="Date&Time picker"
          value={addData?.date}
          onChange={(e)=>{handleChange(e)}}
          renderInput={(params) => <TextField {...params} color="common" />}
        />
              
                </Stack>
                {addData?.all_day===0&&
             <Stack direction={'row'}>
             {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
             <DateTimePicker
       label="Date&Time picker"
       value={addData?.date2}
       onChange={(e)=>{handleChange2(e)}}
       renderInput={(params) => <TextField {...params} color="common" />}
     />
             {/* </LocalizationProvider> */}
             </Stack>
                
                }
               
                <br />
               
                <Stack>
                <Typography variant="body1" color="common">Description</Typography>
              </Stack>

              <Stack>
              <TextField id="outlined-basic"  value={addData?.description} onChange={(e)=>{setAddData({...addData,description:e?.target?.value})}} label="Add Description For Creating Poa"  variant="outlined" color="common" />
              </Stack>
              <Stack>
             
              </Stack>
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
