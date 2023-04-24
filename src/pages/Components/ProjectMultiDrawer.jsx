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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import EditGelathiSession from '../projects/Components/EditGelathisession';
import EditTrainingBatch from '../projects/EditTrainingSession';
// ----------------------------------------------------------------------

projectMultiDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function projectMultiDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,batchState,projectId}) {
console.log("🚀 ~ file: ProjectMultiDrawer.jsx:46 ~ projectMultiDrawer ~ clcikData:", clcikData)

     const [batch,setBatch] = useState('')
     const [schedule,setReschedule]=React.useState(false);
     const [day2Schedule,setday2Reschedule]=React.useState(false);
     const [photos,setPhotos] = React.useState(false)
     const [shown,setShown] = React.useState(false)
   const [images,setImages] = useState([])
     const [getAllNotes, setGetAllNotes] = useState([]);
const [SaveBtn , setSaveBtn] = useState(false) 
const [gelatiNote, setGelatiNote] = useState('');
 const [showNote, setShowNote] = useState(false);
   const [showalert,setShowalert]=useState(false);
  const [date, setDate] = useState(new Date())
  const [day2date,setday2date] = useState(new Date())
   const [session, setSession] = useState('');
   const [editSession,setEditsession]=useState(false);
   const [check,setCheck]=useState(false)
   const [checkData,setCheckData]=React.useState('');
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
            "tb_id":batchState?.id,
            "trainer_id": idvalue,
            "day": 1,
            "photos": images.toString().slice(22,)
        })

        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
          };

          fetch("https://bdms.buzzwomen.org/appTest/uploadTrainingPhotos.php", requestOptions)
  .then(response => {response.text()
  alert("Photo Uploaded Successfully..")
  setImages([])
  })

  .then(result => console.log(result, "result in"))
  .catch(error => console.log('error', error));
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

const handlealert=()=>{
  alert('There is no training Batch')
}
 
    return (
        <>
            <Drawer
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
                      {clcikData?.title!=='Self Shakti'? clcikData?.name : clcikData?.title}
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
                                        Training&nbsp;Batch:<br/>{batch?.data?.name} 
                                        {(userId==5)?<IconButton onClick={()=>{setEditsession(true)}} style={{right:-20}}><Iconify  icon="material-symbols:edit"></Iconify></IconButton>:null}
                                    </Typography>
                                    <Typography id="day1" variant="body1" gutterBottom>
                                        Day1:&nbsp;{batch?.data?.day1_actual}
                                        
           {(userId==5)?<> <IconButton onClick={reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
            {console.log(session,"sessionidddddddd")}
            <IconButton onClick={()=>removesession(batch?.data?.day1_id)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton></>:null}
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
                                        {(userId==5)?<><IconButton onClick={day2Reschedudlehandler} style={{right:-20}}><Iconify icon="mdi:clock-time-four-outline"></Iconify></IconButton>
            <IconButton onClick={()=>removesession(batch?.data?.day2_id)} style={{right:-20}}><Iconify icon="mdi:cancel-circle"></Iconify></IconButton></>:null}
                                        
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
                            <ShaktiDialog id="shakti-dialog-project-multidrawer" batch={batch} shown={shown} setShown={(e)=>{setShown(e)}} />
                            <Card id="project-mutlidrawer-card" onClick={()=>{setShown(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                                <CardContent id="project-card-content">
                                <div id="material-pro-multi-drawer" style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px',backgroundColor:'white' }}>
                <Iconify id="add-symbol-material" icon="material-symbols:add" width={30} height={30} />
              </div>
                                 <Typography id="actual-participants" >Actual Participants:   {batch?.total_participants}     
                     {/* <IconButton>
                      <Iconify style={{ color: "black",float:'right'}} icon="material-symbols:add" />
                    </IconButton> */}
                    </Typography>
                                    <Typography id="target particpants">Target Participants:   {batch?.data?.participants}    </Typography>
                                </CardContent>
                            </Card>
                            {/* <Photos id="photos-project-multidrawer" batch={batch} photos={photos} setPhotos={(e)=>{setPhotos(e)}}/> */}



                            {/* //photo upload button  */}
               
{( userId==5)?<>
<Card id="delete-card-project" style={{marginTop:20}}>
<div id="project-multidrawwer-div" style={{ display: 'flex' }}>
                {viewImage
                  ? images.map((i, index) => {
                      return (
                        <div style={{ display: 'flex', margin: '1rem' }}>
                          <img id="img-delete-project-multidrawer" src={i} style={{ height: '50px', width: '70px' }} alt="hello" />
                          <Iconify id="icon-delete-image"
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
<div id="project-input-tag-div" style={{ display: 'flex' ,marginTop:"10px" , marginBottom:"10px"}}>
                  <label id="input-tag-project-multi-drawer" for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
                    <Iconify id="camera-icon" icon={'mdi:camera'} sx={{ width: 25, height: 25, ml: 2, color: '#ff7424' }} />
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
</Card>
                         

<Card onClick={()=>{setPhotos(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                                <CardContent>
                                    <Typography>View Photos  </Typography>
                                    
                                </CardContent>
                                </Card>
                                </>:null} <br/>
                                {(batch && userId==5) && <CheckinOut
              photos={check}
              batch={batch}
              setCheck={(e) => {
                setCheck(e);
              }}
               />}<br/>

                            {/* photo upload end  */}
                           
                                {/* <input accept="image/png, image/gif, image/jpeg"
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target,"<------imageesssssssss");
          convertImage(event);
        }}
      /> */}
    
                                {/* <CardContent>
                                   
                                    <Typography >Upload Photos</Typography>
                                    
                                </CardContent> */}
                            {/* </Card> */}


                            {/* {batch?.evaluation_first==0? " there i sno training batch"} */}
                       <Programevaluationday1 onCloseFilter={onCloseFilter} />
                            <Evaluationday2  onCloseFilter={onCloseFilter}/>
              
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
{/* batch?.batch_completed=='0' */}
              {  showNote ? (
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
              ) :null}

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
                               {i?.name} &nbsp; {i?.date}
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
                        {/* <Button onClick={UploadImages}>upload image</Button> */}

                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}