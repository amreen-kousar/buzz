import * as React from 'react';
import Button from '@mui/material/Button';
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
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import axios from 'axios';
import Swal from "sweetalert2";

import { useState } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Checkinout({ photos, setCheck, batch }) {
  console.log("🚀 ~ file: CheckinCheckOutDialog.jsx:20 ~ FullScreenDialog ~ batch:", batch)

const [data ,setData]= useState()
const StatusCheching =async ()=>{
    let postData = {
        project_id:assestId
        // poa_type:

      }  
    await axios.post("https://bdms.buzzwomen.org/appTest/getCheckInOutStatus.php",postData).then((res) => {
      
          if (res.status === 200) {
            setData(res.data)
            Swal(res.data.Message, {
              buttons: false,
              timer: 3000,
            });
           
            
          } else if (res.status === 202) {
            Swal(res.data.Message, {
              timer: 3000,
            });
          } else {
            alert("Something went wrong...Server Error!!");
          }
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            Swal(error.response.data.Message, {
              icon: "warning",
              buttons: false,
              timer: 3000,
            });
          } else if (error.response.status === 400) {
            Swal(error.response.data.Message, {
              icon: "warning",
              buttons: false,
              timer: 3000,
            });
          } else {
            Swal(error.response.data.Message, {
              icon: "warning",
              buttons: false,
              timer: 3000,
            });
          }
        })
    }
    
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    //setShown(shown)
    setOpen(photos)
  }, [photos])

  const handleClickOpen = () => {
    setCheck(true)
    setOpen(true);
  };

  const handleClose = () => {
    setCheck(false)
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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Check in / CheckOut 
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}


          </Toolbar>
        </AppBar>
        <Card>
            <CardContent>
            <Typography><h4>Gelathi Session</h4></Typography><br/>
            {batch.gf_session_name}<br/>
            { moment(batch.plan_date)?.format('DD-MM-YYYY')}<br/>
            start &nbsp; { moment(batch.plan_date)?.format('HH:mm')}<br/>
            {(batch?.check_in ==="")? (
                    <Button
                      sx={{
                        '&:hover': {
                          backgroundColor: '#ffd796',
                        },
                        color: '#ff7424',
                      }}
                    //   onClick={handlecheckin}
                    >
                      CHECK IN 
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        '&:hover': {
                          backgroundColor: '#ffd796',
                        },
                        color: '#ff7424',
                      }}
                    //   onClick={handlecheckout}
                    >
                      CHECK OUT
                    </Button>
                  )}
            </CardContent>
            

        </Card>
        
      </Dialog>
    </div>
  );
}