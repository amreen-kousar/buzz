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

export default function UserEditProfile() {
  let user = JSON.parse(localStorage?.getItem('people'))

  console.log(user,'<-----uyuyuuuhuhuuhu')
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = useState('paper');
  const [age, setAge] = React.useState('');
  const [ceoUser, setCeoUser] = useState([]);
  const [usersDataEdit, setUsersDataEdit] = useState('')
  const [rolesData, setRolesData] = useState([])

  const [editData,setEditData] = useState({
      id: "",
      countryID: "",
      first_name: "",
      last_name: "",
      gender: "",
      doj: "",
      pincode: "",
      officeMailId: "",
      personalMailId: "",
      contactNum: "",
      workNum: "",
      address: "",
      address1: "",
      address2: "",
      empRole: "",
      supervisorId: "",
      profile_pic: "",
      status: "",
      createdBy: "",
      lastUpdatedBy: "",
      project_list: "",
      license_number: ""
  })
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
  //   editUser()
  getRoles()
    },[]
     )
 
  const getRoles = () => {
    const data = JSON.stringify({
    });

    const config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/roles_list.php',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    };

    axios(config)
        .then((response) => {
            setRolesData(response.data.list)

        })
        .catch((error) => {
            console.log(error);
        });
}
   const editUser = async =>{
   
    var data = JSON.stringify({
      "id": user?.id,
      "countryID": user?.countryID,
      "first_name": user?.first_name,
      "last_name":user?.last_name ,
      "gender":user?.gender ,
      "doj": user?.doj,
      "pincode": user?.pincode,
      "officeMailId": user?.officeMailId,
      "personalMailId": user?.personalMailId,
      "contactNum": user?.contactNum,
      "workNum": user?.workNum,
      "address": user?.address,
      "address1": user?.address1,
      "address2": user?.address2,
      "empRole": user?.empRole,
      "supervisorId": user?.supervisorId,
      "profile_pic": user?.profile_pic,
      "status": user?.status,
      "createdBy": user?.createdBy,
      "lastUpdatedBy": "",
      "project_list": user?.project_list,
      "license_number": user?.license_number
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/editUser.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      setUsersDataEdit(response.data)
      console.log(response.data,'<------------------setUsers') ;
    })
    .catch(function (error) {
      console.log(error);
    });
   }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Profile
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
            Edit Users
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
                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                <FormControl fullWidth style={{ marginLeft: '0.5rem', marginBottom: '0.5rem' }}>
                  <InputLabel id="demo-simple-select-label">Choose Role</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="role"
                   // defaultValue={AddUser.role}
                    label="Role"
                    onChange={(e) => { getEmpId(e.target.value) }}
                >
                    {rolesData.map(role => {
                        return <MenuItem value={role ?? ''}>{role?.roleName}</MenuItem>
                    })}
                  </Select>
                </FormControl>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  // options={ceoUser}
                  // defaultValue={AddUser.reportingManager}
                  label="reportingManager"
                  onChange={(event, value) => setAddUser({ ...AddUser, reportingManager: value })}
                  renderInput={(params) => <TextField {...params} label="ReportingManger" />}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    // value={sendData?.date}
                    onChange={(newValue) => {
                      setSendData({ ...sendData, date: newValue });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                <br />
                <br />
               
                <Stack>
                <Typography variant="body1">Contact Information</Typography>
              </Stack>

              <Stack>
              <TextField id="outlined-basic" label="Mobile Number" type="number" variant="outlined" />
              </Stack>
              <Stack>
              <TextField id="outlined-basic" label="Work Mobile Number" type="number" variant="outlined" />
              </Stack>
              <Stack>
              <TextField id="outlined-basic" label="Email" type="email" variant="outlined" />
              </Stack>
              <Stack>
              <TextField id="outlined-basic" label="Address1"  variant="outlined" />
              </Stack>
              <Stack>
              <TextField id="outlined-basic" label="Address2"  variant="outlined" />
              </Stack>
              <Stack>
              <TextField id="outlined-basic" label="Pincode"  variant="outlined" />
              </Stack>
              <Stack>
              <TextField id="outlined-basic" label="Project"  variant="outlined" />
              </Stack>
              </div>

            
              {/* <br />
                <h3>Contact Information</h3>
                <br /> */}
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
