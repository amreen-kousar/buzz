import { useState,useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';
import { Padding, PaddingOutlined } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Funders({selectDATA,getData}) {
  const [fund,setFund] = useState();
  useEffect(()=>{
    console.log(selectDATA,"<--dffgdfgdf")
    if(selectDATA)
    {
    funder()
    }
    },[selectDATA]
    )
  const funder = async () => {
  const data = JSON.stringify({
    "role_id": 1,
    "filter_type": selectDATA,
    "pageNum": 1,
    "emp_id": 206
  });
  
  const config = {
    method: 'post',
    url: 'http://3.7.7.138/appTest/getPeopleFilters.php',
    headers: { 
      'Content-Type': 'application/json'
    },
     data
  };
  
  axios(config)
  .then( (response) =>{
    setFund(response?.data?.data)
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}
  return (
    <div>

    
      <Card style={{marginTop:20}}>
        {fund?.length!==0?fund?.map(itm=>{
 return(
       
            <CardContent>
                <Typography>
                <card><Iconify onClick={()=>getData(itm,selectDATA)} icon="mdi:user-circle" style={{ flexDirection: 'row', justifyContent: 'space-between' }}/>
                    {itm?.name}</card>
                </Typography>
               
            </CardContent>
 )
             }):null}
          </Card>
      
          </div>
  )}