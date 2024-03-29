import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, ButtonGroup, Card, Stack, CardContent, CardHeader, Container, Icon, IconButton, TableCell, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import Page from 'src/components/Page';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom'
import CreateTrainerBatch from './Components/CreateTrainerBatch'
import AddTrainerDrawer from './Components/AddTrainerDrawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Programevaluationday1 from './Components/Programevaluationday1';
import Peopleprofile from './Components/projectpeopleprofile';
import Gelathifacilitatorlist from './Components/Gelathifacilitatorslist';
import Trainerslist from './Components/Trainerslist';
import Evaluationday2 from './Components/Evaluationday2';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import CreateProj from './Components/CreateProj';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  // marginLeft: 'auto' ,
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
}));
function Project(props) {
  const location = useLocation()
  const [openFilter, setOpenFilter] = useState(false);
  const userDetails = localStorage?.getItem('userId');
  console.log(userDetails, "userrrrrrrrrrrrr")
  const [data1, setData1] = useState('')
  console.log("🚀 ~ file: Project.jsx:46 ~ Project ~ data1:", data1)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [circlemeeting, setCirclemeeting] = React.useState(null);
  const open = Boolean(anchorEl);
  const cm = Boolean(circlemeeting);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCircleClick = (event) => {
    setCirclemeeting(event.currentTarget);
  };
  const handleCircleClose = () => {
    setCirclemeeting(null);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const id = sessionStorage?.getItem("proId")
  useEffect(() => {
    projData();

  }, [])


  const viewUser = (itm) => {
    localStorage.setItem('profiledetails', JSON.stringify(itm))
    console.log(itm, "itemeeeeeeeeeee")
    handleOpenFilter()
  }

  const viewPeople = (item) => {
    localStorage.setItem('profiledetails', JSON.stringify({ "emp_id": item }))
    console.log(item, "itemeeeeeeeeeee")
    handleOpenFilter()
  }


  const roleid = JSON.parse(localStorage.getItem('userDetails'))?.role
  const projData = async => {
    console.log(location, "location props")
    var userDetails = JSON.parse(localStorage?.getItem('userDetails'))
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      "project_id": id,
      "role_id": role,
      "emp_id": idvalue
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getProjectData.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setData1({ ...response.data.list })
        console.log(response.data.list, '<--------------setData1setData1');
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const [edit, setEdit] = useState(false)
  const [projectDetails, setProjectDetails] = useState({ projectName: "BANGARAPETCI19102", districtName: "Kolar", partnerName: "CDPO", trainingTarget: "2879", projectDuration: " From: 01 - 04 - 2019 To: 31 - 03 - 2020", projectStatus: "Completed" })

  const styles = {
    buttonStyle: { boxShadow: "none", borderRadius: "7px", backgroundColor: "#edeff1", fontWeight: 500, textAlign: "left" },
    tableRowStyle: { justifyContent: 'center', alignItems: 'center', marginLeft: 200 },
    linkStyle: { textDecoration: 'none', color: "black" }
  }
  const addIcon = <IconButton>
    <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" />
  </IconButton>

  return (
    <div>
      <Page title="Dashboard: Project">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={7}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                <Link to="/dashboard/projects">
                  <IconButton>
                    <Iconify icon="material-symbols:arrow-back-rounded" />
                  </IconButton></Link>
                <span> Project </span>  
                {(userDetails == 2)?  <Button
                  sx={{
                    '&:hover': {
                      backgroundColor: '#ffffff',
                    },
                    '&:focus': {
                      backgroundColor: 'white',
                    },
                  }}
                  style={{ float: 'right', color: '#ff7424', position: 'absolute', right: 0, marginRight: '125px' }}
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </Button> : null} 
                {/* <Button  sx={{
              '&:hover': {
                backgroundColor: '#ffffff',
              },
              '&:focus': {
                  backgroundColor: 'white',
               
                 }
            }} style={{float:'right',color:'#ff7424',position:'absolute',right:0,marginRight:'125px'}} onClick={() => { setEdit(true) }}>Edit</Button> */}
              </Typography>
           
              <Card >
                <TableContainer >
                  <Table aria-label="customized table">
                    <TableBody>
                      <TableRow style={styles.tableRowStyle}>
                        <TableCell>Project Name  </TableCell>
                        <TableCell>:&nbsp; {data1.project_name} </TableCell>
                      </TableRow>
                      <TableRow style={styles.tableRowStyle}>
                        <TableCell>District Name</TableCell>
                        <TableCell>:&nbsp; {data1.location_name} </TableCell>
                      </TableRow>
                      <TableRow style={styles.tableRowStyle}>
                        <TableCell>Partner Name </TableCell>
                        <TableCell>:&nbsp; {data1.partnerName} </TableCell>
                      </TableRow>
                      {(roleid == 1 || roleid == 2 || roleid == 3 || roleid == 4 || roleid == 12 || roleid == 5) ? <TableRow style={styles.tableRowStyle}>
                        <TableCell>Training Target</TableCell>
                        <TableCell>:&nbsp; {data1.training_target} </TableCell>
                      </TableRow> : null}
                      <TableRow style={styles.tableRowStyle}>
                        <TableCell>Project Duration</TableCell>
                        <TableCell> :&nbsp; From : {data1.startDate}<br/>
                        &nbsp;&nbsp;&nbsp;To : {data1.endDate}
                         </TableCell>
                    
                      </TableRow>
                      <TableRow style={styles.tableRowStyle}>
                        <TableCell>Project Status</TableCell>
                        <TableCell>:&nbsp; {data1.project_status} </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

              </Card><br></br>
              {(userDetails == 1 || userDetails == 2 || userDetails == 3 || userDetails == 4 || userDetails == 5 || userDetails == 6 || userDetails == 13 || userDetails == 12) ? 
              <Card sx={{width:"100%"}}>
                <CardContent>
                  Project Team :
                  <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit> 
                  {data1?.projectPeoplesList?.map((item, index) =>
                    <Card value={item?.emp_id} style={{ cursor: 'pointer', margin: 10, padding: 10 }} onClick={() => viewUser(item, index)}>
                      <span style={{ fontWeight: 700 }}>{item.emp_name}
                        <Iconify style={{ color: "black", float: 'right', width: 20, height: 20 }} icon="fluent:notebook-eye-20-filled" />
                      </span><br></br>{item?.role}&nbsp;</Card>
                  )}
                  </Collapse>
                </CardContent>

              </Card>:null }
                {(userDetails==12)?<>

                  <Card  sx={{width:"95%"}}   value={data1?.operations_manager_id}   style={{ cursor: 'pointer', margin: 20, marginLeft: 1, paddingTop: 16, paddingBottom: 15, borderRadius: 0, paddingLeft: 6 }} onClick={() => viewPeople(data1?.operations_manager_id)} >
                    <span  >
                      {data1?.operations_manager_name} 
                      {/* <Iconify style={{ color: "black", float: 'right', width: 20, height: 20}} icon="material-symbols:add" /> */}
                    </span></Card>

                  <Card  sx={{width:"95%"}}  style={{ cursor: 'pointer', margin: 20,  marginLeft: 1, paddingTop: 16, paddingBottom: 15, borderRadius: 0,paddingLeft:6}} >
                    <span>   MY POA
                      {/* <Iconify style={{ color: "black", float: 'right', width: 20, height: 20 }} icon="material-symbols:add" /> */}
                    </span></Card>

                  <Card sx={{width:"95%"}} style={{ cursor: 'pointer', margin: 20,  marginLeft: 1, paddingTop: 16, paddingBottom: 15, borderRadius: 0, paddingLeft: 6 }}  >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    Trainers({data1?.trainers_count}) <Trainerslist /> 
                    {/* <Iconify style={{ color: "black", float: 'right', width: 20, height: 20 }} icon="material-symbols:add" /> */}
                    </Box>  </Card>


                  <Card sx={{width:"95%"}} style={{ cursor: 'pointer', margin: 20,  marginLeft: 1, paddingTop: 16, paddingBottom: 15, borderRadius: 0, paddingLeft: 6, paddingRight: 1 }} >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    Gelathi Facilitators({data1?.gelathiFacilitator_count}) <Gelathifacilitatorlist />
                    {/* <Iconify style={{ color: "black", float: 'right', width: 20, height: 20 }} icon="material-symbols:add" /> */}
                  </Box></Card>

                  <Card sx={{width:"95%"}} style={{ cursor: 'pointer', margin: 20,  marginLeft: 1, paddingTop: 16, paddingBottom: 15, borderRadius: 0, paddingLeft: 6 }} onClick={() => viewPeople(data1?.driverId)} >
                    <span>Driver: {data1?.driver_name}
                      {/* <Iconify style={{ color: "black", float: 'right',right:10, width: 20, height: 20 }} icon="material-symbols:add" /> */}
                    </span></Card>


                </>:null}

            </Grid>
           {
              edit && <CreateProj edit={true} createPro={edit} sendData={data1} setCreatePro={(e)=>setEdit(e)}  projData={projData}/>
            } 
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ mb: 1 }}>
              <Peopleprofile
                isOpenFilter={openFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
              />
            </Stack>
            <Grid item xs={12} sm={12} md={5} >

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="10vh"
                marginTop='80px'
              >
                <ButtonGroup
                  orientation="vertical"
                  style={{ boxShadow: "none", borderRadius: "0px" }} elevation={0} >

                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 2 || userDetails == 12) ?
                    <Link to="/dashboard/projects/busTest" state={{ id: data1?.bus_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle} endIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton>}>
                      <span style={{ width: "235px" }}>Bus&nbsp;{data1?.bus_number} & check List</span>
                    </Button>
                    </Link> : null}
                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 2 || userDetails == 12) ? <br /> : null}

                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 2 || userDetails == 12) ? <Link to="/dashboard/projects/materialStock" state={{ id: data1?.project_id }} style={styles.linkStyle}>
                    <Button variant="secondary" style={styles.buttonStyle} startIcon={
                      <IconButton>
                        <Iconify style={{ color: "black" }} icon="material-symbols:list-alt-outline-sharp" />
                      </IconButton>
                    } endIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton>}>
                      <span style={{ width: "200px" }}> Materials Stocklist</span>
                    </Button>
                  </Link> : null}
                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 2 || userDetails == 12) ? <br /> : null}
                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 5 || userDetails == 12) ? <Link to="/dashboard/projects/selfShakthi" state={{ id: data1?.project_id,type:"SelfShakthi" , porjectId:data1?.project_id}} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle}
                    startIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="mdi:bus-school" />
                    </IconButton>} endIcon={<IconButton>
                      <Iconify style={{ color: "#6d7c89" }} icon="fluent:notebook-eye-20-filled" />
                    </IconButton>}>
                    <span style={{ width: "200px" }}>Self Shakthi program</span>
                  </Button>
                  </Link>
                    : null}
                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 5 || userDetails == 12) ? <br /> : null}
                  {(userDetails == 4 || userDetails == 12) ?
                    <div><Link to="/dashboard/projects/assigntargets" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle} endIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton>} startIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="ic:sharp-my-location" />
                    </IconButton>}>
                      <span style={{ width: "200px" }}>Assign Targets to trainers</span>
                    </Button></Link></div> : null}{(userDetails == 4 || userDetails == 12) ? <br /> : null}

                  {/* {(userDetails == 12) ? <div><Link to="/dashboard/projects/selfShakthi" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle} endIcon={<IconButton>
                    <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                  </IconButton>} >
                    <span style={{ width: "240px" }}> Photos</span>
                  </Button>

                  </Link></div> : null}
                  {(userDetails == 12) ? <br /> : null} */}

                  {(userDetails == 1 || userDetails == 6 || userDetails == 4 || userDetails == 3 || userDetails == 13 ||userDetails == 12) ? <Link to="/dashboard/projects/gelathiProgram" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle} endIcon={<IconButton>
                    <Iconify style={{ color: "#6d7c89" }} icon="fluent:notebook-eye-20-filled" />
                  </IconButton>} startIcon={<IconButton>
                    <Iconify style={{ color: "black" }} icon="ic:sharp-spa" />
                  </IconButton>}>
                    <span style={{ width: "200px" }}> Gelathi Program</span>
                  </Button>
                  </Link>
                    : null}
                  {(userDetails == 1 || userDetails == 6 || userDetails == 4 || userDetails == 3 || userDetails == 13 || userDetails == 6 || userDetails == 12) ? <br /> : null}
                  {(userDetails == 13 || userDetails == 4 || userDetails == 12) ?
                    <div><Link to="/dashboard/projects/assignbatches"  style={styles.linkStyle}><Button variant="secondary" state={{ id: data1?.project_id }} style={styles.buttonStyle} endIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton>} startIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="ic:baseline-home" />
                    </IconButton>}>
                      <span style={{ width: "200px" }}> Assign Villages to Gelathi Facilitator</span>
                    </Button>

                    </Link></div>
                    : null}
                  {(userDetails == 13 || userDetails == 4 || userDetails == 12) ? <br /> : null}

                  {/* {(userDetails == 12) ? <div><Link to="/dashboard/projects/assignbatches" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle} endIcon={<IconButton>
                    <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                  </IconButton>} >
                    <span style={{ width: "240px" }}> New Gelathi Session</span>
                  </Button>

                  </Link></div> : null}
                  {(userDetails == 12) ? <br /> : null} */}

                  {(userDetails == 1 || userDetails == 6 || userDetails == 3 || userDetails == 4 || userDetails == 13 || userDetails == 6) ?
                    <Link to="/dashboard/projects/enrolledGelathi" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle} startIcon={
                      <IconButton>
                        <Iconify style={{ color: "black" }} icon="ic:round-people" />
                      </IconButton>
                    } endIcon={<IconButton>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton>}>
                      <span style={{ width: "200px" }}> Enrolled Gelathis</span>
                    </Button>
                    </Link>
                    : null}
                  {(userDetails == 1 || userDetails == 6 || userDetails == 3 || userDetails == 4 || userDetails == 13 || userDetails == 6) ? <br /> : null}
                  {(userDetails == 1 || userDetails == 6 || userDetails == 4 || userDetails == 3 || userDetails == 13 || userDetails == 12) ? <Link to="/dashboard/projects/enrolledGreenMotivators" state={{ id: data1?.project_id }} style={styles.linkStyle}>
                    <Button variant="secondary" style={{ ...styles.buttonStyle, color: "green" }} startIcon={<IconButton>
                      <Iconify style={{ color: "green" }} icon="mdi:user-add" />
                    </IconButton>} endIcon={<IconButton>
                      <Iconify style={{ color: "green" }} icon="material-symbols:add" />
                    </IconButton>}>
                      <span style={{ width: "200px" }}> Enrolled Green Motivators</span>
                    </Button>
                  </Link>
                    : null}
                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 13 || userDetails == 6 || userDetails == 12) ? <br /> : null}

                  {(userDetails == 1 || userDetails == 4 || userDetails == 3 || userDetails == 13 || userDetails == 6 || userDetails == 12) ? <Link to="/dashboard/projects/enrolledVyaapar" state={{ id: data1?.project_id }} style={styles.linkStyle}>
                    <Button variant="secondary" style={{ ...styles.buttonStyle, color: "blue" }} startIcon={<IconButton>
                      <Iconify style={{ color: "blue" }} icon="mdi:user-add" />
                    </IconButton>} endIcon={<IconButton>
                      <Iconify style={{ color: "blue" }} icon="material-symbols:add" />
                    </IconButton>}>
                      <span style={{ width: "200px" }}>Enrolled Vyapar</span>
                    </Button>
                  </Link>
                    : null}
                  {(userDetails == 1 || userDetails == 6 || userDetails == 4 || userDetails == 3 || userDetails == 13 || userDetails == 12) ? <br /> : null}

                  {(userDetails == 1 || userDetails == 6 || userDetails == 3 || userDetails == 4 || userDetails == 13 || userDetails == 6) ? <Link to="/dashboard/projects/gelathiCirlces" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle}
                    endIcon={<IconButton> <Iconify style={{ color: "black" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="ic:sharp-supervised-user-circle" /></IconButton>}>
                    <span style={{ width: "200px" }}> Gelathi Circles</span>
                  </Button>
                  </Link>
                    : null}
                  {(userDetails == 1 || userDetails == 6 || userDetails == 3 || userDetails == 4 || userDetails == 13 || userDetails == 6) ? <br /> : null}

                  {(userDetails == 6 || userDetails == 13) ? <><span style={styles.linkStyle}>
                    <Button variant="secondary" style={styles.buttonStyle}
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDownIcon />}
                      startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="mdi:people-group-outline" /></IconButton>}
                    >
                      <span style={{ width: "210px" }} >Village visit</span>
                    </Button>
                  </span>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}

                      style={{ justifyContent: 'flex-end' }}
                    >
                      <MenuItem>
                        <Link to="/dashboard/projects/scheduleVillage" state={{ id: data1?.project_id,name:data1?.project_name }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle}
                          endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                          startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="mdi:bus-clock" /></IconButton>}>
                          <span style={{ width: "200px" }}> Schedule A Village Visit</span>
                        </Button>
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <Link to="/dashboard/projects/assignedVillages" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle}
                          endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                          startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="ic:baseline-home" /> </IconButton>}>
                          <span style={{ width: "200px" }}> Assigned Villages</span>
                        </Button>
                        </Link></MenuItem>


                    </Menu></> : null}
                  {(userDetails == 6 || userDetails == 13) ? <br /> : null}

                  {/* {(userDetails == 1 ) ?  <> <span style={styles.linkStyle}>
        <Button variant="secondary" style={styles.buttonStyle}
        id="basic-button"
        aria-controls={cm ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={cm ? 'true' : undefined}
        onClick={handleCircleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="mdi:people-group-outline" /></IconButton>}
      >
        <span style={{ width: "210px" }}>Circle Meeting</span>
      </Button>
      </span>
      <Menu
        anchorEl={circlemeeting}
        open={cm}
        onClose={handleCircleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
        style={{justifyContent:'flex-end'}}
      >
        <MenuItem>
      <Button variant="secondary" style={styles.buttonStyle}  endIcon={<KeyboardArrowDownIcon />}>
                  <span style={{ width: "200px" }}> Spoorthi</span>
      </Button>
                
        </MenuItem>

        <MenuItem>    
       <Button variant="secondary" style={styles.buttonStyle}  endIcon={<KeyboardArrowDownIcon />}>
                
                    <span style={{ width: "200px" }}>Green</span>
                  </Button>
        </MenuItem>
        <MenuItem>    
       <Button variant="secondary" style={styles.buttonStyle}  endIcon={<KeyboardArrowDownIcon />}>
                
                    <span style={{ width: "200px" }}>Vyapar</span>
                  </Button>
        </MenuItem>
      
      
      
      </Menu></> : null}
                      {(userDetails==1) ? <br /> : null}  */}

                  {(userDetails == 6 || userDetails == 13) ? <Link to="/dashboard/projects/scheduleCircleMeet" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle}
                    endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="mdi:clock" /></IconButton>}>
                    <span style={{ width: "200px" }}>Schedule A Circle Meeting</span>
                  </Button>
                  </Link>
                    : null}
                  {(userDetails == 6 || userDetails == 13) ? <br /> : null}

                  {(userDetails == 6 || userDetails == 13) ? <Link to="/dashboard/projects/scheduleBeehiveVisit" state={{ id: data1?.project_id }} style={styles.linkStyle}><Button variant="secondary" style={styles.buttonStyle}
                    endIcon={<IconButton> <Iconify style={{ color: "#6d7c89" }} icon="material-symbols:add" /> </IconButton>}
                    startIcon={<IconButton> <Iconify style={{ color: "black" }} icon="mdi:bus-clock" /></IconButton>}>
                    <span style={{ width: "200px" }}>Schedule A Beehive Visit</span>
                  </Button>
                  </Link> : null}
                  {(userDetails == 6 || userDetails == 13) ? <br /> : null}
                  {(userDetails == 5) ? <CreateTrainerBatch data1={data1} /> : null} {(userDetails == 5) ? <br /> : null}
                  {/* {(userDetails == 5) ? <Programevaluationday1 /> : null} 
                  {(userDetails == 5) ? <Evaluationday2 /> : null}  */}

                  <br />


                </ButtonGroup>


              </Box>


            </Grid>
          </Grid>



          {/* <Card onClick={() => {
                    console.log("its copensdfdsfds")
                handleOpenFilter()
              }}>
<Typography>hbjbhbjhbjh</Typography>
</Card> */}

          {/* <AddTrainerDrawer
            isOpenFilter={true}
            
            // onOpenFilter={handleOpenFilter}
            // onCloseFilter={handleCloseFilter}
          /> */}










        </Container>
      </Page>


    </div >
  )
}

export default Project