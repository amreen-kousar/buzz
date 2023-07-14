import { useEffect, useState, forwardRef, useRef } from 'react';
import axios from 'axios';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import account from '.././_mock/account';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/Iconify';
import PropTypes from 'prop-types';
import {
  Link,
  Container,
  Stack,
  Typography,
  Box,
  Button,
  TextField,
  CardContent,
  Card,
  Avatar,
  Grid,
  Chip,
  IconButton,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../components/Page';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PoaEdit from './Components/PlanofactionFilters/PoaEdit';
import PoaCreate from './Components/PlanofactionFilters/PoaCreate';
import PoaTeam from '././Components/PlanofactionFilters/PoaTeam';
import PoaEvent from '././Components/PlanofactionFilters/PoaEvent';
import Label from 'src/components/Label';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SecurityUpdate } from '@mui/icons-material';
import moment from 'moment';
import ProjectMultiDrawer from '../pages/Components/ProjectMultiDrawer';
import PoaGF from './Components/PlanofactionFilters/PoaGF';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function PlanofAction() {
  const[localData,setLocalStoragedata]=useState([]);
  const [value, setValue] = React.useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [drawerEvent, SetDrawerEvent] = useState(false);
  const [gfDrawer, SetGFDrawer] = useState(false);
  const [poa, SetPoa] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);
  const [day1, setDay1] = useState(false);
  const [select, setSelect] = useState();
  const [season, setSeason] = useState(0);
  const [date, setDate] = useState(new Date());
  const [userId, setUserId] = useState();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [batchState, setBatchState] = useState();
  const [clcikData, setClickData] = useState();
  const [reload, setReload] = useState(false);
  const [isOnline, setOnline] = useState(true);
  const [poaData, setPoaData] = [
    {
      emp_id: '',
      team: '',
      date: '',
      for: '',
    },
  ];
  var userDetails = JSON.parse(sessionStorage?.getItem('userDetails'));
  var role = JSON.parse(sessionStorage?.getItem('userDetails'))?.role;
  var idvalue = JSON.parse(sessionStorage?.getItem('userDetails'))?.id;
  const role_name = JSON.parse(sessionStorage?.getItem('userDetails'))?.role_name;


  const handleChange = (event, newValue) => {
    setSeason(newValue);
    setValue(newValue);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const handleOpenEvent = () => {
    SetDrawerEvent(true);
  };
  const handleCloseEvent = () => {
    setSelect('');
    SetDrawerEvent(false);
  };
  const handleOpenGf = () => {
    SetGFDrawer(true);
  };
  const handleCloseGf = () => {
    setSelect('');
    SetGFDrawer(false);
  };
  useEffect(() => {
    todaypoa();
  }, [season, date, userId, reload,!gfDrawer,isOnline]);

  const todaypoa = (async) => {
    var data = JSON.stringify({
      emp_id: userId ? userId : userDetails?.id,
      team: '',
      date: moment(date?.$d)?.format('YYYY-MM-DD'),
      for: season,
    });
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getPoa.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        localStorage.setItem('poadata',JSON.stringify(response?.data?.data))
        SetPoa(response?.data?.data);
      })
      .catch(function (error) {
        let localPoa=JSON.parse(localStorage.getItem('poadata'))
        SetPoa(localPoa)
        console.log(error,"data assigned",localPoa);
      });
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const data = sessionStorage?.getItem('userId');
  const user = sessionStorage?.getItem('userDetails');
  const { pathname } = useLocation();
  const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: theme.palette.grey[500_12],
  }));
  const setDefaut = () => {
    setUserId(651);
  };
  const handleDelete = (itm) => {
    var data = JSON.stringify({
      poa_id: itm?.id,
    });
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/updateEventCancel.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        todaypoa();
        setMessage('Poa deleted successfully');
        setOpenMessage(true);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  const changeState = () => {
    setReload(!reload);
  };
  const handleDeleteSelected = () => {
    setName('');
    setUserId();
    todaypoa();
  };


  // On initization set the isOnline state.
  useEffect(()=>{
      setOnline(navigator.onLine)
  },[])

  useEffect(()=>{
     apiCall()
 VyaparApicall()

},[isOnline])
const apiCall = async() =>{
  const data = localStorage?.getItem("green")
  const newData =JSON?.parse(data)
  console.log(JSON?.parse(data),"<--ertyui",[0])
  for(let i=0; i<newData?.length;i++){
    console.log(i,"dsfdd")
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/addGreenBaselineSurvey.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data:newData[i],
    };
    const res = await axios(config)
    console.log(res?.data,i,"<--result")
  }
 
 axios(config)?.then(itm=>{
   console.log("qwerty",itm)
 })
 .catch(err=>{
   console.log(err,"<--GELATHIHR")
 })
  console.log(JSON?.parse(data),"<-wertyui")
}

