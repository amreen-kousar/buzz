import { useState, useEffect } from 'react';
import React from 'react'
import { Button, Card, CardActions, CardContent, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ParticipantDrawer from './ParticipantDrawer';
import ShaktiForm from './ShaktiForm';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddParticipants from './AddParticipants'
import ParticipentDetailsDailoge from './ParticipentDetailsDailoge';
import axios from 'axios';
import { CheckBox } from '@mui/icons-material';
import Iconify from 'src/components/Iconify';
import EditParticipantdata from './Editparticipantdata';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function ShaktiDialogday2({ shown, setShown, batch }) {
  console.log(batch, 'day2form is opShaktiDialogday2ening')
  const [openFilter, setOpenFilter] = useState(false);
  const [clcikData, setClickData] = useState()
  const [reload,setReload]=useState(false);
  const [participantdata,setParticipant]=useState();
  const [gelathiCount,setGelathicount]=useState(0);
  console.log("🚀 ~ file: ShaktiDialog.jsx:35 ~ ShaktiDialog ~ clcikData:", clcikData)

  const [checkData,setCheckData]=React.useState('');
  const handleOpenFilter = () => {
    setOpenFilter(true); 
   

  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
const [Add,setAdd]=React.useState(false);
const [editSession,setEditsession]=useState(false);
const [Trainingdata,setTrainingData]=useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    //setShown(shown)
    setOpen(shown);
    
   
  }, [shown])

  React.useEffect(() => {
    //setShown(shown)
getTrainingBatch();
    
   
  }, [open,editSession])

  const changeState = () => {
    setReload(!reload);
    console.log('changeState is called ');
  };
  const handleClickOpen = () => {
    setShown(true)
    setOpen(true);
  };

  const handleClose = () => {
    setShown(false)
    setOpen(false);
  };


  const addParticipant=(itm)=>{
    let data = JSON.stringify({
        "participant_day2": batch?.data?.day2,
        "participant_id": itm?.participant_id,
        "tb_id": batch?.data?.id ,
        "status": 1
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://bdms.buzzwomen.org/appTest/updateParticipantDay.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        alert(response.data.message)
        getTrainingBatch()
        setOpen(shown);
        console.log(JSON.stringify(response.data));
       
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

  

  const DeleteParticipant=(itm)=>{
    let data = JSON.stringify({
        "participant_day2": batch?.data?.day2,
        "participant_id": itm?.participant_id,
        "tb_id": batch?.data?.id ,
        "status": 0
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://bdms.buzzwomen.org/appTest/updateParticipantDay.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        alert(response.data.message)
        setOpen(shown);
        console.log(JSON.stringify(response.data));
        getTrainingBatch()
      
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

  const getTrainingBatch = async =>{
        
   
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
        "batch_id": batch?.data?.id,
        "role_id": role
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchData.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        setTrainingData(response.data)
        console.log(batch , "response from ")
      
        
      })
      .catch(function (error) {
        console.log(error);
      });
   
      
}
console.log(checkData,"checkedta")

const handleedit =()=>{
  alert('Participant Information Already Collected')
}

let c=0;

const countsuggestedgelathi=()=>{
  
  for (let i = 0; i < Trainingdata?.all_participants?.length; i++) {
   
   if(Trainingdata?.all_participants[i]?.gelathiRecomm==1)
   {
    console.log(Trainingdata?.all_participants[i],"iiiiii")
    c=c+1;
   }
   
  } 
  
}



countsuggestedgelathi();
console.log(c,"cvaluee")

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1,color:"white" }} variant="h6" component="div">
              Self Shakti 
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Add Participants
            </Button> */}
            {console.log(checkData,"addparticipants")}
            {/* <AddParticipants batch={batch} checkData={checkData}/> */}

          </Toolbar>
        </AppBar>
        <Stack style={{ top: 40 }}>
          <Card sx={{mt:2,ml:2}}>
           
            <TableContainer component={Paper} sx={{width:'50vw'}}>
          <Table aria-label="customized table">
           
           
            <TableBody>
              
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Project </TableCell><TableCell>:&nbsp;&nbsp;{batch?.data?.projectName}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Training&nbsp;Batch </TableCell><TableCell>:&nbsp;&nbsp;{batch?.data?.name}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Day 1</TableCell><TableCell>: &nbsp;&nbsp;{batch?.data?.day1}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Day 2</TableCell><TableCell>:&nbsp;&nbsp; {batch?.data?.day2}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Contact&nbsp;Person </TableCell><TableCell>: &nbsp;&nbsp;{batch?.data?.contact_person}</TableCell></TableRow>
          <TableRow><TableCell component="th" scope="row" sx={{fontWeight:700}}>Contact&nbsp;Number</TableCell><TableCell>: &nbsp;&nbsp;{batch?.data?.contact_number}</TableCell></TableRow>  </TableBody>
          </Table>
        </TableContainer>
              {/* <Typography variant="subtitle2" sx={{color:"black"}}> Project : {batch?.data?.projectName} </Typography>
              {console.log(batch?.data?.projectName, '<----------batch?.data?.projectName')}
              <Typography variant="subtitle2" sx={{color:"black"}}> Training Batch : {batch?.data?.name} </Typography>
              <Typography variant="subtitle2" sx={{color:"black"}}> Day 1 : {batch?.data?.day1}</Typography>
              <Typography variant="subtitle2" sx={{color:"black"}}> Day 2 : {batch?.data?.day2}</Typography>
              <Typography variant="subtitle2" sx={{color:"black"}}> Contact Person : {batch?.data?.contact_number}</Typography>
              <Typography variant="subtitle2" sx={{color:"black"}}> Contact Number : {batch?.data?.contact_person}</Typography> */}
          
          </Card>
        </Stack>
        {/* <Typography variant="subtitle1"> ALl Participants</Typography> */}
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ParticipantDrawer
        
            clcikData={clcikData}
            isOpenFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}
          <ParticipentDetailsDailoge
            clcikData={clcikData}
            isOpenFilter={openFilter}
            // onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
        </Stack>
        {!Trainingdata && batch?.all_participants?.map(itm => {
          return (
            <Stack style={{ top: 100 }}>
              <Card >
                <CardContent >
                  <CardActions sx={{borderRadius:0}}>
                    <div  style={{width:'90vw',display:'flex',position:'relative',padding:'8px'}} >
                     
                      <Typography variant="subtitle2" onClick={()=>{handleOpenFilter();
                      setClickData({ name: itm.gelathiname, title: "Enrolled  Name",id:itm?.participant_id})}
                      }>
                        
                        {itm?.participant_name}
                        </Typography>
                 
                    </div>
                    {console.log(clcikData,"clcikdataaaaaaaaaaaaa")}
                    {(itm?.day2=='0' )?<Checkbox onClick={()=>{
                      addParticipant(itm)
                      
                      console.log(itm,"<---sadasdasd")
                    }} {...label} />:<><Checkbox defaultChecked onClick={()=>{
                        DeleteParticipant(itm)
                        console.log(itm,"<---sadasdasd")
                      }} /><Iconify icon="material-symbols:edit" width={20} height={20}></Iconify></>}
                  </CardActions>

                  {console.log(itm, '<----------itm?.participant_name')}
                </CardContent>
              </Card>
            </Stack>

          )
        })}

{Trainingdata && Trainingdata?.all_participants?.map(itm => {
          return (
            <Stack style={{ top: 100 }}>
            
              <Card >
                <CardContent >
                  <CardActions sx={{borderRadius:0}}>
                    <div  style={{width:'90vw',display:'flex',position:'relative',padding:'8px'}} >
                     
                      <Typography variant="subtitle2" onClick={()=>{handleOpenFilter();
                      setClickData({ name: itm.gelathiname, title: "Enrolled  Name",id:itm?.participant_id})}
                      }>
                        {itm?.participant_name}
                        </Typography>
                       
                    </div>
                    {(itm?.gelathiRecomm=='1')?<IconButton><Iconify icon="mdi:tick-circle" style={{color:'green'}}></Iconify></IconButton>:null}
                    {(itm?.day2=='0' )?<Checkbox onClick={()=>{
                      addParticipant(itm)
                      
                      console.log(itm,"<---sadasdasd")
                    }} {...label} />:<><Checkbox defaultChecked onClick={()=>{
                        DeleteParticipant(itm)
                        console.log(itm,"<---sadasdasd")
                      }} /> 
                      {(itm?.final_save=='0')?<IconButton onClick={()=>{setEditsession(true);
                        setParticipant({id:itm?.participant_id})}} 
                        style={{right:-20}}><Iconify 
                         icon="material-symbols:edit"></Iconify></IconButton>:
                         <IconButton style={{right:-20,color:'#ff7424'}} onClick={handleedit}>
                          <Iconify icon="material-symbols:edit"></Iconify></IconButton>}</>}
                 
                     
                        <EditParticipantdata participantdata={participantdata} changeState={changeState} cvalue={c} Trainingdata={Trainingdata} editSession={editSession} setEditsession={(e)=>{setEditsession(e)}} />
                  
                  </CardActions>

                  {console.log(itm, '<----------itm?.participant_name')}
                </CardContent>
              </Card>
            </Stack>

          )
        })}

      </Dialog>
    </div>
  );
}