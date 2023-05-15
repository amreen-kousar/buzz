import React from "react";
import { Typography,Card,CardContent, IconButton, Stack, Select,MenuItem} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from "@mui/system";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";
import { vi } from "date-fns/locale";

export default function AssignBatches(){
   
    const state = useLocation();
    const [gelathi, setGelathi] = useState('');
    const [gl,setGl] = useState(false);
    const [data1, setData1] = useState('')
    const [villages, setVillages] = useState('');
    const [batch,setBatch] = useState('');
    const [tc, setTc] = useState('');
    var [alloted,setAlloted]=useState(0)
    console.log("🚀 ~ file: AssignBatches.jsx:30 ~ AssignBatches ~ alloted:", alloted)
    const [item,setItem]=useState('')
   const [selected,setSelected]=useState([])

   const id = sessionStorage?.getItem("proId")
useEffect(() => {
  projData();

}, [])

const projData = async => {
  console.log(location, "location props")
  var userDetails = JSON.parse(localStorage?.getItem('userDetails'))
  var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
  var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
  var data = JSON.stringify({
    "project_id": id,
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
  // useEffect(() => {
  //   gelathinamelist(35)
   
  // }, []
  // )
//   const gelathinamelist= async() =>{
   
//     var data = JSON.stringify({
//         "project_id":234,
//         "role_id":13  , 
//         "operation_manager_id":35,
//         "pageNum": 1
//       });
      
//       var config = {
//         method: 'post',
//         url: 'https://bdms.buzzwomen.org/appTest/getPeopleList.php',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
//       axios(config)
//       .then(function (response) {
//         setGelathi(response?.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
      
// }

const villagelist= async(itm) =>{
  console.log(itm,"itemassignedddddddddddd")
  setGl(true)
  setItem(itm)
  var data = JSON.stringify({
    "project_id":data1?.project_id, 
    "emp_id":itm?.emp_id,
    
  
    });

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
      setAlloted(response?.data?.checked_count)
      setTc(response?.data?.list.length)
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
}


console.log(item,"hyyyy")

const CreateBatch= async(itm,i) =>{
  
  const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
  selected.push(itm?.training_batch_id)
  setSelected(selected)
  console.log(itm,"createbatchhhhhh")
  var data = JSON.stringify({
     
     "project_id":data1?.project_id, 
     "training_batch_id":itm?.training_batch_id,
      "emp_id":item?.emp_id
    });
    villages.list[i].flag = 1;
    setVillages(villages)
    // console.log(villages.list[i], "villagelist");
    setAlloted(alloted?alloted+1:1)
    // await new Promise((resolve) => {
    //   setAlloted((alloted) => {
    //     const newAlloted = parseInt(alloted) +1 || alloted.length > 0;
    //     resolve(newAlloted);
    //     return newAlloted;
    //   }); 
    // });
    
    
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

// const removeFlag=(itm,i)=>{

//   console.log(itm,"villagessssssssss")
//   villages.list[i].flag=0;
//   console.log(villages.list[i],"villagelist")
//   if(alloted.length==0){
//     setAlloted(alloted=>parseInt(alloted)+1 ) 
//   }else{

//     setAlloted(alloted=>parseInt(alloted)-1 || alloted.length> 0 ) 
//   }
     
// }
const removeFlag = async (itm, i) => {
  console.log(i, "villagessssssssss");
  // villages.list[i].flag = 0;
  // setVillages(villages)
  // console.log(villages.list[i], "villagelist");
  // setAlloted(alloted?alloted-1:0)

  var data = JSON.stringify({
     
    "project_id":data1?.project_id, 
    "training_batch_id":itm?.training_batch_id,
     "emp_id":item?.emp_id
   });
   villages.list[i].flag = 0;
   setVillages(villages)
   console.log(villages.list[i], "villagelist");
   setAlloted(alloted?alloted-1:0)
   
   
 {console.log(alloted,"countttttttt")}
   var config = {
     method: 'post',
     url: 'https://bdms.buzzwomen.org/appTest/deleteGFBatch.php',
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
   
};

console.log(alloted,"allottedddddddddddddddddd",villages?.list)
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
          
        
        {(data1?.gelathiFacilitator?.length>0)?<Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Select Gelathi Facilitator </Typography>
                  <Stack mt={2} mb={2}>
                  {/* {data.state == "" && "Select "} */}
              <Select color="common" label="Gelathi Facilitator" variant="standard">
             
                  {data1?.gelathiFacilitator?.map((itm)=>{
                  
                    return(
                            <MenuItem onClick={()=>{villagelist(itm)}} value={itm?.emp_id}>{itm?.name}</MenuItem>
                            
                    )
                    
                  })}
                </Select>
                  </Stack>
                </CardContent>
          </Card>:<h3 style={{textAlign:'center'}}>No Gelathi facilitators</h3>}<br/>

          
       
                     {(gl)?<Typography gutterBottom style={{textAlign:'center'}}>
                     Total Villages: {alloted}/{tc}
                     {console.log(alloted,"alloteddddddddd")}
                     </Typography>:null}
                
                 {(gl)?<Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                 
                  <Stack mt={2} mb={2}>
             
             
                  {villages?.list?.map((itm,i)=>{
                  
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
                        {/* (selected.includes(itm?.training_batch_id)) ||  */}
                        
                    {
                    
                    
                    
                    (['1',1].includes(villages?.list[i]?.flag))?<IconButton  style={{float:'right'}} onClick={()=>removeFlag(itm,i)}>
                         {console.log(villages.list[i]?.flag,"flag value now")}

                          <Iconify icon="typcn:tick" style={{fontSize:20,color:"green"}}/>
                        </IconButton>:
                        (['0',0].includes(villages.list[i]?.flag))?<IconButton onClick={()=>CreateBatch(itm,i)} style={{float:'right'}}>
                          <Iconify icon="material-symbols:add-circle-rounded" style={{fontSize:20,color:"	#0ad5ee"}}/>
                        </IconButton>:console.log(itm?.flag,"itemmmm flaaggg")}
                          
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