import { useEffect, useState } from 'react';
import React from "react";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Button, Stack, TextField, Grid, Divider, Box } from '@mui/material';
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
import CloseIcon from '@mui/icons-material/Close';
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

export default function RecipeReviewCard({ profileData, changeUser }) {
  const [expanded, setExpanded] = React.useState(false);
  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  const [count, setCount] = React.useState('');
  const [editData, setEditData] = useState({
    firstName: profileData?.first_name,
    lastName: profileData?.last_name,
    profilepic: profileData?.profile_pic,
    gender: profileData?.gender,
    doj: profileData?.doj,
    pincode: profileData?.pincode,
    officeMailId: profileData?.officeMailId,
    personalMailId: profileData?.personalMailId,
    contactNum: profileData?.contactNum,
    workNum: profileData?.workNum,
    address: profileData?.address,
    address1: profileData?.address1,
    address2: profileData?.address2,
    empRole: profileData?.role_name,
    supervisorId: profileData?.supervisorId,
    status: profileData?.status,
    project_list: profileData?.project_list,
    license_number: profileData?.license_number,
    createdBy: profileData?.id,
    lastUpdatedBy: profileData?.id
  })
  useEffect(() => {
    setEditData({
      firstName: profileData?.first_name,
      lastName: profileData?.last_name,
      profilepic: profileData?.profile_pic,
      gender: profileData?.gender,
      doj: profileData?.doj,
      pincode: profileData?.pincode,
      officeMailId: profileData?.officeMailId,
      personalMailId: profileData?.personalMailId,
      contactNum: profileData?.contactNum,
      workNum: profileData?.workNum,
      address: profileData?.address,
      address1: profileData?.address1,
      address2: profileData?.address2,
      empRole: profileData?.role_name,
      supervisorId: profileData?.supervisorId,
      status: profileData?.status,
      project_list: profileData?.project_list,
      license_number: profileData?.license_number,
      createdBy: profileData?.id,
      lastUpdatedBy: profileData?.id
    })
  }, [profileData])
  const handleExpandClick = () => {
    setExpanded(true);
  };

  const handleCloseClick = () => {
    setExpanded(false);
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  console.log(editData, profileData, "<---345678i")
  const editProfile = async => {
    // console.log(editData,"<----editProfileeditProfile")
    handleCloseClick();
    const userDetails = localStorage?.getItem("userDetails")
    var data = JSON.stringify({
      "id": JSON?.parse(userDetails)?.id,
      "countryID": 1,
      "first_name": editData?.firstName,
      "last_name": editData?.lastName,
      "profile_pic": editData?.profilepic,
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
    console.log("ediuyjyhtgrfde", data)
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/editUser.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setEditData(response.data)
        changeUser()
        console.log(JSON.stringify(response.data, '<------ghjhgjghjhg'));
        <Alert severity="success">Updated Data!</Alert>

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Typography variant="h4" sx={{ color: 'black' }} >
        Profile
      </Typography>
      <Card sx={{ width: 400 }}><br />

       
        <Stack spacing={1} sx={{ px: 1 }}>
       
            <Card >
              <CardContent>
                <div style={{ float: 'left', paddingTop: 40, paddingRight: 5, paddingBottom: 40 }}>
                  <Avatar src={profileData?.profile_pic} alt="photoURL" style={{ height: 50, width: 50 }} />
                </div>

                <Card sx={{ boxShadow: 0 }}>
                  <CardContent >
                    <Typography style={{ flexDirection: 'row', color: '#444444' }} variant="subtitle1" gutterBottom>{profileData?.first_name}&nbsp;{profileData?.last_name}</Typography>
                    <Typography style={{ flexDirection: 'row', color: '#444444' }} variant="body1" gutterBottom>
                      Role : <span style={{ fontWeight: 100, color: '#444444' }}>{profileData?.role_name}</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: '#444444' }}>
                      Status : <span style={{ fontWeight: 100, color: '#444444' }}>{profileData?.status === '1' ? 'Active' : null}</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: '#444444' }}>
                      Reporting Manager : <span style={{ fontWeight: 100, color: '#444444' }}>{profileData?.supervisorName === "" ? "" : profileData?.superVisorName}</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: '#444444' }}>
                      Date Of Joining : <span style={{ fontWeight: 100, color: '#444444' }}>{profileData?.doj}</span> </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* <div>
              <Card style={{ width: "auto" }}>
                <CardContent> */}
                  {/* <Card variant="subtitle1" gutterBottom style={{ padding:10,color: 'white',textAlign:'center',borderRadius:'0px',backgroundColor:'#999999'}}>
                    Contact Information
                    {(!expanded)?<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">  
      <IconButton  style={{color:"white"}}
       component={RouterLink} to="#"> <Iconify icon="material-symbols:edit" />
      </IconButton>
    </ExpandMore>:null}
                  </Card> */}
                   {/* {(!expanded)?<Card variant="subtitle1" gutterBottom style={{ padding:10,color: 'white' ,textAlign:'center',borderRadius:'0px',backgroundColor:'#999999'}}>
                    Contact Information<IconButton edge="start" onClick={handleExpandClick} color="inherit" aria-label="show more" aria-expanded={expanded} style={{float:'right'}}>
                    <Iconify icon="material-symbols:edit" />
                  </IconButton>
                  </Card>:null} */}
                 
                  {/* <TableContainer >
          <Table aria-label="customized table"  >
             <TableHead maxWidth>Contact Information</TableHead> */}
            {/* <TableBody >
              <TableRow style={{ height: "8px !important" }} >
                <TableCell > Mobile </TableCell> */} 
{/* </CardContent></Card></div> */}
          <div>
            <Card style={{ width: "auto" }}>
              <CardContent>
              {(!expanded)?<Card variant="subtitle1" gutterBottom style={{ padding:10,color: 'white' ,textAlign:'center',borderRadius:'0px',backgroundColor:'#999999'}}>
                    Contact Information
                   
                  </Card>:null}
                <TableContainer >
                  <Table aria-label="customized table"  >
                    {/* <TableHead maxWidth>Contact Information</TableHead> */}
                    <TableBody >
                      <TableRow style={{ height: "8px !important" }} >
                        <TableCell > Mobile </TableCell>

                        <TableCell>: &nbsp;{profileData?.contactNum}</TableCell>
                      </TableRow>
                      <TableRow style={{ height: "8px !important" }} >
                        <TableCell> Work</TableCell>
                        <TableCell>: &nbsp;{profileData?.officeMailId}</TableCell>
                      </TableRow>
                      <TableRow style={{ height: "8px !important" }} >
                        <TableCell>Email</TableCell>
                        <TableCell>: &nbsp;{profileData?.personalMailId}</TableCell>
                      </TableRow>
                      <TableRow style={{ height: "8px !important" }} >
                        <TableCell>Address</TableCell>
                        <TableCell>: &nbsp;{profileData?.address}</TableCell>
                      </TableRow>
                      <TableRow style={{ height: "8px !important" }} >
                        <TableCell>Pincode:</TableCell>
                        <TableCell>: &nbsp;{profileData?.pincode}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

              </CardContent>
            </Card>

          </div>

      
        </Stack>
        <CardActions disableSpacing>
          
          {(!expanded)?<ExpandMore disableRipple style={{ backgroundColor: 'transparent' }} expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <Button variant="warning"
              sx={{
                ':hover': {
                  bgcolor: '#ffd796', // theme.palette.primary.main
                  color: '#ff7424',
                },
                ':focus': {
                  bgcolor: '#ffd796',
                  color: "#ff7424"
                },
                bgcolor: '#ffd796',
                color: "#ff7424"
              }} component={RouterLink} to="#" startIcon={<Iconify icon="material-symbols:edit" />}>
              Edit User
            </Button> 
        
          </ExpandMore>: 
          <IconButton  title="close" onClick={handleCloseClick} color="inherit" aria-label="close"  style={{float:'right'}}>
              <CloseIcon />
                  </IconButton>}
        </CardActions>
        {/* <Button onClick={handleExpandClick}  aria-label="show more" aria-expanded={expanded} style={{float:'right',color:'#ed6c07'}}>Edit</Button> */}
        {/* <IconButton edge="start" title="Edit User Information" > </IconButton> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Stack mb={3} style={{ backgroundColor: '#ffd796', borderRadius: 9 }}>
              <Typography style={{ padding: 10, color: 'white', textAlign: 'center', borderRadius: '0px', backgroundColor: '#999999' }}
                variant="h6"
              // sx={{
              //   p: 2,
              //   margin: 'auto',
              //   maxWidth: 500,
              //   flexGrow: 1,
              //   color: '#ff7424'
              // }}
              >
                User Information
              </Typography>
            </Stack>
            <Card>

              <TableContainer >
                <Table aria-label="customized table"  >

                  <TableBody >
                    <TableRow style={{ height: "8px !important" }} >
                      <TableCell>UserName :</TableCell>
                      <TableCell> {profileData?.first_name} {profileData?.last_name}</TableCell>
                    </TableRow>
                    <TableRow style={{ height: "8px !important" }} >
                      <TableCell> Role :</TableCell>
                      <TableCell>{userDetails?.role_name}</TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>

            </Card>
            <Stack mb={1.5}>
              <Divider variant="middle" />
            </Stack>
            <Card variant="subtitle1" gutterBottom style={{ padding: 10, color: 'white', textAlign: 'center', borderRadius: '0px', backgroundColor: '#999999' }}>
              Contact Information
            
              {/* <IconButton edge="start" onClick={handleCloseClick} color="inherit" aria-label="close" >
            <CloseIcon />
          </IconButton> */}


            </Card><br />
            <Grid direction={'column'} spacing={1.8} alignItems="center" justifyContent="space-between">
              <Typography>Email: {profileData?.officeMailId}</Typography><br />
              <Grid item mb={1}>
                <TextField
                  fullWidth
                  helperText="Mobile Number Required *"
                  size="small"
                  margin="dense"
                  value={editData?.contactNum}
                  onChange={(e) => { setEditData({ ...editData, contactNum: e?.target?.value }) }}
                  type="number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  id="Mobile-Number"
                  label="Mobile Number"
                  variant="outlined" color="common"
                />
              </Grid>
              <Grid item mb={2}>
                <TextField fullWidth size="small" id="Work"
                  value={editData?.officeMailId}
                  label="Work" variant="outlined" color="common" />
              </Grid>
              <Grid item mb={2}>
                <TextField
                  fullWidth
                  helperText="Address Required *"
                  size="small"
                  id="Address"
                  value={editData?.address}
                  onChange={(e) => { setEditData({ ...editData, address: e?.target?.value }) }}
                  label="Address"
                  variant="outlined" color="common"
                />
              </Grid>
              <Grid item mb={2}>
                <TextField fullWidth size="small" id="Address1"
                  value={editData?.address1}
                  onChange={(e) => { setEditData({ ...editData, address1: e?.target?.value }) }}
                  label="Address1" variant="outlined" color="common" />
              </Grid>
              <Grid item mb={2}>
                <TextField fullWidth size="small"
                  value={editData?.address2}
                  onChange={(e) => { setEditData({ ...editData, address2: e?.target?.value }) }}
                  id="Address2" label="Address2" variant="outlined" color="common" />
              </Grid>
              <Grid item mb={2}>
                <TextField fullWidth size="small" id="PinCode"
                  value={editData?.pincode}
                  onChange={(e) => { setEditData({ ...editData, pincode: e?.target?.value }) }}
                  label="PinCode" variant="outlined" color="common" />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button onClick={editProfile} variant="warning"
                sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                  },
                  ':focus': {
                    bgcolor: '#ffd796',
                    color: "#ff7424"
                  },
                  bgcolor: '#ffd796',
                  color: "#ff7424"
                }} component={RouterLink} to="#" startIcon={<Iconify icon="eva:save-fill" />}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
