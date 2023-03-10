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

export default function PoaEdit({ setSucess, itm }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = useState('paper');
  const [addPoa, setAddPoa] = useState("");

  const [value, setValue] = React.useState(false);

  const handleChangeTime = (newValue) => {
    // setValue(newValue);
  };

  const [addData, setAddData] = useState({
    date: dayjs(new Date()),
    user_id: "",
    name: "",
    all_day: 0,
    description: "",
    date2: dayjs(new Date()),
    poa_id: ""
  })
  const handleChange2 = (event) => {

    setAddData({ ...addData, date2: event })
  }
  const handleChange = (event) => {
    setAddData({ ...addData, date: event })
  }

  const handleClickOpen = () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

{console.log(itm,"itemmmm")}
  useEffect(() => {
    //AddPoa()
    setAddData({
      date: itm?.date1,
      user_id:localStorage?.getItem('userId'),
      name: itm?.name,
      all_day: 0,
      description: itm?.description,
      date2: itm?.date2,
      poa_id: itm?.id
    })
  }, []
  )

  const detailsAdded = () => {

  }

  const AddPoa = async => {

    var data = JSON.stringify({
      "poa_id": addData?.poa_id,
      "date": addData?.date,
      "user_id": localStorage?.getItem('userId'),
      "name": addData?.name,
      "all_day": addData?.all_day,
      "description": addData?.description,
      "date2": addData?.date2
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/updateRescheduleEvent.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        if (response?.data?.code === 200) {
          handleClose()

          setSucess("this is success create")

          handleClose()
        }
        else {
          setValue(true)
          console?.log(response?.data?.message, "<---response?.data?.message")
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
      {(itm?.check_out==0 )?<Button onClick={handleClickOpen} sx={{
        '&:hover': {
          backgroundColor: '#ffd796',
          borderColor: "#ff7424"
        },
        borderColor: "#ff7424",
        color: "#ed6c02"
      }} variant="outlined" >
        Edit&nbsp;Poa
      </Button>:null}
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >

        <Snackbar open={value} autoHideDuration={6000} onClose={() => {
          setAddPoa(''),
            setValue(false)
        }}>
          <Alert onClose={() => {
            setAddPoa(''),
              setValue(false)
          }} severity="error" sx={{ width: '100%' }}>
            {/* {addPoa} */}
          </Alert>
        </Snackbar>

        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div"  >
              Edit Your POA
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
                <TextField fullWidth value={addData?.name} onChange={(e) => {
                  setAddData({ ...addData, name: e?.target?.value })
                 
                }} id="outlined-basic" label="Add Title" variant="outlined" color="common" />
                <Stack direction={'row'} color="common">
                  <Typography>All Day</Typography>
                  <Switch value={addData?.all_day} onChange={(e) => { setAddData({ ...addData, all_day: addData?.all_day === 1 ? 0 : 1 }) }} {...label} />
                </Stack>

                <Stack direction={'row'}>

                  <DateTimePicker
                    label="Date&Time picker"
                    value={addData?.date}
                    onChange={(e) => { handleChange(e) }}
                    renderInput={(params) => <TextField {...params} color="common" />}
                  />

                </Stack>
                {addData?.all_day === 0 &&
                  <Stack direction={'row'}>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                    <DateTimePicker
                      label="Date&Time picker"
                      value={addData?.date2}
                      onChange={(e) => { handleChange2(e) }}
                      renderInput={(params) => <TextField {...params} color="common" />}
                    />
                    {/* </LocalizationProvider> */}
                  </Stack>

                }

                <br />

                <Stack>
                  <Typography variant="body1">Description</Typography>
                </Stack>

                <Stack>
                  <TextField id="outlined-basic" value={addData?.description} onChange={(e) => { setAddData({ ...addData, description: e?.target?.value }) }} label="Add Description For Creating Poa" variant="outlined" color="common" />
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
