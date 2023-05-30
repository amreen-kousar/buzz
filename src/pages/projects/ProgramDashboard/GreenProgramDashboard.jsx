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
const GreenProgramDashboard = () => {
  const navigate = useNavigate();
  const data = localStorage?.getItem('userId');
  const theme = useTheme();
  const intialValues = {
    funder: '',
    patner: '',
    project: '',
    fromDate: '',
    toDate: '',
  };
  const [openFilter, setOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [loader, setLoader] = useState(false);
  const [errorMsg,setErrormsg]=useState(false)
  const [slected, setSelected] = useState(null);
  const [summaryData, setSummaryData] = useState([]);
  const [graphData, setGraphData] = useState(null);
  var roleid = JSON.parse(localStorage.getItem('userDetails'))?.role;
  var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
  const apiHit = async (id, i, g) => {
    console.log('🚀 ~ file: Gelathidashboard.js:45 ~ apiHit ~ id, i, g:', id, i, g);
    setLoader(true);
    var roleid = JSON.parse(localStorage.getItem('userDetails'))?.role;
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    console.log(roleid , userid , " role user id ")
    // var role = "13"
    // var userid  ="252"
    // console.log(JSON.stringify(role)  , "role id ")
    // const data = {
    //   end_date: g === 'date' ? i : '',
    //   role_id: role,
    //   taluk_id: g === 'country' ? i : '',
    //   district_id: g === 'country' ? id : '',
    //   trainerId: g ? '' : i === 5 ? id?.id : '',
    //   emp_id: userid,
    //   start_date: g === 'date' ? id : '',
    //   somId: g ? '' : i === 12 ? id?.id : '',
    //   gflId: g ? '' : i === 13 ? id?.id : '',
    //   funder_id: g ? '' : i === 2 ? id?.id : '',
    //   partner_id: g ? '' : i === 1 ? id?.id : '',
    //   project_id: g ? '' : i === 3 ? id?.id : '',
    //   opsManager: g ? '' : i === 4 ? id?.id : '',
    // };
    // const datas = {
    //   end_date: i,
    //   role_id: role,
    //   taluk_id: '',
    //   district_id: '',
    //   trainerId: '',
    //   emp_id: userid,
    //   start_date: id,
    //   somId: '',
    //   gflId: '',
    //   funder_id: '',
    //   partner_id: '',
    //   project_id: '',
    //   opsManager: '',
    // };

    const data = {
      partner_id: g ? '' : i === 1 ? id?.id : '',
      start_date: g === 'date' ? id : '',
      end_date: g === 'date' ? i : '',
      funder_id:g ? '' : i === 2 ? id?.id : '',
      dist:  g === 'country' ? id : '',
      taluk: g === 'country' ? i : '',
      project_id: g ? '' : i === 3 ? id?.id :'',
      trainer_id:g ? '' : i === 5 ? id?.id : '',
      opsmanager: g ? '' : i === 4 ? id?.id : '',
      somid: g ? '' : i === 12 ? id?.id : '',
      gflid: g ? '' : i === 13 ? id?.id : '',
      roleid: roleid ,
      emp_id: userid ,
    };
    console.log(data, '<------bbbbbbb');
    const config = {
      method: 'post',
      // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
      url: baseURL +'greenDashboard',
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

  const onDateSubmit = (e) => {
    setSelected({ type: 'Date Range', name: `${e?.startDate} to ${e?.endDate}` });

    apiHit(e?.startDate, e?.endDate, 'date');
    setFilterData({ from_date: e?.startDate, to_date: e?.endDate });
    handleCloseFilter();
    console.log(e, '<----scasds');
  };

  const handleDelete = () => {
    setSelected(null);
    apiHit();
  };

  if (summaryData?.length === 0 && loader) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  // if(errorMsg!=''){
  //   return(
  //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '70vh',fontWeight:700}} style={{fontSize:30}}>
  //       {errorMsg?.message}
  //     </Box>
  //   )
  // }

  const getData = (itm, i) => {
    setSelected(itm);
    const data = i === 2 ? { funder_id: itm?.id } : i === 1 ? { partner_id: itm?.id } : { project_id: itm?.id };
    apiHit(itm, i);
    console.log(data, i, itm, '<----sdfssreerfer');
    setFilterData(data);
    handleCloseFilter();
    console.log('sdfgsdfdfssd', itm, i);
  };
  const onSumbit = (e, i) => {
    handleCloseFilter();
    setSelected({ type: 'Location', name: ` ${e?.stateName} - ${e?.districtName} - ${e?.talukName}` });

    apiHit(e?.district_id, e?.talaq_id, 'country');
    console.log(e, i, '<----datssdasdsa');
  };

  const closefilter = () => {
    console.log('deleted');
  };

  return (
    <>
      <Page title="Dashboard">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" gutterBottom sx={{ ml: 4 }}>
            Green Program Summary
          </Typography>
          <Button
            style={{ float: 'right', color: '#ff7424' }}
            sx={{ '&:hover': { backgroundColor: '#ffd796' } }}
            onClick={() => {
              handleOpenFilter();
            }}
          >
            Filter
          </Button>
        </Stack>
        <Container maxWidth="xl">
        <Grid item spacing={10}>


{
  slected && (slected.type =='Date Range')&& <Chip label={`${slected?.type} : ${slected?.name} `} onDelete={() => { handleDelete(slected) }} /> || slected &&<Chip label={`${slected?.type} : ${slected?.name} `} onDelete={() => { handleDelete(slected) }} />
}

</Grid>

          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <FiltersHome
              type="Dashboard"
              onDateSubmit={onDateSubmit}
              onSumbit={onSumbit}
              getData={getData}
              //clcikData={clcikData}
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
{/* role based displaying */}
  {/* (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)? */}
        { (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)?
        <>
         <Grid container spacing={3} marginTop={4}>
          
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title={"Number of Green Cohorts"  }
                total={summaryData?.summary_NoofGreencoharts }
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary title={"Number of Villages" }
               total={summaryData?.summary_villages } color="motivator" />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number  of Green Motivators Enrolled"
                total={summaryData?.summary_Greenenrolled}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Green Survey"
                total={summaryData?.summary_NoofGreenrsurvey}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Green Modules Completed"
                total={summaryData?.summary_NoofGreenmodulecomoleted}
                color="motivator"
              />
            </Grid>
            {/* <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Number of Beehives" total={summaryData?.summary_green} color="motivator" />
            </Grid> */}
          </Grid>
          {/* (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)? end */}
          </>
          :
          // (roleid == 5)
          (roleid == 5)?
          <>
           <Grid container spacing={3} marginTop={4}>
           <Grid item xs={4} sm={8} md={4}>

            
            <AppWidgetSummary
              title="Actual"  
              total={summaryData?.summary_actual }
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>

            
            <AppWidgetSummary
              title="Target"  
              total={summaryData?.summary_Target }
              color="motivator"
            />
          </Grid>
             <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary title={"Number of Villages" }
             total={summaryData?.summary_villages } color="motivator" />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>

            
            <AppWidgetSummary
              title={"Number of Green Cohorts"  }
              total={summaryData?.summary_Greencoharts }
              color="motivator"
            />
          </Grid>
       
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number  of Green Motivators Enrolled"
              total={summaryData?.summary_Greenenrolled}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Green Survey"
              total={summaryData?.summary_Greensurvey}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Green Modules Completed"
              total={summaryData?.summary_noofGreenmodulecompleted}
              color="motivator"
            />
          </Grid>
          {/* <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary title="Number of Beehives" total={summaryData?.summary_green} color="motivator" />
          </Grid> */}
        </Grid>
          </>
          :(roleid==6)?
          <>
          <Grid container spacing={3} marginTop={4}>
           <Grid item xs={4} sm={8} md={4}>

            
            <AppWidgetSummary
              title="Number Of Beehive"  
              total={summaryData?.summary_beehive }
              color="motivator"
            />
          </Grid>
         
             <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary title={"Number of Circle Meet" }
             total={summaryData?.summary_circle_meet } color="motivator" />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>

            
            <AppWidgetSummary
              title={"Number of Circles"  }
              total={summaryData?.summary_circles }
              color="motivator"
            />
          </Grid>
       
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number  of Enrolled"
              total={summaryData?.summary_enroll}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Green Summary"
              total={summaryData?.summary_green}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Village Visits"
              total={summaryData?.summary_villagevisit}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Vyapar Summary"
              total={summaryData?.summary_vyapar}
              color="motivator"
            />
          </Grid>
          {/* <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary title="Number of Beehives" total={summaryData?.summary_green} color="motivator" />
          </Grid> */}
        </Grid>
          </>
:
(roleid == 13)?
<>
<Grid container spacing={3} marginTop={4}>
           <Grid item xs={4} sm={8} md={4}>

            
            <AppWidgetSummary
              title="Number Of Beehive"  
              total={summaryData?.summary_beehive }
              color="motivator"
            />
          </Grid>
         
             <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary title={"Number of Circle Meet" }
             total={summaryData?.summary_circle_meet } color="motivator" />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>

            
            <AppWidgetSummary
              title={"Number of Circles"  }
              total={summaryData?.summary_circles }
              color="motivator"
            />
          </Grid>
       
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number  of Enrolled"
              total={summaryData?.summary_enroll}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Green Summary"
              total={summaryData?.summary_green}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Village Visits"
              total={summaryData?.summary_villagevisit}
              color="motivator"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Number of Vyapar Summary"
              total={summaryData?.summary_vyapar}
              color="motivator"
            />
          </Grid>
          {/* <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary title="Number of Beehives" total={summaryData?.summary_green} color="motivator" />
          </Grid> */}
        </Grid>
</>: null
          }
{/* role based displaying ending */}
          {/* founder */}
        <>
       

         {
         (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)?  <>
          <CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: '20px' }}>
              Funders List :
            </Typography>
          <CardContent maxWidth="md" style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
              <Grid item xs={12} sm={12} md={12} marginTop={3}>
                {summaryData?.data?.map((itm) => {
                  return (
                    <Card
                      style={{
                        backgroundColor: '#f5f5f5',
                        flexDirection: 'column',
                        borderRadius: 12,
                        border: '2px solid',
                        borderColor: '#ffcc80',
                        marginBottom: '40px',
                      }}
                      // onClick={() => {
                      //   navigate('/dashboard/app/chart', {
                      //     state: {
                      //       filterData: filterData
                      //     }
                      //   })
                      // }}
                    >
                      <CardContent>
                        <Container style={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'center' }}>
                              Funder
                              <br />
                              Actual / Target
                            </span>
                          </Grid>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
                              &nbsp;:&nbsp;{itm?.name}
                              <br />
                              &nbsp;:&nbsp;{itm?.actual} / {itm?.target}
                            </span>
                          </Grid>
                        </Container>
                        <Divider mt={1} />
                        <Grid container spacing={3} marginTop={4}>
                          {/* <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Target"
                total={itm?.summary_target}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Actual"
                total={summaryData?.summary_actual}
                color="motivator"

              />
            </Grid> */}
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number  of Villages"
                              total={itm?.villages}
                              color="villages"
                              icon="fontisto:holiday-village"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Green Coharts"
                              total={itm?.noofgreencoharts}
                              color="motivator"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid>
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Green Enrolled"
                              total={itm?.greenenrolled}
                              color="motivator"
                              icon="openmoji:leafy-green"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Green Modules Completed"
                              total={itm?.noofgreenmodulecompleted}
                              color="info"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Green Survey"
                              total={itm?.nofgreensurvey}
                              color="vyapar"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>

                          {/* <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="2nd Day Turnout  %"
                              total={itm?.day2}
                              color="info"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid> */}
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
              </Grid>
            </CardContent>
            </CardContent>
            </>
            :
            (roleid == 13)?
            <>
             <CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: '20px' }}>
              Funders List :
            </Typography>
               <CardContent maxWidth="md" style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
              <Grid item xs={12} sm={12} md={12} marginTop={3}>
                {summaryData?.data?.map((itm) => {
                  return (
                    <Card
                      style={{
                        backgroundColor: '#f5f5f5',
                        flexDirection: 'column',
                        borderRadius: 12,
                        border: '2px solid',
                        borderColor: '#ffcc80',
                        marginBottom: '40px',
                      }}
                      // onClick={() => {
                      //   navigate('/dashboard/app/chart', {
                      //     state: {
                      //       filterData: filterData
                      //     }
                      //   })
                      // }}
                    >
                      <CardContent>
                        <Container style={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'center' }}>
                              Project
                              {/* <br />
                              Actual / Target */}
                            </span>
                          </Grid>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
                              &nbsp;:&nbsp;{itm?.name}
                              <br />
                              {/* &nbsp;:&nbsp;{itm?.actual} / {itm?.target} */}
                            </span>
                          </Grid>
                        </Container>
                        <Divider mt={1} />
                        <Grid container spacing={3} marginTop={4}>
          
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number  of Vilage Visits"
                              total={itm?.villagevisit}
                              color="villages"
                              icon="fontisto:holiday-village"
                            />
                          </Grid>
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Batches"
                              total={itm?.beehive}
                              color="motivator"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid>
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Circle Meet"
                              total={itm?.circle_meet}
                              color="motivator"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid>
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Circle"
                              total={itm?.circles}
                              color="info"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid>
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Green Motivators"
                              total={itm?.greenMotivators}
                              color="vyapar"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>

                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Vyapar"
                              total={itm?.vyapar}
                              color="info"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
              </Grid>
            </CardContent>
            </CardContent>
            </>:
            (roleid == 5)?
            <>
            <CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: '20px' }}>
              Funders List :
            </Typography>
          <CardContent maxWidth="md" style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
              <Grid item xs={12} sm={12} md={12} marginTop={3}>
                {summaryData?.data?.map((itm) => {
                  return (
                    <Card
                      style={{
                        backgroundColor: '#f5f5f5',
                        flexDirection: 'column',
                        borderRadius: 12,
                        border: '2px solid',
                        borderColor: '#ffcc80',
                        marginBottom: '40px',
                      }}
                      // onClick={() => {
                      //   navigate('/dashboard/app/chart', {
                      //     state: {
                      //       filterData: filterData
                      //     }
                      //   })
                      // }}
                    >
                      <CardContent>
                        <Container style={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'center' }}>
                              Project
                              <br />
                              Actual / Target<br/>
                              Start Date <br/>
                              End Date <br/>
                            </span>
                          </Grid>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
                              &nbsp;:&nbsp;{itm?.name}
                              <br />
                              &nbsp;:&nbsp;{itm?.actual} / {itm?.target}<br/>
                              &nbsp;:&nbsp;{itm?.startDate}<br/>
                              &nbsp;:&nbsp;{itm?.endDate}<br/>
                            </span>
                          </Grid>
                        </Container>
                        <Divider mt={1} />
                        <Grid container spacing={3} marginTop={4}>
                          {/* <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Target"
                total={itm?.summary_target}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Actual"
                total={summaryData?.summary_actual}
                color="motivator"

              />
            </Grid> */}
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number  of Vilage "
                              total={itm?.villages}
                              color="villages"
                              icon="fontisto:holiday-village"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Beehive"
                              total={itm?.beehive}
                              color="motivator"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid>
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Green Motivators"
                              total={itm?.greenMotivators}
                              color="motivator"
                              icon="openmoji:leafy-green"
                            />
                          </Grid><Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Cirle"
                              total={itm?.circles}
                              color="vyapar"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Circle Meet"
                              total={itm?.circle_meet}
                              color="info"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Vyapar"
                              total={itm?.vyapar}
                              color="vyapar"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>

                          {/* <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="2nd Day Turnout  %"
                              total={itm?.day2}
                              color="info"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid> */}
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
              </Grid>
            </CardContent>
            </CardContent>
            
            </>
            :
            (roleid == 6)?
            <>
            <CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: '20px' }}>
              Funders List :
            </Typography>
          <CardContent maxWidth="md" style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
              <Grid item xs={12} sm={12} md={12} marginTop={3}>
                {summaryData?.data?.map((itm) => {
                  return (
                    <Card
                      style={{
                        backgroundColor: '#f5f5f5',
                        flexDirection: 'column',
                        borderRadius: 12,
                        border: '2px solid',
                        borderColor: '#ffcc80',
                        marginBottom: '40px',
                      }}
                      // onClick={() => {
                      //   navigate('/dashboard/app/chart', {
                      //     state: {
                      //       filterData: filterData
                      //     }
                      //   })
                      // }}
                    >
                      <CardContent>
                        <Container style={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'center' }}>
                            {(itm?.startDate)?"Project Name":"Funder"}<br />
                              <br />
                            
                            </span>
                          </Grid>
                          <Grid item xs={6}>
                            <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
                              &nbsp;:&nbsp;{itm?.name}
                              <br />
                              {/* &nbsp;:&nbsp;{itm?.actual} / {itm?.target} */}
                            </span>
                          </Grid>
                        </Container>
                        <Divider mt={1} />
                        <Grid container spacing={3} marginTop={4}>
                          {/* <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Target"
                total={itm?.summary_target}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Actual"
                total={summaryData?.summary_actual}
                color="motivator"

              />
            </Grid> */}
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number  of Vilage Visit"
                              total={itm?.villagevisit}
                              color="villages"
                              icon="fontisto:holiday-village"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Beehive"
                              total={itm?.beehive}
                              color="motivator"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid>
                         <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Green Motivators"
                              total={itm?.greenMotivators}
                              color="motivator"
                              icon="openmoji:leafy-green"
                            />
                          </Grid><Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Cirle"
                              total={itm?.circles}
                              color="vyapar"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Circle Meet"
                              total={itm?.circle_meet}
                              color="info"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="Number of Vyapar"
                              total={itm?.vyapar}
                              color="vyapar"
                              icon="eos-icons:product-subscriptions-outlined"
                            />
                          </Grid>

                          {/* <Grid item xs={12} sm={6} md={6}>
                            <AppWidgetSummary
                              title="2nd Day Turnout  %"
                              total={itm?.day2}
                              color="info"
                              icon="twemoji:women-holding-hands"
                            />
                          </Grid> */}
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
              </Grid>
            </CardContent>
            </CardContent>
            
            </>:<></>
            }

          
        
        </>
        
       
          {/* founder end  */}
        </Container>
      </Page>
    </>
  );
};

export default GreenProgramDashboard;
