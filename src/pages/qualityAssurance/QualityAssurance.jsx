import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Container,
  Typography,
  Stack,
  Divider,
  Card,
  CardContent,
  Button,
  Box,
  ButtonGroup,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import Chip from '@mui/material/Chip';
import { AppWidgetSummary } from '../../sections/@dashboard/app';
import { useNavigate } from 'react-router-dom';
import FiltersHome from '../Filters/FiltersHome';
import DialogForm from './components/DialogForm'
import {baseURL} from 'src/utils/api';

export default function QualityAssurance() {
  
  
  
  const [loader, setLoader] = useState(false)
const [errorMsg,setErrormsg]=useState('');
  const [openFilter, setOpenFilter] = useState(false);

  const [filterData, setFilterData] = useState({});

  const [slected, setSelected] = useState(null);

  

  const [open, setOpen] = React.useState(false);

  const [batch,setBatch] = useState('')

  const [shown,setShown] = React.useState(false);
  const [summaryData, setSummaryData] = useState([]);

  const styles = {
    buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left", width:"100%"},
    tableRowStyle: { justifyContent: 'center', alignItems: 'center', marginLeft: 200 },
    linkStyle: { textDecoration: 'none', color: "black" },
    cirleMeetingbuttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left", marginBottom:"20px" },
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const apiHit = async (id, i, g) => {
    console.log("🚀 ~ file: Gelathidashboard.js:45 ~ apiHit ~ id, i, g:", id, i, g)
    setLoader(true)
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    console.log( role , userid , " role user id ")
   
    const data = {
      "Emp_id":parseInt(userid),
    "Role_id":parseInt(role)
     
  }
  
    console.log(data, '<------bbbbbbb');
    const config = {
      method: 'post',
      // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
      url: baseURL +'getDashboard',
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

        console.log("responseofapi", response.data)
      })
      .catch((error) => {
     ``
        setErrormsg(error)
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
  
  // if(errorMsg!=''){
  //   return(
  //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '70vh',fontWeight:700}} style={{fontSize:30}} >
  //       {errorMsg?.message}
  //     </Box>
  //   )
  // }

  return (
    <>
      <Page title="Dashboard">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" gutterBottom sx={{ ml: 4 }}>
           Quality Assessment
          </Typography>
          {/* <Button
            style={{ float: 'right', color: '#ff7424' }}
            sx={{ '&:hover': { backgroundColor: '#ffd796' } }}
            onClick={() => {
              handleOpenFilter();
            }}
          >
            Filter
          </Button> */}
        </Stack>
        <Container maxWidth="xl">
          <Grid item spacing={10}></Grid>

          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <FiltersHome
              type="Dashboard"
              // onDateSubmit={onDateSubmit}
              // onSumbit={onSumbit}
              // getData={getData}
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>

          <Grid justifyContent="center" container spacing={3} marginTop={1}>
            <Grid onClick={handleClickOpen} item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Self Shakti Training Program" total={summaryData.SStraining} color="primary" />
            </Grid>

            <Grid onClick={handleClickOpen} item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Gelathi Program" total={summaryData.GelathiProgram} color="secondary" />
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <AppWidgetSummary title="Self Shakti by Gelathi" total={summaryData.SSbyGelathi} color="gelathis" />
            </Grid>
          </Grid>
          {/* <DialogForm batch={batch} shown={shown} setShown={(e)=>{setShown(e)}} /> */}
          {/* <Card onClick={()=>{setShown(true),console.log("ferfgreg")}}
            style={{ marginTop: 20 }}>
          
           
            <CardContent>
            
              <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
                <Iconify icon="material-symbols:add" width={30} height={30} />
              </div>
              <Typography>Self Shakti Training Program</Typography>
            </CardContent>
          </Card> */}
          <div style={{display:'flex', flexDirection:'column', justifyContent:"center",alignItems:"center" ,width:"100%"}}>
          <div style={{marginTop:"20px" }}>
          <Link to="/dashboard/qualityAssurance/selfsakthi"
          //  state={{ id: data1?.project_id }}
            style={styles.linkStyle}>
                    <Button variant="secondary"
                    //  onClick={()=>{
                    //   alert("Work is in Progress")
                    //  }}
                     style={styles.buttonStyle}
                    endIcon={<IconButton> <Iconify style={{ color: "black" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="ic:sharp-supervised-user-circle" /></IconButton>}>
                    <span style={{ width: "200px" }}>  Self Shakti Training Program</span>
                  </Button>
                  </Link>

                  </div>
                  <div style={{marginTop:"20px"}}>

              <Link to="/dashboard/qualityAssurance/greenprogram" 
  
             style={styles.linkStyle}> 
                    <Button variant="secondary"
                     style={styles.buttonStyle}
                    
                    endIcon={<IconButton> <Iconify style={{ color: "black" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="ic:sharp-supervised-user-circle" /></IconButton>}>
                    <span style={{ width: "200px" }}>Green Program</span>
                  </Button>
                  </Link>
                  <div style={{marginTop:"20px"}}>

                
                  <Link to="/dashboard/qualityAssurance/selfsakthibygelathi"
        //    state={{ id: data1?.project_id }}
            style={styles.linkStyle}> 
                    <Button variant="secondary"
                  
                     style={styles.buttonStyle}
                    endIcon={<IconButton> <Iconify style={{ color: "black" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="ic:sharp-supervised-user-circle" /></IconButton>}>
                    <span style={{ width: "200px" }}> Self Shakti by Gelathi</span>
                  </Button>
                  </Link> 
                  </div>
          </div>
         </div>
          {/* <Card
            onClick={() => {
              setShown(true), console.log('ferfgreg');
            }}
            style={{ marginTop: 20 }}
          > */}
            {/* <CardContent>
              <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
                <Iconify icon="material-symbols:add" width={30} height={30} />
              </div>
              <Typography>Gelathi Program</Typography>
            </CardContent>
          </Card> */}
          {/* <Card
            onClick={() => {
              setShown(true), console.log('ferfgreg');
            }}
            style={{ marginTop: 20 }}
          >
            <CardContent>
              <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
                <Iconify icon="material-symbols:add" width={30} height={30} />
              </div>
              <Typography>Self Shakti by Gelathi</Typography>
            </CardContent>
          </Card> */}
        </Container>
      </Page>
    </>
  );
}
