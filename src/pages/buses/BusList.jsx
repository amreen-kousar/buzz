
import { useState, useEffect, forwardRef, useRef } from 'react';
// material
import { Card, Stack, Chip, Button, Container, Typography, Grid, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
// Axios
import axios from 'axios';
// components
import Page from '../../components/Page';
import BuslistDrawer from '../Components/BuslistDrawer';
import BusListFilter from '../Components/Buslistfilters/BusListFilter';
import Addbus from './Addbus';

export default function User() {

  var userAccess = ['2']

  var userIdCheck = localStorage?.getItem('userId')

  const [openMessage, setOpenMessage] = useState(false);

  const [clcikData, setClickData] = useState()

  const [search, setSearch] = useState('')

  const [dw, setDw] = useState(false)

  const descriptionElementRef = useRef(null);

  const [buses, setBuses] = useState();

  useEffect(() => {
    setDw(false)
    busesd()
  }, [search, dw]
  )

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const busesd = async (i, id) => {
    const data = JSON.stringify({
      "date": "",
      "role_id": 1,

      "project_id": id === 3 ? i?.id : "",
      "taluk_id": "",
      "district_id": "",
      // "taluk_id": g==="country"?i:"",
      // "district_id":g==="country"?id:"",
      "funder_id": id === 2 ? i?.id : "",
      "emp_id": 206,
      "search": search
    });
    console.log(data, "<----qwertyuiosdfgh")
    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getBuses.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)

      .then((response) => {
        setBuses(response?.data)
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }




  const [openFilter, setOpenFilter] = useState(false);
  const [openbusfilter, setopenbusfilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleopenbusfilter = () => {
    setopenbusfilter(true);
  };

  const handleclosebusfilter = () => {
    setopenbusfilter(false);
  };
  const getData = (itm, i) => {
    setopenbusfilter(false);
    console.log(itm, i, "<-----qwertyu")
    // setSelected({
    //   id: i,
    //   name: itm?.name
    // })
    // const data = i===2?{"funder_id":itm?.id}:i===1?{"partner_id":itm?.id}:{"project_id":itm?.id}
    busesd(itm, i)
    // console.log(data,i,itm,"<----sdfssreerfer")
    // setFilterData(data)
    // handleCloseFilter()
    // console.log("sdfgsdfdfssd", itm, i)
  }


  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Page title="User">

      <Container>
        <Snackbar open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
        {/* <DashboardNavbar getSearch={(e) => setSearch(e)} onOpenSidebar={() => setOpen(true)} /> */}

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            All Bus List

          </Typography>
          <Button style={{ float: "right", color: '#ed6c02' }}
            sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
              },
            }}
            onClick={() => {
              handleopenbusfilter()
            }}>
            Filter
          </Button>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>
        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <BuslistDrawer
            clcikData={clcikData}
            isOpenFilter={openFilter}
            deletebuses={() => {
              setDw(!dw)
              handleCloseFilter()
              setOpenMessage(true)
            }}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
        </Stack>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <BusListFilter
            getData={getData}
            clcikData={clcikData}
            isOpenFilter={openbusfilter}
            onOpenFilter={handleopenbusfilter}
            onCloseFilter={handleclosebusfilter}
          />
        </Stack>


        {buses?.list?.length == 0 && (

          <div>
            <h1>no data found</h1>
          </div>

        )}
        {/* </Stack> */}
        {buses?.list?.map((itm) => {
          return (
            <Card style={styles.card1}
              onClick={() => {
                setClickData(itm)
                handleOpenFilter()
              }}>

              <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                <Typography variant="subtitle1" gutterBottom  >
                  {`Bus Number : ${itm?.register_number}`}

                </Typography>
                {/* 
                <Typography variant="subtitle1" gutterBottom>
                  {` Project Name : ${itm?.project_name}`}
                </Typography> */}
              </Grid>
              <Grid style={{ marginLeft: 15 }}>
                <Typography variant="subtitle2" gutterBottom >
                  Today Checklist Status : <Chip label="Published" size="small" color="success" variant="outlined" />

                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }}>
                  Checked/Total : 0/16
                </Typography>
              </Grid>
            </Card>
          )
        })}
        {/* <Button style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'relative', zIndex: '1',top:"40",left:"50" }}
         sx={{
          '&:hover': {
            backgroundColor: '#ffd796',
         
          },
        backgroundColor:"#ffd796"
       }} variant="contained" onClick={handleClickOpen('paper')}>
          <span style={{ fontSize: "2rem",color:"#ed6c02" }}>+</span></Button> */}
      </Container>
      {userAccess.includes(userIdCheck) && <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
        <Addbus />
      </Stack>}

    </Page>
  );
}
const styles = {
  card1: {
    backgroundColor: 'inherit',
    opacity: 0.9,
    marginTop: "10px"
  },
}