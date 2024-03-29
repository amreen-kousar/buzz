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
import Edittraveldialog from './Editta';
import Iconify from 'src/components/Iconify';
// components
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Own(props) {

    const [value, setValue] = React.useState(0);
    const data = localStorage?.getItem('userId')
    var [dateValue, setDatevalue] = useState(new Date().toISOString().split('T')[0])
    const image = ["tykml", "exrdcftvbgyhnuj"]
    const [drawerEvent, SetDrawerEvent] = useState(false);
    //const [image, setImage] = React.useState(['data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==', 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==']);
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
    const [season, setSeason] = useState(0)



    useEffect(() => {
        setFilterData(props.returnDateValue)
        list()
    }, [props.returnDateValue,season]
    )



    const handleOpenFilter = (itm) => {
        // itm.klmtr = +klmtr;
        setEditData(itm)
        console.log(editData)
        if(itm?.status=='0')
        {
            setOpenFilter(true)
        }
        else
        {
            setOpenFilter(false)
            if(itm?.status=='1'){
                alert("already approved")
            }
            if(itm?.status=='4'){
                alert("already Verified")
            }

        }
  
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const handleDeleteTA = (itm) => {
        var data = JSON.stringify({
            ta_id: itm?.id
        });
        console.log(data)
        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/new/deleteTa.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setMessage("Travel Allowance Deleted Successfully")
                setOpenMessage(true)
                list()

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const list = async () => {

        if (filterData) { dateValue = filterData }
        const userDetails = localStorage?.getItem("userDetails")
       
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var data = JSON.stringify({
            "emp_id": userid,
            "date": dateValue,
             "for":season,
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
        console.log(data, "travel requestttttttttttttttttttttttttttttt")
        axios(config)
            .then(function (response) {

                setListData(response.data)
                console.log(response.data, '<--------travel alliance eeeeeeeeeeeeeeee');
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSeason(newValue);
    };


    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    return (
        <div>
            <Snackbar id="open-message" open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
                <Alert id="success-message-alert" onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            {listdata?.data?.length > 0 ? <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <Box sx={{ width: '100%' }}>
                    {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor='warning'>
                            <Tab
                                sx={{
                                    ':hover': {
                                        bgcolor: '#ffd796', // theme.palette.primary.main
                                        color: '#ff7424',
                                    },

                                    color: 'black',
                                }} label="Today" {...a11yProps(0)} style={value == 0 ? {
                                    borderBottom: '3px solid #ff7424',
                                    color: "#ff7424",
                                } : null} />
                            <Tab sx={{
                                ':hover': {
                                    bgcolor: '#ffd796', // theme.palette.primary.main
                                    color: '#ff7424',
                                },

                                color: 'black',
                            }}
                                label="Week" {...a11yProps(1)} style={value == 1 ? {
                                    borderBottom: '3px solid #ff7424',
                                    color: "#ff7424",
                                } : null} />
                            <Tab sx={{
                                ':hover': {
                                    bgcolor: '#ffd796', // theme.palette.primary.main
                                    color: '#ff7424',
                                },

                                color: 'black',
                            }}
                                label="Month" style={value == 2 ? {
                                    borderBottom: '3px solid #ff7424',
                                    color: "#ff7424",
                                } : null} {...a11yProps(2)} />
                        </Tabs>
                    </Box> */}
                    <TabPanel value={value} index={0}>

                    {listdata?.data?.map((itm) => {
                            return (
                                <>
                                    <Card id="own-main-card" style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: "1rem" }} >

                                    <Grid id="own-grid" container spacing={2}>
  <Grid id="open-filter" onClick={() => { handleOpenFilter(itm) }} item xs={12} sm={8} md={8}>
    <b cursor="pointer" style={{ color: "blue" }}>{itm?.Ta_Name}</b><br></br>
    <Typography id="TA-amount" variant="body" gutterBottom><b>TA Amount:{itm?.telephone}</b></Typography>
  </Grid>
  <Grid item xs={12} sm={4} md={4}>
    {(itm?.status == '0') ? (
      <>
        <Iconify id="icon-cross" onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", padding: 2, marginTop: 5, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
        <Iconify id="icon-access-time" style={{ float: "right", padding: 2, fontSize: 30, marginTop: 5, color: "#303030" }} icon="ic:outline-access-time"></Iconify>
      </>
    ) : (
      (itm?.status == '1') ? (
        <Iconify icon="mdi:tick" style={{ float: "right", padding: 2, marginTop: 5, fontSize: 30, color: "green" }}></Iconify>
      ) : (
        <Iconify id="icon-cross" onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", marginTop: 30, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
      )
    )}
  </Grid>
</Grid>


                                    </Card>
                                </>
                            )
                        })}

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    {listdata?.data?.map((itm) => {
                            return (
                                <>
                                    <Card id="card-own-ta-amount" style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: "1rem" }} >

                                        <Grid id="grid-own-ta-amount" container spacing={2} >
                                            <Grid id="grid-own-open-filter" onClick={() => { handleOpenFilter(itm) }} item xs={8}>
                                                <b cursor="pointer" style={{ color: "blue" }} >{itm?.Ta_Name}</b><br>
                                                </br>
                                                <Typography id="typography-ta-amount" variant="body" gutterBottom > <b>TA Amount:{itm?.telephone}</b></Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Iconify id="uiicons-cross" onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
                                                <Iconify id="icon-outline-access-time" style={{ float: "right", marginTop: 5, marginRight: 30, fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify>
                                            </Grid>


                                        </Grid>


                                    </Card>
                                </>
                            )
                        })}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {listdata?.data?.map((itm) => {
                            return (
                                <>
                                    <Card id="third-card-own" style={{ margin: "20px", borderRadius: "5px", backgroundColor: "#f7f7f7", cursor: "pointer", padding: "1rem" }} >

                                        <Grid id="grid-own" container spacing={2} >
                                            <Grid id="own-open-filter" onClick={() => { handleOpenFilter(itm) }} item xs={8}>
                                                <b cursor="pointer" style={{ color: "blue" }} >{itm?.Ta_Name}</b><br>
                                                </br>
                                                <Typography id="own-ta-amount" variant="body" gutterBottom > <b>TA Amount:{itm?.telephone}</b></Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Iconify id="icon-delete" onClick={() => { handleDeleteTA(itm) }} style={{ float: "right", marginTop: 5, marginRight: 10, fontSize: 30, color: "gray" }} icon="system-uicons:cross"></Iconify>
                                                <Iconify id="uiicon-access-time" style={{ float: "right", marginTop: 5, marginRight: 30, fontSize: 30, color: "#303030" }} icon="ic:outline-access-time"></Iconify>
                                            </Grid>


                                        </Grid>


                                    </Card>
                                </>
                            )
                        })}
                    </TabPanel >
                </Box >
            </Stack > : <h1 id="No-data-found" style={{ fontWeight: 900, textAlign: 'center' }}><br />No data found</h1>}


            {editData && <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <Edittraveldialog
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    editData={editData}
                    onCloseFilter={handleCloseFilter} viewMessage={(text) => {
                        setMessage(text)
                        setOpenMessage(true)
                    }}
                    list={list}
                />

            </Stack>}
        </div>
    );
}