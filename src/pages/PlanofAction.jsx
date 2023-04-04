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
import POA from './Components/PlanofactionFilters/POA';
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
// components
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SecurityUpdate } from '@mui/icons-material';
import moment from 'moment';
import Day1SelfShakti from './Components/PlanofactionFilters/Day1SelfShakti';
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

  const [poaData, setPoaData] = [
    {
      emp_id: '',
      team: '',
      date: '',
      for: '',
    },
  ];
  var userDetails = JSON.parse(localStorage?.getItem('userDetails'));
  var role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
  var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
  console.log(idvalue, 'iddddddd');
  const role_name = JSON.parse(localStorage?.getItem('userDetails'))?.role_name;
  const handleOpenDay1 = () => {
    setDay1(true);
  };
  const handleCloseDay1 = () => {
    setSelect('');
    setDay1(false);
  };
  const handleChange = (event, newValue) => {
    console.log('gsfdhfgdhgfhgf', newValue);
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
  }, [season, date, userId, reload]);

  const todaypoa = (async) => {
    console.log(date, '<----ergregerger');
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
    console.log(data, 'roleiddssssssssss');

    // console.log(userDetails?.id,"useidddddd")
    axios(config)
      .then(function (response) {
        console.log(response.data, 'response.dataaa');
        // let arr = []
        // response?.data?.data?.map((itm, index) => {
        //   arr.push(...itm)
        // })
        SetPoa(response?.data?.data);
        console.log(poa, '<-----------poaDatalist');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const data = localStorage?.getItem('userId');
  console.log(data, 'dataaaaaaaaaaaaaaaaaaaa');
  const user = localStorage?.getItem('userDetails');
  console.log(user, 'userrrrrrrrrrrrrrrr');
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
        console.log(response, '<-----------------planof action deleted');
        todaypoa();
        setMessage('Poa deleted successfully');
        setOpenMessage(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const changeState = () => {
    setReload(!reload);
    console.log('changeState is called ');
  };

  const handleDeleteSelected = () => {
    setName('');
    setUserId();
    todaypoa();
  };

  return (
    <div>
      {openMessage && (
        <Snackbar open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert
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
      <Typography variant="h4" style={{ margin: 2 }}>
        Plan Of Actions working
        {role == 1 || role == 3 || role == 4 || role == 12 || role == 13 || role == 11 ? (
          <PoaTeam setUserId={(e) => setUserId(e)} setName={(e) => setName(e)} />
        ) : null}
        {console.log(userId, 'useridddddddd')}
        {console.log(name, 'nameeeeeeee')}
        <br />
        {name !== '' && (
          <Stack direction="row" spacing={1}>
            <Chip
              label={name}
              onDelete={() => {
                handleDeleteSelected();
              }}
            />
          </Stack>
        )}
      </Typography>

      {name == '' && <PoaCreate changeState={changeState} />}
      <br />
      <br />

      {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
        <POA
          // onDateSubmit={onDateSubmit}
          // onSumbit={onSumbit}
          // getData={getData}
          //  clcikData={clcikData}
          isOpenFilter={openFilter}
          onOpenFilter={handleOpenFilter}
          onCloseFilter={handleCloseFilter}
        />
      </Stack> */}

      {drawerEvent && (
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {console.log(select, 'selectedvalue')}
          <PoaEvent
          changeState={changeState}
            select={select}
            useridvalue={select?.user_id}
            clcikData={clcikData}
            isOpenEvent={drawerEvent}
            onOpenEvent={handleOpenEvent}
            onCloseEvent={handleCloseEvent}
          />{' '}
        </Stack>
      )}
      {console.log(select?.user_id, 'uservalueeeeeeeee')}
      {gfDrawer && (
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <PoaGF
            batchState={batchState}
            clcikData={clcikData}
            isOpenFilterGF={gfDrawer}
            onOpenFilterGF={handleOpenGf}
            onCloseFilterGF={handleCloseGf}
          />
        </Stack>
      )}
      <Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            inputFormat="DD/MM/YYYY"
            views={['day', 'month', 'year']}
            defaultValue={date}
            value={date}
            onChange={(newValue) => {
              console.log(newValue, '<----newValuenewValue');
              setDate(newValue);
              // value=newValue
            }}
            //   setSendData({ ...sendData, date: newValue })
            // }}
            renderInput={(params) => <TextField {...params} color="common" />}
          />
        </LocalizationProvider>
      </Stack>
      {/* <Stack>
                <Day1SelfShakti 
                batchState={batchState}
                 isOpenDay1={day1}
                 onOpenDay1={handleOpenDay1}
                 onCloseDay1={handleCloseDay1} 
                 />
              </Stack> */}
      <Stack>
        <ProjectMultiDrawer
          batchState={batchState}
          clcikData={clcikData}
          isOpenFilter={openFilter}
          onOpenFilter={handleOpenFilter}
          onCloseFilter={handleCloseFilter}
        />
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
            {poa?.length !== 0 ? (
              poa?.map((item) => {
                return (
                  <>
                    <h3>{item[0]?.date}</h3>
                    {item?.length !== 0 &&
                      item?.map((itm) => {
                        return (
                          <Card
                            style={{ marginTop: 10, marginBottom: 10 }}
                            onClick={() => {
                              setSelect(itm);
                            }}
                          >
                            <TableContainer component={Paper}>
                              <Table aria-label="customized table">
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      onClick={() => {
                                        console.log(itm, '<---sadasdasdsa');
                                        setClickData(itm);
                                        if (itm?.type == '3') {
                                          handleOpenEvent();
                                        } else if (itm?.type == '1') {
                                          setClickData(itm);
                                          handleOpenFilter();
                                        } else if (itm?.type == '2') {
                                          setClickData(itm);
                                          handleOpenGf();
                                          console.log(itm, '<---handleOpenGf');
                                        }
                                      }}
                                    >
                                      {itm?.type == '2' ? (
                                        <>
                                          {itm?.time}
                                          <br />
                                          Village :{itm?.name}
                                          <br />
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Gelathi Facilitator :{itm?.emp_name}
                                        </>
                                      ) : (
                                        <>
                                          {itm?.time}
                                          <br></br> Title: {itm?.name}
                                          <br></br>
                                          {itm?.roleName}:{itm?.emp_name}
                                        </>
                                      )}

                                      {/* {(role==6 || role==13)? <>{itm?.time}<br></br> <b>Village : {itm?.name}</b> <br></br>Project name : {itm?.project_name}<br/>District : {itm?.location_name}<br/>{itm?.roleName}:{itm?.emp_name}</>: <>Time : {itm?.time}<br></br>  Title: {itm?.name}<br></br>{itm?.roleName}:{itm?.emp_name}</>} */}
                                      {itm?.status == '2' && (
                                        <span style={{ color: 'red' }}>
                                          <br />
                                          (Canceled)
                                        </span>
                                      )}
                                    </TableCell>

                                    {itm?.status !== '2' && (
                                      <TableCell component="th" scope="row" width="10px">
                                        {role == 13 || idvalue == itm?.user_id ? (
                                          <Stack direction={'row'} spacing={2}>
                                            <PoaEdit itm={itm} />
                                            {itm?.check_out == 0 ? (
                                              <IconButton
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
                                                <Iconify icon="material-symbols:cancel"></Iconify>
                                              </IconButton>
                                            ) : (
                                              <span style={{ color: 'green', fontWeight: 500 }}>
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
              <Grid>
                {' '}
                <h1 style={{ fontWeight: 900, textAlign: 'center' }}>
                  <br />
                  No Poa
                </h1>
              </Grid>
            )}
          </TabPanel>

          <TabPanel value={value} index={1}>
            {poa?.length !== 0 ? (
              poa?.map((item) => {
                return (
                  <>
                    <h3>{item[0]?.date}</h3>
                    {item?.length !== 0 &&
                      item?.map((itm) => {
                        return (
                          <Card
                            style={{ marginBottom: 30, marginTop: 10 }}
                            onClick={() => {
                              setSelect(itm);
                            }}
                          >
                            <TableContainer component={Paper}>
                              <Table aria-label="customized table">
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      onClick={() => {
                                        console.log(itm, '<---sadasdasdsa');
                                        setClickData(itm);
                                        if (itm?.type == '3') {
                                          handleOpenEvent();
                                        } else if (itm?.type == '1') {
                                          setClickData(itm);
                                          handleOpenFilter();
                                        } else if (itm?.type == '2') {
                                          setClickData(itm);
                                          handleOpenGf();
                                          console.log(itm, '<---handleOpenGf');
                                        }
                                      }}
                                    >
                                      {/* {(role==6)? <>{itm?.time}<br></br> <b>Village : {itm?.name}</b> <br></br>Project name : {itm?.project_name}<br/>District : {itm?.location_name}<br/>{itm?.roleName}:{itm?.emp_name}</>: <>Time : {itm?.time}<br></br>  Title: {itm?.name}<br></br>{itm?.roleName}:{itm?.emp_name}</>} */}
                                      {itm?.type == '2' ? (
                                        <>
                                          {itm?.time}
                                          <br />
                                          Village :{itm?.name}
                                          <br />
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Gelathi Facilitator :{itm?.emp_name}
                                        </>
                                      ) : (
                                        <>
                                          {itm?.time}
                                          <br></br> Title: {itm?.name}
                                          <br></br>
                                          {itm?.roleName}:{itm?.emp_name}
                                        </>
                                      )}
                                      {itm?.status == '2' && (
                                        <span style={{ color: 'red' }}>
                                          <br />
                                          (Canceled)
                                        </span>
                                      )}
                                    </TableCell>
                                    {itm?.status !== '2' && (
                                      <TableCell component="th" scope="row" width="10px">
                                        {role == 13 || idvalue == itm?.user_id ? (
                                          <Stack direction={'row'} spacing={2}>
                                            <PoaEdit itm={itm} />
                                            {itm?.check_out == 0 ? (
                                              <IconButton
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
                                                <Iconify icon="material-symbols:cancel"></Iconify>
                                              </IconButton>
                                            ) : (
                                              <span style={{ color: 'green', fontWeight: 500 }}>
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
              <Grid>
                {' '}
                <h1 style={{ fontWeight: 900, textAlign: 'center' }}>
                  <br />
                  No Poa
                </h1>
              </Grid>
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {poa?.length !== 0 ? (
              poa?.map((item) => {
                return (
                  <>
                    <h3>{item[0]?.date}</h3>
                    {item?.length !== 0 &&
                      item?.map((itm) => {
                        return (
                          <Card
                            style={{ marginBottom: 30, marginTop: 10 }}
                            onClick={() => {
                              setSelect(itm);
                            }}
                          >
                            <TableContainer component={Paper}>
                              <Table aria-label="customized table">
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      onClick={() => {
                                        console.log(itm, '<---sadasdasdsa');
                                        setClickData(itm);
                                        if (itm?.type == '3') {
                                          handleOpenEvent();
                                        } else if (itm?.type == '1') {
                                          setClickData(itm);
                                          handleOpenFilter();
                                        } else if (itm?.type == '2') {
                                          setClickData(itm);
                                          handleOpenGf();
                                          console.log(itm, '<---handleOpenGf');
                                        }
                                      }}
                                    >
                                      {/* {(role==6)? <>{itm?.time}<br></br> <b>Village : {itm?.name}</b> <br></br>Project name : {itm?.project_name}<br/>District : {itm?.location_name}<br/>{itm?.roleName}:{itm?.emp_name}</>: <>Time : {itm?.time}<br></br>  Title: {itm?.name}<br></br>{itm?.roleName}:{itm?.emp_name}</>} */}

                                      {itm?.type == '2' ? (
                                        <>
                                          {itm?.time}
                                          <br />
                                          Village :{itm?.name}
                                          <br />
                                          Project : {itm?.project_name}
                                          <br />
                                          District : {itm?.location_name}
                                          <br />
                                          Gelathi Facilitator :{itm?.emp_name}
                                        </>
                                      ) : (
                                        <>
                                          {itm?.time}
                                          <br></br> Title: {itm?.name}
                                          <br></br>
                                          {itm?.roleName}:{itm?.emp_name}
                                        </>
                                      )}
                                      {console.log(idvalue, 'hyyyyyyyyy')}

                                      {itm?.status == '2' && (
                                        <span style={{ color: 'red' }}>
                                          <br />
                                          (Canceled)
                                        </span>
                                      )}
                                    </TableCell>
                                    {itm?.status !== '2' && (
                                      <TableCell component="th" scope="row" width="10px">
                                        {role == 13 || idvalue == itm?.user_id ? (
                                          <Stack direction={'row'} spacing={2}>
                                            <PoaEdit itm={itm} />
                                            {itm?.check_out == 0 ? (
                                              <IconButton
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
                                                <Iconify icon="material-symbols:cancel"></Iconify>
                                              </IconButton>
                                            ) : (
                                              <span style={{ color: 'green', fontWeight: 500 }}>
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
              <Grid>
                <h1 style={{ fontWeight: 900, textAlign: 'center' }}>
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
