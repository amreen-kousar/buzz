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
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
// import ShaktiDialog from '../projects/Components/ShaktiDialog'
// ----------------------------------------------------------------------

GelathiProgrameDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function GelathiProgrameDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData }) {

     const [session,setSession] = useState('')
    useEffect(() => {
        getGFSessionData();
        // console.log(clcikData)
    }, [clcikData])
console.log(clcikData,'<---------clcikDataclcikDataclcikData')
    const getGFSessionData = async =>{
        var data = JSON.stringify({
            "gf_session_id": clcikData?.name
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getGFSessionData.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setSession(response.data)
            console.log(response.data,'<---------setSessionsetSession');
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
                    sx: { width: 350, },
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                    <Typography variant="body1" sx={{ ml: 1 }}>
                        {`${clcikData?.title}`}
                    </Typography>
                    {console.log(clcikData,'<------clcikDataclcikData')}
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
                                        {console.log(session?.gf_session_name,'<--------gf_session_namegf_session_name')}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Partner :&nbsp;{session?.partnerName}</Typography>
                                   
                                    <Typography variant="body1" gutterBottom>
                                        Training&nbsp;Batch:&nbsp;{session?.training_batch_name}</Typography>
                                  
                                    <Typography variant="body1" gutterBottom>
                                        Plan Date :
                                        {session?.plan_date}</Typography>
                                 
                                    
                                    <Typography variant="body1" gutterBottom>
                                        Contact Person:
                                        {session?.contact_person}</Typography>
                                   
                                    <Typography variant="body1" gutterBottom>
                                    Contact Number:
                                        {session?.contact_number}</Typography>
                                   
                                    <Typography variant="body1" gutterBottom>
                                       Trainer Name:
                                       {session?.trainer_name}</Typography>
                                  
                                    <Typography variant="body1" gutterBottom>
                                       GF Name:
                                        {session?.gf_name}</Typography>
                              
                                </CardContent>
                            </Card>
                            {/* <ShaktiDialog /> */}
                            <Card style={{marginTop:20}}>
                                <CardContent>
                                   
                                   <Typography  variant="body1" gutterBottom>Visit Participants :   
                                    <Typography variant="body1" gutterBottom>{session?.total_participants} </Typography>
                                    </Typography>
                                   
                                </CardContent>
                            </Card>
                        </div>


                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}
