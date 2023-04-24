import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
// material
import {
  Box,TextField,
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
  Card,Grid,
  CardContent,
} from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
import AddAttendance from './AddAttendance';
import Photos from '../../../pages/projects/Components/Photos';
import EditGelathiSession from 'src/pages/projects/Components/EditGelathisession';
import CheckinCheckOutDialog from './CheckinCheckOutDialog';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
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
  const [showNote, setShowNote] = useState(false);
  const [schedule,setReschedule]=React.useState(false);
  const [date, setDate] = useState(new Date())
  const [isLoading, setISLoading] = useState(false)
  const [editSession,setEditsession]=useState(false);
  const [check, setCheck] = useState(false);
  const [getAllNotes, setGetAllNotes] = useState([]);
const [SaveBtn , setSaveBtn] = useState(false) 
const [gelatiNote, setGelatiNote] = useState('');
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

  //createnotes
const noteSubmitHandler = () => {
    
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role;

    var data = JSON.stringify({
      notes: gelatiNote,
      type: session.type,
      tb_id: session.tb_id,
      emp_id: session.user_id,
    });

    console.log(data, 'material api');
    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/createNotes.php',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.status == 200) {
          // viewMessage('Project added sucessfully');
          setShowNote(false);
          getNoteHandler();
          setSaveBtn(false)
          alert("Note Added Successfully...")
          console.log('susscesfully added data material');
        }
      })
      .catch(function (error) {
        console.log(error, 'failed');
      });
    console.log('submit');

  }
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

    if(images.length === 0 ){
      alert("No photos to upload.")
      throw new Error('No photos to upload.');
    }
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    // var raw = JSON.stringify({
    //   project_id: batch?.project_id,
    //   tb_id: batchState?.id,
    //   trainer_id: idvalue,
    //   day: 1,
    //   photos: [images],
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   body: raw,
    //   redirect: 'follow',
    // };

    // fetch('https://bdms.buzzwomen.org/appTest/uploadTrainingPhotos.php', requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log('error', error));
      setISLoading(true)
      var raw = JSON.stringify({
      "project_id":batch.project_id,
      "gf_session_id":batch.id,
      "gelathi_id":batch.user_id,
      "photos": [images.toString().slice(22,)]
    })

   
    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
    };
   
    let res = fetch('https://bdms.buzzwomen.org/appTest/uploadGFSessionPhotos.php', requestOptions)
      .then((itn) => {
        console.log(itn, '<--itemgh');
        setImages([])
        alert("Image uploaded successfully..")
        setISLoading(false)
      })
      .catch((err) => {
        console.log(err, '<---wertyu');
      });
  };
  
  const deleteImage = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  };



   
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
        getTrainingBatch()
        getGFSessionData();

      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
  }

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
      getTrainingBatch()
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <>
      <Drawer
        id="poa-gf-drawer"
        anchor="right"
        open={isOpenFilterGF}
        onClose={onCloseFilterGF}
        PaperProps={{
          sx: { width: 350 },
        }}
      >
        <Stack id="poa-gf-stack" direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography id="poa-gf-subtitle" variant="subtitle1" sx={{ ml: 1 }}>
            {/* {`${clcikData?.title}: ${clcikData?.name}`} */}
           {/* {clcikData?.name} */}
           {(session?.type_name=='Circle Metting')?'Circle Meeting':session?.type_name}
          </Typography>
          <IconButton id="poa-gf-close-icon-button" onClick={onCloseFilterGF}>
            <Iconify id="close-icon-poa-gf" icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

       

