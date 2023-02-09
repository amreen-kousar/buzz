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

ParticipantDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function ParticipantDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData }) {
console.log(clcikData,'<------clcikDataclcikData')
     const [session,setSession] = useState('')
     const [partiData,setpartiData] = useState('')
    useEffect(() => {
        Participant();
        // console.log(clcikData)
    }, [clcikData])

    const Participant = async =>{
        var data = JSON.stringify({
            "participant_id": clcikData?.id
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getParticipantData.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setpartiData(response.data)
            console.log(response.data,">-gbdfgh");
          })
          .catch(function (error) {
            console.log(error);
          });
         
    }
console.log(partiData,"------------------------------>dataaaaa")
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
                                <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                              Name: &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.firstName}</span>
                             </Typography>
                                  
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Age :&nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.age}</span>
                                    </Typography>
                                
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                        Husband Name :
                                        &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.husbandName}</span>
                                    </Typography>
                                    
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                        Contact Person:
                                        &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.contact_no}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Education:
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.education}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }}  variant="subtitle1" gutterBottom>
                                       Saving Amount:
                                       &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.saving_amt}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                     Name of SHG:
                                     &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.nameOfSHG}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Caste :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.caste}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Monthly Saving Wife :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.wifeSavingsMonthly}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Monthly Income Wife :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.wifeIncomeMonthly}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Monthly Income Wife :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.wifeIncomeMonthly}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Goal :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.saving_goal}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Monthly Family Income  :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.income}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Monthly Family Saving  :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.saving_amt}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Bank Account  :
                                    &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.bank_acc}</span>
                                    </Typography>
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                   Type of Enterprise  :
                                   &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{partiData?.typeOfEnterprise}</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                            {/* <ShaktiDialog /> */}
                            {/* <Card style={{marginTop:20}}>
                                <CardContent>
                                   
                                   <Typography  variant="subtitle1" gutterBottom>Visit Participants :   
                                    <Typography variant="body1" gutterBottom>{partiData?.total_participants} </Typography>
                                    </Typography>
                                   
                                </CardContent>
                            </Card> */}
                        </div>


                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}
