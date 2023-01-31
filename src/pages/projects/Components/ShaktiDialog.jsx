import { useState, useEffect } from 'react';
import React from 'react'
import {Button,Card,CardActions,CardContent,Stack} from '@mui/material';
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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({shown,setShown,batch}) {
  console.log(batch,'<--------shownshownshown')
  const [openFilter, setOpenFilter] = useState(false);
  const [clcikData, setClickData] = useState()

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };


  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
  //setShown(shown)
  setOpen(shown)
  },[shown])

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
        <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             Self Shakti
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
           
          </Toolbar>
        </AppBar>
        <Stack style={{top:40}}>
        <Card >
          <CardContent>
            <Typography  variant="subtitle2"> Project : {batch?.data?.projectName} </Typography>
            {console.log(batch?.data?.projectName,'<----------batch?.data?.projectName')}
            <Typography  variant="subtitle2"> Training Batch : {batch?.data?.name} </Typography>
            <Typography  variant="subtitle2"> Day 1 : {batch?.data?.day1}</Typography>
            <Typography  variant="subtitle2"> Day 2 : {batch?.data?.day2}</Typography>
            <Typography  variant="subtitle2"> Contact Person : {batch?.data?.contact_number}</Typography>
            <Typography  variant="subtitle2"> Contact Number : {batch?.data?.contact_person}</Typography>
          </CardContent>
        </Card>
        </Stack>
        {/* <Typography variant="subtitle1"> ALl Participants</Typography> */}
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <ParticipantDrawer
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                />
                </Stack>
        {batch?.all_participants?.map(itm=>{
  return(
    <Stack style={{top:100}}>
 <Card onClick={() => {
                        setClickData({ name: itm.gelathiname, title: "Enrolled  Name" })
                        handleOpenFilter()
                    }}>
          <CardContent>
            <CardActions>
            <Stack direction={'row'} spacing={10}>
          <Typography variant="subtitle2">{itm?.participant_name}</Typography>
           <ShaktiForm />
          </Stack>
            </CardActions>
         
           {console.log(itm?.participant_name,'<----------itm?.participant_name')}
          </CardContent>
        </Card>
    </Stack>
       
         )
        })}
       
      </Dialog>
    </div>
  );
}