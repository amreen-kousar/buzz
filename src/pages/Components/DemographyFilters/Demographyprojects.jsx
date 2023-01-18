import { useState,useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
export default function Demographyprojects({selectDATA,getData}) {
  const [projects,setProjects] = useState();
  
    useEffect(()=>{
      console.log(selectDATA,"<--dffgdfgdfproject")
      if(selectDATA)
      {
        project()
      }
      },[selectDATA]
      )
  const project = async () => {
  // const data = JSON.stringify({
  //   "manager_id": 2
  // });
  const data = JSON.stringify({
    "role_id": 1,
    "filter_type": selectDATA,
    "pageNum": 1,
    "emp_id": 206
  });
  
  const config = {
    // method: 'get',
    method: 'post',
    // url: 'http://3.7.7.138/appTest/getProjectList.php',
    // url: 'https://bdms.buzzwomen.org/appTest/getProjectList.php?manager_id=2',
    url: 'https://bdms.buzzwomen.org/appTest/getPeopleFilters.php',

    headers: { 
      'Content-Type': 'application/json'
    },
    data
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
     
        //   <CardContent>
        //       <Typography>
        //       <Iconify onClick={()=>getData(itm,selectDATA)} icon="eva:people-fill" width={20} height={20} />
        //      {itm?.name}
        //       </Typography>
        //   </CardContent>
        <TableContainer >
                <Table aria-label="customized table"  >
                  <TableBody  >
                    <TableRow style={{ height: "10px !important" }} onClick={() => getData(itm, selectDATA)} >
                      <TableCell style={{ width: "10px" }}> <Iconify icon="mdi:user-circle" width={20} height={20} /> </TableCell>
                      <TableCell >  {itm?.name}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
)
           }):null}
        </Card>
       
        </div>
);
}