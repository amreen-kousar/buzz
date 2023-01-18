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
// ----------------------------------------------------------------------

projectMultiDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function projectMultiDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData }) {

     const [batch,setBatch] = useState('')
    useEffect(() => {
        getTrainingBatch();
        // console.log(clcikData)
    }, [])

    const getTrainingBatch = async =>{
        var data = JSON.stringify({
            "batch_id": 59696,
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
            {/* <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button> */}

            <Drawer
                anchor="right"
                open={isOpenFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 280, },
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
                    <Stack spacing={3} sx={{ p: 3 }}>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                        Project :
                                        <Typography variant="body1" >{batch?.data?.projectName}</Typography>
                                        {console.log(batch?.data?.projectName,'<--------njknnjnjn')}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Partner :
                                        <Typography variant="body1" gutterBottom>{batch?.data?.partnerName}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Training Batch:
                                        <Typography variant="body1" gutterBottom>{batch?.data?.name}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Day1:
                                        <Typography variant="body1" gutterBottom>{batch?.data?.day1_actual}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Day2:
                                        <Typography variant="body1" gutterBottom>{batch?.data?.day2_actual}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Contact Person:
                                        <Typography variant="body1" gutterBottom>{batch?.data?.contact_person}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Contact Number:
                                        <Typography variant="body1" gutterBottom>{batch?.data?.contact_number}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                       Trainer Name:
                                        <Typography variant="body1" gutterBottom>{batch?.data?.trainer_name}</Typography>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <ShaktiDialog />
                            <Card style={{marginTop:20}}>
                                <CardContent>
                                    <Typography>Actual Participants   {batch?.total_participants}     </Typography>
                                    <Typography>Target Participants    {batch?.data?.participants}    </Typography>
                                </CardContent>
                            </Card>
                        </div>


                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}
