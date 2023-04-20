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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddParticipants from './AddParticipants'
import ParticipentDetailsDailoge from './ParticipentDetailsDailoge';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShaktiDialog({ shown, setShown, batch }) {
  // console.log(batch, '<--------shownshownshown')
  const [openFilter, setOpenFilter] = useState(false);
  const [clcikData, setClickData] = useState()
  console.log("🚀 ~ file: ShaktiDialog.jsx:35 ~ ShaktiDialog ~ clcikData:", clcikData)

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
              Self Shakti
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Add Participants
            </Button> */}
            <AddParticipants batch={batch} />

          </Toolbar>
        </AppBar>
        <Stack style={{ top: 40 }}>
          <Card sx={{mt:2,ml:2}}>
           
            <TableContainer component={Paper} sx={{width:'50vw'}}>
          <Table aria-label="customized table">
           
           <ParticipentDetailsDailoge/>
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
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
        </Stack>
        {batch?.all_participants?.map(itm => {
          return (
            <Stack style={{ top: 100 }}>
              <Card onClick={() => {
                handleOpenFilter()
                setClickData({ name: itm.gelathiname, title: "Enrolled  Name",id:itm?.participant_id})
                console.log("🚀 ~ file: ShaktiDialog.jsx:139 ~ ShaktiDialog ~ itm?.id:", itm?.id)
                
              }}>
                <CardContent >
                  <CardActions sx={{borderRadius:0}}>
                    <div  style={{width:'90vw',display:'flex',position:'relative',padding:'8px'}} >
                     
                      <Typography variant="subtitle2">{itm?.participant_name}</Typography>
                   <ShaktiForm/>
                    </div>
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