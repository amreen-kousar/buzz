import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
import { Icon } from '@iconify/react';
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GelathiCircleForm() {
  const [open, setOpen] = React.useState(false);
  const [vyaapar, setVyaapar] = useState('');
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
        <Stack style={{ flexDirection: 'row' ,float:'right' }}  mb={2}>
        <IconButton >
        <Icon  icon="material-symbols:check-box-rounded" width={20} height={20} marginTop={20}  color="#ff7424"  />
        </IconButton>
        <IconButton onClick={handleClickOpen}>
         <Icon  icon="clarity:form-line" width={20} height={20} marginTop={20}  color="#ff7424"  />
        </IconButton>
        </Stack> 
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
            <Link to="/dashboard/projects">
                        <IconButton style={{color:"white"}}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
       
         
          </Toolbar>
        </AppBar>
        <Grid style={{margin:10}}>
        <Card mt={1} style={{ borderRadius: 20 }} >
                <CardContent>
               
                    <Typography variant="subtitle2" style={{color:'white',backgroundColor:"#ff7424",padding:10,borderRadius:5}}>
                    Spoorthi Baseline Questionnaire
                  </Typography>  
                  <Typography variant="subtitle2" style={{color:'#ff7424',backgroundColor:"white",paddingTop:10}}>
                    * Required
                  </Typography>  
                  </CardContent>    
          </Card>


          <Card mt={1} style={{marginTop:10, borderRadius: 20 }}>
          
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>Surveyor's email address *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Email" label="Enter Email" variant="outlined" color="common" />
                  </Stack>
              </CardContent>
          </Card>

          <Card mt={1} style={{marginTop:10, borderRadius: 20 }}>
          <CardContent>
            <Typography variant="subtitle2" style={{color:"#ff7424"}}>Name of the Gelathi / ಗೆಲತಿಯ ಹೆಸರು *</Typography>
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

    <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2" style={{color:"#ff7424"}}>Spoorthi Session Number/ಸ್ಪೂರ್ತಿ ಸೆಷನ್ಸಂಖ್ಯೆ * (Tick the Spoorthi in which you are collecting the data)</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Session 1" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Session 2" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Session 3" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Session 4" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Session 5" />
                      <FormControlLabel value="opt6" control={<Radio style={{color:"#595959"}} />} label="Session 6" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
         </Card>

         <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>Can you list down three of your skills/
ನಿಮ್ಮ ಮೂರು ಕೌಶಲ್ಯಗಳನ್ನು ನೀವು ಪಟ್ಟಿ ಮಾಡಬಹುದು?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="skillslist" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
                </CardContent>
          </Card>

          
          <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2" style={{color:"#ff7424"}}>I have used my skills to overcome my challenges/ನನ್ನ ಸವಾಲುಗಳನ್ನು ಜಯಿಸಲು ನಾನು ನನ್ನ ಕೌಶಲ್ಯವನ್ನು ಬಳಸಿದ್ದೇನೆ</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
         </Card>

         <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>State one instance of when you used your skills and resources to combat your challenge/ನಿಮ್ಮ ಸವಾಲನ್ನು ಎದುರಿಸಲು ನಿಮ್ಮ ಕೌಶಲ್ಯ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ನೀವು ಬಳಸಿದಾಗ ಒಂದು ಉದಾಹರಣೆಯನ್ನು ತಿಳಿಸಿ</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="skillsresources" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
          </Card>


          <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2" style={{color:"#ff7424"}}>ನಮ್ಮ ಹಳ್ಳಿಯಲ್ಲಿರುವ ಕಸದ ಗುಡ್ಡೆ ಹಾದುಹೋಗುವಾಗ ನನಗೆ ಸದಾ ಬೇಸರವಾಗುತ್ತಿತ್ತು . 
                    ಈ ಪ್ರದೇಶವು, ನಮ್ಮಿಂ ದಲೇ ತುಂಬಾ ಕೆಟ್ಟ ದಾಗಿ ದುರ್ವಾಸನೆ ಬೀರುತ್ತಿದೆ ಎಂದು ನನಗೆ ತಿಳಿದಿತ್ತು . 
                    ಆದರೆ, ಅದರ ಬಗ್ಗೆ ನನಗೆ ಏನುಮಾಡಬೇಕೆಂ ದು ತಿಳಿದಿರಲಿಲ್ಲ . ಕಸವು ಪರಿಸರಕ್ಕೆ ದೊಡ್ಡ ಅಪಾಯವಾಗಿದೆ. ಇವು ಬಳಸಿದ ಪೇಪರ್, ಟಿಫಿನ್ ಪ್ಯಾ ಕಿಂ ಗಳು, ಪ್ಲಾಸ್ಟಿ ಕ್ ಚೀಲಗಳು, ಐಸ್ ಕ್ರೀ ಮೊದಿಕೆಗಳು, ಬಾಟಲ್ ಕ್ಯಾ ನ್ಗಳು,ಮರಗಳಿಂದ ಬಿದ್ದ ಎಲೆಗಳು ಮತ್ತು ಇನ್ನೂ ವಿವಿಧಮೂಲಗಳಿಂದ ಬರುತ್ತದೆ.
                     ಕಸವು ಆವರಣವನ್ನು ಕೊಳಕು, ಅಶುದ್ಧ ಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ರೋಗಗಳನ್ನು ಹುಟ್ಟು ಹಾಕುತ್ತದೆ ಎಂದು ನನಗೆ ತಿಳಿದಿದೆ. ಎಸೆಯಲ್ಪಟ್ಟ ಬಹಳಷ್ಟು ಕಸವು ನವೀಕರಿಸಬಹುದಾದ ಮತ್ತು ಮರುಬಳಕೆಮಾಡಬಹುದಾದ ಕಾಗದ,ಲೋಹಗಳು ಮತ್ತು ಗಾಜಿನಂತಹ ವಸ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ, ಅದನ್ನು ಹತ್ತಿರದ ಮರುಬಳಕೆ ಕೇಂದ್ರ ಕ್ಕೆ ಕಳುಹಿಸಬಹುದು ಅಥವಾ ಜಂಕೀಲರ್ಗೆ ವಿಲೇವಾರಿಮಾಡಬಹುದು. 
                    ಇಂದಿನಿಂದ, ನಾನು ನನಗೆ ತಿಳಿದಿರುವ ವಸ್ತುಗಳನ್ನು ಮರುಬಳಕೆಮಾಡಲು ಪ್ರಯತ್ನಿ ಸುತ್ತೇ ನೆ.Did you listen to the paragraph</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="No" />
                     
                    </RadioGroup>
                  </Stack>
                </CardContent>
         </Card>
         
         <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>Please summarize the main points of the paragraph?/ಮೇಲಿನ ಪರಿಚ್ಚೇ ದದ ಮುಖ್ಯ ಅಂಶಗಳನ್ನು ನೀವುಸಂಕ್ಷಿಪ್ತವಾಗಿ ತಿಳಿಸಿ. (ಸತ್ಯ ತೆ ಮತ್ತು ಭಾವನೆಗಳೆರಡನ್ನೂ ವಿಶ್ಲೇ ಷಿಸುವುದು)</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="parapoints" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
          </Card>

          <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>Please ask two questions that can help you understand the previous paragraph better?/ಹಿಂದಿನ ಪರಿಚ್ಛೇ ದವನ್ನು ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವ ಎರಡು ಪ್ರಶ್ನೆ ನೀವು ಕೇಳಿ.</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="twoquestions" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
          </Card>

          <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>Please name three infrastructure of your village?/ಗ್ರಾಮದಲ್ಲಿ ಇರುವ ಮೂರುಮೂಲಸೌಕರ್ಯಗಳನ್ನು ಹೆಸರಿಸಿ.</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="twoquestions" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
          </Card>
         
          <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2" style={{color:"#ff7424"}}>I Know the need of my community/ನನ್ನ ಸಮುದಾಯದ ಅವಶ್ಯಕತೆ ನನಗೆ ತಿಳಿದಿದೆ</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
         </Card>

         <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2" style={{color:"#ff7424"}}>I have come together with other community members to make a change in our community infrastructure/ನಮ್ಮ ಸಮುದಾಯದ ಮೂಲಸೌಕರ್ಯದಲ್ಲಿ ಬದಲಾವಣೆ ಮಾಡಲು ನಾನು ಇತರ ಸಮುದಾಯದ ಸದಸ್ಯರೊಂದಿಗೆ ಸೇರಿಕೊಂಡಿದ್ದೇನೆ</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
         </Card>


         <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>Tell us about one instance when you came together with other community members to make a change in the community infrastructure/ಸಮುದಾಯದ ಮೂಲಸೌಕರ್ಯದಲ್ಲಿ ಬದಲಾವಣೆಯನ್ನು ಮಾಡಲು ನೀವು ಇತರ ಸಮುದಾಯದ ಸದಸ್ಯರೊಂದಿಗೆ ಸೇರಿಕೊಂಡಾಗ ಒಂದು ಉದಾಹರಣೆಯ ಕುರಿತು ನಮಗೆ ತಿಳಿಸಿ</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="instance" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
          </Card>

          <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2" style={{color:"#ff7424"}}>When you want to bring someone together and want to get an action done/ನೀವು ಯಾರನ್ನಾದರೂ ಒಟ್ಟಿಗೆ ಸೇರಿಸಲು ಬಯಸಿದಾಗ ಮತ್ತು ಕ್ರಿಯೆಯನ್ನು ಮಾಡಲು ಬಯಸಿದಾಗ</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Most often I am successful" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="I am successful at doing this" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="I struggle to bring women together" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="I am successful at getting women together but not getting an action done" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
         </Card>

         <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2" style={{color:"#ff7424"}}>At the end of a conflict it matters to me that the other person's interest/need has been met as well as mine
                          / ಘರ್ಷಣೆಯ ಕೊನೆಯಲ್ಲಿ ಇನ್ನೊಬ್ಬರ ಆಸಕ್ತಿ/ಅವಶ್ಯಕತೆ ನನ್ನ ಜೊತೆಗೆ ಪೂರೈಸಲ್ಪಟ್ಟಿದೆ ಎಂಬುದು ನನಗೆ ಮುಖ್ಯವಾಗಿದೆ</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="opt1" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="opt2" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="opt3" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="opt4" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                      <FormControlLabel value="opt5" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
         </Card>



         <Card style={{ marginTop: 10, borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2" style={{color:"#ff7424"}}>There is a puja at my house and I am sitting for it. Suddenly, my neighbour plays loud and inappropriate music which disturbs the puja.
                   How will you talk to your neighbour on the grivance you have with them?/ನನ್ನ ಮನೆಯಲ್ಲಿ ಪೂಜೆ ಇದೆ ಅದಕ್ಕಾಗಿ ಕುಳಿತಿದ್ದೇನೆ. 
                   ಇದ್ದಕ್ಕಿದ್ದಂತೆ, ನನ್ನ ನೆರೆಹೊರೆಯವರು ಜೋರಾಗಿ ಮತ್ತು ಅನುಚಿತವಾದ ಸಂಗೀತವನ್ನು ನುಡಿಸುತ್ತಾರೆ ಅದು ಪೂಜೆಗೆ ಅಡ್ಡಿಪಡಿಸುತ್ತದೆ. 
                   ನಿಮ್ಮ ನೆರೆಹೊರೆಯವರೊಂದಿಗೆ ನೀವು ಹೊಂದಿರುವ ಕುಂದುಕೊರತೆಯ ಬಗ್ಗೆ ನೀವು ಹೇಗೆ ಮಾತನಾಡುತ್ತೀರಿ?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="instance" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
          </Card>



              {/* -------------------------------- */}
          
        </Grid>
      </Dialog>
    </div>
  );
}
