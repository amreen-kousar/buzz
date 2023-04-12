import React from "react";
import { Container,Stack,Typography,IconButton,TextField,InputLabel,Button } from "@mui/material";
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
var [createTarget,setCreateTarget] = useState([]);
  useEffect(() => {
    targets();
}, []
)

const assign=(e,index)=>{
  createTarget[index].emp_target=e
  setCreateTarget(createTarget)
}

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
  let temp=[]
  response?.data?.list?.target_list?.forEach(r=>temp.push({
    
      "emp_id": r?.emp_id,
      "emp_target": r?.emp_target
    
  }))
  setCreateTarget(temp)
  setTrainersTargets(response.data?.list)
})
.catch(function (error) {
  console.log(error);
});

  }

  
const createTrainerTarget=async=>{
var data = JSON.stringify({
  "target_list":createTarget,
  "project_id": state?.id
});

var config = {
  method: 'post',
  url: 'https://bdms.buzzwomen.org/appTest/createTrainerTarget.php',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
 
    console.log(JSON.stringify(response.data));
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
            <Button onClick={createTrainerTarget}>Save</Button>
            <TableContainer >
                  <Table style={{textAlign:"left"}}aria-label="customized table">
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
                
                 {trainersTargets?.target_list?.map((item,index)=>{
                  return(
                   <> <Typography style={{ marginLeft:"1.5%", textAlign:"initial"}} value={item?.emp_id}>
                       {item?.emp_name}
                    </Typography>
                    {/* {(item?.emp_target=="")?<TextField sx={{ml:5,mt:1,mb:2}} placeholder="Targets" typeof="number" onChange={(e) => { setCreateTarget({ ...createTarget, emp_target: e?.target?.value }) }} value={item?.emp_target} />:<TextField sx={{ml:5,mt:1,mb:2}} placeholder="Targets" value={item?.emp_target} />} */}
                    <TextField sx={{ml:5,mt:1,mb:2}} placeholder="Targets" onChange={(e) => { assign(e?.target?.value,index) }} defaultValue={createTarget[index]?.emp_target}  /> 
                      </>
                  )}
                 )}
                  

              

        </Container>
    )
}