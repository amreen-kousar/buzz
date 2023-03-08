import { useState, useEffect } from 'react';
import { Card, Stack, Chip, Container, Typography, Grid, IconButton,TextField } from '@mui/material';
import ProjectMultiDrawer from '../Components/ProjectMultiDrawer';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/Iconify';
import axios from 'axios';
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
export default function busTestList() {

    const [clcikData, setClickData] = useState()
    const [date1, setDate1] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
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

    const busesdata = async (i, id, g) => {
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var role = JSON.parse(localStorage.getItem('userDetails'))?.role
      
        const data = JSON.stringify({
        "fromDate":moment(date1?.$d)?.format('YYYY-MM-DD'),
         "toDate":moment(date2?.$d)?.format('YYYY-MM-DD'), 
         "bus_id":158,
        //   "search": search
        });
    
        console.log(data, "checking for search")
    
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
    


    return (

        <Container>
             <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    Bus Details
                </Typography>
              
            </Stack> 
           <div style={{display:'flex'}}> 
            <Stack>
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
              
            }}
            renderInput={(params) => <TextField {...params} color="common" />}
          />
        </LocalizationProvider>
      </Stack>&nbsp;&nbsp;
      <Stack>
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
            
            }}
            renderInput={(params) => <TextField {...params} color="common" />}
          />
        </LocalizationProvider>
      </Stack></div> <br/>
          <TableContainer component={Paper} sx={{width:'40vw',justifyContent:'center',alignItems:'center',ml:10}}>
          <Table aria-label="customized table">
           
            <TableBody>
             <TableRow>
              <TableCell>Bus Number</TableCell>
                <TableCell>:&nbsp;{buses?.register_number} </TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Register Date</TableCell>
                <TableCell>:&nbsp;{buses?.register_date}</TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Engine Number</TableCell>
                <TableCell>:&nbsp;{buses?.engine_number}</TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Chasis Number</TableCell>
                <TableCell>:&nbsp;{buses?.chassis_number} </TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Insurance Number</TableCell>
                <TableCell>:&nbsp;{buses?.insurance_number}</TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Insurance Company</TableCell>
                <TableCell>:&nbsp;{buses?.insurance_company}</TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Insurance Start Date</TableCell>
                <TableCell>:&nbsp;{buses?.insurance_start_date}</TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Insurance End Date</TableCell>
                <TableCell>:&nbsp;{buses?.insurance_end_date}</TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Last Service Date</TableCell>
                <TableCell>:&nbsp;{buses?.last_service_date} </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Next Service Date</TableCell>
                <TableCell>:&nbsp;{buses?.next_service_due_date} </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Permit Details</TableCell>
                <TableCell>:&nbsp;{buses?.permit} </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Fitness Certificate</TableCell>
                <TableCell>:&nbsp;{buses?.fitness_certificate} </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Emission Date</TableCell>
                <TableCell>:&nbsp;{buses?.emission_date} </TableCell>
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