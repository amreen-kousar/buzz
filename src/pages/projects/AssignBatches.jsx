import React from "react";
import { Typography,Card,CardContent, IconButton, Stack, Select,MenuItem} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from "@mui/system";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";
import { vi } from "date-fns/locale";

export default function AssignBatches(){
    const [gelathi, setGelathi] = useState('');
    const [gl,setGl] = useState(false);
    const [villages, setVillages] = useState('');
    const [batch,setBatch] = useState('');
    const [tc, setTc] = useState('');
    let [alloted,setAlloted]=useState(0)

   const [selected,setSelected]=useState([])
  useEffect(() => {
    gelathinamelist(35)
   
  }, []
  )
  const gelathinamelist= async() =>{
   
    var data = JSON.stringify({
        "project_id":234,
        "role_id":13  , 
        "operation_manager_id":35,
        "pageNum": 1
      });
      
      var config = {
        method: 'post',
        url: 'http://3.7.7.138/appTest/getPeopleList.php',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        setGelathi(response?.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
}

const villagelist= async(itm) =>{
  setGl(true)
  var data = JSON.stringify({
    "project_id":234, 
    "emp_id":itm?.id,
    
  
    });


    setAlloted(itm?.villages_assigned)
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchList.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      setVillages(response?.data)
      setTc(response?.data?.list.length)
    })
    .catch(function (error) {
      console.log(error);
    });
    
}

const CreateBatch= async(id) =>{
  selected.push(id)
  setSelected(selected)
  // console.log(createbatch,"createbatchhhhhh")
  var data = JSON.stringify({
     
     "project_id":234, 
     "training_batch_id":id,
      "emp_id":50
    });
console.log(alloted,selected)
      
  setAlloted(alloted=>parseInt(alloted)+1)    
  {console.log(alloted,"countttttttt")}
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/createGFBatch.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      setBatch(response?.data)
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
}


    return(
       
     
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    Assign Batches
                </Typography>
           
            </Stack>
          
        
        <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Select Gelathi Facilitator </Typography>
                  <Stack mt={2} mb={2}>
                  {/* {data.state == "" && "Select "} */}
              <Select color="common" label="Gelathi Facilitator" variant="standard">
             
                  {gelathi?.list?.map((itm)=>{
                  
                    return(
                            <MenuItem onClick={()=>{villagelist(itm)}} value={itm?.id}>{itm?.first_name}</MenuItem>
                            
                    )
                    
                  })}
                </Select>
                  </Stack>
                </CardContent>
          </Card><br/>
       
                     {(gl)?<Typography gutterBottom style={{textAlign:'center'}}>
                     Total Villages: {alloted}/{tc}
                     {console.log(alloted,"alloteddddddddd")}
                     </Typography>:null}
                
                 {(gl)?<Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                 
                  <Stack mt={2} mb={2}>
             
             
                  {villages?.list?.map((itm)=>{
                    // {console.log(villages?.list,"villagesssssssssssssss")}
                    return(
                      <>
                            {/* <Typography value={itm?.training_batch_id}>{itm?.name}
                             <Iconify icon="mdi:car-sports-utility-vehicle" style={{float:'left',margin:10}}/>
                            </Typography> */}

                            <TableContainer >
                  <Table aria-label="customized table">
                    <TableBody>
                      <TableRow >
                        <TableCell> <Iconify icon="mdi:car-sports-utility-vehicle" style={{float:'left',margin:5,display:'flex',fontSize:20, color:'black'}}/> 
                        <Typography value={itm?.training_batch_id}>{itm?.name}
                        
                        
                        {(selected.includes(itm?.training_batch_id))?<IconButton  style={{float:'right'}}>
                          <Iconify icon="typcn:tick" style={{fontSize:20,color:"green"}}/>
                        </IconButton>:
                        <IconButton onClick={()=>CreateBatch(itm?.training_batch_id)} style={{float:'right'}}>
                          <Iconify icon="material-symbols:add-circle-rounded" style={{fontSize:20,color:"	#0ad5ee"}}/>
                        </IconButton>}
                          
                        </Typography>
                       
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                      </>
                    )
                  })}
                
                  </Stack>
                </CardContent>
                 </Card>:null}
            


        </Container>
       
    )
}