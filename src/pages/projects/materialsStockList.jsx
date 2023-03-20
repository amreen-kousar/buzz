import { useState, useEffect } from 'react';
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import { Link,useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/Iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Page from 'src/components/Page';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
export default function MaterialStockList() {
  const {state} = useLocation()
    const [clcikData, setClickData] = useState()
    const [materialStock, setmaterialStock] = useState([{ stockname: "fist" }, { stockname: "second" }]);
    const [demo, setDemo] = useState([]);

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
    
  useEffect(() => {
    demoi()
  }, []
  )

    const demoi = async () => {
      
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var role =JSON.parse(localStorage.getItem('userDetails'))?.role
        var data = JSON.stringify({
            "project_id":state?.id
        });
     
    
        console.log(data, "checking for search",state?.id)
        const config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/getStockItems.php', 
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          data
        };
        console.log("dataaaaaaaaaaaaa", data);
    
        axios(config)
          .then((response) => {
            console.log("responseeeeeeeeeeee", response)
            setDemo(response.data?.data)
            console.log(response.data?.data,"stockdataaaaaaaaa");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    return (
        <Page title="Buzz Stock">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                   Material Stock List 
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack> 
            <Grid
        sx={{
          p: 1,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <TableContainer component={Paper} sx={{justifyContent:'center',alignItems:'center',ml:10}}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
                <StyledTableCell>ITEM</StyledTableCell>
                <StyledTableCell>Available</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demo && demo.map((row) => (
                <StyledTableRow >
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.quantity_exist}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer></Grid>
        </Container>
        </Page>

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