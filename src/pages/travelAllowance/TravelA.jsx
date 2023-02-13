import { useEffect, useState, forwardRef } from 'react';
import { useForm } from "react-hook-form";
import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Stack, Typography, Box, Button, TextField, Grid, Snackbar, Card, CardActionArea } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../../components/Page';
import TravelDialog from '../Components/DashboardFilters/TravelDialog'
import moment from 'moment';
import Edittraveldialog from './Editta';
import Iconify from 'src/components/Iconify';
import Team from './Team';
import Own from './Own'
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TravelA() {
  const [value, setValue] = React.useState(0);
  const data = localStorage?.getItem('userId')
  var [dateValue, setDatevalue] = useState(new Date().toISOString().split('T')[0])
  const image = ["tykml", "exrdcftvbgyhnuj"]
  const [drawerEvent, SetDrawerEvent] = useState(false);
  //const [image, setImage] = React.useState(['data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==', 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==']);
  const [viewImage, setViewImage] = React.useState(false);
  const [listdata, setListData] = React.useState()
  const [openMessage, setOpenMessage] = React.useState(false);
  const [message, setMessage] = useState(false)
  const [editData, setEditData] = useState(null)
  const [openFilter, setOpenFilter] = useState(false);
  const [clcikData, setClickData] = useState()
  const [teamMembersData, setTeamMembersData] = useState([])
  const [mainValue, setMainValue] = useState(0)




  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const handleOpenFilter = (itm) => {
    // itm.klmtr = +klmtr;
    setEditData(itm)
    console.log(editData)
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const getDateValue = (e) => {
    setDatevalue(e)
  }

  const returnDateValue = () => {
    return dateValue
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Page title="Dashboard: Products">
      <Container>


        <Typography variant="h4" sx={{ mb: 5 }}>
          Travel Allowance
          {/* <Button style={{ float: "right" }}>Filters</Button> */}
        </Typography>
        <Snackbar open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs variant="fullWidth" indicatorColor='warning'>

            <Tab

              onClick={() => { setMainValue(0) }}
              sx={{
                ':hover': {
                  bgcolor: '#ffd796', // theme.palette.primary.main
                  color: '#ff7424',
                },

                color: 'black',
              }} label="OWN" style={mainValue == 0 ? {
                borderBottom: '3px solid #ff7424',
                color: "#ff7424",
              } : null} />



            <Tab
              onClick={() => { setMainValue(1) }}
              sx={{
                ':hover': {
                  bgcolor: '#ffd796', // theme.palette.primary.main
                  color: '#ff7424',
                },

                color: 'black',
              }} label="TEAM" style={mainValue == 1 ? {
                borderBottom: '3px solid #ff7424',
                color: "#ff7424",
              } : null} />



          </Tabs>
        </Box>
        <br />
        <TextField id="outlined-basic" type="date" defaultValue={dateValue}
          fullWidth
          onChange={(e) => { getDateValue(e?.target?.value) }} label="Select Range" variant="outlined" InputLabelProps={{
            shrink: true,
          }} />
           {/* <Stack style={{ marginTop: 20 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    
                    inputFormat="YYYY-MM-DD"
                    views={["year", "month", "day"]}
                    // label="Date"
                    value={getDateValue?.date}
                    onChange={(newValue) => {
                      setSendData({ ...sendData, date: newValue })
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Stack> */}


        <TabPanel value={mainValue} index={1}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <Box sx={{ width: '100%' }}>
              <Team returnDateValue={returnDateValue} />
            </Box>
          </Stack>
        </TabPanel>

        <TabPanel value={mainValue} index={0}>
          <Own returnDateValue={returnDateValue} />
        </TabPanel>


        <br></br>

        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <TravelDialog viewMessage={(text) => {
            setMessage(text)
            setOpenMessage(true)
            // list()
          }} />
        </Stack>

        
        {/* </Stack> */}

      </Container ></Page >
  );
}