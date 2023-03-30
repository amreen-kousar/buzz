import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack,DialogContent,DialogContentText, Divider, Card, CardContent, Button, Box,IconButton} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Page from 'src/components/Page'
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { AppWidgetSummary } from '../../../sections/@dashboard/app';
import { useNavigate } from 'react-router-dom';
import FiltersHome from '../../Filters/FiltersHome';
import RadioGroup from '@mui/material/RadioGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Iconify from 'src/components/Iconify';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Projectdashboard() {
   console.log("called Projectdashboard()")
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose=()=>{
      setOpen(false)
    }
  const data = localStorage?.getItem('userId')
  useEffect(() => {
    apiHit();
  }, []);
  const itemStyles = [{ itemXs: 4, itemSm: 8, itemMd: 4 }, { itemXs: 6, itemSm: 8, itemMd: 6 }]

  const summaryDataView = [

    { ...itemStyles[0], title: "Target", total: 'summary_target', color: "actual" },

    { ...itemStyles[0], title: "Actual", total: 'summary_actual', color: "primary" },

    { ...itemStyles[0], title: "2nd Day TurnOut(%)", total: 'summary_day2', color: "warning", ext: ' % ', },

    {
      ...itemStyles[0], title: "Villages", total: 'summary_villages', color: "villages", styles: {
        backgroundImage: (theme) =>
          `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
            theme.palette[color].dark,
            0.24
          )} 100%)`,
      }, icon: 'fontisto:holiday-village'
    },

    { ...itemStyles[0], title: "Women", total: 'summary_women', color: "info", icon: 'twemoji:women-holding-hands' },

    { ...itemStyles[0], title: "Gelathis", total: 'summary_enrolled', color: "gelathis", icon: 'fluent:people-team-16-regular' },

    { ...itemStyles[1], title: "Green Motivator", total: 'summary_green', color: "motivator" },

    { ...itemStyles[1], title: "Enrolled Vyapar", total: 'summary_vyapar', color: "vyapar" }

  ]

  const summarySubDataView = [
    { ...itemStyles[0], title: "Villages", total: 'villages', color: "villages", icon: 'fontisto:holiday-village' },

    { ...itemStyles[0], title: "Women", total: 'women', color: "info", icon: 'twemoji:women-holding-hands' },

    { ...itemStyles[0], title: "2nd Day TurnOut(%)", total: 'day2', ext: ' % ', color: "warning", icon: 'twemoji:women-holding-hands' },

    { ...itemStyles[0], title: "Gelathis", total: 'enrolled', color: "gelathis", icon: 'fluent:people-team-16-regular' },

    { ...itemStyles[0], title: "Green Motivator", total: 'greenMotivators', color: "motivator", icon: 'openmoji:leafy-green' },

    { ...itemStyles[0], title: "Vyapar", total: 'vyapar', color: "vyapar", icon: 'eos-icons:product-subscriptions-outlined' },

  ]

  const [loader, setLoader] = useState(false)

  const [openFilter, setOpenFilter] = useState(false);

  const [filterData, setFilterData] = useState({})

  const [slected, setSelected] = useState(null)

  const [summaryData, setSummaryData] = useState([]);

  const theme = useTheme();

  

  const apiHit = async (id, i, g) => {
    console.log(i , "i data")
    console.log(g , "g data")
    setLoader(true)
    
    var userid = JSON.parse(localStorage.getItem('profiledetails'))?.emp_id
    var role = JSON.parse(localStorage.getItem('profiledetails'))?.role

    let roleid 

    if(role==="Trainer"){
      roleid="5"
      localStorage.setItem('profilerole','5')
    }else
    if(role==="Operations Manager"){
      roleid="4"
      localStorage.setItem('profilerole','4')
    }else if(role==="Gelathi Facilitator"){
      roleid="6"
    localStorage.setItem('profilerole','6')
    }
    else if(role==="Driver"){
      roleid= "7"
      localStorage.setItem('profilerole','7')
    }
    else if(role==="Gelathi Facilitator Lead"){
      roleid="13"
      localStorage.setItem('profilerole','13')
    }

    console.log(roleid , userid , "profile details")
    const data = {
      end_date: g === "date" ? i : '',
      role_id: roleid,
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
    {console.log(data.gflId, "hello data.gflId")}
    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/Scripts/getDashboardData.php',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    };
    axios(config)
      .then((response) => {
        console.log(response ,"api response in dashboard")
        setLoader(false)
        
        setSummaryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = (itm, i) => {
    setSelected(itm)
    const data = i === 2 ? { "funder_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : { "project_id": itm?.id }
    apiHit(itm, i)
    setFilterData(data)
    handleCloseFilter()
  }

  const onSumbit = (e, i) => {
    setSelected({ type: 'Location', name: `State : ${e?.stateName} ; District : ${e?.districtName} ; Taluk : ${e?.talukName}` })
    handleCloseFilter()
    apiHit(e?.district_id, e?.talaq_id, "country")
  }

  const onDateSubmit = (e) => {
    setSelected({ type: 'Date Range', name: `${e?.startDate} - ${e?.endDate}` })
    apiHit(e?.startDate, e?.endDate, "date")
    setFilterData({ from_date: e?.startDate, to_date: e?.endDate })
    handleCloseFilter()
  }

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleDelete = () => {
    setSelected(null)
    apiHit();
  }

  if (loader) {
    return (
      <Grid sx={{ display: 'flex',float:'right' }}>
        <CircularProgress />
      </Grid>
    )
  }


  //  const getData = (itm, i) => {
  //   setSelected({
  //     id: i,
  //     name: itm?.name
  //   })
  //   const data = i === 2 ? { "funder_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : { "project_id": itm?.id }
  //   apiHit(itm, i)
  //   console.log(data, i, itm, "<----sdfssreerfer")
  //   setFilterData(data)
  //   handleCloseFilter()
  //   console.log("sdfgsdfdfssd", itm, i)
  // }
  // const onSumbit = (e, i) => {
  //   handleCloseFilter()

  //   apiHit(e?.district_id, e?.talaq_id, "country")
  //   console.log(e, i, "<----datssdasdsa")
  // }

  const closefilter = () => {
    console.log("deleted")
  }
const idvalue=JSON.parse(localStorage.getItem('profilerole'))
console.log(idvalue,"idddddddddddddd")
  return (
<>
<IconButton onClick={handleClickOpen}><Iconify style={{ color: "black" ,right:0,float:'right'}} icon="fluent:notebook-eye-20-filled" /></IconButton>
   
<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
<AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
         Dashboard
          </Typography>

          </Toolbar>
        </AppBar>
        <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >

    <Page title="Dashboard">
 
      <Container maxWidth="xl">
       
      <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <FiltersHome
            type="ProjectDashboard"
            onDateSubmit={onDateSubmit}
            onSumbit={onSumbit}
            getData={getData}
            isOpenFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
        </Stack>

        {(idvalue==4 || idvalue==5)?<Grid container spacing={3} marginTop={1}>
            
          {
            summaryDataView.map(s => {
              return <Grid item xs={s.itemXs} sm={s.itemSm} md={s.itemMd}>

                <AppWidgetSummary
                  title={s.title }
                  total={`${summaryData[s.total]} ${s.ext ? s.ext : ''}`|| 0 }
                  color={s.color}
                  icon={s.icon}
                  styles={s.styles} />
              </Grid>
            })
          }

        </Grid>:
         <Grid container spacing={3} marginTop={4}>
         <Grid item xs={4} sm={8} md={4}>

           <AppWidgetSummary
             title="Total Circles"
             total={summaryData?.summary_circles}
             color="motivator"

           />
         </Grid>
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
       </Grid>}

       {(idvalue==4 || idvalue==5)?<Grid item xs={12} sm={12} md={12} marginTop={3}>
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
                onClick={() => {
                  navigate('/dashboard/app/chart', {
                    state: {
                      filterData: filterData
                    }
                  })
                }}>
                <CardContent>
                  <Typography variant="h4" component="h2" marginLeft={2}>
                   Project : {itm?.name}
                  </Typography>
                  <Typography variant="h4" component="h2" marginLeft={2}>
                    {`Actual / Target : ${itm?.actual} / ${itm?.target}`}
                  </Typography>
                  <Typography variant="h4" component="h2" marginLeft={2}>
                    {`Duration : ${itm?.startDate} to ${itm?.endDate}`}
                  </Typography>
                  <Divider mt={1} />
                  <Grid container spacing={3} marginTop={1}>
                    {
                      summarySubDataView.map(s => {
                        return <Grid item xs={s.itemXs} sm={s.itemSm} md={s.itemMd}>

                          <AppWidgetSummary
                            title={s.title || null}
                            total={`${itm[s.total]} ${s.ext ? s.ext : ''}`|| null }
                            color={s.color}
                            icon={s.icon}
                          />
                        </Grid>
                      })
                    }
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
        </Grid> : 
        <>{summaryData?.data?.map((item)=>{
            return(
              <>
              {summaryData?.data?
               <Card sx={{ marginTop: 5, marginLeft: 4, height: '400px' }}>

            <Typography variant="h4" gutterBottom style={{ marginLeft: "20px" }}>
              Project : {item?.name}
            </Typography>
            {/* <Graphchart/> */}
            <CardContent style={{ display: "flex" }}>
              <TableContainer component={Paper}>
                <Table aria-label="customized table" style={{ width: '200px', float: 'Left' }}>
                  <TableHead>
                    <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
                      <TableCell>Total Circles</TableCell>  <TableCell>:&nbsp;{item?.circles}</TableCell>
                    </TableRow>
                    <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
                      <TableCell>Circle Meetings</TableCell>  <TableCell>:&nbsp;{item?.circle_meet}</TableCell>
                    </TableRow>

                    <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
                      <TableCell>Village Visits</TableCell>  <TableCell>:&nbsp;{item?.villagevisit}</TableCell>
                    </TableRow>

                    <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
                      <TableCell>Beehive Visits</TableCell>  <TableCell>:&nbsp;{item?.beehive}</TableCell>
                    </TableRow>

                    <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
                      <TableCell>Enrolled Gelathis</TableCell>  <TableCell>:&nbsp;{item?.enroll}</TableCell>
                    </TableRow>

                  </TableHead>
                  <TableBody>

                  </TableBody>
                </Table>
              </TableContainer>


            </CardContent>
          </Card> 
          :  <h1 style={{ fontWeight: 900, textAlign: 'center' }}><br />No Projects</h1>}
              </>
            )
          })
          }</>}


      </Container>
    </Page> 
    </DialogContentText>
    </DialogContent>
    </Dialog></>
  );
}
