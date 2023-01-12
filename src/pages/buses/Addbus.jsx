import React, { useRef, useState } from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, Toolbar, IconButton, Typography, TextField, DialogContent, DialogContentText, Box, DialogActions } from '@mui/material'

function Addbus() {


    const [addBus, setAddBus] = useState({
        register_number: '', register_date: '', engine_number: '', chassis_number: '', insurance_number: '',
        insurance_company: "", insurance_start_date: "", insurance_end_date: "", last_service_date: "", next_service_due_date: "", fitness_certificate: "", permit: "", emission_date: ''
    })
    const [openAddBus, setOpenAddBus] = useState(false)


    const handleClickOpen = () => {
        setOpenAddBus(true);
    };

    const handleClose = () => {
        console.log(addBus)
        setOpenAddBus(false);
    };



    const submitBus = () => {
        var data = JSON.stringify({
            "lastUpdatedBy": "144",
            "createdBy": "144",
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

        axios(config)
            .then(function (response) {
                console.log(response.data)
                if (response.data.code == 200) {
                    setOpenAddBus(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(addBus)
    }

    return (
        <div>
            <Button style={{ float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem", position: 'fixed', zIndex: '1', bottom: 40, right: 40 }}
                sx={{
                    '&:hover': {
                        backgroundColor: '#ffd796',

                    },
                    backgroundColor: "#ffd796"
                }} variant="contained" onClick={handleClickOpen}>
                <span style={{ fontSize: "2rem", color: "#ed6c02" }}>+</span></Button>
            <Dialog
                open={openAddBus}
                fullScreen
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Toolbar sx={{ color: "#ffffff", backgroundColor: "#ed6c02" }}>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1, color: "#ffffff" }} variant="h6" component="div" >
                        Add Bus
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
                            <TextField fullWidth id="outlined-basic" label="Register Number" value={addBus.register_number} onChange={(e) => { setAddBus({ ...addBus, register_number: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Register Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} value={addBus.register_date} onChange={(e) => { setAddBus({ ...addBus, register_date: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Engine Number" value={addBus.engine_number} onChange={(e) => { setAddBus({ ...addBus, engine_number: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Chassis Number" value={addBus.chassis_number} onChange={(e) => { setAddBus({ ...addBus, chassis_number: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Insurance Number" value={addBus.insurance_number} onChange={(e) => { setAddBus({ ...addBus, insurance_number: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Insurance Company" value={addBus.insurance_company} onChange={(e) => { setAddBus({ ...addBus, insurance_company: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Insurance Start Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} value={addBus.insurance_start_date} onChange={(e) => { setAddBus({ ...addBus, insurance_start_date: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Insurance End Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} value={addBus.insurance_end_date} onChange={(e) => { setAddBus({ ...addBus, insurance_end_date: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Last Service Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} value={addBus.last_service_date} onChange={(e) => { setAddBus({ ...addBus, last_service_date: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Next Service Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} value={addBus.next_service_due_date} onChange={(e) => { setAddBus({ ...addBus, next_service_due_date: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Fitness Certificate" value={addBus.fitness_certificate} onChange={(e) => { setAddBus({ ...addBus, fitness_certificate: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Permit Details" value={addBus.permit} onChange={(e) => { setAddBus({ ...addBus, permit: e.target.value }) }} variant="outlined" /><br />
                            <TextField fullWidth id="outlined-basic" label="Emission Date" type="date" InputLabelProps={{
                                shrink: true,
                            }} value={addBus.emission_date} onChange={(e) => { setAddBus({ ...addBus, emission_date: e.target.value }) }} variant="outlined" /><br />
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={submitBus}>Add</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>

                </DialogActions>
            </Dialog>

        </div>

    )
}

export default Addbus