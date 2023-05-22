import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Button,
    Grid,
    Stack,
    TextField,
    Select,
    Radio,
    InputLabel,
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Card,
    Box,
    FormControl,
    CardContent,Icon,RadioGroup
  } from '@mui/material';
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
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogForm({ shown, setShown, batch }) {
    const [openFilter, setOpenFilter] = useState(false);
    const [clcikData, setClickData] = useState()

    const handleOpenFilter = () => {
      setOpenFilter(true);
    };
  
    const handleCloseFilter = () => {
      setOpenFilter(false);
    };
  
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
    console.log("🚀 ~ file: DialogForm.jsx:50 ~ DialogForm ~ role:", role)
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
    const handleClickOpendilog = () => {
        setOpen(true);
      };
      
  const [sendData,setSendData]=useState('');
  const [age, setAge] = React.useState('');
  const [states, setStates] = useState([])
  const [district, setDistrict] = useState([])
  const [taluk, setTaluk] = useState([])
  const [gfName,setGFName]=useState([])
  console.log("🚀 ~ file: DialogForm.jsx:76 ~ DialogForm ~ gfName:", gfName)
  const [data, setData] = useState({
    country: 1,
    state: '',
    district_id: '',
    talaq_id: ''
  })
  
  // const handleClose = () => {
  //   alert("form saved sucessfully");
  //   console.log("form saved sucessfully");
  //   setOpen(false);
  // };
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  
 
  useEffect(() => {
    // console.log("use effect-----");
    getGFname()
    getDistrict()
    
  }, []
  )

  const handlecheckedata =()=>{

  };
 
  const getDistrict = async (id) => {
    
    var data = JSON.stringify({
      "country_id": "1",
      "state_id": 3,
     // "district_id": id

    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setDistrict(response.data.list)
        // console.log(response.data,"<------------------setTaluksetTaluk");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const getGFname = async (id) => {
    
    var data = JSON.stringify({
      // "country_id": "1",
      // "state_id": 3,
     // "district_id": id
     "role_id":6,

    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getGelathiList.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setGFName(response.data.list)
        // console.log(response.data,"<------------------setTaluksetTaluk");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  const getTaluk = async (id) => {
    
    var data = JSON.stringify({
      "country_id": "1",
      "state_id": 3,
      "district_id": id

    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setTaluk(response.data.list)
        console.log(response.data,"<------------------setTaluksetTaluk");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 

const [apiData, setApiData] = useState({})
  const [sendForm, setSendForm]  = useState ({
    Program_assessment:"",
    Name_of_the_district:"",
   Name_of_the_village_and_the_venue_of_meeting_or_training: "",
  //  Name_of_the_district: " ",
Name_of_the_taluk:" ",
Name_of_the_village_and_the_venue_of_meeting_or_training:" ",
Day1_or_day2: " ",
Name_of_the_trainer_being_evaluated: " ",
Check_which_ones_the_trainer_did_not_do:" ",
How_many_women_attended_the_training_session: " ",
Were_the_women_interactive: " ",
Did_any_women_leave_the_session_during_or_after_the_first_module: " ",
If_so_how_many: " ",
Did_this_module_take_20_minutes_as_allotted: " ",
Did_any_new_women_attend_the_training_session_during_this_module: " ",
During_the_debrief_the_trainer_did: " ",
During_the_debriefs_for_role_plays_the_trainer_did_not_ask: " ",
Did_the_trainer_leave_the_women_to_read_role_play_card: " ",
Did_the_groups_engage_and_interact_among_themselves_well:" ",
Were_the_participants_responsive_during_the_debriefing: " ",
Did_this_module_take_30_minutes_as_allotted: " ",
How_many_women_remained_by_the_end_of_this_training_session: " ",
How_many_are_likely_to_come_back: " ",
Was_the_recap_done: " ",
Did_the_recap_take_15_minutes_as_allotted: " ",
During_the_debrief_did_the_trainer_did_not_do_the_following: " ",
Check_which_instructions_the_trainer_did_not_do: " ",
Repeat_the_activity_with_the_second_volunteer: " ",
During_the_debrief_did_the_trainer_not_ask: " ",
The_trainer_did_not_ask:" ",
What_did_the_trainer_not_do:" ",
Name_of_the_gf:" ",
No_of_participants_at_the_start_of_the_session:" ",
Assessment_of:" ",
The_gf_competently_carried_out_the_following_functions: " ",
The_gf_carried_out_the_functions_before_the_training_started: " ",
How_many_stories_of_success_or_change_emerged_from_the_recap: " ",
Mention_name_of_the_gelathis_with_success_stories: " ",
Check_which_ones_the_gelathi_facilitator_did_not_do: " ",
Number_of_enrolled_gelathis_in_the_circle: " ",
No_of_attended_gelathis: " ",
Level_of_participation: " ",
The_gf_covered_the_following_things_in_the_training: " ",
Rate_the_gelathi_facilitator:" ",
What_worked_in_the_training:" ",
What_can_be_better_next_time:" ",
Any_further_training_required_by_the_gf_of_modules_delivered: " ",
Anything_in_the_training_or_gf_needs_to_be_worked_on_priority: " ",
Details_of_success_stories_to_be_collected_from_gelathis_by_gf: " ",
Deadline_to_collect_the_stories: " ",
End_time_of_the_training: " ",
No_of_participants_at_end_of_the_session: " ",
Any_other_comments_about_the_gelathi_facilitator: " ",
Check_which_ones_the_gelathi_did_not_do: " ",   
During_the_debrief_did_the_gelathi: " ",
During_the_debriefs_for_role_plays_the_gelathi_did_not_ask: " ",
Check_which_instructions_the_gelathi_did_not_do: " ",
Did_the_debrief_done_by_gelathi: " ",
The_gelathi_did_not_ask:" ",
During_the_debrief_did_the_gelathi_not_ask:" "

   
    
    
  })

  const apiFormHit = async => {
    // const axios = require('axios');
let data = JSON.stringify({
    "Email":sendForm?.Email,
    "Name_of_the_district":sendForm?.Name_of_the_district,
  "Name_of_the_taluk":sendForm?.Name_of_the_taluk,
  "Name_of_the_village_and_the_venue_of_meeting_or_training":sendForm?.Name_of_the_village_and_the_venue_of_meeting_or_training,
  "Day1_or_day2":sendForm?.Day1_or_day2,
  "Name_of_the_trainer_being_evaluated":sendForm?.Name_of_the_trainer_being_evaluated,
  "Check_which_ones_the_trainer_did_not_do":sendForm?.Check_which_ones_the_trainer_did_not_do,
  "How_many_women_attended_the_training_session":sendForm?.How_many_women_attended_the_training_session,
  "Were_the_women_interactive":sendForm?.Were_the_women_interactive,
  "Did_any_women_leave_the_session_during_or_after_the_first_module":sendForm?.Did_any_women_leave_the_session_during_or_after_the_first_module,
  "If_so_how_many":sendForm?.If_so_how_many,
  "Did_this_module_take_20_minutes_as_allotted":sendForm?.Did_this_module_take_20_minutes_as_allotted,
  "Did_any_new_women_attend_the_training_session_during_this_module":sendForm?.Did_any_new_women_attend_the_training_session_during_this_module,
  "During_the_debrief_the_trainer_did":sendForm?.During_the_debrief_the_trainer_did,
  "During_the_debriefs_for_role_plays_the_trainer_did_not_ask":sendForm?.During_the_debriefs_for_role_plays_the_trainer_did_not_ask,
  "Did_the_trainer_leave_the_women_to_read_role_play_card":sendForm?.Did_the_trainer_leave_the_women_to_read_role_play_card,
  "Did_the_groups_engage_and_interact_among_themselves_well":sendForm?.Did_the_groups_engage_and_interact_among_themselves_well,
  "Were_the_participants_responsive_during_the_debriefing":sendForm?.Were_the_participants_responsive_during_the_debriefing,
  "Did_this_module_take_30_minutes_as_allotted":sendForm?.Did_this_module_take_30_minutes_as_allotted,
  "How_many_women_remained_by_the_end_of_this_training_session":sendForm?.How_many_women_remained_by_the_end_of_this_training_session,
  "How_many_are_likely_to_come_back":sendForm?.How_many_are_likely_to_come_back,
  "Was_the_recap_done":sendForm?.Was_the_recap_done,
  "Did_the_recap_take_15_minutes_as_allotted":sendForm?.Did_the_recap_take_15_minutes_as_allotted,
  "During_the_debrief_did_the_trainer_did_not_do_the_following":sendForm?.During_the_debrief_did_the_trainer_did_not_do_the_following,
  "Check_which_instructions_the_trainer_did_not_do":sendForm?.Check_which_instructions_the_trainer_did_not_do,
  "Repeat_the_activity_with_the_second_volunteer":sendForm?.Repeat_the_activity_with_the_second_volunteer,
  "During_the_debrief_did_the_trainer_not_ask":sendForm?.During_the_debrief_did_the_trainer_not_ask,
  "The_trainer_did_not_ask":sendForm?.The_trainer_did_not_ask,
  "What_did_the_trainer_not_do":sendForm?.What_did_the_trainer_not_do,
  "Name_of_the_gf":sendForm?.Name_of_the_gf,
  "No_of_participants_at_the_start_of_the_session":sendForm?.No_of_participants_at_the_start_of_the_session,
  "Assessment_of":sendForm?.Assessment_of,
  "The_gf_competently_carried_out_the_following_functions":sendForm?.The_gf_competently_carried_out_the_following_functions,
  "The_gf_carried_out_the_functions_before_the_training_started":sendForm?.The_gf_carried_out_the_functions_before_the_training_started,
  "How_many_stories_of_success_or_change_emerged_from_the_recap":sendForm?.How_many_stories_of_success_or_change_emerged_from_the_recap,
  "Mention_name_of_the_gelathis_with_success_stories":sendForm?.Mention_name_of_the_gelathis_with_success_stories,
  "Check_which_ones_the_gelathi_facilitator_did_not_do":sendForm?.Check_which_ones_the_gelathi_facilitator_did_not_do,
  "Number_of_enrolled_gelathis_in_the_circle":sendForm?.Number_of_enrolled_gelathis_in_the_circle,
  "No_of_attended_gelathis":sendForm?.No_of_attended_gelathis,
  "Level_of_participation":sendForm?.Level_of_participation,
  "The_gf_covered_the_following_things_in_the_training":sendForm?.The_gf_covered_the_following_things_in_the_training,
  "Rate_the_gelathi_facilitator":sendForm?.Rate_the_gelathi_facilitator,
  "What_worked_in_the_training":sendForm?.What_worked_in_the_training,
  "What_can_be_better_next_time":sendForm?.What_can_be_better_next_time,
  "Any_further_training_required_by_the_gf_of_modules_delivered":sendForm?.Any_further_training_required_by_the_gf_of_modules_delivered,
  "Anything_in_the_training_or_gf_needs_to_be_worked_on_priority":sendForm?.Anything_in_the_training_or_gf_needs_to_be_worked_on_priority,
  "Details_of_success_stories_to_be_collected_from_gelathis_by_gf":sendForm?.Details_of_success_stories_to_be_collected_from_gelathis_by_gf,
  "Deadline_to_collect_the_stories":sendForm?.Deadline_to_collect_the_stories,
  "End_time_of_the_training":sendForm?.End_time_of_the_training,
  "No_of_participants_at_end_of_the_session":sendForm?.No_of_participants_at_end_of_the_session,
  "Any_other_comments_about_the_gelathi_facilitator":sendForm?.Any_other_comments_about_the_gelathi_facilitator,
  "Check_which_ones_the_gelathi_did_not_do":sendForm?.Check_which_ones_the_gelathi_did_not_do,
  "During_the_debrief_did_the_gelathi":sendForm?.During_the_debrief_did_the_gelathi,
  "During_the_debriefs_for_role_plays_the_gelathi_did_not_ask":sendForm?.During_the_debriefs_for_role_plays_the_gelathi_did_not_ask,
  "Check_which_instructions_the_gelathi_did_not_do":sendForm?.Check_which_instructions_the_gelathi_did_not_do,
  "Did_the_debrief_done_by_gelathi":sendForm?.Did_the_debrief_done_by_gelathi,
  "The_gelathi_did_not_ask":sendForm?.The_gelathi_did_not_ask,
  "During_the_debrief_did_the_gelathi_not_ask":sendForm?.During_the_debrief_did_the_gelathi_not_ask,
  
  });
console.log("🚀 ~ file: DialogForm.jsx:292 ~ apiFormHit ~ data:", data)

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bdms.buzzwomen.org/appGo/addQualityAssessmentForm ',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
 setApiData(response.data)
 
  console.log(JSON.stringify(response.data),'<-----------------------question tag------------------>')
})
.catch((error) => {
  console.log(error);
});
  }
  return (
    <>
        <Button variant="contained" style={{
        float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
        position: 'fixed', zIndex: '1', bottom: 40, right: 40
      }} onClick={handleClickOpendilog} sx={{
        ':hover': {
          bgcolor: '#ffd796', // theme.palette.primary.main
          color: '#ff7424',
          border: '#ffd796'
        },
        ':active': {
          bgcolor: '#ffd796',
          color: "#ff7424"
        },
        bgcolor: '#ffd796',
        color: "#ff7424",
        border: 'none'
      }} >
        <span style={{ fontSize: "2rem" }}>+</span>
      </Button>
      <Button  onClick={handleClickOpen}>
       
      </Button>
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
            <Typography sx={{ ml: 2, flex: 1, color:"white"  }} variant="h6" component="div">
              Self Shakti Training program Form
            </Typography>
            <Button autoFocus color="inherit" onClick={apiFormHit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
  
        


    {/* 1 */}
    <Grid style={{backgroundColor:"#FFD580", marginTop: "60px"}}>
            <Typography>PAGE 1</Typography>

       
        
        <Card sx={{mt:4, margin:"20px"}}>
        <CardContent>
            <Typography>Email</Typography>
            <Stack mt={2} mb={2}>
                    {/* <TextField required label="Your Answer" variant="outlined" color="common" /> */}
                   <TextField type='email' required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendForm({ ...sendForm, Email:e.target.value})} value={sendForm?.Email}   
/>
                </Stack> 
                </CardContent>
        </Card>
        
     
     <Card sx={{mt:2, margin:"20px"}} >
        <CardContent>
            <Typography>Name of the Assessor
       </Typography>
            <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack> 
        </CardContent>
     </Card>

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack>
                <Typography variant="body2"> Date of the evaluation of the training/meeting</Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                  >
                    <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Strongly Agree">Strongly Agree</MenuItem>
                    <MenuItem value="Agree">Agree</MenuItem>
                    <MenuItem value="Disagree">Disagree</MenuItem>
                    <MenuItem value="Strongly Disagree">Strongly Disagree</MenuItem>
                  </Select>
                </Stack>
              </Stack>
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                   Program Assessment
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Self Shakti Training Program"  control={<Radio />} label="Self Shakti Training Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Gelathi Program" control={<Radio />} label="Gelathi Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Self Shakti by Gelathi" control={<Radio />} label="Self Shakti by Gelathi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Green Program" control={<Radio />} label="Green Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Vyapar Program" control={<Radio />} label="Vyapar Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        {/* <Stack mt={2}>
                <Typography>
                   Name of the District /ಜಿಲ್ಲೆಯ ಹೆಸರು
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Tumkur"  control={<Checkbox />} label="Tumkur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Bangalore Urban" control={<Checkbox />} label="Banagalore Urban" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Bangalore Rural" control={<Checkbox />} label="Bangalore Rural" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kolar" control={<Checkbox />} label="Kolar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chikaballapur" control={<Checkbox />} label="Chikaballapur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chitradurga"  control={<Checkbox />} label="Chitradurga" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Hassan" control={<Checkbox />} label="Hassan" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ramanagara" control={<Checkbox />} label="Ramanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mandaya" control={<Checkbox />} label="Mandaya" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chamrajanagara" control={<Checkbox />} label="Charajanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack> */}


<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Name of the District</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Tumkur</MenuItem>
          <MenuItem value={20}>Bangalore Urban</MenuItem>
          <MenuItem value={30}>Kolar</MenuItem>
          <MenuItem value={40}>Chikkaballapur</MenuItem>
          <MenuItem value={50}>Chitradurga</MenuItem>
          <MenuItem value={60}>Hassan</MenuItem>


        </Select>
      </FormControl>
    </Box>




        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                   Name of the Taluk/ತಾಲ್ಲೂಕಿನ ಹೆಸರು
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Tumkur"  control={<Checkbox />} label="Tumkur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Bangalore Urban" control={<Checkbox />} label="Banagalore Urban" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Bangalore Rural" control={<Checkbox />} label="Bangalore Rural" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kolar" control={<Checkbox />} label="Kolar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chikaballapur" control={<Checkbox />} label="Chikaballapur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chitradurga"  control={<Checkbox />} label="Chitradurga" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Hassan" control={<Checkbox />} label="Hassan" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ramanagara" control={<Checkbox />} label="Ramanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mandaya" control={<Checkbox />} label="Mandaya" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chamrajanagara" control={<Checkbox />} label="Charajanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack>
                <Typography variant="body2">Name of the village and the venue of meeting/training/ಗ್ರಾಮದ ಹೆಸರು ಮತ್ತು ಸಭೆ / ತರಬೇತಿಯ ಸ್ಥಳ</Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>  
              </Stack>
       
        </CardContent>
     </Card>
     


        </Grid>
        <br/>
        
         {/* 2 */}
       <Grid  backgroundColor={"#FFD580"}>
          page-2
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Gelathi program</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Name of the Gelathi Facilitator
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Radio  />} label="Sangeetha S" />
            <FormControlLabel control={<Radio  />} label="Swarna. N" />
              <FormControlLabel control={<Radio  />} label="Mamatha N" />
              <FormControlLabel control={<Radio  />} label="Nagalatha J" />
              <FormControlLabel control={<Radio  />} label="Preeti Sandeep Naik" />
              <FormControlLabel control={<Radio  />} label="Gayathri.M" />
              <FormControlLabel control={<Radio  />} label="Anitha. N" />
              <FormControlLabel control={<Radio  />} label="Shobha.M.R" />
              <FormControlLabel control={<Radio  />} label="Nethravathi G" />
              <FormControlLabel control={<Radio  />} label="Deepa B.R" />
              <FormControlLabel control={<Radio  />} label="Anitha" />
              <FormControlLabel control={<Radio  />} label="Nagaveni.N" />
              <FormControlLabel control={<Radio  />} label="Sridevi" />
              <FormControlLabel control={<Radio  />} label="Megha B" />
              <FormControlLabel control={<Radio  />} label="Kalpana P.S." />
              <FormControlLabel control={<Radio  />} label="Sudha D" />
              <FormControlLabel control={<Radio  />} label="Mamatha K" />
              <FormControlLabel control={<Radio  />} label="Pavithra. R" />
              <FormControlLabel control={<Radio  />} label="Maya R" />
              <FormControlLabel control={<Radio  />} label="Mamatha B.R" />
              <FormControlLabel control={<Radio  />} label="Rajeshwari. J M" />
              <FormControlLabel control={<Radio  />} label="Shobarani" />
              <FormControlLabel control={<Radio  />} label="Malini K" />
              <FormControlLabel control={<Radio  />} label="Ambika C" />
              <FormControlLabel control={<Radio  />} label="Roopa N M" />
              <FormControlLabel control={<Radio  />} label="Pavithra K" />
              <FormControlLabel control={<Radio  />} label="Shaila" />
              <FormControlLabel control={<Radio  />} label="Sunitha.B" />
              <FormControlLabel control={<Radio  />} label="Mamtaz" />
              <FormControlLabel control={<Radio  />} label="Rehana.A" />
              <FormControlLabel control={<Radio  />} label="Farhana.B" />
              <FormControlLabel control={<Radio  />} label="Roopa.R" />
              <FormControlLabel control={<Radio  />} label="Gangarathna" />
              <FormControlLabel control={<Radio  />} label="Mangala" />
              <FormControlLabel control={<Radio  />} label="Saraswathamma V" />
              <FormControlLabel control={<Radio  />} label="Lakshmi Devi M" />
              <FormControlLabel control={<Radio  />} label="Aruna Kumari V" />
              <FormControlLabel control={<Radio  />} label="Hemalatha G" />
              <FormControlLabel control={<Radio  />} label="Latha" />
              <FormControlLabel control={<Radio  />} label="Nirmala N" />
              <FormControlLabel control={<Radio  />} label="Pallavi.P" />
              <FormControlLabel control={<Radio  />} label="Lakshmi.M.R" />
              <FormControlLabel control={<Radio  />} label="Shashikala K S" />
              <FormControlLabel control={<Radio  />} label="Poornima S" />
              <FormControlLabel control={<Radio  />} label="Divya Amala" />
              <FormControlLabel control={<Radio  />} label="Mariya Deepa" />
              <FormControlLabel control={<Radio  />} label="Vidyashree" />
              <FormControlLabel control={<Radio  />} label="Manjula GP" />
              <FormControlLabel control={<Radio  />} label="Indumathi G C" />
              <FormControlLabel control={<Radio  />} label="Pushpanjali N" />
              <FormControlLabel control={<Radio  />} label="Manjula K H" />
              <FormControlLabel control={<Radio  />} label="Nagamani S" />
              <FormControlLabel control={<Radio  />} label="Manjula K N" />
              <FormControlLabel control={<Radio  />} label="Rajeshwari BP" />
              <FormControlLabel control={<Radio  />} label="Meghana R" />
              <FormControlLabel control={<Radio  />} label="Pallavi P" />
              <FormControlLabel control={<Radio  />} label="Nagarathnamma" />
              <FormControlLabel control={<Radio  />} label="Sharanamma" />
              <FormControlLabel control={<Radio  />} label="Komala P.R" />
              <FormControlLabel control={<Radio  />} label="Radhadevi S" />
              <FormControlLabel control={<Radio  />} label="Shwetha.G.R" />
              <FormControlLabel control={<Radio  />} label="Ranjitha.S" />
              <FormControlLabel control={<Radio  />} label="Suma.B.M" />
              <FormControlLabel control={<Radio  />} label="Manjula.C.N" />
              <FormControlLabel control={<Radio  />} label="Roja.K.H" />
              <FormControlLabel control={<Radio  />} label="Sunitha.G.N" />
              <FormControlLabel control={<Radio  />} label="Priya.P" />
              <FormControlLabel control={<Radio  />} label="Chaithanyya.K.L" />
              <FormControlLabel control={<Radio  />} label="Mamatha.M.J" />
              <FormControlLabel control={<Radio  />} label="Ramya.M" />
              <FormControlLabel control={<Radio  />} label="Shobha.N" />
              <FormControlLabel control={<Radio  />} label="Vijaya.N.C" />
              <FormControlLabel control={<Radio  />} label="Manjula.K.C" />
              <FormControlLabel control={<Radio  />} label="Kavitha B" />
              <FormControlLabel control={<Radio  />} label="Jayalakshmamma" />
              <FormControlLabel control={<Radio  />} label="Ranjitha S. TIPTUR" />
              <FormControlLabel control={<Radio  />} label="Pavithra D" />
              <FormControlLabel control={<Radio  />} label="Bhagyalakshmi" />
              <FormControlLabel control={<Radio  />} label="Komala K" />
              <FormControlLabel control={<Radio  />} label="Nethravathi V" />
              <FormControlLabel control={<Radio  />} label="Kavithamma L" />
              <FormControlLabel control={<Radio  />} label="Pushpalatha.M.C" />
              <FormControlLabel control={<Radio  />} label="Pavitra K" />
    </FormGroup>
        </CardContent>
          </Card>

          <Card  sx={{ marginTop:"20px"}}>
              <CardContent>
                  <Typography>No of participants at the start of the session
            </Typography>
                  <Stack mt={2} mb={2}>
                          <TextField  label="Your Answer" variant="outlined" color="common" />
                      </Stack> 
              </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Assessment of
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    <FormControlLabel control={<Radio  />} label="Circle Meeting" />
                        <FormControlLabel control={<Radio  />} label="Spoorthi Module 2" />
                        <FormControlLabel control={<Radio  />} label="Spoorthi Module 3" />
                        <FormControlLabel control={<Radio  />} label="Spoorthi Module 4" />
                        <FormControlLabel control={<Radio  />} label="Spoorthi Module 5" />
                        <FormControlLabel control={<Radio  />} label="Beehive Initiative Circle Meeting" />
                        <FormControlLabel control={<Radio  />} label="Green Module 1" />
                        <FormControlLabel control={<Radio  />} label="Green Module 2" />
                        <FormControlLabel control={<Radio  />} label="Green Module 3" />
                        <FormControlLabel control={<Radio  />} label="Green Module 4" />
                        <FormControlLabel control={<Radio  />} label="Green Module 5" />
                        <FormControlLabel control={<Radio  />} label="Vyapar Module 1" />
                        <FormControlLabel control={<Radio  />} label="Vyapar Module 2" />
                        <FormControlLabel control={<Radio  />} label="Vyapar Module 3" />
                        <FormControlLabel control={<Radio  />} label="Vyapar Module 4" />
                        <FormControlLabel control={<Radio  />} label="Vyapar Module 5" />
                        <FormControlLabel control={<Radio  />} label="Other…" />
                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{marginTop:2}}>
                <CardContent>
                <Typography >
                The Gelathi Facilitator competently carried out the following functions
                </Typography>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Reached the venue on time" />
                <FormControlLabel control={<Checkbox  />} label="Confirmed a suitable venue to conduct the training" />
                <FormControlLabel control={<Checkbox  />} label="Arranged drinking water facilities for the training" />
                <FormControlLabel control={<Checkbox  />} label="Confirmed location had accessible washroom facilities" />
                <FormControlLabel control={<Checkbox  />} label="Carried all the training materials with her" />
                <FormControlLabel control={<Checkbox  />} label="Commenced the training on time" />
                <FormControlLabel control={<Checkbox  />} label="Beehive Initiative Circle Meeting" />
          </FormGroup>
      </CardContent>
           </Card>
      

           <Card sx={{marginTop:2}}>
              <CardContent>
                        <Typography >
                        The Gelathi Facilitator carried out the following functions before the training/meeting started
                        </Typography>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Group is made to sit in circle or proper shape" />
                        <FormControlLabel control={<Checkbox  />} label="Welcomed the gathering" />
                        <FormControlLabel control={<Checkbox  />} label="Briefed everyone about the rules of the meeting/training" />
                        <FormControlLabel control={<Checkbox  />} label="Started the session with a brief recap of previous sessions" />
                        <FormControlLabel control={<Checkbox  />} label="Gelathi Facilitator distributed the notes and seed pens or pencils" />
                        <FormControlLabel control={<Checkbox  />} label="Beehive Initiative Circle Meeting" />
                  </FormGroup>
              </CardContent>
              </Card>

        <Card  sx={{ marginTop:"20px"}}>
                <CardContent>
                    <Typography>How many stories of success or change emerged from the recap
              </Typography>
                    <Stack mt={2} mb={2}>
                            <TextField  label="Your Answer" variant="outlined" color="common" />
                        </Stack> 
                </CardContent>
        </Card>
        <Card  sx={{ marginTop:"20px"}}>
                <CardContent>
                    <Typography>Mention name of the Gelathis with success stories and a story in couple of lines
              </Typography>
                    <Stack mt={2} mb={2}>
                            <TextField  label="Your Answer" variant="outlined" color="common" />
                        </Stack> 
                </CardContent>
        </Card>

        </CardContent>
        </Grid>

        <br/>


         {/* 3 */}
         <Grid  backgroundColor={"#FFD580"}>
          page-3
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Circle Meeting</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the Gelathi Facilitator did NOT do
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Welcome and spoorthi song" />
            <FormControlLabel control={<Checkbox  />} label="Introduction of GF, Gelathis and Buzz" />
            <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
            <FormControlLabel control={<Checkbox  />} label="Congratulate the Gelathis" />
            <FormControlLabel control={<Checkbox  />} label="Collect opinion about the Buzz Self Shakthi training" />
            <FormControlLabel control={<Checkbox  />} label="Explain the Buzz GFs roles and responsibility" />
            <FormControlLabel control={<Checkbox  />} label="Explain the concept of Buzz Gelathi" />
            <FormControlLabel control={<Checkbox  />} label="Brief about  functions of Buzz Gelathi" />
            <FormControlLabel control={<Checkbox  />} label="Explain the challenges of Buzz Gelathis during execution of her role" />
            <FormControlLabel control={<Checkbox  />} label="Explain the ambition of Buzz Gelathis" />
            <FormControlLabel control={<Checkbox  />} label="Discuss the expectation of Buzz Gelathis" />
            <FormControlLabel control={<Checkbox  />} label="Explain the Spoorthi fellowship training" />
            <FormControlLabel control={<Checkbox  />} label="Explain about Beehive initiative meeting" />
            <FormControlLabel control={<Checkbox  />} label="Explain about Buzz Green programme" />
            <FormControlLabel control={<Checkbox  />} label="Explain about the Buzz Vyapar programme" />
            <FormControlLabel control={<Checkbox  />} label="Share the mobile number" />
            <FormControlLabel control={<Checkbox  />} label="Get the sign, group photo and vote of thanks" />
            <FormControlLabel control={<Checkbox  />} label="Other…" />
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>

          <br/>

              {/* 4 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-4
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Spoorthi-2</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the Gelathi Facilitator did NOT do
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Spoorthi Song" />
            <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
            <FormControlLabel control={<Checkbox  />} label="Introduction of GF and Gelathi" />
            <FormControlLabel control={<Checkbox  />} label="Explain the objective of the Spoorthi Training" />
            <FormControlLabel control={<Checkbox  />} label="Explain the duration of Spoorthi Fellowship" />
            <FormControlLabel control={<Checkbox  />} label="Visualization of Tree activity" />
            <FormControlLabel control={<Checkbox  />} label="Debrief of Visualization of Tree activity" />
            <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's skills and shared in pair" />
            <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's challenges and shared in pair" />
            <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's resources and shared in pair"/>
            <FormControlLabel control={<Checkbox  />} label="Share in pair how they resolve the challenges by using their own skills and resources" />
            <FormControlLabel control={<Checkbox  />} label="Given name for Spoorthi-1" />
            <FormControlLabel control={<Checkbox  />} label="Feedback done" />
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>

       {/* 5 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-5
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Spoorthi-2</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the Gelathi Facilitator did NOT do
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Spoorthi Song" />
            <FormControlLabel control={<Checkbox  />} label="Paper cutting activity with instructions" />
            <FormControlLabel control={<Checkbox  />} label="Debrief on the paper cutting activity" />
            <FormControlLabel control={<Checkbox  />} label="Magic stick activity about the active listening" />
            <FormControlLabel control={<Checkbox  />} label="Debrief the magic stick activity" />
            <FormControlLabel control={<Checkbox  />} label="List down points about active listening" />
            <FormControlLabel control={<Checkbox  />} label="Debrief the active listening activity" />
            <FormControlLabel control={<Checkbox  />} label="Discuss about the Gelathi tool kit" />
            <FormControlLabel control={<Checkbox  />} label=" Discussion about the borewell activity" />
            <FormControlLabel control={<Checkbox  />} label="Given name for Spoorthi-2" />
            <FormControlLabel control={<Checkbox  />} label="Feedback done" />
            

            

    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>        
        <br/>


          {/* 6 */}
          <Grid  backgroundColor={"#FFD580"}>
          page-6
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Spoorthi-3</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the Gelathi Facilitator did NOT do
          </Typography>
          <FormGroup>
         
            <FormControlLabel control={<Checkbox  />} label="Spoorthi song" />
            <FormControlLabel control={<Checkbox  />} label="Recap of Spoorthi-2" />
            <FormControlLabel control={<Checkbox  />} label="The hand drawing activity" />
            <FormControlLabel control={<Checkbox  />} label="Presentation of the hand drawing activity" />
            <FormControlLabel control={<Checkbox  />} label="Debrief on the hand drawing activity" />
            <FormControlLabel control={<Checkbox  />} label="List down elements of human growth" />
            <FormControlLabel control={<Checkbox  />} label="Model village drawing done by Gelathis" />
            <FormControlLabel control={<Checkbox  />} label="Presentation done by 2 Gelathis of model village drawing" />
            <FormControlLabel control={<Checkbox  />} label="Discuss what elements do they want to make their village become model village" />
            <FormControlLabel control={<Checkbox  />} label="Discuss as a  pair what they should do first to make their village as a model village?" />
            <FormControlLabel control={<Checkbox  />} label="Debrief about the model village" />
            <FormControlLabel control={<Checkbox  />} label="Given name for spoorthi-3" />
            <FormControlLabel control={<Checkbox  />} label="Feedback" />
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
          </Grid>

        <br/>

           {/* 7 */}
           <Grid  backgroundColor={"#FFD580"}>
          page-7
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Spoorthi-2</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the Gelathi Facilitator did NOT do
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Spoorthi Song" />
            <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
            <FormControlLabel control={<Checkbox  />} label="Introduction of GF and Gelathi" />
            <FormControlLabel control={<Checkbox  />} label="Explain the objective of the Spoorthi Training" />
            <FormControlLabel control={<Checkbox  />} label="Explain the duration of Spoorthi Fellowship" />
            <FormControlLabel control={<Checkbox  />} label="Visualization of Tree activity" />
            <FormControlLabel control={<Checkbox  />} label="Debrief of Visualization of Tree activity" />
            <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's skills and shared in pair" />
            <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's challenges and shared in pair" />
            <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's resources and shared in pair"/>
            <FormControlLabel control={<Checkbox  />} label="Share in pair how they resolve the challenges by using their own skills and resources" />
            <FormControlLabel control={<Checkbox  />} label="Given name for Spoorthi-1" />
            <FormControlLabel control={<Checkbox  />} label="Feedback done" />
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>


           {/* 10 */}
       <Grid  backgroundColor={"#FFD580"}>
          page-10
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Attendance</Typography>
          <Typography variant = 'h5'>The purpose of the section is to collect quantitative data around participation, excitement, preparedness and the maintenance of interest level of the participants during the training.</Typography>
          </CardContent>
        </Card>
        <Card  sx={{ marginTop:"20px"}}>
        <CardContent>
            <Typography>How many women attended the training session?
 
          </Typography>
                <Stack mt={2} mb={2}>
                        <TextField  label="Your Answer" variant="outlined" color="common" />
                    </Stack> 
        </CardContent>
          </Card>
          </Card>
          <Card  sx={{ marginTop:"20px"}}>
        <CardContent>
            <Typography>How many women attended the training session?
 
          </Typography>
                <Stack mt={2} mb={2}>
                        <TextField  label="Your Answer" variant="outlined" color="common" />
                    </Stack> 
        </CardContent>
          </Card>

          
 <Card sx={{marginTop:2}}>
          <CardContent>
          <Typography mb={2} >
          Level of participation (1 is poor and 5 is excellent)
          </Typography>
            <Card sx={{display: 'flex',flexDirection:"column"}} >
              <CardContent sx={{display: 'flex',flexDirection:"row"}}>
                <CardContent sx={{width:'30%'}}></CardContent>
                <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
                 <Typography>1</Typography>
                 <Typography>2</Typography>
                 <Typography>3</Typography>
                 <Typography>4</Typography>
                 <Typography>5</Typography>
                  
                </CardContent>
              </CardContent>
            {/* </Card>
            <Card sx={{display: 'flex',flexDirection:"row"}}> */}
            <CardContent sx={{display: 'flex',flexDirection:"row"}}>
                <CardContent sx={{width:'30%'}}>Reached the venue on or before time</CardContent>
                
                <CardContent sx={{width:'70%' }}>
                  <RadioGroup style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>

                 
                    <FormControlLabel value="option1" control={<Radio />}  />
                    <FormControlLabel value="option2" control={<Radio />}  />
                    <FormControlLabel value="option3" control={<Radio />} />
                    <FormControlLabel value="option4" control={<Radio />} />
                    <FormControlLabel value="option5" control={<Radio />} /> 
                </RadioGroup>
                  
                </CardContent>
            </CardContent>

            <CardContent sx={{display: 'flex',flexDirection:"row"}}>
                <CardContent sx={{width:'30%'}}>Present for the entire session</CardContent>
                <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between',alignItems:'center' }}>
                   {/* <RadioGroup sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent: 'space-between'}}> */}
                <FormControlLabel value="option1" control={<Radio />}  />
                <FormControlLabel value="option2" control={<Radio />}  />
                <FormControlLabel value="option3" control={<Radio />} />
                <FormControlLabel value="option4" control={<Radio />} />
                <FormControlLabel value="option5" control={<Radio />} />
                  {/* </RadioGroup> */}
                </CardContent>
            </CardContent>


            <CardContent sx={{display: 'flex',flexDirection:"row"}}>
                <CardContent sx={{width:'30%'}}>Leave in the meeting/ training in between?</CardContent>
                <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
                <FormControlLabel value="option1" control={<Radio />}  />
                <FormControlLabel value="option2" control={<Radio />}  />
                <FormControlLabel value="option3" control={<Radio />} />
                <FormControlLabel value="option4" control={<Radio />} />
                <FormControlLabel value="option5" control={<Radio />} />
                  
                </CardContent>
            </CardContent>

            <CardContent sx={{display: 'flex',flexDirection:"row"}}>
                <CardContent sx={{width:'30%'}}>Signed the ledger/meeting minute</CardContent>
                <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
                <FormControlLabel value="option1" control={<Radio />}  />
                <FormControlLabel value="option2" control={<Radio />}  />
                <FormControlLabel value="option3" control={<Radio />} />
                <FormControlLabel value="option4" control={<Radio />} />
                <FormControlLabel value="option5" control={<Radio />} />
                  
                </CardContent>
            </CardContent>

            <CardContent sx={{display: 'flex',flexDirection:"row"}}>
                <CardContent sx={{width:'30%'}}>Brought the books / pens to take down notes?</CardContent>
                <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
                <FormControlLabel value="option1" control={<Radio />}  />
                <FormControlLabel value="option2" control={<Radio />}  />
                <FormControlLabel value="option3" control={<Radio />} />
                <FormControlLabel value="option4" control={<Radio />} />
                <FormControlLabel value="option5" control={<Radio />} />
                  
                </CardContent>
              </CardContent>
              
            </Card>

              </CardContent>
          </Card>
      
        </CardContent>
        </Grid>

           {/* 12 */}
     <Grid  backgroundColor={"#FFD580"}>
          page-12
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography>
                  Self-Shakti 
                </Typography>
                <Typography>
                DAY 1 Training Quality assessment
                </Typography>
          </CardContent>
        </Card>
        <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack >
                <Typography>
                  Day1 or Day 2
                </Typography>
                
                <Stack>
                  <FormGroup>
                    <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
 </Card>

          </Card>
      
        </CardContent>
        </Grid>
        <br/>
         
         {/* 13 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-13
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Day-1</Typography>
          </CardContent>
        </Card>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Name of the trainer being evaluated
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Shashikala K"  control={<Radio />} label="Shashikala K" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Manohar" control={<Radio />} label="Manohar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Madhusudhan" control={<Radio />} label="Madhusudhan" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Srinivas" control={<Radio />} label="Srinivas" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Vyapar Program" control={<Radio />} label="Vyapar Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Bojaraj" control={<Radio />} label="Bojaraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kumaraswamy" control={<Radio />} label="Kumaraswamy" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Siraj" control={<Radio />} label="Siraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kirana M" control={<Radio />} label="Kirana M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mitun Rawath" control={<Radio />} label="Mitun Rawath" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ashwini Y" control={<Radio />} label="Ashwini Y" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha K A" control={<Radio />} label="Harisha K A" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Dinesh" control={<Radio />} label="Dinesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha E" control={<Radio />} label="Harisha E" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ashwini Y" control={<Radio />} label="Ashwini Y" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha K A" control={<Radio />} label="Harisha K A" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Dinesh" control={<Radio />} label="Dinesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha E" control={<Radio />} label="Harisha E" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>

                    <FormControlLabel value="Bojaraj" control={<Radio />} label="Bojaraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kumaraswamy" control={<Radio />} label="Kumaraswamy" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Siraj" control={<Radio />} label="Siraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kirana M" control={<Radio />} label="Kirana M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mitun Rawath" control={<Radio />} label="Mitun Rawath" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ashwini Y" control={<Radio />} label="Ashwini Y" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha K A" control={<Radio />} label="Harisha K A" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Dinesh" control={<Radio />} label="Dinesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha E" control={<Radio />} label="Harisha E" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ravikumar R" control={<Radio />} label="Ravikumar R" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Pradeepa" control={<Radio />} label="Pradeepa" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mohankumar" control={<Radio />} label="Mohankumar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Madhu D T" control={<Radio />} label="Madhu D T" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Lakshmi P" control={<Radio />} label="Lakshmi P" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Rajashekar O" control={<Radio />} label="Rajashekar O" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Sarvagnachary" control={<Radio />} label="Sarvagnachary" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kirana A.L." control={<Radio />} label="Kirana A.L." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Shivaraju.H.N" control={<Radio />} label="Shivaraju.H.N" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Prem Kumar H.M" control={<Radio />} label="Prem Kumar H.M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Murthy P" control={<Radio />} label="Murthy P" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Madhu. S" control={<Radio />} label="Madhu. S" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mahendra.D.M" control={<Radio />} label="Mahendra.D.M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Raghavendra" control={<Radio />} label="Raghavendra" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ramesh" control={<Radio />} label="Ramesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chandankumar" control={<Radio />} label="Chandankumar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Aparna B H" control={<Radio />} label="Aparna B H" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mamatha H N" control={<Radio />} label="Mamatha H N" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ningaraju M" control={<Radio />} label="Ningaraju M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ramaleela J R" control={<Radio />} label="Ramaleela J R" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mounika" control={<Radio />} label="Mounika" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Other…" control={<Radio />} label="Other…" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>


                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>

          </Card>
          
        </CardContent>
        </Grid>
          <br/>

          {/* 14 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-14
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Before the training starts on Day 1</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the Gelathi Facilitator did NOT do
          </Typography>
          <FormGroup>
          Arrange the tent and the chairs in ‘u’ form
          <FormControlLabel control={<Checkbox  />} label=" Arrange the tent and the chairs in ‘u’ form" />
          <FormControlLabel control={<Checkbox  />} label="Play the video while the participants were entering" />
          <FormControlLabel control={<Checkbox  />} label="Take the signature needed for the consent" />
          <FormControlLabel control={<Checkbox  />} label="Collect information for the primary Baseline Data Ledger" />
          <FormControlLabel control={<Checkbox  />} label="Read the consent form loudly" />
          <FormControlLabel control={<Checkbox  />} label="Distribute the books and pencils to the participants with respect" />
          <FormControlLabel control={<Checkbox  />} label="Express gratitude towards the Anganwadi teacher for her efforts" />
          <FormControlLabel control={<Checkbox  />} label="Explain the training schedule and intended outcomes of the training to them" />
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>

        {/* 15 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-15
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Module 1 (M1) Introduction of Buzz:</Typography>
          </CardContent>
        </Card>
        <Card  >
        <CardContent>
            <Typography>Name of the Assessor
       </Typography>
            <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack> 
        </CardContent>
     </Card>
          </Card>
      

          <Card sx={{marginTop:2}}>
              <CardContent>
                        <Typography >
                        Check which ones the trainer did not do
                        </Typography>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
                        <FormControlLabel control={<Checkbox  />} label="Set the expectations of the participants" />
                          <FormControlLabel control={<Checkbox  />} label="Introduce Buzz India" />
                          <FormControlLabel control={<Checkbox  />} label="Create a learning environment" />
                          <FormControlLabel control={<Checkbox  />} label="Engaged with participants to build a rapport" />
                          <FormControlLabel control={<Checkbox  />} label="Promote trust and confidence in Buzz among participants" />
                          <FormControlLabel control={<Checkbox  />} label="Introduce himself/herself" />
                          <FormControlLabel control={<Checkbox  />} label="Ask the women to introduce themselves" />
                          <FormControlLabel control={<Checkbox  />} label="Play the Buzz India video" />
                          <FormControlLabel control={<Checkbox  />} label="Tell the participants that this training is for everyone, and that we have multiple processes of learning there’s verbal, texts, videos, pictures, songs" />
                          <FormControlLabel control={<Checkbox  />} label="Mention life learning is more important and it is a lifelong process and implied that this is a learning environment" />
                          <FormControlLabel control={<Checkbox  />} label="Sing the Buzz song along with the participants" />
                          <FormControlLabel control={<Checkbox  />} label="Use the opening pitch during the introduction" />
                          <FormControlLabel control={<Checkbox  />} label="Explain why the Buzz India training is only for women and not men" />
                          <FormControlLabel control={<Checkbox  />} label="Explain the methodology and the training content well" />
                          <FormControlLabel control={<Checkbox  />} label="Inform the importance of the book" />
                  </FormGroup>
              </CardContent>
          </Card>


          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Were the women interactive?
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
           </Card>
           <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Did any women leave the training session during or after the first module?
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
           </Card>

           <Card  sx={{ marginTop:"20px"}}>
              <CardContent>
                  <Typography>If so, how many?
            </Typography>
                  <Stack mt={2} mb={2}>
                          <TextField  label="Your Answer" variant="outlined" color="common" />
                      </Stack> 
              </CardContent>
        </Card>

        <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Did this module take 20 minutes as allotted?
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
           </Card>


        </CardContent>


          



        </Grid>

        

     <br/>
     <Grid style={{backgroundColor:"#FFD580"}}>
            <Typography>PAGE 16 buzz m2</Typography>

       
        
        <Card sx={{mt:4, margin:"20px", backgroundColor:'#ff7424'}}>
        <CardContent>
        <Stack>
                <Typography  style={{fontWeight:700}} color="primary">
                  Buzz Module 2 <br />
                </Typography>
              </Stack>
                </CardContent>
                <Card sx={{mt:2,}} >
        <CardContent>
        <Stack mt={2}>
                <Typography variant="body2">Did any new women attend the training session during this module?/ಈ ಮಾಡ್ಯೂಲ್ ನಲ್ಲಿ ಯಾವುದೇ ಹೊಸ ಮಹಿಳೆಯರು ತರಬೇತಿ ಸೆಷನ್ ಗೆ ಹಾಜರಾಗಿದ್ದಾರೆಯೇ?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                     
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData,ownAsset : value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
             
        </CardContent>
     </Card>
        </Card>
        
     
     {/* <Card sx={{mt:2,}} >
        <CardContent>
        <Stack mt={2}>
                <Typography variant="body2">Did any new women attend the training session during this module?/ಈ ಮಾಡ್ಯೂಲ್ ನಲ್ಲಿ ಯಾವುದೇ ಹೊಸ ಮಹಿಳೆಯರು ತರಬೇತಿ ಸೆಷನ್ ಗೆ ಹಾಜರಾಗಿದ್ದಾರೆಯೇ?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                     
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData,ownAsset : value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
             
        </CardContent>
     </Card> */}

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                  If so, How many?/ಹಾಗಿದ್ದರೆ ಎಷ್ಟು?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
        
        
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                   Check which ones the trainer did not do/ತರಬೇತುದಾರನು ಯಾವುದನ್ನು ಮಾಡಲಿಲ್ಲ ಎಂಬುದನ್ನು ಪರಿಶೀಲಿಸಿ
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Set the ground rules"  control={<Checkbox />} label="Set the ground rules" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Set the expectations of the participants" control={<Checkbox />} label="Set the expectations of the participants" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Introduce Buzz India" control={<Checkbox />} label="Introduce Buzz India" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Create a learning environment" control={<Checkbox />} label="Create a learning environment" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Engaged with participants to build a rapport" control={<Checkbox />} label="Engaged with participants to build a rapport" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Promote trust and confidence in Buzz among participants"  control={<Checkbox />} label="Promote trust and confidence in Buzz among participants" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Introduce himself/herself" control={<Checkbox />} label="Introduce himself/herself" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask the women to introduce themselves" control={<Checkbox />} label="Ask the women to introduce themselves" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Play the Buzz India video" control={<Checkbox />} label="Play the Buzz India video" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell the participants that this training is for everyone, and that we have multiple processes of learning there’s verbal, texts, videos, pictures, songs" control={<Checkbox />} label="Tell the participants that this training is for everyone, and that we have multiple processes of learning there’s verbal, texts, videos, pictures, songs" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                   During the debrief the trainer did: /ಡಿಬ್ರೀಫ್ ಸಮಯದಲ್ಲಿ ತರಬೇತುದಾರನು ಹೀಗೆ ಮಾಡಿದನು( check the ones he/she did)
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Ask why is this important to learn?"  control={<Checkbox />} label="Ask why is this important to learn?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask which are the places/situations where income, profit, savings could be asked?" control={<Checkbox />} label="Ask which are the places/situations where income, profit, savings could be asked?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Clarify why this is important even if someone said that their business is already running well?" control={<Checkbox />} label="Clarify why this is important even if someone said that their business is already running well?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography> Did any women leave the training session during or after the first module?/ಮೊದಲ ಮಾಡ್ಯೂಲ್ ಸಮಯದಲ್ಲಿ ಅಥವಾ ನಂತರ ಯಾವುದೇ ಮಹಿಳೆಯರು ಸೆಷನ್ ಅನ್ನು ತೊರೆದಿದ್ದಾರೆಯೇ?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
       
        </CardContent>
     </Card>

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                  If so, How many?/ಹಾಗಿದ್ದರೆ ಎಷ್ಟು?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        
            
       
        </CardContent>
     </Card>
     
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did this module take 20 minutes as allotted?/ಈ ಮಾಡ್ಯೂಲ್ ನಿಗದಿಪಡಿಸಿದಂತೆ 20 ನಿಮಿಷಗಳನ್ನು ತೆಗೆದುಕೊಂಡಿದೆಯೇ?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        
            
       
        </CardContent>
     </Card>
     


     </Grid>
     <br/>
     <Grid style={{backgroundColor:"#FFD580"}}>
            <Typography>PAGE 17 buzz m3</Typography>
   <CardContent>
    

   
       
        
        <Card sx={{mt:4, margin:"20px", backgroundColor:'#ff7424'}}>
        <CardContent>
        <Stack >
          
                <Typography  style={{fontWeight:700}} color="primary">Module 3 (M3) Building Relationships</Typography>
               
              </Stack>
              
                </CardContent>
                <Card>
                <CardContent>
              <Stack mt={2}>
                <Typography variant="body2">Did any new women attend the training session during this module</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                     
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData,ownAsset : value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
              </CardContent>
              </Card>
                
        </Card>
        
     
     <Card sx={{mt:2, margin:"20px"}} >
        <CardContent>
        <Stack mt={2}>
                <Typography variant="body2">Did any new women attend the training session during this module</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                     
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData,ownAsset : value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
             
        </CardContent>
     </Card>

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                  If so, How many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
        
        
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                   Check which ones the trainer did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?"  control={<Checkbox />} label="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what needs to be done to run a business more successfully or even run your life successfully?" control={<Checkbox />} label="Ask what needs to be done to run a business more successfully or even run your life successfully?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Record the answers to the questions he asked them and the discussion points" control={<Checkbox />} label="Record the answers to the questions he asked them and the discussion points" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Reward those who answered" control={<Checkbox />} label="Reward those who answered" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask why is it necessary to communicate clearly, politely and effectively?" control={<Checkbox />} label="Ask why is it necessary to communicate clearly, politely and effectively?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                   During the debriefs for role plays the trainer did not ask:
                    ( check the ones he/she did)
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="What was the role play about?"  control={<Checkbox />} label="What was the role play about?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="How did the protagonists behave?" control={<Checkbox />} label="How did the protagonists behave?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="What was the impact on customers & business/ family member?" control={<Checkbox />} label="What was the impact on customers & business/ family member?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  
                    <FormControlLabel value="What was done well"  control={<Checkbox />} label="What was done well" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="What do you feel after seeing all the role plays?"  control={<Checkbox />} label="What do you feel after seeing all the role plays?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Do you notice that in all four role plays there are possibilities?"  control={<Checkbox />} label="Do you notice that in all four role plays there are possibilities?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Where do you think change begins?"  control={<Checkbox />} label="Where do you think change begins?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well. How? What situations in real life could they be useful in?"  control={<Checkbox />} label="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well. How? What situations in real life could they be useful in?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Can you share incidents where good and bad communication affected your relationships"  control={<Checkbox />} label="Can you share incidents where good and bad communication affected your relationships" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Do you believe effective communication or relationship building has an influence on your personal life and your business? How?"  control={<Checkbox />} label="Do you believe effective communication or relationship building has an influence on your personal life and your business? How?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Record all answers"  control={<Checkbox />} label="Record all answers" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  
                  
                  </FormGroup>
                </Stack>
              </Stack>
        
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography> Did the trainer leave the women to read the role play card themselves?
                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        
       
        </CardContent>
     </Card>

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography> Did the groups engage and interact among themselves well?
                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Were the participants responsive during the debriefing?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>

     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Did any women leave the training session during or after this module?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                   If so, How many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography> Did this module take 30 minutes as allotted?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>


     
   </CardContent>
     
     
     


     </Grid>

        <Grid  backgroundColor={"#FFD580"}>
          page-18
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Module 4 (M4) Daily Money Management:</Typography>
          </CardContent>
        </Card>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Did any women leave the training session during or after this module?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
       

          </Card>
          <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Did any women leave the training session during or after this module?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                   If so, How many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    <FormControlLabel value="Show the participants the video about Saraswathi and Lakshmi" control={<Checkbox />} label="Show the participants the video about Saraswathi and Lakshmi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask whose life did you like?" control={<Checkbox />} label="Ask whose life did you like?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask why is saving necessary?" control={<Checkbox />} label="Ask why is saving necessary?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask why is it important to think of the future if you have a good professional relationship with the moneylender and have been prompt in repaying loans?" control={<Checkbox />} label="Ask why is it important to think of the future if you have a good professional relationship with the moneylender and have been prompt in repaying loans?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what is wrong with borrowing money from the moneylender for interest?" control={<Checkbox />} label="Ask what is wrong with borrowing money from the moneylender for interest?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what’s wrong with celebrating festivals with joy and vigour, dressing well, eating well?" control={<Checkbox />} label="Ask what’s wrong with celebrating festivals with joy and vigour, dressing well, eating well?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask under what circumstances would Saraswathi not get a loan?" control={<Checkbox />} label="Ask under what circumstances would Saraswathi not get a loan?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what are some of the reasons why a woman may not be able to earn?" control={<Checkbox />} label="Ask what are some of the reasons why a woman may not be able to earn?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what did Lakshmi take a loan for and what did Saraswathi take it for?" control={<Checkbox />} label="Ask what did Lakshmi take a loan for and what did Saraswathi take it for?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask Is it bad to take loan? Lakshmi also took a loan, isn’t it?" control={<Checkbox />} label="Ask Is it bad to take loan? Lakshmi also took a loan, isn’t it?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what kinds of loans are bad to take?" control={<Checkbox />} label="Ask what kinds of loans are bad to take?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask why should we save in formal financial institutions?" control={<Checkbox />} label="Ask why should we save in formal financial institutions?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask why do we need to plan/track expenses?" control={<Checkbox />} label="Ask why do we need to plan/track expenses?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask how is the story relevant to you? Why was it narrated?" control={<Checkbox />} label="Ask how is the story relevant to you? Why was it narrated?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask how many women had bank accounts in their name?" control={<Checkbox />} label="Ask how many women had bank accounts in their name?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask how many of those accounts were still active and operating?" control={<Checkbox />} label="Ask how many of those accounts were still active and operating?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask the women whose life seems better and why?" control={<Checkbox />} label="Ask the women whose life seems better and why?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    <FormControlLabel value="Facilitate and encourage debate" control={<Checkbox />} label="Facilitate and encourage debate" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Encourage the participants to look at the women objectively" control={<Checkbox />} label="Encourage the participants to look at the women objectively" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Use the family budgeting receipts charts to explain" control={<Checkbox />} label="Use the family budgeting receipts charts to explain" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask one woman to come volunteer" control={<Checkbox />} label="Ask one woman to come volunteer" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Use Laxmi’s life as an example, if no one volunteers" control={<Checkbox />} label="Use Laxmi’s life as an example, if no one volunteers" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Encourage women to fill this chart in their books before the next week’s training" control={<Checkbox />} label="Encourage women to fill this chart in their books before the next week’s training" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask them to use the help of their family members to fill it if they do not know the numbers themselves" control={<Checkbox />} label="Ask them to use the help of their family members to fill it if they do not know the numbers themselves" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Feed emotional words and see how the group was responding to the questions asked during debrief" control={<Checkbox />} label="Feed emotional words and see how the group was responding to the questions asked during debrief" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask specific questions as mentioned in the guide on the video shown" control={<Checkbox />} label="Ask specific questions as mentioned in the guide on the video shown" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask -  Do you feel there is a change in household income and expenses from past to present? How has it changed and what has contributed to it?" control={<Checkbox />} label="Ask -  Do you feel there is a change in household income and expenses from past to present? How has it changed and what has contributed to it?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Encourage to look at expenses of fruits and vegetables" control={<Checkbox />} label="Encourage to look at expenses of fruits and vegetables" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask - Don’t you think the increasing heat and varying rainfall has contributed to these changes?" control={<Checkbox />} label="Ask - Don’t you think the increasing heat and varying rainfall has contributed to these changes?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Encourage the woman to connect their responses on both household food and health to increasing heat, changing rainfall and varying climate." control={<Checkbox />} label="Encourage the woman to connect their responses on both household food and health to increasing heat, changing rainfall and varying climate." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>

     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                How many women remained by the end of this training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                How many are likely to come back?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography> Did this module take 30 minutes as allotted?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>

         
        </CardContent>
        </Grid>

        <Grid  backgroundColor={"#FFD580"}>
          page-19
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Post - training on Day 1:</Typography>
          </CardContent>
        </Card>
        <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Name of the trainer being evaluated
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="Ask how was it for you?" control={<Checkbox />} label="Ask how was it for you?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what did you learn new today?" control={<Checkbox />} label="Ask what did you learn new today?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" control={<Checkbox />} label="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?" control={<Checkbox />} label="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell the women what will be covered in the next training session" control={<Checkbox />} label="Tell the women what will be covered in the next training session" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask them to share with their family what they have learnt?" control={<Checkbox />} label="Ask them to share with their family what they have learnt?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Create excitement/curiosity among the participants about the next training session" control={<Checkbox />} label="Create excitement/curiosity among the participants about the next training session" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi" control={<Checkbox />} label="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Explain the concept and functions of the Buzz Gelathi" control={<Checkbox />} label="Explain the concept and functions of the Buzz Gelathi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Appreciate the Anganwadi teacher" control={<Checkbox />} label="Appreciate the Anganwadi teacher" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
       

          </Card>
        
     {/* <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Name of the trainer being evaluated
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="Ask how was it for you?" control={<Checkbox />} label="Ask how was it for you?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what did you learn new today?" control={<Checkbox />} label="Ask what did you learn new today?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" control={<Checkbox />} label="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?" control={<Checkbox />} label="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell the women what will be covered in the next training session" control={<Checkbox />} label="Tell the women what will be covered in the next training session" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask them to share with their family what they have learnt?" control={<Checkbox />} label="Ask them to share with their family what they have learnt?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Create excitement/curiosity among the participants about the next training session" control={<Checkbox />} label="Create excitement/curiosity among the participants about the next training session" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi" control={<Checkbox />} label="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Explain the concept and functions of the Buzz Gelathi" control={<Checkbox />} label="Explain the concept and functions of the Buzz Gelathi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Appreciate the Anganwadi teacher" control={<Checkbox />} label="Appreciate the Anganwadi teacher" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card> */}

    

         
        </CardContent>
        </Grid>
        <br/>
        <Grid  backgroundColor={"#FFD580"}>
          page-20
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Day-2</Typography>
          </CardContent>
        </Card>
       
         <Card sx={{marginTop:2}} >
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Name of the trainer being evaluated
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Shashikala K"  control={<Radio />} label="Shashikala K" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Manohar"  control={<Radio />} label="Manohar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Madhusudhan"  control={<Radio />} label="Madhusudhan" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Srinivas"  control={<Radio />} label="Srinivas" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Shashidhar"  control={<Radio />} label="Shashidhar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Bojaraj"  control={<Radio />} label="Bojaraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kumaraswamy"  control={<Radio />} label="Kumaraswamy" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Siraj"  control={<Radio />} label="Siraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kirana M"  control={<Radio />} label="Kirana M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mitun Rawath"  control={<Radio />} label="Mitun Rawath" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ashwini Y"  control={<Radio />} label="Ashwini Y" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha K A"  control={<Radio />} label="Harisha K A" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Dinesh"  control={<Radio />} label="Dinesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Harisha E"  control={<Radio />} label="Harisha E" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ravikumar R"  control={<Radio />} label="Ravikumar R" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Pradeepa"  control={<Radio />} label="Pradeepa" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mohankumar"  control={<Radio />} label="Mohankumar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Madhu D T"  control={<Radio />} label="Madhu D T" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Lakshmi P"  control={<Radio />} label="Lakshmi P" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Rajashekar O"  control={<Radio />} label="Rajashekar O" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Sarvagnachary"  control={<Radio />} label="Sarvagnachary" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Kirana A.L."  control={<Radio />} label="Kirana A.L." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Shivaraju.H.N"  control={<Radio />} label="Shivaraju.H.N" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Prem Kumar H.M"  control={<Radio />} label="Prem Kumar H.M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ramya.M"  control={<Radio />} label="Ramya.M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Madhu. S"  control={<Radio />} label="Madhu. S" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mahendra.D.M"  control={<Radio />} label="Mahendra.D.M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Raghavendra"  control={<Radio />} label="Raghavendra" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ramesh"  control={<Radio />} label="Ramesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Chandankumar"  control={<Radio />} label="Chandankumar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Aparna B H"  control={<Radio />} label="Aparna B H" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mamatha H N"  control={<Radio />} label="Mamatha H N" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ningaraju M"  control={<Radio />} label="Ningaraju M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ramaleela J R"  control={<Radio />} label="Ramaleela J R" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Mounika"  control={<Radio />} label="Mounika" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
   </Card>
       

          </Card>

         

   <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session? (number)
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>

          
     
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    <FormControlLabel value="One day before the training, follow up with the Anganwadi teacher. Request her to remind the participants who did not furnish their Voter ID cards on Day 1 to bring them on Day 2." control={<Checkbox />} label="One day before the training, follow up with the Anganwadi teacher. Request her to remind the participants who did not furnish their Voter ID cards on Day 1 to bring them on Day 2." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="As the women walk into the training space, check the completed book keeping activity in the financial book of the women and fill the register with answers required for the baseline data against each woman’s name" control={<Checkbox />} label="As the women walk into the training space, check the completed book keeping activity in the financial book of the women and fill the register with answers required for the baseline data against each woman’s name" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask the women to sign the register before beginning the training" control={<Checkbox />} label="Ask the women to sign the register before beginning the training" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    <FormControlLabel value="Make sure all the required columns in the register are fully filled" control={<Checkbox />} label="Make sure all the required columns in the register are fully filled" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Was the recap done?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>

     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Did the recap take 15 minutes as allotted?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>

     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="Ask what did they learn last week?" control={<Checkbox />} label="Ask what did they learn last week?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what did we do first? What did we do next?" control={<Checkbox />} label="Ask what did we do first? What did we do next?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what did they learn from the story?" control={<Checkbox />} label="Ask what did they learn from the story?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Do you remember the drama/skit you all enacted?" control={<Checkbox />} label="Do you remember the drama/skit you all enacted?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask why is it important for them to plan their expenses and save?" control={<Checkbox />} label="Ask why is it important for them to plan their expenses and save?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what challenges did they face in book-keeping?" control={<Checkbox />} label="Ask what challenges did they face in book-keeping?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Are there any success stories and challenges in implementing last week’s learning?" control={<Checkbox />} label="Are there any success stories and challenges in implementing last week’s learning?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what did their children or family members say about this training when they shared?" control={<Checkbox />} label="Ask what did their children or family members say about this training when they shared?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>

     
     
    
   

         
        </CardContent>
        </Grid>
  

        <Grid  backgroundColor={"#FFD580"}>
         
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Module 5 (M5) Assets & Liabilities:</Typography>
          </CardContent>
        </Card>
        <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>

          </Card>
          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Ask what do you need to achieve your dreams and goals?" />
            <FormControlLabel control={<Checkbox  />} label="Record the answer when asking - “My goal is to reach your village. If I want to come to your village, and I call and ask you how I can get here, what will you say?”" />
            <FormControlLabel control={<Checkbox  />} label="Give out the correct answer if the women are not able to answer?" />
            <FormControlLabel control={<Checkbox  />} label="Make the connection to their own financial status and how it shows their financial health?      " />
            <FormControlLabel control={<Checkbox  />} label="Use the chart to give an example of assets and liabilities?" />
            <FormControlLabel control={<Checkbox  />} label="Ask one of the women to come up to give the example of their own assets and liabilities?" />
            <FormControlLabel control={<Checkbox  />} label="Talk about natural assets and liabilites" />
            <FormControlLabel control={<Checkbox  />} label="Was the debrief done? " />
    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                During the debrief did the trainer not do the following:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Ask one of the women to come and volunteer to explain her own assets and liabilities?" />
            <FormControlLabel control={<Checkbox  />} label="If no woman volunteers, use an imaginary example of Lakshmi" />
            <FormControlLabel control={<Checkbox  />} label="Ask the women what they feel looking at their assets and liabilities" />
            <FormControlLabel control={<Checkbox  />} label="Clarified doubts of the women on the topic? " />
            <FormControlLabel control={<Checkbox  />} label="Reassured women (if distressed)" />
            <FormControlLabel control={<Checkbox  />} label="Congratulate those in a good position?" />
            <FormControlLabel control={<Checkbox  />} label="Make them aware of different interest rates from different lenders" />
            <FormControlLabel control={<Checkbox  />} label="Ask the women if they feel they are using assets now to the fullest or are they remaining dormant? (More of a reflection question and need not be answered by the women)" />
            <FormControlLabel control={<Checkbox  />} label="Re-emphasize why it is necessary to know this: in order to set realistic and achievable goals." />

    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Were the participants responsive during the debriefing?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card> <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did any women leave the training session during or after this module?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{ marginTop:"20px"}}>
     <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                If so, how many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>
        </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did this module take 30 minutes as allotted?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
        </CardContent>
        </Grid>

        <Grid  backgroundColor={"#FFD580"}>
         
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Module 6 (M6): Goal setting game</Typography>
          </CardContent>
        </Card>
        <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>

          </Card>
          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Ask two or three participants to volunteer to play the game." />
            <FormControlLabel control={<Checkbox  />} label="Ensure the volunteer who is not playing the game, is out of earshot when relaying instructions to the volunteer who is playing first." />
            <FormControlLabel control={<Checkbox  />} label="Give instructions step by step with all constraints added, to the first volunteer, records her goal (for the blocks) and blindfolds her before she begins." />
    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which instructions the trainer did not do
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Make the women understand how to arrange the wooden blocks" />
            <FormControlLabel control={<Checkbox  />} label="Instruct the women on which hand can they usei" />
            <FormControlLabel control={<Checkbox  />} label="Introduce them to a constraint – of them not being able to use the hand they said they will" />
            <FormControlLabel control={<Checkbox  />} label="Introduce them to  another constraint – blindfold" />
            <FormControlLabel control={<Checkbox  />} label="Introduce to the idea - If you pick one block you have place it on top of what you have already arranged, you cannot put it back in the bowl" />
            <FormControlLabel control={<Checkbox  />} label="Ask the woman to state the number of blocks they will arrange and record it" />
    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Repeat the activity with the second volunteer?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                During the debrief did the trainer not do the following:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="What did you see here?" />
            <FormControlLabel control={<Checkbox  />} label="Why was it important for A/B to set a goal (to arrange blocks)?" />
            <FormControlLabel control={<Checkbox  />} label="Why do you think A/B reached her goal/did not reach her goal?" />
            <FormControlLabel control={<Checkbox  />} label="What kind of external challenges will you face in real life while setting goals??" />
            <FormControlLabel control={<Checkbox  />} label="Isn’t life like this game? There are constraints in life as well. What will you do?" />
            <FormControlLabel control={<Checkbox  />} label="Confidence (overconfidence, under confidence), decision making, planning (Always give a number to the goal)" />
            <FormControlLabel control={<Checkbox  />} label="Creating self-awareness about your own thinking/behavioural patterns" />
            <FormControlLabel control={<Checkbox  />} label="Did you see how goals shift with different constraints in life" />
            <FormControlLabel control={<Checkbox  />} label="There is support even if you have constraints, are you aware of that? Can you seek it?" /> 
    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Were the participants responsive during the debriefing?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card> <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did any women leave the training session during or after this module?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{ marginTop:"20px"}}>
     <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                If so, how many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>
        </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did this module take 30 minutes as allotted?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
        </CardContent>
        </Grid>

        
        <Grid  backgroundColor={"#FFD580"}>
         
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Module-7 (M7) Financial goals</Typography>
          </CardContent>
        </Card>
        <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>

          </Card>
          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Ask what the difference between a dream and a goal is?" />
            <FormControlLabel control={<Checkbox  />} label="Record the answer" />
            <FormControlLabel control={<Checkbox  />} label="Give an example" />
            <FormControlLabel control={<Checkbox  />} label="Tell the participants the difference between dream and goal" />
            <FormControlLabel control={<Checkbox  />} label="Ask how a dream can be converted into a goal?" />
            <FormControlLabel control={<Checkbox  />} label="Ask for one volunteer who is willing to come forward and ask them to chart their financial goal on the board?" />
            <FormControlLabel control={<Checkbox  />} label="If no volunteer comes up use Lakshmi’s goal of buying a push cart for her vegetable business as an example?" />
            <FormControlLabel control={<Checkbox  />} label="Use the chart given to explain" />    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                The trainer did not ask
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="How much will it cost?" />
            <FormControlLabel control={<Checkbox  />} label="In how many years do you want to achieve this goal?" />
            <FormControlLabel control={<Checkbox  />} label="How much loan do you want to take for it?" />
            <FormControlLabel control={<Checkbox  />} label="Do you know where you will take a loan from?" />
            <FormControlLabel control={<Checkbox  />} label="What is your goal??" />
            <FormControlLabel control={<Checkbox  />} label="How much will you save for the goal?" />    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                What did the trainer not do
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Made sure that this was done in the books given to the participants and they write it in the book themselves or with the help of someone else " />
            <FormControlLabel control={<Checkbox  />} label="Break down financial goal into yearly, monthly, weekly, daily money-saving goals?" />
            <FormControlLabel control={<Checkbox  />} label="Ask do you think you will be able to save this much for this particular goal apart from your daily expenses and other obligations?" />
            <FormControlLabel control={<Checkbox  />} label="If women respond yes to above, congratulate the women for setting their goals and motivate her to start the process?" />
            <FormControlLabel control={<Checkbox  />} label="If no, ask can you increase the number of years in which you want to achieve this goal or can you increase your income to be able to save more or can you take more of the loan for the goal?" />
            <FormControlLabel control={<Checkbox  />} label="Go around the group and help all participants set a financial goal. Goal = time + money + financial plan?" />
    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

         

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                During the debrief did the trainer not ask:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Does your goal look realistic to you?" />
            <FormControlLabel control={<Checkbox  />} label="Do you have more than one goal to achieve? Are they of equal priority or can you postpone one to achieve the other?" />
            <FormControlLabel control={<Checkbox  />} label="What can you do if both goals are priority for you??" />
            <FormControlLabel control={<Checkbox  />} label="Can you increase your savings or your income??" />
            <FormControlLabel control={<Checkbox  />} label="Can you increase the time frame to reach the goal?" />
    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Were the participants responsive during the debriefing?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card> <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did any women leave the training session during or after this module?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{ marginTop:"20px"}}>
     <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                If so, how many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>
        </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did this module take 30 minutes as allotted?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
        </CardContent>
        </Grid>

      

     

        <Grid  backgroundColor={"#FFD580"}>
         
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Module 8 (M8): Loans - group discussion of case studies</Typography>
          </CardContent>
        </Card>
        <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>

          </Card>
          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Make 4 groups from the entire cohort of participants " />
            <FormControlLabel control={<Checkbox  />} label="Give a case study to each group" />
            <FormControlLabel control={<Checkbox  />} label="Instruct groups to read the case study among themselves and come up with solutions in 3-5 minutes." />
            <FormControlLabel control={<Checkbox  />} label="Made sure that the impression given was not of that loans are not necessary. They are important but to know the source of the loan, own credibility, credit worthiness, credit utilization and repayment strategy." />
    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                During the debrief did the trainer not ask:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="What was your group’s story or case study about?" />
            <FormControlLabel control={<Checkbox  />} label="How much does that person need?" />
            <FormControlLabel control={<Checkbox  />} label="How much do they have in their hand as saving or earning?" />
            <FormControlLabel control={<Checkbox  />} label="What advice would you give that person?" />
            <FormControlLabel control={<Checkbox  />} label="When can you save and reach a goal? When will you need to take a loan to reach it?" />
            <FormControlLabel control={<Checkbox  />} label="Where can you get loans with minimum or no interest?" />
            <FormControlLabel control={<Checkbox  />} label="What are productive loans? What are consumption loans?" />

    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>
          </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Were the participants responsive during the debriefing?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card> <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did any women leave the training session during or after this module?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{ marginTop:"20px"}}>
     <CardContent>
        <Stack mt={2}>
        <Stack>
                <Typography variant="body1">
                If so, how many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              </Stack>
        </CardContent>
        </Card>

          <Card sx={{ marginTop:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>Did this module take 30 minutes as allotted?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
        </CardContent>
        </Grid>

        <Grid  backgroundColor={"#FFD580"}>
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Post training on Day 2  </Typography>
          </CardContent>
        </Card>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do:
                </Typography>
                <Stack mt={2}>
                <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Tell Buzz India wants to keep in touch with the community through the Buzz Gelathi for a continuous learning process and sustainable change" />
            <FormControlLabel control={<Checkbox  />} label="Ask for nomination of the Buzz Gelathi amongst the group." />
            <FormControlLabel control={<Checkbox  />} label="Made clear that a woman can nominate herself too" />
            <FormControlLabel control={<Checkbox  />} label="Respect a woman’s decision to not be a Gelathi" />
            <FormControlLabel control={<Checkbox  />} label="Thank the group for being a wonderful audience." />
            <FormControlLabel control={<Checkbox  />} label="Trainer celebrate the certificate distribution." />

    </FormGroup>
                </Stack>
              </Stack>
        </CardContent>

          </Card>
        </CardContent>
        </Grid>

        <Grid  backgroundColor={"#FFD580"}>
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Self Shakti by Gelathi  </Typography>
          </CardContent>
        </Card>
        <CardContent><Stack mt={2}> <Stack>
                <Typography variant="body1">
                Name of the Gelathi being evaluated
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack></Stack></CardContent> </Card>

              <Stack mt={2}>

<Card>
              <CardContent>
        <Stack mt={2}>
                <Typography>
               Days/ Modules
                </Typography>
                <Stack mt={2}>
                <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Session-1 _ Introduction" />
            <FormControlLabel control={<Checkbox  />} label="Session-2 _ Financial Management" />
            <FormControlLabel control={<Checkbox  />} label="Session-3 _Basics of an enterprise" />
            <FormControlLabel control={<Checkbox  />} label="Session-4 _Building Relationships" />
            <FormControlLabel control={<Checkbox  />} label="Session-5 _Assets and Liabilities" />
            <FormControlLabel control={<Checkbox  />} label="Session-6 _Goal setting game" />
            <FormControlLabel control={<Checkbox  />} label="Session-7 _Financial Goals" />
            <FormControlLabel control={<Checkbox  />} label="Session-8 _Loans-Group discussion of Case Studies" />


    </FormGroup>
                </Stack>
              </Stack>
        </CardContent></Card></Stack>

         
        </CardContent>
        </Grid>
        <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Session-1 _ Introduction</Typography>
           <Typography variant='h6'>Before the training starts on Session 1</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Gelathi did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Distribute the books and pencils to the participants with respect" />
           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>
         
         <Card sx={{ marginTop:"20px"}}>
      <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 How many women attended the training session?
                 </Typography>
                 <Stack mt={3}>
                   <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>
         </Card> 
 
        

          
           <Card sx={{ marginTop:"20px"}}>
         <CardContent>
         <Stack mt={2}>
                 <Typography>
                 Check which ones the Gelathi did not do
                 </Typography>
               
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Introduce Buzz India" />
             <FormControlLabel control={<Checkbox  />} label="Introduce herself" />
             <FormControlLabel control={<Checkbox  />} label="Ask the women to introduce themselves" />
             <FormControlLabel control={<Checkbox  />} label="Sing the Buzz song along with the participants" />
             <FormControlLabel control={<Checkbox  />} label="Explain why the Buzz India training is only for women and not men" />
          
     </FormGroup>
                 </Stack>
              
         </CardContent>
           </Card>
 
          
        
     </CardContent>
         </Grid>

         

         <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Post - Session:</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Gelathi did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Did express Gelathi's opinion and participants feedback about the training" />
             <FormControlLabel control={<Checkbox  />} label="Tell the women what will be covered in the next training session?" />
             <FormControlLabel control={<Checkbox  />} label="Ask them to share with their family what they have learnt?" />
           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>

        
     </CardContent>
         </Grid>
 
         <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Session-2 Financial Management</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Gelathi did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Show the participants the video about Saraswathi and Lakshmi?" />
             <FormControlLabel control={<Checkbox  />} label="Ask why is saving necessary?" />
             <FormControlLabel control={<Checkbox  />} label="Ask what’s wrong with celebrating festivals with joy and vigour, dressing well, eating well?" />
             <FormControlLabel control={<Checkbox  />} label="Ask under what circumstances would Saraswathi not get a loan?" />
             <FormControlLabel control={<Checkbox  />} label="Ask what did Lakshmi take a loan for and what did Saraswathi take it for?" />
             <FormControlLabel control={<Checkbox  />} label="Ask Is it bad to take loan? Lakshmi also took a loan, isn’t it?" />
             <FormControlLabel control={<Checkbox  />} label="Ask why should we save in formal financial institutions?" />
             <FormControlLabel control={<Checkbox  />} label="Ask why do we need to plan/track expenses?" />
             <FormControlLabel control={<Checkbox  />} label="Ask how is the story relevant to you? Why was it narrated?" />
             <FormControlLabel control={<Checkbox  />} label="Ask how many women had bank accounts in their name and active?" />
             <FormControlLabel control={<Checkbox  />} label="Ask the women whose life seems better and why?" />
             <FormControlLabel control={<Checkbox  />} label="Use the family budgeting receipts charts to explain?" />
             <FormControlLabel control={<Checkbox  />} label="Encourage women to fill this chart in their books before the next week’s training?" />
             <FormControlLabel control={<Checkbox  />} label="Ask - Don’t you think the increasing heat and varying rainfall has contributed to these changes?" />
           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>
         
         <Card sx={{ marginTop:"20px"}}>
      <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 How many women attended the training session?
                 </Typography>
                 <Stack mt={3}>
                   <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>
         </Card> 
 
        

          
           <Card sx={{ marginTop:"20px"}}>
         <CardContent>
         <Stack mt={2}>
                 <Typography>
                 Was the recap done?
                 </Typography>

                 <Stack mt={3}>
               
                 <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, spendMoney: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup></Stack>
                 </Stack>
              
         </CardContent>
           </Card>
 
          
        
     </CardContent>
         </Grid>

         <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Post - Session:</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Gelathi did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Did express Gelathi's opinion and participants feedback about the training" />
             <FormControlLabel control={<Checkbox  />} label="Tell the women what will be covered in the next training session?" />
             <FormControlLabel control={<Checkbox  />} label="Ask them to share with their family what they have learnt?" />
           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>

        
     </CardContent>
         </Grid>

         <Grid  backgroundColor={"#FFD580"}>
          page-31
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Session-3 Basics of an Enterprises</Typography>
          </CardContent>
        </Card>
        <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the Gelathi did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="Ask how many businesswomen and how many housewives there were among the participants?" control={<Checkbox />} label="Ask how many businesswomen and how many housewives there were among the participants?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask business women what constitutes business income capital, profit, and  expenditure?" control={<Checkbox />} label="Ask business women what constitutes business income capital, profit, and  expenditure?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask housewives what constitutes household income, savings, and expenditure" control={<Checkbox />} label="Ask housewives what constitutes household income, savings, and expenditure" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Give the formula for calculating income" control={<Checkbox />} label="Give the formula for calculating income" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Use the chart to explain the receipts of an enterprise?" control={<Checkbox />} label="Use the chart to explain the receipts of an enterprise?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Use the chart that was relevant for the business women in the group (if milk business is more then use milk chart if other business then use that)" control={<Checkbox />} label="Use the chart that was relevant for the business women in the group (if milk business is more then use milk chart if other business then use that)" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
        
       

          </Card>
        
    
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                During the debrief did the Gelathi:
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="Ask why is this important to maintain account?" control={<Checkbox />} label="Ask why is this important to maintain account?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask which are the places/situations where income, profit, savings could be asked?" control={<Checkbox />} label="Ask which are the places/situations where income, profit, savings could be asked?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>


    

         
        </CardContent>
        </Grid>

        <br/>

        <Grid  backgroundColor={"#FFD580"}>
          page-32
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Post - Session:</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the Gelathi did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="Did express Gelathi's opinion and participants feedback about the training" control={<Checkbox />} label="Did express Gelathi's opinion and participants feedback about the training" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell the women what will be covered in the next training session?" control={<Checkbox />} label="Tell the women what will be covered in the next training session?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask them to share with their family what they have learnt?" control={<Checkbox />} label="Ask them to share with their family what they have learnt?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                   
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
       

          </Card>
        
     
    


    

         
        </CardContent>
        </Grid>

        <br/>

     <Grid  backgroundColor={"#FFD580"}>
          page-33
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Session-4  Building Relationships:</Typography>
          </CardContent>
        </Card>
        <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the Gelathi did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?" control={<Checkbox />} label="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what needs to be done to run a business more successfully or even run your life successfully?" control={<Checkbox />} label="Ask what needs to be done to run a business more successfully or even run your life successfully?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask why is it necessary to communicate clearly, politely and effectively?" control={<Checkbox />} label="Ask why is it necessary to communicate clearly, politely and effectively?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
        
       

          </Card>
        
    
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                During the debriefs for role plays the Gelathi did not ask:
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    <FormControlLabel value="What was the role play about?" control={<Checkbox />} label="What was the role play about?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="How did the protagonists behave?" control={<Checkbox />} label="How did the protagonists behave?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="What was the impact on customers & business/ family member?" control={<Checkbox />} label="What was the impact on customers & business/ family member?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="What was done well?" control={<Checkbox />} label="What was done well?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="What do you feel after seeing all the role plays?" control={<Checkbox />} label="What do you feel after seeing all the role plays?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Do you notice that in all four role plays there are possibilities?" control={<Checkbox />} label="Do you notice that in all four role plays there are possibilities?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Where do you think change begins?" control={<Checkbox />} label="Where do you think change begins?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well. How? What situations in real life could they be useful in?" control={<Checkbox />} label="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well. How? What situations in real life could they be useful in?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
     


    

         
        </CardContent>
        </Grid>
      <br/>
      <Grid  backgroundColor={"#FFD580"}>
          page-34
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Post-training</Typography>
          </CardContent>
        </Card>
        <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the Gelathi did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    
                    <FormControlLabel value="Ask how was it for you?" control={<Checkbox />} label="Ask how was it for you?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask what did you learn new today?" control={<Checkbox />} label="Ask what did you learn new today?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" control={<Checkbox />} label="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?" control={<Checkbox />} label="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell the women what will be covered in the next training session?" control={<Checkbox />} label="Tell the women what will be covered in the next training session?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask them to share with their family what they have learnt?" control={<Checkbox />} label="Ask them to share with their family what they have learnt?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Create excitement/curiosity among the participants about the next training session?" control={<Checkbox />} label="Create excitement/curiosity among the participants about the next training session?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi?" control={<Checkbox />} label="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    

                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
       

          </Card>
        
     
    
     


    

         
        </CardContent>
        </Grid>

        <br/>
      <Grid  backgroundColor={"#FFD580"}>
          page-35
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Session 5:  Assets & Liabilities: </Typography>
          </CardContent>
        </Card>
          
        <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                Name of the Gelathi being evaluated
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>

       
        
       

          </Card>

          {/* <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                Name of the Gelathi being evaluated
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card> */}

     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Was the recap done?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>
        
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    
                    <FormControlLabel value="Ask what do you need to achieve your dreams and goals?" control={<Checkbox />} label="Ask what do you need to achieve your dreams and goals?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Record the answer when asking - “My goal is to reach your village. If I want to come to your village, and I call and ask you how I can get here, what will you say?”" control={<Checkbox />} label="Record the answer when asking - “My goal is to reach your village. If I want to come to your village, and I call and ask you how I can get here, what will you say?”" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Use the chart to give an example of assets and liabilities?" control={<Checkbox />} label="Use the chart to give an example of assets and liabilities?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask one of the women to come up to give the example of their own assets and liabilities?" control={<Checkbox />} label="Ask one of the women to come up to give the example of their own assets and liabilities?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Was the debrief done?" control={<Checkbox />} label="Was the debrief done?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    

                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
    
     


    

         
        </CardContent>
        </Grid>

        <br/>
      <Grid  backgroundColor={"#FFD580"}>
          page-36
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Session 6: Goal setting game </Typography>
          </CardContent>
           </Card>
           <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card>

       
        
       

          </Card>

         

     {/* <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack>
                <Typography variant="body1">
                How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
       
        </CardContent>
     </Card> */}
     
        
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which ones the trainer did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    
                    
                    <FormControlLabel value="Ask two or three participants to volunteer to play the game." control={<Checkbox />} label="Ask two or three participants to volunteer to play the game." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ensure the volunteer who is not playing the game, is out of earshot when relaying instructions to the volunteer who is playing first." control={<Checkbox />} label="Ensure the volunteer who is not playing the game, is out of earshot when relaying instructions to the volunteer who is playing first." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Give instructions step by step with all constraints added, to the first volunteer, records her goal (for the blocks) and blindfolds her before she begins." control={<Checkbox />} label="Give instructions step by step with all constraints added, to the first volunteer, records her goal (for the blocks) and blindfolds her before she begins." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    
                    

                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>
     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                Check which instructions the Gelathi did not do
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    
                    
                    
                    
                    
                    
                    <FormControlLabel value="Here are wooden blocks. You have to arrange them on top of each other" control={<Checkbox />} label="Here are wooden blocks. You have to arrange them on top of each other" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="How many blocks will you arrange? You have to give a specific number. [they have to specify a number - record this]" control={<Checkbox />} label="How many blocks will you arrange? You have to give a specific number. [they have to specify a number - record this]" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Which hand will you use?" control={<Checkbox />} label="Which hand will you use?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="ALL THE STEPS OF INSTRUCTIONS GIVEN" control={<Checkbox />} label="ALL THE STEPS OF INSTRUCTIONS GIVEN" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    
                    

                    
                    
                    
                   
                   
                    
                  </FormGroup>
                </Stack>
              </Stack>
        
       
        </CardContent>
     </Card>

     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Repeat the activity with the second volunteer?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>

     <Card sx={{marginTop:2}}>
        <CardContent>
        <Stack mt={2}> 
                <Typography>Did the debrief done by Gelathi?

                    </Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, separateFinancialAsset: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
        
        
            
       
        </CardContent>
     </Card>
    
     


    

         
        </CardContent>
        </Grid>

         {/* 37 */}
         <Grid  backgroundColor={"#FFD580"}>
          page-37
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Session-7 Financial goals</Typography>
          </CardContent>
        </Card>
        <Card  sx={{ marginTop:"20px"}}>
        <CardContent>
            <Typography>How many women attended the training session?
 
          </Typography>
                <Stack mt={2} mb={2}>
                        <TextField  label="Your Answer" variant="outlined" color="common" />
                    </Stack> 
        </CardContent>
          </Card>

          </Card>
          <Card sx={{marginTop:2}}>
          <CardContent>
          <Typography >
          Check which ones the Gelathi did not do
          </Typography>
          <FormGroup>

          <FormControlLabel control={<Checkbox  />} label="Ask what the difference between a dream and a goal is?" />
          <FormControlLabel control={<Checkbox  />} label="Tell the participants the difference between dream and goal?" />
          <FormControlLabel control={<Checkbox  />} label="Ask for one volunteer who is willing to come forward and ask them to chart their financial goal on the board?" />

    </FormGroup>
 </CardContent>
          </Card>

          <Card sx={{marginTop:2}}>
          <CardContent>
          <Typography >
          The Gelathi did not ask
          </Typography>
          <FormGroup>

          <FormControlLabel control={<Checkbox  />} label="What is your goal?" />
          <FormControlLabel control={<Checkbox  />} label="How much will it cost?" />
          <FormControlLabel control={<Checkbox  />} label="In how many years do you want to achieve this goal?" />
          <FormControlLabel control={<Checkbox  />} label="How much loan do you want to take for it?" />
          <FormControlLabel control={<Checkbox  />} label="Do you know where you will take a loan from?" />
          <FormControlLabel control={<Checkbox  />} label="How much will you save for the goal?" />

    </FormGroup>
 </CardContent>
          </Card>

          <Card sx={{marginTop:2}}>
          <CardContent>
          <Typography >
          During the debrief did the Gelathi not ask:
          </Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox  />} label="Does your goal look realistic to you?" />
          <FormControlLabel control={<Checkbox  />} label="Can you increase your savings or your income?" />
          <FormControlLabel control={<Checkbox  />} label="Can you increase the time frame to reach the goal?" />
          <FormControlLabel control={<Checkbox  />} label="Do you know where you will take a loan from?" />
          <FormControlLabel control={<Checkbox  />} label="How much will you save for the goal?" />

    </FormGroup>
 </CardContent>
          </Card>

        </CardContent>
        </Grid>
        <br/>
        {/* 38 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-38
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Session 8: Loans - group discussion of case studies</Typography>
          </CardContent>
        </Card>
        <Card  sx={{ marginTop:"20px"}}>
        <CardContent>
            <Typography>How many women attended the training session?
 
          </Typography>
                <Stack mt={2} mb={2}>
                        <TextField  label="Your Answer" variant="outlined" color="common" />
                    </Stack> 
        </CardContent>
          </Card>

          </Card>
          <Card sx={{marginTop:2}}>
          <CardContent>
          <Typography >
          Check which ones the Gelathi did not do:
          </Typography>
          <FormGroup>

          <FormControlLabel control={<Checkbox  />} label="Make 4 groups from all the participants" />
          <FormControlLabel control={<Checkbox  />} label="Give a case study to each group" />
          <FormControlLabel control={<Checkbox  />} label="Made sure that the impression given was not of that loans are not necessary. They are important but to know the source of the loan, own credibility, credit worthiness, credit utilization and repayment strategy" />
          </FormGroup>
 </CardContent>
          </Card>

          <Card sx={{marginTop:2}}>
          <CardContent>
          <Typography >
          During the debrief did the Gelathi not ask:
          </Typography>
          <FormGroup>

          <FormControlLabel control={<Checkbox  />} label="What was your group’s story or case study about?" />
          <FormControlLabel control={<Checkbox  />} label="How much does that person need?" />
            <FormControlLabel control={<Checkbox  />} label="How much do they have in their hand as saving or earning?" />
            <FormControlLabel control={<Checkbox  />} label="What advice would you give that person?" />
            <FormControlLabel control={<Checkbox  />} label="When can you save and reach a goal? When will you need to take a loan to reach it?" />
            <FormControlLabel control={<Checkbox  />} label="Where can you get loans with minimum or no interest?" />
            <FormControlLabel control={<Checkbox  />} label="What are productive loans? What are consumption loans?" />
    </FormGroup>
 </CardContent>
          </Card>

          

        </CardContent>
        </Grid>
          <br/>

          {/* 39 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-39
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Post training </Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which one Trainer Did NOT do
          </Typography>
          <FormGroup>
           
            <FormControlLabel control={<Checkbox  />} label="Thank the group for being a wonderful audience" />
            <FormControlLabel control={<Checkbox  />} label="Gelati celebrate the certificate distribution" />
            
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>
      


        
      
      {/* 40 */}
        <Grid backgroundColor={"#FFD580"}> 
        <CardContent>
          page-40
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Green Module 1:</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the trainer did not do
          </Typography>
          <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Introduction of GF and Green Motivators" />
      <FormControlLabel control={<Checkbox  />} label="Welcome the participants" />
      <FormControlLabel control={<Checkbox  />} label="List down the natural resources found in the visualization" />
      <FormControlLabel control={<Checkbox  />} label="Ask how was it for you?" />
      <FormControlLabel control={<Checkbox  />} label="Duration of Green Training" />
      <FormControlLabel control={<Checkbox  />} label="List down the points from the video" />
      <FormControlLabel control={<Checkbox  />} label="Present that weather severity table" />
      <FormControlLabel control={<Checkbox  />} label="Gave feedback to GF and GM" />
      <FormControlLabel control={<Checkbox  />} label="Discuss with three questions after weather severity table" />
      <FormControlLabel control={<Checkbox  />} label=" Set the ground rules" />
      <FormControlLabel control={<Checkbox  />} label="Visualization about the natural resources" />
      <FormControlLabel control={<Checkbox  />} label="Explain the objectives of the Green Training" />
      <FormControlLabel control={<Checkbox  />} label="Play the climate change video" />
      <FormControlLabel control={<Checkbox  />} label="Provided and discussed homework" />
      <FormControlLabel control={<Checkbox  />} label=" Green Song" />

    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>
        {/* 41 */}
        <Grid  backgroundColor={'#FFD580'}>
          page-41
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Green Module 2:</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the trainer did not do
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Welcome the participants" />
            <FormControlLabel control={<Checkbox  />} label="Sang the green Song" />
            <FormControlLabel control={<Checkbox  />} label="Recap of Day 1" />
            <FormControlLabel control={<Checkbox  />} label="Homework check" />
            <FormControlLabel control={<Checkbox  />} label=" Discuss about water" />
            <FormControlLabel control={<Checkbox  />} label="List down the points about source and usage of water" />
            <FormControlLabel control={<Checkbox  />} label="Explain the water cycle activity" />
            <FormControlLabel control={<Checkbox  />} label="Borewell activity in 2 groups" />
            <FormControlLabel control={<Checkbox  />} label=" Discussion about the borewell activity" />
            <FormControlLabel control={<Checkbox  />} label="Play the two videos regarding water" />
            <FormControlLabel control={<Checkbox  />} label=" Discuss about the videos" />
            <FormControlLabel control={<Checkbox  />} label="Explain the 3 principals of save water" />
            <FormControlLabel control={<Checkbox  />} label="Completed the water cycle activity by participants" />
            <FormControlLabel control={<Checkbox  />} label="Provided feedback to GF and GM" />
            <FormControlLabel control={<Checkbox  />} label="Completed and discussed homework" />
            

            

    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>
          {/* 42 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-42
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Green Module 2:</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the trainer did not do
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Welcome the participants" />
            <FormControlLabel control={<Checkbox  />} label="Sang the green Song" />
            <FormControlLabel control={<Checkbox  />} label="Recap of Day 1" />
            <FormControlLabel control={<Checkbox  />} label="Homework check" />
            <FormControlLabel control={<Checkbox  />} label=" Discuss about water" />
            <FormControlLabel control={<Checkbox  />} label="List down the points about source and usage of water" />
            <FormControlLabel control={<Checkbox  />} label="Explain the water cycle activity" />
            <FormControlLabel control={<Checkbox  />} label="Borewell activity in 2 groups" />
            <FormControlLabel control={<Checkbox  />} label=" Discussion about the borewell activity" />
            <FormControlLabel control={<Checkbox  />} label="Play the two videos regarding water" />
            <FormControlLabel control={<Checkbox  />} label=" Discuss about the videos" />
            <FormControlLabel control={<Checkbox  />} label="Explain the 3 principals of save water" />
            

            

    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>
       
          

       

       
       

   
         
       

     
       

       {/* 43 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-43
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Green Module 4</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones Gelati Facilitator did not do
          </Typography>
          <FormGroup>
           
        <FormControlLabel control={<Checkbox  />} label="Welcome" />
        <FormControlLabel control={<Checkbox  />} label="Green Song" />
        <FormControlLabel control={<Checkbox  />} label="Recap of Day" />
        <FormControlLabel control={<Checkbox  />} label="Checking the Homework" />
        <FormControlLabel control={<Checkbox  />} label="Explain the pollution and it types" />
        <FormControlLabel control={<Checkbox  />} label="Discuss about pollution and nonpollution activity in groups" />
        <FormControlLabel control={<Checkbox  />} label="List down the day to day usage things" />
        <FormControlLabel control={<Checkbox  />} label="List down which are the natural resources polluting, reasons & impact" />
        <FormControlLabel control={<Checkbox  />} label="Debrief about pollution and usage" />
        <FormControlLabel control={<Checkbox  />} label="Feedback GF and GM" />
        <FormControlLabel control={<Checkbox  />} label="Homework" />
            
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>

        {/* 44 */}
        <Grid  backgroundColor={"#FFD580"}>
          page-44
        <CardContent>
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Green Module 5</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which one Trainer Did NOT do
          </Typography>
          <FormGroup>
           
          <FormControlLabel control={<Checkbox  />} label="Welcome" />
        <FormControlLabel control={<Checkbox  />} label="Green song" />
        <FormControlLabel control={<Checkbox  />} label="Recap of Day 4" />
        <FormControlLabel control={<Checkbox  />} label="Discussion about 3 principles of pollution and usage" />
        <FormControlLabel control={<Checkbox  />} label="List out of which things are polluting the environment" />
        <FormControlLabel control={<Checkbox  />} label="Discussion about 3 principles of prevention of environmental damage" />
        <FormControlLabel control={<Checkbox  />} label="List the steps that can be taken to conserve water, By 1 week,1 month, 1 year" />
        <FormControlLabel control={<Checkbox  />} label="List the steps that can be taken to conserve earth, By 1 week, 1 Month, 1 Year" />
        <FormControlLabel control={<Checkbox  />} label="Green village was discussed" />
        <FormControlLabel control={<Checkbox  />} label="My contacts activity" />
        <FormControlLabel control={<Checkbox  />} label="List/draw the natural resources in their village" />
        <FormControlLabel control={<Checkbox  />} label="Discuss the importance of forest, Lake, & Gomalas" />
        <FormControlLabel control={<Checkbox  />} label="Discuss the elements required for restoration of natural resources" />
        <FormControlLabel control={<Checkbox  />} label="Feedback GF and GM" />
        <FormControlLabel control={<Checkbox  />} label="Distribution of Certificates" />
            
    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
        <br/>

        {/* 45 */}
       

         <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Vyapar Training  1</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Gelathi Facilitator did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Welcome" />
             <FormControlLabel control={<Checkbox  />} label="Set the Ground rules" />
             <FormControlLabel control={<Checkbox  />} label="Explain the objectives of Vyapar training" />
             <FormControlLabel control={<Checkbox  />} label="Duration of the Training" />
             <FormControlLabel control={<Checkbox  />} label="Self Shakthi Training discussion" />
             <FormControlLabel control={<Checkbox  />} label="List the different aspects of business" />
             <FormControlLabel control={<Checkbox  />} label="what was the reason for starting this business" />
             <FormControlLabel control={<Checkbox  />} label="Geetha Story-balance of vyapar and life" />
             <FormControlLabel control={<Checkbox  />} label="Debrief about the Geetha Story" />
             <FormControlLabel control={<Checkbox  />} label="What effects did Geetha’s life on business and vice versa" />
             <FormControlLabel control={<Checkbox  />} label="What effects did your life on business and vice versa" />
             <FormControlLabel control={<Checkbox  />} label="Form groups of  three Business women" />
             <FormControlLabel control={<Checkbox  />} label="Listed Skills by Vyaparis" />
             <FormControlLabel control={<Checkbox  />} label="Listed Resource by Vyaparis" />
             <FormControlLabel control={<Checkbox  />} label="Repeated challenges by Vyaparis" />
             <FormControlLabel control={<Checkbox  />} label="Group discussion - how to deal with the challenges" />
             <FormControlLabel control={<Checkbox  />} label="Given name for Vyapar-1" />
             <FormControlLabel control={<Checkbox  />} label="Feedback" />
             <FormControlLabel control={<Checkbox  />} label="Homework" />
             <FormControlLabel control={<Checkbox  />} label="Was the pledge made?" />           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>

        
     </CardContent>
         </Grid>

         <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Vyapar Training  2</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Facilitators did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Welcome" />
             <FormControlLabel control={<Checkbox  />} label="Recap of the 1st Vyapar training" />
             <FormControlLabel control={<Checkbox  />} label="Ask the question why you are joining here?" />
             <FormControlLabel control={<Checkbox  />} label="Ask about the Self Shakthi day-2 phone question" />
             <FormControlLabel control={<Checkbox  />} label="Business improvement / growth factors listed" />
             <FormControlLabel control={<Checkbox  />} label="What type of business are you doing?" />
             <FormControlLabel control={<Checkbox  />} label="What is the Income & formula of income" />
             <FormControlLabel control={<Checkbox  />} label="Income and Expenses chart" />
             <FormControlLabel control={<Checkbox  />} label="Who is your customer?" />
             <FormControlLabel control={<Checkbox  />} label="Types of Sales" />
             <FormControlLabel control={<Checkbox  />} label="Types of Expenses" />
             <FormControlLabel control={<Checkbox  />} label="Formula of Profit" />
             <FormControlLabel control={<Checkbox  />} label="List of the daily expenses and Income chart in the book" />
             <FormControlLabel control={<Checkbox  />} label="Given name for Vyapar-2" />
             <FormControlLabel control={<Checkbox  />} label="Feedback" />
             <FormControlLabel control={<Checkbox  />} label="Homework" />
             <FormControlLabel control={<Checkbox  />} label="Was the pledge made?" />           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>

        
     </CardContent>
         </Grid>

         <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Vyapar Training 3</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Gelathi Facilitators did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Welcome" />
             <FormControlLabel control={<Checkbox  />} label="Recap of the 2nd Vyapar training" />
             <FormControlLabel control={<Checkbox  />} label="Definition of the problem" />
             <FormControlLabel control={<Checkbox  />} label="Temporary solution and permanent solution" />
             <FormControlLabel control={<Checkbox  />} label="Explanation of business problem" />
             <FormControlLabel control={<Checkbox  />} label="Temporary solution and permanent solution regarding the business  problem" />
             <FormControlLabel control={<Checkbox  />} label="List down their own business problems" />
             <FormControlLabel control={<Checkbox  />} label="Discuss about the solution in the group" />
             <FormControlLabel control={<Checkbox  />} label="Activity as a tool for coping with risk" />
             <FormControlLabel control={<Checkbox  />} label="Debrief about the activity by GF" />
             <FormControlLabel control={<Checkbox  />} label="Given name for Vyapar-3" />
             <FormControlLabel control={<Checkbox  />} label="Feedback" />
             <FormControlLabel control={<Checkbox  />} label="Homework" />
             <FormControlLabel control={<Checkbox  />} label="Was the pledge made?" />           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>

        
     </CardContent>
         </Grid>

         <Grid  backgroundColor={"#FFD580"}>
         
         <CardContent>
           <Card>
           <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
           <CardContent>
           <Typography variant = 'h5'>Vyapar Training 4</Typography>
           </CardContent>
         </Card>
         <CardContent>
         <Stack mt={2}>
         <Stack>
                 <Typography variant="body1">
                 Check which ones the Gelathi Facilitators did not do
                 </Typography>
                 <Stack mt={2}>
                 <FormGroup>
             <FormControlLabel control={<Checkbox  />} label="Welcome" />
             <FormControlLabel control={<Checkbox  />} label="Recap of the 3rd Vyapar training" />
             <FormControlLabel control={<Checkbox  />} label="Visualization their business and sharing the experience" />
             <FormControlLabel control={<Checkbox  />} label="What is goal?" />
             <FormControlLabel control={<Checkbox  />} label="How should be the goal?" />
             <FormControlLabel control={<Checkbox  />} label="SMART  Explanation" />
             <FormControlLabel control={<Checkbox  />} label="Writing their business goals based on SMART" />
             <FormControlLabel control={<Checkbox  />} label="List of steps to achieve the goals" />
             <FormControlLabel control={<Checkbox  />} label="Types of loans" />
             <FormControlLabel control={<Checkbox  />} label="Formula of the Profit" />
             <FormControlLabel control={<Checkbox  />} label="Debrief from the GF" />
             <FormControlLabel control={<Checkbox  />} label="Given name for Vyapar-4" />
             <FormControlLabel control={<Checkbox  />} label="Feedback" />
             <FormControlLabel control={<Checkbox  />} label="Homework" />
             <FormControlLabel control={<Checkbox  />} label="Was the pledge made?" />           
     </FormGroup>
                 </Stack>
               </Stack>
               </Stack>
         </CardContent>   </Card>

        
     </CardContent>
         </Grid>

            {/* 49 */}
        <Grid backgroundColor={"#FFD580"}>
        <CardContent>
          page -49 
          <Card>
          <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
          <CardContent>
          <Typography variant = 'h5'>Post - training on Day 1:</Typography>
          </CardContent>
        </Card>
        <CardContent>
          <Typography >
          Check which ones the trainer did not do
          </Typography>
          <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Ask how was it for you?" />
      <FormControlLabel control={<Checkbox  />} label="Ask what did you learn new today?" />
        <FormControlLabel control={<Checkbox  />} label="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" />
        <FormControlLabel control={<Checkbox  />} label="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?"/>
        <FormControlLabel control={<Checkbox  />} label="Tell the women what will be covered in the next training session" />
        <FormControlLabel control={<Checkbox  />} label="Ask them to share with their family what they have learnt?" />
        <FormControlLabel control={<Checkbox  />} label="Create excitement/curiosity among the participants about the next training session" />
        <FormControlLabel control={<Checkbox  />} label="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi" />
        <FormControlLabel control={<Checkbox  />} label="Explain the concept and functions of the Buzz Gelathi" />
        <FormControlLabel control={<Checkbox  />} label="Appreciate the Anganwadi teacher" />
     



    </FormGroup>
        </CardContent>
          </Card>
      
        </CardContent>
        </Grid>
    


      </Dialog>
    </>
  );
}