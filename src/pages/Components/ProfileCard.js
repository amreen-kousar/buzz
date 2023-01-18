import { useEffect, useState } from 'react';
import React from "react";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Button, Stack, TextField, Grid, Divider,Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Edit from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
}));
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RecipeReviewCard({profileData,changeUser}) {
  const [expanded, setExpanded] = React.useState(false);
 
  const [editData,setEditData]= useState({
    firstName:profileData?.first_name,
    lastName:profileData?.last_name,
    gender:profileData?.gender,
    doj:profileData?.doj,
    pincode:profileData?.pincode,
    officeMailId:profileData?.officeMailId,
    personalMailId:profileData?.personalMailId,
    contactNum:profileData?.contactNum,
    workNum:profileData?.workNum,
    address:profileData?.address,
    address1:profileData?.address1,
    address2:profileData?.address2,
    empRole:profileData?.role_name,
    supervisorId:profileData?.supervisorId,
    status:profileData?.status,
    project_list:profileData?.project_list,
    license_number:profileData?.license_number,
    createdBy:profileData?.id,
    lastUpdatedBy:profileData?.id
  })
  useEffect(()=>{
    setEditData({
      firstName:profileData?.first_name,
      lastName:profileData?.last_name,
      gender:profileData?.gender,
      doj:profileData?.doj,
      pincode:profileData?.pincode,
      officeMailId:profileData?.officeMailId,
      personalMailId:profileData?.personalMailId,
      contactNum:profileData?.contactNum,
      workNum:profileData?.workNum,
      address:profileData?.address,
      address1:profileData?.address1,
      address2:profileData?.address2,
      empRole:profileData?.role_name,
      supervisorId:profileData?.supervisorId,
      status:profileData?.status,
      project_list:profileData?.project_list,
      license_number:profileData?.license_number,
      createdBy:profileData?.id,
      lastUpdatedBy:profileData?.id
    })
  },[profileData])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
   console.log(editData,profileData,"<---345678i")
  const editProfile = async => {
    console.log(editData,"<----editProfileeditProfile")
    const userDetails = localStorage?.getItem("userDetails")
    var data = JSON.stringify({
      "id": JSON?.parse(userDetails)?.id,
      "countryID": 1,
      "first_name": editData?.firstName,
      "last_name": editData?.lastName,
      "gender": editData?.gender,
      "doj": editData?.doj,
      "pincode": editData?.pincode,
      "officeMailId": editData?.officeMailId,
      "personalMailId": editData?.personalMailId,
      "contactNum": editData?.contactNum,
      "workNum": editData?.workNum,
      "address": editData?.address,
      "address1": editData?.address1,
      "address2": editData?.address2,
      "empRole": editData?.empRole,
      "supervisorId": editData?.supervisorId,
      "status": editData?.status,
      "createdBy": editData?.createdBy,
      "lastUpdatedBy": editData?.lastUpdatedBy,
      "project_list": editData?.project_list,
      "license_number": editData?.license_number
    });
     console.log("ediuyjyhtgrfde",data)
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/editUser.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      setEditData(response.data)
      changeUser()
      console.log(JSON.stringify(response.data,'<------ghjhgjghjhg'));
      <Alert severity="success">Updated Data!</Alert>

    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
        avatar={
          <Avatar sx={{ bgcolor: "#ed6c02", width: 100, height: 100, marginLeft: 13 }} aria-label="recipe">
            P
          </Avatar>
        }
        // action={
        //     <Chip label="focus" size="small" color="success" variant="filled" />
        // }
      />
      <Typography variant="h6" marginLeft={13}>
       {profileData?.first_name} {profileData?.last_name}
      </Typography>
     
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Card>
          <CardContent>
        <Typography variant="body1" gutterBottom>
          Role: {profileData?.role_name}
        </Typography>
        <Typography variant="body1" gutterBottom>
        Status:{profileData?.status}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Reporting Manager: {profileData?.supervisorName===""  ? "-":profileData?.supervisorName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Date of Joining: {profileData?.doj}
        </Typography>
        </CardContent>
        </Card>


       {/* <Card>
        <CardContent>
          <Typography variant="h6" sx={{color:"white",bgcolor:"#9c9e7f",height:"30px"}} >Contact Information</Typography>
        <Typography variant="body1" gutterBottom>
          Mobile: {profileData?.contactNum}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Work : {profileData?.officeMailId}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email : {profileData?.personalMailId}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Address: {profileData?.address}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Pincode:{profileData?.pincode}
        </Typography>
        </CardContent>
        </Card> */}
      </CardContent>
      <CardContent>
  <TableContainer >
    <Table aria-label="customized table"  >
      {/* <TableHead style={{width:"50px"}}>Contact Information</TableHead> */}
      <TableBody >
        <TableRow style={{ height: "8px !important" }} >
          <TableCell > Mobile </TableCell>
          
          <TableCell>{profileData?.contactNum}</TableCell>
        </TableRow>
        <TableRow style={{ height: "8px !important" }} >
          <TableCell style={{ width: "8px" }}> Work</TableCell>
          <TableCell>{profileData?.officeMailId}</TableCell>
        </TableRow>
        <TableRow style={{ height: "8px !important" }} >
          <TableCell style={{ width: "8px" }}>Email</TableCell>
          <TableCell>{profileData?.personalMailId}</TableCell>
        </TableRow>
        <TableRow style={{ height: "8px !important" }} >
          <TableCell style={{ width: "8px" }}>Address</TableCell>
          <TableCell>{profileData?.address}</TableCell>
        </TableRow>
        <TableRow style={{ height: "8px !important" }} >
          <TableCell style={{ width: "8px" }}>Pincode:</TableCell>
          <TableCell>{profileData?.pincode}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</CardContent>
{/* <Typography variant="body1" gutterBottom>
          Projects: {profileData?.project_list}
        </Typography> */}

      <CardActions disableSpacing>
        <ExpandMore expand={expanded}  aria-expanded={expanded} aria-label="show more">
          <Button variant="warning"
            sx={{
              ':hover': {
                bgcolor: '#ffd796', // theme.palette.primary.main
                color: '#ed6c02',
              },
              ':focus':{
                bgcolor:'#ffd796',
                color:"#ed6c02"
              },
              bgcolor:'#ffd796',
              color:"#ed6c02"
            }} component={RouterLink} to="#"  startIcon={<Iconify icon="eva:plus-fill" />}>
            Edit User
          </Button>
          {/* <Edit /> */}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack mb={3} style={{ backgroundColor: '#ffd796', borderRadius: 9 }}>
            <Typography
              variant="h6"
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                color:'#ed6c02'
              }}
            >
              Edit User Information
            </Typography>
          </Stack>
          <Card>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                UserName: {profileData?.firstName} {profileData?.last_name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Role: {profileData?.role_name}
              </Typography>
              <Typography variant="body1" mb={1.5} gutterBottom>
                Email: {profileData?.officeMailId}
              </Typography>
            </CardContent>
          </Card>
          <Stack mb={1.5}>
            <Divider variant="middle" />
          </Stack>
          <Grid  direction={'column'} spacing={1.8} alignItems="center" justifyContent="space-between">
            <Grid item  mb={1}>
              <TextField
                fullWidth
                helperText="Mobile Number Required *"
                size="small"
                margin="dense"
                value={editData?.contactNum}
                onChange={(e)=>{setEditData({...editData,contactNum:e?.target?.value})}}
                type="number"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                id="Mobile-Number"
                label="Mobile Number"
                variant="outlined"
              />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small" id="Work" label="Work" variant="outlined"  />
            </Grid>
            <Grid item mb={2}>
              <TextField
              fullWidth
                helperText="Address Required *"
                size="small"
                id="Address"
                value={editData?.address}
                onChange={(e)=>{setEditData({...editData,address:e?.target?.value})}}
                label="Address"
                variant="outlined"
              />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small" id="Address1"
                 value={editData?.address1}
                 onChange={(e)=>{setEditData({...editData,address1:e?.target?.value})}}
              label="Address1" variant="outlined" />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small"
                 value={editData?.address2}
                 onChange={(e)=>{setEditData({...editData,address2:e?.target?.value})}}
              id="Address2" label="Address2" variant="outlined" />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small" id="PinCode"
                 value={editData?.pincode}
                 onChange={(e)=>{setEditData({...editData,pincode:e?.target?.value})}}
              label="PinCode" variant="outlined" />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end">
          <Button onClick={editProfile} variant="warning"
            sx={{
              ':hover': {
                bgcolor: '#ffd796', // theme.palette.primary.main
                color: '#ed6c02',
              },
              ':focus':{
                bgcolor:'#ffd796',
                color:"#ed6c02"
              },
              bgcolor:'#ffd796',
              color:"#ed6c02"
            }}  component={RouterLink} to="#" startIcon={<Iconify icon="eva:save-fill" />}>
            Save
          </Button>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
