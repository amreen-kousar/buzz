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
import DashboardNavbar from 'src/layouts/dashboard/DashboardNavbar';
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
  const [open, setOpen] = useState(false)
  const descriptionElementRef = useRef(null);
  const [buses, setBuses] = useState();
  const [respBuses, setRespbuses] = useState()
  const [count, setCount] = useState()
  const [cc, setCc] = useState()
  var [totalCount, settotalCount] = useState(0)

  useEffect(() => {
    console.log("entered in byss")
  }, [])

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
        console.log("respoonse in Bus List", response.data, id, i)
        settotalCount(response?.data?.total_count)
        console.log(response.data.list.length, "responseeeeeeeeeeeeeeeeeeeeee")
        // if (filterBusItem) {
        //   if (selected.length == 0) {
        //     setBuses(respBuses?.list)
        //   }
        //   else if (response?.data?.list?.length > 0) {
        //     console.log(buses)
        //     let filteredBuses = buses?.filter(({ id }) => response?.data?.list.some(x => x.id !== id))
        //     setBuses([...filteredBuses])
        //   }
        // }
        // else {
        //   if (selected.length == 1) {
        //     setBuses(response?.data?.list)
        //   }
        //   else if (selected.length > 0) {
        //     buses.push(...response?.data?.list)
        //     setBuses([...buses])
        //   }
        //   else if (selected.length == 0) {
        //     setRespbuses(response?.data)
        //     setBuses(response?.data?.list)
        //   }
        //   else {
        //     setBuses(respBuses?.list)
        //   }
        // }

console.log(response.data.list , "busses data")
        setBuses(response?.data?.list)
        setCount(response?.data?.list.length)
        setCc(response?.data?.checked_count)
      })
      .catch((error) => {
        console.log(error);
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
    console.log(itm, "get Data in Bus List")
    setopenbusfilter(false);
    console.log(selected, "Selected ")
    setSelected(itm)
    busesd(itm, i)
    // if (search != "") {
    //   selected = []
    //   setSelected(selected)
    //   setSearch([])
    //   console.log("empty select")
    // }
    // let filterSelect = selected.length == 0 ? [] : selected.filter(s => s?.id == itm?.id)
    // console.log(filterSelect)
    // if (filterSelect.length == 0) {
    //   selected.push(itm)
    //   setSelected(selected);
    //   busesd(itm, i)
    // }

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
    // let empty = false
    // if (selected.length == 1) {
    //   empty = true
    //   if (selected.type == "Search") {
    //     setSearch("")
    //   }
    //   setBuses([...respBuses?.list])
    // }
    // let deleteSelected = selected.filter(s => s?.id != itmTodelete?.id)
    // setSelected(deleteSelected)
    // // delete funder of bus
    // if (!empty) {
    //   busesd(itmTodelete, 2, "filter")
    // }
    // console.info('You clicked the delete icon.');
  };


  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Page title="User">
      <Searchbar getSearch={(e) => searchFunction(e)} />
      <Container>
        <Snackbar open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
            Bus Has Been Deleted Successfully
          </Alert>
        </Snackbar>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            {selected?.type ? " Bus List" : "All Bus List "}&nbsp;({count})

          </Typography>
          <Button style={{ float: "right", color: '#ff7424' }}
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
          <BuslistDrawer updatedata={() => { setDw(!dw) }}
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
            <Chip label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} />
          </Stack>
        }

        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <FiltersHome
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
            <h1 style={{ fontWeight: 900, textAlign: 'center' }}><br />No data found</h1>
          </div>
        )}

        {buses?.map((itm) => {
          return (
            <Card style={styles.card1}
              onClick={() => {
                setClickData(itm)
                handleOpenFilter()
              }}>

              <div style={{ float: 'left', paddingLeft: '20px', paddingTop: '20px', paddingRight: '20px',backgroundColor:'white' }}>
                <Iconify icon="material-symbols:directions-bus" width={30} height={30} />
              </div>
              <Card sx={{ boxShadow: 0 }} >
              <Grid pt={1} pb={1} container xs={6} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15, cursor: "pointer" }}>
                <Typography variant="subtitle1" gutterBottom  >
                  {`Bus Number : ${itm?.register_number}`} 
                </Typography>
                
              </Grid>
              <Grid style={{ marginLeft: 15 }}>
              <Typography gutterBottom  >
                  {`Project Name : ${itm?.project_name}`}
                </Typography>
                {/* <Typography variant="body2" gutterBottom style={{ color: '#FF337A' }}>
                  Today Checklist Status :
                

                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }}>
                  Checked / Total : {itm?.checked_count}/{count}
                  {console.log(buses?.total_count, "total counttttttttttt")}
                </Typography> */}

              </Grid></Card>
            </Card>
          )
        })}
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