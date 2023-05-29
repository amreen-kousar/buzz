import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";
import {Button,CardContent,Stack,Card, DialogContent, DialogContentText,CardActions} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import moment from 'moment';
import Iconify from 'src/components/Iconify';
import AddParticipants from './AddParticipants';
import { InsertEmoticon } from '@mui/icons-material';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  export default function AddGreenMotivators ({session}){
    const [open, setOpen] = React.useState(false);
    const [addValue,setAddValue]= useState([])
    const [sessiondata,setSessiondata]=useState('');
    const [reload , setReload] = useState(false)
  
    console.log("🚀 ~ file: AddGreenMotivators.jsx:29 ~ AddGreenMotivators ~ sessiondata:", sessiondata)
    const handleClickOpen = () => {
        setOpen(true);
        
      };
    
      const handleClose = () => {
        setOpen(false);
      };
var [checkboxOption, setCheboxOPtion]=useState([])
const setGreenmotivators=(itm)=>{
  // console.log("🚀 ~ file: AddGreenMotivators.jsx:47 ~ setGreenmotivators ~ checkboxOption.participant_id:", itm.participant_id == checkboxOption[1].participant_id ||itm.participant_id == checkboxOption[0].participant_id )
  console.log("🚀 ~ file: AddGreenMotivators.jsx:47 ~ setGreenmotivators ~ checkboxOption.participant_id:", itm.participant_id ,checkboxOption?.participant_id)
  if  (itm.participant_id == checkboxOption[1]?.participant_id ||itm.participant_id == checkboxOption[0]?.participant_id  ){
    var data = JSON.stringify({
      "id": itm?.participant_id,
      "gelathi_id": session?.user_id,
      "tb_id": session?.tb_id,
      "projectId": session?.projectId
    });
    
    // this.refs[itm.participant_id].checked = false;
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/setGreenMotivators.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert(response.data.message);
      getGreenMotivators();
      setCheboxOPtion(checkboxOption = checkboxOption.filter(item => item[participant_id] !== item.participant_id))
      console.log("🚀 ~ file: AddGreenMotivators.jsx:68 ~ setCheboxOPtion:", checkboxOption)
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
  else if (checkboxOption.length>=2){
    console.log("🚀 ~ file: AddGreenMotivators.jsx:43 ~ setGreenmotivators ~ checkboxOption.length:", checkboxOption.length)
    alert("max Selection is Two DisSelect one ")
    const checkbox = document.getElementById(itm.participant_id);
    checkbox.checked = false;
  }

else{
    var data = JSON.stringify({
        "id": itm?.participant_id,
        "gelathi_id": session?.user_id,
        "tb_id": session?.tb_id,
        "projectId": session?.projectId
      });
      
      // this.refs[itm.participant_id].checked = false;
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/new/setGreenMotivators.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(response.data.message);
        getGreenMotivators();
      })
      .catch(function (error) {
        console.log(error);
      });
      
}}

useEffect(()=>{
getGreenMotivators();
},[open])
  const getGreenMotivators=()=>{
    var data = JSON.stringify({
    "gf_session_id":session?.id
  })
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/getGreenMotivators.php',
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setSessiondata(response.data);
      if(response.data && response.data.all_participants && response.data.all_participants.length > 0){
        const all_participants = response.data.all_participants;
        const checkedOptions = all_participants.filter(x=> {
          return (x.GreenMotivators == 1)
        });
        setCheboxOPtion(checkedOptions)
        console.log(checkedOptions,'hloooo');
      }
      
 
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const styles = {
    buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left" }
  }
  const reloadFUnction =() =>{
    setReload(!reload)
  }

    return(
    <>
 <Stack style={{ flexDirection: 'row'}}  mb={2}>
      
      <Button variant="secondary" style={styles.buttonStyle}  onClick={handleClickOpen}
                  endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                  startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="ic:sharp-people" /></IconButton>}>
                  <span style={{ width: "200px" }}>Enrolled Green Motivators</span>
                </Button>
      </Stack>
     
    

      <Dialog fullScreen open={open} onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        {/* <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}> */}
        <Toolbar sx={{ bgcolor: '#ed6c02', color: 'white' }} >
          <IconButton edge="start" sx={{ color: "inherit" }} onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
            All Participants  
          </Typography>

<AddParticipants type='green' session={session} reloadFUnction={reloadFUnction}/>
          
        </Toolbar>
        {/* <Webcam
    ref={webcamRef}
    screenshotFormat="image/jpeg"odimeter:"",

    /> */}
        {/* </AppBar> */}
        <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            <div style={{ margin: "1rem" }}>
                <Card>
                    <CardContent>
                    <Typography style={{ flexDirection: 'row' }} variant="body1" gutterBottom>
                                       Project :
                                     &nbsp; {sessiondata?.projectName}
                                       {/* {console.log(batch?.data?.projectName,'<--------njknnjnjn')} */}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                       Partner : &nbsp;{sessiondata?.partnerName}
                                       {/* &nbsp;{batch?.data?.partnerName} */}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                    Gelathi Session : &nbsp; {sessiondata?.gf_session_name}
                                   </Typography>
                    </CardContent>
                    
                    
                </Card><br/><Typography style={{textAlign:'center'}} variant="h6"> All Participants  : &nbsp; {sessiondata?.total_participants}</Typography>
                <Card>
                    <CardContent>
                        
                    {sessiondata?.all_participants?.map((itm) => 
                    {

                return (
                
                //   <div>
                //   <Typography value={item?.participant_id}>{item?.participant_name}</Typography>
                //   </div>
                  <CardContent >
                  <CardActions sx={{borderRadius:0}}>
                    <div  style={{width:'90vw',display:'flex',position:'relative',padding:'8px'}} >
                     
                      <Typography variant="subtitle2">{itm?.participant_name}</Typography> &nbsp;&nbsp; {(itm?.gelathi_status!="")?<div style={{color:'#f75f66'}}>{itm?.gelathi_status}</div >:null} 
                      
                      </div>
                    {(itm?.GreenMotivators=='0')?<Checkbox 
                    id={itm.participant_id}
                    //  ref={itm.participant_id}
                    onClick={()=>{
                      setGreenmotivators(itm)
                      console.log(itm,"<---sadasdasd")
                    }} 
                    {...label}
                     />:<Checkbox id={itm.participant_id} 
                    //  ref={itm.participant_id} 
                     defaultChecked={true} onClick={()=>{setGreenmotivators(itm)}} style={{color:'pink'}}/>}
                     
                  </CardActions> 
                  </CardContent>
                );
              }) }
                    
                    </CardContent>
                </Card>
           
            </div>
            
          </DialogContentText></DialogContent>  </Dialog>
      </>
    )
  }