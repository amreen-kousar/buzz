import React from "react";
import { Container,Stack,Typography,IconButton,TextField,InputLabel } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import { useEffect, useState} from "react";

export default function AssignTargets()
{
  const {state} =useLocation()
const [trainersTargets,setTrainersTargets]=useState('');
  useEffect(() => {
    targets();
}, []
)

  const targets=async=>{
var data = JSON.stringify({
  "project_id": state?.id
});

var config = {
  method: 'post',
  url: 'https://bdms.buzzwomen.org/appTest/getAssignTargets.php',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setTrainersTargets(response.data?.list)
})
.catch(function (error) {
  console.log(error);
});

  }
  console.log(trainersTargets,"trainers")
    return(
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    Assign Targets
                </Typography>
           
            </Stack>
            <TableContainer >
                  <Table aria-label="customized table">
                    <TableBody>
                      <TableRow >
                        <TableCell>Project &nbsp;:&nbsp;{trainersTargets?.project_name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Taluk &nbsp;:&nbsp;{trainersTargets?.location_name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Partner &nbsp; : &nbsp;{trainersTargets?.partnerName}</TableCell>
                      </TableRow>
                     
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography gutterBottom style={{textAlign:'center'}}>
                     Total Targets : {trainersTargets?.training_target}
                </Typography>
                
                 {trainersTargets?.target_list?.map((item)=>{
                  return(
                   <> <Typography value={item?.emp_id}>
                       {item?.emp_name}
                    </Typography>
                      <TextField sx={{ml:5,mt:1,mb:2}} placeholder="Targets" value={item?.emp_target}/></>
                  )}
                 )}
                  

              

        </Container>
    )
}