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
    TextField
} from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
// import ShaktiDialog from '../projects/Components/ShaktiDialog'
// ----------------------------------------------------------------------
import { useLocation, useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { Navigate } from 'react-router-dom';

BeehiveDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function BeehiveDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,data,id }) {
    // const history = useHistory();
    const {data3} = useLocation()
    const navigate = useNavigate();
console.log(data,'<------clcikDataclcikData',data)
     const [session,setSession] = useState('')
     const [scheduleData,setScheduleData] = useState('')

     const [addData, setAddData] = useState({
        date: dayjs(new Date()),
        user_id: "",
      })

    useEffect(() => {
        beehiveVillageVisit();
        // console.log(clcikData)
    }, [clcikData])

    const createGfSession = async =>{
        var data = JSON.stringify({
            "project_id": scheduleData?.data?.project_id,
            "user_id": 492,
            "locationId":scheduleData?.data?.location_id ,
            "tb_name": scheduleData?.data?.name,
            "numOfParticipants":scheduleData?.all_participants?.length ,
            "tb_id": scheduleData?.data?.id,
            "gf_session_type": 2,
            "plan_date": addData?.date,
            "gf_session_name": null
          });
          
          var config = {
            method: 'post',
          maxBodyLength: Infinity,
            url: 'https://bdms.buzzwomen.org/appTest/createGFSessions.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            // onCloseFilter()
            // history.push('/')
            if(response?.data?.code ===200){
            navigate('/dashboard/projects/gelathiProgram',{state:{id:id}})
            console.log(JSON.stringify(response.data));
            }
            else{
  alert(response?.data?.message)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    const beehiveVillageVisit = async =>{
          var data = JSON.stringify({
            "batch_id": clcikData?.name,
            "role_id": 6
          });
          
          var config = {
            method: 'post',
          maxBodyLength: Infinity,
            url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchData.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setScheduleData(response?.data)
            console.log(response.data,"<--------------setScheduleData");
          })
          .catch(function (error) {
            console.log(error);
          });
          
         
    }
    const handleChange = (event) => {
        setAddData({ ...addData, date: event })
      }
console.log(scheduleData,"------------------------------>dataaaaascheduleDatascheduleData")
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
                              Project: &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.projectName}</span>
                             </Typography>
                                  
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Partner :&nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.partnerName}</span>
                                    </Typography>
                                
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                        Village  :
                                        &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.name}</span>
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Typography style={{ flexDirection: 'row',marginTop:20,marginLeft:5 }} variant="subtitle1" gutterBottom>
                                       All Participants :  {scheduleData?.all_participants?.length}
                                    </Typography>

                          
                                <Card style={{marginTop:20}}>
                                    <CardContent>
                                    <DateTimePicker
                    label="Date&Time picker"
                    value={addData?.date}
                    onChange={(e) => { handleChange(e) }}
                    renderInput={(params) => <TextField {...params} color="common" />}
                  />
                                    </CardContent>
                                </Card>
                                <Stack mt={5}>
                                <Button fullWidth variant="contained" onClick={createGfSession} >Save</Button>

                                </Stack>

                         
                        </div>


                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}
