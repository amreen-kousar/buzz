import * as React from 'react';
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
import { Link } from 'react-router-dom';
import Iconify from '../../../components/Iconify';
import { Icon } from '@iconify/react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GreenSurvey() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [age, setAge] = React.useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen} sx={{
        '&:hover': {
          backgroundColor: '#ffd796',
          borderColor: "#ed6c02"
        },
        borderColor: "#ed6c02",
        color: "#ed6c02"
      }} >
        Survey Form
      </Button> */}
       <Stack style={{ flexDirection: 'row' ,float:'right' }}  mb={2}>
        {/* <IconButton >
        <Icon  icon="material-symbols:check-box-rounded" width={20} height={20} marginTop={20}  color="#ff7424"  />
        </IconButton> */}
        <IconButton onClick={handleClickOpen}>
         <Icon  icon="clarity:form-line" width={20} height={20} marginTop={20}  color="#ff7424"  />
        </IconButton>
        </Stack> 
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
           <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
            <Link to="/dashboard/projects/project">
                        <IconButton style={{color:"white"}}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
       
         
          </Toolbar>
        </AppBar>
        <Grid>

        <Card mt={1} style={{ borderRadius: 20}} >
                <CardContent>
               
                    <Typography variant="subtitle2" style={{color:'white',backgroundColor:"#ff7424",padding:10,borderRadius:5}}>
                   Green Baseline Survey
                  </Typography>  
                  <Typography variant="subtitle2" style={{color:'#ff7424',backgroundColor:"white",paddingTop:10}}>
                    * Required
                  </Typography>  
                  </CardContent>    
          </Card>

          <Card>
     
            <CardContent>
              <Card mt={1} style={{backgroundColor: '#F6F8FB'}}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Email *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField  id="Email" label="Enter Email" variant="outlined" required color="common" />
                  </Stack>
                  <Typography style={{color:"#ff7424"}}>Name of surveyor *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answer" required label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
               
                  <Typography style={{color:"#ff7424"}}>Name of respondent *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answer" required  label="Your Answer" variant="outlined" color="common" />
                  </Stack>
              
                  <Typography style={{color:"#ff7424"}}>Village Name *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Village" required label="Village Name" variant="outlined" color="common"/>
                  </Stack>
               
                  <Typography style={{color:"#ff7424"}}>Phone Number *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Phone Number" required label="Phone Number" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Which of the following are natural resources? / ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳು? *</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Soil/ಮಣ್ಣು" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Water/ನೀರು" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="MotorCycle/ಮೋಟಾರ್ ಸೈಕಲ್" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Money/ಹಣ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Trees/ಮರ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Borewell/ಬೋರ್ವೆಲ್" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="House/ಮನೆ" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>
                    How is change in state of natural resources impacting your life? / ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳ ಸ್ಥಿತಿಯಲ್ಲಿನ ಬದಲಾವಣೆಯು ನಿಮ್ಮ ಜೀವನದ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ *</Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Quality of food degrading / ಆಹಾರದ ಗುಣಮಟ್ಟ ಕುಸಿಯುತ್ತಿದೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Negatively affecting agricultural income / ಕೃಷಿ ಆದಾಯದ ಮೇಲೆ ನಕಾರಾತ್ಮಕ ಪರಿಣಾಮ ಬೀರುತ್ತಿದೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Drinking water scarcity / ಕುಡಿಯುವ ನೀರಿನ ಅಭಾವ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Frequent illness in children / ಮಕ್ಕಳಲ್ಲಿ ಆಗಾಗ್ಗೆ ಅನಾರೋಗ್ಯ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Bodily discomfort / ದೈಹಿಕ ಅಸ್ವಸ್ಥತೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Loss of jobs/lack of work / ಉದ್ಯೋಗ ನಷ್ಟ/ಕೆಲಸದ ಕೊರತೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="There is no impact on my life / ನನ್ನ ಜೀವನದ ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮವಿಲ್ಲ" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Natural wealth for me is / ನನಗೆ ನೈಸರ್ಗಿಕ ಸಂಪತ್ತು *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Natural Resource"
                        control={<Radio required style={{color:"#595959"}} />}
                        label="to enjoy natural resource as a human being without any limits / ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲದೆ ಮನುಷ್ಯನಂತೆ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲವನ್ನು ಆನಂದಿಸಲು"
                      />
                       <FormControlLabel
                        value="Natural resource future generation"
                        control={<Radio required style={{color:"#595959"}} />}
                        label="to enjoy natural resources while safeguarding it for the future generation / ಭವಿಷ್ಯದ ಪೀಳಿಗೆಗೆ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಸಂರಕ್ಷಿಸುವ ಮೂಲಕ ಆನಂದಿಸಲು "
                      />
                     
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Have you heard of "Climate Change" ?/ ನೀವು "ಹವಾಮಾನ ಬದಲಾವಣೆ" ಬಗ್ಗೆ ಕೇಳಿದ್ದೀರಾ? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio required style={{color:"#595959"}}  />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio required style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio required style={{color:"#595959"}} />} label="Maybe" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>What do you know about it? / ಅದರ ಬಗ್ಗೆ ನಿನಗೇನು ಗೊತ್ತು *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answe" label="Your Answer" variant="outlined" color="common" required/>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you notice any change in the weather/climate in last 30 years? /ಕಳೆದ 30 ವರ್ಷಗಳಲ್ಲಿ ಹವಾಮಾನ/ಹವಾಮಾನದಲ್ಲಿ ಯಾವುದೇ ಬದಲಾವಣೆಯನ್ನು ನೀವು ಗಮನಿಸಿದ್ದೀರಾ? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio required style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>
                    What kind of changes happened to the climate? / ಹವಾಮಾನದಲ್ಲಿ ಯಾವ ರೀತಿಯ ಬದಲಾವಣೆಗಳು ಸಂಭವಿಸಿದವು? *</Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Excessive temperature / ಅತಿಯಾದ ತಾಪಮಾನ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Excessive cold / ವಿಪರೀತ ಚಳಿ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}  />} label="Frequent flood / ಆಗಾಗ್ಗೆ ಪ್ರವಾಹ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Unseasonal rainfall / ಅಕಾಲಿಕ ಮಳೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Water logging / ನೀರು ಲಾಗಿಂಗ್" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Drying up of lakes,ponds and other water bodies / ಕೆರೆಗಳು, ಕೊಳಗಳು ಮತ್ತು ಇತರ ಜಲಮೂಲಗಳು ಒಣಗುತ್ತಿವೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="I don't know / ನನಗೆ ಗೊತ್ತಿಲ್ಲ " />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>
                    On a scale of 1 to 10 please rate,how much do you think climate change threatens your personal and family health and safety? / 
