import { useEffect, useState,forwardRef, useRef  } from 'react';
import axios from 'axios';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import account from '.././_mock/account';
import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import {Link, Container, Stack, Typography, Box, Button, TextField, CardContent, Card,Avatar} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../components/Page';
import POA from './Components/PlanofactionFilters/POA';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PoaEdit from './Components/PlanofactionFilters/PoaEdit';
import PoaCreate from './Components/PlanofactionFilters/PoaCreate';
import PoaTeam from '././Components/PlanofactionFilters/PoaTeam';
import PoaEvent from '././Components/PlanofactionFilters/PoaEvent'
// components
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
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
  const [value, setValue] = React.useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [drawerEvent,SetDrawerEvent] = useState(false);
  const [poa, SetPoa] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);
  const [select,setSelect] = useState();
  const [season,setSeason] = useState(0)
  const [poaData,setPoaData] =[{
    emp_id: "",
    team: "",
    date: "",
    for: ""
  }]
  const handleChange = (event, newValue) => {
    console.log("gsfdhfgdhgfhgf",newValue)
    setSeason(newValue)
    setValue(newValue);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleOpenEvent = () => {
    SetDrawerEvent(true);
  };
  const handleCloseEvent = () => {
    setSelect("")
    SetDrawerEvent(false);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  useEffect(() => {
    todaypoa();
  }, [season]);
  const todaypoa = (async) => {
    var data = JSON.stringify({
      "emp_id": 558,
      "team": "",
      "date": "",
      "for": season
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getTodayPoa.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        SetPoa(response.data?.data);
        console.log(response.data, '<-----------poaDatalist');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const data = localStorage?.getItem('userId')
  const { pathname } = useLocation();
  const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: theme.palette.grey[500_12],
  }));
  return (
    <Page title="Dashboard: Products">
      <Container>
      <Snackbar open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
           created
          </Alert>
        </Snackbar>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Plan Of Actions
          <PoaTeam />
          {console.log(account.displayName, "<--yghuj")}
      <Box sx={{ mb: 5, mx: 2.5 }} backgroundColor="#ed6c02">
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" color='#ffffff' >
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>
          {/* <Button
            style={{ float: 'right', color: '#ed6c02' }}
            sx={{
              ':hover': {
                bgcolor: '#ffd796', // theme.palette.primary.main
                color: '#ed6c02',
              },
            }}
            onClick={() => {
              handleOpenFilter();
            }}
          >
            Filter
          </Button> */}
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mt: -9 }}>
        <h1>jnjn</h1>
        </Stack> */}
        <Stack>
          <PoaCreate setSucess={()=>{setOpenMessage(true)}} />
        </Stack>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <POA
            // onDateSubmit={onDateSubmit}
            // onSumbit={onSumbit}
            // getData={getData}
            //  clcikData={clcikData}
            isOpenFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
        </Stack>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <PoaEvent
          select={select}
            isOpenEvent={drawerEvent}
            onOpenEvent={handleOpenEvent}
            onCloseEvent={handleCloseEvent}
          />
        </Stack>
        <Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              // value={sendData?.date}
              // onChange={(newValue) => {
              //   setSendData({ ...sendData, date: newValue })
              // }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Stack>

        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                variant="fullWidth"
                value={value}
                indicatorColor="warning"
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
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

            <TabPanel value={value} index={0}>
             
              {
                poa?.map((itm) =>{
                   {console.log(itm,'<-------------itmitmitmitmitmitm')}
                  return (
              <Card style={{marginTop:35}}  onClick={() => {
                setSelect(itm)
              handleOpenEvent();
            }}>
                <CardContent>
                   <Stack>
                   {itm?.name}
                    </Stack>
                   <Stack>
                   {itm?.roleName}
                   </Stack>
                   <Stack>
                   {itm?.emp_name}
                   
</Stack>
                 <Stack direction={'row'} spacing={5} mt={2}>
                  <PoaEdit />
                  <Button>Delete</Button>
                 </Stack>
                </CardContent>
              </Card>
              
              ) 
                })
              } 
            </TabPanel>

            <TabPanel value={value} index={1}>
            {
                poa?.map((itm) =>{
                   {console.log(itm,'<-------------itmitmitmitmitmitm')}
                  return (
              <Card onClick={() => {
                setSelect(itm)
              handleOpenEvent();
            }}>
                <CardContent>
                  Title: {itm?.name}
                  "roleName": {itm?.roleName}, "emp_name": {itm?.emp_name},
                  <PoaEdit />
                  <Button>Delete</Button>
                </CardContent>
              </Card>
              
              ) 
                })
              } 
            </TabPanel>
            <TabPanel value={value} index={2}>
            {
                poa?.map((itm) =>{
                   {console.log(itm,'<-------------itmitmitmitmitmitm')}
                  return (
              <Card onClick={() => {
                setSelect(itm)
              handleOpenEvent();
            }}>
                <CardContent>
                  Title: {itm?.name}
                  "roleName": {itm?.roleName}, "emp_name": {itm?.emp_name},
                  <PoaEdit />
                  <Button>Delete</Button>
                </CardContent>
              </Card>
              
              ) 
                })
              } 
            </TabPanel>
          </Box>
        </Stack>
        {/* </Stack> */}
      </Container>
    </Page>
  );
}
