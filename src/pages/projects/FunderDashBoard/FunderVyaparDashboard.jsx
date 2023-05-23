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
import {baseURL} from 'src/utils/api';


const FunderVyaparDashboard = () => {
  const navigate = useNavigate();
 
  const [openFilter, setOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [loader, setLoader] = useState(false);
  const [errorMsg,setErrormsg]=useState(false)
  const [slected, setSelected] = useState(null);
  const [summaryData, setSummaryData] = useState([]);
  const [graphData, setGraphData] = useState(null);

  const apiHit = async (id, i, g) => {
    
    setLoader(true);
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role;
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    console.log(role , "role id ")
   

    const data = {

      "roleid":role,
      "emp_id":userid
  }
  
    console.log(data, '<------bbbbbbb');
    const config = {
      method: 'post',
     url: baseURL +'funderVyaparDashboard',
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
     
      })
      .catch((error) => {
        setErrormsg(error);
       
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

 

  

  if (summaryData?.length === 0) {
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
          Vyapar Program 
          </Typography>
        
        </Stack>
        <Container maxWidth="xl">
        

         
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
              <AppWidgetSummary title="Number of Vyapar Cohorts"
               total={summaryData?.noofvyaparcoharts} 
               color="motivator" />
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
                title="Number  of Vyapari Enrolled"
                total={summaryData?.vyaparenrolled}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Vyapar Survey"
                total={summaryData?.nofvyaparsurvey}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Vyapar Modules Completed"
                total={summaryData?.noofvyaparmodulecompleted}
                color="motivator"
              />
            </Grid>
            {/* <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Number of Beehives" total={summaryData?.summary_green} color="motivator" />
            </Grid> */}
          </Grid>
          
     

        </Container>
      </Page>
    </>
  );
};



export default FunderVyaparDashboard