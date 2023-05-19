// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import React from "react"
// import { Icon } from '@iconify/react';
// import PropTypes from 'prop-types';
// import Iconify from '../../../components/Iconify';
// import Scrollbar from '../../../components/Scrollbar';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {
//     Box,
//     Radio,
//     Stack,
//     Button,
//     Drawer,
//     Rating,
//     Divider,
//     Checkbox,
//     FormGroup,
//     IconButton,
//     Typography,
//     RadioGroup,
//     Card,
//     CardContent,
//     TextField
// } from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import moment from 'moment';
// import GelathiCircleForm from './GelathiCircleForm';
// Circledrawer.propTypes = {
//     isOpenFilter: PropTypes.bool,
//     onOpenFilter: PropTypes.func,
//     onCloseFilter: PropTypes.func,
// }; 

// export default function Circledrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,data1,id }){
//     console.log("🚀 ~ file: Circledrawer.jsx:35 ~ Circledrawer ~ clcikData:", clcikData)
//     console.log("🚀 ~ file: Circledrawer.jsx:35 ~ Circledrawer ~ data1:", data1)
//     const [scheduleData,setScheduleData] = useState('')
//     const removegelathicircle = async(itm)=>{
//       if(confirm("Are you sure want to remove")){
//       var data = JSON.stringify({
//         "circle_id": clcikData?.id,
//         "flag": 0,
//         "gelathi_id":itm?.gelathi_id
//       });
      
//       var config = {
//         method: 'post',
//         url: 'https://bdms.buzzwomen.org/appTest/updateEnrolledGelathi.php',
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
      
//       axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         circle();
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//     }
//       const navigate = useNavigate();
//       console.log(data1,'<------data',data1)
//     const [addData, setAddData] = useState({
//         date: dayjs(new Date()),
//         user_id: "",
//       })

//  const handleChange = (event) => {
//         setAddData({ ...addData, date: event })
//       }
// // console.log(data,"clicked dataaaaaaaaa")
//     useEffect(() => {
//         VillageVisit();
//         circle();
        
//         // console.log(clcikData)
//     }, [clcikData])
//  const [circleData,setcircleData] = useState('')
//     const createGfSession = async =>{
//       const userid = JSON.parse(localStorage.getItem('userDetails'))?.id

//         var data = JSON.stringify({

//             "project_id": data1?.project_id,
//             "user_id": userid,
//             "tb_name": clcikData?.name,
//             "tb_id": scheduleData?.data?.id,
//             "gf_session_type": 1,
//             "plan_date": moment(addData?.date?.$d)?.format('YYYY-MM-DD HH:mm:ss'),
//             "gf_session_name": clcikData?.name,
//           });
          
//           var config = {
//             method: 'post',
//           maxBodyLength: Infinity,
//             url: 'https://bdms.buzzwomen.org/appTest/createGFSessions.php',
//             headers: { 
//               'Content-Type': 'application/json'
//             },
//             data : data
//           };
          
//           axios(config)
//           .then(function (response) {
//             // onCloseFilter()
//             // history.push('/')
//             if(response?.data?.code ===200){
//             navigate('/dashboard/projects/gelathiProgram',{state:{id:id}})
//             console.log(JSON.stringify(response.data));
//             }
//             else{
//   alert(response?.data?.message)
//             }
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
          
//     }

//     const VillageVisit = async =>{
//         var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
//         var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
//             var data = JSON.stringify({
//               "batch_id": clcikData?.id,
//               "role_id": role
//             });
            
//             var config = {
//               method: 'post',
//             maxBodyLength: Infinity,
//               url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchData.php',
//               headers: { 
//                 'Content-Type': 'application/json'
//               },
//               data : data
//             };
            
//             axios(config)
//             .then(function (response) {
//               setScheduleData(response?.data)
//               console.log(response.data,"<--------------setScheduleData");
//             })
//             .catch(function (error) {
//               console.log(error);
//             });
            
           
//       }
//       console.log(scheduleData,"Scheduleddataaaaaaaaaaaaa")
//       console.log("🚀 ~ file: Circledrawer.jsx:132 ~ circle ~ data1?.project_id:", data1?.project_id,clcikData?.id)
//       const circle = async () =>{
//         const userid = await JSON.parse(localStorage.getItem('userDetails'))?.id
//           var data = JSON.stringify({
//               "circle_id": clcikData?.id,
//               "project_id": data1?.project_id,
//               "emp_id": userid
//             });
//             console.log("🚀 ~ file: Circledrawer.jsx:135 ~ circle ~ data:", data)
             
            
//             var config = {
//               method: 'post',
//               url: 'https://bdms.buzzwomen.org/appTest/getGelathiCircleData.php',
//               headers: { 
//                 'Content-Type': 'application/json'
//               },
//               data : data
//             };
            
