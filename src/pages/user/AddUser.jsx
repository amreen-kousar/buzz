import React, { useRef, useState } from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, Toolbar, IconButton, Typography, TextField, DialogContent, DialogContentText, Box, DialogActions, FormControl, InputLabel, Select, MenuItem, RadioGroup, Radio, Autocomplete, FormControlLabel, FormGroup, Switch } from '@mui/material'


function AddUser(props) {

    const [open, setOpen] = useState(false);
    const [ceoUser, setCeoUser] = useState(props.data)

    const [AddUser, setAddUser] = useState({
        role: '', name: '', lastName: "", mobilenumber: '', work: '', email: '', address: '', address1: "", address2: "",
        pincode: "", gender: "male", present_status: true, dateOfJoining: '', reportingManager: "", license_number: "", project: ""
    })

    const roles = ['Admin', 'Program Manager', 'Operations Manager', 'Cor', 'Trainer', 'Gelathi Facilitator', 'Driver', 'Funder', 'Partner', 'FIN/HR/VIEWER', 'Senior Operations Manager', 'Gelathi Facilitator Lead']

    const handleClickOpen = () => {
        setOpen(true);
        // getProjects()
    };

    const handleClose = () => {
        console.log(AddUser)
        setOpen(false);
    };

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
        console.log(AddUser)
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
                                        id="demo-simple-select"
                                        value={AddUser.role}
                                        label="Role"
                                        onChange={(e) => setAddUser({ ...AddUser, role: e.target.value })}
                                    >
                                        <MenuItem value="" default disabled>Choose Role </MenuItem>
                                        {roles.map(role => {
                                            return <MenuItem value={role}>{role}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>

                                <TextField fullWidth id="outlined-basic" label="Name" value={AddUser.name} required onChange={(e) => { setAddUser({ ...AddUser, name: e.target.value }) }} variant="outlined" />
                                {

                                    ["Admin", "Program Manager", "Operations Manager", "Gelathi Facilitator Lead", 'FIN/HR/VIEWER', 'Senior Operations Manager'].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" value={AddUser.lastName} onChange={(e) => { setAddUser({ ...AddUser, lastName: e.target.value }) }} />
                                }
                                {!["Funder", "Partner"].includes(AddUser.role) && <FormControl style={{ marginLeft: "1rem" }}>
                                    <RadioGroup
                                        row
                                        onChange={(e, value) => { setAddUser({ ...AddUser, gender: value }) }}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="male"
                                        name="radio-buttons-group"
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
                                {!["Funder", "Partner"].includes(AddUser.role) && <FormControl fullWidth>

                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={ceoUser}
                                        defaultValue={AddUser.reportingManager}
                                        label="reportingManager"
                                        onChange={(event, value) => setAddUser({ ...AddUser, reportingManager: value })}

                                        renderInput={(params) => <TextField {...params} label="ReportingManger" />}
                                    />
                                </FormControl>
                                }
                                {!["Funder", "Partner"].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="Date of joining " type="date" InputLabelProps={{
                                    shrink: true,
                                }} value={AddUser.dateOfJoining} onChange={(e) => { setAddUser({ ...AddUser, dateOfJoining: e.target.value }) }} variant="outlined" />
                                }
                            </div>
                            <br />
                            <h3>Contact Information</h3>
                            <br />
                            <div style={{ background: "white", padding: "2rem", borderRadius: "10px" }}>
                                <TextField fullWidth required id="outlined-basic" label="Mobile number" value={AddUser.mobilenumber} type="number" onChange={(e) => { setAddUser({ ...AddUser, mobilenumber: e.target.value }) }} variant="outlined" />
                                <TextField fullWidth id="outlined-basic" label="Work" value={AddUser.work} onChange={(e) => { setAddUser({ ...AddUser, work: e.target.value }) }} type="number" variant="outlined" />
                                <TextField fullWidth required id="outlined-basic" label="Email" value={AddUser.email} onChange={(e) => { setAddUser({ ...AddUser, email: e.target.value }) }} variant="outlined" />
                                <TextField fullWidth required id="outlined-basic" label="Address" value={AddUser.address} onChange={(e) => { setAddUser({ ...AddUser, address: e.target.value }) }} variant="outlined" />

                                {!["Funder", "Partner"].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="Address 1" value={AddUser.address1} onChange={(e) => { setAddUser({ ...AddUser, address1: e.target.value }) }} variant="outlined" />}
                                {!["Funder", "Partner"].includes(AddUser.role) && < TextField fullWidth id="outlined-basic" label="Address 2" value={AddUser.address2} onChange={(e) => { setAddUser({ ...AddUser, address2: e.target.value }) }} variant="outlined" />}

                                <TextField fullWidth id="outlined-basic" label="Pincode" value={AddUser.pincode} onChange={(e) => { setAddUser({ ...AddUser, pincode: e.target.value }) }} variant="outlined" />
                                {["Trainer", 'Gelathi Facilitator', 'FIN/HR/VIEWER', 'Senior Operations Manager'].includes(AddUser.role) && <FormControl fullWidth>

                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={ceoUser}
                                        defaultValue={AddUser.project}
                                        label="project"
                                        onChange={(e, value) => setAddUser({ ...AddUser, project: value })}
                                        renderInput={(params) => <TextField {...params} label="Choose project" />}
                                    />

                                </FormControl>
                                }
                                {["Driver"].includes(AddUser.role) && <TextField fullWidth id="outlined-basic" label="License Number" value={AddUser.license_number} onChange={(e) => { setAddUser({ ...AddUser, license_number: e.target.value }) }} variant="outlined" />
                                }
                            </div>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
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

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddUser