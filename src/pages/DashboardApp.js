import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent,Button,Box } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

// components
import Page from '../components/Page';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';
// ----------------------------------------------------------------------
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
import DashboardFilter from './Components/DashboardFilters/DashboardFilter';
import { useNavigate } from 'react-router-dom';

export default function DashboardApp() {
  const navigate = useNavigate();

  const theme = useTheme();
  const intialValues  = {
    funder:"",
    patner:"",
    fromDate:'',
    toDate:""
  }
  const [openFilter, setOpenFilter] = useState(false);
  const [filter,setFilterData] = useState(intialValues)
  const [slected,setSelected] = useState({
    id:'',
  nmae:''  })
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    apiHit();
  }, []);

  const apiHit = async (id,i,g) => {
    const data = {
      end_date:g==="date"?i: '',
      role_id: 1,
      taluk_id: g==="country"?i:"",
      district_id:g==="country"?id:"",
      trainerId: '',
      emp_id: 1,
      start_date:g==="date"?id: '',
      somId: '',
      gflId: '',
      funder_id:g?"": i===2?id?.id:'',
      partner_id:g?"": i===1?id?.id:'',
      project_id: '',
      opsManager: '',
    };
    const datas = {
      end_date: i,
      role_id: 1,
      taluk_id: "",
      district_id:"",
      trainerId: '',
      emp_id: 1,
      start_date: id,
      somId: '',
      gflId: '',
      funder_id:"",
      partner_id:"",
      project_id: '',
      opsManager: '',
    };
    console.log(data, '<------bbbbbbb');
    const config = {
      method: 'post',
      // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
      url: 'http://3.7.7.138/hari-buzz/Scripts/getDashboardData.php',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    data,
    };

    axios(config)
      .then((response) => {
        setSummaryData(response.data);
        console.log(response.data, '<-------njnnjhnjhjh');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const onDateSubmit = (e)=>{
    apiHit(e?.startDate,e?.endDate,"date")
    setFilterData({...intialValues,fromDate:e?.startDate,toDate:e?.endDate})
    handleCloseFilter()
  console.log(e,"<----scasds")
  }

 if(summaryData?.length===0){
  return(
  <Box sx={{ display: 'flex',justifyContent:'center',alignItems:"center" ,height:'70vh'}}>
  <CircularProgress />
</Box>
  )
 }

  const getData = (itm,i) =>{
    setSelected({
      id:i,
      name:itm?.name
    })
    apiHit(itm,i)
    handleCloseFilter()
  console.log("sdfgsdfdfssd",itm,i)
  }
  const onSumbit = (e,i) =>{
    handleCloseFilter()
    apiHit(e?.district_id,e?.talaq_id,"country")
   console.log(e,i,"<----datssdasdsa")
  }

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
       <Grid item spacing={10}>
       <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        <h1>{slected?.id===2?"founder":null}{slected?.name?slected?.name:''}</h1>
        {/* <Chip label= {slected?.id===2?"founder":null}{slected?.name?slected?.name:''}/> */}

        <Button onClick={()=>{
          handleOpenFilter()}}>
          Filter
        </Button>
       </Grid>
       <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <DashboardFilter
            onDateSubmit={onDateSubmit}
            onSumbit={onSumbit}
            getData={getData}
            // clcikData={clcikData}
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>

        {/*  */}
        <Grid container spacing={3} marginTop={4}>
          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Target"
              total={summaryData?.summary_target}
              color="actual"
              icon={'mdi:target-arrow'}
            />
          </Grid>

          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Actual"
              total={summaryData?.summary_actual}
              color="primary"
              icon={'material-symbols:data-exploration'}
            />
          </Grid>

          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="2nd Day TurnOut(%)"
              total={summaryData?.summary_day2}
              color="warning"
              icon={'mdi:percent-circle-outline'}
            />
          </Grid>

          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Villages"
              total={summaryData?.summary_villages}
              color="villages"
              icon={'fontisto:holiday-village'}
            />
          </Grid>

          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary
              title="Women"
              total={summaryData?.summary_women}
              color="info"
              icon={'twemoji:women-holding-hands'}
            />
          </Grid>

          <Grid item xs={4} sm={8} md={4}>
            <AppWidgetSummary title="Gelathis" total={15022} color="gelathis" icon={'fluent:people-team-16-regular'} />
          </Grid>

          <Grid item xs={6} sm={8} md={6}>
            <AppWidgetSummary
              title="Green Motivator"
              total={summaryData?.summary_green}
              color="motivator"
              icon={'openmoji:leafy-green'}
            />
          </Grid>
          <Grid item xs={6} sm={8} md={6}>
            <AppWidgetSummary
              title="Enrolled Vyapar"
              total={summaryData?.summary_enrolled}
              color="vyapar"
              icon={'eos-icons:product-subscriptions-outlined'}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} marginTop={3}>
          {/* <AppWidgetSummary title="Funder" total={234} style={{backgroundColor:'#bdbdbd'}} icon={'ant-design:fund-view-outlined'} /> */}
          {summaryData?.data?.map((itm) => {
            return (
              <Card
                style={{
                  backgroundColor: '#f5f5f5',
                  flexDirection: 'column',
                  borderRadius: 12,
                  border: '2px solid',
                  borderColor: '#ffcc80',
                }}
                onClick={()=>{navigate('/dashboard/chart')}}
              >
                <CardContent>
                  <Typography variant="h4" component="h2" marginLeft={2}>
                    {itm?.name}
                  </Typography>
                  <Typography variant="h4" component="h2" marginLeft={2}>
                    {`Actual Target : ${itm?.target}`}
                  </Typography>
                  <Divider mt={1} />
                  <Grid container spacing={3} marginTop={1}>
                    <Grid item xs={4} sm={8} md={4}>
                      <AppWidgetSummary
                        title="Villages"
                        total={itm?.villages}
                        color="villages"
                        icon={'fontisto:holiday-village'}
                      />
                    </Grid>

                    <Grid item xs={4} sm={8} md={4}>
                      <AppWidgetSummary
                        title="Women"
                        total={itm?.women}
                        color="info"
                        icon={'twemoji:women-holding-hands'}
                      />
                    </Grid>

                    <Grid item xs={4} sm={8} md={4}>
                      <AppWidgetSummary
                        title="2nd Day TurnOut(%)"
                        total={`${itm?.day2}%`}
                        color="warning"
                        icon={'mdi:percent-circle-outline'}
                      />
                    </Grid>
                    <Grid item xs={4} sm={8} md={4}>
                      <AppWidgetSummary
                        title="Gelathis"
                        total={itm?.enrolled}
                        color="gelathis"
                        icon={'fluent:people-team-16-regular'}
                      />
                    </Grid>

                    <Grid item xs={4} sm={8} md={4}>
                      <AppWidgetSummary
                        title="Green Motivator"
                        total={itm?.greenMotivators}
                        color="motivator"
                        icon={'openmoji:leafy-green'}
                      />
                    </Grid>
                    <Grid item xs={4} sm={8} md={4}>
                      <AppWidgetSummary
                        title="Vyapar"
                        total={itm?.vyapar}
                        color="vyapar"
                        icon={'eos-icons:product-subscriptions-outlined'}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Page>
  );
}
