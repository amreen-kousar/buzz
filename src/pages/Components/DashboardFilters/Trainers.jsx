import { useState,useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';


export default function Trainers({selectDATA,getData}) {
  const [train,setTrain] = useState();
  useEffect(()=>{
    console.log(selectDATA,"<--dffgdfgdf")
    if(selectDATA)
    {
      trainer()
    }
    },[selectDATA]
    )
  const trainer = async () => {
  const data = JSON.stringify({
    "role_id": 1,
    "filter_type": selectDATA,
    "pageNum": 1,
    "emp_id": 206
  });
  
  const config = {
    method: 'post',
    url: 'https://bdms.buzzwomen.org/appTest/getPeopleFilters.php',
    headers: { 
      'Content-Type': 'application/json'
    },
     
  };
  
  axios(config)
  .then( (response) =>{
    setTrain(response?.data?.data)
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}
  return (
    <div>

    
<Card style={{marginTop:20}}>
        {train?.length!==0?train?.map(itm=>{
 return(
       
            <CardContent>
                <Typography>
                <Iconify onClick={()=>getData(itm,selectDATA)} icon="eva:people-fill" width={20} height={20} />
               {itm?.name}
                </Typography>
            </CardContent>
 )
             }):null}
          </Card>
         
          </div>
  );
}