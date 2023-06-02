
import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button, Box } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

import Page from 'src/components/Page';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

import { AppWidgetSummary } from 'src/sections/@dashboard/app';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import FiltersHome from 'src/pages/Filters/FiltersHome';
import GalathiChart from 'src/pages/Components/Charts/GalathiChart';
import {baseURL} from 'src/utils/api';
const FUnderGreenDashboard = () => {
  const navigate = useNavigate();
 
  const [openFilter, setOpenFilter] = useState(false);
 
  const [loader, setLoader] = useState(false);
  const [errorMsg,setErrormsg]=useState(false)
 
  const [summaryData, setSummaryData] = useState([]);

  var roleid = JSON.parse(localStorage.getItem('userDetails'))?.role;
  var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
  const apiHit = async (id, i, g) => {
    console.log('🚀 ~ file: Gelathidashboard.js:45 ~ apiHit ~ id, i, g:', id, i, g);
    setLoader(true);
    var roleid = JSON.parse(localStorage.getItem('userDetails'))?.role;
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    console.log(roleid , userid , " role user id ")
   
    const data = {
     
      roleid: roleid ,
      emp_id: userid ,
    };
    console.log(data, '<------bbbbbbb');
    const config = {
      method: 'post',
      // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
      url: baseURL +'funderGreenDashboard',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => {
        setLoader(false);
        setSummaryData(response.data);
        console.log('<--------------------setSummaryData', response.data);
      })
      .catch((error) => {
         setErrormsg(error)
        console.log(error);
      });
  };
  console.log(summaryData?.data, 'resposeapi');
  let formatdata = summaryData?.data;
  console.log('🚀 ~ file: Gelathidashboard.js:105 ~ Gelathidashboard ~ formatdata:', formatdata);
  useEffect(() => {
    apiHit();
  }, []);

  if (loader) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

 
 
  if (summaryData?.length === 0 && loader) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  
 

  return (
    <>
      <Page title="Dashboard">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" gutterBottom sx={{ ml: 4 }}>
            Green Program 
          </Typography>
        
        </Stack>
        <Container maxWidth="xl">
        <Grid item spacing={10}>



</Grid>

          
          <Grid container spacing={3} marginTop={4}>
          <Grid item xs={4} sm={8} md={4}>

<AppWidgetSummary
  title="Target"
  total={summaryData?.target}
  color="motivator"

/>
</Grid>
<Grid item xs={4} sm={8} md={4}>

<AppWidgetSummary
  title="Actual"
  total={summaryData?.actual}
  color="motivator"

/>
</Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number of Villages"
                  total={summaryData?.villages}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number of Green Enrolled"
                  total={summaryData?.greenenrolled}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number  of Green Cohorts"
                  total={summaryData?.noofgreencoharts}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number of Green Survey"
                  total={summaryData?.nofgreensurvey}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number of Green Modules Completed"
                  total={summaryData?.noofgreenmodulecompleted}
                  color="motivator"
  
                />
              </Grid>
             
             
            </Grid>
        

        </Container>
      </Page>
    </>
  );
};

export default FUnderGreenDashboard;
