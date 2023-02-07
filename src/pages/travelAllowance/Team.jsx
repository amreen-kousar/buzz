import { useEffect, useState, forwardRef } from 'react';
import { useForm } from "react-hook-form";
import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Stack, Typography, Box, Button, TextField, Grid, Snackbar, Card, CardActionArea } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../../components/Page';
import TravelDialog from '../Components/DashboardFilters/TravelDialog'
import moment from 'moment';
import Edittraveldialog from '../Editta';
import Iconify from 'src/components/Iconify';
// components



export default function Team(props) {
    const [value, setValue] = React.useState(0);
    const data = localStorage?.getItem('userId')
    var [dateValue, setDatevalue] = useState(new Date().toISOString().split('T')[0])
    const [drawerEvent, SetDrawerEvent] = useState(false);
    const [viewImage, setViewImage] = React.useState(false);
    const [listdata, setListData] = React.useState()
    const [openMessage, setOpenMessage] = React.useState(false);
    const [message, setMessage] = useState(false)
    const [editData, setEditData] = useState(null)
    const [openFilter, setOpenFilter] = useState(false);
    const [clcikData, setClickData] = useState()
    const [teamMembersData, setTeamMembersData] = useState([])
    const [mainValue, setMainValue] = useState(0)
    const [filterData, setFilterData] = useState(null)


    useEffect(() => {
        setFilterData(props.returnDateValue)
        teamMembersApiCall()
    }, [props.returnDateValue]
    )
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const handleOpenFilter = (itm) => {
        // itm.klmtr = +klmtr;
        setEditData(itm)
        console.log(editData)
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };



    const teamMembersApiCall = () => {
        if (filterData) { dateValue = filterData }
        var data = JSON.stringify({
            "date": dateValue,
            "role_id": 3,
            "emp_id": 2
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
                setTeamMembersData(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            {
                teamMembersData.map(itm => {
                    return <Card style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: '0.5rem' }} >
                        <Grid sx={{ margin: '8px' }} style={{ color: "blue" }}><b cursor="pointer"  >{itm?.fullName}</b>
                            <Iconify style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
                            <Iconify style={{ float: "right", marginTop: 5, marginRight: 30, fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify></Grid>
                        <Typography variant="body" gutterBottom sx={{ margin: '10px' }}> <b>{itm?.designation}</b></Typography>
                    </Card>
                })
            }
        </div>
    );
}