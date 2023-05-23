import { useEffect, useState, forwardRef } from 'react';
import { useForm } from "react-hook-form";
import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { Container, Stack, Typography, Box, Button, TextField, Grid, Snackbar, Card, CardActionArea, MenuItem } from '@mui/material';

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

    const [todayPoa,setTodayPoa]=useState('');
console.log(props?.componentname,"componenttttttttt")
    useEffect(()=>{
       getPOA();
          },[])

const getPOA =()=>{
    var data = JSON.stringify({
        "type": "2",
        "session_type": ""
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appGo/getPoa',
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


    return (
        <div>
            {
           todayPoa &&  todayPoa?.map(({full_name,name})=>{
                return (
                    <div>{full_name}&nbsp;:&nbsp;{name}</div>
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

        </div>
    );
}