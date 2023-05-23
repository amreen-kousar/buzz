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

import moment from 'moment';

import Iconify from 'src/components/Iconify';
// components



export default function TeamQuality(props) {
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
    

    return (
        <div>
          

                      team qualityyyyyyyyyyyyyyyyy









        </div>
    );
}