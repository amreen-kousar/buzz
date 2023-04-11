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

export default function GelathiCircleDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,data1 }) {
console.log(data1,'<------clcikDataclcikData')
     const [session,setSession] = useState('')
     const [circleData,setcircleData] = useState('')
    useEffect(() => {
        circle();
       
    }, [clcikData])
 console.log(clcikData,'<-----------mkmkmkmnjknk')
    const circle = async =>{
      const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var data = JSON.stringify({
            "circle_id": clcikData?.id,
            "project_id": data1?.project_id,
            "emp_id": userid
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

const removegelathicircle = async(itm)=>{
    if(confirm("Are you sure want to remove")){
    var data = JSON.stringify({
      "circle_id": clcikData?.id,
      "flag": 0,
      "gelathi_id":itm?.gelathi_id
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/updateEnrolledGelathi.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      circle();
    })
    .catch(function (error) {
      console.log(error);
    });
}
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
                            {console.log(itm,"hyy")}
                return (

                            <Card style={{marginTop:20,}}>
                                <CardContent >
                                    <Stack style={{ float:'right'}}  >
                                        
                                       
                                      

                                       <IconButton style={{marginLeft:70,}} onClick={()=>removegelathicircle(itm)}>
                                        <Icon  icon="material-symbols:check-box-rounded" width={20} height={20} marginTop={20}  color="#ff7424"  />

                                        </IconButton>
                                      
                                     
                                       <GelathiCircleForm />
                                     </Stack>
                                   {console.log(circleData?.gelathis,'<-------circleData?.firstName')}
                                  
                                   {/* state={{ id: data1?.project_id }} */}
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
