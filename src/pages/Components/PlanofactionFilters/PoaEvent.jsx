import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import Poafunders from './Poafunders';
// material
import {
  Grid,
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


// ----------------------------------------------------------------------

PoaFilter.propTypes = {
    isOpenEvent: PropTypes.bool,
  onOpenEvent: PropTypes.func,
  onCloseEvent: PropTypes.func,
};

export default function PoaFilter({ isOpenEvent, onCloseEvent,select}) {
    console.log(select,"<--gfh");
    const [eventData,setEventData] = useState('')
    const [addImage,setAddImage] = useState('')
    const [checkout,setCheckout] = useState('')
    const [idEvent,setIdEvent] = [{
        event_id:"",
        user_id:""
    }]
    useEffect(() => {
        event();
       
      }, [select]);
      const event = async =>{
        var data = JSON.stringify({
            "event_id": select?.id,
            "user_id": "651"
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getEventDetail.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setEventData(response.data)
            console.log(response.data,'<------------setEventDatasetEventDatasetEventData');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  return (
    <>
      {/* <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button> */}

      <Drawer
        anchor="right"
        open={isOpenEvent}
        onClose={()=>{
          //setSelect(),
          setEventData("")
            onCloseEvent()}}
        PaperProps={{
          sx: { width: 400, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft:25,color:'black'}}>
          EVENT DETAILS
          </Typography>
          <IconButton onClick={()=>{
          onCloseEvent()}}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />
        {console.log(eventData,"<--hgdsgdsgfdgfdgfd")}
        <Scrollbar>
          {/* <Stack spacing={3} sx={{ p: 3 }}> */}
            <div>
            
              <Card style={{backgroundColor:'#f6f8fb',marginTop:20}}>
               <CardContent>
                <Typography style={{marginTop:30}} variant="subtitle1">EVENT TITLE :
                <span style={{fontWeight:100,color:'#444444'}}>{eventData?.name}</span>
                 </Typography>
                <Typography style={{marginTop:30}} variant="subtitle1">EVENT DATE & TIME : 
                <span style={{fontWeight:100,color:'#444444'}}>{eventData?.date1}</span>
                </Typography>
                <Typography style={{marginTop:30}} variant="subtitle1">EVENT DATE & TIME : 
                <span style={{fontWeight:100,color:'#444444'}}>{eventData?.date2}</span>
                </Typography>
                <Typography style={{marginTop:30}} variant="subtitle1">EVENT DESCRIPTION : 
                <span style={{fontWeight:100,color:'#444444'}}>{eventData?.description}</span>
                </Typography>
               </CardContent>
              </Card>

              <Card style={{backgroundColor:'#f6f8fb',marginTop:20}}>
<CardContent>
<Typography>CHECK IN CHECKOUT STATUS</Typography>
<Button  sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
              },
              color:'#ed6c02'
            }}>CHECKOUT</Button>
<Typography>CHECKINN TIME</Typography>
<Typography>CHECKINN LOCATION :  </Typography>
<Typography>CHECKOUT TIME : </Typography>
<Typography>CHECKOUT LOCATION : </Typography>

</CardContent>
              </Card>

              <Card>
                <CardContent>
                    <Button sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
              },
              color:'#ed6c02'
            }}>ADD PHOTOS</Button>
                </CardContent>
              </Card>
            
           
            </div>
        </Scrollbar>

      </Drawer>
    </>
  );
}
