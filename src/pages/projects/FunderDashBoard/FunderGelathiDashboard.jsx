
import React from 'react'
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
import { useAuth } from 'src/AuthContext';
const FunderGelathiDashboard = () => {
  const { apikey } = useAuth(); 
    const navigate = useNavigate();
    const data = sessionStorage?.getItem('userId')
    const theme = useTheme();
    const intialValues = {
      funder: "",
      patner: "",
      project: "",
      fromDate: '',
      toDate: ""
    }
    const [openFilter, setOpenFilter] = useState(false);
   const [filterData, setFilterData] = useState({})
    const [loader, setLoader] = useState(false)
    const [errorMsg,setErrormsg]=useState(false)
    const [slected, setSelected] = useState(null)
   const [summaryData, setSummaryData] = useState([]);
    const [graphData, setGraphData] = useState(null);
  
    var roleid = JSON.parse(sessionStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(sessionStorage.getItem('userDetails'))?.id
  
    const apiHit = async (id, i, g) => {
      setLoader(true)
      var role = JSON.parse(sessionStorage.getItem('userDetails'))?.role
      var userid = JSON.parse(sessionStorage.getItem('userDetails'))?.id
      
      const data = {
        
       "roleid":role,
        "emp_id":userid
    }
    
      const config = {
        method: 'post',
        // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
        url: baseURL + 'funderGelathiDashboard',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization':`${apikey}`
        },
        data,
      };
  
      axios(config)
        .then((response) => { 
          setLoader(false)
  setSummaryData(response.data)
        })
        .catch((error) => {
         
          // console.log(error);
        });
    };
  
    useEffect(() => {
      apiHit();
    }, []);
  
  
    if (loader) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '70vh' }}>
          <CircularProgress />
        </Box>
      )
    }
  
  
   
    const handleOpenFilter = () => {
      setOpenFilter(true);
    };
  
    const handleCloseFilter = () => {
      setOpenFilter(false);
    };
  
    const onDateSubmit = (e) => {
      setSelected({ type: 'Date Range', name: `${e?.startDate} to ${e?.endDate}` })
  
      apiHit(e?.startDate, e?.endDate, "date")
      setFilterData({ from_date: e?.startDate, to_date: e?.endDate })
      handleCloseFilter()
    }
  
    const handleDelete = () => {
      setSelected(null)
      apiHit();
    }
  
  
    if (summaryData?.length === 0 ) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '70vh' }}>
          <CircularProgress />
        </Box>
      )
    }
  
    
    return (
      <>
  
        <Page title="Dashboard">
        <Stack direction="row" alignItems="center" justifyContent="space-between" >
            <Typography variant="h5" gutterBottom sx={{ml:4}}>
            Gelathi Program 
  
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
                  title="Number of Gelathi Enrolled"
                  total={summaryData?.Gelathienrolled}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number  of Gelathi Cohorts"
                  total={summaryData?.NoofGelathiCohorts}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number of Spoorthi Survey"
                  total={summaryData?.Noofsporthisurvey}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number of Spoorthi Modules Completed"
                  total={summaryData?.Noofsporthicompleted}
                  color="motivator"
  
                />
              </Grid>
              <Grid item xs={4} sm={8} md={4}>
  
                <AppWidgetSummary
                  title="Number of Beehives"
                  total={summaryData?.Noofbeehives}
                  color="motivator"
  
                />
              </Grid>
             
            </Grid>
           
       
   
          </Container>
        </Page>
      </>
    )
  
  }
export default FunderGelathiDashboard