const VyaparApicall = async()=>{
  const data = localStorage?.getItem('vyapar');
  const newData =JSON?.parse(data)
  console.log(JSON?.parse(data),"<--ertyui",[0])
  for(let i=0; i<newData?.length;i++){
    console.log(i,"ivalueeeeeee")
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appGo/addBuzzVyapar',
      headers: {
        'Content-Type': 'application/json',
      },
      data:newData[i],
    };
    const res = await axios(config)
    console.log(res?.data,i,"<--result")
  }
  
  localStorage.removeItem('vyapar')
 
 axios(config)?.then(itm=>{
   console.log("qwerty",itm)
 })
 .catch(err=>{
   console.log(err,"<--GELATHIHR")
 })

}


  // event listeners to update the state 
  window.addEventListener('online', () => {
      setOnline(true)
  });

  window.addEventListener('offline', () => {
      setOnline(false)
  });

  
  

  return (
    <div>
      {!isOnline&&
      <h1> you are offline</h1>}
      {openMessage && (
        <Snackbar id="poa-snackbar" open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert id="alert-open-message"
            onClose={() => {
              setOpenMessage(false);
            }}
            severity="success"
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
        
      )}
      <br />
      <Typography id="plan-of-actions" variant="h4" style={{ margin: 2 }}>
        Plan Of Actions 
        {role == 1 || role == 3 || role == 4 || role == 12 || role == 13 || role == 11 ? (
          <PoaTeam setUserId={(e) => setUserId(e)} setName={(e) => setName(e)}  />
        ) : null}
        <br />
        {name !== '' && (
          <Stack id="delete-selected" direction="row" spacing={1}>
            <Chip
              id="name-delete-selected"
              label={name }
              onDelete={() => {
                handleDeleteSelected();
              }}
            />
          </Stack>
        )}
      </Typography>
    {(userId)?<PoaCreate changeState={changeState} userId={userId}/>:<PoaCreate changeState={changeState}/>}
      <br />
      <br />
      
      {drawerEvent && (
        <Stack id="poa-event-stack" direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <PoaEvent id="poa-event"
          changeState={changeState}
            select={select}
            useridvalue={select?.user_id}
            clcikData={clcikData}
            isOpenEvent={drawerEvent}
            onOpenEvent={handleOpenEvent}
            onCloseEvent={handleCloseEvent}
            clickedItemData = {clcikData}
          />{' '}
        </Stack>
      )}
      {gfDrawer && (
        <Stack id="poagf-stack" direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <PoaGF
            batchState={batchState}
            clcikData={clcikData}
            isOpenFilterGF={gfDrawer}
            onOpenFilterGF={handleOpenGf}
            onCloseFilterGF={handleCloseGf}
          />
        </Stack>
      )}
      <Stack id="date-picker-stack">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id="date"
            label="Date"
            inputFormat="DD/MM/YYYY"
            views={['day', 'month', 'year']}
            defaultValue={date}
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} color="common" />}
          />
        </LocalizationProvider>
      </Stack>
      
      <Stack id="project-multi-drawer-stack">
        <ProjectMultiDrawer
          id="poa-project-multi-drawer"
          batchState={batchState}
          clcikData={clcikData}
          isOpenFilter={openFilter}
          onOpenFilter={handleOpenFilter}
          onCloseFilter={handleCloseFilter}
        />
      </Stack>
      <Stack id="tabs-stack" direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
        <Box id="tabs-box" sx={{ width: '100%' }}>
          <Box id="tabs-example" sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              id="basic-tabs-example"
              variant="fullWidth"
              value={value}
              indicatorColor="warning"
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                id="today"
                sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  color: 'black',
                }}
                style={
                  value == 0
                    ? {
                        borderBottom: '3px solid #ed6c02',
                        color: '#ed6c02',
                      }
                    : null
                }
                label="Today"
                {...a11yProps(0)}
              />
              <Tab
                id="week"
                sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  color: 'black',
                }}
                style={
                  value == 1
                    ? {
                        borderBottom: '3px solid #ed6c02',
                        color: '#ed6c02',
                      }
                    : null
                }
                label="Week"
                {...a11yProps(1)}
              />
              <Tab
                id="month"
                sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  color: 'black',
                }}
                style={
                  value == 2
                    ? {
                        borderBottom: '3px solid #ed6c02',
                        color: '#ed6c02',
                      }
                    : null
                }
                label="Month"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel id="tab-panel-1" value={value} index={0}>
          {poa?.length !== 0 ? (
           poa?.map((item) => {
                return (
                  <>
                    <h3>{item[0]?.date}</h3>
                    {item?.length !== 0 &&
                      item?.map((itm) => {
                        return (
                          <Card id="select-item-card"
                            style={{ marginTop: 10, marginBottom: 10 }}
                            onClick={() => {
                              setSelect(itm);
                            }}
                          >
                            <TableContainer id="poa-table-container" component={Paper}>
                              <Table id="customized-table" aria-label="customized table">
                                <TableBody id="poa-table-body">
                                  <TableRow id="poa-table-row">
                                    <TableCell id="table-cell" style={{    width: "69%"}}
                                      component="th"
                                      scope="row"
                                      onClick={() => {
                                        
                                        setClickData(itm);
                                        if (itm?.type == '3') {
                                          handleOpenEvent();
                                        } else if (itm?.type == '1') {
                                          setClickData(itm);
                                          handleOpenFilter();
                                        } else if (itm?.type == '2') {
                                          setClickData(itm);
                                          handleOpenGf();
                                        }
                                      }}
                                    >
                                      {(itm?.type == '2') ?
                                        <>
                                       
                                        {itm?.time}
                                         <h4>Village :{itm?.name}</h4> 
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Gelathi Facilitator :{itm?.emp_name}
                                          <br/>
                                          
                                        </>
                                       :(itm?.type=='1')?
                                        <>
                                          {itm?.time}
                                         <h4>Village :{itm?.name}</h4> 
                                         
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Trainer :{itm?.emp_name}
                                         <br/>
                                        </>
                                      : <>
                                          {itm?.time}
                                         <h4> Title: {itm?.name}</h4> 
                                          {itm?.roleName}:{itm?.emp_name}
                                          <br />
                                        </>
                                      }
                                       {(itm?.type=='2' && itm?.status=='1' || itm?.type=='3' && itm?.status=='1') ? 
                                        <span style={{ color: 'green' }}>
                                           (Rescheduled)
                                          
                                        </span>
                                      :(itm?.status=='2')
                                      ? <span style={{ color: 'red' }}>
                                      
                                      (Canceled)
                                    </span>:null}
                                    </TableCell>
                                    {itm?.status !== '2' && (
                                      <TableCell id="table-cell-poa-edit" component="th" scope="row" width="10px">
                                       {(itm?.type=='3') && (role == 13 || idvalue == itm?.user_id) ? (
                                          <Stack direction={'row'} spacing={2}>
                                            <PoaEdit itm={itm} changeState={changeState}/>
                                            {itm?.check_out == 0 ? (
                                              <IconButton id="icon-button-cancel"
                                                onClick={() => {
                                                  handleDelete(itm);
                                                }}
                                                style={{ color: '#ed6c02' }}
                                                sx={{
                                                  '&:hover': {
                                                    backgroundColor: '#ffd796',
                                                    borderColor: '#ed6c02',
                                                  },
                                                  borderColor: '#ed6c02',
                                                  color: '#ed6c02',
                                                }}
                                                variant="outlined"
                                              >
                                                <Iconify id="cancel-icon-button" icon="material-symbols:cancel"></Iconify>
                                              </IconButton>
                                            ) : (
                                              <span id="event-completd" style={{ color: 'green', fontWeight: 500 }}>
                                                (Event&nbsp;Completed )
                                              </span>
                                            )}
                                          </Stack>
                                        ) : null}
                                      </TableCell>
                                    )}
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Card>
                        );
                      })}
                  </>
                );
              })
            ) : (
              <Grid id="no-poa-grid">
                {' '}
                <h1 id="no-poa" style={{ fontWeight: 900, textAlign: 'center' }}>
                  <br />
                  No Poa
                </h1>
              </Grid>
            )}
          </TabPanel>
          <TabPanel id="tab-panel-plan-of-action" value={value} index={1}>
          {poa?.length !== 0 ? (
               poa?.map((item) => {
                return (
                  <>
                    <h3 id="item-date">{item[0]?.date}</h3>
                    {item?.length !== 0 &&
                      item?.map((itm) => {
                        return (
                          <Card id="card-set-select-item"
                            style={{ marginBottom: 30, marginTop: 10 }}
                            onClick={() => {
                              setSelect(itm);
                            }}
                          >
                            <TableContainer id="table-container-paper-component" component={Paper}>
                              <Table id="table-plan-of-action" aria-label="customized table">
                                <TableBody id="table-body-poa">
                                  <TableRow id="table-row-poa">
                                    <TableCell id="table-cell-plan-of-action"
                                      component="th"
                                      scope="row"
                                      onClick={() => {
                                        setClickData(itm);
                                        if (itm?.type == '3') {
                                          handleOpenEvent();
                                        } else if (itm?.type == '1') {
                                          setClickData(itm);
                                          handleOpenFilter();
                                        } else if (itm?.type == '2') {
                                          setClickData(itm);
                                          handleOpenGf();
                                        }
                                      }}
                                    >
                                      {(itm?.type == '2') ?
                                        <>
                                        {itm?.time}
                                         
                                         <h4>Village :{itm?.name}</h4> 
                                         
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Gelathi Facilitator :{itm?.emp_name}
                                          <br/>
                                          
                                        </>
                                       :(itm?.type=='1')?
                                        <>
                                         
                                          
                                          {itm?.time}
                                          
                                         
                                         <h4>Village :{itm?.name}</h4> 
                                         
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Trainer :{itm?.emp_name}
                                         <br/>
                                        </>
                                      :
                                       
                                      
                                        <>
                                        
                                          
                                          {itm?.time}
                                         
                                         <h4> Title: {itm?.name}</h4> 
                                         
                                          {itm?.roleName}:{itm?.emp_name}
                                          <br />
                                        
                                          
                                        </>
                                      }
                                       {(itm?.type=='2' && itm?.status=='1' || itm?.type=='3' && itm?.status=='1') ? 
                                        <span style={{ color: 'green' }}>
                                           (Rescheduled)
                                          
                                        </span>
                                      :(itm?.status=='2')
                                      ? <span style={{ color: 'red' }}>
                                      
                                      (Canceled)
                                    </span>:null}
                                    </TableCell>
                                    {itm?.status !== '2' && (
                                      <TableCell id="table-cell-edit-poa" component="th" scope="row" width="10px">
                                       {(itm?.type=='3') && (role == 13 || idvalue == itm?.user_id) ? (
                                          <Stack direction={'row'} spacing={2}>
                                            <PoaEdit itm={itm} changeState={changeState}/>
                                            {itm?.check_out == 0 ? (
                                              <IconButton id="cancel-iconbutton"
                                                onClick={() => {
                                                  handleDelete(itm);
                                                }}
                                                style={{ color: '#ed6c02' }}
                                                sx={{
                                                  '&:hover': {
                                                    backgroundColor: '#ffd796',
                                                    borderColor: '#ed6c02',
                                                  },
                                                  borderColor: '#ed6c02',
                                                  color: '#ed6c02',
                                                }}
                                                variant="outlined"
                                              >
                                                <Iconify id="material-symbol-cancel" icon="material-symbols:cancel"></Iconify>
                                              </IconButton>
                                            ) : (
                                              <span id="event-compltd" style={{ color: 'green', fontWeight: 500 }}>
                                                (Event&nbsp;Completed)
                                              </span>
                                            )}
                                          </Stack>
                                        ) : null}
                                      </TableCell>
                                    )}
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Card>
                        );
                      })}
                  </>
                );
              })
            ) : (
              <Grid id="grid-no-poa">
                {' '}
                <h1 id="no-poa-h1" style={{ fontWeight: 900, textAlign: 'center' }}>
                  <br />
                  No Poa
                </h1>
              </Grid>
            )}
          </TabPanel>
          <TabPanel id="tab-panel-poa" value={value} index={2}>
          {poa?.length !== 0 ? (
               poa?.map((item) => {
                return (
                  <>
                    <h3>{item[0]?.date}</h3>
                    {item?.length !== 0 &&
                      item?.map((itm) => {
                        return (
                          <Card id="poa-card"
                            style={{ marginBottom: 30, marginTop: 10 }}
                            onClick={() => {
                              setSelect(itm);
                            }}
                          >
                            <TableContainer id="table-container" component={Paper}>
                              <Table id="customized-table-poa" aria-label="customized table">
                                <TableBody id="customized-table-body">
                                  <TableRow id="row-customized-table">
                                    <TableCell id="table-cell-customized"
                                      component="th"
                                      scope="row"
                                      onClick={() => {
                                        setClickData(itm);
                                        if (itm?.type == '3') {
                                          handleOpenEvent();
                                        } else if (itm?.type == '1') {
                                          setClickData(itm);
                                          handleOpenFilter();
                                        } else if (itm?.type == '2') {
                                          setClickData(itm);
                                          handleOpenGf();
                                        }
                                      }}
                                    >
                                      {(itm?.type == '2') ?
                                        <>
                                       
                                        {itm?.time}
                                         
                                         <h4>Village :{itm?.name}</h4> 
                                         
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Gelathi Facilitator :{itm?.emp_name}
                                          <br/>
                                          
                                        </>
                                       :(itm?.type=='1')?
                                        <>
                                          {itm?.time}
                                         <h4>Village :{itm?.name}</h4> 
                                         
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Trainer :{itm?.emp_name}
                                         <br/>
                                        </>
                                      :
                                        <>
                                          {itm?.time}
                                         
                                         <h4> Title: {itm?.name}</h4> 
                                         
                                          {itm?.roleName}:{itm?.emp_name}
                                          <br />
                                        </>
                                      }
                                     {(itm?.type=='2' && itm?.status=='1' || itm?.type=='3' && itm?.status=='1') ? 
                                      <span style={{ color: 'green' }}>
                                         (Rescheduled)
                                      </span>
                                    :(itm?.status=='2')
                                    ? <span style={{ color: 'red' }}>
                                    (Canceled)
                                  </span>:null}
                                    </TableCell>
                                    {itm?.status !== '2' && (
                                      <TableCell id="icon-button-table" component="th" scope="row" width="10px">
                                        {(itm?.type=='3') && (role == 13 || idvalue == itm?.user_id)  ? (
                                          <Stack direction={'row'} spacing={2}>
                                            <PoaEdit itm={itm} changeState={changeState}/>
                                            {itm?.check_out == 0 ? (
                                              <IconButton id="icon-button-cncl-btn"
                                                onClick={() => {
                                                  handleDelete(itm);
                                                }}
                                                style={{ color: '#ed6c02' }}
                                                sx={{
                                                  '&:hover': {
                                                    backgroundColor: '#ffd796',
                                                    borderColor: '#ed6c02',
                                                  },
                                                  borderColor: '#ed6c02',
                                                  color: '#ed6c02',
                                                }}
                                                variant="outlined"
                                              >
                                                <Iconify id="mui-symbols-cncl" icon="material-symbols:cancel"></Iconify>
                                              </IconButton>
                                            ) : (
                                              <span id="evnt-cmpltd" style={{ color: 'green', fontWeight: 500 }}>
                                                (Event&nbsp;Completed)
                                              </span>
                                            )}
                                          </Stack>
                                        ) : null}
                                      </TableCell>
                                    )}
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Card>
                        );
                      })}
                  </>
                );
              })
            ) : (
              <Grid id="plan-of=actn-no-poa-grid">
                <h1 id="no-poa-heading" style={{ fontWeight: 900, textAlign: 'center' }}>
                  <br />
                  No Poa
                </h1>
              </Grid>
            )}
          </TabPanel>
        </Box>
      </Stack>
    </div>
  );
}