1 ರಿಂದ 10 ರ ಪ್ರಮಾಣದಲ್ಲಿ ದಯವಿಟ್ಟು ರೇಟ್ ಮಾಡಿ, ಹವಾಮಾನ ಬದಲಾವಣೆಯು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮತ್ತು ಕುಟುಂಬದ ಆರೋಗ್ಯ ಮತ್ತು ಸುರಕ್ಷತೆಗೆ ಎಷ್ಟು ಅಪಾಯವನ್ನುಂಟುಮಾಡುತ್ತದೆ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಿ *</Typography>
                  <Stack mt={2}>
                  <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="1" control={<Radio style={{color:"#595959"}} />} label="1" />
                      <FormControlLabel value="2" control={<Radio style={{color:"#595959"}} />} label="2" />
                      <FormControlLabel value="3" control={<Radio style={{color:"#595959"}} />} label="3" />
                      <FormControlLabel value="4" control={<Radio style={{color:"#595959"}} />} label="4" />
                      <FormControlLabel value="5" control={<Radio style={{color:"#595959"}} />} label="5" />
                      <FormControlLabel value="6" control={<Radio style={{color:"#595959"}} />} label="6" />
                      <FormControlLabel value="7" control={<Radio style={{color:"#595959"}} />} label="7" />
                      <FormControlLabel value="8" control={<Radio style={{color:"#595959"}} />} label="8" />
                      <FormControlLabel value="9" control={<Radio style={{color:"#595959"}} />} label="9" />
                      <FormControlLabel value="10" control={<Radio style={{color:"#595959"}} />} label="10" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you think anything can be tackle climate change? / ಹವಾಮಾನ ಬದಲಾವಣೆಯನ್ನು ಏನಾದರೂ ನಿಭಾಯಿಸಬಹುದು ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ?*</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
               
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you think you would do something to tackle climate change? / ಹವಾಮಾನ ಬದಲಾವಣೆಯನ್ನು ನಿಭಾಯಿಸಲು ನೀವು ಏನಾದರೂ ಮಾಡುತ್ತೀರಿ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>
                    What is the main source of water used by your house-hold for other purposes,such as cooking and hand washing? / ಅಡುಗೆ ಮತ್ತು ಕೈ ತೊಳೆಯುವಂತಹ ಇತರ ಉದ್ದೇಶಗಳಿಗಾಗಿ ನಿಮ್ಮ ಮನೆಯವರು ಬಳಸುವ ನೀರಿನ ಮುಖ್ಯ ಮೂಲ ಯಾವುದು? *</Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Piped water to yard/plot / ಅಂಗಳ/ಪ್ಲಾಟ್‌ಗೆ ಪೈಪ್‌ಲೈನ್ ನೀರು" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Public tap/standpipe / ಸಾರ್ವಜನಿಕ ಟ್ಯಾಪ್/ಸ್ಟ್ಯಾಂಡ್ ಪೈಪ್" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Tubewell/borehole / ಕೊಳವೆಬಾವಿ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Protected dug well / ಚೆನ್ನಾಗಿ ಅಗೆದು ರಕ್ಷಿಸಲಾಗಿದೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Unprotected dug well / ರಕ್ಷಣೆಯಿಲ್ಲದ ಬಾವಿ ತೋಡಿದ್ದಾರೆ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Protected spring / ಸಂರಕ್ಷಿತ ವಸಂತ " />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Unprotected spring / ಅಸುರಕ್ಷಿತ ವಸಂತ" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Rainwater collection / ಮಳೆನೀರು ಸಂಗ್ರಹಣೆ"/>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Tanker-truck / ಟ್ಯಾಂಕರ್-ಟ್ರಕ್"/>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Surface water (river,dam,lake,pond,stream,canal,irrigation channels) / ಮೇಲ್ಮೈ ನೀರು (ನದಿ, ಅಣೆಕಟ್ಟು, ಸರೋವರ, ಕೊಳ, ಹೊಳೆ, ಕಾಲುವೆ, ನೀರಾವರಿ ಕಾಲುವೆಗಳು)"/>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Others / ಇತರರು"/>
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Which Statement shown below do you agree with? / ಕೆಳಗೆ ತೋರಿಸಿರುವ ಯಾವ ಹೇಳಿಕೆಯನ್ನು ನೀವು ಒಪ್ಪುತ್ತೀರಿ? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Ground water can be drawn to how much ever extent we want to / ಅಂತರ್ಜಲವನ್ನು ನಾವು ಎಷ್ಟು ಪ್ರಮಾಣದಲ್ಲಿ ಬಯಸುತ್ತೇವೋ ಅಷ್ಟು ಪ್ರಮಾಣದಲ್ಲಿ ಎಳೆಯಬಹುದು" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="The groundwater below my land solely belongs to me / ನನ್ನ ಭೂಮಿಯ ಕೆಳಗಿನ ಅಂತರ್ಜಲ ನನಗೆ ಮಾತ್ರ ಸೇರಿದ್ದು" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I should always consider the groundwater limit and other users around me before making decisions on its use / ಅದರ ಬಳಕೆಯ ಬಗ್ಗೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ನಾನು ಯಾವಾಗಲೂ ಅಂತರ್ಜಲ ಮಿತಿ ಮತ್ತು ನನ್ನ ಸುತ್ತಲಿನ ಇತರ ಬಳಕೆದಾರರನ್ನು ಪರಿಗಣಿಸಬೇಕು" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Groundwater is a shared resource / ಅಂತರ್ಜಲವು ಹಂಚಿಕೆಯ ಸಂಪನ್ಮೂಲವಾಗಿದೆ" />
                    
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>How concerned are you about local water quality that you are consuming now in your village?/ ನಿಮ್ಮ ಗ್ರಾಮದಲ್ಲಿ ಈಗ ನೀವು ಸೇವಿಸುತ್ತಿರುವ ಸ್ಥಳೀಯ ನೀರಿನ ಗುಣಮಟ್ಟದ ಬಗ್ಗೆ ನಿಮಗೆ ಎಷ್ಟು ಕಾಳಜಿ ಇದೆ*</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Very Unconcerned / ತುಂಬಾ ಅನ್ಕನ್ಸರ್ನ್ಡ್" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Unconcerned/ಕಾಳಜಿಯಿಲ್ಲದ" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral/ತಟಸ್ಥ" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Concerned/ಕಳವಳ ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Very Concerned/ತುಂಬಾ ಕಾಳಜಿ" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>My personal actions can affect water quality in my village? / ನನ್ನ ವೈಯಕ್ತಿಕ ಕ್ರಿಯೆಗಳು ನನ್ನ ಹಳ್ಳಿಯಲ್ಲಿ ನೀರಿನ ಗುಣಮಟ್ಟದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದೇ? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly disagree / ಖಂಡಿತವಾಗಿ ಒಪ್ಪುವುದಿಲ್ಲ" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Disagree / ಒಪ್ಪುವುದಿಲ್ಲ" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral / ತಟಸ್ಥ" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Agreee / ಒಪ್ಪುತ್ತೇನೆ" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Strongly agree / ಬಲವಾಗಿ ಒಪ್ಪುತ್ತೇನೆ" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              
               
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you think you take water conservation measures in your everyday life? / ನಿಮ್ಮ ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ನೀವು ನೀರಿನ ಸಂರಕ್ಷಣೆ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತೀರಿ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>If yes,what kind of measures have you taken in the past? / ಹೌದು ಎಂದಾದರೆ, ನೀವು ಹಿಂದೆ ಯಾವ ರೀತಿಯ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಂಡಿದ್ದೀರಿ?*</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Ans" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Can you list down impact of climate change on your land?/ನಿಮ್ಮ ಭೂಮಿಯ ಮೇಲೆ ಹವಾಮಾನ ಬದಲಾವಣೆಯ ಪರಿಣಾಮವನ್ನು ನೀವು ಪಟ್ಟಿ ಮಾಡಬಹುದೇ? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Anse" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Bhasker is gifting his 6 acres land to children Meena and Keshav.Out of 6 acres, 3 acres is in P.Halli and another 3 acres is in K.Halli which are closeby. The 2 plots are situated in the borders of K.Halli and P.Halli. 
                    K.Halli and P.Halli is separated by a forest in between. Meena and Keshav plans to expand their land by clearing parts of the forest. 
                    Meena wants to build a school and keshav wants to build a shopping complex in the forest land. what do you think should be done here? / ಭಾಸ್ಕರ್ ಅವರು ತಮ್ಮ 6 ಎಕರೆ ಜಮೀನನ್ನು ಮಕ್ಕಳಾದ ಮೀನಾ ಮತ್ತು ಕೇಶವ್ ಅವರಿಗೆ ಉಡುಗೊರೆಯಾಗಿ ನೀಡುತ್ತಿದ್ದಾರೆ. 6 ಎಕರೆಯಲ್ಲಿ 3 ಎಕರೆ ಪಿ.ಹಳ್ಳಿಯಲ್ಲಿ ಮತ್ತು ಇನ್ನೊಂದು 3 ಎಕರೆ ಹತ್ತಿರವಿರುವ ಕೆ.ಹಳ್ಳಿಯಲ್ಲಿದೆ. 2 ಪ್ಲಾಟ್‌ಗಳು ಕೆ.ಹಳ್ಳಿ ಮತ್ತು ಪಿ.ಹಳ್ಳಿಯ ಗಡಿಯಲ್ಲಿವೆ.
                    ಕೆ.ಹಳ್ಳಿ ಮತ್ತು ಪಿ.ಹಳ್ಳಿ ನಡುವೆ ಕಾಡಿನಿಂದ ಬೇರ್ಪಟ್ಟಿದೆ. ಮೀನಾ ಮತ್ತು ಕೇಶವ್ ಕಾಡಿನ ಭಾಗಗಳನ್ನು ತೆರವುಗೊಳಿಸುವ ಮೂಲಕ ತಮ್ಮ ಭೂಮಿಯನ್ನು ವಿಸ್ತರಿಸಲು ಯೋಜಿಸಿದ್ದಾರೆ.
                    ಮೀನಾ ಅವರು ಶಾಲೆಯನ್ನು ನಿರ್ಮಿಸಲು ಬಯಸುತ್ತಾರೆ ಮತ್ತು ಕೇಶವ್ ಅವರು ಅರಣ್ಯ ಭೂಮಿಯಲ್ಲಿ ಶಾಪಿಂಗ್ ಕಾಂಪ್ಲೆಕ್ಸ್ ನಿರ್ಮಿಸಲು ಬಯಸುತ್ತಾರೆ. ಇಲ್ಲಿ ಏನು ಮಾಡಬೇಕು ಎಂದು ನೀವು ಯೋಚಿಸುತ್ತೀರಿ? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="I support Meena as she is helping society by building a school for children of tthe village/ ಹಳ್ಳಿಯ ಮಕ್ಕಳಿಗಾಗಿ ಶಾಲೆ ನಿರ್ಮಿಸುವ ಮೂಲಕ ಸಮಾಜಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತಿರುವ ಮೀನಾ ಅವರನ್ನು ನಾನು ಬೆಂಬಲಿಸುತ್ತೇನೆ" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="I support Keshav as he is opening shopping opportunities for villagers/ನಾನು ಕೇಶವ್ ಅವರನ್ನು ಬೆಂಬಲಿಸುತ್ತೇನೆ ಏಕೆಂದರೆ ಅವರು ಹಳ್ಳಿಗರಿಗೆ ಶಾಪಿಂಗ್ ಅವಕಾಶಗಳನ್ನು ತೆರೆಯುತ್ತಾರೆ" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I won't support both,as forest land does'nt belong to them,it belongs to people of both villages, animals and the trees/ ನಾನು ಎರಡನ್ನೂ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ, ಏಕೆಂದರೆ ಅರಣ್ಯ ಭೂಮಿ ಅವರಿಗೆ ಸೇರಿಲ್ಲ, ಅದು ಎರಡೂ ಹಳ್ಳಿಗಳ ಜನರಿಗೆ, ಪ್ರಾಣಿಗಳು ಮತ್ತು ಮರಗಳಿಗೆ ಸೇರಿದೆ." />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="I don't know what to decide / ಏನು ನಿರ್ಧರಿಸಬೇಕೆಂದು ನನಗೆ ತಿಳಿದಿಲ್ಲ." />

                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

                  
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Which one according to you is right? / ನಿಮ್ಮ ಪ್ರಕಾರ ಯಾವುದು ಸರಿ *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Covering up a lake and constructing a building and earn more income/ಕೆರೆ ಒತ್ತುವರಿ ಮಾಡಿ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿ ಹೆಚ್ಚಿನ ಆದಾಯ ಗಳಿಸುತ್ತಿದ್ದಾರೆ." />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Cutting trees to increase available land area for commercial activities improves standard of living / ವಾಣಿಜ್ಯ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಲಭ್ಯವಿರುವ ಭೂಪ್ರದೇಶವನ್ನು ಹೆಚ್ಚಿಸಲು ಮರಗಳನ್ನು ಕಡಿಯುವುದು ಜೀವನ ಮಟ್ಟವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ." />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Protect trees,lakes,reduce use of chemicals on land and protect your asset/ಮರಗಳು, ಸರೋವರಗಳನ್ನು ರಕ್ಷಿಸಿ, ಭೂಮಿಯಲ್ಲಿ ರಾಸಾಯನಿಕಗಳ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಆಸ್ತಿಯನ್ನು ರಕ್ಷಿಸಿ." />
                
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

                                
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you believe there is a connection between the food we eat,our health and climate change? / ನಾವು ತಿನ್ನುವ ಆಹಾರ, ನಮ್ಮ ಆರೋಗ್ಯ ಮತ್ತು ಹವಾಮಾನ ಬದಲಾವಣೆಯ ನಡುವೆ ಸಂಬಂಧವಿದೆ ಎಂದು ನೀವು ನಂಬುತ್ತೀರಾ? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="There is a connection between food and health/ಆಹಾರ ಮತ್ತು ಆರೋಗ್ಯದ ನಡುವೆ ಸಂಬಂಧವಿದೆ" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="There is a connection between all three/ಮೂರರ ನಡುವೆ ಸಂಬಂಧವಿದೆ." />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I do not see any connection between them/ಅವರ ನಡುವೆ ಯಾವುದೇ ಸಂಬಂಧವನ್ನು ನಾನು ನೋಡುತ್ತಿಲ್ಲ." />
                
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Are there any native food you believe is environmentally friendly to plant and is good for health?Name any two / ಸಸ್ಯಗಳಿಗೆ ಪರಿಸರ ಸ್ನೇಹಿ ಮತ್ತು ಆರೋಗ್ಯಕ್ಕೆ ಒಳ್ಳೆಯದು ಎಂದು ನೀವು ನಂಬುವ ಯಾವುದೇ ಸ್ಥಳೀಯ ಆಹಾರವಿದೆಯೇ? ಯಾವುದಾದರೂ ಎರಡನ್ನು ಹೆಸರಿಸಿ *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Which of the following household activity pollutes natural resources? /  ಕೆಳಗಿನ ಯಾವ ಮನೆಯ ಚಟುವಟಿಕೆಯು ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಕಲುಷಿತಗೊಳಿಸುತ್ತದೆ? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Consuming plastic packed biscuits,chocolates and chips/ಪ್ಲಾಸ್ಟಿಕ್ ಪ್ಯಾಕ್ ಮಾಡಿದ ಬಿಸ್ಕತ್ತುಗಳು, ಚಾಕೊಲೇಟ್‌ಗಳು ಮತ್ತು ಚಿಪ್‌ಗಳನ್ನು ಸೇವಿಸುವುದು." />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Body & hair cleansing liquids,soaps,tooth paste / ದೇಹ ಮತ್ತು ಕೂದಲು ಶುದ್ಧೀಕರಿಸುವ ದ್ರವಗಳು, ಸಾಬೂನುಗಳು, ಟೂತ್ ಪೇಸ್ಟ್." />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Use of coal,firewood or gas for cooking / ಅಡುಗೆಗೆ ಕಲ್ಲಿದ್ದಲು, ಉರುವಲು ಅಥವಾ ಅನಿಲದ ಬಳಕೆ" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="All of the above / ಮೇಲಿನ ಎಲ್ಲವೂ" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="None of the above / ಮೇಲಿನ ಯಾವುದೂ ಅಲ್ಲ " />
                      <FormControlLabel value="opt6" control={<Radio style={{color:"#595959"}} />} label="I don't know/ನನಗೆ ಗೊತ್ತಿಲ್ಲ" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you think there are alternatives in the household for materials that cause pollution? / ಮಾಲಿನ್ಯವನ್ನು ಉಂಟುಮಾಡುವ ವಸ್ತುಗಳಿಗೆ ಮನೆಯಲ್ಲಿ ಪರ್ಯಾಯಗಳಿವೆ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ?*</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                   
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>If yes, what are they? / ಹೌದು ಎಂದಾದರೆ, ಅವು ಯಾವುವು? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Would you be willing to switch to these eco-friendly products and activities? / ಈ ಪರಿಸರ ಸ್ನೇಹಿ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳಿಗೆ ಬದಲಾಯಿಸಲು ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ? *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                   
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

                  
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Would you be willing to make this switch to eco-friendly even if you have a pay a little more than what you pay for the chemicals? / ನೀವು ರಾಸಾಯನಿಕಗಳಿಗೆ ಪಾವತಿಸುವುದಕ್ಕಿಂತ ಸ್ವಲ್ಪ ಹೆಚ್ಚು ವೇತನವನ್ನು ಹೊಂದಿದ್ದರೂ ಸಹ ಪರಿಸರ ಸ್ನೇಹಿಯಾಗಿ ಈ ಬದಲಾವಣೆಯನ್ನು ಮಾಡಲು ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                   
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>What do you think we should make this switch to eco-friendlly products? / ಪರಿಸರ ಸ್ನೇಹಿ ಉತ್ಪನ್ನಗಳಿಗೆ ನಾವು ಈ ಬದಲಾವಣೆಯನ್ನು ಮಾಡಬೇಕೆಂದು ನೀವು ಏನು ಯೋಚಿಸುತ್ತೀರಿ?*</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you think developing simple-at-home solutiions to climate change is a lot of effort? / ಹವಾಮಾನ ಬದಲಾವಣೆಗೆ ಸರಳವಾದ ಮನೆಯಲ್ಲೇ ಪರಿಹಾರಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು ಬಹಳಷ್ಟು ಪ್ರಯತ್ನ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ  *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                   
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
            
              
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Have you ever taken, or do you regularly take,any action out of concern for climate change? / ಹವಾಮಾನ ಬದಲಾವಣೆಯ ಕಾಳಜಿಯಿಂದ ನೀವು ಎಂದಾದರೂ ತೆಗೆದುಕೊಂಡಿದ್ದೀರಾ ಅಥವಾ ನಿಯಮಿತವಾಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತೀರಾ? *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                   
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>If yes,what did you do/are you doing?/ಹೌದು ಎಂದಾದರೆ, ನೀವು ಏನು ಮಾಡಿದ್ದೀರಿ/ನೀವು ಮಾಡುತ್ತಿದ್ದೀರಿ? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
              

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you know what natural resource of your community needs immediate attention and measures of conservation (forest,lake,pond,park etc)? / ನಿಮ್ಮ ಸಮುದಾಯದ ಯಾವ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಕ್ಕೆ ತಕ್ಷಣದ ಗಮನ ಮತ್ತು ಸಂರಕ್ಷಣೆಯ ಕ್ರಮಗಳ ಅಗತ್ಯವಿದೆ ಎಂದು ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ (ಅರಣ್ಯ, ಸರೋವರ, ಕೊಳ, ಉದ್ಯಾನವನ ಇತ್ಯಾದಿ) *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                   
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>If yes,what is that resource? / ಹೌದು ಎಂದಾದರೆ, ಆ ಸಂಪನ್ಮೂಲ ಯಾವುದು?*</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>

                      
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>What is your goal you want to achieve with regard to natural resource conservation in your village? / ನಿಮ್ಮ ಗ್ರಾಮದಲ್ಲಿ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲ ಸಂರಕ್ಷಣೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ನೀವು ಸಾಧಿಸಲು ಬಯಸುವ ನಿಮ್ಮ ಗುರಿ ಏನು? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" color="common" label="Your Answer" variant="outlined"/>
                  </Stack>
                </CardContent>
              </Card>
              
              
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Have you seen anyone in the village take a initiative to conserve the environment of your village? / ನಿಮ್ಮ ಗ್ರಾಮದ ಪರಿಸರವನ್ನು ಸಂರಕ್ಷಿಸಲು ಗ್ರಾಮದಲ್ಲಿ ಯಾರಾದರೂ ಮುಂದಾಗಿರುವುದನ್ನು ನೀವು ನೋಡಿದ್ದೀರಾ *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                   
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Have you seen anyone in the village take a initiative to conserve the environment of your village? / ನಿಮ್ಮ ಗ್ರಾಮದ ಪರಿಸರವನ್ನು ಸಂರಕ್ಷಿಸಲು ಗ್ರಾಮದಲ್ಲಿ ಯಾರಾದರೂ ಮುಂದಾಗಿರುವುದನ್ನು ನೀವು ನೋಡಿದ್ದೀರಾ? *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree/ಬಲವಾಗಿ ಒಪ್ಪುತ್ತೇನೆ" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree / ಒಪ್ಪುತ್ತೇನೆ" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral / ತಟಸ್ಥ" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Disagree / ಒಪ್ಪುವುದಿಲ್ಲ" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree / ಖಂಡಿತವಾಗಿ ಒಪ್ಪುವುದಿಲ್ಲ" />
                   
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
