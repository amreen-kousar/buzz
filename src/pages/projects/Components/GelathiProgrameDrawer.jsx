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
  TextField,
  Card,
  Dialog,
  CardContent,
  TextareaAutosize,
  Grid,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
import { Schedule } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment from 'moment';
import EditGelathiSession from './EditGelathisession';
import AddEnrollGelathi from './AddEnrolledGelathi';
import AddGreenMotivators from './AddGreenMotivators';
import AddEnrollVyapar from './AddenrolleVyapar';
// import ShaktiDialog from '../projects/Components/ShaktiDialog'
// ----------------------------------------------------------------------

GelathiProgrameDrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function GelathiProgrameDrawer({
  isOpenFilter,
  onOpenFilter,
  onCloseFilter,
  clcikData,
  gelathiFacikitatorLead,
}) {
  const [session, setSession] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [gelatiNote, setGelatiNote] = useState('');
  const [getAllNotes, setGetAllNotes] = useState([]);
//notes save button

const [SaveBtn , setSaveBtn] = useState(false) 

  const [date, setDate] = useState(new Date())
  //   image
  const [isLoading, setISLoading] = useState(false)
  // const [dataImage, setImage] = React.useState([]);
  const [imagePath, setImagePath] = React.useState([]);
  // const [viewImage, setViewImage] = React.useState(false);
  const [schedule,setReschedule]=React.useState(false);
  const [locationS, setLocation] = useState();
  const [editSession,setEditsession]=useState(false);
  const userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
const [getImage , setGetImae] = useState([])

// const [images,setImages] = useState([])
const [photos,setPhotos] = React.useState(false)
const [shown,setShown] = React.useState(false)
const [images,setImages] = useState([])
const [viewImage, setViewImage] = React.useState(false);

  localStorage.setItem('clickData', clcikData);
  const localstoragrClickData = localStorage.getItem('clcikData');
  const userName = JSON.parse(localStorage.getItem('userDetails'))?.first_name;
  console.log("userNAme in localstorage", userName)
const userId = JSON.parse(localStorage.getItem('userDetails'))?.role;
  useEffect(()=>{
    setImages([])
    // setGetAllNotes([])
  },[session.tb_id])
  useEffect(() => {
   

    getGFSessionData();
    getNoteHandler();

   
  }, [clcikData]);
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
  }, []);

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
  console.log(clcikData, '<---------gf_session_namegf_session_name');

  //   image converting
  
  function getBase64(file, callback) {

    const reader = new FileReader();

    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(file);
  }
