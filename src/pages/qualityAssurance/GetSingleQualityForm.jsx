
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
  useEffect(()=>{
    if(item === undefined){
        console.log("gettting as undefined")

    }else{
        // Formrender(item) 
        console.log("  Formrender(item) ")
    }
console.log("mounting is working")

  },[item])
console.log(item , "heckitem")
const myJSON = JSON.stringify(item);
console.log(item , "heck")

const Formrender = () =>{
console.log(item ,"Formrender")
    return(
<>
{Object?.entries(item).map(([key ,value]) =>(
                    <div key={key}>
                      
                  
            { key == "id" || key =="emp_id" || key=="role_id" ||key =="email_address" ?
            null :      
            
            <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>{key.charAt(0).toUpperCase() + key.slice(1).replaceAll('_',"  ")} </Typography>
                  <Stack mt={2} >
                  <Typography>Answer: {value}</Typography>
                  </Stack>
                </CardContent>

              </Card>}
                    </div>
                ))}

</>

    )
}

  return (
    <div>
     
       
       
       
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        
      
     
              <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
          <Toolbar sx={{ bgcolor: '#ff7424' }}>
          
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1,color:"white" }} variant="h6" component="div"   >
                        Individual Quality Assurance
          </Typography>
       
         
          </Toolbar>
          </AppBar>
      
<div style={{marginTop:"60px"}}>
      <Formrender/>
      </div>
        <Grid>
      
      <Card>
     
            <CardContent>
      
             </CardContent>
             </Card>
        </Grid>
      </Dialog>
     
    </div>
  )
}

export default GetSingleQualityForm