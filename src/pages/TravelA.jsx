import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Stack, Typography, Box, Button, TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../components/Page';
import TravelDialog from './Components/DashboardFilters/TravelDialog'

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
  const image = ["tykml", "exrdcftvbgyhnuj"]
  //const [image, setImage] = React.useState(['data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==', 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==']);
  const [viewImage, setViewImage] = React.useState(false);
  const [listdata, setListData] = React.useState()
  useEffect(() => {
    list()
  }, []
  )
  const list = async => {
    const userDetails = localStorage?.getItem("userDetails")
    var data = JSON.stringify({
      "emp_id": JSON?.parse(userDetails)?.id,
      "date": new Date()
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/listTa.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setListData(response.data)
        console.log(response.data, '<--------hbjhbjbjhbj');
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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




        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor='warning'>
                <Tab
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    ':focus': {
                      bgcolor: '#ffd796',
                      color: "#ed6c02"
                    },
                    color: 'black',
                  }} label="Today" {...a11yProps(0)} />
                <Tab sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  ':focus': {
                    bgcolor: '#ffd796',
                    color: "#ed6c02"
                  },
                  color: 'black',
                }}
                  label="Week" {...a11yProps(1)} />
                <Tab sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  ':focus': {
                    bgcolor: '#ffd796',
                    color: "#ed6c02"
                  },
                  color: 'black',
                }}
                  label="Month" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {listdata?.data?.map((itm) => {
                console.log(itm, "<---asdasdasdsadas")
                return (
                  <>
                    <h1>{itm?.Ta_Name}</h1>
                  </>
                )
              })}
              Item Two
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <TravelDialog />
        </Stack>
        {/* </Stack> */}

      </Container></Page>
  );
}