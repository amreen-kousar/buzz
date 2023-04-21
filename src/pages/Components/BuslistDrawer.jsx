import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// material
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  Card,
  CardContent,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { ColorManyPicker } from '../../components/color-utils';
import BusEdit from './Buslistfilters/BusEdit'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Color } from '@mui/material';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { DetailsRounded } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// ----------------------------------------------------------------------


BuslistDrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function BuslistDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, bus_id, deletebuses,busesd,updatedata }) {
  const [detailsData, setDetailsData] = useState();
  const [deletebus, setDeleteBus] = useState();
  const [userUpdate,setUserUpdate]=useState(false)

  useEffect(()=>{
    details()
    },[userUpdate]
    )
  var userAccess = ['2']

  var userIdCheck = localStorage?.getItem('userId')

  useEffect(() => {
    details()
  }, [clcikData]
  )
  const details = async => {
    console.log(clcikData, "<-----clcikDataclcikData")
    var data = JSON.stringify({
      "bus_id": clcikData?.bus_id
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getBusData.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then(function (response) {

        setDetailsData(response.data)
        updatedata()
        console.log(JSON.stringify(response.data, '<njnjnjn'));
      })
      .catch(function (error) {
        console.log(error, "<---error");
      });

  }



  const userDetails = localStorage?.getItem('userId')

  const DeleteBus = async => {
    var data = JSON.stringify({
      "bus_id": clcikData?.bus_id
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/deleteBus.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        deletebuses()
        setDeleteBus(response.data)
        console.log(response.data, '<------deleteee');
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <>

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 380, },
        }}
        
      >
         <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
            
          
          
                        <IconButton style={{color:"white"}} onClick={onCloseFilter}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography id="bus-details" variant="subtitle2" style={{color:'white'}}>
                    Bus Details
          </Typography>
         
          </Toolbar>
        </AppBar>
        

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
            {/* {userAccess.includes(userIdCheck) && */}
            {(userDetails==2)?<Button onClick={DeleteBus} style={{float:'right',textAlign:'left'}} sx={{
          '&:hover': {
            backgroundColor: 'white',
          },
        }} ><Iconify id="delete-icon" icon="ic:baseline-delete" style={{width:'30px',height:'30px',color:'#e69138',float:'right'}}></Iconify></Button>:null}
           {(userDetails==2)?<BusEdit clcikData={detailsData} busesd={busesd} updatedata={()=>{setUserUpdate(!userUpdate)}} />:null}
            <Card>
                <CardContent>
                {/* <Typography variant="subtitle1" style={{color:"#494646"}}>
                   {`Bus Number : ${detailsData?.register_number}`}
                    </Typography> */}
                {/* <Typography style={{ flexDirection: 'row',color:'#494646' }} variant="subtitle1" gutterBottom>
                    Register Date:&nbsp;
                    {detailsData?.register_date}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Engine Number:&nbsp;
                    {detailsData?.engine_number}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Chassis Number:&nbsp;
                    {detailsData?.chassis_number}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance Number:&nbsp;
                    {detailsData?.insurance_number}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance Company:&nbsp;
                    {detailsData?.insurance_company}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance Start Date:&nbsp;
                   {detailsData?.insurance_start_date}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Insurance End Date:&nbsp;
                    {detailsData?.insurance_end_date}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Last Service Date:&nbsp;
                   {detailsData?.last_service_date}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Next Service Date:&nbsp;
                    {detailsData?.next_service_due_date}</Typography>
                
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Permit Details:&nbsp;
                    {detailsData?.permit}</Typography>
                  
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Fitness Certificate:&nbsp;
                    {detailsData?.fitness_certificate}</Typography>
                 
                  <Typography variant="subtitle1" style={{ flexDirection: 'row',color:'#494646' }} gutterBottom>
                    Emission Date:&nbsp;
                    {detailsData?.emission_date}</Typography> */}

                    <TableContainer >
                  <Table aria-label="customized table"  >
                    {/* <TableHead maxWidth>Contact Information</TableHead> */}
                    <TableBody >
                      <TableRow  >
                        <TableCell>Bus Number</TableCell>
                        <TableCell>:&nbsp;{detailsData?.register_number}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Register Date</TableCell>
                        <TableCell>:&nbsp;{detailsData?.register_date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Engine Number</TableCell>
                        <TableCell>:&nbsp;{detailsData?.engine_number}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Chassis Number</TableCell>
                        <TableCell>:&nbsp;{detailsData?.chassis_number} </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Insurance Number</TableCell>
                        <TableCell>:&nbsp;{detailsData?.insurance_number}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Insurance&nbsp;Company</TableCell>
                        <TableCell>:&nbsp;{detailsData?.insurance_company}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Insurance&nbsp;Start&nbsp;date</TableCell>
                        <TableCell>:&nbsp;{detailsData?.insurance_start_date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Insurance&nbsp;End&nbsp;Date</TableCell>
                        <TableCell>:&nbsp;{detailsData?.insurance_end_date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Last Service Date</TableCell>
                        <TableCell>:&nbsp;{detailsData?.last_service_date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Next Service Date</TableCell>
                        <TableCell>:&nbsp;{detailsData?.next_service_due_date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Permit Details</TableCell>
                        <TableCell>:&nbsp;{detailsData?.permit}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fitness Certificate</TableCell>
                        <TableCell>:&nbsp;{detailsData?.fitness_certificate}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Emission Date</TableCell>
                        <TableCell>:&nbsp;{detailsData?.emission_date}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                
                </CardContent>
              </Card>

            </div>


          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
