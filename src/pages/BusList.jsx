import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect, forwardRef, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,

  Stack,
  Chip,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Grid, Box, TextField, Toolbar
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// components
import CloseIcon from '@mui/icons-material/Close';
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import BuslistDrawer from './Components/BuslistDrawer';
import BusListFilter from './Components/Buslistfilters/BusListFilter';
import DashboardNavbar from 'src/layouts/dashboard/DashboardNavbar';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function User() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [open, setOpens] = useState(false);
  const [openAddBus, setOpenAddBus] = useState(false)
  const [clcikData, setClickData] = useState()

  const [orderBy, setOrderBy] = useState('name');
  const [search, setSearch] = useState('')

  const [filterName, setFilterName] = useState('');
  const [dw, setDw] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const submitBus = () => {
    console.log(addBus)
  }
  const [openDate, setopenDate] = useState(true)
  const [addBus, setAddBus] = useState({
    busNumber: '', registerNumber: '', registerDate: '', engineNumber: '', chassisNumber: '', insuranceNumber: '',
    insuranceCompany: "", insuranceStartDate: "", insuranceEndDate: "", lastServiceDate: "", nextServiceDate: "", fitnessCertificate: "", permitDetails: "", emissionDate: ''
  })

  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpenAddBus(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    console.log(addBus)
    setOpenAddBus(false);
  };

  const descriptionElementRef = useRef(null);

  const [buses, setBuses] = useState();
  useEffect(() => {
    setDw(false)
    busesd()
  }, [search, dw]
  )

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const busesd = async () => {
    const data = JSON.stringify({
      "date": "",
      "role_id": 1,
      "project_id": "",
      "taluk_id": "",
      "district_id": "",
      "funder_id": "",
      "emp_id": 206,
      "search": search
    });
    console.log(data, "<----qwertyuiosdfgh")
    const config = {
      method: 'post',
      url: 'http://3.7.7.138/appTest/getBuses.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)

      .then((response) => {
        setBuses(response?.data)
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }




  const [openFilter, setOpenFilter] = useState(false);
  const [openbusfilter, setopenbusfilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleopenbusfilter = () => {
    setopenbusfilter(true);
  };

  const handleclosebusfilter = () => {
    setopenbusfilter(false);
  };



  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Page title="User">
      <div>
        <Button style={{ float: "right", marginLeft: "1rem" }} variant="contained" onClick={handleClickOpen('paper')}>Add Bus</Button>
        <Dialog
          open={openAddBus}
          fullScreen
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          {/* <DialogTitle id="scroll-dialog-title">Add Bus</DialogTitle> */}
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
              Add Bus
            </Typography>
          </Toolbar>
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

              >
                <TextField fullWidth id="outlined-basic" label="Bus Number" required variant="outlined" value={addBus.busNumber} onChange={(e) => { setAddBus({ ...addBus, busNumber: e.target.value }) }} /><br />
                <TextField fullWidth id="outlined-basic" label="Register Number" value={addBus.registerNumber} onChange={(e) => { setAddBus({ ...addBus, registerNumber: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Register Date" value={addBus.registerDate} onChange={(e) => { setAddBus({ ...addBus, registerDate: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Engine Number" value={addBus.engineNumber} onChange={(e) => { setAddBus({ ...addBus, engineNumber: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Chassis Number" value={addBus.chassisNumber} onChange={(e) => { setAddBus({ ...addBus, chassisNumber: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Insurance Number" value={addBus.insuranceNumber} onChange={(e) => { setAddBus({ ...addBus, insuranceNumber: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Insurance Company" value={addBus.insuranceCompany} onChange={(e) => { setAddBus({ ...addBus, insuranceCompany: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Insurance Start Date" type="date" InputLabelProps={{
                  shrink: true,
                }} value={addBus.insuranceStartDate} onChange={(e) => { setAddBus({ ...addBus, insuranceStartDate: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Insurance End Date" type="date" InputLabelProps={{
                  shrink: true,
                }} value={addBus.insuranceEndDate} onChange={(e) => { setAddBus({ ...addBus, insuranceEndDate: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Last Service Date" type="date" InputLabelProps={{
                  shrink: true,
                }} value={addBus.lastServiceDate} onChange={(e) => { setAddBus({ ...addBus, lastServiceDate: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Next Service Date" type="date" InputLabelProps={{
                  shrink: true,
                }} value={addBus.nextServiceDate} onChange={(e) => { setAddBus({ ...addBus, nextServiceDate: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Fitness Certificate" value={addBus.fitnessCertificate} onChange={(e) => { setAddBus({ ...addBus, fitnessCertificate: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Permit Details" value={addBus.permitDetails} onChange={(e) => { setAddBus({ ...addBus, permitDetails: e.target.value }) }} variant="outlined" /><br />
                <TextField fullWidth id="outlined-basic" label="Emission Date" type="date" InputLabelProps={{
                  shrink: true,
                }} value={addBus.emissionDate} onChange={(e) => { setAddBus({ ...addBus, emissionDate: e.target.value }) }} variant="outlined" /><br />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={submitBus}>Add</Button>
            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>

          </DialogActions>
        </Dialog>
      </div>
      <Container>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpens(false)}>
          <Alert onClose={() => { setOpens(false) }} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
        <DashboardNavbar getSearch={(e) => setSearch(e)} onOpenSidebar={() => setOpen(true)} />

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            All Bus List

          </Typography>
          <Button style={{float:"right",color:'#ed6c02'}} 
          sx={{
            '&:hover': {
              backgroundColor: '#ffd796',
            },
          }} 
          onClick={()=>{
          handleopenbusfilter()}}>
          Filter
        </Button>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>
        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <BuslistDrawer
            clcikData={clcikData}
            isOpenFilter={openFilter}
            deletebuses={() => {
              setDw(!dw)
              handleCloseFilter()
              setOpens(true)
            }}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
        </Stack>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <BusListFilter
            clcikData={clcikData}
            isOpenFilter={openbusfilter}
            onOpenFilter={handleopenbusfilter}
            onCloseFilter={handleclosebusfilter}
          />
        </Stack>

        {buses?.list?.length == 0 && (

          <div>
            <h1>no data found</h1>
          </div>

        )}
        {/* </Stack> */}
        {buses?.list?.map((itm) => {
          return (
            <Card style={styles.card1}
              onClick={() => {
                setClickData(itm)
                handleOpenFilter()
              }}>

              <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                <Typography variant="subtitle1" gutterBottom  >
                  {`Bus Number : ${itm?.register_number}`}

                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  {` Project Name : ${itm?.project_name}`}
                </Typography>
              </Grid>
              <Grid style={{ marginLeft: 15 }}>
                <Typography variant="subtitle2" gutterBottom >
                  Today Checklist Status : <Chip label="Published" size="small" color="success" variant="outlined" />

                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }}>
                  Checked/Total : 0/16
                </Typography>
              </Grid>
            </Card>
          )
        })}

      </Container>
    </Page>
  );
}
const styles = {
  card1: {
    backgroundColor: 'inherit',
    opacity: 0.9,
    marginTop: "10px"
  },
}