//             axios(config)
//             .then(function (response) {
//               setcircleData(response?.data)
//               console.log("🚀 ~ file: Circledrawer.jsx:145 ~ response?.data:", response?.data)
//               // console.log(response.data,"<----------setcircleDatasetcircleData");
//             })
//             .catch(function (error) {
//               console.log(error);
//             });
           
//       }
//     return(
//         <>
//           <Drawer
//                 anchor="right"
//                 open={isOpenFilter}
//                 onClose={onCloseFilter}
//                 PaperProps={{
//                     sx: { width: 350, },
//                 }}
//             >
//                 <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
//                     <Typography variant="subtitle1" sx={{ ml: 1 }}>
//                         {`${clcikData?.title}`}
//                     </Typography>
//                     {console.log(clcikData,'<------clcikDataclcikData')}
//                     <IconButton onClick={onCloseFilter}>
//                         <Iconify icon="eva:close-fill" width={20} height={20} />
//                     </IconButton>
//                 </Stack>
//                 <Divider />
//                     <Scrollbar>
//                     <Stack spacing={10} sx={{ p: 3 }}>
//                         {(circleData?.gelathis?.length>0)?<div>
//                         {circleData?.gelathis?.map((itm) => {
//                             {console.log(itm,"hyy")}
//                 return (

//                             <Card style={{marginTop:20,}}>
//                                 <CardContent >
//                                     <Stack style={{ float:'right'}}  >

//                                        <IconButton style={{marginLeft:70,}} onClick={()=>removegelathicircle(itm)}>
//                                         <Icon  icon="material-symbols:check-box-rounded" width={20} height={20} marginTop={20}  color="#ff7424"  />

//                                         </IconButton>
                                      
                                     
//                                        <GelathiCircleForm />
//                                      </Stack>
//                                    {console.log(circleData?.gelathis,'<-------circleData?.firstName')}
                                  
//                                    {/* state={{ id: data1?.project_id }} */}
//                                    <Typography  variant="subtitle1" >{itm?.firstName}</Typography>
//                                     <Typography variant="subtitle1" gutterBottom>
                                   
//                                         <Typography variant="body1" gutterBottom>{itm?.villagename}</Typography>
//                                     </Typography>
                                
                                   
//                                 </CardContent>
//                             </Card>)
//                              })}
                    
//                         </div>:<h5 style={{textAlign:'center',marginTop:"50%"}}>No Gelathi</h5>}


//                     </Stack>
//                 </Scrollbar>
//                 <Scrollbar>
//                     <Stack spacing={3} sx={{ p: 3 }}>
//                         <div>
//                             {/* <Card>
//                                 <CardContent>
//                                 <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
//                               Project: &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.projectName}</span>
//                              </Typography>
                                  
//                                     <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
//                                     Partner :&nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.partnerName}</span>
//                                     </Typography>
                                
//                                     <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
//                                         Village  :
//                                         &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.name}</span>
//                                     </Typography>
//                                 </CardContent>
//                             </Card> */}

//                             <Typography style={{ flexDirection: 'row',marginTop:20,marginLeft:5 }} variant="subtitle1" gutterBottom>
//                                        All Participants :  {scheduleData?.all_participants?.length}
//                                     </Typography>

                          
//                                 <Card style={{marginTop:20}}>
//                                     <CardContent>
//                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                     <DateTimePicker
//                     label="Date & Time picker"
                   
//                     onChange={(e) => { handleChange(e) }}
//                     value={addData?.date}
//                     renderInput={(params) => <TextField {...params} color="common" />}
//                     PopperProps={{
//                       placement: "top"
                  
//                     }}
//                   />
//                    </LocalizationProvider>
//                                     </CardContent>
//                                 </Card>
//                                 <Stack mt={5}>
//                                 <Button fullWidth variant="contained" onClick={createGfSession} >Save</Button>

//                                 </Stack>
//                 </div>
//                     </Stack>
//                 </Scrollbar>
//                 </Drawer>
//         </>
//     )
// }



//benak changes
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
  TextField,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import moment from 'moment';
