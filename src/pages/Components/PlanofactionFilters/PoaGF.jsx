import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
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
  Card,TextField,
  CardContent,
} from '@mui/material';
// components
import moment from 'moment';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
import AddAttendance from './AddAttendance';
import Photos from '../../../pages/projects/Components/Photos';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CheckinOut from './CheckinOut';

// ----------------------------------------------------------------------

PoaGF.propTypes = {
  isOpenFilterGF: PropTypes.bool,
  onOpenFilterGF: PropTypes.func,
  onCloseFilterGF: PropTypes.func,
};

export default function PoaGF({ isOpenFilterGF, onOpenFilterGF, onCloseFilterGF, clcikData, batchState }) {
  const [batch, setBatch] = useState('');
  const [photos, setPhotos] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  const [images, setImages] = useState([]);
  const [schedule,setReschedule]=React.useState(false);
  const [editSession,setEditsession]=useState(false);
  const [session, setSession] = useState('');
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    getTrainingBatch();
    // console.log(batchState)
  }, [batchState, clcikData]);
  console.log(clcikData, '<---clcikDataPoaGF',batchState);
  const getTrainingBatch = (async) => {
    console.log(
      batchState,
      '<---batchStatebatchState',
      batchState?.training_batch_id ? batchState?.training_batch_id : clcikData?.id
    );
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      gf_session_id: clcikData?.id,
      role_id: role,
      user_id: idvalue,
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getGFSessionData.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setBatch(response.data);
        console.log(response.data,'<----------------setBatchsetBatch')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function getBase64(file, callback) {
    const reader = new FileReader();

    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(file);
  }
  const convertImage = (e) => {
    console.log('this is calleddddfdsfs');
    // data.append('emp_id', userid);
    // data.append('file', e.target.files[0]);
    // setImagePath([...imagePath, e.target.files[0]])
    const imageData = URL.createObjectURL(e.target.files[0]);
    console.log(imageData, 'files');
    getBase64(e.target.files[0], function (base64Data) {
      setImages([...images, base64Data]);
      //   setViewImage(true)
    });
  };
  const UploadImages = (e) => {
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var raw = JSON.stringify({
      project_id: batch?.project_id,
      tb_id: batchState?.id,
      trainer_id: idvalue,
      day: 1,
      photos: images,
    });

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
    };

    fetch('https://bdms.buzzwomen.org/appTest/uploadTrainingPhotos.php', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  
  const deleteImage = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  };
  const reschedudlehandler=()=>{
    setReschedule(true)
   }
 
   const Reschedule=(e)=>{
     
     var data = JSON.stringify({
       "poa_id": e,
       "date_time":moment(date?.$d)?.format('YYYY-MM-DD HH:mm:ss')
     });
     
     var config = {
       method: 'post',
       url: 'https://bdms.buzzwomen.org/appTest/updateReschedule.php',
       headers: { 
         'Content-Type': 'application/json'
       },
       data : data
     };
     
     axios(config)
     .then(function (response) {
       setReschedule(false)
       onCloseFilterGF()
       console.log(JSON.stringify(response.data));
     })
     .catch(function (error) {
       console.log(error);
     });
     
   }
   const removesession=(e)=>{
    if(confirm("Do You want to Cancel?")){
      var data = JSON.stringify({
        "poa_id": e?.id,
        "day": ""
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/updatePoaCancel.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        onCloseFilterGF();
        getTrainingBatch();

      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
  }
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenFilterGF}
        onClose={onCloseFilterGF}
        PaperProps={{
          sx: { width: 350 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            {/* {`${clcikData?.title}: ${clcikData?.name}`} */}
            {clcikData?.name}
          </Typography>
          <IconButton onClick={onCloseFilterGF}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

       {/* <CardContent>
       <h1 style={{marginTop:50}}>Work In Progress for Gelathi Drawer Having Branch Conflict</h1>
       </CardContent> */}

<Scrollbar>
          <Stack spacing={3} sx={{ p: 2 }}>
            <div>
              <Card>
                <CardContent>
                  <Typography style={{ flexDirection: 'row' }} variant="body1" gutterBottom>
                    Project : &nbsp;{batch?.projectName}
                    {console.log(batch, '<--------gfgfgfgfgfgdrawer')}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Partner : &nbsp;{batch?.partnerName}
                    {/* <IconButton onClick={()=>{setEditsession(true)}} style={{right:-20}}><Iconify  icon="material-symbols:edit"></Iconify></IconButton> */}
            {(clcikData?.status=='1' || clcikData?.status=='0')?<><IconButton onClick={reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
            {console.log(batch,"sessionidddddddd")}
            <IconButton onClick={()=>removesession(batch)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton></>:null}
                  </Typography>
                  {schedule && <Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DateTimePicker
   required
    value={date}
    onChange={(e) => {setDate(e)}}
    renderInput={(params) => <TextField {...params} color="common" />}
  />
        </LocalizationProvider>
        {console.log(batch,"batch?.id")}
        <Button onClick={()=>Reschedule(batch?.id)}>Save</Button>
      </Stack>}
                  <Typography variant="body1" gutterBottom>
                    Plan Day:&nbsp;{batch?.plan_date}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    Contact Person:&nbsp;{batch?.contact_person}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Contact Number:&nbsp;{batch?.contact_number}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    GF Name:&nbsp;{batch?.gf_name}
                  </Typography>
                </CardContent>
              </Card>
              <AddAttendance
                batch={batch}
                shown={shown}
                setShown={(e) => {
                  setShown(e);
                }}
              />
               {/* <CheckinOut
              photos={check}
              batch={batch}
              setCheck={(e) => {
                setCheck(e);
              }}
               /> */}
              <Card
                onClick={() => {
                  setShown(true), console.log('ferfgreg');
                }}
                style={{ marginTop: 20 }}
              >
                <CardContent>
                  <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
                    <Iconify icon="material-symbols:add" width={30} height={30} />
                  </div>
                  <Typography>
                    Visit Participants: {batch?.total_participants}
                    {/* <IconButton>
                      <Iconify style={{ color: "black",float:'right'}} icon="material-symbols:add" />
                    </IconButton> */}
                  </Typography>
                  {/* <Typography>Target Participants: {batch?.data?.participants} </Typography> */}
                </CardContent>
              </Card>
              <Photos
                batch={batch}
                photos={photos}
                setPhotos={(e) => {
                  setPhotos(e);
                }}
              />
              <Card
                onClick={() => {
                  setPhotos(true), console.log('ferfgreg');
                }}
                style={{ marginTop: 20 }}
              >
                <CardContent>
                  <Typography>View Photos</Typography>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 20 }}>
              <CardContent>
                {/* <input
                  
                  accept="image/png, image/gif, image/jpeg"
                  type="file"
                  onChange={(event) => {
                    console.log(event.target, '<------imageesssssssss');
                    convertImage(event);
                  }}
                /> */}
                 <label for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
                    <Iconify icon={'mdi:camera'} sx={{ width: 25, height: 25, ml: 2, color: '#ff7424' }} />
                    &nbsp;
                    <input
                      style={{ display: 'none' }}
                      accept="image/png, image/gif, image/jpeg"
                      id="inputTag"
                      type="file"
                      onChange={(e) => {
                        convertImage(e);
                      }}
                    /> Add Photos
                  </label>
                 
                  <br />   <Button sx={{  color: '#ff7424' }} onClick={UploadImages}>Upload Photos</Button>
                {images?.map((itm,index) => {
                   
                  return <div style={{ display: 'flex', margin: '1rem' }}>
                    <img src={itm} style={{ height: '50px', width: '70px',marginTop:20 }} />
                    <Iconify
                            onClick={() => {
                              deleteImage(index);
                            }}
                            icon={'typcn:delete'}
                            sx={{ width: 16, height: 16, ml: 1, color: 'red' }}
                          />
                    </div>
                  
                })}
               
                {/* <CardContent>
                  <Typography>Upload Photos</Typography>
                </CardContent> */}
                </CardContent>
              </Card>
              {/* <Card
                onClick={() => {
                  setCheck(true), console.log('ferfgreg');
                }}
                style={{ marginTop: 20 }}
              >
                <CardContent>
                <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
                    <Iconify icon="material-symbols:add" width={30} height={30} />
                  </div>
                  <Typography>Check in/ Check Out</Typography>
                </CardContent>
              </Card> */}
            </div>
         
          </Stack>
        </Scrollbar>

       


        
      </Drawer>
    </>
  );
}
