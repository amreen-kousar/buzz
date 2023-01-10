import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Stack, Typography, Box ,Button} from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import UserDrawer from './Components/UserDrawer';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  const [users, setUsers] = useState([]);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  useEffect(() => {
    user()
    
  }, []
  )
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
        <Button style={{ float: "right", marginLeft: "1rem" }}  onClick={handleClickOpen('paper')} 
        sx={{':focus':{
    backgroundColor: '#ffd796',
    color:'#ed6c02'
 },
  '&:hover': {
    backgroundColor: '#ffd796',
    color:'#ed6c02'
  }, backgroundColor: '#ffd796',
  color:'#ed6c02'
}}>Add User</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Add User</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >

              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <Select
                style={{width:"245px",margin:'0.5rem'}}
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


                <TextField id="outlined-basic" label="Bus Number" required variant="outlined" value={AddUser.busNumber} onChange={(e) => { setAddUser({ ...AddUser, busNumber: e.target.value }) }} />
                <TextField id="outlined-basic" label="Name" value={AddUser.name} onChange={(e) => { setAddUser({ ...AddUser, name: e.target.value }) }} variant="outlined" />
                <TextField id="outlined-basic" label="Mobile number" value={AddUser.mobilenumber} type="number" onChange={(e) => { setAddUser({ ...AddUser, mobilenumber: e.target.value }) }} variant="outlined" />
                <TextField id="outlined-basic" label="Work" value={AddUser.work} onChange={(e) => { setAddUser({ ...AddUser, work: e.target.value }) }} type="number" variant="outlined" />
                <TextField id="outlined-basic" label="Email" value={AddUser.email} onChange={(e) => { setAddUser({ ...AddUser, email: e.target.value }) }} variant="outlined" />
                <TextField id="outlined-basic" label="Address" value={AddUser.address} onChange={(e) => { setAddUser({ ...AddUser, address: e.target.value }) }} variant="outlined" />
                <TextField id="outlined-basic" label="Pincode" value={AddUser.pincode} onChange={(e) => { setAddUser({ ...AddUser, pincode: e.target.value }) }} variant="outlined" />


              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="warning" onClick={submitBus} sx={{':focus':{
                                                     backgroundColor: '#ffd796',
                                                      color:'#ed6c02'
                                                     },
                                              ':hover': {
                                                      backgroundColor: '#ffd796',
                                                      color:'#ed6c02'
                                                    },
                                                  
                                                  }}>Add</Button>
            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>

          </DialogActions>
        </Dialog>
      </div>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          People
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
    </Page>
  );
}
