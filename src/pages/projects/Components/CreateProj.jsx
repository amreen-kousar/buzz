import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, CardContent, Card, Grid, FormControl, InputLabel, MenuItem, Select, TextField, Stack, Snackbar, Alert } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import moment from 'moment'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Addbus from '../../buses/Addbus';
import AddTrainerDrawer from './AddTrainerDrawer';
import AddGelathifacilitators from './AddGelathifacilitators'
import Add from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateProj({ createPro, setCreatePro, sendData, viewMessage, edit }) {
  console.log(sendData, "<------sendDatasendDatasendDatasendData")
  const [open, setOpen] = React.useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [opengelathiFilter, setOpengelathiFilter] = useState(false);
  const [partner, setPartner] = useState([])
  const [notify, setNotify] = useState(false)
  const [busData, setBusData] = useState([])
  const [teamData, setTeamData] = useState([])
  const [trainerData, setTrainerData] = useState([])
  let [name, setName] = useState([])
  let [gelathiName, setGelathiName] = useState([])
  const [driverData, setDriverData] = useState([])
  const [deleteData, setDeleteData] = useState([])
  const [data, setData] = useState({ ...sendData, ...(edit && { start_date: new Date(), end_date: new Date() }) });



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const handlegelathiOpenFilter = () => {
    setOpengelathiFilter(true);
  };

  const handlegelathiCloseFilter = () => {
    setOpengelathiFilter(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(edit, "eeeeeeeeeeeeeeee")
    if (edit) {
      setOpen(true);
      assignValues()
    }
    partnerList();
    busList();
    teamList();
    driverList();

    setNotify(true)
  }, [])

  const assignValues = () => {
    let tempdata = {
      ...sendData,
      start_date: sendData.startDate,
      end_date: sendData.endDate,
      manager_id: sendData.operations_manager_id,
      driver_id: sendData.driverId,

    }
    setData(tempdata)
    console.log(tempdata, "tempdataaaaa")
  }
  const partnerList = async => {
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getPartnerList.php',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setPartner(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const busList = async => {
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getBusList.php',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, "bussssss")
        setBusData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const teamList = async => {
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getOperationsManagerList.php',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, "teamlist opers")
        setTeamData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const driverList = async => {
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getDriverList.php',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setDriverData(response.data)
        console.log(response.data, '<------driverDatadriverData');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // const showTrainerList = async => {
  //   var gelathidata = JSON.stringify({
  //     "role_id": 13,
  //     "project_id": 234,
  //     "operation_manager_id": 35,
  //     // "pageNum": 1
  //   });

  //   var config = {
  //     method: 'get',
  //     url: 'http://3.7.7.138/appTest/getPeopleList.php',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     gelathidata: gelathidata
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       setGelathiData(response?.data)
  //       console.log(response?.data,"sddjjjjjjjjjjj");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }

  const gelathinamelist = async => {
    var data = JSON.stringify({
      "project_id": sendData.projectId,
      "role_id": JSON.parse(localStorage.getItem('userDetails'))?.id,
      "operation_manager_id": 35
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getPeopleList.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        setGelathiData(response?.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const showTrainerList = async => {
    var data = JSON.stringify({
      "role_id": 5,
      "project_id": sendData.projectId,
      "operation_manager_id": 122,
      "pageNum": 1
    });

    var config = {
      method: 'get',
      url: 'http://3.7.7.138/appTest/getPeopleList.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setTrainerData(response?.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // return (
  //   <div>
  //     <Button fullWidth variant="filled" onClick={handleClickOpen}>
  //       Create New Project
  //     </Button>

  // }

  { console.log(data, "i am visible while changing", edit) }

  const createProject = () => {
    console.log(data, "dateaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    console.log(userid, "projectuseridddddd");
    var formdata = new FormData();
    formdata.append('user_id', userid);
    formdata.append('project_id', data.projectId)
    formdata.append('partnerID', data.partner_id)
    formdata.append('training_target', data.training_target)
    formdata.append('start_date', moment(data.start_date?.$d)?.format('YYYY-MM-DD'))
    formdata.append('end_date', moment(data.end_date?.$d)?.format('YYYY-MM-DD'))
    formdata.append('busID', data.bus_id)
    formdata.append('driverID', data.driver_id)
    formdata.append("operations_manager_id", data.manager_id)
    formdata.append("locationID", data.locationid)
    formdata.append("location_name", data.locationName),
      formdata.append("publish", "")
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/createProject.php',
      data: formdata
    };

    axios(config)
      .then(function (response) {

        viewMessage('Project added sucessfully')
        console.log(response, '<----------createProj');
        setCreatePro(false)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div>
      {
        !edit && <Button fullWidth variant="filled" onClick={handleClickOpen}>
          Create New Project
        </Button>
      }

      <Dialog
        fullScreen
        open={createPro}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
          <Toolbar>
            {/* <Stack direction={'column'}> */}

            {/* </Stack> */}

            {/* <Button autoFocus color="inherit" onClick={handleClose}> */}
            <Button autoFocus color="inherit" onClick={() => { createProject() }}>
              save
            </Button>
          </Toolbar>
        </AppBar >
        <Grid>
          <CardContent>
            <Snackbar open={notify} autoHideDuration={3000} onClose={() => { setNotify(false) }}>
              <Alert onClose={() => { setNotify(false) }} severity="success" sx={{ width: '100%' }}>
                Project created succesfully
              </Alert>
            </Snackbar>
            <Card style={{ top: 15 }}>
              <CardContent>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Project : {edit ? sendData?.project_name : sendData?.projectname}
                </Typography>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  District : {edit ? sendData?.location_name : sendData?.locationName}
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Grid>
        <Grid>
          <CardContent>
            <Typography style={{ marginLeft: 10 }} variant="h6">Project Details :</Typography>
          </CardContent>
          <CardContent>
            <Stack>
              <FormControl fullWidth>
                {console.log(data, '<------------chcjcjcjcididid')}
                <InputLabel color="common" id="demo-simple-select-label"> Select Partner</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.partner_id}
                  label="Select Partner"
                  onChange={(e => {
                    console.log(e, "<--hhhbhbh")
                    setData({ ...data, partner_id: e?.target?.value })

                  })}
                >
                  {/* <MenuItem value="" >Choose Partner </MenuItem> */}
                  {partner?.list?.map(itm => {

                    return (
                      <MenuItem value={itm?.partnerID}>{itm?.partnerName}</MenuItem>
                    )
                  })
                  }
                </Select>
              </FormControl></Stack>
          </CardContent>

          <CardContent>
            <Stack mt={1} mb={2}>
              <TextField id="Training Target" color="common" onChange={(e) => { setData({ ...data, training_target: e?.target?.value }) }} label="Training Target" variant="outlined" />
            </Stack>
          </CardContent>
          <Divider />

          <Grid>
            <CardContent>
              <Typography style={{ marginLeft: 10 }} variant="h6">Project From / To Dates :</Typography>
            </CardContent>
            <Stack>
              <CardContent>
                <DatePicker color="common"
                  label="Date"
                  value={data.start_date}
                  onChange={(newValue) => {
                    console.log(newValue, "<----newValuenewValue")
                    setData({ ...data, start_date: newValue })
                  }}
                  //   setSendData({ ...sendData, date: newValue })
                  // }}
                  renderInput={(params) => <TextField  {...params} style={{ width: '20vw' }} />}
                /> &nbsp;
                <DatePicker

                  label="Date" color="common"
                  value={data.end_date}
                  onChange={(newValue) => {
                    console.log(newValue, "<----newValuenewValue")
                    setData({ ...data, end_date: newValue })
                  }}
                  //   setSendData({ ...sendData, date: newValue })
                  // }}
                  renderInput={(params) => <TextField  {...params} style={{ width: '20vw' }} />}
                />
              </CardContent>
            </Stack>
          </Grid>
          <Divider />
          <CardContent>
            <Typography variant="h6">Resources</Typography>
            <Stack mt={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" color="common">Select Bus</InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  //id="demo-simple-select"
                  defaultValue={data.bus_id}
                  value={data.bus_id}
                  label="Select Bus"
                  onChange={(e => {
                    setData({ ...data, bus_id: e?.target?.value })

                  })}
                >
                  <MenuItem value="" default disabled>Choose Bus</MenuItem>
                  {busData?.list?.map(itm => {
                    return (
                      <MenuItem value={itm?.id}>{itm?.register_number}</MenuItem>
                    )
                  })
                  }
                </Select>
              </FormControl ></Stack >
          </CardContent >
          <Divider />

          <CardContent>
            <Typography variant="h6">Team Members</Typography>
            <Stack mt={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Operation Manager</InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  //id="demo-simple-select"
                  value={data.manager_id}
                  label="Select Operation Manager"
                  onChange={(e => {
                    setData({ ...data, manager_id: e?.target?.value });
                    localStorage.setItem("manager_id", e?.target?.value)
                  })}
                >
                  <MenuItem value="" default disabled>Choose Operation Manager</MenuItem>
                  {teamData?.list?.map(itm => {
                    return (
                      <MenuItem value={itm?.id}>{itm?.first_name}</MenuItem>
                    )
                  })
                  }
                </Select>
              </FormControl ></Stack >


            <Stack mt={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Driver</InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  //id="demo-simple-select"
                  value={data.driver_id}
                  label="Select Driver"
                  onChange={(e => {
                    setData({ ...data, driver_id: e?.target?.value })
                    // driverList(e?.target?.value)
                  })}
                >
                  <MenuItem value="" default disabled>Choose Driver</MenuItem>
                  {driverData?.list?.map(itm => {
                    return (
                      <MenuItem value={itm?.id}>{itm?.first_name}</MenuItem>
                    )
                  })
                  }
                </Select>
              </FormControl></Stack>
          </CardContent>
          <Divider />
          {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}> */}
          <AddTrainerDrawer
            isOpenFilter={openFilter}
            getData={(e) => { setName(e) }}
            onOpenFilter={handleOpenFilter}
            sendData={sendData}
            onCloseFilter={handleCloseFilter}
          />
          <AddGelathifacilitators
            sendData={sendData}
            isOpenFilter={opengelathiFilter}
            getData={(e) => { setGelathiName(e) }}
            onOpenFilter={handlegelathiOpenFilter}
            onCloseFilter={handlegelathiCloseFilter}
          />

          {console.log(name, "<---sdfdsfdsfdssddss")}
          {/* </Stack> */}
          <CardContent>
            <Card onClick={() => {
              console.log("its copensdfdsfds")
              handleOpenFilter()
            }}>
              <CardContent>

                <Typography variant='h6'>Want To Add Trainers  ({name.length})</Typography>

              </CardContent >
            </Card >
            {name?.length !== 0 &&
              <Card style={{ marginTop: 20 }}>
                <CardContent>
                  <Stack spacing={4}>
                    {name?.map((i, index) => {
                      return (
                        <Stack direction={'row'} >
                          <Typography mt={2} variant='subtitle2'>{i}</Typography>
                          <Stack style={{ marginLeft: 20 }} mt={2} >
                            <CancelIcon />
                          </Stack>
                        </Stack>

                      )
                    })
                    }
                  </Stack >
                </CardContent >
              </Card >
            }
          </CardContent >



          <CardContent>
            <Card onClick={() => {
              console.log("its copensdfdsfds")
              handlegelathiOpenFilter()
            }}>
              <CardContent>
                <Typography variant='h6'>Want To Add Gelathi Facilators ({gelathiName.length})</Typography>
              </CardContent>
            </Card>
            {gelathiName?.length !== 0 &&
              <Card style={{ marginTop: 20 }}>
                <CardContent>
                  <Stack spacing={4}>
                    {gelathiName?.map(i => {
                      return (
                        <Stack direction={'row'} >
                          <Typography mt={2} variant='subtitle2'>{i}</Typography>
                          <Stack style={{ marginLeft: 20 }} mt={2} >
                            <CancelIcon />
                          </Stack>
                        </Stack>
                      )
                    })}
                  </Stack>
                </CardContent>
              </Card>
            }
          </CardContent>

        </Grid >
      </Dialog >
    </div >
  );
}