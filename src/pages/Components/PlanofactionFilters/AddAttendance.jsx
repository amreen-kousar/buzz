import { useState, useEffect } from 'react';
import React from 'react'
import { Button, Card, CardActions, CardContent, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import baseUrl from 'src/utils/api'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddAttendance({ shown, setShown, batch }) {
  // console.log(batch, '<--------shownshownshown')
  const [openFilter, setOpenFilter] = useState(false);
  const [clcikData, setClickData] = useState()
  const [addValue,setAddValue]= useState([])
    console.log(batch,"<---asdsadasdasdasdasd")

  const addAttendance = (itm) =>{
    var data = 
    addValue?.includes(itm?.participant_id)?
    JSON.stringify({
      
      "PartcipantId": parseInt(itm?.participant_id),
      
      "Type": parseInt(batch.type)
    }):
    JSON.stringify({
      
      "PartcipantId": parseInt(itm?.participant_id),
      
      "Type": parseInt(batch.type)
    })
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appGo/allAttendence',
      
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {

      if( addValue?.includes(itm?.participant_id)){
        const filteredData = addValue?.filter(item=>item!==itm?.participant_id)
        setAddValue(filteredData)
      }
      else{
        setAddValue([...addValue,itm?.participant_id])
      }
      console.log(JSON.stringify(response.message,'<-----------------response.message'));
      alert(response.data.message)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    //setShown(shown)
    setOpen(shown)
  }, [shown])

  const handleClickOpen = () => {
    setShown(true)
    setOpen(true);
  };

  const handleClose = () => {
    setShown(false)
    setOpen(false);
  };

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
            Participants List
            </Typography>
            {/* <Button sx={{ color:"white" }}>Save</Button> */}
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Add Participants
            </Button> */}
            {/* <AddParticipants batch={batch} /> */}

          </Toolbar>
        </AppBar>
       
        {/* <Typography variant="subtitle1"> ALl Participants</Typography> */}
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ParticipantDrawer
        
            clcikData={clcikData}
            isOpenFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}
        </Stack>
        {batch?.all_participants?.map(itm => {
          return (
            <Stack style={{ top: 100 }}>
              <Card onClick={() => {
                handleOpenFilter()
                setClickData({ name: itm.gelathiname, title: "Enrolled  Name" })
                
              }}>
                <CardContent >
                  <CardActions sx={{borderRadius:0}}>
                    <div  style={{width:'90vw',display:'flex',position:'relative',padding:'8px'}} >
                     
                      <Typography variant="subtitle2">{itm?.participant_name}</Typography>
                  
                    </div>
                    <Checkbox onClick={()=>{
                      addAttendance(itm)
                      console.log(itm,"<---sadasdasd")
                    }} {...label} />
                  </CardActions>

                  {console.log(itm?.participant_name, '<----------itm?.participant_name')}
                </CardContent>
              </Card>
            </Stack>

          )
        })}

      </Dialog>
    </div>
  );
}



