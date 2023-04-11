import { useState, useEffect, forwardRef } from 'react';
import axios from 'axios'
import React from "react";
import { PropTypes } from 'prop-types';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {Stack,Checkbox, Card, CardContent, Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CreateGelathiCircle from './CreateGelathiCircle';
import { Container } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
// import SearchBar from '@mkyy/mui-search-bar';
import Box from '@mui/material/Box';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ChooseGelathi( {data1,circle}) {
  var [searchData,setSearchData]=useState('')
    const {state} = useLocation()
console.log(data1,"state")
    const [clcikData, setClickData] = useState()
    const [enrolled, setenrolled] = useState('');
   const [gelathiData,setGelathiData] = useState([])
//  const [selected,setSelected]=useState([])
  const [open, setOpen] = React.useState(false);
  var [search, setSearch] = useState('')
  const searchFunction = (e) => {
    console.log("searchfunctioniscalled",e)
    search = e
    setSearch(search)
    // setSelected({ name: e, type: "Search" })
    enrolledGelathi()
  }
  console.log(search,"serachapi")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const checkBoxData = (itm) =>{
    if(gelathiData?.find(i=>i?.id===itm?.id))
    {
        const filterData = gelathiData?.filter(item=>item?.id!==itm?.id)
        setGelathiData(filterData)
    }else{
        setGelathiData([...gelathiData,itm])
    }
  console.log(itm,"<----dsadasdasdad")
  }

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    enrolledGelathi();
}, []
)
  const enrolledGelathi = async =>{
    var userDetails = JSON.parse(localStorage?.getItem('userDetails'))
var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
        "search": search,
        "project_id": state?.id,
        "emp_id": idvalue,
        "role_id": role
      });

      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getEnrollGelathi.php',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        setenrolled(response.data)
        console.log(response.data,'<---------------setenrolledsetenrolled');
      })
      .catch(function (error) {
        console.log(error);
      });
}
const changeText = (e) => {
  setSearchData(e?.target?.value)
  searchFunction(e?.target?.value)
  console.log(e?.target?.value,"evalueeeeeeee")
}


  return (
    <div>

        
     <Button variant="contained" onClick={handleClickOpen} style={{
        float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
        position: 'fixed', zIndex: '1', bottom: 40, right: 40
      }} sx={{
        ':hover': {
          bgcolor: '#ffd796',
          color: '#ff7424',
          border: '#ffd796'
        },
        bgcolor: '#ffd796',
        color: "#ff7424",
        border: 'none'
      }} title="Create POA">
      <span style={{ fontSize: "2rem" }}>+</span>
      </Button>

      <Dialog
        fullScreen
        open={open}

        onClose={handleClose}
        TransitionComponent={Transition}
      >
       
      
        
        <Stack direction="row">
        <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" color='inherit'>
             Gelathis 
            </Typography>
             
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
            <CreateGelathiCircle handleCloseGelathi={handleClose} gelathiData={gelathiData} circle={circle} data1={data1} />
          </Toolbar>
         

        </AppBar>
        </Stack>
        {/* <Card><CardContent>Project : {props.data1?.props.data1?.project_name}</CardContent></Card> */}
       <br/><br/> 
       <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1 },

                            }}

                        >
                          <TextField id="outlined-basic" label="Search..." sx={{flex: 10}}  onChange={(e) => { changeText(e) } } InputProps={{
          startAdornment: (
            <Button ><InputAdornment position="start">
              
            <SearchIcon />
          </InputAdornment></Button>
            
          ),
        }}variant="outlined" style={{marginTop: 40, marginLeft:10,  width: 1240}}/>
        <Card><CardContent>Project : {data1?.project_name} </CardContent></Card>
          {enrolled?.list?.length!==0?enrolled?.list?.map((itm) => {
                return (
        <Stack> 
       
        <Card style={{marginTop:10}}>
        <CardContent direction={'row'}>
        <Stack>
        <Typography variant="subtitle1" gutterBottom>
                                {` ${itm?.gelathiname}`}  <Checkbox style={{marginRight: 10}} {...label} onChange={()=>{
checkBoxData(itm)
        }} />
                            </Typography>
                          
    
        <Typography variant="subtitle1" gutterBottom>
                                {` ${itm?.villagename}`}
                            </Typography>
      
        </Stack>
        {/* <Typography variant="subtitle1" gutterBottom>
                                {` ${itm?.villagename}`}
                            </Typography> */}
        </CardContent>
        </Card>
        
       
       


       </Stack>)
            }):
            <>
            <Typography sx={{ ml: 2, flex: 55 }} variant="h6" component="div" color='inherit'>
            No Enrolled Gelathi Found
            </Typography>
             
            {/* <h1>No Enrolled Gelathi Found</h1> */}
            </>}
           
</Box>
</DialogContentText>

</DialogContent>
      </Dialog>


    </div>
  );
}