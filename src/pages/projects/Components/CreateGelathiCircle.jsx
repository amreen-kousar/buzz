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
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateGelathiCircle({gelathiData,handleCloseGelathi,data1,circle}) {
  
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const [sendData,setSendData] = React.useState({
    "project_id":"",
    "circle_name": "",
    "circle_date": "",
    "gelathi_created_id": ""
  })

  console.log(gelathiData ,"clicket data")
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
console.log(data1?.project_id,"projectid")
gelathiData.forEach((itm) => {
  itm.isSelected="true"
});
//   const apiHit = () =>{
//     handleClose();
    
//     const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
//     var raw = JSON.stringify({
//         "project_id": data1?.data1?.project_id,
//         "circle_name": sendData?.circle_name,
//         "circle_date":moment(sendData?.circle_date)?.format('YYYY-MM-DD'),
//         "gelathi_created_id": userid,
//         "gelathi":JSON?.stringify(gelathiData),
       
//       })


//         var requestOptions = {
//             method: 'POST',
//             body: raw,
    
//           };
//           fetch("https://bdms.buzzwomen.org/appTest/createCircle.php", requestOptions)
//           .then(response => response.text())
//           .then(result =>{ handleClose();handleCloseGelathi();circle();})
//           .catch(error => console.log('error', error));

// console.log(circle,"rawdata")
//   }
// let gelathiinfo = JSON?.stringify(gelathiData)
console.log("🚀 ~ file: CreateGelathiCircle.jsx:28 ~ CreateGelathiCircle ~ data1:", data1)
const apiHit = () =>{
  const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
var data = JSON.stringify({
  "project_id": data1?.project_id,
  "circle_name":sendData?.circle_name,
  "circle_date": moment(sendData?.circle_date)?.format('YYYY-MM-DD'),
  "gelathi_created_id": userid,
  "gelathi":gelathiData
});
// let data = JSON?.stringify(gelathiData)
// parse(data)

var config = {
  method: 'post',
  url: 'https://bdms.buzzwomen.org/appTest/createCircle.php',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  handleClose();
  handleCloseGelathi();
  circle();
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}
  return (
    <div>
      {gelathiData.length<= 0 ?
       <Button  disabled variant="standard" onClick={()=>{
        
       }} sx={{color:'black'}}>
       Save 
      </Button> 
     :
   
     <Button variant="standard" onClick={()=>{open?apiHit(): handleClickOpen()}} sx={{color:'white'}}>
     Save 
    </Button>}
      
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
          <form onSubmit={(e)=>{e.preventDefault(); apiHit()}}>
        {/* <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}> */}
          <Toolbar  sx={{  bgcolor: '#ff7424' }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon sx={{color:'white'}}/>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1,color:'white' }} variant="h6" component="div" >
             New Gelathi Circle
           
            <Button autoFocus color="inherit" sx={{float:'right',color:'white'}} type="submit">
              save
            </Button> </Typography>
          </Toolbar>
        {/* </AppBar> */}
        <Card style={{marginTop:30}}>
          {console.log(data1?.data1,"projectname")}
            <CardContent>
            <Typography variant="subtitle1">Project: &nbsp;{data1?.project_name} </Typography>
            </CardContent>
        </Card>
        <CardContent>
        <Typography variant="subtitle1">Gelathi Circle details</Typography><br/>
            <TextField fullWidth id="name" required onChange={(e)=>{setSendData({ ...sendData,circle_name:e?.target?.value})}} label="Circle Name" variant="outlined" /><br/>
         <Stack mt={3}>
        <DatePicker
        required
          label="Date"
          defaultValue={sendData?.circle_date}
          onChange={(newValue) =>  setSendData({ ...sendData,circle_date:newValue})
        }
          renderInput={(params) => <TextField {...params} fullWidth />}
          value={sendData?.circle_date}

          />
</Stack>
<Stack mt={2}>
  {console.log(gelathiData,"gelathidataaaaaaaa")}
<Typography variant="subtitle1">Enrolled Gelathis:</Typography>
<Card mt={2}>
    <CardContent>
        {gelathiData?.map(itm=>{
            return(
                <Card style={{marginTop:20}}><CardContent><Typography variant="subtitle1">{itm?.gelathiname}</Typography>
                <Typography variant="subtitle1">{itm?.villagename}</Typography></CardContent></Card>
            )
        })}

    
    {/* <Typography variant="subtitle1">Kalshettahalli 2</Typography> */}

    </CardContent>
</Card>
</Stack>
            
       
        </CardContent>
        </form>

      </Dialog>
    </div>
  );
}