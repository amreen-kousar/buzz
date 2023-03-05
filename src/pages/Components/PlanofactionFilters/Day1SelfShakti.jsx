import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";
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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Color } from '@mui/material';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { DetailsRounded } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
 import CheckinOut from './CheckinOut'
// import AddParticipants from './AddParticipants';
// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

Day1SelfShakti.propTypes = {
  isOpenDay1: PropTypes.bool,
  onOpenDay1: PropTypes.func,
  onCloseDay1: PropTypes.func,
};

export default function Day1SelfShakti({ isOpenDay1, onOpenDay1, onCloseDay1, clcikData, batchState,}) {
    const [batch,setBatch] = useState('')
    const [photos,setPhotos] = React.useState(false)
    const [shown,setShown] = React.useState(false)
       const [checkinout,setCheckInOut]  = React.useState(false)

   useEffect(() => {
       getTrainingBatch();
      // console.log(batchState)
       
   }, [batchState])
   console.log(clcikData,"<---sads",batchState)
   const getTrainingBatch = async =>{
       
       
       console.log(batchState,"<---batchStatebatchState")

       var data = JSON.stringify({
           "batch_id": 81170,
           "role_id": 1
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
           console.log(response.data,'<-----------setBatchsetBatchsetBatch');
         })
         .catch(function (error) {
           console.log(error);
         });
         
   }

   return (
       <>
           <Drawer
               anchor="right"
               open={isOpenDay1}
               onClose={onCloseDay1}
               PaperProps={{
                   sx: { width: 350, },
               }}
           >
               <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                   <Typography variant="subtitle1" sx={{ ml: 1 }}>
                       {`${clcikData?.title}: ${clcikData?.name}`}
                   </Typography>
                   <IconButton onClick={onCloseDay1}>
                       <Iconify icon="eva:close-fill" width={20} height={20} />
                   </IconButton>
               </Stack>

               <Divider />

               <Scrollbar>
                   <Stack spacing={3} sx={{ p: 2 }}>
                       <div>
                           <Card>
                               <CardContent>
                                   <Typography style={{ flexDirection: 'row' }} variant="body1" gutterBottom>
                                       Project :
                                     &nbsp;{batch?.data?.projectName}
                                       {console.log(batch?.data?.projectName,'<--------njknnjnjn')}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                       Partner :
                                       &nbsp;{batch?.data?.partnerName}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                       Training&nbsp;Batch:{batch?.data?.name}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                       Day1:&nbsp;{batch?.data?.day1_actual}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                       Day2:&nbsp;{batch?.data?.day2_actual}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                       Contact Person:&nbsp;{batch?.data?.contact_person}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                   Contact Number:&nbsp;{batch?.data?.contact_number}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                      Trainer Name:&nbsp;{batch?.data?.trainer_name}
                                   </Typography>
                               </CardContent>
                           </Card>
                           {/* <ShaktiDialog batch={batch} shown={shown} setShown={(e)=>{setShown(e)}} /> */}
                           <Card onClick={()=>{setShown(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                               <CardContent>
                                   <Typography>Actual Participants:   {batch?.total_participants}     </Typography>
                                   <Typography>Target Participants:   {batch?.data?.participants}    </Typography>
                               </CardContent>
                           </Card>
                           {/* <Photos batch={batch} photos={photos} setPhotos={(e)=>{setPhotos(e)}}/> */}
                           <Card onClick={()=>{setPhotos(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                               <CardContent>
                                   <Typography>Photos</Typography>
                                   
                               </CardContent>
                           </Card>
                         
                           <CheckinOut  checkinout={checkinout} />
                           
                           <Card onClick={()=>{setCheckInOut(true),console.log("knmknmk")}} style={{marginTop:20}}>
                               <CardContent>
                               <Typography>Check IN / Check Out  </Typography>
                               </CardContent>
                           </Card>
                           <Card onClick={()=>{setPhotos(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                               <CardContent>
                               <Typography>Programe Evaluation Day1  </Typography>
                               </CardContent>
                           </Card>
                           <Card onClick={()=>{setPhotos(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                               <CardContent>
                               <Typography>Programe Evaluation Day2  </Typography>
                               </CardContent>
                           </Card>
                           
                       </div>


                   </Stack>
               </Scrollbar>
           </Drawer>
       </>
  );
}
