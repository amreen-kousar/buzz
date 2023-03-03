import { useState, useEffect } from 'react';
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
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

export default function busTestList() {

    const [clcikData, setClickData] = useState()
  
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
        "fromDate":new Date(),
         "toDate":"2023-03-3", 
         "bus_id":56,
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
           
            setBuses(response?.data?.list)
        
           
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
console.log(buses,"responseeeeebus list")

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
          <TableContainer component={Paper} sx={{width:'30vw',justifyContent:'center',alignItems:'center',ml:10}}>
          <Table aria-label="customized table">
           
            <TableBody>
             <TableRow>
              <TableCell>Bus Number</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Register Date</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Engine Number</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Chasis Number</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Insurance Number</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
               <TableRow>
              <TableCell>Insurance Company</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Insurance Start Date</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Insurance End Date</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Last Service Date</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Next Service Date</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Permit Details</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Fitness Certificate</TableCell>
                <TableCell>: </TableCell>
             </TableRow>
              <TableRow>
              <TableCell>Emission Date</TableCell>
                <TableCell>: </TableCell>
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