import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, Toolbar, IconButton, Typography, TextField, DialogContent, DialogContentText, Box, DialogActions, FormControl, InputLabel, Select, MenuItem, RadioGroup, Radio, Autocomplete, FormControlLabel, FormGroup, Switch } from '@mui/material'
import Iconify from '../../components/Iconify';

function AddUser(props) {

    const [open, setOpen] = useState(false);
    const [ceoUser, setCeoUser] = useState(props.data)

    let isValidForm = true;

    let [inputProject, setInputProject] = useState([''])

    let [filteredProjects, setFilteredProjects] = useState([])


    let [errors, setErrors] = useState({ office_email_id: false })

    let [emailExists, setEmailExists] = useState(false)

    var [AddUser, setAddUser] = useState({
        role: { id: '2', roleName: 'Admin' }, first_name: '', last_name: "", contactNum: '', workNum: '', office_email_id: '', address: '', address3: "", address2: "",
        pincode: "", gender: "male", present_status: true, doj: '', reportingManager: "", license_number: "", project: "",
        emp_id: ""
    })

    const [roles, setRoles] = useState([])
    const [reportingManager, setReportingManager] = useState([])
    const [reportingManagerProject, setReportingManagerProject] = useState([])

    useEffect(() => {
        getRoles()
        getEmpId(2)
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
        // getProjects()
    };

    const handleClose = () => {
        console.log(AddUser)
        setOpen(false);
    };


    const checkEmailValidation = () => {
        if (emailExists) {
            setEmailExists(false)
        }
        console.log(AddUser.office_email_id, "office email id")
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(AddUser.office_email_id))) {
            checkEmailExists()
            setErrors({ ...errors, office_email_id: false })
        }
        else {
            console.log("invalid email ID")
            setErrors({ ...errors, office_email_id: true })
        }

        // console.log(errors.office_email_id)

    }


    const checkEmailExists = () => {
        const data = JSON.stringify({
            office_email_id: AddUser.office_email_id
        });

        const config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getEmailExist.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        axios(config)
            .then((response) => {

                if (response.success) {
                    console.log(response)
                    setEmailExists(true)
                }
                else {
                    setEmailExists(false)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const getRoles = () => {
        const data = JSON.stringify({
        });

        const config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/roles_list.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        axios(config)
            .then((response) => {

                console.log(response, "roles")
                setRoles(response.data.list)

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getEmpId = async (value) => {
        setAddUser({ ...AddUser, role: value })
        let formData = new FormData();
        formData.append('role_id', value);
        formData.append('name', '');


        let res = await fetch('https://bdms.buzzwomen.org/appTest/getAllBuzzTeam.php',
            {
                body: formData,
                method: "post"
            })
            .then((res) => res.json())
        let temprepoManager = res.list.map(repo => { return { label: repo?.name, id: repo.id, role: repo.role } })
        console.log(temprepoManager)
        setReportingManager([...temprepoManager])
    }

    const getProjectOfManager = async (value) => {
        setAddUser({ ...AddUser, reportingManager: value })
        let formData = new FormData();
        formData.append('manager_id', value.id);
        formData.append('first_name', '');
        const data = JSON.stringify({
            'manager_id': value.id
        });

        const config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getProjectList.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        axios(config)
            .then((response) => {
                console.log(response.data.list, 'project')
                let temprepoManagerProject = response.data.list.map(repo => { return { label: repo?.projectName, id: repo.id } })
                setReportingManagerProject([...temprepoManagerProject,
                    // { id: '210', label: 'testme' }
                ])
            })
            .catch((error) => {
                console.log(error);
            });

    }



    const changeProject = (value) => {
        console.log(value)
        // console.log(value, "changeProject")
        // inputProject[inputProject.length - 1] = value.id
        setInputProject([...value])
        console.log(inputProject)
    }


    const getProjects = async () => {


        const data = JSON.stringify({
            "search": "",
            "id": 1,
            "role_id": 1,
            "filter_id": 0,
            "type": "",
            "pageNum": 1
        });

        const config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getProjects.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        axios(config)
            .then((response) => {
                setProjects(response.data)
                console.log(projects)
            })
            .catch((error) => {
                console.log(error);
            });


    }


    const submitUser = () => {
        AddUser.project = inputProject.map(i => parseInt(i.id))
        AddUser.officeMailId = AddUser.office_email_id
        AddUser.empRole = AddUser.role.id
        AddUser.supervisorId = AddUser.reportingManager.id
        AddUser.profile_pic = ''
        AddUser.status = AddUser.present_status ? '1' : '0';
        AddUser.createdBy = '650',
            AddUser.lastUpdatedBy = '650'
        // console.log(AddUser)
        const data = JSON.stringify(AddUser);

        const config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/createUser.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        axios(config)
            .then((response) => {
                console.log(response)
                if (response?.data?.success) {
                    setOpen(false)
                    props.viewMessage('User Added successfully');   
                }
            })
            .catch((error) => {
                console.log(error);
            });

        console.log("Add User", AddUser)
        // https://bdms.buzzwomen.org/appTest/createUser.php
    }

    return (

        <div>
            <Button style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }} variant="contained" onClick={handleClickOpen} sx={{
                ':focus': {
                    backgroundColor: '#ffd796',
                    color: '#ed6c02'
                },
                '&:hover': {
                    backgroundColor: '#ffd796',
                    color: '#ed6c02'
                }, backgroundColor: '#ffd796',
                color: '#ed6c02'
            }}><span style={{ fontSize: "2rem" }}>+</span></Button>
            <Dialog
                open={open}
                fullScreen
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"

            >
                <Toolbar >
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
                        Add User
                    </Typography>
                    <Button autoFocus color="inherit" onClick={submitUser}>
                        save
                    </Button>
                </Toolbar>
                <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1 },

                            }}

                            noValidate
                            autoComplete="off"
                        >
                            <div style={{ background: "white", padding: "2rem", borderRadius: "10px" }}>

                                <FormControl fullWidth style={{ marginLeft: '0.5rem', marginBottom: "0.5rem" }}>
                                    <InputLabel id="demo-simple-select-label">Choose Role</InputLabel>
                                    <Select

                                        labelId="demo-simple-select-label"
                                        id="role"
                                        defaultValue={AddUser.role}
                                        label="Role"
                                        onChange={(e) => { getEmpId(e.target.value) }}
                                    >
                                        {roles.map(role => {
                                            return <MenuItem value={role ?? ''}>{role?.roleName}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>

                                <TextField fullWidth id="outlined-basic" label="Name" value={AddUser.first_name} required onChange={(e) => { setAddUser({ ...AddUser, first_name: e.target.value }) }} variant="outlined" />
                                {
                                    ["Admin", "Program Manager", "Operations Manager", "Gelathi Facilitator Lead", 'FIN/HR/VIEWER', 'Senior Operations Manager'].includes(AddUser.role?.roleName) && <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" value={AddUser.last_name} onChange={(e) => { setAddUser({ ...AddUser, last_name: e.target.value }) }} />
                                }
                                {!["Funder", "Partner"].includes(AddUser.role?.roleName) && <FormControl style={{ marginLeft: "1rem" }}>
                                    <RadioGroup
                                        row
                                        onChange={(e, value) => { setAddUser({ ...AddUser, gender: value }) }}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="male"
                                        first_name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />

                                    </RadioGroup>
                                </FormControl>}
                                <FormGroup style={{ float: "right" }}>
                                    <FormControlLabel label="Status" labelPlacement="start"
                                        control={<Switch defaultValue={AddUser.present_status} onClick={(e, value) => { setAddUser({ ...AddUser, present_status: !AddUser.present_status }); console.log(!AddUser.present_status) }} defaultChecked />} />
                                </FormGroup>
                                <br />
                                {!["Funder", "Partner"].includes(AddUser.role?.roleName) && <FormControl fullWidth>

                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={reportingManager}
                                        defaultValue={AddUser.reportingManager}
                                        label="reportingManager"
                                        onChange={(event, value) => getProjectOfManager(value)}

                                        renderInput={(params) => <TextField {...params} label="ReportingManger" />}
                                    />
                                </FormControl>
                                }
                                {!["Funder", "Partner"].includes(AddUser.role?.roleName) && <TextField fullWidth id="outlined-basic" label="Date of joining " type="date" InputLabelProps={{
                                    shrink: true,
                                }} value={AddUser.doj} onChange={(e) => { setAddUser({ ...AddUser, doj: e.target.value }) }} variant="outlined" />
                                }
                            </div>

                            <br />
                            <h3>Contact Information</h3>
                            <br />

                            <div style={{ background: "white", padding: "2rem", borderRadius: "10px" }}>

                                <TextField fullWidth required id="outlined-basic" label="Mobile number" value={AddUser.contactNum} type="number" onChange={(e) => { setAddUser({ ...AddUser, contactNum: e.target.value }) }} variant="outlined" />
                                <TextField fullWidth id="outlined-basic" label="Work" value={AddUser.work} onChange={(e) => { setAddUser({ ...AddUser, work: e.target.value }) }} type="number" variant="outlined" />



                                <TextField fullWidth required id="outlined-basic" label="office_email_id" value={AddUser.office_email_id} onChange={(e) => { setAddUser({ ...AddUser, office_email_id: e.target.value }); checkEmailValidation() }} onPaste={(e) => { setAddUser({ ...AddUser, office_email_id: e.target.value }); checkEmailValidation() }} variant="outlined" />

                                <div style={{ marginLeft: "1rem", fontSize: "0.8rem", fontWeight: "700" }}>
                                    {emailExists ? <span style={{ color: "crimson", display: "flex" }}><Iconify icon="gridicons:cross-circle" width={20} height={20} /> &nbsp; Email Id already exists !</span> : (errors.office_email_id) ? <span style={{ color: "crimson", display: "flex" }}><Iconify icon="gridicons:cross-circle" width={20} height={20} /> &nbsp;Invalid Email Id</span> : (AddUser.office_email_id != "") ? <span style={{ color: "green", display: "flex" }}><Iconify icon="mdi:tick-circle" width={20} height={20} /> &nbsp;Valid Email Id</span> : null}
                                </div>


                                <TextField fullWidth required id="outlined-basic" label="Address" value={AddUser.address} onChange={(e) => { setAddUser({ ...AddUser, address: e.target.value }) }} variant="outlined" />

                                {!["Funder", "Partner"].includes(AddUser.role?.roleName) && <TextField fullWidth id="outlined-basic" label="Address 1" value={AddUser.address3} onChange={(e) => { setAddUser({ ...AddUser, address3: e.target.value }) }} variant="outlined" />}
                                {!["Funder", "Partner"].includes(AddUser.role?.roleName) && < TextField fullWidth id="outlined-basic" label="Address 2" value={AddUser.address2} onChange={(e) => { setAddUser({ ...AddUser, address2: e.target.value }) }} variant="outlined" />}

                                <TextField fullWidth id="outlined-basic" label="Pincode" value={AddUser.pincode} onChange={(e) => { setAddUser({ ...AddUser, pincode: e.target.value }) }} variant="outlined" />
                                {

                                    ["Trainer", 'Gelathi Facilitator', 'FIN/HR/VIEWER', 'Senior Operations Manager'].includes(AddUser.role?.roleName) && <FormControl fullWidth>

                                        <Autocomplete
                                            // disablePortal
                                            // id="combo-box-demo"
                                            // options={reportingManagerProject}
                                            // defaultValue={inputProject[-1]}
                                            // label="project"
                                            // onChange={(e, value) => changeProject(value)}
                                            // renderInput={(params) => <TextField {...params} label="Choose project" />}

                                            multiple
                                            limitTags={2}
                                            id="multiple-limit-tags"
                                            options={reportingManagerProject}
                                            onChange={(e, value) => changeProject(value)}
                                            getOptionLabel={(option) => option.label}
                                            renderInput={(params) => (
                                                <TextField {...params} label="Choose project" placeholder="Choose project" />
                                            )}
                                        />

                                    </FormControl>

                                }
                                {["Driver"].includes(AddUser.role?.roleName) && <TextField fullWidth id="outlined-basic" label="License Number" value={AddUser.license_number} onChange={(e) => { setAddUser({ ...AddUser, license_number: e.target.value }) }} variant="outlined" />
                                }
                            </div>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
                    <Button variant="contained" onClick={submitUser} color="warning" sx={{
                        ':focus': {
                            backgroundColor: '#ffd796',
                            color: '#ed6c02'
                        },
                        ':hover': {
                            backgroundColor: '#ffd796',
                            color: '#ed6c02'
                        },

                    }}>Add</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>

                </DialogActions> */}
            </Dialog>
        </div>
    )
}

export default AddUser