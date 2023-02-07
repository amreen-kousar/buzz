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
              Green Baseline Survey Form
         </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid>
          <Card>
     
            <CardContent>
              <Card mt={1} style={{backgroundColor: '#F6F8FB'}}>
                <CardContent>
                  <Typography style={{color:"#ff4913"}}>Email *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField  id="Email" label="Enter Email" variant="outlined" required color="common" />
                  </Stack>
                  <Typography style={{color:"#ff4913"}}>Name of surveyor *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answer" required label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
               
                  <Typography style={{color:"#ff4913"}}>Name of respondent *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answer" required  label="Your Answer" variant="outlined" color="common" />
                  </Stack>
              
                  <Typography style={{color:"#ff4913"}}>Village Name *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Village" required label="Village Name" variant="outlined" color="common"/>
                  </Stack>
               
                  <Typography style={{color:"#ff4913"}}>Phone Number *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Phone Number" required label="Phone Number" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff4913"}}>Which of the following are natural resources? *</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Soil" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Water" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="MotorCycle" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Money" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Trees" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Borewell" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="House" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff4913"}}>
                    How is change in state of natural resources impacting your life? *</Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Quality of food degrading" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Negatively affecting agricultural income" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Drinking water scarcity" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Frequent illness in children" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}  />} label="Bodily discomfort" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Loss of jobs/lack of work" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="There is no impact on my life" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Natural wealth for me is *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Natural Resource"
                        control={<Radio required style={{color:"#595959"}} />}
                        label="to enjoy natural resource as a human being without any limits"
                      />
                       <FormControlLabel
                        value="Natural resource future generation"
                        control={<Radio required style={{color:"#595959"}} />}
                        label="to enjoy natural resources while safeguarding it for the future generation"
                      />
                     
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Have you heard of "Climate Change" ? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>What do you know about it? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answe" label="Your Answer" variant="outlined" color="common" required/>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Do you notice any change in the weather/climate in last 30 years? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>
                    What kind of changes happened to the climate? *</Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Excessive temperature" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Excessive cold" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}  />} label="Frequent flood" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Unseasonal rainfall" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Water logging" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Drying up of lakes,ponds and other water bodies" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="I don't know" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff4913"}}>
                    On a scale of 1 to 10 please rate,how much do you think climate change threatens your personal and family health and safety? *</Typography>
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
                    <Typography style={{color:"#ff4913"}}>Do you think anything can be tackle climate change? *</Typography>
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
                    <Typography style={{color:"#ff4913"}}>Do you think you would do something to tackle climate change? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>
                    What is the main source of water used by your house-hold for other purposes,such as cooking and hand washing? *</Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Piped water to yeard/plot" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Public tap/standpipe" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Tubewell/borehole" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Protected dug well" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Unprotected dug well" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Protected spring" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Unprotected spring" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Rainwater collection"/>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Tanker-truck"/>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Surface water (river,dam,lake,pond,stream,canal,irrigation channels)"/>
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}/> } label="Others"/>
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Which Statement shown below do you agree with? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Ground water can be drawn to how much ever extent we want to" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="The groundwater below my land solely belongs to me" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I should always consider the groundwater limit and other users around me before making decisions on its use" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Groudwater is a shared resource" />
                    
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>How concerned are you about local water quality that you are consuming now in your village? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Very Unconcerned" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Unconcerned" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Concerned" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Very Concerned" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>My personal actions can affect water quality in my village? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly disagree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Agreee" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Strongly agree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              
               
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Do you think you take water conservation measures in your everyday life? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>If yes,what kind of measures have you taken in the past? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Ans" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff4913"}}>Can you list down impact of climate change on your land? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Anse" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Bhasker is gifting his 6 acres land to children Meena and Keshav.Out of 6 acres, 3 acres is in P.Halli and another 3 acres is in K.Halli which are closeby. The 2 plots are situated in the borders of K.Halli and P.Halli. 
                    K.Halli and P.Halli is separated by a forest in between. Meena and Keshav plans to expand their land by clearing parts of the forest. 
                    Meena wants to build a school and keshav wants to build a shopping complex in the forest land. what do you think should be done here? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="I support Meena as she is helping society by building a school for children of tthe village." />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="I support Keshav as he is opening shopping opportunities for villagers." />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I won't support both,as forest land does'nt belong to them,it belongs to people of both villages, animals and the trees." />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="I don't know what to decide." />

                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

                  
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Which one according to you is right? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Covering up a lake and constructing a building and earn more income." />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Cutting trees to increase available land area for commercial activities improves standard of living." />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Protect trees,lakes,reduce use of chemicals on land and protect your asset." />
                
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

                                
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Do you believe there is a connection between the food we eat,our health and climate change? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="There is a connection between food and health." />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="There is a connection between all three." />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I do not see any connection between them." />
                
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff4913"}}>Are there any native food you believe is environmentally friendly to plant and is good for health?Name any two *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Which of the following household activity pollutes natural resources? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Consuming plastic packed biscuits,chocolates and chips." />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Body & hair cleansing liquids,soaps,tooth paste." />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Use of coal,firewood or gas for cooking" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="All of the above" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="None of the above" />
                      <FormControlLabel value="opt6" control={<Radio style={{color:"#595959"}} />} label="I don't know" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Do you think there are alternatives in the household for materials that cause pollution? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>If yes, what are they? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
            
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Would you be willing to switch to these eco-friendly products and activities? *</Typography>
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
                    <Typography style={{color:"#ff4913"}}>Would you be willing to make this switch to eco-friendly even if you have a pay a little more than what you pay for the chemicals? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>What do you think we should make this switch to eco-friendlly products? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Do you think developing simple-at-home solutiions to climate change is a lot of effort? *</Typography>
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
                    <Typography style={{color:"#ff4913"}}>Have you ever taken, or do you regularly take,any action out of concern for climate change? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>If yes,what did you do/are you doing? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>
              

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Do you know what natural resource of your community needs immediate attention and measures of conservation (forest,lake,pond,park etc)? *</Typography>
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
                  <Typography style={{color:"#ff4913"}}>If yes,what is that resource? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
              </Card>

                      
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff4913"}}>What is your goal you want to achieve with regard to natural resource conservation in your village? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answ" color="common" label="Your Answer" variant="outlined"/>
                  </Stack>
                </CardContent>
              </Card>
              
              
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff4913"}}>Have you seen anyone in the village take a initiative to conserve the environment of your village? *</Typography>
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
                    <Typography style={{color:"#ff4913"}}>Have you seen anyone in the village take a initiative to conserve the environment of your village? *</Typography>
                    <RadioGroup 
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Natural Resource"
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


              

              {/* -------------------------------- */}
            </CardContent>
          </Card>
        </Grid>
      </Dialog>
    </div>
  );
}
