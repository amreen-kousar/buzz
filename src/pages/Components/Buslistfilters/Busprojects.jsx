import { useState,useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Projects() {
  const [projects,setProjects] = useState();
  useEffect(()=>{
    project()
    },[]
    )
  const project = async () => {
  const data = JSON.stringify({
    "manager_id": 2
  });
  
  const config = {
    method: 'get',
    // url: 'http://3.7.7.138/appTest/getProjectList.php',
    url: 'https://bdms.buzzwomen.org/appTest/getProjectList.php?manager_id=2',
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  
  axios(config)
  .then( (response) => {
    setProjects(response.data)
    console.log(response.data,"<-fddbdfgbdb");
  })
  .catch( (error) => {
    console.log(error);
  });
} 
  return (
    <div>

    
      <Card style={{marginTop:20}}>
            <CardContent>
                <Typography>
                <Iconify icon="eva:people-fill" width={20} height={20} />
                Projects
                </Typography>
            </CardContent>
          </Card>
          
          </div>
  );
}