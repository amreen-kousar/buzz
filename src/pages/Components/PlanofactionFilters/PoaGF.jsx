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
  Card,
  CardContent,
} from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
import AddAttendance from './AddAttendance';
import Photos from '../../../pages/projects/Components/Photos';

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
  const [getAllNotes, setGetAllNotes] = useState([]);

  const [session, setSession] = useState('');

   const role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
  useEffect(() => {
    getTrainingBatch();
    // console.log(batchState)
  }, [batchState, clcikData]);

  useEffect(() => {
   

    getGFSessionData();
    getNoteHandler();

   
  }, [clcikData]);
   // geting notes for each drawer 
   useEffect(() => {
    console.log('useEffect for getnotehandler');

    let isSubscribe = true;

    if (isSubscribe) {
      getNoteHandler();
      getGFSessionData();
    }

    return () => {
      isSubscribe = false;
    };
  }, [session.tb_id]);
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
 
  const getGFSessionData = (async) => {
    var data = JSON.stringify({
      gf_session_id: clcikData?.id,
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
        setSession(response.data);
        console.log(response.data, '<---------setSessionsetSession');
      })
      .catch(function (error) {
        console.log(error);
      });
  };


   //getting Notes\

   const getNoteHandler = () => {
    console.log('getNoteHandler');
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role;
    var data = JSON.stringify({
      type: session.type,
      tb_id: session.tb_id,
      // "type":2, "tb_id":21407
    });

    console.log(data, 'material api');
    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getNotes.php',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.status == 200) {
          setGetAllNotes(response?.data?.notes);
          console.log(response, 'notesData');
        }
      })
      .catch(function (error) {
        console.log(error, 'failed');
      });
    console.log('submit');
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
                    {console.log(batch?.projectName, '<--------gfgfgfgfgfgdrawer')}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Partner : &nbsp;{batch?.partnerName}
                  </Typography>

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
            {role== '1'?  <>
            </>:
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
               
                <br />
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
            }
              
            </div>
          {role=="1"?<></>
          :
          <Button sx={{  color: '#ff7424' }} onClick={UploadImages}>Upload Photos  </Button>
          }
            
          </Stack>
      
      {getAllNotes?.length>0? 
      <CardContent>
      <div>
      <Card style={{ marginTop: 20, marginLeft: 10 }}>
        {getAllNotes &&
          getAllNotes.map((i, index) => {
            {
              console.log(i, 'ivalue');
            }
            return (
              <>
               
                  {/* <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15}}> */}
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginTop: 10 }}
                  >
                    <Typography variant="body1">
                      {' '}
                      {userName} {i?.date}
                    </Typography>

                    {console.log(i?.notes, '<----------------------i?.notesi?.notes')}
                  </Grid>
                  <Typography variant="body1" gutterBottom style={{ marginTop: 10, marginLeft: 30 }}>
                    {i?.notes}{' '}
                  </Typography>
               
              </>
            );
          })}
           </Card>
      </div>
    </CardContent>
      : null}  
        
        </Scrollbar>

       


        
      </Drawer>
    </>
  );
}
