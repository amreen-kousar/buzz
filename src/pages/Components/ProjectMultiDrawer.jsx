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
import ShaktiDialog from '../projects/Components/ShaktiDialog'
import Photos from '../projects/Components/Photos';
import Programevaluationday1 from '../projects/Components/Programevaluationday1';
import Evaluationday2 from '../projects/Components/Evaluationday2';
import CheckinOut from './PlanofactionFilters/CheckinOut';
// ----------------------------------------------------------------------

projectMultiDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function projectMultiDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,batchState,projectId}) {

     const [batch,setBatch] = useState('')
     const [photos,setPhotos] = React.useState(false)
     const [shown,setShown] = React.useState(false)
   const [images,setImages] = useState([])
   const [check,setCheck]=useState(false)
   const [viewImage, setViewImage] = React.useState(false);
   var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
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
                        {` ${clcikData?.name}`}
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
                                        Training&nbsp;Batch:{batch?.data?.name}
                                    </Typography>
                                    <Typography id="day1" variant="body1" gutterBottom>
                                        Day1:&nbsp;{batch?.data?.day1_actual}
                                    </Typography>
                                    <Typography id="day2" variant="body1" gutterBottom>
                                        Day2:&nbsp;{batch?.data?.day2_actual}
                                    </Typography>
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
                            <Photos id="photos-project-multidrawer" batch={batch} photos={photos} setPhotos={(e)=>{setPhotos(e)}}/>



                            {/* //photo upload button  */}
               
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
                         


                            {/* photo upload end  */}
                            <Card onClick={()=>{setPhotos(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                                <CardContent>
                                    <Typography>View Photos  </Typography>
                                    
                                </CardContent>
                                </Card>
                                <Card  style={{marginTop:20}}>
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
                            </Card>
                            <Programevaluationday1 />
                            <Evaluationday2 />
                           {batch && <CheckinOut
              photos={check}
              batch={batch}
              setCheck={(e) => {
                setCheck(e);
              }}
               />}
                 
                        </div>
                        {/* <Button onClick={UploadImages}>upload image</Button> */}

                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}