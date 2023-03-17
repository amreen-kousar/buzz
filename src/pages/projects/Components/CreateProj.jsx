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
import dayjs from 'dayjs';
import AddTrainerDrawer from './AddTrainerDrawer';
import AddGelathifacilitators from './AddGelathifacilitators'
import Add from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import Iconify from 'src/components/Iconify';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateProj({ createPro, setCreatePro, sendData, viewMessage, edit ,projData}) {
  console.log(sendData, "<------sendDatasendDatasendDatasendData")
  const [open, setOpen] = React.useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [opengelathiFilter, setOpengelathiFilter] = useState(false);
  const [partner, setPartner] = useState([])
  const [warn,setWarn]=useState(false)
  const [message,setMessage]=useState(null)
  const minDate = new Date()
  const [notify, setNotify] = useState(false)
  const [busData, setBusData] = useState([])
  const [teamData, setTeamData] = useState([])
  const [trainerData, setTrainerData] = useState([])
  let [name, setName] = useState([])
  let [gelathiName, setGelathiName] = useState([])
  const [driverData, setDriverData] = useState([])
  const [deleteData, setDeleteData] = useState([])

  const formatDate = (itm)=>{
    const currentDATE = itm?.split("-")
    const newDate = `${currentDATE[2]}-${currentDATE[1]}-${currentDATE[0]}`
    return newDate
   
   }
  const [data, setData] = useState({ ...sendData,start_date:formatDate(sendData?.startDate),end_date:formatDate(sendData?.endDate)});

  console.log(data,"<-----dascascascascsacascsaascasa")

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
      startDate: sendData.startDate,
      endDate: sendData.endDate,
      operations_manager_id: sendData.operations_manager_id,
      driver_id: sendData.driverId,
      training_target:sendData.training_target,
      project_id:sendData.project_id

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

  const createProject2 = () => {

   if(name.length==0){
    setWarn(true)
    setMessage("Please Add trainers")

   }
   else if(gelathiName.length==0){
    setWarn(true)
    setMessage("Please Add Gelathi Facilators ")
   }
   else{
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    var formdata = new FormData();
    setCreatePro(false)
    formdata.append('user_id', userid);
    formdata.append('project_id', data.project_id)
    formdata.append('partnerID', data.partner_id)
    formdata.append('training_target', data.training_target)
    formdata.append('startDate', moment(data.start_date?.$d)?.format('YYYY-MM-DD'))
    formdata.append('endDate', moment(data.end_date?.$d)?.format('YYYY-MM-DD'))
    formdata.append('busID', data.bus_id)
    formdata.append('driverID', data.driverId)
    formdata.append("operations_manager_id", data.operations_manager_id)
    formdata.append("locationID", data.location_id)
    formdata.append("location_name", data.location_name),
    formdata.append("publish", "")
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/createProject.php',
      data: formdata
    };

    axios(config)
      .then(function (response) {
        projData();
        viewMessage('Project added sucessfully')
        
      })
      .catch(function (error) {
        console.log(error);
      });
   }

  }
  const createProjectpublish = () => {

    if(name.length==0){
     setWarn(true)
     setMessage("Please Add trainers")
 
    }
    else if(gelathiName.length==0){
     setWarn(true)
     setMessage("Please Add Gelathi Facilators ")
    }
    else{
     var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
     var formdata = new FormData();
     setCreatePro(false)
     {console.log(data,"setdataaaaaaa")}
     formdata.append('user_id', userid);
     formdata.append('project_id', data.project_id)
     formdata.append('partnerID', data.partner_id)
     formdata.append('training_target', data.training_target)
     formdata.append('startDate', moment(data.start_date?.$d)?.format('YYYY-MM-DD'))
     formdata.append('endDate', moment(data.end_date?.$d)?.format('YYYY-MM-DD'))
     formdata.append('busID', data.bus_id)
     formdata.append('driverID', data.driverId)
     formdata.append("operations_manager_id", data.operations_manager_id)
     formdata.append("locationID", data.location_id)
     formdata.append("location_name", data.location_name),
     formdata.append("", "")
     var config = {
       method: 'post',
       url: 'https://bdms.buzzwomen.org/appTest/createProject.php',
       data: formdata
     };
 
     axios(config)
       .then(function (response) {
         projData();
         viewMessage('Project added sucessfully')
      
       })
       .catch(function (error) {
         console.log(error);
       });
    }
 
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
        <form onSubmit={(e) => { e.preventDefault(); createProjectpublish() }}>
          <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
            <Toolbar>
             <IconButton edge="start" color="inherit" onClick={()=>{setCreatePro(false)}}> <CloseIcon/></IconButton>
            
              {/* <Button sx={{float:'right'}} autoFocus color="inherit" type="submit">
                save
              </Button> */}
              <IconButton edge="end"  autoFocus color="inherit" type="submit" sx={{right:40,float:'right',position:'absolute'}}>
                 <Iconify icon="material-symbols:save"/>
              </IconButton>
              {(edit)? <Button autoFocus color="inherit" sx={{float:'right'}} onClick={createProject2}>
                publish
              </Button>:null}
            </Toolbar>
          </AppBar>
          <Grid>
            <CardContent>
            <Snackbar open={warn} autoHideDuration={3000} onClose={() => { setWarn(false) }}>
                <Alert onClose={() => { setWarn(false) }} severity="warning" sx={{ width: '100%' }}>
                {message}
                </Alert>
              </Snackbar>

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
                    required
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
                <TextField id="Training Target" type="number"  defaultValue={data?.training_target} color="common" onChange={(e) => { setData({ ...data, training_target: e?.target?.value }) }} label="Training Target" variant="outlined" />
              </Stack>
            </CardContent>
            <Divider />

            <Grid>
              <CardContent>
                <Typography style={{ marginLeft: 10 }} variant="h6">Project From / To Dates :</Typography>
              </CardContent>
              <Stack>
                <CardContent>
                  <TextField type="date"
                   // defaultValue={dayjs(data?.start_date)}
                   defaultValue={dayjs( moment(data?.start_date)?.format('YYYY-MM-DD'))}
                    style={{ width: '20vw' }}
                    value={data.start_date}
                    InputProps={{
                      inputProps: { min: moment(new Date())?.format('YYYY-MM-DD') }
                    }}
                    onChange={(e) => {
                      setData({ ...data, start_date: e?.target?.value })
                    }} />
{console.log(dayjs( moment(data?.endDate)?.format()),moment(data?.endDate)?.format('YYYY-MM-DD'),new Date(data?.endDate),data?.endDate,"<-- defaultValue={data?.end_date?dayjs( moment(data?.end_date)?.format('YYYY-MM-DD')):dayjs( moment(data?.endDate)?.format('YYYY-MM-DD'))}",data?.end_date,data?.start_date)}
                  <TextField type="date"
                defaultValue={data?.end_date?dayjs( moment(data?.end_date)?.format('YYYY-MM-DD')):dayjs( moment(data?.endDate)?.format('YYYY-MM-DD'))}
                    style={{ width: '20vw', marginLeft: "2rem" }}
                    value={data.end_date}
                    InputProps={{
                      inputProps: { min: moment(data.end_date)?.format('YYYY-MM-DD') }
                    }}
                    // defaultValue={data.endDate}
                    onChange={(e) => {
                      setData({ ...data, end_date: e?.target?.value })
                    }} />

                  {/* <DatePicker color="common"
                  label="Date"
                  minDate={minDate}
                  value={data.start_date}
                  onChange={(newValue) => {
                    console.log(newValue, "<----newValuenewValue")
                    setData({ ...data, start_date: newValue })
                  }} */}

                  {/* renderInput={(params) => <TextField minDate={minDate}  {...params} style={{ width: '20vw' }} />}
                /> &nbsp; */}
                  &nbsp;
                  {console.log(data)}
                  {/* <DatePicker
                  minDate={data.start_date}
                  label="Date" color="common"
                  value={data.end_date}
                  onChange={(newValue) => {
                    console.log(newValue, "<----newValuenewValue")
                    setData({ ...data, end_date: newValue })
                  }}
                 
                  renderInput={(params) => <TextField  {...params} style={{ width: '20vw' }} />}
                /> */}
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
                    defaultValue={data.operations_manager_id}
                
                    value={data.operations_manager_id}
                    label="Select Operation Manager"
                    onChange={(e => {
                      setData({ ...data, operations_manager_id: e?.target?.value });
                      localStorage.setItem("operations_manager_id", e?.target?.value)
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
                    value={data.driverId}
                    defaultValue={data.driverId}
                    label="Select Driver"
                    onChange={(e => {
                      setData({ ...data, driverId: e?.target?.value })
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

                 
                  <Typography variant='h6'>Trainers  ({name.length+data?.trainers?.length})<IconButton style={{float:'right'}}>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton></Typography>
                    {data?.trainers?.map(itm=>{
                      return(
                        <Card style={{ marginTop: 10 }}>
                      <CardContent>
                     
                        <Typography mt={2} variant='subtitle2'>{itm?.name}</Typography>
                       
                        </CardContent >
                    </Card >
                      )
                    })}
                    {/* {sendData?.trainers_count} */}
                    {/* {sendData?.trainers.map((itm)=>{
                       
                       return (<span value={itm?.emp_id}>{itm?.name}</span>)
                     })} */}
                  {name?.length !== 0 &&
                    <Card style={{ marginTop: 10 }}>
                      <CardContent>
                        <Stack direction={'row'} spacing={4}>
                       
                          {name?.map((i, index) => {
                            return (
                              <Stack direction={'row'} >
                                <Typography mt={2} variant='subtitle2'>{i}</Typography>
                                <Stack style={{ marginLeft: 20 }} mt={2} >
                                  {/* <CancelIcon /> */}
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
              </Card >
            </CardContent >



            <CardContent>
              <Card onClick={() => {
                console.log("its copensdfdsfds")
                handlegelathiOpenFilter()
              }}>
                <CardContent>
                <Typography variant='h6'>Gelathi Facilators ({data?.gelathiFacilitator.length+gelathiName?.length})
                  <IconButton style={{float:'right'}}>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton>
                    {data?.gelathiFacilitator?.map(itm=>{
                      return(
                        <Card style={{ marginTop: 10 }}>
                      <CardContent>
                     
                        <Typography mt={2} variant='subtitle2'>{itm?.name}</Typography>
                       
                        </CardContent >
                    </Card >
                      )
                    })}
                    
                    </Typography>
                  {gelathiName?.length !== 0 &&
                    <Card style={{ marginTop: 10 }}>
                      <CardContent>
                        <Stack spacing={4}  direction={'row'}>
                          {gelathiName?.map(i => {
                            return (
                              <Stack >
                                <Typography mt={2} variant='subtitle2'>{i}</Typography>
                                <Stack style={{ marginLeft: 20 }} mt={2} >
                                 
                                </Stack>
                              </Stack>
                            )
                          })}
                        </Stack>
                      </CardContent>
                    </Card>
                  }
                </CardContent>
              </Card>
            </CardContent>

          </Grid >
        </form>
      </Dialog >
    </div >
  );
}