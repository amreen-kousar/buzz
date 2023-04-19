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
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import { max } from 'lodash';
import FiltersHome from './Filters/FiltersHome';
import { styled } from '@mui/material/styles';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  // marginLeft: 'auto' ,
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
}));
export default function Operationmanagerdashboard() {

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
  const itemStyles = [{ itemXs: 4, itemSm: 8, itemMd: 4 }, { itemXs: 6, itemSm: 8, itemMd: 6 }]


  const summarySubDataView = [
    { ...itemStyles[0], title: "Villages", total: 'villages', color: "villages", icon: 'fontisto:holiday-village' },

    { ...itemStyles[0], title: "Women", total: 'women', color: "info", icon: 'twemoji:women-holding-hands' },

    { ...itemStyles[0], title: "2nd Day TurnOut(%)", total: 'day2', ext: ' % ', color: "warning", icon: 'twemoji:women-holding-hands' },

    { ...itemStyles[0], title: "Gelathis", total: 'enrolled', color: "gelathis", icon: 'fluent:people-team-16-regular' },

    { ...itemStyles[0], title: "Green Motivator", total: 'greenMotivators', color: "motivator", icon: 'openmoji:leafy-green' },

    { ...itemStyles[0], title: "Vyapar", total: 'vyapar', color: "vyapar", icon: 'eos-icons:product-subscriptions-outlined' },

  ]

  const [openFilter, setOpenFilter] = useState(false);

  const [filterData, setFilterData] = useState({})

  const [slected, setSelected] = useState(null)

  const [summaryData, setSummaryData] = useState([]);

  const [loader, setLoader] = useState(false)


  useEffect(() => {
    apiHit();
  }, []);

  const apiHit = async (id, i, g) => {
  
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    setLoader(true)
    const data = {
      end_date: g === "date" ? i : '',
      role_id: role,
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
        setSummaryData(response.data);
        console.log(response.data, '<-------njnnjhnjhjh');
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  if (summaryData?.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '70vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  const handleDelete = () => {
    setSelected(null)
    apiHit();
  }

  const getData = (itm, i) => {
    setSelected(itm)
    const data = i === 2 ? { "funder_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : { "project_id": itm?.id }
    apiHit(itm, i)
    console.log(data, i, itm, "<----sdfssreerfer")
    setFilterData(data)
    console.log(filterData,"hyyyyyyyyyyy")
    handleCloseFilter()
    console.log("sdfgsdfdfssd", itm, i)
  }

  const onSumbit = (e, i) => {
    setSelected({ type: 'Location', name: ` ${e?.stateName} - ${e?.districtName} - ${e?.talukName}` })

    handleCloseFilter()
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
     
          <Grid container spacing={3} marginTop={4}>
            <Grid item xs={4} sm={8} md={4} >

              <AppWidgetSummary 
                title="Target"
                total={summaryData?.summary_target}
                color="actual"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Actual"
                total={summaryData?.summary_actual}
                color="primary"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="2nd day Turnout(%)"
                total={summaryData?.summary_day2}
                color="warning"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Villages"
                total={summaryData?.summary_villages}
                color="villages"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Women"
                total={summaryData?.summary_women}
                color="info"

              />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>

              <AppWidgetSummary
                title="Gelathis"
                total={summaryData?.summary_enrolled}
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
                title="Enrolled Vyapor"
                total={summaryData?.summary_vyapar}
                color="vyapar"

              />
            </Grid>
   <Grid item xs={12} sm={12} md={12} marginTop={3}>
          {
            summaryData?.data?.map((itm)=>{
            
              return(
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
                  navigate('/dashboard/operationmanager/chart', {
                    state: {
                      filterData: filterData
                    }
                  })
                }}
                >
                  <CardContent>
                  {/* <Typography variant="h6" component="h6" marginLeft={2}>
                    Project  :{itm?.name}<br/>
                 
                    {`Actual / Target : ${itm?.actual} / ${itm?.target}`}<br/>
                 
                    {`Duration :   ${moment(itm?.startDate)?.format('DD-MM-YYYY')} /  ${moment(itm?.endDate)?.format('DD-MM-YYYY')}`}<br/>
                  </Typography> */}
                  <TableContainer >
                  <Table aria-label="customized table">
                    <TableBody>
                      <TableRow >
                        <TableCell><span style={{fontWeight:700,fontSize:15}}>Project<br/>Actual / Target<br/>Duration</span> </TableCell>
                        <TableCell><span style={{fontWeight:700,fontSize:15}}>:&nbsp;{itm?.name}<br/>:&nbsp; {itm?.actual} / {itm?.target} <br/>:&nbsp;{moment(itm?.startDate)?.format('DD-MM-YYYY')} / {moment(itm?.endDate)?.format('DD-MM-YYYY')}</span>  </TableCell>
                      </TableRow>
                      
                     
                    </TableBody>
                  </Table>
                </TableContainer>

                  <Divider mt={1} />
                  <Grid container spacing={3} marginTop={1}>
                    {
                      summarySubDataView.map(s => {
                        return <Grid item xs={s.itemXs} sm={s.itemSm} md={s.itemMd} >

                          <AppWidgetSummary 
                            title={s.title}
                            total={`${itm[s.total]} ${s.ext ? s.ext : ''}`}
                            color={s.color}
                            icon={s.icon}
                          />
                        </Grid>
                      })
                    }
                  </Grid></CardContent></Card>)
            })
          }
            {console.log(filterData,"filterdataaaaaaaaa")}

          </Grid>

          </Grid>
        </Container>
      </Page>
    </>
  )

}