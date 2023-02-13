import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// material
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  Card,
  CardContent,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { ColorManyPicker } from '../../components/color-utils';
import BusEdit from './Buslistfilters/BusEdit'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Color } from '@mui/material';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { DetailsRounded } from '@mui/icons-material';
// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
export const FILTER_GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
export const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];
export const FILTER_COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

BuslistDrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function BuslistDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, bus_id, deletebuses,busesd,updatedata }) {
  const [detailsData, setDetailsData] = useState();
  const [deletebus, setDeleteBus] = useState();
  const [userUpdate,setUserUpdate]=useState(false)

  useEffect(()=>{
    details()
    },[userUpdate]
    )
  var userAccess = ['2']

  var userIdCheck = localStorage?.getItem('userId')

  useEffect(() => {
    details()
  }, [clcikData]
  )
  const details = async => {
    console.log(clcikData, "<-----clcikDataclcikData")
    var data = JSON.stringify({
      "bus_id": clcikData?.bus_id
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getBusData.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then(function (response) {

        setDetailsData(response.data)
        updatedata()
        console.log(JSON.stringify(response.data, '<njnjnjn'));
      })
      .catch(function (error) {
        console.log(error, "<---error");
      });

  }



  const userDetails = localStorage?.getItem('userId')

  const DeleteBus = async => {
    var data = JSON.stringify({
      "bus_id": clcikData?.bus_id
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/deleteBus.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        deletebuses()
        setDeleteBus(response.data)
        console.log(response.data, '<------deleteee');
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <>

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 350, },
        }}
        
      >
         <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
          
                        <IconButton style={{color:"white"}} onClick={onCloseFilter}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography variant="subtitle2" style={{color:'white'}}>
                    Bus Details
          </Typography>
         
          </Toolbar>
        </AppBar>
        

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
            {/* {userAccess.includes(userIdCheck) && */}
            {(userDetails==2)?<Button onClick={DeleteBus} style={{float:'right',textAlign:'left'}} sx={{
          '&:hover': {
            backgroundColor: 'white',
          },
        }} ><Iconify icon="ic:baseline-delete" style={{width:'30px',height:'30px',color:'#e69138'}}></Iconify></Button>:null}
           {(userDetails==2)?<BusEdit clcikData={detailsData} busesd={busesd} updatedata={()=>{setUserUpdate(!userUpdate)}} />:null}
            <Card>
                <CardContent>
                <Typography variant="subtitle1" style={{color:"#494646"}}>
                   {`Bus Number : ${detailsData?.register_number}`}
                    </Typography>
                <Typography style={{ flexDirection: 'row',color:'#494646' }} variant="subtitle1" gutterBottom>
                    Register Date:&nbsp;
                    {detailsData?.register_date}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Engine Number:&nbsp;
                    {detailsData?.engine_number}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Chassis Number:&nbsp;
                    {detailsData?.chassis_number}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance Number:&nbsp;
                    {detailsData?.insurance_number}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance Company:&nbsp;
                    {detailsData?.insurance_company}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance Start Date:&nbsp;
                   {detailsData?.insurance_start_date}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance End Date:&nbsp;
                    {detailsData?.insurance_end_date}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Last Service Date:&nbsp;
                   {detailsData?.last_service_date}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Next Service Date:&nbsp;
                    {detailsData?.next_service_due_date}</Typography>
                
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Permit Details:&nbsp;
                    {detailsData?.permit}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Fitness Certificate:&nbsp;
                    {detailsData?.fitness_certificate}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Emission Date:&nbsp;
                    {detailsData?.emission_date}</Typography>
                
                </CardContent>
              </Card>

            </div>


          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
