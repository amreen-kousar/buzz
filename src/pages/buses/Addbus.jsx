import React, { useRef, useState } from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, Toolbar, IconButton, Typography, Stack, TextField, DialogContent, DialogContentText, Box, DialogActions } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment'
function Addbus( {showAddBuss,createProj,showBussHandler}) {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location ,"addbuslocation")

    const [date, setDate] = useState(moment(new Date())?.format('YYYY-MM-DD'))
    const [addBus, setAddBus] = useState({
        register_number: '', register_date: moment(date?.$d)?.format('YYYY-MM-DD'), engine_number: '', chassis_number: '', insurance_number: '',
        insurance_company: "", insurance_start_date: new Date(), insurance_end_date: moment(date?.$d)?.format('YYYY-MM-DD'), last_service_date: moment(date?.$d)?.format('YYYY-MM-DD'), next_service_due_date: moment(date?.$d)?.format('YYYY-MM-DD'), fitness_certificate: moment(date?.$d)?.format('YYYY-MM-DD'), permit: moment(date?.$d)?.format('YYYY-MM-DD'), emission_date:moment(date?.$d)?.format('YYYY-MM-DD')
    })
    const [openAddBus, setOpenAddBus] = useState(false)


    const handleClickOpen = () => {
        setOpenAddBus(true);
    };

    const handleClose = () => {
        console.log(addBus)
        setOpenAddBus(false);
        showBussHandler()
        setAddBus({
            register_number: '', register_date: moment(date?.$d)?.format('YYYY-MM-DD'), engine_number: '', chassis_number: '', insurance_number: '',
            insurance_company: "", insurance_start_date: new Date(), insurance_end_date: moment(date?.$d)?.format('YYYY-MM-DD'), last_service_date: moment(date?.$d)?.format('YYYY-MM-DD'), next_service_due_date: moment(date?.$d)?.format('YYYY-MM-DD'), fitness_certificate: moment(date?.$d)?.format('YYYY-MM-DD'), permit: moment(date?.$d)?.format('YYYY-MM-DD'), emission_date:moment(date?.$d)?.format('YYYY-MM-DD')
        })
    };



    const submitBus = () => {
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var role =JSON.parse(localStorage.getItem('userDetails'))?.role
        var data = JSON.stringify({
            "lastUpdatedBy": userid,
            "createdBy": userid ,
            ...addBus
        });

        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/createBus.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        showBussHandler()


        axios(config)
            .then(function (response) {
                console.log(response.data)
                if (response.data.code == 200) {
                    setOpenAddBus(false)
                    
                    console.log("calling the api ")
                }
            })
            .catch(function (error) {
                console.log(error);
                console.log("calling the api  in failure")
            });
        console.log(addBus)
    }

    return (
        <div>
            {showAddBuss ? 
            <>
          
                <Dialog
                open={createProj}
                fullScreen
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Toolbar sx={{ color: "#ffffff", backgroundColor: "#ff7424" }}>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1, color: "#ffffff" }} variant="h6" component="div" >
                        Add New Bus
                    </Typography>
                </Toolbar>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1 },

                            }}

                        >
                            {/* work here  */}
                            <TextField fullWidth id="outlined-basic" label="Bus Number" helperText="Bus Number required*" defaultValue={addBus.register_number} onChange={(e) => { setAddBus({ ...addBus, register_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            {/* <TextField fullWidth id="outlined-basic" label="Register Date" type="date"  InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.register_date} format={'DD/MM/YYYY'} onChange={(e) => { setAddBus({ ...addBus, register_date: e.target.value }) }} variant="outlined" color="common" /><br />
                              */}
                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="Register_date"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Register Date"
                                        // deefaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, register_date: e })
                                        }}
                                        value={addBus?.register_date}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            <TextField fullWidth id="Engine Number" label="Engine Number" defaultValue={addBus.engine_number} onChange={(e) => { setAddBus({ ...addBus, engine_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            <TextField fullWidth id="Chassis Number" label="Chassis Number" defaultValue={addBus.chassis_number} onChange={(e) => { setAddBus({ ...addBus, chassis_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            <TextField fullWidth id="Insurance Number" label="Insurance Number" defaultValue={addBus.insurance_number} onChange={(e) => { setAddBus({ ...addBus, insurance_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            <TextField fullWidth id="Insurance Company" label="Insurance Company" defaultValue={addBus.insurance_company} onChange={(e) => { setAddBus({ ...addBus, insurance_company: e.target.value }) }} variant="outlined" color="common" /><br />


                            {/* <TextField fullWidth id="outlined-basic" label="Insurance Start Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.insurance_start_date} onChange={(e) => { setAddBus({ ...addBus, insurance_start_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="insurance_start_date"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Insurance Start Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, insurance_start_date: e })
                                        }}
                                        value={addBus?.insurance_start_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>

                            {/* <TextField fullWidth id="outlined-basic" label="Insurance End Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.insurance_end_date} onChange={(e) => { setAddBus({ ...addBus, insurance_end_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="insuarnce_end_date"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Insurance End Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, insurance_end_date: e })
                                        }}
                                        value={addBus?.insurance_end_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" label="Last Service Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.last_service_date} onChange={(e) => { setAddBus({ ...addBus, last_service_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="last_service_date"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Last Service Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, last_service_date: e })
                                        }}
                                        value={addBus?.last_service_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                            {/*                             
                            <TextField fullWidth id="outlined-basic" label="Next Service Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.next_service_due_date} onChange={(e) => { setAddBus({ ...addBus, next_service_due_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="next_service_due_date"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Next Service Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, next_service_due_date: e })
                                        }}
                                        value={addBus?.next_service_due_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" label="Fitness Certificate" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.fitness_certificate} onChange={(e) => { setAddBus({ ...addBus, fitness_certificate: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="fitness_certificate"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Fitness Certificate"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, fitness_certificate: e })
                                        }}
                                        value={addBus?.fitness_certificate}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" type="date" InputLabelProps={{
                                shrink: true,
                            }} label="Permit Details" defaultValue={addBus.permit} onChange={(e) => { setAddBus({ ...addBus, permit: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20,borderColor:'none' }} color="common">
                               
                                    <DatePicker id="permit"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Permit Details"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, permit: e })
                                        }}
                                        value={addBus?.permit}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                       
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" label="Emission Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.emission_date} onChange={(e) => { setAddBus({ ...addBus, emission_date: e.target.value }) }} variant="outlined" color="common" /><br />
                      */}
                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="emission_date"
                                        inputFormat="DD/MM/YYYY"
                                        views={["year", "month", "day"]}
                                        label="Emission Date"
                                        defaultValue="DD/MM/YYYY"
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, emission_date: e })
                                        }}
                                        value={addBus?.emission_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>

                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" id="Add" onClick={submitBus} sx={{
                        '&:hover': {
                            backgroundColor: '#ffd796',
                            color: '#ff7424'
                        },
                        color: "#ffffff",
                        backgroundColor: '#ff7424'
                    }}>Add</Button>
                    <Button id="Cancel" variant="contained" color="error" onClick={handleClose}>Cancel</Button>

                </DialogActions>
            </Dialog>
            </>:
            <Button style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }} id="add"
            sx={{
                '&:hover': {
                    backgroundColor: '#ffd796',

                },
                backgroundColor: "#ffd796"
            }} variant="contained" onClick={handleClickOpen}>
            <span style={{ fontSize: "2rem", color: "#ff7424" }}>+</span></Button>
            }
            
            <Dialog
                open={openAddBus}
                fullScreen
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Toolbar id="add-bus-toolbar" sx={{ color: "#ffffff", backgroundColor: "#ff7424" }}>
                    <IconButton id="start-icon-button" edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography id="add-new-bus" sx={{ ml: 2, flex: 1, color: "#ffffff" }} variant="h6" component="div" >
                        Add New Bus
                    </Typography>
                </Toolbar>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <Box id="form"
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1 },

                            }}

                        >
                            {/* work here  */}
                            <TextField fullWidth id="Bus Number" label="Bus Number" helperText="Bus Number required*" defaultValue={addBus.register_number} onChange={(e) => { setAddBus({ ...addBus, register_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            {/* <TextField fullWidth id="outlined-basic" label="Register Date" type="date"  InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.register_date} format={'DD/MM/YYYY'} onChange={(e) => { setAddBus({ ...addBus, register_date: e.target.value }) }} variant="outlined" color="common" /><br />
                              */}
                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="register-date"
                                        inputFormat="YYYY/MM/DD"
                                        views={["year", "month", "day"]}
                                        label="Register Date"
                                        // deefaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, register_date: e })
                                        }}
                                        value={addBus?.register_date}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            <TextField fullWidth id="engine-number" label="Engine Number" defaultValue={addBus.engine_number} onChange={(e) => { setAddBus({ ...addBus, engine_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            <TextField fullWidth id="chassis-number" label="Chassis Number" defaultValue={addBus.chassis_number} onChange={(e) => { setAddBus({ ...addBus, chassis_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            <TextField fullWidth id="insurance-number" label="Insurance Number" defaultValue={addBus.insurance_number} onChange={(e) => { setAddBus({ ...addBus, insurance_number: e.target.value }) }} variant="outlined" color="common" /><br />
                            <TextField fullWidth id="insurance-company" label="Insurance Company" defaultValue={addBus.insurance_company} onChange={(e) => { setAddBus({ ...addBus, insurance_company: e.target.value }) }} variant="outlined" color="common" /><br />


                            {/* <TextField fullWidth id="outlined-basic" label="Insurance Start Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.insurance_start_date} onChange={(e) => { setAddBus({ ...addBus, insurance_start_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id ="insurance-start"
                                        inputFormat="YYYY/MM/DD"
                                        views={["year", "month", "day"]}
                                        label="Insurance Start Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, insurance_start_date: e })
                                        }}
                                        value={addBus?.insurance_start_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>

                            {/* <TextField fullWidth id="outlined-basic" label="Insurance End Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.insurance_end_date} onChange={(e) => { setAddBus({ ...addBus, insurance_end_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="insurance-end"
                                        inputFormat="YYYY/MM/DD"
                                        views={["year", "month", "day"]}
                                        label="Insurance End Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, insurance_end_date: e })
                                        }}
                                        value={addBus?.insurance_end_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" label="Last Service Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.last_service_date} onChange={(e) => { setAddBus({ ...addBus, last_service_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="last-service"
                                        inputFormat="YYYY/MM/DD"
                                        views={["year", "month", "day"]}
                                        label="Last Service Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, last_service_date: e })
                                        }}
                                        value={addBus?.last_service_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                            {/*                             
                            <TextField fullWidth id="outlined-basic" label="Next Service Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.next_service_due_date} onChange={(e) => { setAddBus({ ...addBus, next_service_due_date: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="next-service"
                                        inputFormat="YYYY/MM/DD"
                                        views={["year", "month", "day"]}
                                        label="Next Service Date"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, next_service_due_date: e })
                                        }}
                                        value={addBus?.next_service_due_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" label="Fitness Certificate" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.fitness_certificate} onChange={(e) => { setAddBus({ ...addBus, fitness_certificate: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="fitness-certificate"
                                        inputFormat="YYYY/MM/DD"
                                        views={["year", "month", "day"]}
                                        label="Fitness Certificate"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, fitness_certificate: e })
                                        }}
                                        value={addBus?.fitness_certificate}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" type="date" InputLabelProps={{
                                shrink: true,
                            }} label="Permit Details" defaultValue={addBus.permit} onChange={(e) => { setAddBus({ ...addBus, permit: e.target.value }) }} variant="outlined" color="common" /><br /> */}

                            <Stack style={{ marginTop: 20,borderColor:'none' }} color="common">
                               
                                    <DatePicker id="permit-details"
                                        inputFormat="YYYY-MM-DD"
                                        views={["year", "month", "day"]}
                                        label="Permit Details"
                                        // defaultValue={date}
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, permit: e })
                                        }}
                                        value={addBus?.permit}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                       
                            </Stack>


                            {/* <TextField fullWidth id="outlined-basic" label="Emission Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} defaultValue={addBus.emission_date} onChange={(e) => { setAddBus({ ...addBus, emission_date: e.target.value }) }} variant="outlined" color="common" /><br />
                      */}
                            <Stack style={{ marginTop: 20 }} color="common">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker id="emission-date"
                                        inputFormat="YYYY/MM/DD"
                                        views={["year", "month", "day"]}
                                        label="Emission Date"
                                        defaultValue="DD/MM/YYYY"
                                        onChange={(e) => {
                                            setAddBus({ ...addBus, emission_date: e })
                                        }}
                                        value={addBus?.emission_date}

                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>

                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="add-button" variant="contained" onClick={submitBus} sx={{
                        '&:hover': {
                            backgroundColor: '#ffd796',
                            color: '#ff7424'
                        },
                        color: "#ffffff",
                        backgroundColor: '#ff7424'
                    }}>Add</Button>
                    <Button variant="contained" id="cancelbutton" color="error" onClick={handleClose}>Cancel</Button>

                </DialogActions>
            </Dialog>

        </div>

    )
}

export default Addbus