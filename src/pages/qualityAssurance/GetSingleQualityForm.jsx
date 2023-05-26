
import * as React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
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
  Box,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
  CardActionArea,DialogContent,DialogContentText, FormHelperText
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

const GetSingleQualityForm = ({item ,open ,handleClose }) => {


  return (
    <div>
     
       
       
       
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        
      
      <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
          <Toolbar sx={{ bgcolor: '#ff7424', color: 'white' }} >
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
           Individual Quality Assurance  working in progress
          </Typography>
 </Toolbar>
              </AppBar>
              <Card>
     
     <CardContent>
       
              <div  style={{marginTop:"50px"}}>
            {
           item &&  item?.map((itm)=>{
                return (
                    <>
                    <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Name of vyapari / ವ್ಯಾಪಾರಿಯ ಹೆಸರು *</Typography>
                  <Stack mt={2} >
                  <Typography>Answer: {surveyData?.name_of_the_vyapari}</Typography>
                  </Stack>
                </CardContent>
              </Card>
                </>
                )
            })
          } 
       
          
         
        </div>
</CardContent>
</Card>
      </Dialog>
     
    </div>
  )
}

export default GetSingleQualityForm