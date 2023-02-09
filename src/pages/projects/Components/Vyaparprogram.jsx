import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Button,
  Grid,
  Stack,
  TextField,
  Select,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
  CardActionArea,
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
import { Color } from '@mui/material';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Vyaparprogram() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [age, setAge] = React.useState('');
  const [vyaapar, setVyaapar] = useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    gelathinamelist();
      // setenrolledVyaapar([{ stockname: "fist" }, { stockname: "second" }])
  }, []
  )


  const gelathinamelist= async =>{
      var data = JSON.stringify({
          "partcipantId":457065
        });
        
        var config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/getGelathiList.php',
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          setVyaapar(response?.data)
        })
        .catch(function (error) {
          console.log(error);
        });
        
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{
        '&:hover': {
          backgroundColor: '#ffd796',
          borderColor: "#ed6c02"
        },
        borderColor: "#ed6c02",
        color: "#ed6c02"
      }} >
        Survey Form
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" style={{color:"white"}}>
             Buzz Vyapar Program Baseline
         </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid>
          <Card>
     
            <CardContent>
            
            <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Name of the GF *</Typography>
                  <Stack mt={2} mb={2}>
               
              <Select color="common" label="Choose Gelathi Facilitator" variant="standard">
                  {vyaapar?.list?.map((itm)=>{
                    return(
                            <MenuItem value={itm?.id}>{itm?.first_name}</MenuItem>
                    )
                  })}
                </Select>
                  </Stack>
                </CardContent>
              </Card>
                  <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>When was survey done? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}}  />} label="Before Bootcamp1" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Before Bootcamp2" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Other" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
           
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Name of vyapari *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="vyapari name" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
               
                
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Age *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Age" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
              
                 
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Contact Number *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="phone number" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
               
               
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Village Name *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="village Name" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Name of the Cohort *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="cohort name" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>
                 
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Education</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Below 8th std" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="10th - 12th std" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Under graduate" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Post graduation" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Technical(ITI/Diploma)" />
                      <FormControlLabel value="opt6" control={<Radio style={{color:"#595959"}} />} label="No formal education" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Marital Status </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Married" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Unmarried" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Widowed" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Separated" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Divorced" />
                    
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Number of people in the household </Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="household peoplecount " label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you own a smart phone</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Sector/Type of business</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Animal husbandry" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Petty shop" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Clothes Selling" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Vegetable Vendor" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Hotel or Catering" />
                      <FormControlLabel value="opt6" control={<Radio style={{color:"#595959"}} />} label="Tailor" />
                      <FormControlLabel value="opt7" control={<Radio style={{color:"#595959"}} />} label="Beautician" />
                      <FormControlLabel value="opt8" control={<Radio style={{color:"#595959"}} />} label="Rope making" />
                      <FormControlLabel value="opt9" control={<Radio style={{color:"#595959"}} />} label="Edible oil selling" />
                      <FormControlLabel value="opt10" control={<Radio style={{color:"#595959"}} />} label="Other" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Are you proficient with written language</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Basic" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Proficient" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Competent" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Household income (Monthly)</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="income" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>
             
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Over the last month your average income</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="average income" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Your profit (last month) </Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="profit" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>How much monthly income would you like to ideally earn</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="monthlyincome" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Amount invested when the business started (approximately if they know)</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="invested amount" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Number of years the business has been operating</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Less than 1 year" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="1-3 years" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="4-6 years" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="5-8 years" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="8-10 years" />
                      <FormControlLabel value="opt6" control={<Radio style={{color:"#595959"}} />} label="more than 10 years" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>For any reason have you stopped or kept hold your business</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="reason" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>No.of hours engaged in a day for business</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="hours" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you have license for existing business</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio style={{color:"#595959"}} />} label="No" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you have license for existing business</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="I work from home" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="I have my own business space" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I share the space with husband/family member" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Why do you do business</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="business reason" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Tell us three things about as an enterpreneur</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Self Motivated" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Financial knowledge" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Hard working" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Leadership quality" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Decision maker" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Business Vision" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Market Knowledge" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Others" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Tell us three things about your role as a woman at home</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="reason" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>Business Components</Typography>
                
                </CardContent>
              </Card>
             
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Who is your customer? Describe them to us</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="customer" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Please identify parts/aspects of business</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Infrastructure" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Marketing" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Funding" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Customers" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Products/Services" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Family support" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Confidence" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Good Communication" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I know the current state of my business in terms of is it making profit, loss revenue</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              
              
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I know the current state of my business in terms of is it making profit, loss revenue</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="I maintain no accounts" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="I have rough accounts" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I have a proper accounts" />
                     
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

          
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I am confident that i can generate ideas to solve my business problems</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Tell us about one business problm you solved, how did you solve it?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="business sol" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>Business Goal</Typography>
                
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What is your business goal?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="business goal" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>
              
          
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you have a business plan to reach that goal?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I don't know" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Can you submit a business plan for your goal to us right now?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I don't know" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              
              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>SWOT Analysis</Typography>
                
                </CardContent>
              </Card>
 
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are strengths of your business?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="strengths" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are weaknesses of your business?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="weakness" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are opportunities of your business?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="opportunities" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>Access to finance</Typography>
                
                </CardContent>
              </Card>
             
             
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Are you able to raise the required finance for your business right now?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


                 
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I have taken a loan from</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Government bank" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Private bank" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="NGO" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Money Lender" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Middleman/trader" />
                      <FormControlLabel value="opt6" control={<Radio style={{color:"#595959"}} />} label="Parents" />
                      <FormControlLabel value="opt7" control={<Radio style={{color:"#595959"}} />} label="Relatives/Neighbors" />
                      <FormControlLabel value="opt8" control={<Radio style={{color:"#595959"}} />} label="Friends" />
                      <FormControlLabel value="opt9" control={<Radio style={{color:"#595959"}} />} label="Social Welfare departments" />
                      <FormControlLabel value="opt10" control={<Radio style={{color:"#595959"}} />} label="Cooperatives" />
                      <FormControlLabel value="opt11" control={<Radio style={{color:"#595959"}} />} label="SHG Group" />
                      <FormControlLabel value="opt12" control={<Radio style={{color:"#595959"}} />} label="Other" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

               
               <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I have trouble accessing loan for my business</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


              
              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>What are the prerequisites to access a loan? Tick the one's you think you need</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="KYC documents of all the applicants - PAN card, Aadhar Crad, address proof" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Address Proof of the business premises" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="2 Passport size photographs of the applicant" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Light bill & rent agreement" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Balance sheet and profit & Loss statement for the last 2-3 years" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Quotations of machinery,equipment,furniture & other assets to be purchased" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Letters of support, reference" />
                     
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Is there any loan currently availed by you/family </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you need any additional skills to run your business?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              {/* -------------------------------- */}
            </CardContent>
          </Card>
        </Grid>
      </Dialog>
    </div>
  );
}
