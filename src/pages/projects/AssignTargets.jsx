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
const [data1, setData1]=useState()
  console.log("🚀 ~ file: AssignTargets.jsx:20 ~ data1:", data1)
  useEffect(() => {
    targets();
    projData();
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
 alert("Target Added Successfully")
    console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
  alert("Something went wrong!")
});

}
const projData = async => {
  console.log(location, "location props")
  var userDetails = JSON.parse(localStorage?.getItem('userDetails'))
  var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
  var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
  var data = JSON.stringify({
    "project_id": state?.id,
    "role_id": role,
    "emp_id": idvalue
  });

  var config = {
    method: 'post',
    url: 'https://bdms.buzzwomen.org/appTest/getProjectData.php',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      setData1({ ...response.data.list })
      console.log(response.data.list, '<--------------setData1setData1');
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
                    Assign Targets    <IconButton sx={{float:'right',color:'#ff7424',position:'absolute',right:50}} onClick={createTrainerTarget} title="save"><Iconify icon="material-symbols:save"></Iconify></IconButton>
                </Typography> 
         
           
            </Stack>
            <TableContainer >
                  <Table style={{textAlign:"left"}}aria-label="customized table">
                    <TableBody>
                      <TableRow >
                        <TableCell style={{ borderBottom: "none"}}>Project &nbsp;:&nbsp;{data1?.project_name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell style={{ borderBottom: "none"}}>Taluk &nbsp;:&nbsp;{data1?.location_name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell style={{ borderBottom: "none"}}>Partner &nbsp;:&nbsp;{data1?.partnerName}</TableCell>
                      </TableRow>
                     
                    </TableBody>
                  </Table>
                </TableContainer><br/>
                <Typography gutterBottom style={{textAlign:'center'}}>
                     Total Targets : {data1?.training_target}
                </Typography>
                
                 {trainersTargets?.target_list?.map((item,index)=>{
                  return(
                   <>
                   <div style={{marginLeft:"20px"}}>
                   <Typography value={item?.emp_id}>
                       {item?.emp_name}
                    </Typography>
                    </div> 
                    {/* {(item?.emp_target=="")?<TextField sx={{ml:5,mt:1,mb:2}} placeholder="Targets" typeof="number" onChange={(e) => { setCreateTarget({ ...createTarget, emp_target: e?.target?.value }) }} value={item?.emp_target} />:<TextField sx={{ml:5,mt:1,mb:2}} placeholder="Targets" value={item?.emp_target} />} */}
                    <TextField type="number" id="targets" label="Targets" sx={{ml:5,mt:1,mb:2}}  onChange={(e) => { assign(e?.target?.value,index) }} defaultValue={createTarget[index]?.emp_target} color="common" /> 
                    
                   </>
                  )}
                 )}
                  

              

        </Container>
    )
}