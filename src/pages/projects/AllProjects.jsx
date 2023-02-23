import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Grid, Container, Stack, Typography, Box, CardContent, Card, Chip, Icon, IconButton, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Pagination from '@mui/material/Pagination';
import Tab from '@mui/material/Tab';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import ProjectDialog from '../Components/ProjectDialog';
import { Link } from 'react-router-dom';
import ProjectFilter from '../Components/Projectfilters/ProjectFilters';
import AddProject from './Addproject';
import FiltersHome from '../Filters/FiltersHome';
import Searchbar from 'src/layouts/dashboard/Searchbar';
// components
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    //   const resetBus = () => {
    //     setSelected([])
    //     setSearch([])
    //     projectr()
    //   }
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

    const callOpenFunction = (id) => {
        sessionStorage.setItem("proId", id)
        handleClickOpen()
    }

    var userIdCheck = localStorage?.getItem('userId')
    var [page, setPage] = useState(1)
    const [value, setValue] = useState(0);
    const [projects, setProjects] = useState([])
    const [publishedProject, setPublishedProject] = useState([])
    const [completedProject, setCompletedProject] = useState([])
    const [openFilter, setOpenFilter] = useState(false);
    var [search, setSearch] = useState('')
    var [selected, setSelected] = useState(null)
    const [count, setCount] = useState('')

    const [countCompleted, setCountCompleted] = useState('')

    const [countPublished, setCountPublished] = useState('')

    const pageChange = (event, newPage) => {
        page = newPage
        setPage(page);
        projectr()
    }


    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        projectr()
    }, []
    )

    const projectr = async (i, id, g) => {
        console.log(i, id, g)


        const data = JSON.stringify({

            end_date: g === "date" ? i : null,
            start_date: g === "date" ? id : null,
            "search": search,
            "id": 650,
            "role_id": userIdCheck,
            "filter_id": 0,
            "type": "",
            "pageNum": page,
            count: count,
            taluk_id: g === "country" ? id : null,
            district_id: g === "country" ? i : null,
            "funder_id": id === 2 ? i?.id : null,
            opsManager: g ? "" : id === 4 ? i?.id : null,
            partner_id: g ? "" : id === 1 ? i?.id : null,
            trainerId: g ? "" : id === 5 ? i?.id : null,
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
                setCount(response.data.count % 25 == 0 ? parseInt(response.data.count / 25) : parseInt(response.data.count / 25) + 1)
                setProjects(response.data.list)
                let published = response.data.list.filter(r => r.project_status_name == 'Published')
                setCountPublished(published?.length % 25 == 0 ? parseInt(published?.length / 25) : parseInt(published?.length / 25) + 1)

                setPublishedProject(published)
                let completed = response.data.list.filter(r => r.project_status_name == 'Completed')

                setCountCompleted(completed?.length % 25 == 0 ? parseInt(completed?.length / 25) : parseInt(completed?.length / 25) + 1)

                setCompletedProject(completed)
                // console.log(response, "projects responseeeeeeeeeeeeee", projects)
                // console.log(JSON.stringify(response.data, 'get All projectrs'));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getData = (itm, i) => {
        console.log(itm, i, "get Data in projects List")
        setOpenFilter(false);
        console.log(selected, "Selected ")
        setSelected(itm)
        projectr(itm, i)
    }

    const onSumbit = (e, i) => {
        setSelected({ type: 'Location', name: ` ${e?.stateName} - ${e?.districtName} - ${e?.talukName}` })
        handleCloseFilter()
        projectr(e?.district_id, e?.talaq_id, "country")
    }

    const onDateSubmit = (e) => {
        setSelected({ type: 'Date Range', name: `${e?.startDate} - ${e?.endDate}` })
        projectr(e?.startDate, e?.endDate, "date")
        setOpenFilter(false);
    }


    const searchFunction = (e) => {
        page = 1
        setPage(page)
        console.log(page, "page set toooo 11")
        search = e
        setSearch(search)
        setSelected({ name: e, type: "Search" })
        projectr()
    }

    const resetProjects = () => {
        setSelected(null)
        setSearch('')
        projectr()
    }

    const handleDelete = () => {
        setSelected(null)
        search = ''
        setSearch(search)
        page = 1
        setPage(page)
        projectr();
    }


    return (
        <Page title="Dashboard: Projects">
            <Searchbar getSearch={(e) => searchFunction(e)} />
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    All Projects    <Button style={{ float: "right", color: '#ff7424' }}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#ffd796',
                            },
                        }}
                        onClick={() => {
                            handleOpenFilter()
                        }}
                    >
                        Filter
                    </Button>
                </Typography>


                {
                    selected && <Chip label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} />
                }

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
                    <FiltersHome
                        type="Projects"
                        onSumbit={onSumbit}
                        onDateSubmit={onDateSubmit}
                        resetProjects={resetProjects}
                        getData={getData}
                        isOpenFilter={openFilter}
                        projectr={projectr}
                        onOpenFilter={handleOpenFilter}
                        onCloseFilter={handleCloseFilter}
                    />
                </Stack>


                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >



                            <Tabs variant="fullWidth" value={value} onChange={handleChange} indicatorColor="warning"

                                aria-label="basic tabs example">
                                <Tab

                                    sx={{
                                        ':hover': {
                                            bgcolor: '#ffd796', // theme.palette.primary.main
                                            color: '#ff7424',
                                        },

                                        color: 'black',


                                    }} label="All" {...a11yProps(0)} style={value == 0 ? {
                                        borderBottom: '3px solid #ff7424',
                                        color: "#ff7424",
                                    } : null} />
                                <Tab
                                    sx={{
                                        ':hover': {
                                            bgcolor: '#ffd796', // theme.palette.primary.main
                                            color: '#ff7424',
                                        },

                                        color: 'black',

                                    }} style={value == 1 ? {
                                        borderBottom: '3px solid #ff7424',
                                        color: "#ff7424",
                                    } : null} label="Published" {...a11yProps(1)} />
                                <Tab
                                    sx={{
                                        ':hover': {
                                            bgcolor: '#ffd796', // theme.palette.primary.main
                                            color: '#ff7424',
                                        },


                                        color: 'black',

                                    }} label="Completed" {...a11yProps(2)} style={value == 2 ? {
                                        borderBottom: '3px solid #ff7424',
                                        color: "#ff7424",
                                    } : null} />
                            </Tabs>
                        </Box>



                        <TabPanel value={value} index={0}>
                            {
                                projects.length > 0 ? <>
                                    {projects.map(p => <Link to="/dashboard/projects/project"
                                        style={{ textDecoration: 'none' }}>
                                        <Card onClick={() => { callOpenFunction(p.id) }}>
                                            <CardContent>
                                                <Typography variant='h6'>{p?.name}</Typography>
                                                <Grid items direction={'row'} spacing={20}>
                                                    <Typography variant='body1'>{p?.location_name}</Typography>
                                                    <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" textAlign="flex-end" marginTop={-4}>
                                                        <Chip label={p?.project_status_name} size="small" color="success" variant="outlined" />
                                                    </Stack>
                                                </Grid>
                                            </CardContent>
                                        </Card><br />
                                    </Link>)}
                                    {
                                        <Pagination page={page} onChange={pageChange} rowsPerPage={25} count={count} variant="outlined" color="warning" sx={{ color: "#ffd796" }} style={{ float: "right" }} />
                                    }</> :
                                    <h2 style={{ textAlign: "center", color: "black" }}><br />No data found</h2>
                            }
                        </TabPanel>



                        <TabPanel value={value} index={1}>
                            {
                                publishedProject.length > 0 ? <>
                                    {publishedProject.map(p => <Link to="/dashboard/projects/project" style={{ textDecoration: 'none' }}>
                                        <Card onClick={() => { callOpenFunction(p.id) }}>
                                            <CardContent>
                                                <Typography variant='h6'>{p?.name}</Typography>
                                                <Grid items direction={'row'} spacing={20}>
                                                    <Typography variant='body1'>{p?.location_name}</Typography>
                                                    <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" textAlign="flex-end" marginTop={-4}>
                                                        <Chip label={p?.project_status_name} size="small" color="success" variant="outlined" />
                                                    </Stack>
                                                </Grid>
                                            </CardContent>
                                        </Card><br />
                                    </Link>)}
                                    {
                                        <Pagination page={page} onChange={pageChange} rowsPerPage={25} count={countPublished} variant="outlined" color="warning" sx={{ color: "#ffd796" }} style={{ float: "right" }} />
                                    }</> :
                                    <h2 style={{ textAlign: "center", color: "black" }}><br />No data found</h2>
                            }
                        </TabPanel>




                        <TabPanel value={value} index={2}>
                            {
                                completedProject.length > 0 ? <>
                                    {completedProject.map(p => <Link to="/dashboard/projects/project" style={{ textDecoration: 'none' }} >
                                        <Card onClick={() => { callOpenFunction(p.id) }}>
                                            <CardContent>
                                                <Typography variant='h6'>{p?.name}</Typography>
                                                <Grid items direction={'row'} spacing={20}>
                                                    <Typography variant='body1'>{p?.location_name}</Typography>
                                                    <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" textAlign="flex-end" marginTop={-4}>
                                                        <Chip label={p?.project_status_name} size="small" color="success" variant="outlined" />
                                                    </Stack>
                                                </Grid>
                                            </CardContent>
                                        </Card><br />
                                    </Link>)}
                                    {
                                        <Pagination page={page} onChange={pageChange} rowsPerPage={25} count={countCompleted} variant="outlined" color="warning" sx={{ color: "#ffd796" }} style={{ float: "right" }} />
                                    }
                                </> :
                                    <h2 style={{ textAlign: "center", color: "black" }}><br />No data found</h2>

                            }
                        </TabPanel>
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