import { useEffect, useState, forwardRef } from 'react';
import { useForm } from "react-hook-form";
import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Stack, Typography, Box, Button, TextField, Grid, Snackbar, Card, CardActionArea, Checkbox, Dialog, DialogContentText, Toolbar, IconButton, DialogContent } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../../components/Page';
import TravelDialog from '../Components/DashboardFilters/TravelDialog'
import moment from 'moment';
import Edittraveldialog from './Editta';
import Iconify from 'src/components/Iconify';
// components



export default function Team(props) {
    const [value, setValue] = React.useState(0);
    const data = localStorage?.getItem('userId')
    var [dateValue, setDatevalue] = useState(new Date().toISOString().split('T')[0])
    const [drawerEvent, SetDrawerEvent] = useState(false);
    const [selectedTeamTA, setselectedTeamTA] = useState(null);
    const [openFilter, setOpenFilter] = useState(false)
    const [openDetailsFilter, setOpenDetailsFilter] = useState(false)
    const [selectedTeamMember, setSelectedTeamMember] = useState(null)
    const [teamMembersData, setTeamMembersData] = useState([])
    const [mainValue, setMainValue] = useState(0)
    const [filterData, setFilterData] = useState(null)
    const [teamTADataIDs, setteamTADataIDs] = useState(null)
    const [teamTAData, setTeamMembersTAData] = useState([])
    const [checkedData, setCheckedData] = useState([])
    var [selectedAll, setSelectedAll] = useState(false)
    const [comments, setComments] = useState('')
    const [approve,setapprove]=useState('');
    const [statusValue,setStatus]=useState([]);
    const [reject,setreject]=useState('');
    const [verifylist,setverifylist]=useState('');
    useEffect(() => {
        setFilterData(props.returnDateValue)
        teamMembersApiCall()
    }, [props.returnDateValue]
    )
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const handleDetailsOpenFilter = () => {
        setOpenDetailsFilter(true);
    };

    const handleDetailsCloseFilter = () => {
        setOpenDetailsFilter(false);
    };



    const teamMembersApiCall = () => {
        if (filterData) { dateValue = filterData }
        var role = JSON.parse(localStorage.getItem('userDetails'))?.role
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var data = JSON.stringify({
            "date": dateValue,
             "role_id": role,
            "emp_id": userid
        });
        console.log(data)
        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/new/teamMembers.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(response, "Response in team members api call")
                setTeamMembersData(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const teamMemberTravelAllowance = (itm, i) => {
        console.log("this is calllesss",dateValue, itm?.id)
        setSelectedTeamMember(itm?.fullName)
        var data = JSON.stringify({
            "date": dateValue,
            "emp_id": itm?.id
        });
        console.log(data)
        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/new/listTa.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(response, "Response in team members travel allowance api call")
                setTeamMembersTAData(response.data.data)
                let ids = response.data.data.map(r => r.id)
                setteamTADataIDs(ids)
                handleOpenFilter()
            })
            .catch(function (error) {
                console.log(error);
            });
    }
console.log(teamTAData,"responseeeeeeeeeeeeeeeeeeeeee")
    const setToCheckedData = (itm, i) => {
        console.log(selectedAll, "called in a function")
        if (i == null) {
            selectedAll = !selectedAll
            setSelectedAll(selectedAll)
            console.log(selectedAll, "called in a function")

            if (selectedAll) {
                setCheckedData(teamTADataIDs)
            }
            else {
                setCheckedData([])
            }
        }
        else {
            selectedAll = false
            setSelectedAll(selectedAll)
            if (checkedData.includes(itm.id)) {
                setCheckedData(checkedData.filter((item) => item != itm.id));
            }
            else {
                setCheckedData([...checkedData, itm.id])
            }
        }

    }


    const verifyTA = () => {
        handleCloseFilter()
        const idvalue = JSON.parse(localStorage.getItem('userDetails'))?.id
        var data = JSON.stringify({
            "ta_id": checkedData,
            "user_id": idvalue,
            "extra_comments": comments,
            "status": 4
        });
        console.log(data)
        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/new/verifyTa.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(response, "Response in team members api call")
                setverifylist(response?.data?.data)
               
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const approveTA = (e) => {
        handleCloseFilter()
        const idvalue = JSON.parse(localStorage.getItem('userDetails'))?.id
        var data = JSON.stringify({
            "ta_id": checkedData,
            "user_id":idvalue,
            "extra_comments": comments,
            "status": e
        });
        console.log(data)
        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/new/approveTa.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(response, "approve response")
                setapprove(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    
    console.log(reject,"rejecteddata");
    console.log(approve,"approvedata");
    console.log(verifylist,"verifyyy")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

const userrole = JSON.parse(localStorage.getItem('userDetails'))?.role
    { console.log(checkedData, "checked Dataaaaaaaaaaaa") }

    return (
        <div>
            {
          
                teamMembersData.map((itm, i) => {
                   
                    return <Card id="teams-card" style={{ margin: "20px", borderRadius: "5px", backgroundColor: "f7f7f7", cursor: "pointer", padding: '0.5rem' }} >
                        <Grid id="grid-team" container spacing={2} >
                            <Grid id="travel-allowance" onClick={() => { teamMemberTravelAllowance(itm, i) }} item xs={8}>
                               
                                <b cursor="pointer" style={{ color: "blue" }} >{itm?.fullName}</b><br>
                                </br>
                                <Typography id="designation" variant="body" gutterBottom > <b>{itm?.designation}</b></Typography>
                                {console.log(itm,"itemsssssssss")}
                            </Grid>
                            <Grid id="grid-delete-ta" item xs={4}>
                                {/* <Iconify id="icon-delete-ta" onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify> */}
                                {(itm?.status==0)?<><Iconify id="icon-cross" onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", marginTop: 10, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
                                               <Iconify id="icon-access-time" style={{ float: "right", right:20,marginTop:10,fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify></>:
                                <Iconify id="icon-tick-circle" style={{ float: "right", marginTop: 10, marginRight: 30, fontSize: 30, color: "green" }} icon="mdi:tick-circle"></Iconify>}
                            </Grid>
                        </Grid>
                    </Card>
                      
                })
            }

            {console.log(selectedAll)}

            {/* selecting the team member TA */}


            <Dialog
            id="scroll-dialog-title"
                open={openFilter}
                fullScreen
                onClose={handleCloseFilter}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                  <form onSubmit={(event) => { event.preventDefault(); verifyTA() }}>
                <Toolbar id="team-toolbar" sx={{ color: "#ffffff", backgroundColor: "#ff7424" }}>
                    <IconButton id="icon-team-close" edge="start" color="inherit" onClick={handleCloseFilter} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography id="selected-team-member" sx={{ ml: 2, flex: 1, color: "#ffffff" }} variant="h6" component="div" >
                        {selectedTeamMember}
                    </Typography>
                </Toolbar>
                {/* <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    > */}
                        
                        {/* {( teamTAData.filter(e=>e?.status=='0')).length>0 && */}
                        <div>
                            <Checkbox
                                id="checkbox-team-select-all"
                                style={{ color: "#f97d3f" }}
                                checked={selectedAll}
                                onChange={() => { setToCheckedData(null, null) }}
                            />
                            Select All
                        </div>
                        {
                            teamTAData.map((itm, i) => {
                            //    {console.log(itm?.status,"status")}
                            //     statusValue.push(itm?.status)
                            //     setStatus(statusValue)
                                // {console.log(statusValue,"statusvalues")}
                                return <Card id="team-verified-data-card"  style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: '0.5rem', height: "10vh" }} >
                                    <Grid id="team-verified-data-grid" container spacing={2}>
                                        <Grid id="checked-data-grid" item sm={11}>
                                            {/* {(itm?.status==0)? */}
                                            <Checkbox
                                                style={{ color: "#f97d3f" }}
                                                item={itm}
                                                value={itm.id}
                                                checked={checkedData.includes(itm.id)}
                                                onChange={() => { setToCheckedData(itm, i) }}
                                            />
                                            <b style={{ color: "#3c88ed" }} >{itm?.Ta_Name}</b>
                                            {(itm?.status==4)?<Typography id="verified" style={{color:'green',float:'right'}}>Verified</Typography>:(itm?.status==0)?<Typography style={{color:'red',float:'right'}}>Pending</Typography>:(itm.status==1)?<Typography style={{color:'green',float:'right'}}>Approved</Typography>:<Typography style={{color:'red',float:'right'}}>Rejected</Typography>}
                                        </Grid>
                                        <Grid id ="grid-iconify-team" item sm={1}>
                                            <Iconify id="icon-eye-fill" icon="eva:eye-fill" onClick={() => { setselectedTeamTA(itm); handleDetailsOpenFilter() }} style={{ fontSize: 30, color: "#ab0954" }} />
                                        </Grid>
                                    </Grid>

                                </Card>
                            })
                        }
                        <TextField
                            id="comments"
                            placeholder="Comments"
                            onChange={(e) => { setComments(e.target.value) }}
                            multiline
                            rows={4}
                            required
                            fullWidth
                        />

                        {console.log(teamTAData,"teamdata")}
                        {(userrole==3)&&( teamTAData.filter(e=>e?.status=='4')).length>0 &&
                        <div id="team-buttons" style={{display:'flex'}}><Button id="approve-button" fullWidth style={{ backgroundColor: "#ff7424", color: "white", marginTop: "2rem" }} onClick={()=>approveTA(1)}>Approve</Button>&nbsp;&nbsp;
                        <Button id="reject-button" fullWidth style={{ backgroundColor: "#ff7424", color: "white", marginTop: "2rem" }} onClick={()=>approveTA(2)}>Reject</Button></div>}
                      {(userrole==4 || userrole==12 || userrole == 3 ) && ( teamTAData.filter(e=>e?.status=='0')).length>0 &&<Button id="verify-button" fullWidth style={{ backgroundColor: "#ff7424", color: "white", marginTop: "2rem" }} type='submit'>Verify</Button>}</form>

                    {/* </DialogContentText>
                </DialogContent> */}
                <Dialog id="team-dialog" onClose={handleDetailsCloseFilter} open={openDetailsFilter}>

                    {selectedTeamTA && <div style={{ padding: "2rem" }}>

                        <table>

                            <tr>
                                <td id="selected-poa" style={{ color: "#f97d3f" }}>Selected POA</td>
                                <td id="selected-team-ta-name">:&nbsp;{selectedTeamTA?.Ta_Name}</td>
                            </tr>
                            <tr>
                                <td id="start-reading" style={{ color: "#f97d3f" }}>Start Reading</td>
                                <td id="start-odometer">:&nbsp;{selectedTeamTA?.start_odometer}</td>
                            </tr>

                            <tr >
                                <td id="start-location" style={{ color: "#f97d3f" }}> Start Location</td>
                                <td id="start-location-name">:&nbsp;{selectedTeamTA?.start_location_name}</td>
                            </tr>

                            <tr>
                                <td id="end-reading"style={{ color: "#f97d3f" }}> End Reading</td>
                                <td id="end-odometer">:&nbsp;{selectedTeamTA?.end_odometer}</td>
                            </tr>

                            <tr>
                                <td id="end-location" style={{ color: "#f97d3f" }}>End Location
                                </td>
                                <td id="end-location-name">:&nbsp;{selectedTeamTA?.end_location_name}</td>
                            </tr>

                            <tr>
                                <td id="mode-of-travel" style={{ color: "#f97d3f" }}>Mode Of Travel</td>
                                <td id="mode-of-travel-name">:&nbsp;{selectedTeamTA?.mode_of_travel_name}</td>
                            </tr>

                            <tr>
                                <td id="rate-per-km" style={{ color: "#f97d3f" }}>Rate per Km</td>
                                <td id="rate-per-km-name">:&nbsp;{selectedTeamTA?.rate_per_KM_name}</td>
                            </tr>

                            {/* <tr>
<td style={{ color: "#f97d3f" }}>Food Expenses</td>
<td>{selectedTeamTA?.}</td>
</tr> */}

                            <tr>
                                <td id="phone-charges" style={{ color: "#f97d3f" }}>Phone Charges</td>
                                <td id="telephone">:&nbsp;{selectedTeamTA?.telephone}</td>
                            </tr>

                            <tr>
                                <td id="printing-and-stationary" style={{ color: "#f97d3f" }}>printing and stationary</td>
                                <td id="selected-team-stationary">:&nbsp;{selectedTeamTA?.stationery}</td>
                            </tr>

                            <tr>
                                <td id="other-expenses"  style={{ color: "#f97d3f" }}>Other Expenses</td>
                                <td id="other-text">:&nbsp;{selectedTeamTA?.other_text}</td>
                            </tr>

                            <tr>
                                <td id="other-expenses-a" style={{ color: "#f97d3f" }}>Other Expenses A</td>
                                <td id="others">:&nbsp;{selectedTeamTA?.others}</td>
                            </tr>

                            <tr>
                                <td id="total-kilometers" style={{ color: "#f97d3f" }}>Total Kilometers</td>
                                <td id="klmtr">:&nbsp;{selectedTeamTA?.klmtr}</td>
                            </tr>

                            <tr>
                                <td id="total-ta" style={{ color: "#f97d3f" }}>Total TA</td>
                                <td id="selected-team-total-ta">:&nbsp;{selectedTeamTA?.total_ta}</td>
                            </tr>



                        </table>

                    </div>
                    }

                </Dialog>


            </Dialog>










        </div>
    );
}