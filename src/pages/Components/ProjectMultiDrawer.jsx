import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react"
import PropTypes from 'prop-types';
// material
import {
    Box,
    Radio,
    Stack,
    Button,
    Drawer,TextField,
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
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { ColorManyPicker } from '../../components/color-utils';
import ShaktiDialog from '../projects/Components/ShaktiDialog'
import Photos from '../projects/Components/Photos';
import Programevaluationday1 from '../projects/Components/Programevaluationday1';
import Evaluationday2 from '../projects/Components/Evaluationday2';
import CheckinOut from './PlanofactionFilters/CheckinOut';
import moment from 'moment';
import Collapse from '@mui/material/Collapse';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import EditGelathiSession from '../projects/Components/EditGelathisession';
import EditTrainingBatch from '../projects/EditTrainingSession';
import { useMediaQuery } from '@mui/material';
import Day2Completed from '../projects/Components/day2Completion';
// ----------------------------------------------------------------------
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import ShaktiDialogday2 from '../projects/Components/ShaktiDialogday2';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  // marginLeft: 'auto' ,
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
}));

projectMultiDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function projectMultiDrawer({ isOpenFilter,shakti, onOpenFilter, onCloseFilter, clcikData,batchState,projectId}) {
console.log("🚀 ~ file: ProjectMultiDrawer.jsx:61 ~ projectMultiDrawer ~ clcikData:", shakti)

     const [batch,setBatch] = useState('')
     console.log("🚀 ~ file: ProjectMultiDrawer.jsx:49 ~ projectMultiDrawer ~ batch:", batch)
     const [schedule,setReschedule]=React.useState(false);
     const [day2Schedule,setday2Reschedule]=React.useState(false);
     const [photos,setPhotos] = React.useState(false)
     const [shown,setShown] = React.useState(false)
   const [images,setImages] = useState([])
     const [getAllNotes, setGetAllNotes] = useState([]);
const [SaveBtn , setSaveBtn] = useState(false) 
const [gelatiNote, setGelatiNote] = useState('');
 const [showNote, setShowNote] = useState(false);
 const [checkData,setCheckData]=React.useState('');
  const [date, setDate] = useState(new Date())
  console.log("🚀 ~ file: ProjectMultiDrawer.jsx:76 ~ projectMultiDrawer ~ date:", date)
  const [day2date,setday2date] = useState(new Date())
   const [session, setSession] = useState('');
   const [editSession,setEditsession]=useState(false);
   const [check,setCheck]=useState(false)
   const [expanded, setExpanded] = React.useState(false);
   const isSmallScreen = useMediaQuery('(max-width:600px)');
 
const handleExpandClick = () => {
  setExpanded(!expanded);
};
   const [viewImage, setViewImage] = React.useState(false);
   var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
   const userId = JSON.parse(localStorage.getItem('userDetails'))?.role;
    useEffect(() => {
        getTrainingBatch();
       // console.log(batchState)
        
    }, [batchState,clcikData])
    useEffect(()=>{
      setImages([])
    },[batchState?.training_batch_id])
    console.log(clcikData,"<---sads",batchState)

    const getTrainingBatch = async =>{
        
        console.log(batchState,"<---batchStatebatchState",batchState?.training_batch_id?batchState?.training_batch_id:clcikData?.id)
        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
        var data = JSON.stringify({
            "batch_id": batchState?.training_batch_id?batchState?.training_batch_id:clcikData?.id,
            "role_id": role
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchData.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setBatch(response.data)
            console.log(batch , "response from ")
          
            
          })
          .catch(function (error) {
            console.log(error);
          });
          GetStatus();
          
    }

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

    console.log("batch?.project_id", batch?.data?.project_id)
    const UploadImages = (e) =>{
      if (images.length === 0) {
        alert("No photos to upload.")
        throw new Error('No photos to upload.');
      }
        console.log("upload method is calling ")

        if(images.length<=0){
          alert("No Image is Selected!")
        }else{
          var raw = JSON.stringify({
            "project_id":  batch?.data?.project_id,
            "tb_id":batch?.data?.id,
            "trainer_id": idvalue,
            "day": 1,
            "photos": [images.toString().slice(22,)]
        })

        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
          };

    let res =  fetch("https://bdms.buzzwomen.org/appTest/uploadTrainingPhotos.php", requestOptions)
  .then((response) => {
  
  setImages([])
  alert("Photo Uploaded Successfully..")
  })

 
  .catch((error) => {console.log('error', error)});
    }
    
        }
 

    //Method to delete the images that is selected 
  const deleteImage = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  };

  
  const removesession=(e)=>{
    if(confirm("Do You want to Cancel?")){
      var data = JSON.stringify({
        "poa_id": e,
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
        getTrainingBatch();

      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
  }

  const reschedudlehandler=()=>{
   setReschedule(true)
  }

  const day2Reschedudlehandler=()=>{
    setday2Reschedule(true)
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
      shakti()
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

    //createnotes
const noteSubmitHandler = () => {
    
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role;

    var data = JSON.stringify({
      notes: gelatiNote,
      type: 1,
      tb_id: batch?.data?.id,
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
   //getting Notes\
   useEffect(() => {
    getNoteHandler();
   
   // console.log(batchState)
    
},[batch?.data?.id])
   const getNoteHandler = () => {
    console.log('getNoteHandler');
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role;
    var data = JSON.stringify({
      type: 1,
      tb_id: batch?.data?.id,
      
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

  
  console.log("🚀 ~ file: ProjectMultiDrawer.jsx:495 ~ projectMultiDrawer ~ batch?.data?.day1_actual >=  date:",( (batch?.data?.day1_actual )>=( moment(date).format("YYYY-MM-DD"))))
  const GetStatus = async=>{
    var data = JSON.stringify({
      "project_id": projectId,
      "poa_type": 1,
      "type": 2,
      "tb_id": batchState?.training_batch_id?batchState?.training_batch_id:clcikData?.id
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getCheckInOutStatus.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data),"dataaaaaaaaaaaa");
      setCheckData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const styles = {
    buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left" },
    tableRowStyle: { justifyContent: 'center', alignItems: 'center', marginLeft: 200 },
    linkStyle: { textDecoration: 'none', color: "black" }
  }
  console.log("🚀 ~ file: ProjectMultiDrawer.jsx:453 ~ projectMultiDrawer ~ batch?.data?.day2_actual:", batch?.data?.day2_actual)
 
    return (
        <>
            <Drawer
            width={isSmallScreen ? '100%' : 300}
              id="project-mutidrawer-drwer"
                anchor="right"
                open={isOpenFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 350, },
                }}
            >
                <Stack  id="pro-mutlidrawer-stack" direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                       {(clcikData?.title=='Self Shakti')? "Self Shakti" :(clcikData?.name)}
                        {/* {` ${clcikData?.name}`} */}
                        {/* {clcikData?.title} */}
                        {console.log(clcikData,"clicked data")}
                    </Typography>
                    <IconButton id="project-close-icon-btn" onClick={onCloseFilter}>
                        <Iconify id="project-close-icon" icon="eva:close-fill" width={20} height={20} />
                    </IconButton>
                </Stack>

                <Divider />

                <Scrollbar id="scrollbar-project-multidrawer">
                    <Stack id="project-multidrawer-stack" spacing={3} sx={{ p: 2 }}>
                        <div>
                            <Card id="project-card">
                                <CardContent id="project-multidrawer-card-content">
                                    <Typography id="project" style={{ flexDirection: 'row' }} variant="body1" gutterBottom>
                                        Project :
                                      &nbsp;{batch?.data?.projectName}
                                        {console.log(batch?.data?.projectName,'<--------njknnjnjn')}
                                    </Typography>
                                    <Typography id="partner" variant="body1" gutterBottom>
                                        Partner :
                                        &nbsp;{batch?.data?.partnerName}
                                      
                                    </Typography>

                                    

                                    <Typography id="training" variant="body1" gutterBottom>
                                        Training&nbsp;Batch:<br/>{batch?.data?.name} <IconButton onClick={()=>{setEditsession(true)}} style={{right:-20}}><Iconify  icon="material-symbols:edit"></Iconify></IconButton>
                                    </Typography>
                                    <Typography id="day1" variant="body1" gutterBottom>
                                        Day1:&nbsp;{batch?.data?.day1_actual}
                                        
            <IconButton onClick={reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
            {console.log(session,"sessionidddddddd")}
            <IconButton onClick={()=>removesession(batch?.data?.day1_id)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton>
                                    </Typography>
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
        {console.log(batch,"session?.id")}
        <Button onClick={()=>Reschedule(batch?.data?.day1_id)}>Save</Button>
      </Stack>}
      <EditTrainingBatch batch={batch} editSession={editSession} setEditsession={(e)=>{setEditsession(e)}}/>
                                    <Typography id="day2" variant="body1" gutterBottom>
                                        Day2:&nbsp;{batch?.data?.day2_actual}
                                        <IconButton onClick={day2Reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
            <IconButton onClick={()=>removesession(batch?.data?.day2_id)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton>
                                        
                                    </Typography>
                                    {day2Schedule && <Stack>
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
        {console.log(batch,"session?.id")}
        <Button onClick={()=>Reschedule(batch?.data?.day2_id)}>Save</Button>
      </Stack>}
                                    <Typography id="contact-person" variant="body1" gutterBottom>
                                        Contact Person:&nbsp;{batch?.data?.contact_person}
                                    </Typography>
                                    <Typography id="conatct-number" variant="body1" gutterBottom>
                                    Contact Number:&nbsp;{batch?.data?.contact_number}
                                    </Typography>
                                    <Typography id="trainer-name" variant="body1" gutterBottom>
                                       Trainer Name:&nbsp;{batch?.data?.trainer_name}
                                    </Typography>
                                </CardContent>
                            </Card>
                           
                           {(userId==5 && batch?.data?.day1_completed=='1')?<ShaktiDialogday2 batch={batch} shown={shown} setShown={(e)=>{setShown(e)}} />:(userId==5 && batch?.data?.day1_completed!='1')? <ShaktiDialog id="shakti-dialog-project-multidrawer" batch={batch} shown={shown} setShown={(e)=>{setShown(e)}} />:<Day2Completed batch={batch} shown={shown} setShown={(e)=>{setShown(e)}}/>}
                           
                           
                            <Card sx={{mt:2}} id="project-mutlidrawer-card" onClick={()=>{setShown(true),console.log("ferfgreg")}} style={styles.buttonStyle}>
                                <CardContent id="project-card-content">
                             
                                 <Typography id="actual-participants" >Actual Participants:   {batch?.total_participants}    
                                {batch?.data?.day1_actual >=  moment(date).format("YYYY-MM-DD") && <Iconify id="add-symbol-material" icon="material-symbols:add" width={30} height={30} style={{float:'right'}} />} 
                  
                    </Typography>
                                    <Typography id="target particpants">Target Participants:   {batch?.data?.participants}    </Typography>
                                </CardContent>
                            </Card><br/>
                            {(batch?.photos)?<Photos id="photos-project-multidrawer" batch={batch} photos={photos} setPhotos={(e)=>{setPhotos(e)}}/>:null}

                          

                                <Stack style={{ flexDirection: 'row'}}  mb={2}>
      
      <Button variant="secondary" style={styles.buttonStyle}  
                  endIcon={<IconButton onClick={()=>{setPhotos(true);
                  }}> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                  startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:photo-library-rounded" /></IconButton>}>
                  <span style={{ width: "200px" }}>Photos</span>
                </Button>
      </Stack>
                            
                               
                           
                           {batch && <CheckinOut
              photos={check}
              batch={batch}
              setCheck={(e) => {
                setCheck(e);
              }}
               />}
                <Programevaluationday1 batch={batch} onCloseFilter={onCloseFilter} />
                            <Evaluationday2 batch={batch}  onCloseFilter={onCloseFilter}/>

      
              <Stack style={{ flexDirection: 'row'}}  mb={2}>
      
        <Button variant="secondary" style={styles.buttonStyle} 
                    endIcon={<IconButton  onClick={() => {
                      setShowNote(true);
                    }}> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="ph:note-pencil" /></IconButton>}>
                    <span style={{ width: "200px" }}>Notes</span>
                  </Button>
        </Stack>

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
                      style={{ color: "#ff7424", marginTop: 20, marginLeft: 20, marginBottom: 20 ,backgroundColor:"#ffd796"}}
                      onClick={noteSubmitHandler}
                      disabled={gelatiNote.trim()===""}
                    >
                      Save
                    </Button> 
                    
                    <Button
                  
                  style={{ color: 'black', marginTop: 20, marginLeft: 20, marginBottom: 20 ,backgroundColor:'#aec6c1'}}
                  onClick={()=>{
                   setShowNote(false)
                  }}
                >
                  
                
                  Cancel
         
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

              {/* <CardContent>
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
                                {' '}
                                {userName}
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
              </CardContent> */}
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
                        {/* <Button onClick={UploadImages}>upload image</Button> */}

                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}