import GelathiCircleForm from './GelathiCircleForm';
import oldbaseURL from 'src/utils/api';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
Circledrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function Circledrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, data1, id }) {
  console.log('🚀 ~ file: Circledrawer.jsx:35 ~ Circledrawer ~ clcikData:', clcikData);
  console.log('🚀 ~ file: Circledrawer.jsx:35 ~ Circledrawer ~ data1:', data1);
  const [scheduleData, setScheduleData] = useState('');
  var [searchData, setSearchData] = useState('');
  var [search, setSearch] = useState('');
  var [selected, setSelected] = useState(null);
  const { state } = useLocation();
  const [sendData, setSendData] = React.useState({
    project_id: '',
    circle_name: '',
    circle_date: '',
    gelathi_created_id: '',
  });

  console.log(state.head, 'clicket data in ');

  const searchFunction = (e) => {
    console.log('searchfunctioniscalled', e);
    search = e;
    setSearch(search);
    // setSelected({ name: e, type: "Search" })
    enrolledGelathi();
  };

  const changeText = (e) => {
    setSearchData(e?.target?.value);
    searchFunction(e?.target?.value);
    console.log(e?.target?.value, 'evalueeeeeeee');
  };
  const enrolledGelathi = (async) => {
    var userDetails = JSON.parse(localStorage?.getItem('userDetails'));
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      search: search,
      project_id: state?.id,
      emp_id: idvalue,
      role_id: role,
    });

    var config = {
      method: 'post',
      url: oldbaseURL +'getEnrollGelathi.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setenrolled(response.data);
        console.log(response.data, '<---------------setenrolledsetenrolled');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removegelathicircle = async (itm) => {
    if (confirm('Are you sure want to remove')) {
      var data = JSON.stringify({
        circle_id: clcikData?.id,
        flag: 0,
        gelathi_id: itm?.gelathi_id,
      });

      var config = {
        method: 'post',
        url: oldbaseURL+'updateEnrolledGelathi.php',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          circle();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const navigate = useNavigate();
  console.log(data1, '<------data', data1);
  const [addData, setAddData] = useState({
    date: dayjs(new Date()),
    user_id: '',
  });

  const handleChange = (event) => {
    setAddData({ ...addData, date: event });
  };
  // console.log(data,"clicked dataaaaaaaaa")
  useEffect(() => {
    VillageVisit();
    circle();
    setSendData({
      circle_date: clcikData?.date,
    });

    // console.log(clcikData)
  }, [clcikData]);
  const [circleData, setcircleData] = useState('');
  const createGfSession = (async) => {
    const userid = JSON.parse(localStorage.getItem('userDetails'))?.id;

    var data = JSON.stringify({
       project_id: data1?.project_id,
      user_id: userid,
      circle_id: clcikData?.circleDI,
      locationId:data1?.location_id,
       tb_name: clcikData?.name,
      tb_id: 646,
      plan_date: moment(sendData?.circle_date?.$d)?.format('YYYY-MM-DD HH:mm:ss'),
      numOfParticipants: circleData?.gelathis?.length,
      gf_session_type: state?.head == '_SPS'
      ? "4"
      : state?.head == '_SPM1'
      ? "5"
      : state?.head == '_SPM2'
      ? '6'
      : state?.head == '_SPM3'
      ? '7'
      : state?.head == '_SPM4'
      ? '8'
      : state?.head == '_SPM5'
      ? '9'
      : state?.head == '_GPS'
      ? '10'
      : state?.head == '_GPM1'
      ? '11'
      : state?.head == '_GPM2'
      ? '12'
      : state?.head == '_GPM3'
      ? '13'
      : state?.head == '_GPM4'
      ? '14'
      : state?.head == '_GPM5'
      ? '15'
      : state?.head == '_VPS'
      ? '16'
      : state?.head == '_VPM1'
      ? '17'
      : state?.head == '_VPM2'
      ? '18'
      : state?.head == '_VPM3'
      ? '19'
      : state?.head == '_VPM4'
      ? '20'
      : state?.head == '_VPM5'
      ? '21'
      : null,
      // plan_date: moment(addData?.date?.$d)?.format('YYYY-MM-DD HH:mm:ss'),
      // gf_session_name: clcikData?.name,

      // {
      //   "project_id":"617",
      //   "user_id":892, 
      //   "locationId":197, 
      //   "circle_id":638,
      //   "tb_name":"yupoo",
      //   "numOfParticipants":"7",
      //   "tb_id":0,
      //   "gf_session_type":"11",
      //   "plan_date":"2023-5-17 10:50AM",
      //   "gf_session_name":null
        
      //   }

     
    });
    //   {
    //     "circle_id":clcikData?.circleDI,
    //     "name":clcikData?.name,
    //     "user_id":userid,
    //     "project_id":746,
    //     "date":"2023-5-11 06:00:00",
    //     "gf_circle_type":"1"
    // }
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
       url: oldbaseURL+'createGFSessionsNew1.php',
      // url: 'https://bdms.buzzwomen.org/appTest/createCircleMeetingNew.php',

      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // onCloseFilter()
        // history.push('/')
        if (response?.data?.code === 200) {
          navigate('/dashboard/projects/gelathiProgram', { state: { id: id } });
          console.log(JSON.stringify(response.data));
        } else {
          alert(response?.data?.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const VillageVisit = (async) => {
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      batch_id: clcikData?.id,
      role_id: role,
    });

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: oldbaseURL+'getTrainingBatchData.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setScheduleData(response?.data);
        console.log(response.data, '<--------------setScheduleData');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(scheduleData, 'Scheduleddataaaaaaaaaaaaa');
  console.log('🚀 ~ file: Circledrawer.jsx:132 ~ circle ~ data1?.project_id:', data1?.project_id, clcikData?.id);
  const circle = async () => {
    const userid = await JSON.parse(localStorage.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      circle_id: clcikData?.id,
      project_id: data1?.project_id,
      emp_id: userid,
    });
    console.log('🚀 ~ file: Circledrawer.jsx:135 ~ circle ~ data:', data);

    var config = {
      method: 'post',
      url: oldbaseURL+'getGelathiCircleData.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setcircleData(response?.data);
        console.log('🚀 ~ file: Circledrawer.jsx:145 ~ response?.data:', response?.data);
        // console.log(response.data,"<----------setcircleDatasetcircleData");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const searchFunction = (e) => {
  //   search = e
  //   setSearch(search)
  //   setSelected({ name: e, type: "Search" })
  //   circle()
  // }
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 350 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            {/* {`${clcikData?.title}`}  */}
            Schedule a CM
          </Typography>
          {console.log(clcikData, '<------clcikDataclcikData')}
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>
        <Divider />
        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
        

              <Typography
                style={{ flexDirection: 'row', marginTop: 20, marginLeft: 5 }}
                variant="subtitle1"
                gutterBottom
              >
                Circle Name : {`${clcikData?.name}`}
              </Typography>
              <Typography
                style={{ flexDirection: 'row', marginTop: 20, marginLeft: 5 }}
                variant="subtitle1"
                gutterBottom
              >
                Date And Time :{`${clcikData?.date}`}
              </Typography>
              <DatePicker
                required
                label="Date"
                defaultValue={sendData?.circle_date}
                onChange={(newValue) => setSendData({ ...sendData, circle_date: newValue })}
                renderInput={(params) => <TextField {...params} fullWidth />}
                value={sendData?.circle_date}
              />
              <TextField
                id="outlined-basic"
                label="Search..."
                sx={{ flex: 10 }}
                onChange={(e) => {
                  changeText(e);
                }}
                InputProps={{
                  startAdornment: (
                    <Button>
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    </Button>
                  ),
                }}
                variant="outlined"
                style={{ marginTop: 40, marginLeft: 10, width: '100%' }}
              />
              <Typography
                style={{ flexDirection: 'row', marginTop: 20, marginLeft: 5 }}
                variant="subtitle1"
                gutterBottom
              >
                Enrolled Gelathis (
                {scheduleData?.all_participants?.length > 0
                  ? scheduleData?.all_participants?.length
                  : circleData?.gelathis?.length}
                ):{' '}
              </Typography>
            </div>
          
            {circleData?.gelathis?.length > 0 ? (
              <div>
                {circleData?.gelathis?.map((itm) => {
                  {
                    console.log(itm, 'hyy');
                  }
                  return (
                    <Card style={{ marginTop: 20 }}>
                      <CardContent>
                        <Stack style={{ float: 'right' }}>
                          <IconButton style={{ marginLeft: 70 }} onClick={() => removegelathicircle(itm)}>
                            <Icon
                              icon="material-symbols:check-box-rounded"
                              width={20}
                              height={20}
                              marginTop={20}
                              color="#ff7424"
                            />
                          </IconButton>

                          {/* <GelathiCircleForm /> */}
                        </Stack>
                        {console.log(circleData?.gelathis, '<-------circleData?.firstName')}

                        {/* state={{ id: data1?.project_id }} */}
                        <Typography variant="subtitle1">{itm?.firstName}</Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          <Typography variant="body1" gutterBottom>
                            {itm?.villagename}
                          </Typography>
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <h5 style={{ textAlign: 'center', marginTop: '50%' }}>No Gelathi</h5>
            )}
          </Stack>
        </Scrollbar>
        <Stack mt={5} spacing={3} sx={{ p: 3 }}>
          <Button fullWidth variant="contained" onClick={createGfSession} style={{ backgroundColor: '#FF7424' }}>
            Save
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
