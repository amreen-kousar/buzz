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
import moment from 'moment';
import Autocomplete from '@mui/material/Autocomplete';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserEditProfile({updateSetUser}) {
  let user = JSON.parse(localStorage?.getItem('people'))

  console.log(user, '<-----uyuyuuuhuhuuhu')
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = useState('paper');
  const [age, setAge] = React.useState('');
  const [ceoUser, setCeoUser] = useState([]);
  const [usersDataEdit, setUsersDataEdit] = useState('')
  const [rolesData, setRolesData] = useState([])
   const [reportingManager, setReportingManager] = useState([])
   const [reportingManagerProject, setReportingManagerProject] = useState([])
  const [editData, setEditData] = useState({
    id: user.id,
    countryID: user.countryID,
    first_name: user.first_name,
    last_name: user.last_name,
    gender: user.gender,
    doj: new Date(user.doj),
    role:user.role   ,
    pincode:user.pincode,
    officeMailId: user.officeMailId,
    personalMailId: user.personalMailId,
    contactNum: user.contactNum,
    workNum: user.workNum,
    address: user.address,
    address1: user.address1,
    address2: user.address2,
    empRole: user.empRole,
    supervisorId: user.supervisorId,
    supervisorName: user.supervisorName,
    profile_pic: user.profile_pic,
    status: user.status,
    createdBy: user.createdBy,
    lastUpdatedBy: user.lastUpdatedBy,
    project_list: user.project_list,
    license_number: user.license_number
  })
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(user?.role?.roleName,"roleeeeeeeeeeeee")
  const handleClickOpen = () => {
    
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //   editUser()
    getRoles()
  }, []
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

   const getEmpId = async (value) => {
        setEditData({ ...editData, role: value })
        let formData = new FormData();
        formData.append('role_id', value);
        formData.append('name', '');


        let res = await fetch('https://bdms.buzzwomen.org/appTest/getAllBuzzTeam.php',
            {
                body: formData,
                method: "post"
            })
            .then((res) => res.json())
        let temprepoManager = res.list.map(repo => { return { label: repo?.name, id: repo.id, role: repo.role } })
        setReportingManager([...temprepoManager])
        console.log(temprepoManager, '<---------------temprepoManagertemprepoManager')

    }
    const getProjectOfManager = async (value) => {
      setAddUser({ ...AddUser, reportingManager: value })
      let formData = new FormData();
      formData.append('manager_id', value.id);
      formData.append('first_name', '');
      const data = JSON.stringify({
          'manager_id': value.id
      });

      const config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/getProjectList.php',
          headers: {
              'Content-Type': 'application/json'
          },
          data
      };

      axios(config)
          .then((response) => {
              console.log(response.data.list, 'project')
              let temprepoManagerProject = response.data.list.map(repo => { return { label: repo?.projectName, id: repo.id } })
              setReportingManagerProject([...temprepoManagerProject,
                  // { id: '210', label: 'testme' }
              ])
          })
          .catch((error) => {
              console.log(error);
          });

  }


  const editUser = async => {

    var data = JSON.stringify({
      "id": editData?.id,
      "countryID": editData?.countryID,
      "first_name": editData?.first_name,
      "last_name": editData?.last_name,
      "gender": editData?.gender,
      "doj": moment(editData?.doj?.$d)?.format('YYYY-MM-DD'),
      "role":editData?.role?.roleName,
      "pincode": editData?.pincode,
      "officeMailId": editData?.officeMailId,
      "personalMailId": editData?.personalMailId,
      "contactNum": editData?.contactNum,
      "workNum": editData?.workNum,
      "address": editData?.address,
      "address1": editData?.address1,
      "address2": editData?.address2,
      "empRole": editData?.empRole,
      "supervisorId": editData?.supervisorId,
      "profile_pic": editData?.profile_pic,
      "status": editData?.status,
      "createdBy": editData?.createdBy,
      "lastUpdatedBy": "",
      "project_list": editData?.project_list,
      "license_number": editData?.license_number,
      "role_name":editData?.role_name
    });



    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/editUser.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem('people', data)
        setUsersDataEdit(response.data)
        updateSetUser()
        console.log(response.data, '<------------------setUsers');
      })
      .catch(function (error) {
        console.log(error);
      });
      handleClose()
  }
  return (
    <div>
      <Button onClick={handleClickOpen} sx={{
        '&:hover': {
          backgroundColor: '#ffd796',
        },
      }} >
        <Iconify icon="material-symbols:edit" style={{ width: '30px', height: '30px', color: '#e69138', marginLeft: "10px" }}></Iconify>
      </Button>
      <Dialog
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
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
              Edit Users
            </Typography>


            <Button autoFocus color="inherit" onClick={()=>editUser()}>
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
                <TextField label="First Name" variant="outlined" color="common" fullWidth onChange={(e) => { setEditData({ ...editData, first_name: e?.target?.value }) }} value={editData?.first_name}/>            <br></br>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" color="common" fullWidth onChange={(e) => { setEditData({ ...editData, last_name: e?.target?.value }) }} value={editData?.last_name}/><br></br><br></br>
                <FormControl fullWidth style={{ marginLeft: '0.5rem', marginBottom: '0.5rem' }}>
                  <InputLabel id="demo-simple-select-label" fullWidth color="common">Role</InputLabel>

                  <Select fullWidth color="common" variant='standard'
                    labelId="demo-simple-select-label"
                    id="role"
                    // defaultValue={AddUser.role}
                    label="Role"
                    onChange={(e) => { setEditData({ ...editData, role: e?.target?.value }) }}
                    // onChange={(e) => { getEmpId(e.target.value) }}
                    value={editData?.role?.roleName}
                  
                  >
                    {rolesData.map(role => {
                      return <MenuItem value={role ?? ''}>{role?.roleName}</MenuItem>
                    })} 
                  </Select>
                </FormControl>
                {!["Funder", "Partner"].includes(editData.role?.roleName) &&      <FormControl fullWidth>

                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={reportingManager}
                                        defaultValue={editData.supervisorName}
                                        label="reportingManager"
                                        onChange={(event, value) => getProjectOfManager(value)}

                                        renderInput={(params) => <TextField {...params} label="ReportingManger" />}
                                    />
                                </FormControl> }
                              
                {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  // options={ceoUser}
                  // defaultValue={AddUser.reportingManager}
                  label="reportingManager"
                  onChange={(event, value) => setAddUser({ ...AddUser, reportingManager: value })}
                  renderInput={(params) => <TextField {...params} label="ReportingManger" />}
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    inputFormat="YYYY/MM/DD"
                    
                    onChange={(newValue) => {
                      setEditData({ ...editData, doj: newValue });
                    }}
                    value={editData?.doj}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                <br />
                <br />

                <Stack>
                  <Typography variant="body1" color="common">Contact Information</Typography>
                </Stack>

                <Stack>
                  <TextField id="outlined-basic" label="Mobile Number" type="number" variant="outlined" color="common" onChange={(e) => { setEditData({ ...editData, contactNum: e?.target?.value }) }} value={editData?.contactNum}/>
                </Stack>
                <Stack>
                  <TextField id="outlined-basic" label="Work " type="number" variant="outlined" color="common" onChange={(e) => { setEditData({ ...editData, workNum: e?.target?.value }) }} value={editData?.workNum}/>
                </Stack>
                <Stack>
                  <TextField id="outlined-basic" label="Email" type="email" variant="outlined" color="common" onChange={(e) => { setEditData({ ...editData, officeMailId: e?.target?.value }) }} value={editData?.officeMailId}/>
                </Stack>
                <Stack>
                  <TextField id="outlined-basic" label="Address1" variant="outlined" color="common" onChange={(e) => { setEditData({ ...editData, address1: e?.target?.value }) }} value={editData?.address1}/>
                </Stack>
                <Stack>
                  <TextField id="outlined-basic" label="Address2" variant="outlined" color="common" onChange={(e) => { setEditData({ ...editData, address2: e?.target?.value }) }} value={editData?.address2}/>
                </Stack>
                <Stack>
                  <TextField id="outlined-basic" type="number" label="Pincode" variant="outlined" color="common" onChange={(e) => { setEditData({ ...editData, pincode: e?.target?.value }) }} value={editData?.pincode}/>
                </Stack>
                <Stack>
                 
                  {/* <TextField id="outlined-basic" label="Project" variant="outlined" color="common" onChange={(e) => { setEditData({ ...editData, project_list: e?.target?.value }) }} value={editData?.project_list}/> */}
                 <Typography>Choose Projects</Typography>
                  <Select color="common" label="Choose Project" variant="standard" onChange={(e) => setEditData({ ...editData, project_list: e?.target?.value })} value={editData?.project_list}>             
               {user?.project_list.map((itm)=>{
                return(
                        <MenuItem value={itm?.id}>{itm?.projectName}</MenuItem>
                )
              })}
            </Select>
               
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
