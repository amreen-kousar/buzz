import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button, Box } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Page from 'src/components/Page';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import moment from 'moment'; 
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
const VyaparProgramDashboard = () => {
  const navigate = useNavigate();
  const data = localStorage?.getItem('userId');
  var roleid = JSON.parse(localStorage.getItem('userDetails'))?.role;
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
  const apiHit = async (id, i, g,date1,date2) => {
    setLoader(true);
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role;
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    const data = {
      "partner_id":i === 1 ? id?.id : '',
      "start_date": (g === "date")? id:(g==="Calendar"|| g=== "countryCalendar")?moment(date1?.$d)?.format('YYYY-MM-DD'): '',
      "end_date": (g === "date")? i:(g==="Calendar"|| g=== "countryCalendar")?moment(date2?.$d)?.format('YYYY-MM-DD'):'',
      "funder_id":i === 2 ? id?.id : '',
      "dist":(g === "country" || g==="countryCalendar") ? id : '',
      "taluk":(g === "country" || g==="countryCalendar") ? i : '',
      "project_id":i === 3 ? id?.id : '',
      "trainer_id":i === 5 ? id?.id : '',
      "opsmanager": i === 4 ? id?.id : '',
      "somid":i === 12 ? id?.id : '',
      "gflid": i === 13 ? id?.id : '',
      "roleid":role,
      "emp_id":userid
  }
  
    const config = {
      method: 'post',
      url: baseURL +'vyaparDashboard',
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
        // console.log(error,"errorrrrrrrrrrrr");
      });
  };
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
  };
  const handleDelete = () => {
    setSelected(null);
    apiHit();
  };
  if (summaryData?.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  const getData = (itm, i,date1,date2,dateValue,endDateValue,g) => {
    setSelected(itm);
    const data = i === 2 ? { "funder_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : 
    i===3?{ "project_id": itm?.id }:i==4?{"opsManager":itm?.id}:i===12?{"somId":itm?.id} :i===5?{"trainerId":itm?.id}:{"gflId":itm?.id}
    if(dateValue || endDateValue)
    {
      apiHit(itm, i,"Calendar",date1,date2)
      
    }
    else{
      
      apiHit(itm,i)
    }
    setFilterData(data);
    handleCloseFilter();
  };
  const onSumbit = (e, i) => {
    handleCloseFilter();
    setSelected({ type: 'Location', name: ` ${e?.stateName} - ${e?.districtName} - ${e?.talukName}` });
    if(e?.dateValue || e?.endDateValue)
    {
      apiHit(e?.district_id, e?.talaq_id, "countryCalendar",e?.start_date,e?.end_date,)
    }
    else{
      apiHit(e?.district_id,e?.talaq_id,"country")
    }
  };
 
  return (
    <>
      <Page title="Dashboard">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" gutterBottom sx={{ ml: 4 }}>
          Vyapar Program Summary
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
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
         {
 (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)?
           
         <Grid container spacing={3} marginTop={4}>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Number of Vyapar Cohorts"
               total={summaryData?.summary_Noofvyaparcoharts} 
               color="motivator" />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Villages"
                total={summaryData?.summary_villages}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number  of Vyapari's Enrolled"
                total={summaryData?.summary_vyaparenrolled}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Vyapar Survey"
                total={summaryData?.summary_NoofVyaparsurvey}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Vyapar Modules Completed"
                total={summaryData?.summary_Noofvyaparmodulecomoleted}
                color="motivator"
              />
            </Grid>
         
          </Grid>
          
          :
          
           (roleid == 5 || roleid == 6 ||roleid == 13)?
          <>
          <Grid container spacing={3} marginTop={4}>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Actual"
               total={summaryData?.summary_actual} 
               color="motivator" />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Target"
               total={summaryData?.summary_Target} 
               color="motivator" />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Villages "
                total={summaryData?.summary_villages}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number  of Vyapar Enrolled"
                total={summaryData?.summary_vyparenrolled}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Vyapar Cohorts"
                total={summaryData?.summary_vyaparcoharts}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Vyapar Survey"
                total={summaryData?.summary_vyaparsurvey}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Vyapar Enrolled"
                total={summaryData?.summary_vyparenrolled}
                color="motivator"
              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary
                title="Number of Module Completed "
                total={summaryData?.summary_noofmodulecompleted}
                color="motivator"
              />
            </Grid>
          </Grid>
          </>:
          <>
          </>
}
        {/* founder */}
{
  (roleid == 1 || roleid == 9 || roleid == 3 || roleid == 4 || roleid == 12)?
       
  <CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
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
                
                >
                <CardContent>
<Container style={{ display: 'flex', flexDirection: 'column' }}>
  <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1' }}>
      {(itm?.startDate)?"Project Name":"Funder"}<br />
     
    </span>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '2'}}>
      &nbsp;:&nbsp;{itm?.name}<br />
    </span>
    
    
    </Grid>
    <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1' }}>
    Actual / Target  <br />
     
    </span>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '2' }}>
     
      &nbsp;:&nbsp;{itm?.actual} / {itm?.target}
    </span>
  </Grid>
 
