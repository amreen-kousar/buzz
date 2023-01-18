import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Stack, Typography, Box, Toolbar, Button, TextField, Select, MenuItem } from '@mui/material';
// components
import Pagination from '@mui/material/Pagination';

import Page from '../../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../../sections/@dashboard/products';
// mock
import PRODUCTS from '../../_mock/products';
import UserDrawer from '../Components/UserDrawer';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Autocomplete from '@mui/material/Autocomplete';
import UserFilter from '../Components/Peoplefilters/Userfilters';
// ----------------------------------------------------------------------
import Scrollbar from '../../components/Scrollbar';
import DashboardNavbar from 'src/layouts/dashboard/DashboardNavbar';
// ----------------------------------------------------------------------

export default function User() {
  const [openFilter, setOpenFilter] = useState(false);
  const [users, setUsers] = useState([]);
  const [ceoUser, setCeoUser] = useState([])
  const [peopleFilter,setpeopleFilter]=useState(false)
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [projects, setProjects] = useState([])
  const [searchUser,setSearchUser] = useState("");
  const [page,setPage] = useState(1)
  const [count, setCount] = useState('')
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
    // getProjects()
  };

  const handleClose = () => {
    console.log(AddUser)
    setOpen(false);
  };
  const descriptionElementRef = useRef(null);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  
  const handlepeopleOpenFilter = () => {
    setpeopleFilter(true);
  
  };
  const submitBus = () => {
    console.log(AddUser)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  
  const handlepeopleCloseFilter = () => {
    setpeopleFilter(false);
  };
  useEffect(() => {
    user()

  }, [searchUser]
  )

  const getProjects = async (d) => {


    const data = JSON.stringify({
      "search": "",
      "id": 1,
      "role_id": 1,
      "filter_id": 0,
      "type": "",
      "pageNum": d?d:1
    });

    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getProjects.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setProjects(response.data)
        console.log(projects)
      })
      .catch((error) => {
        console.log(error);
      });


  }

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);



  const roles = ['Admin', 'Program Manager', 'Operations Manager', 'Cor', 'Trainer', 'Gelathi Facilitator', 'Driver', 'Funder', 'Partner', 'FIN/HR/VIEWER', 'Senior Operations Manager', 'Gelathi Facilitator Lead']

  const [AddUser, setAddUser] = useState({
    role: '', name: '', lastName: "", mobilenumber: '', work: '', email: '', address: '', address1: "", address2: "",
    pincode: "", gender: "male", present_status: true, dateOfJoining: '', reportingManager: "", license_number: "", project: ""
  })

  const user = async (d) => {
    const dataid = localStorage?.getItem('userDetails')
    const data = JSON.stringify({
      "search": searchUser,
      "user_id": JSON?.parse(dataid)?.id,
      "role_id": JSON?.parse(dataid)?.role,
      "filter_id": "",
      "type": "",
      "pageNum":d?d: 1
    });

    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getAllPeople.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setUsers(response.data.list)
       
        setCount(response?.data?.total_count%25==0?parseInt( response?.data?.total_count/25):parseInt( response?.data?.total_count/25)+1)
        let ceo = []
        response.data.list.map(r => (r.role_name === "CEO") ? ceo = [...ceo, { label: r.first_name, ...r }] : null)
        setCeoUser([...ceo])
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(users,'<------------------response.data.list')
  const pageChange = (event, newPage) =>{
    setPage(newPage)
    user(newPage)
  console.log(newPage,"<----efesfdsefsd")
  }

  return (
    <Page title="All Users">
        <DashboardNavbar getSearch={(e) => setSearchUser(e)} onOpenSidebar={() => setOpen(true)} />

      <div>
      <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <UserFilter
              isOpenFilter={openFilter}
              onOpenFilter={handlepeopleOpenFilter}
              onCloseFilter={handlepeopleCloseFilter}
            />
          </Stack>
        <Button style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }} variant="contained" onClick={handleClickOpen('paper')} sx={{
          ':focus': {
            backgroundColor: '#ffd796',
            color: '#ed6c02'
          },
          '&:hover': {
            backgroundColor: '#ffd796',
            color: '#ed6c02'
          }, backgroundColor: '#ffd796',
          color: '#ed6c02'
        }}><span style={{ fontSize: "2rem" }}>+</span></Button>
        <Dialog
          open={open}
          fullScreen
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <Toolbar >
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
              Add User
            </Typography>
          </Toolbar>
          {/* <DialogTitle id="scroll-dialog-title">Add User</DialogTitle> */}
          <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
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


                <div style={{ background: "white", padding: "2rem", borderRadius: "10px" }}>

                  <FormControl fullWidth style={{ marginLeft: '0.5rem', marginBottom: "0.5rem" }}>
                    <InputLabel id="demo-simple-select-label">Choose Role</InputLabel>
                    <Select

                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={AddUser.role}
                      label="Role"
                      onChange={(e) => setAddUser({ ...AddUser, role: e.target.value })}
                    >
                      <MenuItem value="" default disabled>Choose Role </MenuItem>
                      {roles.map(role => {
                        return <MenuItem value={role}>{role}</MenuItem>
                      })}

                    </Select>
                  </FormControl>

                  <TextField fullWidth id="outlined-basic" label="Name" value={AddUser.name} required onChange={(e) => { setAddUser({ ...AddUser, name: e.target.value }) }} variant="outlined" />
                  {

                    ["Admin", "Program Manager", "Operations Manager", "Gelathi Facilitator Lead", 'FIN/HR/VIEWER', 'Senior Operations Manager'].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" value={AddUser.lastName} onChange={(e) => { setAddUser({ ...AddUser, lastName: e.target.value }) }} />
                  }
                  {!["Funder", "Partner"].includes(AddUser.role) && <FormControl style={{ marginLeft: "1rem" }}>
                    <RadioGroup
                      row
                      onChange={(e, value) => { setAddUser({ ...AddUser, gender: value }) }}
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="male"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />

                    </RadioGroup>
                  </FormControl>}
                  <FormGroup style={{ float: "right" }}>
                    <FormControlLabel label="Status" labelPlacement="start"
                      control={<Switch defaultValue={AddUser.present_status} onClick={(e, value) => { setAddUser({ ...AddUser, present_status: !AddUser.present_status }); console.log(!AddUser.present_status) }} defaultChecked />} />
                  </FormGroup>
                  <br />
                  {!["Funder", "Partner"].includes(AddUser.role) && <FormControl fullWidth>

                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={ceoUser}
                      defaultValue={AddUser.reportingManager}
                      label="reportingManager"
                      onChange={(event, value) => setAddUser({ ...AddUser, reportingManager: value })}

                      renderInput={(params) => <TextField {...params} label="ReportingManger" />}
                    />
                    {/* <Select


                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={AddUser.reportingManager}
                    label="reportingManager"
                    onChange={(e) => setAddUser({ ...AddUser, reportingManager: e.target.value })}
                  >
                    {ceoUser.map(user => {
                      return <MenuItem value={user}>{user?.label}</MenuItem>
                    })}

                  </Select> */}
                  </FormControl>
                  }
                  {!["Funder", "Partner"].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="Date of joining " type="date" InputLabelProps={{
                    shrink: true,
                  }} value={AddUser.dateOfJoining} onChange={(e) => { setAddUser({ ...AddUser, dateOfJoining: e.target.value }) }} variant="outlined" />
                  }
                </div>
                <br />
                <h3>Contact Information</h3>
                <br />
                <div style={{ background: "white", padding: "2rem", borderRadius: "10px" }}>
                  <TextField fullWidth required id="outlined-basic" label="Mobile number" value={AddUser.mobilenumber} type="number" onChange={(e) => { setAddUser({ ...AddUser, mobilenumber: e.target.value }) }} variant="outlined" />
                  <TextField fullWidth id="outlined-basic" label="Work" value={AddUser.work} onChange={(e) => { setAddUser({ ...AddUser, work: e.target.value }) }} type="number" variant="outlined" />
                  <TextField fullWidth required id="outlined-basic" label="Email" value={AddUser.email} onChange={(e) => { setAddUser({ ...AddUser, email: e.target.value }) }} variant="outlined" />
                  <TextField fullWidth required id="outlined-basic" label="Address" value={AddUser.address} onChange={(e) => { setAddUser({ ...AddUser, address: e.target.value }) }} variant="outlined" />

                  {!["Funder", "Partner"].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="Address 1" value={AddUser.address1} onChange={(e) => { setAddUser({ ...AddUser, address1: e.target.value }) }} variant="outlined" />}
                  {!["Funder", "Partner"].includes(AddUser.role) && < TextField fullWidth id="outlined-basic" label="Address 2" value={AddUser.address2} onChange={(e) => { setAddUser({ ...AddUser, address2: e.target.value }) }} variant="outlined" />}

                  <TextField fullWidth id="outlined-basic" label="Pincode" value={AddUser.pincode} onChange={(e) => { setAddUser({ ...AddUser, pincode: e.target.value }) }} variant="outlined" />
                  {["Trainer", 'Gelathi Facilitator', 'FIN/HR/VIEWER', 'Senior Operations Manager'].includes(AddUser.role) && <FormControl fullWidth>

                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={ceoUser}
                      defaultValue={AddUser.project}
                      label="project"
                      onChange={(e, value) => setAddUser({ ...AddUser, project: value })}
                      renderInput={(params) => <TextField {...params} label="Choose project" />}
                    />

                  </FormControl>
                  }
                  {["Driver"].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="License Number" value={AddUser.license_number} onChange={(e) => { setAddUser({ ...AddUser, license_number: e.target.value }) }} variant="outlined" />
                  }
                </div>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={submitBus} color="warning" sx={{
              ':focus': {
                backgroundColor: '#ffd796',
                color: '#ed6c02'
              },
              ':hover': {
                backgroundColor: '#ffd796',
                color: '#ed6c02'
              },

            }}>Add</Button>
            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>

          </DialogActions>
        </Dialog>
      </div>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          People 
          <Button style={{float:"right",color:'#ed6c02'}}
         sx={{
          '&:hover': {
            backgroundColor: '#ffd796',
          },
        }}  
          onClick={() => {
            handlepeopleOpenFilter()
          }}>Filters</Button>
        </Typography>
      

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ mb: 1 }}>
            <UserDrawer
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
        </Stack>

        <ProductList users={users} products={PRODUCTS} isOpenFilter={openFilter}
          onOpenFilter={handleOpenFilter}
          onCloseFilter={handleCloseFilter} />
        <ProductCartWidget /><br></br>
        <Pagination page={page} onChange={pageChange} rowsPerPage={25} count={count} variant="outlined" color="warning" sx={{color:"#ffd796"}} style={{float:"right"}} />
      </Container>
    </Page >
  );
}
