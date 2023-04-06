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
                <Typography mt={3} variant="h6" color="primary">% of Women With increased Self Esteem </Typography>
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
                <Typography style={{fontWeight:500}} color="primary">
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
              <Stack>
                <Typography variant="body2">1. Do you have a goal? what is it ?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, haveGoal: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
              {/* <Stack mt={2} mb={2}>
                <TextField id="Correct Answer" label="Correct Answer" variant="outlined" />
              </Stack> */}
              <Stack>
                <Typography variant="body2">2. Is there a pathway to that goal ?</Typography>
                <Stack mt={2}>
                <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      onChange={(e, value) => { setSendData({ ...sendData, pathwayToGoal: value }) }}
                  
                    >
                    <div style={{display:"flex"}}>
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      </div>
                    </RadioGroup>
                </Stack>
              </Stack>
              <hr/>
              <Stack>
               &nbsp; <Typography style={{fontWeight:500}} color="primary">
                  Number of women who believe they can find solutions through self initiative
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="body2">1. I look at problems and get disheartened</Typography>
                <Stack mt={2}>
                <InputLabel variant="standard" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select 
                    fullWidth variant='standard' color='common'
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
              <Stack>
             &nbsp;   <Typography variant="body2">2. I take problem and attempt to think about solutions for it ?</Typography>
                <Stack mt={2}>
                <InputLabel variant="standard" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select
                    fullWidth variant='standard' color='common'
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
              <Stack>
               <Typography variant="body2">
                  3. Once I Choose A Solution I Make An Implementation Plan For It ?
                  <Stack mt={2}>
                  <InputLabel variant="standard" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select
                    fullWidth variant='standard' color='common'
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
                </Typography>&nbsp;
              </Stack>
              <Stack>
                <Typography variant="body2">4. I Look A Solution Since I Don't Have An Choice?</Typography>
                <Stack mt={2}>
                <InputLabel variant="standard" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select
                    fullWidth variant='standard' color='common'
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
             &nbsp; <hr/>
              <Stack>
                <Typography  style={{fontWeight:700}} color="primary">
                  Number of Women With Basic Financial Management Knowledge On Income Vs Expenditure , Book Keeping etc
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="body2">
                  1. If You Invest Rs 10,000 as Capital In Saree Buisness For 20 Saree . You Spend Rs 100 to Transport the
                  Saree from the Wholesale to your Village . If You Sell All The Saree In For Rs 12,000 , How Much Profit
                  You Have Made.
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, profitForSarees: e.target.value }) }}/>
                </Stack>
              </Stack>
              <Stack>
                <Typography variant="body2">
                  2. You Have Taken A Loan Of Rs 10,000 To be Paid Back In Equally Monthly Payments In One Year And You Have
                  To Pay Back Rs 1000 A Month. WHat Is The Annual Interest Rate ?
                </Typography>
                <Stack mt={3}>
                  <TextField id="Correct Answer" label="Correct Answer" variant="outlined" onChange={(e) => { setSendData({ ...sendData, annualLoanInterest: e.target.value }) }}/>
                </Stack>
              </Stack>&nbsp;<hr/>
              <Stack>
                <Typography  style={{fontWeight:700}} color="primary">
                  Number of Trained Women With Growing Savings (how much saved , frequency , regularities of savings)
                </Typography>
                <Typography variant="body2">1. Do You Save Regularly ?</Typography>
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
                <Typography variant="body1">2. Where Do You Save Up Money ? </Typography>

                <Stack mt={2}>
                <InputLabel variant="standard" id="demo-simple-select-standard-label">Answer</InputLabel>
                  <Select
                    fullWidth variant='standard' color='common'
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                  >
                   <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Bank">Bank</MenuItem>
                    <MenuItem value="MFI">MFI</MenuItem>
                    <MenuItem value="Post Office">Post Office</MenuItem>
                    <MenuItem value="None of the above">None of the above</MenuItem>
                    <MenuItem value="Others - specify">Others - specify</MenuItem>
                  </Select>
                
                </Stack>
              </Stack>
              <Stack mt={2}>
                <Typography variant="body1">3. What Is The Frequency Of Your Savings ? </Typography>

                <Stack mt={2}>
                  <InputLabel variant="standard" color="common" id="demo-simple-select-standard-label">Age</InputLabel>
                  <Select variant="standard" color="common"
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                  >
                   <MenuItem value="" style={{backgroundColor:'gray'}}>
                      <em>Select Answer</em>
                    </MenuItem>
                    <MenuItem value="Annually">Annually</MenuItem>
                    <MenuItem value="Half Yearly">Half Yearly</MenuItem>
                    <MenuItem value="Quaterly">Quaterly</MenuItem>
                    <MenuItem value="Monthly">Monthly</MenuItem>
                    <MenuItem value="Weekly">Weekly</MenuItem>
                    <MenuItem value="Daily">Daily</MenuItem>
                  </Select>
                </Stack>
              </Stack>
              <Stack>
                <Typography  style={{fontWeight:700}} color="primary">Number Of Women Who Decide On How To Handle Their Personal Finances .</Typography>
              </Stack>
              <Stack mt={2}>
                <Typography variant="body2">1. Do You Own Assets In Your Name ?</Typography>
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
              <Stack mt={2}> 
                <Typography>2. Do You Seperate Financial Assets/Savings From That of Your Husbands ?</Typography>
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
              <Stack mt={2}>
                <Typography>3. Do You Spend The Money Earned By You As You Want To?</Typography>
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