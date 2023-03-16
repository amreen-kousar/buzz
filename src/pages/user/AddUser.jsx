import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, Toolbar, IconButton, Typography, TextField, DialogContent, DialogContentText, Box, DialogActions, FormControl, InputLabel, Select, MenuItem, RadioGroup, Radio, Autocomplete, FormControlLabel, FormGroup, Switch, CardContent } from '@mui/material'
import Iconify from '../../components/Iconify';
import AppBar from '@mui/material/AppBar';
function AddUser(props) {
  
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState('');
    // const [ceoUser, setCeoUser] = useState(props.data)

    let isValidForm = true;

    let [inputProject, setInputProject] = useState([''])

    let [filteredProjects, setFilteredProjects] = useState([])


    let [errors, setErrors] = useState({ office_email_id: false })

    let [emailExists, setEmailExists] = useState(false)

    var [AddUser, setAddUser] = useState({
        role: { id: '0', roleName: 'Admin' }, first_name: '', last_name: "", contactNum: '', workNum: '', office_email_id: '', address: '', address3: "", address2: "",
        pincode: "", gender: "", present_status: true, doj: new Date(), reportingManager: "", license_number: "", project: "",
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
        setReportingManager([...temprepoManager])
        console.log(temprepoManager, '<---------------temprepoManagertemprepoManager')

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

let userid = JSON.parse(localStorage.getItem('userDetails'))?.id
console.log(userid,"userrrrrridddddddd")
    const submitUser = () => {
        AddUser.project = inputProject.map(i => parseInt(i.id))
        AddUser.officeMailId = AddUser.office_email_id
        AddUser.empRole = AddUser.role.id
        AddUser.supervisorId = AddUser.reportingManager.id
        AddUser.profile_pic = ''
        AddUser.status = AddUser.present_status ? '1' : '0';
        AddUser.createdBy = userid,
            AddUser.lastUpdatedBy = userid
        console.log(AddUser)
        const data = JSON.stringify(AddUser);

        const config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/createUser.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        let apiCallName = (AddUser.role.roleName == "Funder") ? 'createFunder' : (AddUser.role.roleName == "Partner") ? 'createPartner' : false;



        axios(config)
            .then((response) => {
                console.log(response)
                if (response?.data?.success) {
                    let funderPartnerData = {}
                    if (apiCallName) {
                        (apiCallName == "Funder") ?
                            funderPartnerData = {
                                "countryID": 1,
                                "partnername": AddUser.first_name,
                                "workPhone": AddUser.workNum,
                                "mobilePhone": AddUser.contactNum,
                                "emailID": AddUser.office_email_id,
                                "address": AddUser.address,
                                "status": AddUser.present_status ? '1' : '0',
                                "city": "banglore",
                                "state": "Karnataka",
                                "pincode": AddUser.pincode,
                                "designation": "Funder",
                                "createdBy": userid,
                                "lastUpdatedBy": userid

                            } : funderPartnerData = {
                                "countryID": 1,
                                "partnername": AddUser.first_name,
                                "workPhone": AddUser.workNum,
                                "mobilePhone": AddUser.contactNum,
                                "emailID": AddUser.office_email_id,
                                "address": AddUser.address,
                                "status": AddUser.present_status ? '1' : '0',
                                "city": "banglore",
                                "state": "Karnataka",
                                "pincode": AddUser.pincode,
                                "designation": "Partner",
                                "createdBy": userid,
                                "lastUpdatedBy": userid
                            }
                        const partnerFunderConfig = {
                            method: 'post',
                            url: `https://bdms.buzzwomen.org/appTest/${apiCallName}.php`,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            funderPartnerData
                        }
                        axios(partnerFunderConfig)
                            .then((responseIn) => {
                                console.log(responseIn)
                                setOpen(false)
                                props.viewMessage('User Added successfully');
                            })
                            .catch((error2) => {
                                console.log("error")
                            })

                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });

        console.log("Add User", AddUser)
        handleClose()
        // https://bdms.buzzwomen.org/appTest/createUser.php
    }
    let numrex=/^\d+$/
    return (

        <div>
            <Button style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }} variant="contained" onClick={handleClickOpen} sx={{
                ':focus': {
                    backgroundColor: '#ffd796',
                    color: '#ff7424'
                },
                '&:hover': {
                    backgroundColor: '#ffd796',
                    color: '#ff7424'
                }, backgroundColor: '#ffd796',
                color: '#ff7424'
            }}><span style={{ fontSize: "2rem" }}>+</span></Button>
            <Dialog
                open={open}
                fullScreen
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"

            >

                <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
                            Add Users
                        </Typography>
                        <Button autoFocus color="inherit" onClick={submitUser}>
                            save
                        </Button>
                    </Toolbar>

                </AppBar>
                {/* <Toolbar sx={{ position: 'relative', bgcolor: '#ff7424' }} >
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" color="inherit" component="div" >
                        Add User
                    </Typography>
                    <Button autoFocus color="inherit" onClick={submitUser}>
                        save
                    </Button>
                </Toolbar> */}
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

                                <FormControl fullWidth style={{ marginLeft: '0.5rem', marginBottom: "0.5rem", color: '#ff7424' }}>
                                    <InputLabel id="demo-simple-select-label" fullWidth color="common" style={{ color: '#ff7424' }}>{AddUser.role.id>1?"Role":"Choose Role"} </InputLabel>

                                    <Select fullWidth color="common" variant='standard'
                                        labelId="demo-simple-select-label"
                                        id="role"
                                        // defaultValue={AddUser.role}
                                        // label="Role"
                                        onChange={(e) => { getEmpId(e.target.value) }}
                                    >
                                        {roles.map(role => {
                                            return <MenuItem value={role ?? ''}>{role?.roleName}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>

                                <TextField fullWidth id="outlined-basic" helperText='Name required*' label="Name" value={AddUser.first_name} required onChange={(e) => { setAddUser({ ...AddUser, first_name: e.target.value }) }} variant="outlined" color="common" />
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
                                        <FormControlLabel value="female" control={<Radio />} label="Female" color='#ff7424'/>
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />

                                    </RadioGroup>
                                </FormControl>}
                                {/* <FormGroup style={{ float: "right" }}>
                                    <FormControlLabel label="Status" labelPlacement="start"
                                        control={<Switch defaultValue={AddUser.present_status} onClick={(e, value) => { setAddUser({ ...AddUser, present_status: !AddUser.present_status }); console.log(!AddUser.present_status) }} defaultChecked />} />
                                </FormGroup> */}
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
                                {/* {!["Funder", "Partner"].includes(AddUser.role?.roleName) && <TextField fullWidth id="outlined-basic" label="Date of joining " type="date" InputLabelProps={{
                                    shrink: true,
                                }} value={AddUser.doj} onChange={(e) => { setAddUser({ ...AddUser, doj: e.target.value }) }} variant="outlined" />
                                } */}
                            </div>
                                <CardContent>
                                <h3>Contact Information</h3>
                                </CardContent>
                          

                            <div style={{ background: "white", padding: "2rem", borderRadius: "10px" }}>

                                <TextField fullWidth required id="outlined-basic" label="Mobile number" helperText={`Mobile Number Required (${AddUser?.contactNum?.length}/10)`} inputProps={{ maxLength: 10 }} multiline value={AddUser.contactNum} type="number" onChange={(e) => { 
                                    if(numrex.test(e?.target?.value)){
                                        setAddUser({ ...AddUser, contactNum: e.target.value })
                                    }
                                    console.log(e,"<---wefewfwef")
                                    }} variant="outlined" color="common" />
                                <TextField fullWidth id="outlined-basic" label="Work" value={AddUser.workNum} onChange={(e) => {
                                     setAddUser({ ...AddUser, workNum: e.target.value }) }} type="number" variant="outlined" color='common' />

                                <TextField fullWidth required id="outlined-basic" label="Email" helperText='Email required*' value={AddUser.office_email_id} onChange={(e) => { setAddUser({ ...AddUser, office_email_id: e.target.value }); checkEmailValidation() }} onPaste={(e) => { setAddUser({ ...AddUser, office_email_id: e.target.value }); checkEmailValidation() }} variant="outlined" color="common" />

                                <div style={{ marginLeft: "1rem", fontSize: "0.8rem", fontWeight: "700" }}>
                                    {emailExists ? <span style={{ color: "crimson", display: "flex" }}><Iconify icon="gridicons:cross-circle" width={20} height={20} /> &nbsp; Email Id already exists !</span> : (errors.office_email_id) ? <span style={{ color: "crimson", display: "flex" }}><Iconify icon="gridicons:cross-circle" width={20} height={20} /> &nbsp;Invalid Email Id</span> : (AddUser.office_email_id != "") ? <span style={{ color: "green", display: "flex" }}><Iconify icon="mdi:tick-circle" width={20} height={20} /> &nbsp;Valid Email Id</span> : null}
                                </div>


                                <TextField fullWidth required id="outlined-basic" label="Address" helperText='Address Required*' value={AddUser.address} onChange={(e) => { setAddUser({ ...AddUser, address: e.target.value }) }} variant="outlined" color="common"/>

                                {!["Funder", "Partner"].includes(AddUser.role?.roleName) && <TextField fullWidth id="outlined-basic" label="Address 1" value={AddUser.address3} onChange={(e) => { setAddUser({ ...AddUser, address3: e.target.value }) }} variant="outlined" color="common"/>}
                                {!["Funder", "Partner"].includes(AddUser.role?.roleName) && < TextField fullWidth id="outlined-basic" label="Address 2" value={AddUser.address2} onChange={(e) => { setAddUser({ ...AddUser, address2: e.target.value }) }} variant="outlined" color="common"/>}

                                <TextField fullWidth id="outlined-basic" type="number" label="Pincode" value={AddUser.pincode} onChange={(e) => { setAddUser({ ...AddUser, pincode: e.target.value }) }} variant="outlined" color="common"/>
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
                                                <TextField {...params} label="Choose project" placeholder="Choose project" color="common"/>
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
                            color: '#ff7424'
                        },
                        ':hover': {
                            backgroundColor: '#ffd796',
                            color: '#ff7424'
                        },

                    }}>Add</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>

                </DialogActions> */}
            </Dialog>
        </div>
    )
}

export default AddUser