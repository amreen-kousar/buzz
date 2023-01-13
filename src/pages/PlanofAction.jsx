import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Stack, Typography,Box,Button,TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../components/Page';
import POA from './Components/PlanofactionFilters/POA';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Input from 'src/theme/overrides/Input';
import Label from 'src/components/Label';
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

export default function PlanofAction() {
  const [value, setValue] = React.useState([null,null]);
  const [openFilter, setOpenFilter] = useState(false); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const getData = (itm, i) => {
    setSelected({
      id: i,
      name: itm?.name
    })
    apiHit(itm, i)
    handleCloseFilter()
    console.log("sdfgsdfdfssd", itm, i)
  }
  return (
    <Page title="Dashboard: Products">
    <Container sx={{color:"#ed6c02"}}>
    {/* <Button style={{float:"right",color:"#ed6c02"}}
      sx={{
                          ':hover': {
                            bgcolor: '#ffd796', // theme.palette.primary.main
                            color: '#ed6c02',
                          } }}
          onClick={()=>{
          handleOpenFilter()}}>
          Filter
        </Button> */}
        <Stack style={{ marginTop: 20,float:"right"}}>
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{color:"#ed6c02"}}>
          <DatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={(params) => <TextField disabled {...params} style={{width:"11vw",color:"#ed6c02"}} 
              />}
            
            />
          </LocalizationProvider>
        </Stack>
     
      <Typography variant="h4" sx={{ mb: 5 }}>
      Plan Of Actions
      
        </Typography> 

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mt: -9 }}>
        <h1>jnjn</h1>
        </Stack> */}

        {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <POA
            // onDateSubmit={onDateSubmit}
            // onSumbit={onSumbit}
            // getData={getData}
            //  clcikData={clcikData}
            isOpenFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}
<Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <POA
        
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
        
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value}  indicatorColor="warning"
        onChange={handleChange} aria-label="basic tabs example">
          <Tab
           sx={{
          ':hover': {
            bgcolor: '#ffd796', // theme.palette.primary.main
            color: '#ed6c02',
          },
          ':focus':{
            bgcolor:'#ffd796',
            color:"#ed6c02"
          },
          color:'black',
          
        }}  label="Today" {...a11yProps(0)} />
          <Tab  style={{textDecoration: 'none'}}
           sx={{
            ':hover': {
              bgcolor: '#ffd796', // theme.palette.primary.main
              color: '#ed6c02',
            },
            ':focus':{
              bgcolor:'#ffd796',
              color:"#ed6c02"
            },
            color:'black',
            
          }}  label="Week" {...a11yProps(1)} />
          <Tab style={{textDecoration: 'none'}}
           sx={{
            ':hover': {
              bgcolor: '#ffd796', // theme.palette.primary.main
              color: '#ed6c02',
            },
            ':focus':{
              bgcolor:'#ffd796',
              color:"#ed6c02"
            },
            color:'black',
            
          }}  label="Month" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
        </Stack>

        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="fullWidth" value={value} indicatorColor="warning"
                onChange={handleChange} aria-label="basic tabs example">
                <Tab
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },

                    color: 'black',
                  }} style={value == 0 ? {
                    borderBottom: '3px solid #ed6c02',
                    color: "#ed6c02",
                  } : null} label="Today" {...a11yProps(0)} />
                <Tab
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },

                    color: 'black',

                  }} style={value == 1 ? {
                    borderBottom: '3px solid #ed6c02',
                    color: "#ed6c02",
                  } : null} label="Week" {...a11yProps(1)} />
                <Tab
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },

                    color: 'black',

                  }} style={value == 2 ? {
                    borderBottom: '3px solid #ed6c02',
                    color: "#ed6c02",
                  } : null} label="Month" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Stack>
        {/* </Stack> */}

      </Container></Page>
  );
}