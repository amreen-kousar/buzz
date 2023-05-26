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
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
}
const SingleQulityDashboard = ({open , handleClose} )=> {

//   const {state} = useLocation()
//   // console.log("🚀 ~ file: GreenSurvey.jsx:48 ~ GreenSurvey ~ enrolledGreenMotivators:", enrolledGreenMotivators)
//   const [open, setOpen] = React.useState(false);

const [value, setValue] = React.useState(0);
const data = localStorage?.getItem('userId')
var [dateValue, setDatevalue] = useState(new Date().toISOString().split('T')[0])
const image = ["tykml", "exrdcftvbgyhnuj"]
const [drawerEvent, SetDrawerEvent] = useState(false);
//const [image, setImage] = React.useState(['data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==', 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==']);
const [viewImage, setViewImage] = React.useState(false);
const [listdata, setListData] = React.useState()
const [openMessage, setOpenMessage] = React.useState(false);
const [message, setMessage] = useState(false)
const [editData, setEditData] = useState(null)
const [openFilter, setOpenFilter] = useState(false);
const [clcikData, setClickData] = useState()
const [teamMembersData, setTeamMembersData] = useState([])
const [mainValue, setMainValue] = useState(0)
const [batch,setBatch] = useState('')

const [shown,setShown] = React.useState(false);

const userOwnPermissions=['9','5','12','4','13','6','3']
const userTeamPermissions=['2','1','12','4','13','3','11']



const [todayPoa,setTodayPoa]=useState('');

    useEffect(()=>{
       getPOA();
          },[])

const getPOA =()=>{
    var data = JSON.stringify({
        "Emp_id":15,
        "Role_id":12
    });
      
      var config = {
        method: 'post',
        url: baseURL + 'listQualityAssessmentForm',
        headers: { 

          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setTodayPoa(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
}




useEffect(()=>{
  if(!userOwnPermissions.includes(data)){
  setMainValue(1)
  }
    },[])
  

const handleOpenFilter = (itm) => {
  // itm.klmtr = +klmtr;
  setEditData(itm)
  console.log(editData)
  setOpenFilter(true);
};

const handleCloseFilter = () => {
  setOpenFilter(false);
};

const getDateValue = (e) => {
  setDatevalue(e)
}

const returnDateValue = () => {
  return dateValue
}

const handleChange = (event, newValue) => {
  setValue(newValue);
};





 
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
  
  return (
    <div>
     
       
       
       
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        
      
      <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
          <Toolbar sx={{ bgcolor: '#ff7424', color: 'white' }} >
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
           Individual Quality Assurance  working in Progress
          </Typography>
 </Toolbar>
              </AppBar>
     
       
              <div  style={{marginTop:"50px"}}>
            {
           todayPoa &&  todayPoa?.map((itm)=>{
                return (
                    <>
                    <Card id="card-own-ta-amount" style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: "1rem" }} >
                    <Grid id="grid-own-ta-amount" container spacing={2} >
                                            <Grid id="grid-own-open-filter" onClick={() => {
                                                //  handleOpenFilter(itm) 
                                                 }} item xs={8}>
                                                <b cursor="pointer" style={{ color: "blue" }} >{itm?.name_of_the_assessor}</b><br>
                                                </br>
                                                {/* <Typography id="typography-ta-amount" variant="body" gutterBottom > <b>TA Amount:{itm?.telephone}</b></Typography>
                                            */}
                                            </Grid>
                                            <Grid item xs={4}>
                                                {/* <Iconify id="uiicons-cross" onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
                                                <Iconify id="icon-outline-access-time" style={{ float: "right", marginTop: 5, marginRight: 30, fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify>
                                           */}
                                            </Grid>


                                        </Grid>
                    

                    </Card>
                </>
                )
            })
          } 
       
          
         
        </div>

      </Dialog>
     
    </div>
  );
}








 

export default SingleQulityDashboard