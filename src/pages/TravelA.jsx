import { useEffect, useState, forwardRef } from 'react';
import { useForm } from "react-hook-form";
import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Stack, Typography, Box, Button, TextField, Grid, Snackbar, Card, CardActionArea } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../components/Page';
import TravelDialog from './Components/DashboardFilters/TravelDialog'
import moment from 'moment';
import Edittraveldialog from './Editta';
import Iconify from 'src/components/Iconify';
// components
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TravelA() {
  const [value, setValue] = React.useState(0);
  var [dateValue, setDatevalue] = useState(new Date().toISOString().split('T')[0])
  const image = ["tykml", "exrdcftvbgyhnuj"]
  const [drawerEvent, SetDrawerEvent] = useState(false);
  //const [image, setImage] = React.useState(['data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==', 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==']);
  const [viewImage, setViewImage] = React.useState(false);
  const [listdata, setListData] = React.useState()
  const [openMessage, setOpenMessage] = React.useState(false);
  const [message, setMessage] = useState(false)
  const [editData, setEditData] = useState(null)
  const [openFilter, setOpenFilter] = useState(false);
  const [clcikData, setClickData] = useState()




  useEffect(() => {
    list(dateValue)
  }, []
  )

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const handleOpenFilter = (itm) => {
    // itm.klmtr = +klmtr;
    setEditData(itm)
    console.log(editData)
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  const list = async (target) => {
    console.log(dateValue)
    if (target) { dateValue = target }
    const userDetails = localStorage?.getItem("userDetails")
    var data = JSON.stringify({
      "emp_id": 651,
      "date": dateValue
    });
    console.log(data)
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/listTa.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    console.log(data, "travel request ")
    axios(config)
      .then(function (response) {
        setListData(response.data)
        console.log(response.data, '<--------travel alliance ');
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const Traveledit=()=>{
  //    <Edittraveldialog/>
  // }



  // const { register, handleSubmit } = useForm();

  // const onSubmit = async (data) => {
  //   const formData = new FormData();
  //   formData.file = [{ lastModified: 1672744000446, lastModifiedDate: "Tue Jan 03 2023 16:36:40 GMT+0530 (India Standard Time)", name: "Screenshot (3).png", size: 346182, type: "image/png", webkitRelativePath: "" }];
  //   formData.emp_id = 15;
  //   console.log(formData)
  //   var config = {
  //     method: 'post',
  //     url: 'https://bdms.buzzwomen.org/appTest/new/taAttachments.php',
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     data: JSON.stringify(formData)
  //   };
  //   const res = await axios(config).then((res) => console.log(res.data));
  //   // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  // };




  return (
    <Page title="Dashboard: Products">
      <Container>


        <Typography variant="h4" sx={{ mb: 5 }}>
          Travel Allowances
          {/* <Button style={{ float: "right" }}>Filters</Button> */}
        </Typography>
        <Snackbar open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
          <Alert onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        <Tabs variant="fullWidth" indicatorColor='warning'>
          <Tab
            sx={{
              ':hover': {
                bgcolor: '#ffd796', // theme.palette.primary.main
                color: '#ff7424',
              },

              color: 'black',
            }} label="TEAM" style={{
              borderBottom: '3px solid #ff7424',
              color: "#ff7424",
            }} /></Tabs>



        {/* testing to post images */}
        {/* <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("file")} />

            <input type="submit" />
          </form>
        </div> */}



        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mt: -9 }}>
        <h1>jnjn</h1>
        </Stack> */}
        <br></br>
        <TextField id="outlined-basic" type="date" defaultValue={dateValue}
          fullWidth
          onChange={(e) => { setDatevalue(e?.target?.value); list(e?.target?.value) }} label="Select Range" variant="outlined" InputLabelProps={{
            shrink: true,
          }} />

        {listdata?.data?.length > 0 ? <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor='warning'>
                <Tab
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ff7424',
                    },

                    color: 'black',
                  }} label="Today" {...a11yProps(0)} style={value == 0 ? {
                    borderBottom: '3px solid #ff7424',
                    color: "#ff7424",
                  } : null} />
                <Tab sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                  },

                  color: 'black',
                }}
                  label="Week" {...a11yProps(1)} style={value == 1 ? {
                    borderBottom: '3px solid #ff7424',
                    color: "#ff7424",
                  } : null} />
                <Tab sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                  },

                  color: 'black',
                }}
                  label="Month" style={value == 2 ? {
                    borderBottom: '3px solid #ff7424',
                    color: "#ff7424",
                  } : null} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {/* {listdata?.data?.map((itm) => {
                console.log(itm, "<---asdasdasdsadas")
                return (
                  <>
                    <Grid>{itm?.Ta_Name}</Grid>
                  </>
                )
              })} */}

              <h1 style={{ fontWeight: 900, textAlign: 'center' }}><br />No data found</h1>

            </TabPanel>
            <TabPanel value={value} index={1}>
              <h1 style={{ fontWeight: 900, textAlign: 'center' }}><br />No data found</h1>
            </TabPanel>
            <TabPanel value={value} index={2}>
              {listdata?.data?.map((itm) => {
                return (
                  <>

                    <Card onClick={() => { handleOpenFilter(itm) }} style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer" }} >
                      <Grid sx={{ margin: '8px' }} style={{ color: "blue" }}><b cursor="pointer"  >{itm?.Ta_Name}</b>
                        <Iconify style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
                        <Iconify style={{ float: "right", marginTop: 5, marginRight: 30, fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify></Grid>
                      <Typography variant="body" gutterBottom sx={{ margin: '10px' }}> <b>TA Amount:{itm?.telephone}</b></Typography>
                    </Card>
                  </>
                )
              })}
            </TabPanel >
          </Box >
        </Stack > : <h1 style={{ fontWeight: 900, textAlign: 'center' }}><br />No data found</h1>}



        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <TravelDialog viewMessage={(text) => {
            setMessage(text)
            setOpenMessage(true)
            // list()
          }} />
        </Stack>

        {editData && <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <Edittraveldialog
            isOpenFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            editData={editData}
            onCloseFilter={handleCloseFilter} viewMessage={(text) => {
              setMessage(text)
              setOpenMessage(true)
            }}
            list={list}
          />

        </Stack>}
        {/* </Stack> */}

      </Container ></Page >
  );
}