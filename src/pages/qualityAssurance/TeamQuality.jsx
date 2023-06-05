import { useEffect, useState, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Snackbar,
  Card,
  CardActionArea,
  Checkbox,
  Dialog,
  DialogContentText,
  Toolbar,
  IconButton,
  DialogContent,
  CircularProgress,
} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../../components/Page';

import moment from 'moment';

import Iconify from 'src/components/Iconify';
import { oldbaseURL } from 'src/utils/api';
import SingleQulityDashboard from './SingleQulityDashboard';
// components
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

export default function TeamQuality({reload}) {
  const [value, setValue] = React.useState(0);
  const data = localStorage?.getItem('userId');
  var [dateValue, setDatevalue] = useState(new Date().toISOString().split('T')[0]);
  const [drawerEvent, SetDrawerEvent] = useState(false);
  const [selectedTeamTA, setselectedTeamTA] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const [openDetailsFilter, setOpenDetailsFilter] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [teamMembersData, setTeamMembersData] = useState([]);
  const [mainValue, setMainValue] = useState(0);
  const [filterData, setFilterData] = useState(null);
  const [teamTADataIDs, setteamTADataIDs] = useState(null);
  const [teamTAData, setTeamMembersTAData] = useState([]);
  const [checkedData, setCheckedData] = useState([]);
  var [selectedAll, setSelectedAll] = useState(false);
  const [comments, setComments] = useState('');
  const [approve, setapprove] = useState('');
  const [statusValue, setStatus] = useState([]);
  const [reject, setreject] = useState('');
  const [verifylist, setverifylist] = useState('');

  const [open, setOpen] = useState(false);
  var [singlePersonFormDetail, setSinglePersonFormDetail] = useState('');

  var [todayPoa, setTodayPoa] = useState([]);
  // console.log(props?.componentname, 'componenttttttttt');
  useEffect(() => {
    getPOA();
  }, [reload]);

  useEffect(() => {
    getPOA();
  }, [])
  var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
  var role =JSON.parse(localStorage.getItem('userDetails'))?.role

  console.log(userid , "useridinteam")
  const getPOA = () => {
    var data = JSON.stringify({
      emp_id: userid,
      team: '',
    });

    var config = {
      method: 'post',
      url: oldbaseURL + 'getMyTeam.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data, 'in team ');
        todayPoa = response.data.data;
        console.log(todayPoa, 'data in state ');
        setTodayPoa(todayPoa);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const singleItemHandler = (itm) => {
    console.log(itm, 'itm in method');
    singlePersonFormDetail = itm;
    setSinglePersonFormDetail(singlePersonFormDetail);
    setOpen(true);
  };

  return (

    todayPoa == "" ?
    <div style={{marginTop:"20%" , marginLeft:"40%"}}>
<CircularProgress />
</div>
:
    <div>
      {todayPoa &&
        todayPoa?.map((itm) => {
          {
            console.log('iamworking');
          }
          return (
            <>
              <Card
                id="card-own-ta-amount"
                style={{
                  margin: '20px',
                  borderRadius: '5px',
                  backgroundColor: '#f7f7f7',
                  cursor: 'pointer',
                  padding: '1rem',
                }}
              >
                <Grid id="grid-own-ta-amount" container spacing={2}>
                  <Grid
                    id="grid-own-open-filter"
                    onClick={() => {
                     
                      // alert('work in Progress');
                    }}
                    item
                    xs={8}
                  >
                    <b cursor="pointer" style={{ color: 'blue' }}>
                      {itm?.name}
                    </b>
                    <br></br>
                    {/* <Typography id="typography-ta-amount" variant="body" gutterBottom > <b>{itm?.telephone}</b></Typography>
                     */}
                  </Grid>
                  <Grid item xs={4}>
                    <Iconify
                      id="uiicons-cross"
                      onClick={() => {
                        // handleDeleteTA(itm);
                        // alert("work in progress")
                        singleItemHandler( itm )
                      }}
                      style={{ float: 'right', marginTop: 5, marginRight: 10, fontSize: 30, color: 'gray' }}
                      icon="mdi:form-outline"
                    ></Iconify>
                    {/* <Iconify
                      id="icon-outline-access-time"
                      style={{ float: 'right', marginTop: 5, marginRight: 30, fontSize: 30, color: '#303030' }}
                      icon="ic:outline-access-time"
                    ></Iconify> */}

                    {console.log(itm, 'itm in manpo')}
                  </Grid>
                </Grid>
              </Card>
            </>
          );
        })}

      {/* <Select fullWidth variant='standard' color="common"
          labelId="Today POA"
          id="demo-simple-select"
          label="Today POA"
          
      
        >
            <MenuItem value="" style={{ backgroundColor: 'gray' }}> <em>Select POA</em></MenuItem>
              {
       todayPoa && todayPoa?.map((itm,index)=>{
            return (
                
                <MenuItem value={index}>{itm?.full_name} - {itm?.name}</MenuItem>
            )
        })
      }
         
        </Select>  */}
      <SingleQulityDashboard openSingleQulityDashboard={open} handleClose={handleClose} item={singlePersonFormDetail} />
    </div>
  );
}