const convertImage = (e) => {
    console.log("this is calleddddfdsfs")
    // data.append('emp_id', userid);
    // data.append('file', e.target.files[0]);
    // setImagePath([...imagePath, e.target.files[0]])
    const imageData = URL.createObjectURL(e.target.files[0]);
    console.log(imageData, "files")
    getBase64(e.target.files[0], function (base64Data) {
      setImages([...images, base64Data])
    //   setViewImage(true)
    setViewImage(true);
    });
  }
  // sending image we need to 
  const UploadImages = async () => {
    setISLoading(true)
    if (images.length === 0) {
      alert("No photos to upload.")
      throw new Error('No photos to upload.');
    }
    var raw = JSON.stringify({
      "project_id":session.project_id,
      "gf_session_id":session.id,
      "gelathi_id":session.user_id,
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
  const getGFSessionData = (async) => {
    var data = JSON.stringify({
      gf_session_id: clcikData?.name,
      user_id:session?.user_id
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

  const noteSubmitHandler = () => {

    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role;

    var data = JSON.stringify({
      
      notes: gelatiNote,
      type: session.type,
      tb_id: session.tb_id,
      emp_id: userid,
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
  console.log(getAllNotes, 'getallnotes');


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
        onCloseFilter();
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
      onCloseFilter()
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  //Method to delete the images that is selected 
  const deleteImage = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  };



  return (
    <>
      {/* <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button> */}

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 400 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="body1" sx={{ ml: 1 }}>
          {(session?.type_name=='Circle Metting')? "Circle Meeting" :(session?.type_name)}
           
          </Typography>
          {console.log(clcikData, '<------clcikDataclcikData')}
          
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
              <Card>
                <CardContent>
                  <Typography style={{ flexDirection: 'row' }} variant="body1" gutterBottom>
                    Project:&nbsp;{session?.projectName}
                    {console.log(session?.gf_session_name, '<--------gf_session_namegf_session_name')}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Partner :&nbsp;{session?.partnerName}
                   
                 {(userId==6 || userId==13)?  <> <IconButton onClick={()=>{setEditsession(true)}} style={{right:-20}}><Iconify  icon="material-symbols:edit"></Iconify></IconButton>
            <IconButton onClick={reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
            {console.log(session,"sessionidddddddd")}
            <IconButton onClick={()=>removesession(session)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton></>:null}

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
        {console.log(session,"session?.id")}
        <Button onClick={()=>Reschedule(session?.id)}>Save</Button>
      </Stack>}
 
 <EditGelathiSession session={session} editSession={editSession} setEditsession={(e)=>{setEditsession(e)}}/>


                  <Typography variant="body1" gutterBottom>
                    {(session?.type_name=='Circle Metting')? "Circle Meeting" :(session?.type_name)} : <br/>{session?.gf_session_name}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    Plan Date :{session?.plan_date}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    Contact Person:
                    {session?.contact_person}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    Contact Number:
                    {session?.contact_number}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    Trainer Name:
                    {session?.trainer_name}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    GF Name:
                    {session?.gf_name}
                  </Typography>
                </CardContent>
              </Card>
              {/* <ShaktiDialog /> */}
              <Card style={{ marginTop: 20 }}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    Visit Participants :  {session?.total_participants}{' '}
                  
                  </Typography>
                </CardContent>
              </Card>


              {console.log(session,"sessiosnssssssssssssssssssssssssssss")}

              {/* IMAGE UPLOAD  */}
             {(userId==6 || userId==13 )? <Card style={{marginTop:20}}>
<div style={{ display: 'flex' }}>
                {viewImage
                  ? images.map((i, index) => {
                      return (
                        <div style={{ display: 'flex', margin: '1rem' }}>
                          <img src={i} style={{ height: '50px', width: '70px' }} alt="hello" />
                          <Iconify
                            onClick={() => {
                              deleteImage(index);
                            }}
                            icon={'typcn:delete'}
                            sx={{ width: 16, height: 16, ml: 1, color: 'red' }}
                          />
                        </div>
                      );
                    })
                  : null}
              </div>
              <br />
              <div id="input-icon-camera" style={{ display: 'flex' }}>
                  <label id="input-tag-event" for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
                    <Iconify id="icon-camera-poa-event" icon={'mdi:camera'} sx={{ width: 25, height: 25, ml: 2, color: '#ff7424' }} />
                    &nbsp;
                    <input
                      style={{ display: 'none' }}
                      accept="image/png, image/gif, image/jpeg"
                      id="inputTag"
                      type="file"
                      onChange={(e) => {
                        convertImage(e);
                      }}
                    />
                  </label>
                  Add Photos
                  <br />
         
           <Button
           id="upload-btn"
           onClick={UploadImages}
           
           sx={{
             '&:hover': {
               backgroundColor: '#ffd796',
             },
             color: '#ff7424',
             backgroundColor: '#ffd796',
             marginLeft: '10px',
           }}
         >
           Upload  
         </Button>
         </div>


         {/* <Card style={{ marginTop: 20 }}>
              <CardContent>
               
             {isLoading? <CircularProgress /> : 
                <div>
                  <img src={eventData?.photo1 ? eventData?.photo1 : ''} />
                </div>
                }
              </CardContent>
            </Card> */}
</Card>:null}

{console.log(session,"sessiosn")}

{(userId==6 || userId==13 )?<Card id="event-data-card" style={{ marginTop: 20 }}>
              <CardContent id="card-content-poa-event-data">
               {console.log(session,"sessiosn")}
             {isLoading ? <CircularProgress /> : 
                
                session?.photos && <div>

                 <div style={{display:'flex' , flexDirection:'row'}}> {(session?.photos[0].photo1)?<img id="img-event-data" src={session?.photos[0].photo1} style={{height:100,width:100}}/>:"No Photos Found"}
                 &nbsp;&nbsp;{(session?.photos[0].photo2)?<img id="img-event-data" src={session?.photos[0].photo2} style={{height:100,width:100}}/>:null}</div>
                </div>
                
                
                
                
                }
              </CardContent>
            </Card> :null}

            {(session?.check_in!="0" && userId==6)?<br/>:null}
{(session?.check_in!="0" && userId==6)?<Card>
                <CardContent>
                <AddEnrollGelathi session={session}/>
                </CardContent>
              </Card>:null}
{(session?.check_in!="0" && userId==6)?<br/>:null}
              {(session?.check_in!="0" && userId==6)?<Card>
                <CardContent>
                <AddGreenMotivators session={session}/>
                </CardContent>
              </Card>:null} {(session?.check_in!="0" && userId==6)?<br/>:null}
              {(session?.check_in!="0" && userId==6)?<Card>
                <CardContent>
                <AddEnrollVyapar session={session}/>
                </CardContent>
              </Card>:null}
                

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
                    
                    <div style={{display:'flex',flexDirection:'row'}}>
                     <Button
                    style={{ color: '#ffd796', marginTop: 20 ,marginBottom:10 ,marginLeft:5}}
                      onClick={noteSubmitHandler}
                      disabled={gelatiNote.trim()===""}
                    >
                      Save
                    </Button> 
                    
                    <Button
                  
                  style={{ color: 'black' ,marginLeft: 20, marginTop:20 ,marginBottom:10}}
                  onClick={()=>{
                   setShowNote(false)
                  }}
                >
                   Cancel
                  {/* <Cancel></Cancel> */}
                  </Button>
                  
                    </div>
                     :
               
                     <div style={{display:'flex',flexDirection:'row'}}>
                  
                      <Button
                      disabled
                      style={{ color: '#ffd796', marginTop: 20 ,marginBottom:10,marginLeft:5}}
                      onClick={()=>{
                        alert("Text cannot be empty")
                      }}
                    >
                      Save
                    </Button>
                     <Button
                  
                  style={{ color: 'black', marginLeft: 20, marginTop:20 ,marginBottom:10}}
                     onClick={()=>{
                      setShowNote(false)
                     }}
                   >
                     Cancel
                   </Button> 
                   </div>
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
        </Scrollbar>
      </Drawer>
    </>
  );
}
