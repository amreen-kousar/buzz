import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";
import {Button,CardContent,Stack,Card, DialogContent, DialogContentText,CardActions, Radio, RadioGroup, FormControlLabel} from '@mui/material';
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
import { CheckBox , ScaleOutlined } from '@mui/icons-material';
import { size, transform } from 'lodash';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  console.log("🚀 ~ file: AddEnrolledGelathi.jsx:25 ~ label:", label)
  export default function AddEnrollGelathi ({session}){
    console.log("🚀 ~ file: AddEnrolledGelathi.jsx:27 ~ session:", session)
    const [open, setOpen] = React.useState(false);
    const [addValue,setAddValue]= useState([])
    const [sessiondata,setSessiondata]=useState();
    const handleClickOpen = () => {
        setOpen(true);
        
      };
    
      const handleClose = () => {
        setOpen(false);
      };

  const addGelathi=(itm)=>{
    var data = JSON.stringify({
        "id": itm?.participant_id,
        "gelathi_id":session?.user_id,
        "tb_id": session?.tb_id,
        "projectId": session?.project_id,
        
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/setEnrollGelathi.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
          setSessiondata(response.data)
          console.log(JSON.stringify(response.message,'<-----------------response.message'));
          getGfsessiondata();
          alert(response.data.message)
          
        
      })
      .catch(function (error) {
        console.log(error);
        alert(response.data.message)
      });
  }

  const getGfsessiondata=()=>{
    var data = JSON.stringify({
        "gf_session_id": session?.id
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getGFSessionData.php',
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

  const styles = {
    buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left" },
   
    label: {
      cursor: 'pointer',
      
    },
    input: {
      accentColor: 'pink',  
      backgroundColor:'red', 
       width: '25px',
      height: '25px',
      borderRadius:'10%',
      borderColor:'pink',
    },
    specifyColor : {
      accentColor: 'pink',
      
  }
  }

    return(
    <>
  
     
     <Stack style={{ flexDirection: 'row'}}  mb={2}>
      
      <Button variant="secondary" style={styles.buttonStyle}  onClick={handleClickOpen}
                  endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                  startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="ic:sharp-people" /></IconButton>}>
                  <span style={{ width: "200px" }}>Enrolled Gelathis</span>
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
            Enrolled Gelathis
          </Typography>


          
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
                                     &nbsp; {session?.projectName}
                                       {/* {console.log(batch?.data?.projectName,'<--------njknnjnjn')} */}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                       Partner : &nbsp;{session?.partnerName}
                                       {/* &nbsp;{batch?.data?.partnerName} */}
                                   </Typography>
                                   <Typography variant="body1" gutterBottom>
                                    Gelathi Session : &nbsp; {session?.gf_session_name}
                                   </Typography>
                    </CardContent>
                    
                    
                </Card><br/><Typography style={{textAlign:'center'}} variant="h6"> All Participants : &nbsp; {session?.total_participants}</Typography>
                <Card>
                    <CardContent>
                        
                    {session?.all_participants?.map((itm) => 
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

                    {/* {(itm?.enroll=='0')?                      
                    <RadioGroup 
                     
                     aria-labelledby="demo-radio-buttons-group-label"
                     
                     name='def'
                   >
                     <FormControlLabel control={<Radio  name='b'
                    onClick={()=>{
                      addGelathi(itm)
                      console.log(itm,"<---sadasdasd")
                    }} 
                    {...label}
                     />}/></RadioGroup>:        <RadioGroup 
                     
                     aria-labelledby="demo-radio-buttons-group-label"
                     
                     name='abc'
                   ><FormControlLabel name='a' control={<Radio  onClick={()=>{addGelathi(itm)}} style={{color:'pink'}}/>}/>
                     </RadioGroup>
                     } */}
                     {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name='abc'>
                      <FormControlLabel value={{...label}} name='a' control={<Radio  onClick={()=>{addGelathi(itm)}} style={{color:'pink'}}/>}/>
                     </RadioGroup> */}

                     {/* <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value={{...label}} control={<Radio />}  />
    {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
  {/* </RadioGroup> */} 
  {(itm?.enroll=='0')?  <input type="radio" style={styles.input}  name="asd" onClick={() => {addGelathi(itm)}}  id="specifyColor"  value={{...label}}></input>: <input type="radio"  id="specifyColor"
   style={styles.input} defaultChecked={true}  name="asd" onClick={() => {addGelathi(itm)}} value={{...label}}></input>}

                  </CardActions>  
                  </CardContent>
                );
              })}
                    
                    </CardContent>
                </Card>
           
            </div>
            
          </DialogContentText></DialogContent>  </Dialog>
          </>
    )
  }