import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { useLocation, Link } from 'react-router-dom'
import CreateProj from './Components/CreateProj';
import Iconify from 'src/components/Iconify';
function AddProject({ viewMessage }) {

    const [open, setAddProject] = useState(false)
    const [country, setCountry] = useState([])
    const [fund, setFund] = useState()
    const [states, setStates] = useState([])
    const [createPro, setCreatePro] = useState(false)
    const [district, setDistrict] = useState([])
    const [taluk, setTaluk] = useState([])
    const [sendData, setSendData] = useState(null)
    const [mainState, setMainState] = useState({
        locationID: "",
        locationName: "",
        funderId: "",
        funderName: "",

    })
    const [data, setData] = useState({
        country: 1,
        state: '',
        district_id: '',
        talaq_id: '',
        funder_id: ""
    })


    useEffect(() => {
        setData([])
        location();
        getFunder();
        // createProject();
    }, [open]
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
        
        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
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
            url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
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
            url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
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
        if (confirm("Are You Sure You Want To Create Project?")) {
            const fundList = fund?.filter(itm => itm?.id === mainState?.funderId)
            const talukList = taluk?.filter(itm => itm?.id === mainState?.locationID)
            console.log(fundList, talukList, "<----talukListtalukList")
            const userid = JSON.parse(localStorage.getItem('userDetails'))?.id
            var data = new FormData();
            data.append('user_id', userid);
            data.append('locationID', talukList[0]?.id);
            data.append('funderID', fundList[0]?.id);
            data.append('createdBy', userid);
            data.append('lastUpdatedBy', userid);
            data.append('location_name', talukList[0]?.name);
            data.append('funderName', fundList[0]?.name);

            var config = {
                method: 'post',
                url: 'https://bdms.buzzwomen.org/appTest/createProject.php',
                data: data
            };

            axios(config)
                .then(function (response) {
                    setSendData({
                        project_id: response?.data?.project_id,
                        projectname: response?.data?.projectName,
                        locationid: response?.data?.locationID,
                        locationName: response?.data?.location_name
                    })
                    setCreatePro(true)
                    setAddProject(response.data)
                    console.log(response, '<----------setAddProjectsetAddProjectsetAddProject', sendData);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        console.log(sendData, "<---qwertyui")
        //    else{
        //         setSendData({
        //             projectId:"",
        //             projectname:"",
        //             locationName:"",
        //             locationid:""
        //         })
        //         setCreatePro(true)
        //         console.log("form is cancelsdsd")
        //   }


    }




    return (
        <div>


            <Button variant="contained" id="New_Project" style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }} onClick={handleClickOpen} sx={{
                ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                    border: '#ffd796'
                },
                ':active': {
                    bgcolor: '#ffd796',
                    color: "#ff7424"
                },
                bgcolor: '#ffd796',
                color: "#ff7424",
                border: 'none'
            }} >
                <span style={{ fontSize: "2rem" }}>+</span>
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} >


                <form onSubmit={(event) => { event.preventDefault(); createProject() }}>
                    <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" id="close_project" >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
                                New Project
                            </Typography>

                            <IconButton type="submit" color="inherit" id="save_project" >
                                <Iconify icon="material-symbols:save"/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <br /> <Typography style={{textAlign:'center',fontWeight:500}}>Select Location and Funder</Typography>
                    <div style={{ margin: "1rem" }}>
                       
                        <FormControl fullWidth>

                            <InputLabel id="Country" color="common" sx={{ borderBlockColor: 'black' }}> Country</InputLabel>
                            <Select
                                labelId="country-label"
                                id="Select_country"

                                label="Country"
                                required
                            >
                                <MenuItem value="" default disabled>Country </MenuItem>
                                <MenuItem value="India" >India </MenuItem>

                            </Select>
                        </FormControl><br /><br />
                        <FormControl fullWidth>

                            <InputLabel id="State"> State</InputLabel>
                            <Select
                                required

                                labelId="state-label"
                                id="Select_state"
                                value={data.state}
                                label="State"
                                onChange={(e => {
                                    setData({ ...data, state: e?.target?.value }),
                                        getState(e?.target?.value)
                                })}
                            >
                                <MenuItem value="" default disabled>Select State </MenuItem>
                                {states?.map(itm => {
                                    return (
                                        <MenuItem value={itm?.id} >{itm?.name}</MenuItem>
                                    )
                                })
                                }
                            </Select>
                        </FormControl><br /><br />
                        <FormControl fullWidth>

                            <InputLabel id="District"> District</InputLabel>
                            <Select
                                labelId="district-label"
                                id="Select_district"
                                value={data.district_id}
                                label="District"
                                required

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

                            <InputLabel id="Taluk"> Taluk</InputLabel>
                            <Select
                                required

                                labelId="Taluk-label"
                                id="select_taluk"
                                value={data.talaq_id}
                                label="Taluk"
                                onChange={(e => {
                                    setData({ ...data, talaq_id: e?.target?.value })
                                    setMainState({ ...mainState, locationID: e?.target?.value })
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

                            <InputLabel id="Funder"> Funder</InputLabel>
                            <Select
                                labelId="Funder-label"
                                id="select_funder"
                                value={data.funder_id}
                                required

                                label="Funder"
                                onChange={(e => {
                                    setData({ ...data, funder_id: e?.target?.value })
                                    setMainState({ ...mainState, funderId: e?.target?.value })
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

                        {/* <Link to="/dashboard/projects/CreateProj"><Button fullWidth variant="filled">
                    <span style={{ width: "235px" }}>Create New Project</span>
                  </Button>
                  </Link><br /> */}
                        {/* <Button onClick={() => createProject()} fullWidth variant="filled" style={{background:"#f5f5f5"}}>Create New Project</Button> */}

                        {console.log(createPro)}



                    </div> </form>

                {
                    (sendData && createPro && AddProject) ? <CreateProj sendData={sendData}
                        setCreatePro={(e) => { setCreatePro(e), handleClose() }} createPro={createPro} viewMessage={viewMessage} />
                        : null}

            </Dialog>
        </div>
    )
}

export default AddProject