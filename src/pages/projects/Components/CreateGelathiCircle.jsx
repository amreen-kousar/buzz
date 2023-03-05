import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import {CardContent,Card, Stack,TextField} from '@mui/material';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import moment from 'moment';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateGelathiCircle({gelathiData}) {
    console.log(gelathiData,"<----gelathiDatagelathiData")
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const [sendData,setSendData] = React.useState({
    "circle_name": "",
    "circle_date": "",
    "gelathi_created_id": ""
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const apiHit = () =>{
    var raw = JSON.stringify({
        "project_id": "281",
        "circle_name": sendData?.circle_name,
        "circle_date":moment(sendData?.circle_date)?.format('YYYY-MM-DD'),
        "gelathi_created_id": "465",
        "gelathi":JSON?.stringify(gelathiData)})

        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
          };
          fetch("https://bdms.buzzwomen.org/appTest/createCircle.php", requestOptions)
          .then(response => response.text())
          .then(result => handleClose())
          .catch(error => console.log('error', error));


  }

  return (
    <div>
      <Button variant="outlined" onClick={()=>{open?apiHit(): handleClickOpen()}}>
       Save
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
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
             New Gelathi Circle
            </Typography>
            <Button autoFocus color="inherit" onClick={apiHit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Card style={{marginTop:83}}>
            <CardContent>
            <Typography variant="subtitle1">Project:</Typography>
            </CardContent>
        </Card>
        <CardContent>
            
            <TextField fullWidth id="name" onChange={(e)=>{setSendData({ ...sendData,circle_name:e?.target?.value})}} label="Circle Name" variant="outlined" />
         <Stack mt={3}>
        <DatePicker
          label="Controlled picker"
          value={sendData?.circle_date}
          onChange={(newValue) =>  setSendData({ ...sendData,circle_date:newValue})
        }
          renderInput={(params) => <TextField {...params} fullWidth />}
          
          />
</Stack>
<Stack mt={3}>
<Typography variant="subtitle1">Enrolled Gelathis:</Typography>
<Card mt={2}>
    <CardContent>
        {gelathiData?.map(itm=>{
            return(
                <Typography variant="subtitle1">{itm?.gelathiname}</Typography>
            )
        })}

    
    {/* <Typography variant="subtitle1">Kalshettahalli 2</Typography> */}

    </CardContent>
</Card>
</Stack>
            
       
        </CardContent>
       

      </Dialog>
    </div>
  );
}