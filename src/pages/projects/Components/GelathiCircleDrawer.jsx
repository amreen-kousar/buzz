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
import { Icon } from '@iconify/react';
import GelathiCircleForm from './GelathiCircleForm';

GelathiCircleDrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function GelathiCircleDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData }) {
console.log(clcikData,'<------clcikDataclcikData')
     const [session,setSession] = useState('')
     const [circleData,setcircleData] = useState('')
    useEffect(() => {
        circle();
       
    }, [clcikData])
 console.log(clcikData,'<-----------mkmkmkmnjknk')
    const circle = async =>{
        var data = JSON.stringify({
            "circle_id": clcikData?.id,
            "project_id": 225,
            "emp_id": 343
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getGelathiCircleData.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setcircleData(response?.data)
            console.log(response.data,"<----------setcircleDatasetcircleData");
          })
          .catch(function (error) {
            console.log(error);
          });
         
    }
console.log(circleData,"------------------------------>dataaaaa")
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
                        {`${clcikData?.title}:`}
                    </Typography>
                    {console.log(clcikData,'<------clcikDataclcikData')}
                    <IconButton onClick={onCloseFilter}>
                        <Iconify icon="eva:close-fill" width={20} height={20} />
                    </IconButton>
                </Stack>

                <Divider />

                

                <Scrollbar>
                    <Stack spacing={10} sx={{ p: 3 }}>
                        <div>
                        {circleData?.gelathis?.map((itm) => {
                return (

                            <Card style={{marginTop:20,}}>
                                <CardContent >
                                    {/* <Stack style={{ flexDirection: 'row' , }}  mb={2}>
                                        
                                       
                                      

                                       <IconButton style={{marginLeft:70,}}>
                                        <Icon  icon="material-symbols:check-box-rounded" width={20} height={20} marginTop={20}  color="#ff7424"  />

                                        </IconButton>
                                      
                                        <IconButton style={{marginLeft:20,}}>
                                        <Icon  icon="clarity:form-line" width={20} height={20} marginTop={20}  color="#ff7424"  />

                                        </IconButton>
                                       
                                       
                                     </Stack> */}
                                   {console.log(circleData?.firstName,'<-------circleData?.firstName')}
                                   <GelathiCircleForm/>
                                   <Typography  variant="subtitle1" >{itm?.firstName}</Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                   
                                        <Typography variant="body1" gutterBottom>{itm?.villagename}</Typography>
                                    </Typography>
                                
                                   
                                </CardContent>
                            </Card>)
                             })}
                    
                        </div>


                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}
