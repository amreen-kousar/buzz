import React from 'react'
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button, Box } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
// import Iconify from '../components/Iconify';
// import Page from '../components/Page';
import Page from 'src/components/Page';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

import { AppWidgetSummary } from 'src/sections/@dashboard/app';
// import DashboardFilter from './Components/DashboardFilters/DashboardFilter';
// import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
// import CardHeader from '@mui/material/CardHeader';
// import { max } from 'lodash';
// import FiltersHome from './Filters/FiltersHome';
import FiltersHome from 'src/pages/Filters/FiltersHome';
//  import GalathiChart from './Components/Charts/GalathiChart';
 import GalathiChart from 'src/pages/Components/Charts/GalathiChart';
import {baseURL} from 'src/utils/api';

const SelfSakthiProgramDashboard = () => {
  const navigate = useNavigate();
  const data = localStorage?.getItem('userId')
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

  const [slected, setSelected] = useState(null)

  const [summaryData, setSummaryData] = useState([]);
  const [graphData, setGraphData] = useState(null);
  const itemStyles = [{ itemXs: 4, itemSm: 8, itemMd: 4 }, { itemXs: 6, itemSm: 8, itemMd: 6 }]

  // const GathathiGraphDataFormating=(formatdata) => {
  //   console.log("🚀 ~ file: Gelathidashboard.js:171 ~ GathathiGraphDataFormatibg ~ data:",formatdata.data)
  //   let data = formatdata.data 
   
  //   console.log("🚀 ~ file: Gelathidashboard.js:47 ~ GathathiGraphDataFormating ~ data:", data)
    
  //   const filteredArr = data.map(({villagevisit, circle_meet, circles,beehive,enroll}) => ({Villagevisit:villagevisit, Circlemeetings:circle_meet, TotalCircles:circles,BeehiveVisits:beehive,EnrolledGelathis:enroll}));
  //   console.log("🚀 ~ file: Gelathidashboard.js:52 ~ GathathiGraphDataFormating ~ filteredArr:", filteredArr)
  //   let dataKeys = Object.keys(filteredArr[0]);
  //   let tempData=[]
  //   for(let i=0;i<dataKeys.length;i++){
  //     let data = dataKeys[i]
  //     // for(let i=0; i<fil)
  //     tempData.push({
  //       name:data,
  //       value:parseInt(filteredArr[0][data])
  //     })
  //   }
    
  //   console.log("🚀 ~ file: Gelathidashboard.js:55 ~ GathathiGraphDataFormating ~ tempData:", tempData)
  //   setGraphData(tempData)
  //   console.log("🚀 ~ file: Gelathidashboard.js:50 ~ GathathiGraphDataFormating ~ keys:", name,value)
    
   
  // //   console.log("🚀 ~ file: Gelathidashboard.js:47 ~ GathathiGraphDataFormating ~ data:", data)
  // //   let tempData =[]
    
  // //  let testData= Object.values(data)
  // //  let a={}
  // //   console.log("🚀 ~ file: Gelathidashboard.js:51 ~ GathathiGraphDataFormating ~ testData:", testData)
  // //   for(let i=0;i<testData.length;i++){
  // //     tempData.push({
  // //       x:testData[i]
  // //     })
  // //     console.log("🚀 ~ file: Gelathidashboard.js:57 ~ GathathiGraphDataFormating ~ tempData:", tempData)
     
  // //   }
  // }

  var roleid = JSON.parse(localStorage.getItem('userDetails'))?.role
  var userid = JSON.parse(localStorage.getItem('userDetails'))?.id


  const apiHit = async (id, i, g) => {
    console.log("🚀 ~ file: Gelathidashboard.js:45 ~ apiHit ~ id, i, g:", id, i, g)
    setLoader(true)
    var roleid = JSON.parse(localStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id

    
    // const data = {
    //   end_date: g === "date" ? i : '',
    //   role_id:role ,
    //   taluk_id: g === "country" ? i : "",
    //   district_id: g === "country" ? id : "",
    //   trainerId: g ? "" : i === 5 ? id?.id : '',
    //   emp_id: userid,
    //   start_date: g === "date" ? id : '',
    //   somId: g ? "" : i === 12 ? id?.id : '',
    //   gflId: g ? "" : i === 13 ? id?.id : '',
    //   funder_id: g ? "" : i === 2 ? id?.id : '',
    //   partner_id: g ? "" : i === 1 ? id?.id : '',
    //   project_id: g ? "" : i === 3 ? id?.id : '',
    //   opsManager: g ? "" : i === 4 ? id?.id : '',
    // };
    // const datas = {
    //   end_date: i,
    //   role_id: role,
    //   taluk_id: "",
    //   district_id: "",
    //   trainerId: '',
    //   emp_id: userid,
    //   start_date: id,
    //   somId: '',
    //   gflId: '',
    //   funder_id: "",
    //   partner_id: "",
    //   project_id: '',
    //   opsManager: '',
    // };

    const data  ={
      "partner_id": "",
    "start_date": "",
    "end_date": "",
    "funder_id":"",
    "dist":"",
    "taluk":"",
    "project_id":"",
    "trainer_id":"",
    "opsmanager":"",
    "somid":"",
    "gflid":"",
    "roleid":roleid,
    "emp_id":userid
  }
  
    console.log(data, '<------bbbbbbb');
    const config = {
      method: 'post',
      // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
      // url: 'https://bdms.buzzwomen.org/appTest/Scripts/getDashboardData.php',

      url :baseURL +"selfSakthiDashboard",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => { 
        setLoader(false)
console.log(response.data,"________>responsedata")
setSummaryData(response.data);
// GathathiGraphDataFormating(response.data);
        console.log("<------------setSummaryDatasetSummaryData", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
console.log(summaryData?.data,"resposeapi")
let formatdata = summaryData?.data
  console.log("🚀 ~ file: Gelathidashboard.js:105 ~ Gelathidashboard ~ formatdata:", formatdata)
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
    setSelected({ type: 'Date Range', name: `${e?.startDate} - ${e?.endDate}` })

    apiHit(e?.startDate, e?.endDate, "date")
    setFilterData({ from_date: e?.startDate, to_date: e?.endDate })
    handleCloseFilter()
    console.log(e, "<----scasds")
  }

  const handleDelete = () => {
    setSelected(null)
    apiHit();
  }


  if (summaryData?.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '70vh' }}>
        <CircularProgress />
      </Box>
    )
  }


  const getData = (itm, i) => {
    setSelected(itm)
    const data = i === 2 ? { "funder_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : { "project_id": itm?.id }
    apiHit(itm, i)
    console.log(data, i, itm, "<----sdfssreerfer")
    setFilterData(data)
    handleCloseFilter()
    console.log("sdfgsdfdfssd", itm, i)
  }
  const onSumbit = (e, i) => {
    handleCloseFilter()
    setSelected({ type: 'Location', name: ` ${e?.stateName} - ${e?.districtName} - ${e?.talukName}` })

    apiHit(e?.district_id, e?.talaq_id, "country")
    console.log(e, i, "<----datssdasdsa")
  }

  const closefilter = () => {
    console.log("deleted")
  }

  const summarySubDataView = [
    { ...itemStyles[0], title: "Villages", total: 'villages', color: "villages", icon: 'fontisto:holiday-village' },

    { ...itemStyles[0], title: "Women", total: 'women', color: "info", icon: 'twemoji:women-holding-hands' },

    { ...itemStyles[0], title: "2nd Day TurnOut(%)", total: 'day2', ext: ' % ', color: "warning", icon: 'twemoji:women-holding-hands' },

    { ...itemStyles[0], title: "Gelathis", total: 'enrolled', color: "gelathis", icon: 'fluent:people-team-16-regular' },

    { ...itemStyles[0], title: "Green Motivator", total: 'greenMotivators', color: "motivator", icon: 'openmoji:leafy-green' },

    { ...itemStyles[0], title: "Vyapar", total: 'vyapar', color: "vyapar", icon: 'eos-icons:product-subscriptions-outlined' },

  ]

  return (
    <>

      <Page title="Dashboard">
      <Stack direction="row" alignItems="center" justifyContent="space-between" >
          <Typography variant="h5" gutterBottom sx={{ml:4}}>
          Self Sakthi Program Summary

          </Typography>
          <Button style={{ float: "right", color: '#ff7424' }} sx={{ '&:hover': { backgroundColor: '#ffd796', }, }} onClick={() => { handleOpenFilter() }}>
            Filter
          </Button>
        </Stack>
        <Container maxWidth="xl">
          {
            slected && <Chip label={`${slected?.type} : ${slected?.name} `} onDelete={() => { handleDelete(slected) }} />
          }

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
        {  (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)?
        
        <Grid container spacing={3} marginTop={4}>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Target"
                total={summaryData?.summary_target}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Actual"
                total={summaryData?.summary_actual}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number  of Vilages"
                total={summaryData?.summary_villages}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Batches"
                total={summaryData?.summary_NoofBatches}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Self Sakthi Survey"
                total={summaryData?.summary_Noofselfshakthisurvey}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="2nd Day Turnout  %"
                total={summaryData?.summary_day2}
                color="motivator"

              />
            </Grid>
          
          </Grid>
     : (roleid == 13)?
     <>
<Grid container spacing={3} marginTop={4}>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Beehive"
                total={summaryData?.summary_beehive}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Circle Meet"
                total={summaryData?.summary_circle_meet}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number  of Circles"
                total={summaryData?.summary_circles}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Enroll"
                total={summaryData?.summary_enroll}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Green"
                total={summaryData?.summary_green}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Vyapar"
                total={summaryData?.summary_vyapar}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of VIllage Visits"
                total={summaryData?.summary_villagevisit}
                color="motivator"

              />
            </Grid>
          </Grid>
     
     </>
     :
     (roleid == 5)?
    
     <>
     <Grid container spacing={3} marginTop={4}>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Target"
                total={summaryData?.summary_Target}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Actual"
                total={summaryData?.summary_actual}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number  of Vilages"
                total={summaryData?.summary_villages}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Batches"
                total={summaryData?.summary_batches}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Self Sakthi Survey"
                total={summaryData?.summay_selfShakthiSurvey}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="2nd Day Turnout  %"
                total={summaryData?.summary_day2}
                color="motivator"

              />
            </Grid>
          
          </Grid>
     </>
     :
     (roleid == 6 )?
     <>
     <Grid container spacing={3} marginTop={4}>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Beehive"
                total={summaryData?.summary_beehive}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Circle Meet"
                total={summaryData?.summary_circle_meet}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number  of Circles"
                total={summaryData?.summary_circles}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Enroll"
                total={summaryData?.summary_enroll}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Green"
                total={summaryData?.summary_green}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of Vyapar"
                total={summaryData?.summary_vyapar}
                color="motivator"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Number of VIllage Visits"
                total={summaryData?.summary_villagevisit}
                color="motivator"

              />
            </Grid>
          </Grid>
     
     </>
     :
     <>
     </>

     
     }
          
{/* founder */}
{
  (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)?
  
  <CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
              Funders List : 
              {/* for gfl it should be showned as project not as funder */}
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
      Funder<br />
      {/*  for role id 5 it should be project in 4 dahsbord  */}
      Actual / Target
      {/* start date and end date  we need as duration : fromDate to endDate for role id 5 */}
    </span></Grid>
    <Grid item xs={6}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
      &nbsp;:&nbsp;{itm?.name}<br />
      &nbsp;:&nbsp;{itm?.actual} / {itm?.target}
            {/* start date and end date need in all dashborad we need as duration : fromDate to endDate for role id 5 */}
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
            <Grid item xs={4} sm={4} md={3}>

              <AppWidgetSummary
                title="Number  of Vilages"
                total={itm?.villages}
                color="villages"
                icon= "fontisto:holiday-village"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Batches"
                total={itm?.noofbatches}
                color="motivator"
                icon="twemoji:women-holding-hands"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Self Sakthi Survey"
                total={itm?.noofselfshakthisurvey}
                color="vyapar"
                icon="eos-icons:product-subscriptions-outlined"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="2nd Day Turnout  %"
                total={itm?.day2}
                color="info"
                icon = "twemoji:women-holding-hands"

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
: (roleid == 13)?


<>
<CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
              Funders List : 
              {/* for gfl it should be showned as project not as funder */}
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
      Funder<br />
      {/*  for role id 5 it should be project in 4 dahsbord  */}
      Actual / Target
      {/* start date and end date  we need as duration : fromDate to endDate for role id 5 */}
    </span></Grid>
    <Grid item xs={6}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
      &nbsp;:&nbsp;{itm?.name}<br />
      &nbsp;:&nbsp;{itm?.actual} / {itm?.target}
            {/* start date and end date need in all dashborad we need as duration : fromDate to endDate for role id 5 */}
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
            <Grid item xs={4} sm={4} md={3}>

              <AppWidgetSummary
                title="Number  of Vilages Visits"
                total={itm?.villagevisit}
                color="villages"
                icon= "fontisto:holiday-village"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Beehive"
                total={itm?.beehive}
                color="motivator"
                icon="twemoji:women-holding-hands"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Circle Meet"
                total={itm?.circle_meet}
                color="vyapar"
                icon="eos-icons:product-subscriptions-outlined"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Circles"
                total={itm?.circles}
                color="info"
                icon = "twemoji:women-holding-hands"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="Number of Enroll"
  total={itm?.enroll}
  color="info"
  icon = "twemoji:women-holding-hands"

/>
</Grid>
<Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="Number of Green Motivators"
  total={itm?.greenMotivators}
  color="info"
  icon = "twemoji:women-holding-hands"

/>
</Grid>
<Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="Number of Vyapar"
  total={itm?.vyapar}
  color="info"
  icon = "twemoji:women-holding-hands"

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
            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
              Project List : 
              {/* for gfl it should be showned as project not as funder */}
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
      Funder<br />
      {/*  for role id 5 it should be project in 4 dahsbord  */}
      Actual / Target

      Start Date :

      End Date : 
      {/* start date and end date  we need as duration : fromDate to endDate for role id 5 */}
    </span></Grid>
    <Grid item xs={6}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
      &nbsp;:&nbsp;{itm?.name}<br />
      &nbsp;:&nbsp;{itm?.actual} / {itm?.target}<br />
      &nbsp;:&nbsp;{itm?.startDate}<br />
      &nbsp;:&nbsp;{itm?.endDate}
            {/* start date and end date need in all dashborad we need as duration : fromDate to endDate for role id 5 */}
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

<Grid item xs={4} sm={4} md={3}>

<AppWidgetSummary
  title="Number  of Vilages Visits"
  total={itm?.villages}
  color="villages"
  icon= "fontisto:holiday-village"

/>
</Grid>
             <Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="Number of Batch"
  total={itm?.Noofbatches}
  color="info"
  icon = "twemoji:women-holding-hands"

/>
</Grid>
           
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Self Shakthi Survey"
                total={itm?.noOfselfshakthisurvey}
                color="vyapar"
                icon="eos-icons:product-subscriptions-outlined"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="2nd Day Turnout  %"
  total={itm?.day2}
  color="info"
  icon = "twemoji:women-holding-hands"

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
</>
:
(roleid == 6)?
<>
<CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
              Funders List : 
              {/* for gfl it should be showned as project not as funder */}
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
      Funder <br />
      {/*  for role id 5 it should be project in 4 dahsbord  */}
      {/* Actual / Target */}
      {/* start date and end date  we need as duration : fromDate to endDate for role id 5 */}
    </span></Grid>
    <Grid item xs={6}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1', textAlign: 'start' }}>
      &nbsp;:&nbsp;{itm?.name}<br />
      {/* &nbsp;:&nbsp;{itm?.actual} / {itm?.target} */}
            {/* start date and end date need in all dashborad we need as duration : fromDate to endDate for role id 5 */}
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
            <Grid item xs={4} sm={4} md={3}>

              <AppWidgetSummary
                title="Number  of Vilages Visits"
                total={itm?.villagevisit}
                color="villages"
                icon= "fontisto:holiday-village"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Beehive"
                total={itm?.beehive}
                color="motivator"
                icon="twemoji:women-holding-hands"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Circle Meet"
                total={itm?.circle_meet}
                color="vyapar"
                icon="eos-icons:product-subscriptions-outlined"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

              <AppWidgetSummary
                title="Number of Circles"
                total={itm?.circles}
                color="info"
                icon = "twemoji:women-holding-hands"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="Number of Enroll"
  total={itm?.enroll}
  color="info"
  icon = "twemoji:women-holding-hands"

/>
</Grid>
<Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="Number of Green Motivators"
  total={itm?.greenMotivators}
  color="info"
  icon = "twemoji:women-holding-hands"

/>
</Grid>
<Grid item xs={4} sm={8} md={3}>

<AppWidgetSummary
  title="Number of Vyapar"
  total={itm?.vyapar}
  color="info"
  icon = "twemoji:women-holding-hands"

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
</>
:
<>
</>

}


{/* founder end  */}
        </Container>
      </Page>
    </>
  )

}

export default SelfSakthiProgramDashboard