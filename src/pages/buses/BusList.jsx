import { useState, useEffect, forwardRef, useRef } from 'react';
import { Card, Stack, Chip, Button, Container, Typography, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import Page from '../../components/Page';
import BuslistDrawer from '../Components/BuslistDrawer';
import Addbus from './Addbus';
import Searchbar from 'src/layouts/dashboard/Searchbar';
import FiltersHome from '../Filters/FiltersHome';
import Iconify from '../../components/Iconify';
export default function User() {
  var userAccess = ['2']
  var userIdCheck = localStorage?.getItem('userId')
  const [openMessage, setOpenMessage] = useState(false);
  var [selected, setSelected] = useState(null)
  const [clcikData, setClickData] = useState()
  var [search, setSearch] = useState('')
  const [dw, setDw] = useState(false)
  const descriptionElementRef = useRef(null);
  const [buses, setBuses] = useState();
  const [count, setCount] = useState()
  const [cc, setCc] = useState()
  var [totalCount, settotalCount] = useState(0)

  useEffect(() => {
    setDw(false)
    busesd()
  }, [dw])
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const busesd = async (i, id, g) => {
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
  
    const data = JSON.stringify({
      "date": "",
      "role_id": role,
      "project_id": id === 3 ? i?.id : "",
      taluk_id: g === "country" ? id : "",
      district_id: g === "country" ? i : "",
      "funder_id": id === 2 ? i?.id : "",
      "emp_id": userid,
      "search": search
    });
    console.log(data, "checking for search")
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
        settotalCount(response?.data?.total_count)
        setBuses(response?.data?.list)
        setCount(response?.data?.list.length)
      })
      .catch((error) => {
        // console.log(error);
      });
  }
  const onSumbit = (e, i) => {
    setSelected({ type: 'Location', name: ` ${e?.stateName} ; District : ${e?.districtName} ; Taluk : ${e?.talukName}` })
    handleclosebusfilter()
    busesd(e?.district_id, e?.talaq_id, "country")
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
    setSelected(itm)
    busesd(itm, i)
  }
  const searchFunction = (e) => {
    search = e
    setSearch(search)
    setSelected([{ name: e, type: "Search" }])
    busesd()
  }
  const resetBus = () => {
    setSelected([])
    setSearch([])
    busesd()
  }
  const handleDelete = (itmTodelete) => {
    setSelected(null)
    busesd()
  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Page title="User">
      <Searchbar id="search-bar" getSearch={(e) => searchFunction(e)} />
      <Container>
        <Snackbar id="snackbar-alert-bus" open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert id="delete-bus-alert" onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
            Bus Has Been Deleted Successfully
          </Alert>
        </Snackbar>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            {selected?.type ? " Bus List" : "All Bus List "}&nbsp;({count})
          </Typography>
          <Button id="bus-list" style={{ float: "right", color: '#ff7424' }}
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
        </Stack>
        
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <BuslistDrawer id="bus-list-drawer" updatedata={() => { setDw(!dw) }}
            clcikData={clcikData}
            busesd={busesd}
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
        {selected?.type &&
          <Stack direction="row" spacing={1}>
             <Chip style={{ backgroundColor: '#ffd796', color: '#000' }}label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} />
          </Stack>
        }
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <FiltersHome
            id="list-bus"
            onSumbit={onSumbit}
            type="BusList"
            resetBus={resetBus}
            getData={getData}
            clcikData={clcikData}
            isOpenFilter={openbusfilter}
            onOpenFilter={handleopenbusfilter}
            onCloseFilter={handleclosebusfilter}
          />
        </Stack>
        {buses?.length == 0 && (
          <div>
            <h1 id="bus-no-data-fnd" style={{ fontWeight: 900, textAlign: 'center' }}><br />No data found</h1>
          </div>
        )}
        {buses?.map((itm,index) => {
          return (
            <Card id={index} style={styles.card1}
              onClick={() => {
                setClickData(itm)
                handleOpenFilter()
              }}>
              <div style={{ float: 'left', padding:'20px',backgroundColor:'white' }}>
                <Iconify id="direction-bus-icon" icon="material-symbols:directions-bus" width={30} height={30} />
              </div>
              <Card sx={{ boxShadow: 0 }} >
              <Grid pt={1} pb={1} container xs={6} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15, cursor: "pointer" }}>
                <Typography id="bus-number" variant="subtitle1" gutterBottom  >
                  {`Bus Number : ${itm?.register_number}`} 
                </Typography>
                
              </Grid>
              <Grid style={{ marginLeft: 15 }}>
              <Typography id="project-name" gutterBottom  >
                  {`Project Name : ${itm?.project_name}`}
                </Typography>
              </Grid></Card>
            </Card>
          )
        })}
      </Container>
      {userAccess.includes(userIdCheck) &&
       <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
        <Addbus />
     
      </Stack>
      }
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