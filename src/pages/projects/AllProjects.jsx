import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Grid, Container, Stack, Typography, Box, CardContent, Card, Chip, Icon, IconButton } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import ProjectDialog from '../Components/ProjectDialog';
import { Link } from 'react-router-dom';
import AddProject from './Addproject';

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

export default function AllProjects({ handleClickOpen, handleClose, open }) {
    var userAccess = ['2']

    var userIdCheck = localStorage?.getItem('userId')

    const [value, setValue] = useState(0);
    const [project, setProject] = useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        projectr()
    }, []
    )
    const projectr = async () => {

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
                console.log(JSON.stringify(response.data, 'get All projectrs'));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Page title="Dashboard: Projects">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Projects
                </Typography>

                {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mt: -9 }}>
        <h1>jnjn</h1>
        </Stack> */}
                {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProjectDialog
              
              open={handleClickOpen}
              onClose={handleClose}
            />
          </Stack> */}


                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >



                            <Tabs variant="fullWidth" value={value} onChange={handleChange} indicatorColor="warning"

                                aria-label="basic tabs example">
                                <Tab

                                    sx={{
                                        ':hover': {
                                            bgcolor: '#ffd796', // theme.palette.primary.main
                                            color: '#ed6c02',
                                        },

                                        color: 'black',


                                    }} label="All" {...a11yProps(0)} style={value == 0 ? {
                                        borderBottom: '3px solid #ed6c02',
                                        color: "#ed6c02",
                                    } : null} />
                                <Tab
                                    sx={{
                                        ':hover': {
                                            bgcolor: '#ffd796', // theme.palette.primary.main
                                            color: '#ed6c02',
                                        },

                                        color: 'black',

                                    }} style={value == 1 ? {
                                        borderBottom: '3px solid #ed6c02',
                                        color: "#ed6c02",
                                    } : null} label="Published" {...a11yProps(1)} />
                                <Tab
                                    sx={{
                                        ':hover': {
                                            bgcolor: '#ffd796', // theme.palette.primary.main
                                            color: '#ed6c02',
                                        },


                                        color: 'black',

                                    }} label="Completed" {...a11yProps(2)} style={value == 2 ? {
                                        borderBottom: '3px solid #ed6c02',
                                        color: "#ed6c02",
                                    } : null} />
                            </Tabs>
                        </Box>
                        <Link to="/dashboard/projects/project" state={{ name: "project name" }}
                            style={{ textDecoration: 'none' }}>
                            <TabPanel value={value} index={0}>
                                {/* <Grid xs={4} spacing={5} justify="space-between" direction={'column'} > */}
                                <Card onClick={handleClickOpen}>
                                    <CardContent>
                                        <Typography variant='h6'>SIRASA22281</Typography>
                                        <Grid items direction={'row'} spacing={20}>
                                            <Typography variant='body1'>TUMKUR</Typography>
                                            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" textAlign="flex-end" marginTop={-4}>
                                                <Chip label="Published" size="small" color="success" variant="outlined" />
                                            </Stack>
                                        </Grid>
                                    </CardContent>
                                </Card>

                                {/* </Grid> */}
                            </TabPanel>
                        </Link>

                        <Link to="/dashboard/projects/project" style={{ textDecoration: 'none' }}>
                            <TabPanel value={value} index={1}>
                                <Card >
                                    <CardContent>
                                        {/* <Grid items direction="row" spacing={5}> */}
                                        {/* <IconButton>
            <Iconify icon="material-symbols:playlist-add-check-circle-rounded" />
          </IconButton> */}
                                        <Typography variant='h6'>SIRASA22281</Typography>
                                        <Grid items direction={'row'} spacing={20}>
                                            <Typography variant='body1'>TUMKUR</Typography>
                                            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" textAlign="flex-end" marginTop={-4}>
                                                <Chip label="Published" size="small" color="success" variant="outlined" />
                                            </Stack>
                                        </Grid>
                                        {/* </Grid>      */}
                                    </CardContent>
                                </Card>
                            </TabPanel>
                        </Link>
                        <Link to="/dashboard/projects/project" style={{ textDecoration: 'none' }}>
                            <TabPanel value={value} index={2}>
                                <Card>
                                    <CardContent>
                                        <Typography variant='h6'>CHITRADURGACI1927</Typography>
                                        <Grid items direction={'row'} spacing={20}>
                                            <Typography variant='body1'>Chitraduruga</Typography>
                                            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" textAlign="flex-end" marginTop={-4}>
                                                <Chip label="Completed" size="small" color="success" variant="outlined" />
                                            </Stack>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </TabPanel>
                        </Link>
                    </Box>
                </Stack>
                {userAccess.includes(userIdCheck) &&
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                        <AddProject />
                    </Stack>
                }
            </Container>
        </Page >
    );
}