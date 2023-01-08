import * as React from 'react';
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
 const image = ["tykml","exrdcftvbgyhnuj"]
  //const [image, setImage] = React.useState(['data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==', 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==']);
  const [viewImage, setViewImage] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getBase64(file, callback) {

    const reader = new FileReader();

    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(file);
  }

  const postImage = () => {
    console.log(image, "imageeeeeee")
    //  hit the api in this and files[] refers to image[] 
  }

  const convertImage = (fileObjectFromInput, index) => {
    console.log(index)
    getBase64(fileObjectFromInput, function (base64Data) {
      console.log(base64Data)
      console.log(image,"<----datasssssss",base64Data)
      image[index] = base64Data 
     console.log(image,"<----qwertyui")
    });

  }

  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Travel Allowances
          <Button style={{ float: "right" }}>Filters</Button>
        </Typography>

        <TextField id="outlined-basic" label="Outlined" onClick={(e) => { e.target.value = null; }} onChange={(e) => { convertImage(e.target.files[0], 0) }} variant="outlined" type="file" />
        <TextField id="outlined-basic" label="Outlined" onChange={(e) => { convertImage(e.target.files[0], 1) }} variant="outlined" type="file" />

        <Button variant="contained" onClick={postImage}>Post</Button>


        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mt: -9 }}>
        <h1>jnjn</h1>
        </Stack> */}


        {/* after posting map the values and then display images as below */}
        {image.map(i => {
          return <div>
            Image
            <img src={image[0]} alt="hello" /><br />
          </div>
        })}


        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Today" {...a11yProps(0)} />
                <Tab label="Week" {...a11yProps(1)} />
                <Tab label="Month" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
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