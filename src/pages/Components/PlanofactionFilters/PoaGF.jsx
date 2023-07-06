import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
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
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
import AddAttendance from './AddAttendance';
import Photos from '../../../pages/projects/Components/Photos';
import EditGelathiSession from 'src/pages/projects/Components/EditGelathisession';
import CheckinCheckOutDialog from './CheckinCheckOutDialog';
import CheckinGFL from './GflcheckIncheckout';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useMediaQuery } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { EightK } from '@mui/icons-material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
}));
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
  const [expanded, setExpanded] = React.useState(false);
  const [reload, setReload] = useState(false);
   const isSmallScreen = useMediaQuery('(max-width:600px)');
  
  const changeState = () => {
    setReload(!reload);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
   const role = JSON.parse(sessionStorage?.getItem('userDetails'))?.role;
  useEffect(() => {
    getTrainingBatch();
    changeState();
  }, [batchState, clcikData]);
  useEffect(() => {
   
    getGFSessionData();
    getNoteHandler();
   
  }, [clcikData,editSession]);
   useEffect(() => {
    let isSubscribe = true;
    if (isSubscribe) {
      getNoteHandler();
      getGFSessionData();
    }
    return () => {
      isSubscribe = false
    };
  }, [session.tb_id , session.check_in ,batch.check_1]);
  const getTrainingBatch = (async) => {
    var role = JSON.parse(sessionStorage?.getItem('userDetails'))?.role;
    var idvalue = JSON.parse(sessionStorage?.getItem('userDetails'))?.id;
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
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
 
  const getGFSessionData = (async) => {
    var userid = JSON.parse(sessionStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      gf_session_id: clcikData?.id,
      user_id : userid
    });
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getGFSessionData1.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setSession(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
const noteSubmitHandler = () => {
    
    var userid = JSON.parse(sessionStorage.getItem('userDetails'))?.id;
    var role = JSON.parse(sessionStorage.getItem('userDetails'))?.role;
    var data = JSON.stringify({
      notes: gelatiNote,
      type: session.type,
      tb_id: session.tb_id,
      emp_id: userid,
    });
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
          setShowNote(false);
          getNoteHandler();
          setSaveBtn(false)
          alert("Note Added Successfully...")
       
        }
      })
      .catch(function (error) {
        // console.log(error, 'failed');
      });
  }
   const getNoteHandler = () => {
   
    var userid = JSON.parse(sessionStorage.getItem('userDetails'))?.id;
    var role = JSON.parse(sessionStorage.getItem('userDetails'))?.role;
    var data = JSON.stringify({
      type: session.type,
      tb_id: session.tb_id,
    });
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
        }
      })
      .catch(function (error) {
        // console.log(error, 'failed');
      });
  };
  function getBase64(file, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  }
  const convertImage = (e) => {
  
    const imageData = URL.createObjectURL(e.target.files[0]);
    getBase64(e.target.files[0], function (base64Data) {
      setImages([...images, base64Data]);
    });
  };
  const UploadImages = (e) => {
    if(images.length === 0 ){
      alert("No photos to upload.")
      throw new Error('No photos to upload.');
    }
    var idvalue = JSON.parse(sessionStorage?.getItem('userDetails'))?.id;
   
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
        setImages([])
        alert("Image uploaded successfully..")
        getTrainingBatch()
        setISLoading(false)
      })
      .catch((err) => {
        // console.log(err, '<---wertyu');
      });
  };
  
  const deleteImage = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  };
  const roleid = JSON.parse(sessionStorage.getItem('userDetails'))?.role;
   
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
        onCloseFilterGF();
        getTrainingBatch()
        getGFSessionData();
      })
      .catch(function (error) {
        // console.log(error);
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
    })
    .catch(function (error) {
      // console.log(error);
    });
    
  }
 const styles = {
    buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left" },
    tableRowStyle: { justifyContent: 'center', alignItems: 'center', marginLeft: 200 },
    linkStyle: { textDecoration: 'none', color: "black" }
  }
  return (
    <>
      <Drawer
       width={isSmallScreen ? '100%' : 300}
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
       
{
  session == "" ?
  <>
  <div style={{display:"flex", marginTop:"50%", marginLeft:"40%" }}>
      <CircularProgress />
      </div>
  </>:
<Scrollbar>
          <Stack spacing={3} sx={{ p: 2 }}>
            <div>
              <Card>
                <CardContent>
                  <Typography style={{ flexDirection: 'row' }} variant="body1" gutterBottom>
                    Project : &nbsp;{session?.projectName}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Partner : &nbsp;{session?.partnerName}<br/>
                     
                      {(role!=12)?<><IconButton onClick={()=>{setEditsession(true)}} style={{right:-20}}><Iconify  icon="material-symbols:edit"></Iconify></IconButton>
            <IconButton onClick={reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
          
            <IconButton onClick={()=>removesession(session)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton></>:null}</Typography>
                    {schedule && <Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DateTimePicker
   required
    value={date}
    onChange={(e) => {setDate(e)}}
    renderInput={(params) => <TextField {...params} color="common" />}
    PopperProps={{
      placement: "top"
  
    }}
  />
        </LocalizationProvider>
        <Button onClick={()=>Reschedule(session?.id)}>Save</Button>
      </Stack>}
 
 <EditGelathiSession session={session} editSession={editSession} setEditsession={(e)=>{setEditsession(e)}}/>
                  
 <Typography variant="body1" gutterBottom>
                    {session?.type_name}:<br/>&nbsp;{session?.gf_session_name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Plan Day:&nbsp;{session?.plan_date}
                  </Typography>
                  
{(session?.type == 1|| 4 || 5||6||7||8||9||10||11||12||13||14||15||16||17||18||19||20||21)?  null :
  
  <>
                 <Typography variant="body1" gutterBottom>
                    Contact Person:&nbsp;{session?.contact_person}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Contact Number:&nbsp;{session?.contact_number}
                  </Typography>
                  </>
                  }
                  <Typography variant="body1" gutterBottom>
                    GF Name :&nbsp;{session?.gf_name}
                  </Typography>
                </CardContent>
              </Card>
              <AddAttendance
                batch={session}
                shown={shown}
                setShown={(e) => {
                  setShown(e);
                }}
              />
               {(role==6 || role==13)?<Card style={{ marginTop: 20 }}>
              <CardContent>
           
                 <label sx={styles.buttonStyle} for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
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
          <br/>
             {roleid==6 && batch && <CheckinCheckOutDialog
              photos={check}
              batch={batch}
              setCheck={(e) => {
                setCheck(e);
              
              }}
              getTrainingBatch={getTrainingBatch}
              getGFSessionData={getGFSessionData}
               />}
{roleid==13 && batch && <CheckinGFL
              photos={check}
              batch={batch}
              setCheck={(e) => {
                setCheck(e);
              }}
              getTrainingBatch={getTrainingBatch}
              getGFSessionData={getGFSessionData}
               />}
            
            <br/><br/>  <Button variant="secondary" style={styles.buttonStyle} onClick={() => {
                  setShown(true)
                }}
                    endIcon={<IconButton > <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="ic:baseline-people" /></IconButton>}>
                    <span style={{ width: "200px" }}>Visit participants  : {session?.total_participants}</span>
                  </Button><br/><br/>
           
{(role==6 || role==13)?<Button variant="secondary" style={styles.buttonStyle} onClick={() => {
                      setCheck(true)
                    }}
                    endIcon={<IconButton   > <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="cil:clock" /></IconButton>}>
                    <span style={{ width: "200px" }}>Check In/Check Out</span>
                  </Button>:null}
<br/>  <br/>
               <Button variant="secondary" style={styles.buttonStyle} 
                    endIcon={<IconButton  onClick={() => {
                      setShowNote(true);
                    }}> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="ph:note-pencil" /></IconButton>}>
                    <span style={{ width: "200px" }}>Notes</span>
                  </Button>
     
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
                        let note = await e?.target?.value
                        setSaveBtn(true)
                        setGelatiNote(e?.target?.value);
                      }}
                      
                    ></TextField>
                    {SaveBtn? 
                    
                    <>
                     <Button
                      style={{ color: '#ff7424', marginTop: 20, marginLeft: 20, marginBottom: 20 ,backgroundColor:"#ffd796"}}
                      onClick={noteSubmitHandler}
                      disabled={gelatiNote.trim()===""}
                    >
                      Save
                    </Button> 
                    
                    <Button
                  
                  style={{ color: 'black', marginTop: 20, marginLeft: 20, marginBottom: 20,backgroundColor:'#aec6c1' }}
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
<Card>
                <CardContent>
                  View All Comments :
                  <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit> 
                  {getAllNotes && getAllNotes.map((i, index) =>
                 
                       <> <Grid
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
                         
                        </Grid>
                        <Typography variant="body1" gutterBottom style={{ marginTop: 10, marginLeft: 30 }}>
                          {i?.notes}{' '}
                        </Typography></>
                  )}
                     
                  </Collapse>
                </CardContent>
              </Card>
            </div>
            
          </Stack>
        </Scrollbar>
}
   </Drawer>
    </>
  );
}
