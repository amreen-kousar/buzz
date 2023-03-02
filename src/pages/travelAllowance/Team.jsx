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


    const approveTA = () => {
        var data = JSON.stringify({
            "ta_id": checkedData,
            "user_id": localStorage?.getItem('userId'),
            "extra_comments": comments,
            "status": 0
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
                console.log(response, "Response in team members api call")

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    { console.log(checkedData, "checked Dataaaaaaaaaaaa") }

    return (
        <div>
            {
                teamMembersData.map((itm, i) => {
                    return <Card style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: '0.5rem' }} >
                        <Grid container spacing={2} >
                            <Grid onClick={() => { teamMemberTravelAllowance(itm, i) }} item xs={8}>
                                <b cursor="pointer" style={{ color: "blue" }} >{itm?.fullName}</b><br>
                                </br>
                                <Typography variant="body" gutterBottom > <b>{itm?.designation}</b></Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Iconify onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
                                <Iconify style={{ float: "right", marginTop: 5, marginRight: 30, fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify>
                            </Grid>
                        </Grid>
                    </Card>
                })
            }

            {console.log(selectedAll)}

            {/* selecting the team member TA */}


            <Dialog
                open={openFilter}
                fullScreen
                onClose={handleCloseFilter}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Toolbar sx={{ color: "#ffffff", backgroundColor: "#ff7424" }}>
                    <IconButton edge="start" color="inherit" onClick={handleCloseFilter} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1, color: "#ffffff" }} variant="h6" component="div" >
                        {selectedTeamMember}
                    </Typography>
                </Toolbar>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <div>
                            <Checkbox
                                style={{ color: "#f97d3f" }}
                                checked={selectedAll}
                                onChange={() => { setToCheckedData(null, null) }}
                            />
                            Select All
                        </div>
                        {
                            teamTAData.map((itm, i) => {
                                return <Card style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: '0.5rem', height: "10vh" }} >
                                    <Grid container spacing={2}>
                                        <Grid item sm={11}>
                                            <Checkbox
                                                style={{ color: "#f97d3f" }}
                                                item={itm}
                                                value={itm.id}
                                                checked={checkedData.includes(itm.id)}
                                                onChange={() => { setToCheckedData(itm, i) }}
                                            />
                                            <b style={{ color: "#3c88ed" }} >{itm?.Ta_Name}</b>
                                        </Grid>
                                        <Grid item sm={1}>
                                            <Iconify icon="eva:eye-fill" onClick={() => { setselectedTeamTA(itm); handleDetailsOpenFilter() }} style={{ fontSize: 30, color: "#ab0954" }} />
                                        </Grid>
                                    </Grid>

                                </Card>
                            })
                        }
                        <TextField
                            placeholder="Comments"
                            onChange={(e) => { setComments(e.target.value) }}
                            multiline
                            rows={4}
                            fullWidth
                        />

                        <Button fullWidth style={{ backgroundColor: "#ff7424", color: "white", marginTop: "2rem" }} onClick={approveTA}>Submit</Button>

                    </DialogContentText>
                </DialogContent>
                <Dialog onClose={handleDetailsCloseFilter} open={openDetailsFilter}>

                    {selectedTeamTA && <div style={{ padding: "2rem" }}>

                        <table>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Selected POA</td>
                                <td>{selectedTeamTA?.Ta_Name}</td>
                            </tr>
                            <tr>
                                <td style={{ color: "#f97d3f" }}>Start Reading</td>
                                <td>{selectedTeamTA?.start_odometer}</td>
                            </tr>

                            <tr >
                                <td style={{ color: "#f97d3f" }}> Start Location</td>
                                <td>{selectedTeamTA?.start_location_name}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}> End Reading</td>
                                <td>{selectedTeamTA?.end_odometer}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>End Location
                                </td>
                                <td>{selectedTeamTA?.end_location_name}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Mode Of Travel</td>
                                <td>{selectedTeamTA?.mode_of_travel_name}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Rate per Km</td>
                                <td>{selectedTeamTA?.rate_per_KM_name}</td>
                            </tr>

                            {/* <tr>
<td style={{ color: "#f97d3f" }}>Food Expenses</td>
<td>{selectedTeamTA?.}</td>
</tr> */}

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Phone Charges</td>
                                <td>{selectedTeamTA?.telephone}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>printing and stationary</td>
                                <td>{selectedTeamTA?.stationery}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Other Expenses</td>
                                <td>{selectedTeamTA?.other_text}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Other Expenses A</td>
                                <td>{selectedTeamTA?.others}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Total Kilometers</td>
                                <td>{selectedTeamTA?.klmtr}</td>
                            </tr>

                            <tr>
                                <td style={{ color: "#f97d3f" }}>Total TA</td>
                                <td>{selectedTeamTA?.total_ta}</td>
                            </tr>



                        </table>

                    </div>
                    }

                </Dialog>


            </Dialog>










        </div>
    );
}