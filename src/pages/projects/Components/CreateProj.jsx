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
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import Iconify from 'src/components/Iconify';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateProj({ createPro, setCreatePro, sendData, viewMessage, edit ,projData}) {
  console.log(sendData, "<------sendDatasendDatasendDatasendData")
  const formatDate = (itm)=>{
    // console.log(itm,"<-redrfcvgcurrentDATE",sendData)
    const currentDATE = itm?.split("-")
     const newDate = `${currentDATE[2]}-${currentDATE[1]}-${currentDATE[0]}`
    return newDate
   
   }
  const [data, setData] = useState({ ...sendData,start_date:sendData?.startDate?formatDate(sendData?.startDate):new Date(),end_date:sendData?.endDate?formatDate(sendData?.endDate):new Date()});
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
  let [name, setName] = useState(sendData?.trainers)
  let [gelathiName, setGelathiName] = useState(sendData?.gelathiFacilitator)
  const [driverData, setDriverData] = useState([])
  const [deleteData, setDeleteData] = useState([])
const [createProj ,setCreateProj] = useState(true)
const [assproject,setAssproject]=useState([])
const [isReload , setIsReload]= useState(false)
  const [Gf,setGf]=useState([]);
   
// console.log(formatDate(sendData?.startDate),"startdateeeeeeeeeee")
  console.log(sendData?.trainers,"<-----dascascascascsacascsaascasa",sendData?.gelathiFacilitator)

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

setShowAddBuss(false)
    partnerList();
    Associateproject();
    teamList();
    driverList();
    setNotify(true);
  }, [])


  const assignValues = () => {
    let tempdata = {
      ...sendData,
      startDate: sendData.startDate,
      endDate: sendData.endDate,
      operations_manager_id: sendData.operations_manager_id,
      driver_id: sendData.driverId,
      training_target:sendData.training_target,
      project_id:sendData.project_id,
      gfl_id:sendData.gfl_id

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
var userdata = localStorage?.getItem('operations_manager_id')
  useEffect(() => {
    Gfl();
  },[userdata])
  const Gfl = async=>{
    
  var data = JSON.stringify({
  "user_id": userdata
  });

var config = {
  method: 'post',
  url: 'https://bdms.buzzwomen.org/appTest/new/getgfl.php',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setGf(response.data.gfl_list);
})
.catch(function (error) {
  console.log(error);
});
  
  }
  console.log(Gf,"gflllllll")
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
      url: 'https://bdms.buzzwomen.org/appTest/getPeopleList.php',
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

  console.log(data?.operations_manager_id,"operationmnageriddddddddddd")
  useEffect(()=>{
     Associateproject()
  },[data?.operations_manager_id])
  const Associateproject=()=>{
    var associatedata = JSON.stringify({
      "oprMgrId": 9,
      "locationId": 43,
      "funderId": 5,
      "projectId": 180
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getProjectsListToAssociate.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      associatedata : associatedata
    };
    console.log(associatedata,"associatedata")
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setAssproject(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
 console.log(assproject,"associteprojectssssssssssss")
  { console.log(data, "i am visible while changing", edit) }

  const createProject2 = () => {

    if(data.operations_manager_id<=0 || data.operations_manager_id == ''){
      setWarn(true)
      setMessage("Please Add operations manager")
  
     }
     else if(data.driverId.length<=0 || data.driverId.length==""){
      setWarn(true)
      setMessage("Please Add Driver ")
     }
   else{
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
    var formdata = new FormData();
    setCreatePro(false)
    formdata.append('user_id', userid);
    formdata.append('project_id', data.project_id)
    formdata.append('partnerID', data.partner_id)
    formdata.append('training_target', data.training_target)
    // formdata.append('start_date', moment(data.start_date)?.format('DD-MM-YYYY'))
    // formdata.append('end_date', moment(data.end_date)?.format('DD-MM-YYYY'))
    if (data?.start_date) {
      formdata.append('start_date', moment(data?.start_date).format('DD-MM-YYYY'));
    }
    else{
      formdata.append('start_date', data?.startDate);
    }
    //  formdata.append('end_date', moment(data.end_date)?.format('DD-MM-YYYY'))
    if (data?.end_date) {
      formdata.append('end_date', moment(data?.end_date)?.format('DD-MM-YYYY'));
    }
    else{
      formdata.append('end_date',data?.endDate);
    }
    formdata.append('busID', data.bus_id)
    formdata.append('driverID', data.driverId)
    formdata.append("gfl_id",data.gfl_id)
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

    // if(name.length==0){
    //  setWarn(true)
    //  setMessage("Please Add trainers")
 
    // }
    // else if(gelathiName.length==0){
    //  setWarn(true)
    //  setMessage("Please Add Gelathi Facilators ")
    // }
    // else{
     var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
     var formdata = new FormData();
     setCreatePro(false)
     {console.log(data,"setdataaaaaaa")}
     formdata.append('user_id', userid);
     formdata.append('project_id', data.project_id)
     formdata.append('partnerID', data.partner_id)
     formdata.append('training_target', data.training_target)
    //  formdata.append('start_date', moment(data.start_date)?.format('DD-MM-YYYY'))
    if (data?.start_date) {
      formdata.append('start_date', moment(data?.start_date).format('DD-MM-YYYY'));
    }
    else{
      formdata.append('start_date', data?.startDate);
    }
    //  formdata.append('end_date', moment(data.end_date)?.format('DD-MM-YYYY'))
    if (data?.end_date) {
      formdata.append('end_date', moment(data?.end_date)?.format('DD-MM-YYYY'));
    }
    else{
      formdata.append('end_date',data?.endDate);
    }
     formdata.append('busID', data.bus_id)
     formdata.append('driverID', data.driverId)
     formdata.append("operations_manager_id", data.operations_manager_id)
     formdata.append("gfl_id",data.gfl_id)
     formdata.append("locationID", data.location_id)
     formdata.append("location_name", data.location_name),
     formdata.append("", "")
     console.log(data,"<---dcfgvhbjnkm")
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
   useEffect(()=>{
     
  },[data?.operations_manager_id])


  //  naigation to add new bus 
const [showAddBuss , setShowAddBuss] = useState(false)
const [showbusForm ,setShowBusForm] =useState(true)

const mainShowBussHandler = ()=>{
  setShowBusForm(true)
  console.log(showbusForm, "showbusForm mainShowBussHandler")
  setShowAddBuss(false)
  setIsReload(!isReload)
}
  const navigate = useNavigate();
  const addBusHandler =()=>{
    console.log("i calling")
    setShowAddBuss(true)
    console.log(showAddBuss,"showAddBuss")
   
  }
  useEffect(()=>{
    busList();
  }, [showAddBuss])

  // useEffect(()=>{
  
  //   setShowAddBuss(false)
  // },[isReload])
  //  const navigateToAddBus =()=>{
  //   navigate('/dashboard/projects/addBuss', {
  //     state: {
  //        createProj : true
  //     },
  // });
  // setShowAddBuss(true)
  //   console.log("navigation is calling ")
  //  }

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
          <AppBar sx={{ position: 'fixed', bgcolor: '#ed6c02' }}>
            <Toolbar id="create-proj-toolbar">
             <IconButton id="start-icon-button" edge="start" color="inherit" onClick={()=>{setCreatePro(false)}}> <CloseIcon/></IconButton>
            
              {/* <Button sx={{float:'right'}} autoFocus color="inherit" type="submit">
                save
              </Button> */}
              <IconButton id="material-symbol-save" edge="end"  autoFocus color="inherit" type="submit" sx={{right:40,float:'right',position:'absolute'}}>
                 <Iconify icon="material-symbols:save"/>
              </IconButton>
               <Button id="publish" autoFocus color="inherit" sx={{float:'right',color: "inherit" }} variant="h6" onClick={createProject2}>
                publish
              </Button>
            </Toolbar>
          </AppBar>

          <Grid sx={{marginTop:5}}>
            <CardContent>
            <Snackbar id="alert-message" open={warn} autoHideDuration={3000} onClose={() => { setWarn(false) }}>
                <Alert onClose={() => { setWarn(false) }} severity="warning" sx={{ width: '100%' }}>
                {message}
                </Alert>
              </Snackbar>

              {(!edit)?<Snackbar id="success-alert-snackbar" open={notify} autoHideDuration={3000} onClose={() => { setNotify(false) }}>
                <Alert onClose={() => { setNotify(false) }} severity="success" sx={{ width: '100%' }}>
                  Project created succesfully
                </Alert>
              </Snackbar>:null}
              <Card style={{ top: 15 }}>
                <CardContent>
                  <Typography id="project-text" sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Project : {edit ? sendData?.project_name : sendData?.projectname}
                  </Typography>
                  <Typography id="district-text" sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    District : {edit ? sendData?.location_name : sendData?.locationName}
                  </Typography>
                </CardContent>
              </Card>
            </CardContent>
          </Grid>
          <Grid>
            <CardContent id="project-det">
              <Typography style={{ marginLeft: 10 }} variant="h6">Project Details :</Typography>
            </CardContent>
            <CardContent>
              <Stack>
                <FormControl fullWidth>
                  {console.log(data, '<------------chcjcjcjcididid')}
                  <InputLabel color="common" id="Partner"> Select Partner</InputLabel>
                  <Select
                    required
                    labelId="Partner-label"
                    id="select_partner"
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
              <CardContent id="project-from-to">
                <Typography style={{ marginLeft: 10 }} variant="h6">Project From / To Dates :</Typography>
              </CardContent>
              <Stack>

                <CardContent>
                  <TextField id="start-date" type="date"
                    required
                   // defaultValue={dayjs(data?.start_date)}
                   defaultValue={data?.start_date}
                    style={{ width: '20vw' }}
                    
                    InputProps={{
                      inputProps: { min: moment(new Date())?.format('DD-MM-YYYY') }
                    }}
                    value={data.start_date}
                    onChange={(e) => {
                      console.log(e?.target?.default,">gbfdvvfghjmnhbgfvdfgthygbfvdcsxs")
                      setData({ ...data, start_date: e?.target?.value })
                    }} />
{/* {console.log(dayjs( moment(data?.endDate)?.format()),moment(data?.endDate)?.format('YYYY-MM-DD'),new Date(data?.endDate),data?.endDate,"<-- defaultValue={data?.end_date?dayjs( moment(data?.end_date)?.format('YYYY-MM-DD')):dayjs( moment(data?.endDate)?.format('YYYY-MM-DD'))}",data?.end_date,data?.start_date)} */}
                  <TextField id="end-date" type="date" required
                defaultValue={data?.end_date?dayjs( moment(data?.end_date)?.format('DD-MM-YYYY')):dayjs( moment(data?.endDate)?.format('DD-MM-YYYY'))}
                    style={{ width: '20vw', marginLeft: "2rem" }}
                    value={data.end_date}
                    InputProps={{
                      inputProps: { min: moment(data.start_date)?.format('DD-MM-YYYY') }
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
              {/* <Typography id="resources" variant="h6">Resources</Typography> */}
              {/* <div style={{display:"flex"}}> */}
              <Stack >
                <CardContent style={{padding:"9px"}} >
                <Typography  style={{ width: '20vw' }}variant="h6">Resources</Typography>
              <Button onClick={addBusHandler} id="add new bus" style={{ width: '20vw', marginLeft: "80%", marginTop:"-41px" ,backgroundColor: '#ed6c02', color:"white" }}>Add New Bus</Button>
                </CardContent>
              </Stack>
              
              {/* </div> */}
             
             
      {showAddBuss?<Addbus showAddBuss={showAddBuss} createProj={showbusForm} showBussHandler={mainShowBussHandler}/>: null}  
     
    
              <Stack mt={2}>
                <FormControl fullWidth>
                  <InputLabel id="Bus" color="common">Select Bus</InputLabel>
                  <Select id="select-bus"

                    // labelId="demo-simple-select-label"
                    //id="demo-simple-select"
                    defaultValue={data.bus_id}
                    value={data.bus_id}
                    label="Select Bus"
                    onChange={(e => {
                      setData({ ...data, bus_id: e?.target?.value })

                    })}
                  >
                    <MenuItem id="choose-bus" value="" default disabled>Choose Bus</MenuItem>
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
              <Typography id="team-members" variant="h6">Team Members</Typography>
              <Stack mt={3}>
                <FormControl fullWidth>
                  <InputLabel id="operation_manager_value">Select Operation Manager</InputLabel>
                  <Select 

                    // labelId="demo-simple-select-label"
                    id="select-operation-manager"
                    defaultValue={data.operations_manager_id}
                
                    value={data.operations_manager_id}
                    
                    label="Select Operation Manager"
                    onChange={(e => {
                      setData({ ...data, operations_manager_id: e?.target?.value });
                      localStorage.setItem("operations_manager_id", e?.target?.value)
                    })}
                  >
                    <MenuItem id="operation-manager" value="" default disabled>Choose Operation Manager</MenuItem>
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
                  <InputLabel id="driver">Select Driver</InputLabel>
                  <Select

                    // labelId="demo-simple-select-label"
                    id="select_driver"
                    value={data.driverId}
                    defaultValue={data.driverId}
                    label="Select Driver"
                    onChange={(e => {
                      setData({ ...data, driverId: e?.target?.value })
                      // driverList(e?.target?.value)
                    })}
                  >
                    <MenuItem id="choose-driver" value="" default disabled>Choose Driver</MenuItem>
                    {driverData?.list?.map(itm => {
                      return (
                        <MenuItem value={itm?.id}>{itm?.first_name}</MenuItem>
                      )
                    })
                    }
                  </Select>
                </FormControl></Stack> 

                <Stack mt={3}>
                <FormControl fullWidth>
                  <InputLabel id="driver">Select Gelathi Facilitator Leads</InputLabel>
                 {(Gf?.length>0)? <Select
                    id="select_GF"
                    value={data.gfl_id}
                    defaultValue={data.gfl_id}
                    label="Select Gelathi Facilitator Lead"
                    onChange={(e => {
                      setData({ ...data, gfl_id: e?.target?.value })
                      // driverList(e?.target?.value)
                    })}
                  >
                    <MenuItem id="Choose Gelathi Facilitator Lead" value="" default disabled>Choose Gelathi Facilitator Lead</MenuItem>
                    {Gf?.map(itm => {
                      return (
                        <MenuItem value={itm?.id}>{itm?.first_name}</MenuItem>
                      )
                    })
                    }
                  </Select>:<Select label="Select Gelathi Facilitator Lead"><MenuItem id="Select Gelathi Facilitator Lead" value="" disabled>No Gelathi Facilitator Lead</MenuItem></Select>}
                </FormControl></Stack>  

                {/* <Stack mt={3}>
                <FormControl fullWidth>
                  <InputLabel id="associate_project_value">Select Associate Project</InputLabel>
                  <Select 

                    // labelId="demo-simple-select-label"
                    id="select-associate-project"
                    defaultValue={data.operations_manager_id}
                
                    value={data.operations_manager_id}
                    label="Select Associate Project"
                    onChange={(e => {
                      setData({ ...data, operations_manager_id: e?.target?.value });
                      localStorage.setItem("operations_manager_id", e?.target?.value)
                    })}
                  >
                    <MenuItem id="associate-project" value="" default disabled>Select associate Project</MenuItem>
                    {assproject?.data?.map(itm => {
                      return (
                        <MenuItem value={itm?.id}>{itm?.projectName}</MenuItem>
                      )
                    })
                    }
                  </Select>
                </FormControl ></Stack > */}

            </CardContent>
            <Divider />
            {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}> */}
            {/* {console.log(sendData,"senddataaaaaaaaaaaa")} */}
            {data?.operations_manager_id && <AddTrainerDrawer id="add_trainers"
              isOpenFilter={openFilter}
              getData={(e) => { setName(e) }}
              operations_manager_id={data.operations_manager_id}
              onOpenFilter={handleOpenFilter}
              sendData={sendData}
              name={name}
              onCloseFilter={handleCloseFilter}
            />}
            {console.log(name,"namessssssssssssss",sendData)}
            {data?.operations_manager_id && <AddGelathifacilitators id="add_gelathifacilitators"
              sendData={sendData}
              isOpenFilter={opengelathiFilter}
              operations_manager_id={data.operations_manager_id}
              getData={(e) => { setGelathiName(e) }}
              onOpenFilter={handlegelathiOpenFilter}
              onCloseFilter={handlegelathiCloseFilter}
            />}

            {console.log(name, "<---sdfdsfdsfdssddss")}
            {/* </Stack> */}
            <CardContent>
              <Card onClick={() => {
                console.log("its copensdfdsfds")
                handleOpenFilter()
              }}>
                <CardContent>

                 
                  <div id="trainerslist" style={{fontWeight:700}} >Trainers   ({(name?.length?name?.length:0)})<IconButton id="trainerdrawer" style={{float:'right'}}>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton></div>
                 
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
                                <Typography mt={2} variant='subtitle2'>{i?.name}</Typography>
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

                <div id="gelathi-facilators-list" style={{fontWeight:700}}>Gelathi Facilators  ({gelathiName?.length?gelathiName?.length:0})
                  <IconButton id="gelathidrawer" style={{float:'right'}}>
                      <Iconify style={{ color: "black" }} icon="material-symbols:add" />
                    </IconButton>
                  
                    
                    </div>
                  {gelathiName?.length !== 0 &&
                    <Card style={{ marginTop: 10 }}>
                      <CardContent>
                        <Stack spacing={4}  direction={'row'}>
                          {gelathiName?.map(i => {
                            return (
                              <Stack >
                                <Typography mt={2} variant='subtitle2'>{i?.name}</Typography>
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