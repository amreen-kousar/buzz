import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button, Box } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Chip from '@mui/material/Chip';
import { AppWidgetSummary } from '../sections/@dashboard/app';
import DashboardFilter from './Components/DashboardFilters/DashboardFilter';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';

import { useNavigate } from 'react-router-dom';

export default function Gelathidashboard(){
    const navigate = useNavigate();
    const data = localStorage?.getItem('userId')
    const theme = useTheme();
    const intialValues  = {
      funder:"",
      patner:"",
      project:"",
      fromDate:'',
      toDate:""
    }
    const [openFilter, setOpenFilter] = useState(false);
   
    const [filterData,setFilterData] = useState({})
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
        role_id: 6,
        taluk_id: g==="country"?i:"",
        district_id:g==="country"?id:"",
        trainerId: g?"": i===5?id?.id:'',
        emp_id: 6,
        start_date:g==="date"?id: '',
        somId:g?"": i===12?id?.id:'',
        gflId:g?"": i===13?id?.id:'',
        funder_id:g?"": i===2?id?.id:'',
        partner_id:g?"": i===1?id?.id:'',
        project_id:g?"": i===3?id?.id:'',
        opsManager:g?"": i===4?id?.id:'',
      };
      const datas = {
        end_date: i,
        role_id: 6,
        taluk_id: "",
        district_id:"",
        trainerId: '',
        emp_id: 6,
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
        url: 'https://bdms.buzzwomen.org/appTest/Scripts/getDashboardData.php',
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
      setFilterData({from_date:e?.startDate,to_date:e?.endDate})
      handleCloseFilter()
    console.log(e,"<----scasds")
    }
  
    if (summaryData?.length === 0) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '70vh' }}>
          <CircularProgress />
        </Box>
      )
    }
  
  
    const getData = (itm, i) => {
      setSelected({
        id: i,
        name: itm?.name
      })
      const data = i===2?{"funder_id":itm?.id}:i===1?{"partner_id":itm?.id}:{"project_id":itm?.id}
      apiHit(itm, i)
      console.log(data,i,itm,"<----sdfssreerfer")
      setFilterData(data)
      handleCloseFilter()
      console.log("sdfgsdfdfssd", itm, i)
    }
    const onSumbit = (e, i) => {
      handleCloseFilter()
  
      apiHit(e?.district_id, e?.talaq_id, "country")
      console.log(e, i, "<----datssdasdsa")
    }
  
    const closefilter =()=>{
      console.log("deleted")
    }

    return(
        <>  

   <Page title="Dashboard">
      
      <Container maxWidth="xl">
      <Button style={{ float: "right",color:'#ed6c02'}} 
          sx={{
            '&:hover': {
              backgroundColor: '#ffd796',
            },
          }}  
            onClick={() => {
              handleOpenFilter()
            }}>
            Filter
          </Button>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <DashboardFilter
            onDateSubmit={onDateSubmit}
            onSumbit={onSumbit}
            getData={getData}
            //clcikData={clcikData}
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
          <Grid container spacing={3} marginTop={4}>
        <Grid item  xs={4} sm={8} md={4}>

          <AppWidgetSummary
            title="Total Circles"
             total={summaryData?.summary_circles}
            color="motivator"

          />
          </Grid>
          <Grid item  xs={4} sm={8} md={4}>

          <AppWidgetSummary
            title="Circle Meetings"
             total={summaryData?.summary_circle_meet}
            color="motivator"

          />
          </Grid>
          <Grid item  xs={4} sm={8} md={4}>

          <AppWidgetSummary
            title="Village Visits"
            total={summaryData?.summary_villagevisit}
            color="motivator"

          />
          </Grid>
          <Grid item  xs={6} sm={6} md={6}>

          <AppWidgetSummary
            title="Beehive Visits"
            total={summaryData?.summary_beehive}
            color="motivator"

          />
          </Grid>
          <Grid item  xs={6} sm={6} md={6}>

          <AppWidgetSummary
            title="Enrolled Gelathis"
           total={summaryData?.summary_enroll}
            color="motivator"

          />
          </Grid>
          <Grid item  xs={6} sm={6} md={6}>

          <AppWidgetSummary
            title="Green Motivators"
             total={summaryData?.summary_green}
            color="motivator"

          />
          </Grid>
          <Grid item  xs={6} sm={6} md={6}>
          <AppWidgetSummary
            title="Enrolled Vyapor"
            total={summaryData?.summary_vyapar}
            color="motivator"

          />
          </Grid>
          </Grid>
          </Container>
          </Page>
        </>
    )
}