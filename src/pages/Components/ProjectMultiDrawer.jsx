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
import Photos from '../projects/Components/Photos'

// ----------------------------------------------------------------------

projectMultiDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function projectMultiDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,batchState}) {

     const [batch,setBatch] = useState('')
     const [photos,setPhotos] = React.useState(false)
     const [shown,setShown] = React.useState(false)


    useEffect(() => {
        getTrainingBatch();
       // console.log(batchState)
        
    }, [batchState])
    console.log(clcikData,"<---sads",batchState)
    const getTrainingBatch = async =>{
        
        
        console.log(batchState,"<---batchStatebatchState")
        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
        var data = JSON.stringify({
            "batch_id": batchState?.training_batch_id,
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
                open={isOpenFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 350, },
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                        {`${clcikData?.title}: ${clcikData?.name}`}
                    </Typography>
                    <IconButton onClick={onCloseFilter}>
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
                            <ShaktiDialog batch={batch} shown={shown} setShown={(e)=>{setShown(e)}} />
                            <Card onClick={()=>{setShown(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                                <CardContent>
                                <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px',backgroundColor:'white' }}>
                <Iconify icon="material-symbols:add" width={30} height={30} />
              </div>
                                 <Typography >Actual Participants:   {batch?.total_participants}     
                     {/* <IconButton>
                      <Iconify style={{ color: "black",float:'right'}} icon="material-symbols:add" />
                    </IconButton> */}
                    </Typography>
                                    <Typography>Target Participants:   {batch?.data?.participants}    </Typography>
                                </CardContent>
                            </Card>
                            <Photos batch={batch} photos={photos} setPhotos={(e)=>{setPhotos(e)}}/>
                            <Card onClick={()=>{setPhotos(true),console.log("ferfgreg")}} style={{marginTop:20}}>
                                <CardContent>
                                    <Typography>Photos</Typography>
                                    
                                </CardContent>
                            </Card>
                        </div>


                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}