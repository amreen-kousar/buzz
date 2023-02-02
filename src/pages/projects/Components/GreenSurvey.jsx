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
                  <Typography variant="subtitle2">Enter Your Email</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Email" label="Email" variant="outlined" color="common" />
                  </Stack>
                  <Typography variant="subtitle2">No Of Surveyors</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answer" label="Your Answer" variant="outlined" color="common"/>
                  </Stack>
               
                  <Typography variant="subtitle2">No Of Respondent</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answer" label="Your Answer" variant="outlined" color="common" />
                  </Stack>
              
                  <Typography variant="subtitle2">Village Name</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Village" label="Village Name" variant="outlined" color="common"/>
                  </Stack>
               
                  <Typography variant="subtitle2">Phone Number</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Phone Number" label="Phone Number" variant="outlined" color="common" />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2">Which Of The Following Are Natural Resources</Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked style={{color:"#595959"}} />} label="Soil" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Water" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="MotorCycle" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Money" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Trees Borwell" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="House" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2">
                    How Is Change In State Of Natural Resources Impacting Your Life ?
                  </Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked style={{color:"#595959"}} />} label="Quality Of Food Degrading" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Negatively Affecting Agriculture Income" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Drinking Water Scaricity" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Frequent Illness In Children" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}  />} label="Bodily Discomfort" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Loss Of Jobs / Lack Of Work" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="There Is No Impact On My Life" />
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2">Natural Wealth For Me Is ?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Natural Resource"
                        control={<Radio style={{color:"#595959"}} />}
                        label="To Enjoy Natural Resource As A Human Being Without Any Limits"
                      />
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2">Have You Heard of Climate Change ?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Natural Resource"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}}  />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Typography variant="subtitle2">What Do You Know All About It ?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Answe" label="Your Answer" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography variant="subtitle2">Do You Notice Any Change In The Weather/Climate In Last 30 Years ?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Natural Resource"
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
                  <Typography variant="subtitle2">
                    What Kind Of Changes Happened To The Climate ?
                  </Typography>
                  <Stack mt={2}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked style={{color:"#595959"}} />} label="Excessive Temperature" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Excessive Cold" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}}  />} label="Frequent Flood" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Unseasonal Rainfall" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Bodily Discomfort" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="Loss Of Jobs / Lack Of Work" />
                      <FormControlLabel control={<Checkbox style={{color:"#595959"}} />} label="There Is No Impact On My Life" />
                    </FormGroup>
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
