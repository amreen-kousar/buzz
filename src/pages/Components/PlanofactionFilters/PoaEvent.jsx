import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import Poafunders from './Poafunders';
import Avatar from '@mui/material/Avatar';
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

export default function PoaFilter({ isOpenEvent, onCloseEvent, select }) {
  console.log(select, "<--gfh");
  const [eventData, setEventData] = useState('')
  const [addImage, setAddImage] = useState('')
  const [checkout, setCheckout] = useState('')
  const [idEvent, setIdEvent] = [{
    event_id: "",
    user_id: ""
  }]
  useEffect(() => {
    event();

  }, [select]);
  const event = async => {
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
      data: data
    };

    axios(config)
      .then(function (response) {
        setEventData(response.data)
        console.log(response.data, '<------------setEventDatasetEventDatasetEventData');
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
        onClose={() => {
          //setSelect(),
          setEventData("")
          onCloseEvent()
        }}
        PaperProps={{
          sx: { width: 320, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25, color: 'black' }}>
            Event Detail
          </Typography>
          <IconButton onClick={() => {
            onCloseEvent()
          }}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />
        {console.log(eventData, "<--hgdsgdsgfdgfdgfd")}
        <Scrollbar>
          {/* <Stack spacing={3} sx={{ p: 3 }}> */}
          <div>

            <Card style={{ backgroundColor: '#f6f8fb', marginTop: 20 }}>
              <CardContent>
                <Typography  variant="body1">Event Title :
                  {eventData?.name}
                </Typography>
                <Typography variant="body1">Event&nbsp;date&nbsp;and&nbsp;time :{eventData?.date1}
                </Typography>
               
                <Typography  variant="body1">Description :
                 {eventData?.description}
                </Typography>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: '#f6f8fb', marginTop: 20 }}>
              <CardContent>
                <Typography style={{textAlign:'center'}}><u>CheckIn/Out Status</u></Typography>
                <br/>
                <Typography variant="body1">Checkin Time: {eventData?.check_in}</Typography>
                <Typography>Checkin Location: {eventData?.check_in_location}</Typography>
                <Typography>Checkout Time : {eventData?.check_out}</Typography>
                <Typography>Checkout Location: {eventData?.check_out_location}</Typography>

              </CardContent>
            </Card>

            {/* <Card>
              <CardContent>
                <Button sx={{
                  '&:hover': {
                    backgroundColor: '#ffd796',
                  },
                  color: '#ff7424'
                }}>ADD PHOTOS</Button>
              </CardContent>
            </Card> */}

          <Card style={{ marginTop: 20 }}>
              <CardContent>
              <div >
              <img src={eventData?.photo1 ? eventData?.photo1 : ""} />
                 
            </div>
              </CardContent>
          </Card>
          </div>
        </Scrollbar>

      </Drawer>
    </>
  );
}
