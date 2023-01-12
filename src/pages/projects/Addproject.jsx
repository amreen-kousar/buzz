import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

function AddProject() {

    const [open, setAddProject] = useState(false)
    const [country, setCountry] = useState([])
    const [fund, setFund] = useState()
    const [states, setStates] = useState([])
    const [district, setDistrict] = useState([])
    const [taluk, setTaluk] = useState([])
    const [data, setData] = useState({
        country: 1,
        state: '',
        district_id: '',
        talaq_id: '',
        funder_id: ""
    })


    useEffect(() => {
        location();
    }, []
    )

    const handleClickOpen = () => {
        console.log("clicked")
        setAddProject(true);
    };

    const handleClose = () => {
        setAddProject(false);
    };

    const location = async => {
        var data = JSON.stringify({
            "country_id": "1",

        });
        getFunder();
        var config = {
            method: 'post',
            url: 'http://3.7.7.138/appTest/getLocation.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setStates(response?.data?.list)
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const getState = async (id) => {
        var data = JSON.stringify({
            "country_id": "1",
            "state_id": id

        });

        var config = {
            method: 'post',
            url: 'http://3.7.7.138/appTest/getLocation.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setDistrict(response.data.list)
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const getDistrict = async (id) => {
        var data = JSON.stringify({
            "country_id": "1",
            "state_id": data?.state,
            "district_id": id
        });

        var config = {
            method: 'post',
            url: 'http://3.7.7.138/appTest/getLocation.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setTaluk(response.data.list)

                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const getFunder = () => {
        const data = JSON.stringify({
            "role_id": 1,
            "filter_type": 2,
            "pageNum": 1,
            "emp_id": 206
        });

        const config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getPeopleFilters.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        axios(config)
            .then((response) => {
                setFund(response?.data?.data)
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const createProject = () => {
        setAddProject(false)

        // MAKE API caal to create project
    }




    return (
        <div>


            <Button variant="contained" style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }} onClick={handleClickOpen} sx={{
                ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                    border: '#ffd796'
                },
                ':active': {
                    bgcolor: '#ffd796',
                    color: "#ed6c02"
                },
                bgcolor: '#ffd796',
                color: "#ed6c02",
                border: 'none'
            }} >
                <span style={{ fontSize: "2rem" }}>+</span>
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} >
                <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
                            Create Project
                        </Typography>

                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>

                <div style={{ margin: "1rem" }}>
                    <br />
                    <FormControl fullWidth>

                        <InputLabel id="demo-simple-select-label"> Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label="Country"

                        >
                            <MenuItem value="0" default disabled>Country </MenuItem>
                            <MenuItem value="India" >India </MenuItem>



                        </Select>
                    </FormControl><br /><br />
                    <FormControl fullWidth>

                        <InputLabel id="demo-simple-select-label"> State</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.state}
                            label="State"
                            onChange={(e => {
                                setData({ ...data, state: e?.target?.value }),
                                    getState(e?.target?.value)
                            })}
                        >
                            <MenuItem value="" default disabled>Choose State </MenuItem>
                            {states?.map(itm => {
                                return (
                                    <MenuItem value={itm?.id}>{itm?.name}</MenuItem>
                                )
                            })
                            }
                        </Select>
                    </FormControl><br /><br />
                    <FormControl fullWidth>

                        <InputLabel id="demo-simple-select-label"> District</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.district_id}
                            label="Age"
                            onChange={(e => {
                                setData({ ...data, district_id: e?.target?.value }),
                                    getDistrict(e?.target?.value)
                            })}
                        >
                            {district?.map(itm => {
                                return (
                                    <MenuItem value={itm?.id}>{itm?.name}</MenuItem>
                                )
                            })
                            }
                        </Select>
                    </FormControl><br /><br />
                    <FormControl fullWidth>

                        <InputLabel id="demo-simple-select-label"> Taluk</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.talaq_id}
                            label="Age"
                            onChange={(e => {
                                setData({ ...data, talaq_id: e?.target?.value })
                                // getTaluk(e?.target?.value)
                            })}
                        >
                            {taluk?.map(itm => {
                                return (
                                    <MenuItem value={itm?.id}>{itm?.name}</MenuItem>
                                )
                            })
                            }
                        </Select>
                    </FormControl><br /><br />
                    <FormControl fullWidth>

                        <InputLabel id="demo-simple-select-label"> Funder</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.funder_id}
                            label="Age"
                            onChange={(e => {
                                setData({ ...data, funder_id: e?.target?.value })
                                // getTaluk(e?.target?.value)
                            })}
                        >
                            {fund?.map(itm => {
                                return (
                                    <MenuItem value={itm?.id}>{itm?.name}</MenuItem>
                                )
                            })
                            }
                        </Select>
                    </FormControl>
                    <br /><br />


                    <Button onClick={() => createProject()} fullWidth variant="filled">Create Project</Button>


                </div>

            </Dialog>
        </div>
    )
}

export default AddProject