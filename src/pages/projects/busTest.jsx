import { useState, useEffect } from 'react';
import { Card, Stack, Chip,Button, Container,DialogContent,DialogContentText, Typography, Grid, IconButton,TextField } from '@mui/material';
import ProjectMultiDrawer from '../Components/ProjectMultiDrawer';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/Iconify';
import axios from 'axios';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Page from 'src/components/Page';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function busTestList() {
  const {state} = useLocation()

    const [clcikData, setClickData] = useState()
    const [date1, setDate1] = useState(null)
    const [open, setOpen] = React.useState(false);
    const [date2, setDate2] = useState(null)
    var  [selected, setSelected] = useState(null)
    const [buses, setBuses] = useState();
    useEffect(() => {
        busesdata()
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
        const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose=()=>{
    
        setOpen(false)
      }
      const onDateSubmit = (e) => {
        console.log(e,"hyyyyyyyyyyy")
        setSelected({  name: `${e?.fromDate} to ${e?.toDate}` })  
        busesdata(e?.fromDate, e?.toDate, "date")
        handleClose()
   
      }
    const handleDelete = () => {
      setSelected(null)
        busesdata();
    }
  
   
    const busesdata = async (i, id, g) => {
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var role = JSON.parse(localStorage.getItem('userDetails'))?.role
      
        const data = JSON.stringify({
        "fromDate":date1 && moment(date1?.$d)?.format('YYYY-MM-DD'),
        "toDate":date2 && moment(date2?.$d)?.format('YYYY-MM-DD'), 
        "bus_id":state?.id,
        });
    
        console.log(data, "checking for search",state?.id)
    
        const config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/getBusData.php',
          headers: {
            'Content-Type': 'application/json'
          },
          data
        };
    
        axios(config)
          .then((response) => {
            console.log("respoonse in Bus List", response.data)
           
            setBuses(response?.data)
        
           
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
{console.log(buses,"buesesssssssssss")}

    return (

        <Container>
             <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    Bus Details  <Button variant="secondary" title="Choose date"  onClick={handleClickOpen}> <Iconify sx={{width:30,height:30}} icon="material-symbols:calendar-month"/>
                  </Button>
                </Typography>
             
            </Stack> 
             
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
       
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
       Choose Date
       <Button style={{float:'right',color:'white'}} onClick={() => onDateSubmit({ fromDate: moment(date1?.$d)?.format('YYYY-MM-DD'), toDate: moment(date2?.$d)?.format('YYYY-MM-DD') })}>Submit</Button>
          </Typography>
        
          </Toolbar>
        </AppBar><br/>
       
            <Stack sx={{marginTop:5,marginLeft:5,marginRight:5}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            inputFormat="DD/MM/YYYY"
            views={["day", "month", "year"]}
            defaultValue={date1}
            value={date1}
            onChange={(newValue) => {
              console.log(newValue, "<----newValuenewValue")
              setDate1(newValue)
              busesdata()
            }}
            renderInput={(params) => <TextField {...params} color="common" />}
          />
        </LocalizationProvider>
      </Stack>
      <Stack sx={{margin:5}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="to"
            inputFormat="DD/MM/YYYY"
            views={["day", "month", "year"]}
            defaultValue={date2}
            value={date2}
            onChange={(newValue) => {
              console.log(newValue, "<----newValuenewValue")
              setDate2(newValue)
              busesdata()
            }}
            renderInput={(params) => <TextField {...params} color="common" />}
          />
        </LocalizationProvider>
      </Stack><br/>
 
      </Dialog>
      {
                    selected && <><Chip label={` ${selected?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
      }
         <TableContainer component={Paper} sx={{width:'40vw',justifyContent:'center',alignItems:'center',ml:10}}>
          <Table aria-label="customized table">
           
            <TableBody>
             <TableRow>
              <TableCell>Bus Number</TableCell>
              {(buses?.code!=404)?  <TableCell>:&nbsp;{buses?.register_number} </TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
               <TableRow>
              <TableCell>Register Date</TableCell>
              {(buses?.code!=404)?  <TableCell>:&nbsp;{buses?.register_date}</TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
               <TableRow>
              <TableCell>Engine Number</TableCell>
              {(buses?.code!=404)?   <TableCell>:&nbsp;{buses?.engine_number}</TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
               <TableRow>
              <TableCell>Chasis Number</TableCell>
              {(buses?.code!=404)?<TableCell>:&nbsp;{buses?.chassis_number} </TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
               <TableRow>
              <TableCell>Insurance Number</TableCell>
              {(buses?.code!=404)?   <TableCell>:&nbsp;{buses?.insurance_number}</TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
               <TableRow>
              <TableCell>Insurance Company</TableCell>
              {(buses?.code!=404)?  <TableCell>:&nbsp;{buses?.insurance_company}</TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
              <TableRow>
              <TableCell>Insurance Start Date</TableCell>
              {(buses?.code!=404)?<TableCell>:&nbsp;{buses?.insurance_start_date}</TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
              <TableRow>
              <TableCell>Insurance End Date</TableCell>
              {(buses?.code!=404)? <TableCell>:&nbsp;{buses?.insurance_end_date}</TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
              <TableRow>
              <TableCell>Last Service Date</TableCell>
              {(buses?.code!=404)?  <TableCell>:&nbsp;{buses?.last_service_date} </TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
              <TableRow>
              <TableCell>Next Service Date</TableCell>
              {(buses?.code!=404)? <TableCell>:&nbsp;{buses?.next_service_due_date} </TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
              <TableRow>
              <TableCell>Permit Details</TableCell>
              {(buses?.code!=404)?   <TableCell>:&nbsp;{buses?.permit} </TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
              <TableRow>
              <TableCell>Fitness Certificate</TableCell>
              {(buses?.code!=404)? <TableCell>:&nbsp;{buses?.fitness_certificate} </TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
              <TableRow>
              <TableCell>Emission Date</TableCell>
              {(buses?.code!=404)?  <TableCell>:&nbsp;{buses?.emission_date} </TableCell>: <TableCell>:&nbsp;null</TableCell>}
             </TableRow>
             
            </TableBody>
          </Table>
        </TableContainer>

        </Container>

    );
}
const styles = {
    card1: {
        backgroundColor: '#f5f5f5',
        opacity: 0.9,
        marginTop: "20px",
        padding: "1rem"
    },
}