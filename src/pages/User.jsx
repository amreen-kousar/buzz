import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Stack, Typography, Box, Toolbar, Button, TextField, Select, MenuItem } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import UserDrawer from './Components/UserDrawer';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import UserFilter from './Components/Peoplefilters/Userfilters';
// ----------------------------------------------------------------------
import Scrollbar from '../components/Scrollbar';
export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  const [users, setUsers] = useState([]);
  const [peopleFilter,setpeopleFilter]=useState(false)
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
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

  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  
  const handlepeopleCloseFilter = () => {
    setpeopleFilter(false);
  };
  useEffect(() => {
    user()

  }, []
  )


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
    role: 'Admin', name: '', mobilenumber: '', work: '', email: '', address: '',
    pincode: ""
  })

  const user = async () => {
    const data = JSON.stringify({
      "search": "",
      "user_id": 310,
      "role_id": 1,
      "filter_id": 0,
      "type": "",
      "pageNum": 1
    });

    const config = {
      method: 'post',
      url: 'http://3.7.7.138/appTest/getAllPeople.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setUsers(response.data.list)
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Page title="All Users">

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
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
              Add User
            </Typography>
          </Toolbar>
          {/* <DialogTitle id="scroll-dialog-title">Add User</DialogTitle> */}
          <DialogContent dividers={scroll === 'paper'}>
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
                <FormControl fullWidth style={{ marginLeft: '0.5rem', marginBottom: "0.5rem" }}>
                  <InputLabel id="demo-simple-select-label">Select role</InputLabel>
                  <Select


                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={AddUser.role}
                    label="Role"
                    onChange={(e) => setAddUser({ ...AddUser, role: e.target.value })}
                  >
                    {roles.map(role => {
                      return <MenuItem value={role}>{role}</MenuItem>
                    })}

                  </Select>
                </FormControl>



                <TextField fullWidth id="outlined-basic" label="Bus Number" required variant="outlined" value={AddUser.busNumber} onChange={(e) => { setAddUser({ ...AddUser, busNumber: e.target.value }) }} />
                <TextField fullWidth id="outlined-basic" label="Name" value={AddUser.name} onChange={(e) => { setAddUser({ ...AddUser, name: e.target.value }) }} variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Mobile number" value={AddUser.mobilenumber} type="number" onChange={(e) => { setAddUser({ ...AddUser, mobilenumber: e.target.value }) }} variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Work" value={AddUser.work} onChange={(e) => { setAddUser({ ...AddUser, work: e.target.value }) }} type="number" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Email" value={AddUser.email} onChange={(e) => { setAddUser({ ...AddUser, email: e.target.value }) }} variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Address" value={AddUser.address} onChange={(e) => { setAddUser({ ...AddUser, address: e.target.value }) }} variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Pincode" value={AddUser.pincode} onChange={(e) => { setAddUser({ ...AddUser, pincode: e.target.value }) }} variant="outlined" />


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
        <ProductCartWidget />
      </Container>
    </Page >
  );
}
