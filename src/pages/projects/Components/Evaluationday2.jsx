import React from 'react';

import Iconify from '../../../components/Iconify';
import { Icon } from '@iconify/react';
import { Stack,IconButton,Button, DialogContent,DialogContentText,TextField,Grid,Typography , Radio,FormControlLabel,Card,CardContent,FormGroup,Checkbox} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Evaluationday2()
{
    const [open, setOpen] = React.useState(false);
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
      <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
          Program Evaluation Day 2
          </Typography>


          {/* <Button autoFocus edge="end" color="inherit" onClick={() => vyaparformdata()}>
          <Iconify icon="material-symbols:save" width={30} height={30} />
          </Button>
        */}
         
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
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack> 

                <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="One day before the training, follow up with the Anganwadi teacher. Request her to remind the participants who did not furnish their Voter ID cards on Day 1 to bring them on Day 2." control={<Checkbox style={{color:"#595959"}} />} label="One day before the training, follow up with the Anganwadi teacher. Request her to remind the participants who did not furnish their Voter ID cards on Day 1 to bring them on Day 2."/>
                      <FormControlLabel value="Ask the women walk into the training space, check the completed book keeping activity in the financial book of the women and fill the register with answers required for the baseline data against each woman's name?" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women walk into the training space, check the completed book keeping activity in the financial book of the women and fill the register with answers required for the baseline data against each woman's name?"/>
                      <FormControlLabel value="Ask the women to sign the register before beginning the training?" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women to sign the register before beginning the training?"/>
                      <FormControlLabel value="Make sure all the required columns in the register are fully filled?"
                       control={<Checkbox style={{color:"#595959"}} />} label="Make sure all the required columns in the register are fully filled?"/>
                    
                    
                    </FormGroup>
                  </Stack>
                  <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Was the recap done? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                  
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
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack> 


                  <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Here are wooden blocks. You have to arrange them on top of each other" control={<Checkbox style={{color:"#595959"}} />} label="Here are wooden blocks. You have to arrange them on top of each other"/>
                    <FormControlLabel value="How many blocks will you arrange? You have to give a specific number. [they have to specify a number - record this]" control={<Checkbox style={{color:"#595959"}} />} label="How many blocks will you arrange? You have to give a specific number. [they have to specify a number - record this]"/>
                    <FormControlLabel value="Which hand will you use?" control={<Checkbox style={{color:"#595959"}} />} label="Which hand will you use?"/>
                    <FormControlLabel value="Here is a constraint - you cannot use that hand, use the other hand. How many will you arrange?" control={<Checkbox style={{color:"#595959"}} />} label="Here is a constraint - you cannot use that hand, use the other hand. How many will you arrange?"/>
                    <FormControlLabel value="Here is another constrint - I will bindfold you. How many will you arrange?" control={<Checkbox style={{color:"#595959"}} />} label="Here is another constrint - I will bindfold you. How many will you arrange?"/>
                      <FormControlLabel value="If you pick one block you have place it on top of what you have already arranged, you cannot put it back in the bowl" control={<Checkbox style={{color:"#595959"}} />} label="If you pick one block you have place it on top of what you have already arranged, you cannot put it back in the bowl"/>
                      <FormControlLabel value="If the stack falls, the game is over" control={<Checkbox style={{color:"#595959"}} />} label="If the stack falls, the game is over"/>
                     
                    </FormGroup>
                  </Stack>


                  <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Repeat the activity with the second voluneer? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                  
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
                    <FormControlLabel value="What did you see here?" control={<Checkbox style={{color:"#595959"}} />} label="What did you see here?"/>
                    <FormControlLabel value="Why was it important for A/B to set a goal(to arrange blocks)?" control={<Checkbox style={{color:"#595959"}} />} label="Why was it important for A/B to set a goal(to arrange blocks)?"/>
                    <FormControlLabel value="Why do you think A/B reached her goal/did not reach her goal?" control={<Checkbox style={{color:"#595959"}} />} label="Why do you think A/B reached her goal/did not reach her goal?"/>
                    <FormControlLabel value="What external challenges did A/B face while playing the game?" control={<Checkbox style={{color:"#595959"}} />} label="What external challenges did A/B face while playing the game?"/>
                    <FormControlLabel value="What kind of external challenges will you face in real life while setting goals?" control={<Checkbox style={{color:"#595959"}} />} label="What kind of external challenges will you face in real life while setting goals?"/>
                    <FormControlLabel value="Isn't life like this game? There are constraints in life as well. What will you do?" control={<Checkbox style={{color:"#595959"}} />} label="Isn't life like this game? There are constraints in life as well. What will you do?"/>
                    <FormControlLabel value="What qualities and skills do you need to reach your goals?" control={<Checkbox style={{color:"#595959"}} />} label="What qualities and skills do you need to reach your goals?"/>
                    <FormControlLabel value="Confidence ( overconfidence,under confidence), decision making, planning (Always give a number to the goal)" control={<Checkbox style={{color:"#595959"}} />} label="Confidence ( overconfidence,under confidence), decision making, planning (Always give a number to the goal)"/>
                    <FormControlLabel value="Creating self-awareness about your own thinking/behavioural patterns" control={<Checkbox style={{color:"#595959"}} />} label="Creating self-awareness about your own thinking/behavioural patterns"/>
                      <FormControlLabel value="Did you see how goals shift with different constraints in life" control={<Checkbox style={{color:"#595959"}} />} label="Did you see how goals shift with different constraints in life"/>
                      <FormControlLabel value="There is support even if you have constrints, are you aware of that? Can you seek it?" control={<Checkbox style={{color:"#595959"}} />} label="There is support even if you have constrints, are you aware of that? Can you seek it?"/>
                     
                    </FormGroup>
                  </Stack>



                  <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Were the participants responsive during the debriefing? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                  
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
                  
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>

                <Typography>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>

                <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did this module take 30 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                  
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
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack> 

                  <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="Ask what the difference between a dream and a goal is?" control={<Checkbox style={{color:"#595959"}} />} label="Ask what the difference between a dream and a goal is?"/>
                      <FormControlLabel value="Record the answer?" control={<Checkbox style={{color:"#595959"}} />} label="Record the answer?"/>
                      <FormControlLabel value="Give an example?" control={<Checkbox style={{color:"#595959"}} />} label="Give an example?"/>
                      <FormControlLabel value="Tell the participants the difference between dream and goal?" 
                      control={<Checkbox style={{color:"#595959"}} />} label="Tell the participants the difference between dream and goal?"/>
                    <FormControlLabel value="Ask how a dream can be converted into a goal?" control={<Checkbox style={{color:"#595959"}} />} label="Ask how a dream can be converted into a goal?"/>
                    <FormControlLabel value="Ask for one volunteer who is willing to come forward and ask them to chart their financial goal on the board?" control={<Checkbox style={{color:"#595959"}} />} label="Ask for one volunteer who is willing to come forward and ask them to chart their financial goal on the board?"/>
                    
                    <FormControlLabel value="If no volunteer comes up use Lakshmi's goal of buying a push cart for her vegetable business as an example?" control={<Checkbox style={{color:"#595959"}} />} label="If no volunteer comes up use Lakshmi's goal of buying a push cart for her vegetable business as an example?"/>
                    <FormControlLabel value="Use the chart given to explain?" control={<Checkbox style={{color:"#595959"}} />} label="Use the chart given to explain?"/>
                      </FormGroup>
                  </Stack>


                  <Typography  mt={2} style={{fontWeight:700}}>Did the trainer not ask?</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="What is your goal?" control={<Checkbox style={{color:"#595959"}} />} label="What is your goal?"/>
                    <FormControlLabel value="How much will it cost?" control={<Checkbox style={{color:"#595959"}} />} label="How much will it cost?"/>
                    <FormControlLabel value="In how many years do you want to achieve this goal?" control={<Checkbox style={{color:"#595959"}} />} label="In how many years do you want to achieve this goal?"/>
                      <FormControlLabel value="Do you know where you will take a loan from?" control={<Checkbox style={{color:"#595959"}} />} label="Do you know where you will take a loan from?"/>
                      <FormControlLabel value="How much will you save for the goal?" control={<Checkbox style={{color:"#595959"}} />} label="How much will you save for the goal?"/>
                     
                    </FormGroup>
                  </Stack>


                  <Typography  mt={2} style={{fontWeight:700}}>Did the trainer not do:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Made sure that this was done in the books given to the participants and they write it in the book themselves or with the help of someone else" control={<Checkbox style={{color:"#595959"}} />} label="Made sure that this was done in the books given to the participants and they write it in the book themselves or with the help of someone else"/>
                    <FormControlLabel value="Break down financial goal into yearly,monthly,weekly,daily money-saving goals?" control={<Checkbox style={{color:"#595959"}} />} label="Break down financial goal into yearly,monthly,weekly,daily money-saving goals?"/>
                    <FormControlLabel value="Ask do you think you will be able to save this much for this particular goal apart from your daily expenses and other obligations?" control={<Checkbox style={{color:"#595959"}} />} label="Ask do you think you will be able to save this much for this particular goal apart from your daily expenses and other obligations?"/>
                      <FormControlLabel value="If women respond yes to above, congratulate the women for setting their goals and motivate her to start the process?" control={<Checkbox style={{color:"#595959"}} />} label="If women respond yes to above, congratulate the women for setting their goals and motivate her to start the process?"/>
                      <FormControlLabel value="If no,ask can you increase the number of years in which you want to achieve this goal or can yo increase your income to be able to save more or can you take more of the loan for the goal?" control={<Checkbox style={{color:"#595959"}} />} label="If no,ask can you increase the number of years in which you want to achieve this goal or can yo increase your income to be able to save more or can you take more of the loan for the goal?"/>
                      <FormControlLabel value="Go around the group and help all participants set a financial goal. Goal = time + money + financial plan?" control={<Checkbox style={{color:"#595959"}} />} label="Go around the group and help all participants set a financial goal. Goal = time + money + financial plan?"/>
                    </FormGroup>
                  </Stack>


                  <Typography  mt={2} style={{fontWeight:700}}>During the debrief did the trainer not ask:</Typography>
                  <Stack >
                    <FormGroup >
                    <FormControlLabel value="Does your goal look realistic to you?" control={<Checkbox style={{color:"#595959"}} />} label="Does your goal look realistic to you?"/>
                    <FormControlLabel value="Do you have more than one goal to achieve? Are they of equal priority or can you postpone one to achieve the other?" control={<Checkbox style={{color:"#595959"}} />} label="Do you have more than one goal to achieve? Are they of equal priority or can you postpone one to achieve the other?"/>
                    <FormControlLabel value="What can you do if both goals are priority for you?" control={<Checkbox style={{color:"#595959"}} />} label="What can you do if both goals are priority for you?"/>
                      <FormControlLabel value="Can you increase your savings or your income?" control={<Checkbox style={{color:"#595959"}} />} label="Can you increase your savings or your income?"/>
                      <FormControlLabel value="Can you increase the time frame to reach the goal?" control={<Checkbox style={{color:"#595959"}} />} label="Can you increase the time frame to reach the goal?"/>
                    </FormGroup>
                  </Stack>

             <Stack mt={1}>
                <Typography style={{fontWeight:500}} >Were the participants responsive during the debriefing? *</Typography>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                  
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
                  
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
            </Stack>

                <Typography>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>

                <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did this module take 30 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                  
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
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>


                  <Typography  mt={2} style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="Make 4 groups from the entire cohort of participants?" control={<Checkbox style={{color:"#595959"}} />} label="Make 4 groups from the entire cohort of participants?"/>
                      <FormControlLabel value="Give a case study to each group?" control={<Checkbox style={{color:"#595959"}} />} label="Give a case study to each group?"/>
                      <FormControlLabel value="Instructs groups to read the case study among themselves and come up with solutions in 3-5 minutes." control={<Checkbox style={{color:"#595959"}} />} label="Instructs groups to read the case study among themselves and come up with solutions in 3-5 minutes."/>
                      <FormControlLabel value="Made sure that the impression given was not of that loans are not necessary.They are important but to know the source of the loan, own credibility, credit worthiness, creadit utilization and repayment strategy." 
                      control={<Checkbox style={{color:"#595959"}} />} label="Made sure that the impression given was not of that loans are not necessary.They are important but to know the source of the loan, own credibility, credit worthiness, creadit utilization and repayment strategy."/>
                    
                    
                    </FormGroup>
                  </Stack>

                  <Typography  mt={2} style={{fontWeight:700}}>During the debrief did the trainer not ask:</Typography>
                  <Stack>
                    <FormGroup >
                      <FormControlLabel value="What was your group's story or case study about?" control={<Checkbox style={{color:"#595959"}} />} label="What was your group's story or case study about?"/>
                      <FormControlLabel value="How much does that person need?" control={<Checkbox style={{color:"#595959"}} />} label="How much does that person need?"/>
                      <FormControlLabel value="How much do they have in their hand as saving or earning?" control={<Checkbox style={{color:"#595959"}} />} label="How much do they have in their hand as saving or earning?"/>
                      <FormControlLabel value="What advice would you give that person?" control={<Checkbox style={{color:"#595959"}} />} label="What advice would you give that person?"/>
                      <FormControlLabel value="Where can you save and reach a goal?When will you need to take a loan to reach it?" control={<Checkbox style={{color:"#595959"}} />} label="Where can you save and reach a goal?When will you need to take a loan to reach it?"/>
                      <FormControlLabel value="Where can you get loans with minimum or no interest?" control={<Checkbox style={{color:"#595959"}} />} label="Where can you get loans with minimum or no interest?"/>
                      <FormControlLabel value="What are productive loans? What are consumption loans?" control={<Checkbox style={{color:"#595959"}} />} label="What are productive loans? What are consumption loans?"/>
                   
                   </FormGroup>
                  </Stack>

                  <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Were the participants responsive during the debriefing? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
                  
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
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                  </Stack>
                  <Typography style={{fontWeight:'500'}}>If so, how many? </Typography>
                <Stack mt={2} >
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:500}}>Did this module take 30 minutes as allotted? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                  
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
                      <FormControlLabel value="Tell Buzz India wants to keep in touch with the community through the Buzz Gelathi for a continuous learning process and sustainable change" control={<Checkbox style={{color:"#595959"}} />} label="Tell Buzz India wants to keep in touch with the community through the Buzz Gelathi for a continuous learning process and sustainable change"/>
                      <FormControlLabel value="Ask for nomination of the Buzz Gelathi amongst the group" control={<Checkbox style={{color:"#595959"}} />} label="Ask for nomination of the Buzz Gelathi amongst the group"/>
                      <FormControlLabel value="Made clear that a woman can nominate herslef too" control={<Checkbox style={{color:"#595959"}} />} label="Made clear that a woman can nominate herslef too"/>
                      <FormControlLabel value="Respect a woman's decision to not be a Gelathi" control={<Checkbox style={{color:"#595959"}} />} label="Respect a woman's decision to not be a Gelathi"/>
                      <FormControlLabel value="Thank for the group for being a wonderful audience" control={<Checkbox style={{color:"#595959"}} />} label="Thank for the group for being a wonderful audience"/>
                      
                   
                   </FormGroup>
                  </Stack>

                </CardContent>
        </Card>
        
        </Grid>
        </DialogContentText>
        </DialogContent>
      </Dialog>
         </div>
        
    )
}