import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react"
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { useLocation, useNavigate } from 'react-router-dom';
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
    TextField
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import moment from 'moment';
import GelathiCircleForm from './GelathiCircleForm';
Circledrawer.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
}; 

export default function Circledrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,data1,id }){
    console.log("🚀 ~ file: Circledrawer.jsx:35 ~ Circledrawer ~ clcikData:", clcikData)
    console.log("🚀 ~ file: Circledrawer.jsx:35 ~ Circledrawer ~ data1:", data1)
    const [scheduleData,setScheduleData] = useState('')
    const removegelathicircle = async(itm)=>{
      if(confirm("Are you sure want to remove")){
      var data = JSON.stringify({
        "circle_id": clcikData?.id,
        "flag": 0,
        "gelathi_id":itm?.gelathi_id
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/updateEnrolledGelathi.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
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
    }
      const navigate = useNavigate();
      console.log(data1,'<------data',data1)
    const [addData, setAddData] = useState({
        date: dayjs(new Date()),
        user_id: "",
      })

 const handleChange = (event) => {
        setAddData({ ...addData, date: event })
      }
// console.log(data,"clicked dataaaaaaaaa")
    useEffect(() => {
        VillageVisit();
        circle();
        
        // console.log(clcikData)
    }, [clcikData])
 const [circleData,setcircleData] = useState('')
    const createGfSession = async =>{
      const userid = JSON.parse(localStorage.getItem('userDetails'))?.id

        var data = JSON.stringify({

            "project_id": data1?.project_id,
            "user_id": userid,
            "tb_name": clcikData?.name,
            "tb_id": scheduleData?.data?.id,
            "gf_session_type": 1,
            "plan_date": moment(addData?.date?.$d)?.format('YYYY-MM-DD HH:mm:ss'),
            "gf_session_name": clcikData?.name,
          });
          
          var config = {
            method: 'post',
          maxBodyLength: Infinity,
            url: 'https://bdms.buzzwomen.org/appTest/createGFSessions.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            // onCloseFilter()
            // history.push('/')
            if(response?.data?.code ===200){
            navigate('/dashboard/projects/gelathiProgram',{state:{id:id}})
            console.log(JSON.stringify(response.data));
            }
            else{
  alert(response?.data?.message)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    const VillageVisit = async =>{
        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
            var data = JSON.stringify({
              "batch_id": clcikData?.id,
              "role_id": role
            });
            
            var config = {
              method: 'post',
            maxBodyLength: Infinity,
              url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchData.php',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
              setScheduleData(response?.data)
              console.log(response.data,"<--------------setScheduleData");
            })
            .catch(function (error) {
              console.log(error);
            });
            
           
      }
      console.log(scheduleData,"Scheduleddataaaaaaaaaaaaa")
      console.log("🚀 ~ file: Circledrawer.jsx:132 ~ circle ~ data1?.project_id:", data1?.project_id,clcikData?.id)
      const circle = async () =>{
        const userid = await JSON.parse(localStorage.getItem('userDetails'))?.id
          var data = JSON.stringify({
              "circle_id": clcikData?.id,
              "project_id": data1?.project_id,
              "emp_id": userid
            });
            console.log("🚀 ~ file: Circledrawer.jsx:135 ~ circle ~ data:", data)
             
            
            var config = {
              method: 'post',
              url: 'https://bdms.buzzwomen.org/appTest/getGelathiCircleData.php',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
              setcircleData(response?.data)
              console.log("🚀 ~ file: Circledrawer.jsx:145 ~ response?.data:", response?.data)
              // console.log(response.data,"<----------setcircleDatasetcircleData");
            })
            .catch(function (error) {
              console.log(error);
            });
           
      }
    return(
        <>
          <Drawer
                anchor="right"
                open={isOpenFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 350, },
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                        {`${clcikData?.title}`}
                    </Typography>
                    {console.log(clcikData,'<------clcikDataclcikData')}
                    <IconButton onClick={onCloseFilter}>
                        <Iconify icon="eva:close-fill" width={20} height={20} />
                    </IconButton>
                </Stack>
                <Divider />
                    <Scrollbar>
                    <Stack spacing={10} sx={{ p: 3 }}>
                        {(circleData?.gelathis?.length>0)?<div>
                        {circleData?.gelathis?.map((itm) => {
                            {console.log(itm,"hyy")}
                return (

                            <Card style={{marginTop:20,}}>
                                <CardContent >
                                    <Stack style={{ float:'right'}}  >

                                       <IconButton style={{marginLeft:70,}} onClick={()=>removegelathicircle(itm)}>
                                        <Icon  icon="material-symbols:check-box-rounded" width={20} height={20} marginTop={20}  color="#ff7424"  />

                                        </IconButton>
                                      
                                     
                                       <GelathiCircleForm />
                                     </Stack>
                                   {console.log(circleData?.gelathis,'<-------circleData?.firstName')}
                                  
                                   {/* state={{ id: data1?.project_id }} */}
                                   <Typography  variant="subtitle1" >{itm?.firstName}</Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                   
                                        <Typography variant="body1" gutterBottom>{itm?.villagename}</Typography>
                                    </Typography>
                                
                                   
                                </CardContent>
                            </Card>)
                             })}
                    
                        </div>:<h5 style={{textAlign:'center',marginTop:"50%"}}>No Gelathi</h5>}


                    </Stack>
                </Scrollbar>
                <Scrollbar>
                    <Stack spacing={3} sx={{ p: 3 }}>
                        <div>
                            {/* <Card>
                                <CardContent>
                                <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                              Project: &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.projectName}</span>
                             </Typography>
                                  
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                    Partner :&nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.partnerName}</span>
                                    </Typography>
                                
                                    <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                                        Village  :
                                        &nbsp;&nbsp;<span style={{ fontWeight: 100 }}>{scheduleData?.data?.name}</span>
                                    </Typography>
                                </CardContent>
                            </Card> */}

                            <Typography style={{ flexDirection: 'row',marginTop:20,marginLeft:5 }} variant="subtitle1" gutterBottom>
                                       All Participants :  {scheduleData?.all_participants?.length}
                                    </Typography>

                          
                                <Card style={{marginTop:20}}>
                                    <CardContent>
                                   <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                    label="Date & Time picker"
                   
                    onChange={(e) => { handleChange(e) }}
                    value={addData?.date}
                    renderInput={(params) => <TextField {...params} color="common" />}
                    PopperProps={{
                      placement: "top"
                  
                    }}
                  />
                   </LocalizationProvider>
                                    </CardContent>
                                </Card>
                                <Stack mt={5}>
                                <Button fullWidth variant="contained" onClick={createGfSession} >Save</Button>

                                </Stack>
                </div>
                    </Stack>
                </Scrollbar>
                </Drawer>
        </>
    )
}

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import React from "react"
// import PropTypes from 'prop-types';
// // material
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
// // components
// import Iconify from '../../../components/Iconify';
// import Scrollbar from '../../../components/Scrollbar';
// import { ColorManyPicker } from '../../../components/color-utils';
// // import ShaktiDialog from '../projects/Components/ShaktiDialog'
// // ----------------------------------------------------------------------
// import { useLocation, useNavigate } from 'react-router-dom';
// // import { useHistory } from "react-router-dom";
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import dayjs from 'dayjs';
// import { Navigate } from 'react-router-dom';

// Circledrawer.propTypes = {
//     isOpenFilter: PropTypes.bool,
//     onOpenFilter: PropTypes.func,
//     onCloseFilter: PropTypes.func,
// };

// export default function Circledrawer({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData,data,id,data1 }) {
//     // const history = useHistory();
//     const {state} = useLocation()
//     const navigate = useNavigate();
// console.log(data,'<------clcikDataclcikData',data)
//      const [session,setSession] = useState('')
//      const [scheduleData,setScheduleData] = useState('')

//      const [addData, setAddData] = useState({
//         date: dayjs(new Date()),
//         user_id: "",
//       })

//     useEffect(() => {
//         beehiveVillageVisit();
//         // console.log(clcikData)
//     }, [clcikData])
// console.log(clcikData,"clickeddata")
//     const createGfSession = async(item) =>{
      
//       var roleid = JSON.parse(localStorage.getItem('userDetails'))?.id
//         var data = JSON.stringify({
//             "project_id": scheduleData?.list?.project_id,
//             "user_id": roleid,
//             "locationId":scheduleData?.data?.location_id ,
//             "tb_name": scheduleData?.data?.name,
//             "numOfParticipants":scheduleData?.all_participants?.length ,
//             "tb_id": scheduleData?.data?.id,
//             "gf_session_type": 2,
//             "plan_date": addData?.date,
//             "gf_session_name": scheduleData?.list?.gf_session_name
//           });
          
//           var config = {
//             method: 'post',
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

//     // const beehiveVillageVisit = async =>{
//     //   var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
//     //   var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
//     //       var data = JSON.stringify({
//     //         "batch_id": clcikData?.name,
//     //         "role_id": role
//     //       });
          
//     //       var config = {
//     //         method: 'post',
//     //         url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchData.php',
//     //         headers: { 
//     //           'Content-Type': 'application/json'
//     //         },
//     //         data : data
//     //       };
          
//     //       axios(config)
//     //       .then(function (response) {
//     //         setScheduleData(response?.data)
//     //         console.log(response,"<--------------setScheduleData");
//     //       })
//     //       .catch(function (error) {
//     //         console.log(error);
//     //       });
          
         
//     // }

//     const beehiveVillageVisit = async(id,i,g) =>{
//       console.log(id,"gelrhaiiii",i)
//         var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
//         var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
//         var data = JSON.stringify({      
           
//             "project_id": state?.id,
//             "gelathi_id": id?.emp_id,
//             "emp_id": idvalue
//           });
          
//           var config = {
//             method: 'post',
//             url: 'https://bdms.buzzwomen.org/appTest/getGFSessions.php',
//             headers: { 
//               'Content-Type': 'application/json'
//             },
//             data : data
//           };
          
//           axios(config)
//           .then(function (response) {
//             setScheduleData(response.data)
            
//             console.log(response.data,'<--------------setProgramesetProgramesetPrograme');
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//     }
//     const handleChange = (event) => {
//         setAddData({ ...addData, date: event })
//       }
// console.log(scheduleData?.list,"------------------------------>dataaaaascheduleDatascheduleData")
//     return (
//         <>
//             <Drawer
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

//                 <Scrollbar>
//                     <Stack spacing={3} sx={{ p: 3 }}>
//                         <div>
            
// <Typography>Schedule a visit</Typography>
// <Card><CardContent>{data1?.project_name}</CardContent></Card>
//                                 <Card style={{marginTop:20}}>
                                
//                                     <CardContent>
//                                     <DateTimePicker
//                     label="Date&Time picker"
//                     value={addData?.date}
//                     onChange={(e) => { handleChange(e) }}
//                     renderInput={(params) => <TextField {...params} color="common" />}
//                   />
//                                     </CardContent>
//                                 </Card>
//                                 <Stack mt={5}>
//                                 <Button fullWidth variant="contained" onClick={()=>createGfSession(clcikData?.name)} >Save</Button>

//                                 </Stack>

                         
//                         </div>


//                     </Stack>
//                 </Scrollbar>
//             </Drawer>
//         </>
//     );
// }
