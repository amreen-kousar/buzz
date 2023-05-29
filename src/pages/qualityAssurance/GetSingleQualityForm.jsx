import * as React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import {
  Button,
  Grid,
  Stack,
  TextField,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  Checkbox,
  Box,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
  CardActionArea,
  DialogContent,
  DialogContentText,
  FormHelperText,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import DialogForm from './components/DialogForm';
import Tab from '@mui/material/Tab';
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
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import { Icon } from '@iconify/react';
import products from 'src/_mock/products';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import { ReplayCircleFilled } from '@mui/icons-material';
import { baseURL } from 'src/utils/api';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GetSingleQualityForm = ({ item, open, handleClose }) => {
  const [sendForm, setSendForm] = useState('');
  useEffect(() => {
    if (item === undefined) {
      console.log('gettting as undefined');
    } else {
      // Formrender(item)
      setSendForm(item);
      console.log(sendForm, '  Formrender(item) ');
    }
    console.log('mounting is working');
  }, [item]);
  console.log(item, 'heckitem');
  const myJSON = JSON.stringify(item);
  console.log(item, 'heck');

  const Formrender = () => {
    console.log(item, 'Formrender');
    return (
      <>
        {Object?.entries(item).map(([key, value]) => (
          <div key={key}>
            {key == 'id' || key == 'emp_id' || key == 'role_id' || key == 'email_address' ? null : (
              <Card style={{ marginTop: 20, borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{ color: '#ff7424' }}>
                    {key.charAt(0).toUpperCase() + key.slice(1).replaceAll('_', '  ')}{' '}
                  </Typography>
                  <Stack mt={2}>
                    <Typography>Answer: {value}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
          <Toolbar sx={{ bgcolor: '#ff7424' }}>
            <IconButton style={{ color: 'white' }} onClick={handleClose}>
              <Iconify icon="material-symbols:arrow-back-rounded" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: 'white' }} variant="h6" component="div">
              Individual Quality Assurance working
            </Typography>
          </Toolbar>
        </AppBar>

        {/* <div style={{marginTop:"60px"}}>
      <Formrender/>
      </div> */}
        {/* 1 */}
        <Grid style={{ backgroundColor: '#FFD580', marginTop: '30px' }}>
          <Typography>PAGE 1</Typography>
          <Card sx={{ mt: 4, margin: '20px' }}>
            <CardContent>
              <Typography>
                The purpose of this 'Buzz training quality evaluation' form is -<br />
                1. To evaluate if the standard pedagogical practices are being followed in Buzz Meeting/Training
                <br />
                2. To evaluate the effectiveness of training
                <br />
                3. To record and reflect on the trainers / facilitator's competency and facilitation
                <br />
                4. to record/Identify stories from community
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ mt: 4, margin: '20px' }}>
            <CardContent>
              <Typography>Email</Typography>
              <Stack mt={2} mb={2}>
                {/* <TextField required label="Your Answer" variant="outlined" color="common" /> */}
                <TextField
                  type="email"
                  required
                  inputProps={{ required: true }}
                  label="Your Answer"
                  variant="outlined"
                  color="common"
                  onChange={(e) => setSendForm({ ...sendForm, email_address: e.target.value })}
                  value={sendForm?.email_address}
                />
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ mt: 2, margin: '20px' }}>
            <CardContent>
              <Typography>Name of the Assessor</Typography>
              <Stack mt={2} mb={2}>
                <TextField
                  required
                  inputProps={{ required: true }}
                  label="Your Answer"
                  variant="outlined"
                  color="common"
                  onChange={(e) => setSendForm({ ...sendForm, name_of_the_assessor: e.target.value })}
                  value={sendForm?.name_of_the_assessor}
                />
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ margin: '20px' }}>
            <CardContent>
              <Stack>
                <Typography variant="body2"> Date of the evaluation of the training/meeting</Typography>
                <Stack mt={2} mb={2}>
                  <DateTimePicker
                    id="date-time-picker"
                    minDate={sendForm?.entry_date}
                    required
                    label="From"
                    onChange={(e) => {
                      handleTime(e);
                    }}
                    value={sendForm?.entry_date}
                    PopperProps={{
                      placement: 'top',
                    }}
                    renderInput={(params) => (
                      <TextField required inputProps={{ required: true }} {...params} color="common" />
                    )}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          //programAssessment
          {/* <Card sx={{ margin:"20px"}}>
        <CardContent>
        <Stack mt={2}>
                <Typography>
                   Program Assessment
                </Typography>
                <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="Natural Resource"
              name="radio-buttons-group"
              value={programAssessment}
              onChange={handleprogramassessment}
            >
                
                    <FormControlLabel value="1"  control={<Radio style={{color:"#595959"}}/>} label="Self Shakti Training Program" />
                    <FormControlLabel value="2" control={<Radio style={{color:"#595959"}}/>} label="Gelathi Program" />
                    <FormControlLabel value="3" control={<Radio style={{color:"#595959"}}/>} label="Self Shakti by Gelathi" />
                   
                  </RadioGroup>
              
              </Stack>
        </CardContent>
       {poa?.length !=0?  <CardContent>
        <Stack mt={2}>
                <Typography>
                Select Poa
                </Typography>
                <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="Name of the Poa">Poa</InputLabel>
        <Select
          labelId="Name of the Poa"
          id="Name of the Poa"
          value={sendForm?.today_poa}
          label="Poa"
          onChange={(e =>{
            setSendForm({ ...sendForm, today_poa:e?.target?.value})
          })}
        >
          {poa?.map(itm =>{
            return (
              <MenuItem value={itm?.name}>{itm?.name}</MenuItem>
            )
          })}

        </Select>
      </FormControl>
    </Box>


              </Stack>
        </CardContent>: null}
     </Card> */}
          <Card sx={{ margin: '20px' }}>
            <CardContent>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="Name of the District">Name of the District</InputLabel>
                  <Select
                    labelId="Name of the District"
                    id="Name of the District"
                    value={sendForm?.name_of_the_district}
                    label="Name of the District"
                    onChange={(e) => {
                      console.log(e, 'distruct target value');
                      setFormDistrictName(e?.target?.value);
                    }}
                  ></Select>
                </FormControl>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ margin: '20px' }}>
            <CardContent>
              <Stack>
                <Typography variant="body2">Name of the District</Typography>
                <Stack mt={2} mb={2}>
                  <TextField
                    required
                    inputProps={{ required: true }}
                    label="Your Answer"
                    variant="outlined"
                    color="common"
                    onChange={(e) =>
                      setSendForm({
                        ...sendForm,
                        name_of_the_village_and_the_venue_of_meeting_or_training: e.target.value,
                      })
                    }
                    value={sendForm?.name_of_the_district}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ margin: '20px' }}>
            <CardContent>
              <Stack>
                <Typography variant="body2">Name of the village </Typography>
                <Stack mt={2} mb={2}>
                  <TextField
                    required
                    inputProps={{ required: true }}
                    label="Your Answer"
                    variant="outlined"
                    color="common"
                    onChange={(e) =>
                      setSendForm({
                        ...sendForm,
                        name_of_the_village_and_the_venue_of_meeting_or_training: e.target.value,
                      })
                    }
                    value={sendForm?.name_of_the_village_and_the_venue_of_meeting_or_training}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <br />
      </Dialog>
    </div>
  );
};

export default GetSingleQualityForm;
