import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button, Box } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { AppWidgetSummary } from '../sections/@dashboard/app';
import DashboardFilter from './Components/DashboardFilters/DashboardFilter';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import { max } from 'lodash';
import FiltersHome from './Filters/FiltersHome';
 import GalathiChart from './Components/Charts/GalathiChart';
export default function Gelathidashboard() {
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

  const apiHit = async (id, i, g) => {
    console.log("🚀 ~ file: Gelathidashboard.js:45 ~ apiHit ~ id, i, g:", id, i, g)
    setLoader(true)
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    const data = {
      end_date: g === "date" ? i : '',
      role_id:role ,
      taluk_id: g === "country" ? i : "",
      district_id: g === "country" ? id : "",
      trainerId: g ? "" : i === 5 ? id?.id : '',
      emp_id: userid,
      start_date: g === "date" ? id : '',
      somId: g ? "" : i === 12 ? id?.id : '',
      gflId: g ? "" : i === 13 ? id?.id : '',
      funder_id: g ? "" : i === 2 ? id?.id : '',
      partner_id: g ? "" : i === 1 ? id?.id : '',
      project_id: g ? "" : i === 3 ? id?.id : '',
      opsManager: g ? "" : i === 4 ? id?.id : '',
    };
    const datas = {
      end_date: i,
      role_id: role,
      taluk_id: "",
      district_id: "",
      trainerId: '',
      emp_id: userid,
      start_date: id,
      somId: '',
      gflId: '',
      funder_id: "",
      partner_id: "",
      project_id: '',
      opsManager: '',
    };
    console.log(data, '<------bbbbbbb');
    const config = {
      method: 'post',
      // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
      url: 'https://bdms.buzzwomen.org/appTest/Scripts/getDashboardData.php',
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
GathathiGraphDataFormating(response.data);
        console.log("responseofapi", response.data)
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

  return (
    <>

      <Page title="Dashboard">
      <Stack direction="row" alignItems="center" justifyContent="space-between" >
          <Typography variant="h5" gutterBottom sx={{ml:4}}>
            Summary

          </Typography>
          <Button style={{ float: "right", color: '#ff7424' }} sx={{ '&:hover': { backgroundColor: '#ffd796', }, }} onClick={() => { handleOpenFilter() }}>
            Filter
          </Button>
        </Stack>
        <Container maxWidth="xl">
          {
            slected &&  <Chip style={{ backgroundColor: '#ffd796', color: '#000' }}label={`${slected?.type} : ${slected?.name} `} onDelete={() => { handleDelete(slected) }} />
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
          <Grid container spacing={2} marginTop={4}>
            <Grid  item xs={12} sm={6} md={4}>

              <AppWidgetSummary
                title="Total Circles"
                total={summaryData?.summary_circles}
                color="motivator"

              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

              <AppWidgetSummary
                title="Circle Meetings"
                total={summaryData?.summary_circle_meet}
                color="motivator"

              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

              <AppWidgetSummary
                title="Village Visits"
                total={summaryData?.summary_villagevisit}
                color="villages"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>

              <AppWidgetSummary
                title="Beehive Visits"
                total={summaryData?.summary_beehive}
                color="motivator"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>

              <AppWidgetSummary
                title="Enrolled Gelathis"
                total={summaryData?.summary_enroll}
                color="gelathis"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>

              <AppWidgetSummary
                title="Green Motivators"
                total={summaryData?.summary_green}
                color="motivator"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <AppWidgetSummary
                title="Enrolled Vyapar"
                total={summaryData?.summary_vyapar}
                color="vyapar"

              />
            </Grid>
          </Grid>
          {/* <Grid>
          <Grid item xs={4} sm={8} md={4}>

            <AppWidgetSummary
              title="Circle Meetings"
              total={summaryData?.summary_circle_meet}
              color="motivator"

            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>

            <AppWidgetSummary
              title="Village Visits"
              total={summaryData?.summary_villagevisit}
              color="motivator"

            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>

            <AppWidgetSummary
              title="Beehive Visits"
              total={summaryData?.summary_beehive}
              color="motivator"

            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>

            <AppWidgetSummary
              title="Enrolled Gelathis"
              total={summaryData?.summary_enroll}
              color="motivator"

            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>

            <AppWidgetSummary
              title="Green Motivators"
              total={summaryData?.summary_green}
              color="motivator"

            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AppWidgetSummary
              title="Enrolled Vyapor"
              total={summaryData?.summary_vyapar}
              color="motivator"

            />
          </Grid>



        </Grid> */}
          {summaryData?.data?.map((item)=>{
            return(
              <>
              {summaryData?.data?
               <Card sx={{ marginTop: 5,justifyContent:'center' }}>
<CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
              Project : {item?.name}
            </Typography>
            {/* <Graphchart/> */}
            {/* style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} */}
            <CardContent maxWidth="md" style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
  <Grid container>
    <Grid item xs={12} sm={12} md={6}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table" style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Total Circles</TableCell>
              <TableCell>:&nbsp;{item?.circles}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Circle Meetings</TableCell>
              <TableCell>:&nbsp;{item?.circle_meet}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Village Visits</TableCell>
              <TableCell>:&nbsp;{item?.villagevisit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Beehive Visits</TableCell>
              <TableCell>:&nbsp;{item?.beehive}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Enrolled Gelathis</TableCell>
              <TableCell>:&nbsp;{item?.enroll}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Grid>
    {/* <Grid item xs={12} sm={12} md={6} > */}
 
{/* </Grid> */}
<Grid item xs={12} sm={12} md={6} sx={{padding:0,margin:0,float: 'left'}}>
  <GalathiChart data={[{name:'VV',value:parseInt(item?.villagevisit)},{name:'CM',value:parseInt(item?.circle_meet)},{name:'TC',value:parseInt(item?.circles)},{name:'BV',value:parseInt(item?.beehive)},{name:'EG',value:parseInt(item?.enroll)}]} />
</Grid>
</Grid>
</CardContent></CardContent>
          </Card> 
          :  <h1 style={{ fontWeight: 900, textAlign: 'center' }}><br />No Projects</h1>}
              </>
            )
          })
        } 
          



        </Container>
      </Page>
    </>
  )
}