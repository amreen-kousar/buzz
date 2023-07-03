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
export default function Evaluationday2({onCloseFilter,batch})
{
    const [open, setOpen] = React.useState(false);
    const [formdata,setformdata] = React.useState(false);
    const [checked,setChecked] = React.useState({
      training_anyone:[],
      learn_story:[],
      financial_status:[],
      volunteer:[],
      wooden_blocks:[],
      external_challenges:[],
      chart_given_m7:[],
      save_goal:[],
      financial_goal_m7:[],
      increase_income:[],
      cohort_participants:[],
      productive_loans:[],
      women_decision:[],
      re_emphasize:[],
    })
    const handleClickOpen = () => {
      // {(batch?.evaluation_first !=0) ? setOpen(true):         
      //   Swal.fire({
      //   icon: 'info',
      //   title: 'No Evaluation Form',
      //   text: 'No Evaluation Form',
      //   confirmButtonText: 'Ok',
      //   timer: 2000
      // });}
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
      const [sendData,setSendData]= React.useState({
    
    re_emphasize:"",
    learn_story: "",
    correct_answer: "",
    leave_training: "",
    financial_goal_m7: "",
    woman_decision: "",
    external_challenges: "",
    leave_training_m8: "",
    women_attend_m5: "",
    leave_training_m7: "",
    chart_given_m7: "",
    participants_m7: "",
    save_goal: "",
    financial_status: "",
    dream_m7: "",
    women_leave: "",
    women_attended_m8: "",
    recap_done: "",
    cohort_participants: "",
    wooden_blocks: "",
    many_m8: "",
    many_m7: "",
    many_m6: "",
    many_m5: "",
    women_attended_m7: "",
    women_attend: "",
    training_anyone: "",
    second_volunteer: "",
    volunteer: "",
    participants_responsive_m8: "", 
    increase_income: "",
    responsive_debriefing: "",
    women_attended: "",
    recap_allotted: "",
    participants_responsive: "",
    productive_loans: "",
    allotted_m8: "",
    allotted_m7: "",
    allotted_m6: "",
    allotted_m5: ""
       
    
    });
    const evaluationday2data= async() =>{
       var data = JSON.stringify({
    "training_batch_id": 81803,
    "re_emphasize":checked['re_emphasize'],
    "learn_story": checked['learn_story'],
    "leave_training":sendData?.leave_training,
    "financial_goal_m7": checked['financial_goal_m7'],
    "woman_decision": checked['women_decision'],
    "external_challenges": checked['external_challenges'],
    "leave_training_m8":sendData?.leave_training_m8,
    "women_attend_m5": sendData?.women_attend_m5,
    "leave_training_m7": sendData?.leave_training_m7,
    "chart_given_m7": checked['chart_given_m7'],
    "participants_m7": sendData?.participants_m7,
    "save_goal": checked['save_goal'],
    "financial_status": checked['financial_status'],
    "women_leave": sendData?.women_leave,
    "women_attended_m8": sendData?.women_attended_m8,
    "recap_done": sendData?.recap_done,
    "cohort_participants": checked['cohort_participants'],
    "wooden_blocks": checked['wooden_blocks'],
    "many_m8": sendData?.many_m8,
    "many_m7": sendData?.many_m7,
    "many_m6": sendData?.many_m6,
    "many_m5": sendData?.many_m5,
    "women_attended_m7": sendData?.women_attended_m7,
    "women_attend": sendData?.women_attend,
    "training_anyone": checked['training_anyone'],
    "second_volunteer": sendData?.second_volunteer,
    "volunteer": checked['volunteer'],
    "participants_responsive_m8": sendData?.participants_responsive_m8,
    "increase_income": checked['increase_income'],
    "responsive_debriefing": sendData?.responsive_debriefing,
    "women_attended": sendData?.women_attended,
    "recap_allotted": sendData?.recap_allotted,
    "participants_responsive": sendData?.participants_responsive,
    "productive_loans": checked['productive_loans'],
    "allotted_m8": sendData?.allotted_m8,
    "allotted_m7": sendData?.allotted_m7,
    "allotted_m6": sendData?.allotted_m6,
    "allotted_m5": sendData?.allotted_m5
       
         });
         
         var config = {
           method: 'post',
           url: 'https://bdms.buzzwomen.org/appTest/createSecondEvaluation.php',
           headers: {
             'Content-Type': 'application/json'
           },
           data : data
         };
         
         axios(config)
         .then(function (response) {
          if (response?.data?.code == 200) {
            onCloseFilter();
          }
          else{
           
            handleClose()
            onCloseFilter();
          }
           setformdata(response?.data)
           Swal.fire({
            icon: 'success',
            title: 'Success',
            text: response.data.message,
            confirmButtonText: 'Ok',
            timer: 2000
          });
         })
         .catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.data.message,
            confirmButtonText: 'Ok',
            timer: 2000
          });
         });
         handleClose();
    }
    return(
        <div>
        <Stack style={{ flexDirection: 'row'}}  mb={2}>
      
        <Button variant="secondary" style={styles.buttonStyle} onClick={handleClickOpen}
                    endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="ic:sharp-supervised-user-circle" /></IconButton>}>
                    <span style={{ width: "200px" }}>Program Evaluation Day 2</span>
                  </Button>
        </Stack>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <form onSubmit={(e)=>{e.preventDefault(); evaluationday2data()}}>
      <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
        
          <Toolbar>
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
          Program Evaluation Day 2
          </Typography>
          <Button type="submit" color="inherit" >
              save
            </Button>
  
          </Toolbar>
        </AppBar>
        <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
       <Grid>
             
       <Card style={{ marginTop: 10,  borderRadius: 20 }}>
                <CardContent> 
                    
        <Typography variant="h5" style={{textAlign:"center"}}>Training Quality Review Questions - Day 2</Typography>
        <Typography>How many women attended the training session? *</Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }} type="number" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, women_attended:e.target.value})} value={sendData?.women_attended}/>
                </Stack> 
                <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  &nbsp;<Stack>
                    <FormGroup >
                      <FormControlLabel value="One day before the training, follow up with the Anganwadi teacher. Request her to remind the participants who did not furnish their Voter ID cards on Day 1 to bring them on Day 2." control={<Checkbox style={{color:"#595959"}} />} label="One day before the training, follow up with the Anganwadi teacher. Request her to remind the participants who did not furnish their Voter ID cards on Day 1 to bring them on Day 2." onChange={(event)=>handlecheckedata('training_anyone',event)}/>&nbsp;
                      <FormControlLabel value="Ask the women walk into the training space, check the completed book keeping activity in the financial book of the women and fill the register with answers required 
                      for the baseline data against each woman's name?" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women walk into the training space, check the completed book keeping activity in the financial book of the women and fill the register with answers required for the baseline data against each woman's name?" onChange={(event)=>handlecheckedata('training_anyone',event)}/>&nbsp;
                      <FormControlLabel value="Ask the women to sign the register before beginning the training?" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women to sign the register before beginning the training?" onChange={(event)=>handlecheckedata('training_anyone',event)}/>
                      <FormControlLabel value="Make sure all the required columns in the register are fully filled?"
                       control={<Checkbox style={{color:"#595959"}} />} label="Make sure all the required columns in the register are fully filled?" onChange={(event)=>handlecheckedata('training_anyone',event)}/>
                    
                    
                    </FormGroup>
                  </Stack>
                  <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Was the recap done? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, recap_done: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
            <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Did the recap take 15 minutes as allotted? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, recap_allotted: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
            <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="What all did you learn last week?" control={<Checkbox style={{color:"#595959"}} />} label="What all did you learn last week?" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                    <FormControlLabel value="What did we do first? What did we do next?" control={<Checkbox style={{color:"#595959"}} />} label="What did we do first? What did we do next?" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                    <FormControlLabel value="What did you learn from the story?" control={<Checkbox style={{color:"#595959"}} />} label="What did you learn from the story?" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                    <FormControlLabel value="Do you remember the drama/skit you all enacted? or 'To lead a successful life and run a successful business, is money the only thing that is required?'" control={<Checkbox style={{color:"#595959"}} />} label=" Do you remember the drama/skit you all enacted? or 'To lead a successful life and run a successful business, is money the only thing that is required?'" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                    <FormControlLabel value="Why is it important for you to plan your expenses and save?" control={<Checkbox style={{color:"#595959"}} />} label="Why is it important for you to plan your expenses and save?" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                    <FormControlLabel value="What challenges did you face in book-keeping" control={<Checkbox style={{color:"#595959"}} />} label="What challenges did you face in book-keeping" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                      <FormControlLabel value="Are there any success stories and challenges in implementing last week's learning?" control={<Checkbox style={{color:"#595959"}} />} label="Are there any success stories and challenges in implementing last week's learning?" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                      <FormControlLabel value="What did your children or family members say about this training when you shared?" control={<Checkbox style={{color:"#595959"}} />} label="What did your children or family members say about this training when you shared?" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                      <FormControlLabel value="Did you share the details of the training with anyone?WHat did they say?WHat did the children, family members say about this training when you shared it with them?" control={<Checkbox style={{color:"#595959"}} />} label="Did you share the details of the training with anyone?WHat did they say?WHat did the children, family members say about this training when you shared it with them?" onChange={(event)=>handlecheckedata('learn_story',event)}/>
                    </FormGroup>
                  </Stack>
                  &nbsp;  <hr color="#ff7424"/><br/>
                  <Typography color="primary" style={{fontWeight:700}}>Module 5 (M5) Assets and Liabilities</Typography>&nbsp;
                  <Typography>How many women attended the training session? *</Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }} type="number" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, women_attend_m5:e.target.value})} value={sendData?.women_attend_m5}/>
                </Stack> 
                <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Ask what do you need to achieve your dreams and goals" control={<Checkbox style={{color:"#595959"}} />} label="Ask what do you need to achieve your dreams and goals" onChange={(event)=>handlecheckedata('financial_status',event)}/>
                    <FormControlLabel value="Record the answer when asking - 'My goal is to reach your village. If I want to come to your village, and I call and ask you how I can get here, What will you say?'" control={<Checkbox style={{color:"#595959"}} />} 
                    label="Record the answer when asking - 'My goal is to reach your village. If I want to come to your village, and I call and ask you how I can get here, What will you say?'" onChange={(event)=>handlecheckedata('financial_status',event)}/>
                    <FormControlLabel value="Give out the correct answer if the women are not able to answer?" control={<Checkbox style={{color:"#595959"}} />} label="Give out the correct answer if the women are not able to answer?" onChange={(event)=>handlecheckedata('financial_status',event)}/>
                    <FormControlLabel value="Make the connection to their own financial status and how it shows their financial health?" control={<Checkbox style={{color:"#595959"}} />} label="Make the connection to their own financial status and how it shows their financial health?" onChange={(event)=>handlecheckedata('financial_status',event)}/>
                    <FormControlLabel value="Use the chart to give an example of assets and liabilities" control={<Checkbox style={{color:"#595959"}} />} label="Use the chart to give an example of assets and liabilities" onChange={(event)=>handlecheckedata('financial_status',event)}/>
                      <FormControlLabel value="Ask one of the women to come up to give the example of their own assets and liabilities" control={<Checkbox style={{color:"#595959"}} />} label="Ask one of the women to come up to give the example of their own assets and liabilities" onChange={(event)=>handlecheckedata('financial_status',event)}/>
                      <FormControlLabel value="Was the debrief done?" control={<Checkbox style={{color:"#595959"}} />} label="Was the debrief done?" onChange={(event)=>handlecheckedata('financial_status',event)}/>
                     
                    </FormGroup>
                  </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>During the debrief did the trainer not :</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Ask one of the women to come and volunteer to explain her own assets and liabilities?" control={<Checkbox style={{color:"#595959"}} />} label="Ask one of the women to come and volunteer to explain her own assets and liabilities?" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="If no woman volunteers,use an imaginary example of Lakshmi" control={<Checkbox style={{color:"#595959"}} />} label="If no woman volunteers,use an imaginary example of Lakshmi" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="Ask the women what they feel looking at their assets and liabilities" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women what they feel looking at their assets and liabilities" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="Clarified doubts of the women on the topic?" control={<Checkbox style={{color:"#595959"}} />} label="Clarified doubts of the women on the topic?" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="Reassured women (if distressed)" control={<Checkbox style={{color:"#595959"}} />} label="Reassured women (if distressed)" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="Congratulate those in a good position?" control={<Checkbox style={{color:"#595959"}} />} label="Congratulate those in a good position?" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="Make them aware of different interest rates from different lenders" control={<Checkbox style={{color:"#595959"}} />} label="Make them aware of different interest rates from different lenders" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="Ask the women if they feel they are using assets now to the fullest or are they remaining dormant?( More of a reflection question and need not be answered by the women)" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women if they feel they are using assets now to the fullest or are they remaining dormant?( More of a reflection question and need not be answered by the women)" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                    <FormControlLabel value="Creating self-awareness about your own thinking/behavioural patterns" control={<Checkbox style={{color:"#595959"}} />} label="Creating self-awareness about your own thinking/behavioural patterns" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                      <FormControlLabel value="Re-emphasize why it is necessary to know this: in order to set realistic and achievable goals" control={<Checkbox style={{color:"#595959"}} />} label="Re-emphasize why it is necessary to know this: in order to set realistic and achievable goals" onChange={(event)=>handlecheckedata('re_emphasize',event)}/>
                     
                     
                    </FormGroup>
                  </Stack>
                  <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Were the participants responsive during the debriefing? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, responsive_debriefing: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
            <Stack mt={1}>
                <Typography style={{fontWeight:500}}>Did any women leave the training session during or after this module? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, women_leave: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
            <Typography>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }} type="number"  label="Your Answer" variant="outlined" color="common"  onChange={(e) => setSendData({ ...sendData, many_m5:e.target.value})} value={sendData?.many_m5}/>
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did this module take 30 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                      onChange={(e, value) => { setSendData({ ...sendData, allotted_m5: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  &nbsp;  <hr color="#ff7424"/><br/>
                  <Typography color="primary" style={{fontWeight:700}}>Module 6 (M6): Goal setting game</Typography>&nbsp;
                  <Typography>How many women attended the training session? *</Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }} type="number"  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, women_attend:e.target.value})} value={sendData?.women_attend}/>
                </Stack> 
                <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Ask two or three participants to volunteer to play the game" control={<Checkbox style={{color:"#595959"}} />} label="Ask two or three participants to volunteer to play the game" onChange={(event)=>handlecheckedata('volunteer',event)}/>
                    <FormControlLabel value="Ensure the volunteer who is not playing the game, is out of earshot when relaying instructions to the volunteer who is playing first" control={<Checkbox style={{color:"#595959"}} />} label="Ensure the volunteer who is not playing the game, is out of earshot when relaying instructions to the volunteer who is playing first" onChange={(event)=>handlecheckedata('volunteer',event)}/>
                    <FormControlLabel value="Give instructions step by step with all constraints added, to the first volunteer, records her goal (for the blocks) and blindfolds her before she begins" control={<Checkbox style={{color:"#595959"}} />} label="Give instructions step by step with all constraints added, to the first volunteer, records her goal (for the blocks) and blindfolds her before she begins" onChange={(event)=>handlecheckedata('volunteer',event)}/>
                  
                    </FormGroup>
                  </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>Check which instructions the trainer did not give:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Here are wooden blocks. You have to arrange them on top of each other" control={<Checkbox style={{color:"#595959"}} />} label="Here are wooden blocks. You have to arrange them on top of each other" onChange={(event)=>handlecheckedata('wooden_blocks',event)}/>
                    <FormControlLabel value="How many blocks will you arrange? You have to give a specific number. [they have to specify a number - record this]" control={<Checkbox style={{color:"#595959"}} />} label="How many blocks will you arrange? You have to give a specific number. [they have to specify a number - record this]" onChange={(event)=>handlecheckedata('wooden_blocks',event)}/>
                    <FormControlLabel value="Which hand will you use?" control={<Checkbox style={{color:"#595959"}} />} label="Which hand will you use?" onChange={(event)=>handlecheckedata('wooden_blocks',event)}/>
                    <FormControlLabel value="Here is a constraint - you cannot use that hand, use the other hand. How many will you arrange?" control={<Checkbox style={{color:"#595959"}} />} label="Here is a constraint - you cannot use that hand, use the other hand. How many will you arrange?" onChange={(event)=>handlecheckedata('wooden_blocks',event)}/>
                    <FormControlLabel value="Here is another constrint - I will bindfold you. How many will you arrange?" control={<Checkbox style={{color:"#595959"}} />} label="Here is another constrint - I will bindfold you. How many will you arrange?" onChange={(event)=>handlecheckedata('wooden_blocks',event)}/>
                      <FormControlLabel value="If you pick one block you have place it on top of what you have already arranged, you cannot put it back in the bowl" control={<Checkbox style={{color:"#595959"}} />} label="If you pick one block you have place it on top of what you have already arranged, you cannot put it back in the bowl" onChange={(event)=>handlecheckedata('wooden_blocks',event)}/>
                      <FormControlLabel value="If the stack falls, the game is over" control={<Checkbox style={{color:"#595959"}} />} label="If the stack falls, the game is over" onChange={(event)=>handlecheckedata('wooden_blocks',event)}/>
                     
                    </FormGroup>
                  </Stack>
                  <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Repeat the activity with the second voluneer? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, second_volunteer: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>During the debrief did the trainer not ask:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="What did you see here?" control={<Checkbox style={{color:"#595959"}} />} label="What did you see here?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="Why was it important for A/B to set a goal(to arrange blocks)?" control={<Checkbox style={{color:"#595959"}} />} label="Why was it important for A/B to set a goal(to arrange blocks)?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="Why do you think A/B reached her goal/did not reach her goal?" control={<Checkbox style={{color:"#595959"}} />} label="Why do you think A/B reached her goal/did not reach her goal?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="What external challenges did A/B face while playing the game?" control={<Checkbox style={{color:"#595959"}} />} label="What external challenges did A/B face while playing the game?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="What kind of external challenges will you face in real life while setting goals?" control={<Checkbox style={{color:"#595959"}} />} label="What kind of external challenges will you face in real life while setting goals?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="Isn't life like this game? There are constraints in life as well. What will you do?" control={<Checkbox style={{color:"#595959"}} />} label="Isn't life like this game? There are constraints in life as well. What will you do?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="What qualities and skills do you need to reach your goals?" control={<Checkbox style={{color:"#595959"}} />} label="What qualities and skills do you need to reach your goals?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="Confidence ( overconfidence,under confidence), decision making, planning (Always give a number to the goal)" control={<Checkbox style={{color:"#595959"}} />} label="Confidence ( overconfidence,under confidence), decision making, planning (Always give a number to the goal)" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                    <FormControlLabel value="Creating self-awareness about your own thinking/behavioural patterns" control={<Checkbox style={{color:"#595959"}} />} label="Creating self-awareness about your own thinking/behavioural patterns" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                      <FormControlLabel value="Did you see how goals shift with different constraints in life" control={<Checkbox style={{color:"#595959"}} />} label="Did you see how goals shift with different constraints in life" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                      <FormControlLabel value="There is support even if you have constrints, are you aware of that? Can you seek it?" control={<Checkbox style={{color:"#595959"}} />} label="There is support even if you have constrints, are you aware of that? Can you seek it?" onChange={(event)=>handlecheckedata('external_challenges',event)}/>
                     
                    </FormGroup>
                  </Stack>
                  <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Were the participants responsive during the debriefing? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, participants_responsive: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
                  <Stack mt={1}>
                <Typography style={{fontWeight:500}}>Did any women leave the training session during or after this module? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, leave_training: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
                <Typography>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }} type="number"  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, many_m6:e.target.value})} value={sendData?.many_m6}/>
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did this module take 30 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, allotted_m6:value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  &nbsp;  <hr color="#ff7424"/><br/>
                  <Typography color="primary" style={{fontWeight:700}}>Module 7 (M7): Financial goals</Typography>&nbsp;
                  <Typography>How many women attended the training session? *</Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }} type="number"  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, women_attended_m7:e.target.value})} value={sendData?.women_attended_m7}/>
                </Stack> 
                  <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="Ask what the difference between a dream and a goal is?" control={<Checkbox style={{color:"#595959"}} />} label="Ask what the difference between a dream and a goal is?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                      <FormControlLabel value="Record the answer?" control={<Checkbox style={{color:"#595959"}} />} label="Record the answer?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                      <FormControlLabel value="Give an example?" control={<Checkbox style={{color:"#595959"}} />} label="Give an example?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                      <FormControlLabel value="Tell the participants the difference between dream and goal?" 
                      control={<Checkbox style={{color:"#595959"}} />} label="Tell the participants the difference between dream and goal?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                    <FormControlLabel value="Ask how a dream can be converted into a goal?" control={<Checkbox style={{color:"#595959"}} />} label="Ask how a dream can be converted into a goal?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                    <FormControlLabel value="Ask for one volunteer who is willing to come forward and ask them to chart their financial goal on the board?" control={<Checkbox style={{color:"#595959"}} />} label="Ask for one volunteer who is willing to come forward and ask them to chart their financial goal on the board?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                    
                    <FormControlLabel value="If no volunteer comes up use Lakshmi's goal of buying a push cart for her vegetable business as an example?" control={<Checkbox style={{color:"#595959"}} />} label="If no volunteer comes up use Lakshmi's goal of buying a push cart for her vegetable business as an example?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                    <FormControlLabel value="Use the chart given to explain?" control={<Checkbox style={{color:"#595959"}} />} label="Use the chart given to explain?" onChange={(event)=>handlecheckedata('chart_given_m7',event)}/>
                      </FormGroup>
                  </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>Did the trainer not ask?</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="What is your goal?" control={<Checkbox style={{color:"#595959"}} />} label="What is your goal?" onChange={(event)=>handlecheckedata('save_goal',event)}/>
                    <FormControlLabel value="How much will it cost?" control={<Checkbox style={{color:"#595959"}} />} label="How much will it cost?" onChange={(event)=>handlecheckedata('save_goal',event)}/>
                    <FormControlLabel value="In how many years do you want to achieve this goal?" control={<Checkbox style={{color:"#595959"}} />} label="In how many years do you want to achieve this goal?" onChange={(event)=>handlecheckedata('save_goal',event)}/>
                    <FormControlLabel value="How much loan do you want to take for it?" control={<Checkbox style={{color:"#595959"}} />} label="How much loan do you want to take for it?" onChange={(event)=>handlecheckedata('save_goal',event)}/>
                      <FormControlLabel value="Do you know where you will take a loan from?" control={<Checkbox style={{color:"#595959"}} />} label="Do you know where you will take a loan from?" onChange={(event)=>handlecheckedata('save_goal',event)}/>
                      <FormControlLabel value="How much will you save for the goal?" control={<Checkbox style={{color:"#595959"}} />} label="How much will you save for the goal?" onChange={(event)=>handlecheckedata('save_goal',event)}/>
                     
                    </FormGroup>
                  </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>Did the trainer not do:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Made sure that this was done in the books given to the participants and they write it in the book themselves or with the help of someone else" 
                    control={<Checkbox style={{color:"#595959"}} />} label="Made sure that this was done in the books given to the participants and they write it in the book themselves or with the help of someone else" onChange={(event)=>handlecheckedata('financial_goal_m7',event)}/>
                    <FormControlLabel value="Break down financial goal into yearly,monthly,weekly,daily money-saving goals?" control={<Checkbox style={{color:"#595959"}} />} label="Break down financial goal into yearly,monthly,weekly,daily money-saving goals?" onChange={(event)=>handlecheckedata('financial_goal_m7',event)}/>
                    <FormControlLabel value="Ask do you think you will be able to save this much for this particular goal apart from your daily expenses and other obligations?" control={<Checkbox style={{color:"#595959"}} />} label="Ask do you think you will be able to save this much for this particular goal apart from your daily expenses and other obligations?" onChange={(event)=>handlecheckedata('financial_goal_m7',event)}/>
                      <FormControlLabel value="If women respond yes to above, congratulate the women for setting their goals and motivate her to start the process?" control={<Checkbox style={{color:"#595959"}} />} label="If women respond yes to above, congratulate the women for setting their goals and motivate her to start the process?"
                       onChange={(event)=>handlecheckedata('financial_goal_m7',event)}/>
                      <FormControlLabel value="If no,ask can you increase the number of years in which you want to achieve this goal or can yo increase your income to be able to save more or can you take more of the loan for the goal?" control={<Checkbox style={{color:"#595959"}} />} label="If no,ask can you increase the number of years in which you want to achieve this goal or can yo increase your income to be able to save more or can you take more of the loan for the goal?" onChange={(event)=>handlecheckedata('financial_goal_m7',event)}/>
                      <FormControlLabel value="Go around the group and help all participants set a financial goal. Goal = time + money + financial plan?" control={<Checkbox style={{color:"#595959"}} />} label="Go around the group and help all participants set a financial goal. Goal = time + money + financial plan?" onChange={(event)=>handlecheckedata('financial_goal_m7',event)}/>
                    </FormGroup>
                  </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>During the debrief did the trainer not ask:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Does your goal look realistic to you?" control={<Checkbox style={{color:"#595959"}} />} label="Does your goal look realistic to you?" onChange={(event)=>handlecheckedata('increase_income',event)}/>
                    <FormControlLabel value="Do you have more than one goal to achieve? Are they of equal priority or can you postpone one to achieve the other?" control={<Checkbox style={{color:"#595959"}} />} label="Do you have more than one goal to achieve? Are they of equal priority or can you postpone one to achieve the other?" onChange={(event)=>handlecheckedata('increase_income',event)}/>
                    <FormControlLabel value="What can you do if both goals are priority for you?" control={<Checkbox style={{color:"#595959"}} />} label="What can you do if both goals are priority for you?" onChange={(event)=>handlecheckedata('increase_income',event)}/>
                      <FormControlLabel value="Can you increase your savings or your income?" control={<Checkbox style={{color:"#595959"}} />} label="Can you increase your savings or your income?" onChange={(event)=>handlecheckedata('increase_income',event)}/>
                      <FormControlLabel value="Can you increase the time frame to reach the goal?" control={<Checkbox style={{color:"#595959"}} />} label="Can you increase the time frame to reach the goal?" onChange={(event)=>handlecheckedata('increase_income',event)}/>
                    </FormGroup>
                  </Stack>
             <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Were the participants responsive during the debriefing? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, participants_m7: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
            <Stack mt={1}>
                <Typography style={{fontWeight:500}}>Did any women leave the training session during or after this module? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, leave_training_m7: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>
                <Typography>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }} type="number"  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, many_m7:e.target.value})} value={sendData?.many_m7}/>
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did this module take 30 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, allotted_m7: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
&nbsp;  <hr color="#ff7424"/><br/>
  <Typography color="primary" style={{fontWeight:700}}>Module 8 (M8): Loans - group discussion of case studies</Typography>&nbsp;
  <Typography>How many women attended the training session? *</Typography>
                <Stack mt={2} mb={2}>
                    <TextField required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, women_attended_m8:e.target.value})} value={sendData?.women_attended_m8}/>
                </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="Make 4 groups from the entire cohort of participants?" control={<Checkbox style={{color:"#595959"}} />} label="Make 4 groups from the entire cohort of participants?" onChange={(event)=>handlecheckedata('cohort_participants',event)}/>
                      <FormControlLabel value="Give a case study to each group?" control={<Checkbox style={{color:"#595959"}} />} label="Give a case study to each group?" onChange={(event)=>handlecheckedata('cohort_participants',event)}/>
                      <FormControlLabel value="Instructs groups to read the case study among themselves and come up with solutions in 3-5 minutes." control={<Checkbox style={{color:"#595959"}} />} label="Instructs groups to read the case study among themselves and come up with solutions in 3-5 minutes." onChange={(event)=>handlecheckedata('cohort_participants',event)}/>
                      <FormControlLabel value="Made sure that the impression given was not of that loans are not necessary.They are important but to know the source of the loan, own credibility, credit worthiness, creadit utilization and repayment strategy." 
                      control={<Checkbox style={{color:"#595959"}} />} label="Made sure that the impression given was not of that loans are not necessary.They are important but to know the source of the loan, own credibility, credit worthiness, creadit utilization and repayment strategy." onChange={(event)=>handlecheckedata('cohort_participants',event)}/>
                    
                    
                    </FormGroup>
                  </Stack>
                  <Typography  mt={2} style={{fontWeight:700}}>During the debrief did the trainer not ask:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="What was your group's story or case study about?" control={<Checkbox style={{color:"#595959"}} />} label="What was your group's story or case study about?" onChange={(event)=>handlecheckedata('productive_loans',event)}/>
                      <FormControlLabel value="How much does that person need?" control={<Checkbox style={{color:"#595959"}} />} label="How much does that person need?" onChange={(event)=>handlecheckedata('productive_loans',event)}/>
                      <FormControlLabel value="How much do they have in their hand as saving or earning?" control={<Checkbox style={{color:"#595959"}} />} label="How much do they have in their hand as saving or earning?" onChange={(event)=>handlecheckedata('productive_loans',event)}/>
                      <FormControlLabel value="What advice would you give that person?" control={<Checkbox style={{color:"#595959"}} />} label="What advice would you give that person?" onChange={(event)=>handlecheckedata('productive_loans',event)} />
                      <FormControlLabel value="Where can you save and reach a goal?When will you need to take a loan to reach it?" control={<Checkbox style={{color:"#595959"}} />} label="Where can you save and reach a goal?When will you need to take a loan to reach it?" onChange={(event)=>handlecheckedata('productive_loans',event)}/>
                      <FormControlLabel value="Where can you get loans with minimum or no interest?" control={<Checkbox style={{color:"#595959"}} />} label="Where can you get loans with minimum or no interest?" onChange={(event)=>handlecheckedata('productive_loans',event)}/>
                      <FormControlLabel value="What are productive loans? What are consumption loans?" control={<Checkbox style={{color:"#595959"}} />} label="What are productive loans? What are consumption loans?" onChange={(event)=>handlecheckedata('productive_loans',event)}/>
                   
                   </FormGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Were the participants responsive during the debriefing? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, participants_responsive_m8: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did any women leave the training session during or after this module? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, leave_training_m8: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Typography style={{fontWeight:'500'}}>If so, how many? </Typography>
                <Stack mt={2} >
                    <TextField required inputProps={{ required: true }}  label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, many_m8:e.target.value})} value={sendData?.many_m8}/>
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did this module take 30 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, allotted_m8: value }) }}
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>&nbsp;
                  <hr color="#ff7424"/><br/>
                  <Typography style={{fontWeight:700}} color="primary">Post training on Day 2</Typography>
                  <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="Tell Buzz India wants to keep in touch with the community through the Buzz Gelathi for a continuous learning process and sustainable change" 
                      control={<Checkbox style={{color:"#595959"}} />} label="Tell Buzz India wants to keep in touch with the community through the Buzz Gelathi for a continuous learning process and sustainable change" onChange={(event)=>handlecheckedata('women_decision',event)}/>
                      <FormControlLabel value="Ask for nomination of the Buzz Gelathi amongst the group" control={<Checkbox style={{color:"#595959"}} />} label="Ask for nomination of the Buzz Gelathi amongst the group" onChange={(event)=>handlecheckedata('women_decision',event)}/>
                      <FormControlLabel value="Made clear that a woman can nominate herslef too" control={<Checkbox style={{color:"#595959"}} />} label="Made clear that a woman can nominate herslef too" onChange={(event)=>handlecheckedata('women_decision',event)}/>
                      <FormControlLabel value="Respect a woman's decision to not be a Gelathi" control={<Checkbox style={{color:"#595959"}} />} label="Respect a woman's decision to not be a Gelathi" onChange={(event)=>handlecheckedata('women_decision',event)}/>
                      <FormControlLabel value="Thank for the group for being a wonderful audience" control={<Checkbox style={{color:"#595959"}} />} label="Thank for the group for being a wonderful audience" onChange={(event)=>handlecheckedata('women_decision',event)}/>
                      
                   
                   </FormGroup>
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