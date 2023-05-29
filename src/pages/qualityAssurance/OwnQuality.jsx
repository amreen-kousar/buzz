import { useEffect, useState, forwardRef } from 'react';
import { useForm } from "react-hook-form";
import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { Container, Stack, Typography, Box, Button, TextField, Grid, Snackbar, Card, CardActionArea, MenuItem, CircularProgress } from '@mui/material';
import { baseURL } from 'src/utils/api';
import GetSingleQualityForm from './GetSingleQualityForm';
import Iconify from 'src/components/Iconify';
// components
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function OwnQuality(props) {
var [singleFormData , setSingleFormData] = useState('')
const [ open ,setOpen] = useState(false)
    const [todayPoa,setTodayPoa]=useState('');
    const [showSingleform ,setShowSingleForm] = useState(false)
console.log(props?.componentname,"componenttttttttt")
    useEffect(()=>{
       getPOA();
          },[])
          var [itmForForm, setItemForForm ] = useState()
          const [openGetSingleQualityForm ,setOpenGetSingleQualityForm] = useState(false)       
const getPOA =()=>{
    var data = JSON.stringify({
        "Emp_id":1,
        "Role_id":1
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


console.log(todayPoa)

const handleClose = ()=>{
    setOpen(false)
  }
  const handleCloseGetSingleQualityForm = ()=>{
    setOpenGetSingleQualityForm(false)
  }
  const singleformHandler = (itm) =>{
    console.log("imworkingfinre")
    setShowSingleForm(true)
    itmForForm = itm
    setItemForForm(itm)
    setOpenGetSingleQualityForm(true)
   }
  
    return (
        todayPoa == "" ?
        <div style={{marginTop:"20%" , marginLeft:"40%"}}>
  <CircularProgress />
  </div>
:
        <div>
            {
           todayPoa &&  todayPoa?.map((itm)=>{
                return (
                    <>
                    <Card id="card-own-ta-amount" style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: "1rem" }} onClick={() => {
                                            
                                            // alert("Work in Progress")
                                                 }} >
                    <Grid id="grid-own-ta-amount" container spacing={2} >
                                            <Grid id="grid-own-open-filter"  item xs={8}>
                                                <b cursor="pointer" style={{ color: "blue" }} >{itm?.name_of_the_assessor}</b><br>
                                                </br>
                                                {/* <Typography id="typography-ta-amount" variant="body" gutterBottom > <b>TA Amount:{itm?.telephone}</b></Typography>
                                            */}
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Iconify id="uiicons-cross" onClick={() => {
                                                    //  handleDeleteTA(itm) 
                                                    singleformHandler(itm)
                                                    // alert("Work in progress")
                                                     }} style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="mdi:form-outline"></Iconify>
                                                {/* <Iconify id="icon-outline-access-time" style={{ float: "right", marginTop: 5, marginRight: 30, fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify>
                                           */}
                                            </Grid>


                                        </Grid>
                    

                    </Card>
                </>
                )
            })
          } 
       
          
             {/* <Select fullWidth variant='standard' color="common"
              labelId="Today POA"
              id="demo-simple-select"
              label="Today POA"
              
          
            >
                <MenuItem value="" style={{ backgroundColor: 'gray' }}> <em>Select POA</em></MenuItem>
                  {
           todayPoa && todayPoa?.map((itm,index)=>{
                return (
                    
                    <MenuItem value={index}>{itm?.full_name} - {itm?.name}</MenuItem>
                )
            })
          }
             
            </Select>  */}

{itmForForm &&   <GetSingleQualityForm item ={itmForForm}  open={openGetSingleQualityForm} handleClose={handleCloseGetSingleQualityForm}/>

     } 
       </div>
    );
}