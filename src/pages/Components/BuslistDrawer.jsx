import { useState,useEffect } from 'react';
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

export default function BuslistDrawer({ isOpenFilter, onOpenFilter, onCloseFilter,clcikData,bus_id,deletebuses }) {
  const [detailsData,setDetailsData] = useState();
  const [deletebus, setDeleteBus] = useState();
 
  useEffect(()=>{
    details()
    },[clcikData]
    )
  const details = async => {
    console.log(clcikData,"<-----clcikDataclcikData")
    
    var data = JSON.stringify({
      "bus_id":clcikData?.bus_id
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
      console.log(JSON.stringify(response.data,'<njnjnjn'));
    })
    .catch(function (error) {
      console.log(error,"<---error");
    });
    
  }
  const DeleteBus = async =>{
    var data = JSON.stringify({
      "bus_id": clcikData?.bus_id
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/deleteBus.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      deletebuses()
      setDeleteBus(response.data)
      console.log(response.data,'<------deleteee');
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
          sx: { width: 280, },
        }}
      >
        {console?.log(detailsData,"<---detailsDatadetailsData")}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
          {`Bus Number : ${clcikData?.register_number}`}
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
            
            <Button onClick={DeleteBus}>Delete Bus</Button>
           <BusEdit />
            <Card>
                <CardContent>
                <Typography style={{flexDirection:'row'}} variant="subtitle1" gutterBottom>
               Registration Date
               <Typography variant="body1" >{detailsData?.register_date}</Typography>       
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
               Engine Number:
               <Typography variant="body1" gutterBottom>{detailsData?.engine_number}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Chasis Number:
               <Typography variant="body1" gutterBottom>{detailsData?.chassis_number}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance Number:
               <Typography variant="body1" gutterBottom>{detailsData?.insurance_number}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance Company:
               <Typography variant="body1" gutterBottom>{detailsData?.insurance_company}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance Start Date:
               <Typography variant="body1" gutterBottom>{detailsData?.insurance_start_date}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance End Date:
               <Typography variant="body1" gutterBottom>{detailsData?.insurance_end_date}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Last Service Date:
               <Typography variant="body1" gutterBottom>{detailsData?.last_service_date}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Next Service Date:
               <Typography variant="body1" gutterBottom>{detailsData?.next_service_due_date}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Permit Details:
               <Typography variant="body1" gutterBottom>{detailsData?.permit}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
             Fitness Certificate:
               <Typography variant="body1" gutterBottom>{detailsData?.fitness_certificate}</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Emission Date:
               <Typography variant="body1" gutterBottom>31/12/2023</Typography> 
              </Typography>
                </CardContent>
            </Card>
            
            </div>

           
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
