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
export default function Programevaluationday1()
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
                    <span style={{ width: "200px" }}>Program Evaluation Day 1</span>
                  </Button>
        </Stack>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
          Program Evaluation Day 1
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
        <Typography variant="h5" style={{textAlign:"center"}}>Training Quality Review Questions - Day 1</Typography>
       
        
        <Card style={{ marginTop: 10,  borderRadius: 20 }}>
                <CardContent> 
                    
                <Typography variant="h6" color="primary">Pre-Training</Typography><br/>
                  <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Explain the training schedule and intended outcomes of the training to them" control={<Checkbox style={{color:"#595959"}} />} label="Explain the training schedule and intended outcomes of the training to them"/>
                      
                    </FormGroup>
                  </Stack>
               &nbsp;<hr color="#ff7424"/><br/>

                <Typography variant="h6" color="primary">Before the training starts on Day 1</Typography><br/>
                  <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Arrange the tent and the chairs in 'u' form" control={<Checkbox style={{color:"#595959"}} />} label="Arrange the tent and the chairs in 'u' form"/>
                      <FormControlLabel value="Play the video while the participants were entering" control={<Checkbox style={{color:"#595959"}} />} label="Play the video while the participants were entering"/>
                      <FormControlLabel value="Take the signature needed for the consent" control={<Checkbox style={{color:"#595959"}} />} label="Take the signature needed for the consent"/>
                      <FormControlLabel value="Collect information for the primary Baseline Data Ledger" control={<Checkbox style={{color:"#595959"}} />} label="Collect information for the primary Baseline Data Ledger"/>
                      <FormControlLabel value="Read the consent form loudly" control={<Checkbox style={{color:"#595959"}} />} label="Read the consent form loudly"/>
                      <FormControlLabel value="Distribute the books and pencils to the partcipants with respect" control={<Checkbox style={{color:"#595959"}} />} label="Distribute the books and pencils to the partcipants with respect"/>
                      <FormControlLabel value="Express gratitude towards the Anganwadi teacher for her efforts" control={<Checkbox style={{color:"#595959"}} />} label="Express gratitude towards the Anganwadi teacher for her efforts"/>
                    </FormGroup>
                  </Stack><br/>

                <Typography variant='h6' color="primary">Module 1 (M1) Introduction to Buzz:</Typography>
                <Typography>How many women attended the training session *</Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>
                  <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Set the ground rules?" control={<Checkbox style={{color:"#595959"}} />} label="Set the ground rules?"/>
                      <FormControlLabel value="Set the expectations of the participants?" control={<Checkbox style={{color:"#595959"}} />} label="Set the expectations of the participants?"/>
                      <FormControlLabel value="Introduce Buzz India?" control={<Checkbox style={{color:"#595959"}} />} label="Introduce Buzz India?"/>
                      <FormControlLabel value="Creating a learning environment?" control={<Checkbox style={{color:"#595959"}} />} label="Creating a learning environment?"/>
                      <FormControlLabel value="Engaged with participants to build a rapport?" control={<Checkbox style={{color:"#595959"}} />} label="Engaged with participants to build a rapport?"/>
                      <FormControlLabel value="Promote trust and confidence in Buzz among participants?" control={<Checkbox style={{color:"#595959"}} />} label="Promote trust and confidence in Buzz among participants?"/>
                      <FormControlLabel value="Introduce himself?" control={<Checkbox style={{color:"#595959"}} />} label="Introduce himself?"/>
                      <FormControlLabel value="Ask the women to introduce themselves" control={<Checkbox style={{color:"#595959"}} />} label="Ask the women to introduce themselves"/>
                      <FormControlLabel value="Play the Buzz India video?" control={<Checkbox style={{color:"#595959"}} />} label="Play the Buzz India video?"/>
                      <FormControlLabel value="Tell the participants that this training is for everyone,and that we have multiple processes of learning there's verbal, texts, videos, pictures, songs?" control={<Checkbox style={{color:"#595959"}} />} label="Tell the participants that this training is for everyone,and that we have multiple processes of learning there's verbal, texts, videos, pictures, songs?"/>
                      <FormControlLabel value="Mention life learning is more important and it is a lifelong process and implied that this is a learning environment?" control={<Checkbox style={{color:"#595959"}} />} label="Mention life learning is more important and it is a lifelong process and implied that this is a learning environment?"/>
                      <FormControlLabel value="Sing the Buzz song along with the participants?" control={<Checkbox style={{color:"#595959"}} />} label="Sing the Buzz song along with the participants?"/>
                      <FormControlLabel value="Use the opening pitch during the introduction?" control={<Checkbox style={{color:"#595959"}} />} label="Use the opening pitch during the introduction?"/>
                      <FormControlLabel value="Explain why the Buzz India training is only for women and not men?" control={<Checkbox style={{color:"#595959"}} />} label="Explain why the Buzz India training is only for women and not men?"/>
                      <FormControlLabel value="Explain the methodology and the training content well?" control={<Checkbox style={{color:"#595959"}} />} label="Explain the methodology and the training content well?"/>
                      <FormControlLabel value="Inform the importance of the book" control={<Checkbox style={{color:"#595959"}} />} label="Inform the importance of the book"/>
                    
                    </FormGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Were the women interactive? *</Typography>
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
                    <Typography style={{fontWeight:700}}>Did any women leave the training session during or after the first module? *</Typography>
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
                  <Typography style={{fontWeight:'700'}}>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>
                <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did this module take 20 minutes as allotted? *</Typography>
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
                  <Typography variant='h6' color="primary">Module 2 (M2) Basics of an Enterprise:</Typography>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did any new women attend the training session during this module? *</Typography>
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
                  <Typography style={{fontWeight:'700'}}>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>
                <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Ask how many businesswomen and how many housewives there among the participants?" control={<Checkbox style={{color:"#595959"}} />} label="Ask how many businesswomen and how many housewives there among the participants?"/>
                      <FormControlLabel value="Ask business women what constitutes business income capital, profit, and expenditure?" control={<Checkbox style={{color:"#595959"}} />} label="Ask business women what constitutes business income capital, profit, and expenditure?"/>
                      <FormControlLabel value="Make a note of the answers on the white board" control={<Checkbox style={{color:"#595959"}} />} label="Make a note of the answers on the white board"/>
                      <FormControlLabel value="Ask housewives what constitutes household income, savings, and expenditure" control={<Checkbox style={{color:"#595959"}} />} label="Ask housewives what constitutes household income, savings, and expenditure"/>
                      <FormControlLabel value="Explain the concepts of capital, expense, profit/loss and income while using an example" control={<Checkbox style={{color:"#595959"}} />} label="Explain the concepts of capital, expense, profit/loss and income while using an example"/>
                      <FormControlLabel value="Give the formula for calclating income" control={<Checkbox style={{color:"#595959"}} />} label="Give the formula for calclating income"/>
                      <FormControlLabel value="Acknowledge/congratulate/reward those who responded correctly" control={<Checkbox style={{color:"#595959"}} />} label="Acknowledge/congratulate/reward those who responded correctly"/>
                      <FormControlLabel value="Ask a participant to come to the board to give an example of her own" control={<Checkbox style={{color:"#595959"}} />} label="Ask a participant to come to the board to give an example of her own"/>
                      <FormControlLabel value="Use the chart to explain the receipts of an enterprise?" control={<Checkbox style={{color:"#595959"}} />} label="Use the chart to explain the receipts of an enterprise?"/>
                      <FormControlLabel value="Use the chart that was relevant for the business women in the group (if milk business is more then use milk chart if other business then use that" control={<Checkbox style={{color:"#595959"}} />} label="Use the chart that was relevant for the business women in the group (if milk business is more then use milk chart if other business then use that"/>
                                      
                    </FormGroup>
                  </Stack><br/>
                  <Typography style={{fontWeight:700}}>During the debrief did the trainer:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Ask why is this important to learn?" control={<Checkbox style={{color:"#595959"}} />} label="Ask why is this important to learn?"/>
                      <FormControlLabel value="Ask which are the places/situations where income, profit, savings could be asked?" control={<Checkbox style={{color:"#595959"}} />} label="Ask which are the places/situations where income, profit, savings could be asked?"/>
                      <FormControlLabel value="Clarify why this is important even if someone said that their business is already running well?" control={<Checkbox style={{color:"#595959"}} />} label="Clarify why this is important even if someone said that their business is already running well?"/>
                   </FormGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did any women leave the training session during or after the first module? *</Typography>
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
                  <Typography style={{fontWeight:'700'}}>If so, how many? </Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>
                <Typography style={{fontWeight:700}}>Check which ones the trainer did not do:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?" control={<Checkbox style={{color:"#595959"}} />} label="Ask what are some of the elements needed, apart from money, to either become more profitable at business or to become more adept at saving or to increase your income?"/>
                      <FormControlLabel value="Ask what needs to be done to run a business more successfully or even run your life successfully?" control={<Checkbox style={{color:"#595959"}} />} label="Ask what needs to be done to run a business more successfully or even run your life successfully?"/>
                      <FormControlLabel value="Reward those who answered?" control={<Checkbox style={{color:"#595959"}} />} label="Reward those who answered?"/>
                      <FormControlLabel value="Record the answers to the questions he asked them and the discussion points?" control={<Checkbox style={{color:"#595959"}} />} label="Record the answers to the questions he asked them and the discussion points?"/>
                      <FormControlLabel value="Ask why is it necessary to communicate clearly,politely and effectively?" control={<Checkbox style={{color:"#595959"}} />} label="Ask why is it necessary to communicate clearly,politely and effectively?"/>           
                    </FormGroup>
                  </Stack><br/>

                  <Typography style={{fontWeight:700}}>During the debriefs for role plays did the trainer not ask:</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="What was the role play about?" control={<Checkbox style={{color:"#595959"}} />} label="What was the role play about?"/>
                      <FormControlLabel value="How did the protagonists behave?" control={<Checkbox style={{color:"#595959"}} />} label="How did the protagonists behave?"/>
                      <FormControlLabel value="What was the impact on customers and business?" control={<Checkbox style={{color:"#595959"}} />} label="What was the impact on customers and business?"/>
                      <FormControlLabel value="What could have been done better?" control={<Checkbox style={{color:"#595959"}} />} label="What could have been done better?"/>
                      <FormControlLabel value="Record responses for all?" control={<Checkbox style={{color:"#595959"}} />} label="Record responses for all?"/>  
                      <FormControlLabel value="What did you feel after doing the role plays?" control={<Checkbox style={{color:"#595959"}} />} label="What did you feel after doing the role plays?"/>                    
                      <FormControlLabel value="Did you see possibilities?" control={<Checkbox style={{color:"#595959"}} />} label="Did you see possibilities?"/>           
                      <FormControlLabel value="Where do you think change begins?" control={<Checkbox style={{color:"#595959"}} />} label="Where do you think change begins?"/>&nbsp;   
                      <FormControlLabel value="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well.How?What situations in real life could they be useful in?" control={<Checkbox style={{color:"#595959"}} />} label="Reflect whether these communication and relationship building aspects can be effectively used in personal life as well.How?What situations in real life could they be useful in?"/>&nbsp;      
                      <FormControlLabel value="Can you share incidents where good and bad communication affected your relationships?" control={<Checkbox style={{color:"#595959"}} />} label="Can you share incidents where good and bad communication affected your relationships?"/>&nbsp;    
                      <FormControlLabel value="Do you believe effective communication or the relationship building has an influence on your personal life and your business?How?" control={<Checkbox style={{color:"#595959"}} />} label="Do you believe effective communication or the relationship building has an influence on your personal life and your business?How?"/>           
                    </FormGroup>
                  </Stack>
                  <Stack mt={2}>
                    <Typography style={{fontWeight:700}}>Did the trainer leave the women to read the role play card themselves? *</Typography>
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
                    <Typography style={{fontWeight:700}}>Did the groups engage and interact among themselves well? *</Typography>
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
                    <Typography style={{fontWeight:700}}>Were the participants responsive during the debriefing? *</Typography>
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
                    <Typography style={{fontWeight:700}}>Did any women leave the training session during or after the first module? *</Typography>
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

                </CardContent>
        </Card>
        
        </Grid>
        </DialogContentText>
        </DialogContent>
      </Dialog>
         </div>
        
    )
}