</Container>
                  <Divider mt={1} />
                  <Grid container spacing={3} marginTop={4}>
          
<Grid item xs={6} sm={6} md={6}>
              <AppWidgetSummary
                title="Number  of Villages"
                total={itm?.villages}
                color="villages"
                icon= "fontisto:holiday-village"
              />
            </Grid>
  <Grid item xs={6} sm={6} md={6}>
              <AppWidgetSummary
                title="Number of Batches"
                total={itm?.noofvyaparcoharts}
                color="motivator"
                icon="twemoji:women-holding-hands"
              />
            </Grid>
  <Grid item xs={6} sm={6} md={6}>
<AppWidgetSummary
  title="Number of Vyapar Survey "
  total={itm?.nofvyaparsurvey}
  color="vyapar"
  icon="eos-icons:product-subscriptions-outlined"
/>
</Grid>
  <Grid item xs={6} sm={6} md={6}>
              <AppWidgetSummary
                title="Number of Module Completed"
                total={itm?.noofvyaparmodulecompleted}
                color="vyapar"
                icon="eos-icons:product-subscriptions-outlined"
              />
            </Grid>
  <Grid item xs={6} sm={6} md={6}>
              <AppWidgetSummary
                title="Number of Vyapar Enrolled "
                total={itm?.vyaparenrolled}
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
:         
          
(roleid == 5 ||roleid == 6 ||roleid == 13)?
<>
<CardContent>
            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
              Project List : 
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
                
                >
                <CardContent>
              
                <Container style={{ display: 'flex', flexDirection: 'column' }}>
  <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1' }}>
      {(itm?.startDate)?"Project Name":"Funder"}<br />
     
    </span>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '2'}}>
      &nbsp;:&nbsp;{itm?.name}<br />
      {/* &nbsp;:&nbsp;{itm?.actual} / {itm?.target} */}
    </span>
    </Grid>
    <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1' }}>
    Actual / Target  <br />
     
    </span>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '2' }}>
     
      &nbsp;:&nbsp;{itm?.actual} / {itm?.target}
    </span>
  </Grid>
  <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1' }}>
    Start Date  <br />
     
    </span>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '2' }}>
     
      &nbsp;:&nbsp;{itm?.startDate} 
    </span>
  </Grid>
  <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '1' }}>
    End Date  <br />
     
    </span>
    <span style={{ fontWeight: 700, fontSize: 15, flex: '2' }}>
     
      &nbsp;:&nbsp;{itm?.endDate} 
    </span>
  </Grid>
</Container>
                  <Divider mt={1} />
                  <Grid container spacing={3} marginTop={4}>
          
<Grid item xs={6} sm={6} md={6}>
              <AppWidgetSummary
                title="Number  of Villages "
                total={itm?.villages}
                color="villages"
                icon= "fontisto:holiday-village"
              />
            </Grid>
  <Grid item xs={6} sm={6} md={6}>
              <AppWidgetSummary
                title="Number of Vyapar Cohorts"
                total={itm?.noofVyaparCohorts}
                color="motivator"
                icon="twemoji:women-holding-hands"
              />
            </Grid>
  <Grid item xs={6} sm={6} md={6}>
<AppWidgetSummary
  title="Number of Vyapar Survey"
  total={itm?.noOfvyaparsurvey}
  color="vyapar"
  icon="eos-icons:product-subscriptions-outlined"
/>
</Grid>
  <Grid item xs={6} sm={6} md={6}>
<AppWidgetSummary
  title="Number of Vyapar Module Completed "
  total={itm?.noofvyaparmodulcompleted}
  color="vyapar"
  icon="eos-icons:product-subscriptions-outlined"
/>
</Grid>
           
          
<Grid item xs={12} sm={6} md={6}>
<AppWidgetSummary
  title="Number of Vypar "
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
<>
</>
}
{/* founder end  */}
        </Container>
      </Page>
    </>
  );
};
export default VyaparProgramDashboard