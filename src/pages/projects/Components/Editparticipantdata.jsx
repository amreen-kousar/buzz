import { useState, useEffect } from 'react';
import React from 'react'
import { Button, Card, CardActions, CardContent, Stack,TextField ,Radio, DialogContent, DialogContentText,FormControlLabel} from '@mui/material';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';
import moment from 'moment';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function EditParticipantdata({editSession, setEditsession,Trainingdata, changeState,itm,cvalue}) {
 console.log(itm,"itemmmm")
  const [openFilter, setOpenFilter] = useState(false);
  const [clcikData, setClickData] = useState()

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
 const [showDate , setShowDate] = useState(false)
  const [sendData, setSendData] = useState({
    occupation:"",
    husbandOccupation:"",
    wifeIncomeMonthly:"",
    typeOfEnterprise:"",
    saving_amt:"",
    gelathiRecomm: 0,
    saving_goal:"",
    wifeSavingsMonthly:"",
    income:"",
    bank_acc:""

  });
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = useState(new Date());
  const [occupationdata,setOccupationdata]=React.useState('');
  React.useEffect(() => {
    //setShown(shown)
    setOpen(editSession)
    Occupation();
  }, [editSession])

  const handleClickOpen = () => {
    setEditsession(true)
    setOpen(true);
  };

  const handleClose = () => {
    setEditsession(false)
    setOpen(false);
    changeState();
  };

const Occupation =()=>{
    var config = {
        method: 'get',
        url: 'https://bdms.buzzwomen.org/appTest/getOccupations.php',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setOccupationdata(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
}

const SendData = async => {

    var data = JSON.stringify({
        "income":sendData?.income, 
        "occupation":sendData?.occupation,
         "typeOfEnterprise":sendData?.typeOfEnterprise, 
         "participant_id":itm?.participant_id, 
         "final_save":1, 
         "husbandOccupation":sendData?.husbandOccupation,
         "wifeIncomeMonthly":sendData?.wifeIncomeMonthly, 
         "saving_goal":sendData?.saving_goal, 
         "bank_acc":sendData?.bank_acc, 
         "wifeSavingsMonthly":sendData?.wifeSavingsMonthly,
         "saving_amt":sendData?.saving_amt, 
         "participant_day2":Trainingdata?.data?.day2, 
         "gelathiRecomm":sendData?.gelathiRecomm, 
         "project_id":Trainingdata?.data?.project_id, 
         "tb_id":Trainingdata?.data?.id
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/editParticipant.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      
        handleClose()
        changeState();
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  return (
    <div>
        <Dialog fullScreen open={open} onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        {/* <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}> */}
        <Toolbar sx={{ bgcolor: '#ed6c02', color: 'white' }} >
          <IconButton edge="start" sx={{ color: "inherit" }} onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
           Update Participant Detail
          </Typography>

        
          <Button autoFocus color="inherit" onClick={() => SendData()}>
            save
          </Button>
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
            <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ed6c02', fontWeight: 700 ,marginTop:20}}>

                    {sendData?.occupation== "" ? "Select wife's occupation" : "Wife occupation"}</InputLabel>  <br/><br/>
                    <Select labelId="Select Wife's Occupation" id="demo-simple-select" value={sendData?.occupation} label="Wife Occupation" onChange={(e) => setSendData({ ...sendData, occupation: e?.target?.value })} variant="standard" color="common">
                    {occupationdata?.list?.map(itm => {
                      return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                    })}

                  
                  </Select>
                  </FormControl> 

                  <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label" style={{ flexDirection: 'row', color: '#ed6c02', fontWeight: 700 ,marginTop:30}}>

                    {sendData?.husbandOccupation== "" ? "Select Husband's occupation" : "Husband occupation"}</InputLabel>  <br/><br/><br/>
                    <Select labelId="Select Wife's Occupation" id="demo-simple-select" value={sendData?.husbandOccupation} label="Husband Occupation" onChange={(e) => setSendData({ ...sendData, husbandOccupation: e?.target?.value })} variant="standard" color="common">
                    {occupationdata?.list?.map(itm => {
                      return (<MenuItem value={itm?.id}>{itm?.name}</MenuItem>)
                    })}

                   
                  </Select>
                  </FormControl> 

                  <Stack style={{ marginTop: 20 }}>
                <TextField id="Monthly-income" onChange={(e) => { setSendData({ ...sendData,wifeIncomeMonthly : e?.target?.value }) }} label="Monthly Wife's income" variant="outlined" color="common"/>
              </Stack>

              <Stack style={{ marginTop: 20 }}>
                <TextField id="Monthly-savings" onChange={(e) => { setSendData({ ...sendData,wifeSavingsMonthly : e?.target?.value }) }} label="Monthly Wife's Savings" variant="outlined" color="common"/>
              </Stack>

              <Stack style={{ marginTop: 20 }}>
                <TextField id="goal" onChange={(e) => { setSendData({ ...sendData,saving_goal : e?.target?.value }) }} label="What is your goal" variant="outlined" color="common"/>
              </Stack>

              <Stack style={{ marginTop: 20 }}>
                <TextField id="Monthly family income" onChange={(e) => { setSendData({ ...sendData,income: e?.target?.value }) }} label="Monthly Family Income" variant="outlined" color="common"/>
              </Stack>

              <Stack style={{ marginTop: 20 }}>
                <TextField id="Monthly _family_savings" onChange={(e) => { setSendData({ ...sendData,saving_amt : e?.target?.value }) }} label="Monthly Family Savings" variant="outlined" color="common"/>
              </Stack>
              <Stack style={{ marginTop: 20 }}>
                <TextField id="type_of_enterprise" onChange={(e) => { setSendData({ ...sendData,typeOfEnterprise : e?.target?.value }) }} label="Type of Enterprise" variant="outlined" color="common"/>
              </Stack>

              <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Bank Account *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, bank_acc: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value={0} control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value={1} control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>

            {/* {(cvalue<1)? */}
            <Stack id="create-poa-stack" direction={'row'}>
                  <Typography id="all-day">Suggested Gelathi</Typography><br/>
                  <Switch id="switch-suggested-gelathi" value={sendData?.gelathiRecomm} 
                  onChange={(e) => {
                     setSendData({ ...sendData, gelathiRecomm: sendData?.gelathiRecomm === 1 ? 0 : 1 }) 
                  }}/>
                </Stack>
                {/* :null} */}

          </DialogContentText></DialogContent>  </Dialog>
    </div>
  );
}