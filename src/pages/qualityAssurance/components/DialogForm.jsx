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
              Quality Assurance Form
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid>
          <Card>
            <CardContent>
              <Stack>
                <Typography mt={3} variant="h6" color="primary">Percentage of Women With increased Self Esteem </Typography>
              </Stack>
              <Stack>
                <Typography mt={2} variant="body2">1. Email</Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack> 
                </Stack>
              <Stack>
                <Typography variant="body2">2. Name of the Assessor</Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>  
              </Stack><br/>
              <Stack>
                <Typography variant="body2">3. Date of the evaluation of the training/meeting</Typography>
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
             
          &nbsp;
              <Stack>
                <Typography mt={3} variant="h6" color="primary">
                  Number of Women Work Toward Their Goal and Continuosly Track It Using The Buzz Self Assessment Tools Women
                  Who Have Goal
                </Typography>
              </Stack>
              <Stack mt={2}>
                <Typography>
                  4. Program Assessment
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Self Shakti Training Program"  control={<Checkbox />} label="Self Shakti Training Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Gelathi Program" control={<Checkbox />} label="Gelathi Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Self Shakti by Gelathi" control={<Checkbox />} label="Self Shakti by Gelathi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Green Program" control={<Checkbox />} label="Green Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Vyapar Program" control={<Checkbox />} label="Vyapar Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography>
                  5. Name of the District
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
              <Stack mt={2}>
                <Typography>
                  6. Name of the Taluk
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
              </Stack> <br />
              <Stack>
                <Typography variant="body2">7. Name of the village and the venue of meeting/training</Typography>
                <Stack mt={2} mb={2}>
                    <TextField  label="Your Answer" variant="outlined" color="common" />
                </Stack>  
              </Stack><br/>      
              <hr/>
              <Stack>
               &nbsp; <Typography style={{fontWeight:500}} color="primary">
                 <b>Self-Shakti </b>
                </Typography>
              </Stack> <br />
              <Stack>
                <Typography variant="body2">1. Day 1 or Day 2</Typography>
                <Stack mt={2}>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, saveRegularly: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography>
                  2. Name of the trainer being evaluated
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
              </Stack> <br />

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
             &nbsp; <hr/>
              <Stack>
                <Typography  style={{fontWeight:700}} color="primary">
                  Buzz Module 1 <br />
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="body2">
                  1. How many women attended the training session?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, profitForSarees: e.target.value }) }}/>
                </Stack>
              </Stack>

              <Stack mt={2}>
                <Typography>
                  2. Check which ones the trainer did not do
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
              </Stack> <br />
              <Stack>
                <Typography variant="body1">3. Were the women interactive?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, saveRegularly: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
              <Stack>
                <Typography variant="body1">4. Did any women leave the training session during or after the first module?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, saveRegularly: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
              <Stack>
                <Typography variant="body1">
                  5. If so, How many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              <Stack>
                <Typography variant="body1">6. Did this module take 20 minutes as allotted?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, saveRegularly: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack> <hr />
              
              <Stack>
                <Typography  style={{fontWeight:700}} color="primary">Module 2 (M2) Basics of an Enterprise:</Typography>
              </Stack>
              <Stack mt={2}>
                <Typography variant="body2">1. Did any new women attend the training session during this module?</Typography>
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
              <Stack>
                <Typography variant="body1">
                  2. If so, How many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography>
                  3. Check which ones the trainer did not do
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
              <Stack mt={2}>
                <Typography>
                  4. During the debrief the trainer did: ( check the ones he/she did)
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Ask why is this important to learn?"  control={<Checkbox />} label="Ask why is this important to learn?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Ask which are the places/situations where income, profit, savings could be asked?" control={<Checkbox />} label="Ask which are the places/situations where income, profit, savings could be asked?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Clarify why this is important even if someone said that their business is already running well?" control={<Checkbox />} label="Clarify why this is important even if someone said that their business is already running well?" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
              <Stack mt={2}> 
                <Typography>5. Did any women leave the training session during or after the first module?</Typography>
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
              <Stack>
                <Typography variant="body1">
                  6. If so, How many?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography>7. Did this module take 20 minutes as allotted?</Typography>
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
              <Stack mt={2}>
                <Typography>4. Do You Have A Loan?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, haveLoan: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography>5. In Whose Name Is the Loan ?</Typography>
                <Stack mt={2}>
                 
                  <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, loanOnWhoseName: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography>
                  6. What Are All the Places That You Have Ever Borrowed Money Or Taken Out Loan From ?
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Government Bank"  control={<Checkbox />} label="Goverment Bank" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Private Bank" control={<Checkbox />} label="Private Bank" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Loacl MFI" control={<Checkbox />} label="Local MFI" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="SHG Group" control={<Checkbox />} label="SHG Group" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Money Lender" control={<Checkbox />} label="Money Lender" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Middleman / Trader" control={<Checkbox />} label="Middleman / Trader" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Agro-Processors" control={<Checkbox />} label="Agro-Processors" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Parents" control={<Checkbox />} label="Parents" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Relatives" control={<Checkbox />} label="Relatives" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Neighbours" control={<Checkbox />} label="Neighbours" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Friends" control={<Checkbox />} label="Friends" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Social Welfare Department" control={<Checkbox />} label="Social Welfare Department" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Co-operatives" control={<Checkbox />} label="Co-operatives" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                    <FormControlLabel value="Others" control={<Checkbox />} label="Others" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography>
                  7. What Is The Reason To  Borrow A Loan ?
                </Typography>
                <Stack mt={2}>
                  <FormGroup>
                    <FormControlLabel value="Start/Expand Own Income Generation City" control={<Checkbox />} label="Start/Expand Own Income Generation City" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Start/Expand Husband's Or His Family Income Generation Activity" control={<Checkbox />} label="Start/Expand Husband's Or His Family Income Generation Activity" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Education (own)" control={<Checkbox />} label="Education (Own)" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Pay for Future employment" control={<Checkbox />} label="Pay For Future Employment " onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Own Marriage" control={<Checkbox />} label="Own Marriage" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Brother/Sister's marriage" control={<Checkbox />} label="Brother/Sister's  Marriage" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Personal Expenses" control={<Checkbox />} label="Personal Expenses" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Household use" control={<Checkbox />} label="Household Use" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="House Repair" control={<Checkbox />} label="House Repair" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Medicine / Hospitalization" control={<Checkbox />} label="Medicine / Hospitalization" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                    <FormControlLabel value="Festival" control={<Checkbox />} label="Festival" onChange={(event)=>handlecheckedata('loanborrow',event)} />
                    <FormControlLabel value="Others" control={<Checkbox />} label="Others" onChange={(event)=>handlecheckedata('loanborrow',event)}/>
                  </FormGroup>
                </Stack>
              </Stack>
              <Stack>
                <Typography  style={{fontWeight:700}} color="primary">
                  Number Of Women With A Financial Plan For Next 1 Year
                </Typography>
                <Typography variant="body2">
                  1. Do You Have A Specific Goal That You Are Saving Up For ?
                </Typography>

                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, specificGoalForSavings: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
                <Typography>
                  2. How Much Do You Need To Save Up To Achieve This Goal  ?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, howMuchSaveToAchieve
                    : e.target.value }) }} />
                </Stack>
              </Stack>
              <Stack>
                <Typography style={{fontWeight:700}} color="primary">Number Of Women Who Actively Participate In HouseHold Financial Decison Making  </Typography>
              </Stack>
              <Stack>
                <Typography variant="body2"> 1. Who Takes the Majority of Decisons From the Following Household?</Typography>
              </Stack>
              <Stack>
                <Typography mt={2}> Education</Typography>
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
                    <MenuItem value="Husband">Husband</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                
                  </Select>
                </Stack>
                <Typography mt={2}> Access To HealthCare </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                   
                  >
                 <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Husband">Husband</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                </Stack>
                <Typography mt={2}>  Access To Credit </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                 
                   
                  >
                   <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Husband">Husband</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                </Stack>
                <Typography mt={2}> Saving Money </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                   
                  >
                  <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Husband">Husband</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                </Stack>
                <Typography mt={2}> Asset Purchase </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                   
                  >
                    <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Husband">Husband</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                </Stack>
                <Typography mt={2}> Day To Day Expenditure  </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
                 
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                   
                  >
                 <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Husband">Husband</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem  value="Both">Both</MenuItem>
                  </Select>
                </Stack>
                <Typography mt={2}> Livelihood </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                  >
                <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Husband">Husband</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                </Stack>
              </Stack>
              <Stack>
                <Typography  style={{fontWeight:700}} color="primary">Number Of Women Who Finds Solution In Beehive Sessions</Typography>

                <Typography variant="body2">1. Do You See yourself as a part of a community?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, partOfCollective: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>

                <Stack mt={2}>
                <Typography  style={{fontWeight:700}} color="primary">Number of women who believe that she has a social capital in the community</Typography>
                <Typography> 1. It Is Important For Woman To Come Together And Share Their Everyday Challenges And Problems </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
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
                    <MenuItem value="Strongly_Disagree">Strongly Disagree</MenuItem>
                  </Select>
                </Stack></Stack>
                <Typography mt={2}>2. I Have A Woman In  My Community Whom I Share My Learnings And Problems , Solution With  </Typography>
                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Answer</InputLabel>
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
                    <MenuItem value="Strongly_Disagree">Strongly Disagree</MenuItem>
                  </Select>
                </Stack>
              </Stack>
              <Stack>
                <Typography mt={2}  style={{fontWeight:700}} color="primary">Other Requirements</Typography>
                <Typography mt={2} variant="body2">Are You Maintaining the household Books Of Accounts</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, household_books_accounts: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
                <Typography mt={2} variant="body2">Are You Maintaining the Books Of Accounts For Self Enterprise</Typography>
                <Stack mt={2} mb={5}>
                  {/* <div>
                    <Radio
                      checked={selectedValue === 'Yes'}
                      onChange={handleChange}
                      value="Yes"
                      name="radio-buttons"
                      label="Yes"
                      inputProps={{ 'aria-label': 'Yes' }}
                    />
                    <Radio
                      checked={selectedValue === 'No'}
                      onChange={handleChange}
                      value="No"
                      name="radio-buttons"
                      label="No"
                      inputProps={{ 'aria-label': 'No' }}
                    />
                  </div> */}
                  <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, accounts_for_Self_Enterprises: value }) }}
                  
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
      </Dialog>
    </div>
  );
}