<Scrollbar>
          <Stack spacing={3} sx={{ p: 2 }}>
            <div>
              <Card>
                <CardContent>
                  <Typography style={{ flexDirection: 'row' }} variant="body1" gutterBottom>
                    Project : &nbsp;{session?.projectName}
                    {console.log(session?.projectName, '<--------gfgfgfgfgfgdrawer')}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Partner : &nbsp;{session?.partnerName}
                      
                      {(role!=12)?<><IconButton onClick={()=>{setEditsession(true)}} style={{right:-20}}><Iconify  icon="material-symbols:edit"></Iconify></IconButton>
            <IconButton onClick={reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
            {console.log(session,"sessionidddddddd")}
            <IconButton onClick={()=>removesession(session)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton></>:null}</Typography>
                    {schedule && <Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DateTimePicker
   required
    value={date}
    onChange={(e) => {setDate(e)}}
    renderInput={(params) => <TextField {...params} color="common" />}
  />
        </LocalizationProvider>
        {console.log(session,"session?.id")}
        <Button onClick={()=>Reschedule(session?.id)}>Save</Button>
      </Stack>}
 
 <EditGelathiSession session={session} editSession={editSession} setEditsession={(e)=>{setEditsession(e)}}/>
                  

                  <Typography variant="body1" gutterBottom>
                    Plan Day:&nbsp;{session?.plan_date}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    Contact Person:&nbsp;{session?.contact_person}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Contact Number:&nbsp;{session?.contact_number}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    GF Name:&nbsp;{session?.gf_name}
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
             {batch && <CheckinCheckOutDialog
              photos={check}
              batch={batch}
              setCheck={(e) => {
                setCheck(e);
              }}
               />}
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
                    Visit Participants: {session?.total_participants} 
                    {/* <IconButton>
                      <Iconify style={{ color: "black",float:'right'}} icon="material-symbols:add" />
                    </IconButton> */}
                  </Typography>
                  {/* <Typography>Target Participants: {batch?.data?.participants} </Typography> */}
                </CardContent>
              </Card>
              {/* <Photos
                batch={batch}
                photos={photos}
                setPhotos={(e) => {
                  setPhotos(e);
                }}
              /> */}
              {/* <Card
                onClick={() => {
                  setPhotos(true), console.log('ferfgreg');
                }}
                style={{ marginTop: 20 }}
              >
                <CardContent>
                  <Typography>View Photos</Typography>
                </CardContent>
              </Card> */}


                


              {(role==6 || role==13)?<Card style={{ marginTop: 20 }}>
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
                 
                  <br /><Button sx={{  color: '#ff7424' }} onClick={UploadImages}>Upload Photos</Button>
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
                  {isLoading ? <CircularProgress /> : 
                
                batch?.photos && <div>

                 <div style={{display:'flex' , flexDirection:'row'}}> {(batch?.photos[0].photo1)?<img id="img-event-data" src={batch?.photos[0].photo1} style={{height:100,width:100}}/>:"No Photos Found"}
                 &nbsp;&nbsp;{(batch?.photos[0].photo2)?<img id="img-event-data" src={batch?.photos[0].photo2} style={{height:100,width:100}}/>:null}</div>
                </div>
                
                
                
                
                }
                </CardContent>
               
              
          
              </Card>:null}

            
            
              {(role==6 || role==13)?<Card
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
              </Card> :null}



              <Card style={{ marginTop: 20 }}>
                <CardContent>
                  <Typography variant="h6">
                    Notes
                    <IconButton style={{ float: 'right' }}>
                      <Iconify
                        style={{ color: 'black' }}
                        icon="material-symbols:add"
                        onClick={() => {
                          setShowNote(true);
                        }}
                      />
                    </IconButton>
                  </Typography>
                </CardContent>
              </Card>

       

{showNote ? (
                <div>
                  {/* <Dialog fullScreen open={open} onClose={handleClose}TransitionComponent={Transition}></Dialog> */}
                  <Card style={{ marginTop: 20, marginLeft: 10 }}>
                    <TextField
                      style={{ marginTop: 20, marginLeft: 20 }}
                      id="outlined-multiline-static"
                      label="Notes"
                      multiline
                      rows={5}
                      variant="outlined"
                      onChange={async (e) => {
                        let note = await e?.target?.value;
                        // if(note.length <= 0){
                        //   alert("Text cannot be empty")
                        //   setSaveBtn(false)
                        // }
                        // else{
                        //   setGelatiNote(e?.target?.value);
                        //   setSaveBtn(true)
                        // }
                        setSaveBtn(true)
                        setGelatiNote(e?.target?.value);
                        console.log('note', gelatiNote);
                      }}
                      
                    ></TextField>
                    {SaveBtn? 
                    
                    <>
                     <Button
                      style={{ color: '#ffd796', marginTop: 20, marginLeft: 20, marginBottom: 20 }}
                      onClick={noteSubmitHandler}
                      disabled={gelatiNote.trim()===""}
                    >
                      Save
                    </Button> 
                    
                    <Button
                  
                  style={{ color: 'black', marginTop: 20, marginLeft: 20, marginBottom: 20 }}
                  onClick={()=>{
                   setShowNote(false)
                  }}
                >
                   Cancel
                  {/* <Cancel></Cancel> */}
                  </Button>
                  
                    </>
                     :
               
                    <>
                  
                      <Button
                      disabled
                      style={{ color: '#ffd796', marginTop: 20, marginLeft: 20, marginBottom: 20 }}
                      onClick={()=>{
                        alert("Text cannot be empty")
                      }}
                    >
                      Save
                    </Button>
                     <Button
                  
                     style={{ color: 'black', marginTop: 20, marginLeft: 20, marginBottom: 20 }}
                     onClick={()=>{
                      setShowNote(false)
                     }}
                   >
                     Cancel
                   </Button> 
                   </>
                   }
                  
                  </Card>
                </div>
              ) : null}

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
                                {/* {userName} */}
                                {i?.name} {i?.date}
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
            </div>
            
          </Stack>

      
      {/* {getAllNotes?.length>0? 
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
               
                  <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15}}> 
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginTop: 10 }}
                  >
                    <Typography variant="body1">
                      {i?.date}
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
         */}
        </Scrollbar>

       


        
      </Drawer>
    </>
  );
}
