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
            "participant id": clickData?.id 
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
            console.log(response.data);
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
                        {`${clcikData?.title}:`}
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
                                        Name :
                                        <Typography variant="body1" >{partiData?.firstName}</Typography>
=                                    </Typography>
                                   
                                    <Typography variant="subtitle1" gutterBottom>
                                    Age :
                                        <Typography variant="body1" gutterBottom>{partiData?.age}</Typography>
                                    </Typography>
                                
                                    <Typography variant="subtitle1" gutterBottom>
                                        Husband Name :
                                        <Typography variant="body1" gutterBottom>{partiData?.husbandName}</Typography>
                                    </Typography>
                                    
                                    <Typography variant="subtitle1" gutterBottom>
                                        Contact Person:
                                        <Typography variant="body1" gutterBottom>{partiData?.contact_no}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Education:
                                        <Typography variant="body1" gutterBottom>{partiData?.education}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                       Savinng Amount:
                                        <Typography variant="body1" gutterBottom>{partiData?.saving_amt}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                     Name of SHG:
                                        <Typography variant="body1" gutterBottom>{partiData?.nameOfSHG}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Caste :
                                        <Typography variant="body1" gutterBottom>{partiData?.caste}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Monthly Saving Wife :
                                        <Typography variant="body1" gutterBottom>{partiData?.wifeSavingsMonthly}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Monthly Income Wife :
                                        <Typography variant="body1" gutterBottom>{partiData?.wifeIncomeMonthly}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Monthly Income Wife :
                                        <Typography variant="body1" gutterBottom>{partiData?.wifeIncomeMonthly}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Goal :
                                        <Typography variant="body1" gutterBottom>{partiData?.saving_goal}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Monthly Family Income  :
                                        <Typography variant="body1" gutterBottom>{partiData?.income}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Monthly Family Saving  :
                                        <Typography variant="body1" gutterBottom>{partiData?.saving_amt}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Bank Account  :
                                        <Typography variant="body1" gutterBottom>{partiData?.bank_acc}</Typography>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                   Type of Enterprise  :
                                        <Typography variant="body1" gutterBottom>{partiData?.typeOfEnterprise}</Typography>
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
