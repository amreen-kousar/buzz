import React from 'react';

import Iconify from '../../../components/Iconify';
import { Icon } from '@iconify/react';
import { Stack,IconButton,Button, DialogContent,DialogContentText,TextField ,Grid,Typography , Radio,FormControlLabel,Card,CardContent,FormGroup,Checkbox} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import Swal from 'sweetalert2'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Programevaluationday1({onCloseFilter})
{
    const [open, setOpen] = React.useState(false);
    
    const [checked,setChecked] = React.useState({
      only_for:[],
      businesswomen_m2:[],
      places_situation_m2:[],
      communicate_m3:[],
      feel_role_m3:[],
      daytraining:[],
      trainingday1:[],
      pretraining:[]
    });
    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose=()=>{
        setOpen(false)
      }
      const styles = {
        buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left" },
        tableRowStyle: { justifyContent: 'center', alignItems: 'center', marginLeft: 200 },
        linkStyle: { textDecoration: 'none', color: "black" }
      }

   const [sendData,setSendData]= React.useState({
    
  interactive_m1:"", 
  women_m1:"", 
  only_for:"", 
  businesswomen_m2:"",
  debriefing_m3:"",  
  feel_role_m3:"", 
  group_engage_m3:"", 
  new_women_m2:"",
  new_women_m3:"",
  communicate_m3:"",
  many_m2:"", many_m1:"",many_m3:"",  
  role_play_card:"",
  places_situation_m2:"",
  women_leave_m1:"",
  allotted_m2:"", 
  allotted_m1:"", 
  leave_first_module_m2:"",
  leave_first_module_m3:"",
  leave_many_m2:"", 
  allotted_m3:"",
  trainingday1:"",  
  training:"",     

  });

      const evaluationday1form= async() =>{
        console.log("surveyyyyform")
       var data = JSON.stringify({
        "training_batch_id":81803,
        "interactive_m1":sendData?.interactive_m1, 
        "women_m1":sendData?.women_m1, 
        "only_for":checked['only_for'], 
        "businesswomen_m2":checked['businesswomen_m2'],
        "debriefing_m3":sendData?.debriefing_m3,
        "feel_role_m3":checked['feel_role_m3'], 
        "group_engage_m3":sendData?.group_engage_m3, 
        "new_women_m2":sendData?.new_women_m2,
        "new_women_m3":sendData?.new_women_m3,
        "communicate_m3":checked['communicate_m3'],     
        "many_m2":sendData?.many_m2, 
        "many_m1":sendData?.many_m1,"many_m3":sendData?.many_m3,  
        "role_play_card":sendData?.role_play_card,
       "places_situation_m2":checked['places_situation_m2'],
       "women_leave_m1":sendData?.women_leave_m1,   
       "allotted_m2":sendData?.allotted_m2, 
       "allotted_m1":sendData?.allotted_m1, 
       "leave_first_module_m2":sendData?.leave_first_module_m2,
       "leave_first_module_m3":sendData?.leave_first_module_m3,
      //  "trainingday1":checked[trainingday1],
      //  "training":checked[pretraining]
         });
         
         var config = {
           method: 'post',
           url: 'https://bdms.buzzwomen.org/appTest/createFirstEvaluation.php',
           headers: {
             'Content-Type': 'application/json'
           },
           data : data
         };
         
         
         axios(config)
         .then(function (response) {
          if (response?.data?.code) {
            Swal.fire({
              icon:'success',
              title:'Success',
              text:response.data.message,
              timer:2000
             })
             onCloseFilter()
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.data.message,
              confirmButtonText: 'Ok',
              timer: 2000
            });
            handleClose()
            onCloseFilter()
          }
           setgreensurveyform(response?.data)
        
         })
         .catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.data.message,
            confirmButtonText: 'Ok',
            timer: 2000
          });
           console.log(error);
         });
         handleClose();
   }
   const handlecheckedata = (label,event) => {
    var updatedList = [...checked[label]];
    if (event.target.checked) {
      updatedList = [...checked[label], event.target.value];
    } else {
      updatedList.splice(checked[label].indexOf(event.target.value), 1);
    }
    let tempData = {...checked}
    tempData[label]=updatedList
    setChecked(tempData);
  
  };
  
   
      return(
        <div>
        <Stack style={{ flexDirection: 'row'}}  mb={2}>
      
        <Button variant="secondary" style={styles.buttonStyle} onClick={handleClickOpen}
                    endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="ic:sharp-supervised-user-circle" /></IconButton>}>
                    <span style={{ width: "200px" }}>Program Evaluation Day 1</span>
        </Button><br/>
        </Stack>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <form onSubmit={(e) => {e .preventDefault(); evaluationday1form()}}>
      <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
          Program Evaluation Day 1
          </Typography>


          <Button type="submit" autoFocus edge="end" color="inherit" >
          <Iconify icon="material-symbols:save" width={30} height={30} />
          </Button>
        
         
          </Toolbar>
        </AppBar>
        <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
       <Grid>
        <Typography variant="h5" style={{textAlign:"center"}}>Training Quality Review Questions - Day 1</Typography>
       
        
        <Card style={{ marginTop: 10,  borderRadius: 20 }}>
                <CardContent> 
                    
                <Typography variant="h6" color="primary">Pre-Training</Typography><br/>
                  <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Explain the training schedule and intended outcomes of the training to them" control={<Checkbox style={{color:"#595959"}} />} label="Explain the training schedule and intended outcomes of the training to them" onChange={(event)=>handlecheckedata('pretraining',event)}/>
                      
                    </FormGroup>
                  </Stack>
               &nbsp;<hr color="#ff7424"/><br/>

                <Typography variant="h6" color="primary">Before the training starts on Day 1</Typography><br/>
                  <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Arrange the tent and the chairs in 'u' form" control={<Checkbox style={{color:"#595959"}} />} label="Arrange the tent and the chairs in 'u' form" onChange={(event)=>handlecheckedata('daytraining',event)}/>
                      <FormControlLabel value="Play the video while the participants were entering" control={<Checkbox style={{color:"#595959"}} />} label="Play the video while the participants were entering" onChange={(event)=>handlecheckedata('daytraining',event)}/>
                      <FormControlLabel value="Take the signature needed for the consent" control={<Checkbox style={{color:"#595959"}} />} label="Take the signature needed for the consent" onChange={(event)=>handlecheckedata('daytraining',event)}/>
                      <FormControlLabel value="Collect information for the primary Baseline Data Ledger" control={<Checkbox style={{color:"#595959"}} />} label="Collect information for the primary Baseline Data Ledger" onChange={(event)=>handlecheckedata('daytraining',event)}/>
                      <FormControlLabel value="Read the consent form loudly" control={<Checkbox style={{color:"#595959"}} />} label="Read the consent form loudly" onChange={(event)=>handlecheckedata('daytraining',event)}/>
                      <FormControlLabel value="Distribute the books and pencils to the partcipants with respect" control={<Checkbox style={{color:"#595959"}} />} label="Distribute the books and pencils to the partcipants with respect" onChange={(event)=>handlecheckedata('daytraining',event)}/>
                      <FormControlLabel value="Express gratitude towards the Anganwadi teacher for her efforts" control={<Checkbox style={{color:"#595959"}} />} label="Express gratitude towards the Anganwadi teacher for her efforts" onChange={(event)=>handlecheckedata('daytraining',event)}/>
                    </FormGroup>
                  </Stack><br/>

                <Typography variant='h6' color="primary">Module 1 (M1) Introduction to Buzz:</Typography>
                <Typography>How many women attended the training session *</Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, women_m1:e.target.value})} value={sendData?.women_m1}/>
                </Stack>
                  <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Set the ground rules?" control={<Checkbox style={{color:"#595959"}} />} label="Set the ground rules?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Set the expectations of the participants?" control={<Checkbox style={{color:"#595959"}} />} label="Set the expectations of the participants?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Introduce Buzz India?" control={<Checkbox style={{color:"#595959"}} />} label="Introduce Buzz India?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Creating a learning environment?" control={<Checkbox style={{color:"#595959"}} />} label="Creating a learning environment?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Engaged with participants to build a rapport?" control={<Checkbox style={{color:"#595959"}} />} label="Engaged with participants to build a rapport?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Promote trust and confidence in Buzz among participants?" control={<Checkbox style={{color:"#595959"}} />} label="Promote trust and confidence in Buzz among participants?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Introduce himself?" control={<Checkbox style={{color:"#595959"}} />} label="Introduce himself?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Ask the women to introduce themselves" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women to introduce themselves" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Play the Buzz India video?" control={<Checkbox style={{color:"#595959"}} />} label="Play the Buzz India video?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Tell the participants that this training is for everyone,and that we have multiple processes of learning there's verbal, texts, videos, pictures, songs?" control={<Checkbox style={{color:"#595959"}} />} label="Tell the participants that this training is for everyone,and that we have multiple processes of learning there's verbal, texts, videos, pictures, songs?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Mention life learning is more important and it is a lifelong process and implied that this is a learning environment?" control={<Checkbox style={{color:"#595959"}} />} label="Mention life learning is more important and it is a lifelong process and implied that this is a learning environment?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Sing the Buzz song along with the participants?" control={<Checkbox style={{color:"#595959"}} />} label="Sing the Buzz song along with the participants?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Use the opening pitch during the introduction?" control={<Checkbox style={{color:"#595959"}} />} label="Use the opening pitch during the introduction?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Explain why the Buzz India training is only for women and not men?" control={<Checkbox style={{color:"#595959"}} />} label="Explain why the Buzz India training is only for women and not men?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Explain the methodology and the training content well?" control={<Checkbox style={{color:"#595959"}} />} label="Explain the methodology and the training content well?" onChange={(event)=>handlecheckedata('only_for',event)}/>
                      <FormControlLabel value="Inform the importance of the book" control={<Checkbox style={{color:"#595959"}} />} label="Inform the importance of the book" onChange={(event)=>handlecheckedata('only_for',event)}/>
                    
                    </FormGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Were the women interactive? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, interactive_m1: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>

                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did any women leave the training session during or after the first module? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, women_leave_m1: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Typography style={{fontWeight:'700'}}>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, many_m1:e.target.value})} value={sendData?.many_m1}/>
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did this module take 20 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData,allotted_m1: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>&nbsp;
                  <hr color="#ff7424"/><br/>
                  <Typography variant='h6' color="primary">Module 2 (M2) Basics of an Enterprise:</Typography>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did any new women attend the training session during this module? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, new_women_m2: value }) }}


                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Typography style={{fontWeight:'700'}}>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, many_m2:e.target.value})} value={sendData?.many_m2}/>
                </Stack>
                <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Ask how many businesswomen and how many housewives there among the participants?" control={<Checkbox style={{color:"#595959"}} />} label="Ask how many businesswomen and how many housewives there among the participants?" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Ask business women what constitutes business income capital, profit, and expenditure?" control={<Checkbox style={{color:"#595959"}} />} label="Ask business women what constitutes business income capital, profit, and expenditure?" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Make a note of the answers on the white board" control={<Checkbox style={{color:"#595959"}} />} label="Make a note of the answers on the white board" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Ask housewives what constitutes household income, savings, and expenditure" control={<Checkbox style={{color:"#595959"}} />} label="Ask housewives what constitutes household income, savings, and expenditure" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Explain the concepts of capital, expense, profit/loss and income while using an example" control={<Checkbox style={{color:"#595959"}} />} label="Explain the concepts of capital, expense, profit/loss and income while using an example" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Give the formula for calclating income" control={<Checkbox style={{color:"#595959"}} />} label="Give the formula for calclating income" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Acknowledge/congratulate/reward those who responded correctly" control={<Checkbox style={{color:"#595959"}} />} label="Acknowledge/congratulate/reward those who responded correctly" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Ask a participant to come to the board to give an example of her own" control={<Checkbox style={{color:"#595959"}} />} label="Ask a participant to come to the board to give an example of her own" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Use the chart to explain the receipts of an enterprise?" control={<Checkbox style={{color:"#595959"}} />} label="Use the chart to explain the receipts of an enterprise?" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                      <FormControlLabel value="Use the chart that was relevant for the business women in the group (if milk business is more then use milk chart if other business then use that" control={<Checkbox style={{color:"#595959"}} />} label="Use the chart that was relevant for the business women in the group (if milk business is more then use milk chart if other business then use that" onChange={(event)=>handlecheckedata('businesswomen_m2',event)}/>
                                      
                    </FormGroup>
                  </Stack><br/>
                  <Typography style={{fontWeight:700}}>During the debrief did the trainer:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Ask why is this important to learn?" control={<Checkbox style={{color:"#595959"}} />} label="Ask why is this important to learn?" onChange={(event)=>handlecheckedata('places_situation_m2',event)}/>
                      <FormControlLabel value="Ask which are the places/situations where income, profit, savings could be asked?" control={<Checkbox style={{color:"#595959"}} />} label="Ask which are the places/situations where income, profit, savings could be asked? " onChange={(event)=>handlecheckedata('places_situation_m2',event)}/>
                      <FormControlLabel value="Clarify why this is important even if someone said that their business is already running well?" control={<Checkbox style={{color:"#595959"}} />} label="Clarify why this is important even if someone said that their business is already running well?" onChange={(event)=>handlecheckedata('places_situation_m2',event)}/>
                   </FormGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did any women leave the training session during or after the first module? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, leave_first_module_m2: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Typography style={{fontWeight:'700'}}>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, many_m2:e.target.value})} value={sendData?.many_m2}/>
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did this module take 20 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, allotted_m2: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <hr color="#ff7424"/><br/>
                  <Typography variant='h6' color="primary">Module 3 (M3) Building Relationships:</Typography>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did any new women attend the training session during this module? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, new_women_m3: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Typography style={{fontWeight:'700'}}>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, many_m3:e.target.value})} value={sendData?.many_m3}/>
                </Stack>
                <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?" control={<Checkbox style={{color:"#595959"}} />} label="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?" onChange={(event)=>handlecheckedata('communicate_m3',event)}/>
                      <FormControlLabel value="Ask what needs to be done to run a business more successfully or even run your life successfully?" control={<Checkbox style={{color:"#595959"}} />} label="Ask what needs to be done to run a business more successfully or even run your life successfully?"  onChange={(event)=>handlecheckedata('communicate_m3',event)}/>
                      <FormControlLabel value="Reward those who answered?" control={<Checkbox style={{color:"#595959"}} />} label="Reward those who answered?"  onChange={(event)=>handlecheckedata('communicate_m3',event)}/>
                      <FormControlLabel value="Record the answers to the questions he asked them and the discussion points?" control={<Checkbox style={{color:"#595959"}} />} label="Record the answers to the questions he asked them and the discussion points?"  onChange={(event)=>handlecheckedata('communicate_m3',event)}/>
                      <FormControlLabel value="Ask why is it necessary to communicate clearly,politely and effectively?" control={<Checkbox style={{color:"#595959"}} />} label="Ask why is it necessary to communicate clearly,politely and effectively?"  onChange={(event)=>handlecheckedata('communicate_m3',event)}/>           
                    </FormGroup>
                  </Stack><br/>

                  <Typography style={{fontWeight:700}}>During the debriefs for role plays did the trainer not ask:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="What was the role play about?" control={<Checkbox style={{color:"#595959"}} />} label="What was the role play about?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>
                      <FormControlLabel value="How did the protagonists behave?" control={<Checkbox style={{color:"#595959"}} />} label="How did the protagonists behave?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>
                      <FormControlLabel value="What was the impact on customers and business?" control={<Checkbox style={{color:"#595959"}} />} label="What was the impact on customers and business?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>
                      <FormControlLabel value="What could have been done better?" control={<Checkbox style={{color:"#595959"}} />} label="What could have been done better?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>
                      <FormControlLabel value="Record responses for all?" control={<Checkbox style={{color:"#595959"}} />} label="Record responses for all?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>  
                      <FormControlLabel value="What did you feel after doing the role plays?" control={<Checkbox style={{color:"#595959"}} />} label="What did you feel after doing the role plays?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>                    
                      <FormControlLabel value="Did you see possibilities?" control={<Checkbox style={{color:"#595959"}} />} label="Did you see possibilities?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>           
                      <FormControlLabel value="Where do you think change begins?" control={<Checkbox style={{color:"#595959"}} />} label="Where do you think change begins?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>&nbsp;   
                      <FormControlLabel value="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well.How?What situations in real life could they be useful in?" control={<Checkbox style={{color:"#595959"}} />} label="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well.How?What situations in real life could they be useful in?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>&nbsp;      
                      <FormControlLabel value="Can you share incidents where good and bad communication affected your relationships?" control={<Checkbox style={{color:"#595959"}} />} label="Can you share incidents where good and bad communication affected your relationships?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>&nbsp;    
                      <FormControlLabel value="Do you believe effective communication or the relationship building has an influence on your personal life and your business?How?" control={<Checkbox style={{color:"#595959"}} />} label="Do you believe effective communication or the relationship building has an influence on your personal life and your business?How?" onChange={(event)=>handlecheckedata('feel_role_m3',event)}/>           
                    </FormGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did the trainer leave the women to read the role play card themselves? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, role_play_card: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did the groups engage and interact among themselves well? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, group_engage_m3: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Were the participants responsive during the debriefing? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, debriefing_m3: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did any women leave the training session during or after the first module? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, leave_first_module_m3: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>

                </CardContent>
        </Card>
        
        </Grid>
        </DialogContentText>
        </DialogContent>
        </form>
      </Dialog>
         </div>
        
    )
}