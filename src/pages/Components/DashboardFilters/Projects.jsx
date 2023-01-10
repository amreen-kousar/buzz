import { useState,useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';
export default function Projects({selectDATA,getData}) {
  const [projects,setProjects] = useState();
  
    useEffect(()=>{
      console.log(selectDATA,"<--dffgdfgdf")
      if(selectDATA)
      {
        project()
      }
      },[selectDATA]
      )
  const project = async () => {
  const data = JSON.stringify({
    "manager_id": 2
  });
  
  const config = {
    method: 'get',
    // url: 'http://3.7.7.138/appTest/getProjectList.php',
    url: 'http://3.7.7.138/appTest/getProjectList.php?manager_id=2',
    headers: { 
      'Content-Type': 'application/json'
    },
    
  };
  
  axios(config)
  .then( (response) => {
    setProjects(response?.data?.data)
    console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
} 
return (
  <div>

  
<Card style={{marginTop:20}}>
      {projects?.length!==0?projects?.map(itm=>{
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