import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip,CardContent, Container, Typography, Grid, IconButton, } from '@mui/material';
import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import Searchbar from 'src/layouts/dashboard/Searchbar';
import Villagevisitdrawer from './Components/schedulevillagevisitdrawer';

export default function scheduleVillage() {
    const {state} = useLocation()
    console.log("stateeeeeee",state)
    const [data1, setData1] = useState('')
    var [search, setSearch] = useState('')
    var [selected, setSelected] = useState(null)
    const [clcikData, setClickData] = useState()
    const [villageData, setVillageData] = useState('');

    const searchFunction = (e) => {
        search = e
        setSearch(search)
        setSelected({ name: e, type: "Search" })
        scheduleVillage()
    }
    useEffect(() => {
        scheduleVillage();
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const scheduleVillage = async =>{
        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
        var data = JSON.stringify({
            "search": search,
            "project_id": state?.id,
            "emp_id": idvalue
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getGFAssignedBatch.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setVillageData(response.data)
            console.log(response.data,'<---------------setVillageDatasetVillageData');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const id = sessionStorage?.getItem("proId")
    useEffect(() => {
      projData();
  
    }, [])
    
    const projData = async => {
      console.log(location, "location props")
      var userDetails = JSON.parse(localStorage?.getItem('userDetails'))
      var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
      var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
      var data = JSON.stringify({
        "project_id": id,
        "role_id": role,
        "emp_id": idvalue
      });
  
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getProjectData.php',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
  
      axios(config)
        .then(function (response) {
          setData1(response.data.list)
          console.log(response.data, '<--------------setData1setData1');
        })
        .catch(function (error) {
          console.log(error);
        });
  
    }

    const handleDelete = () => {
      setSelected(null)
      search = ''
      setSearch(search)
     scheduleVillage();
  }

    return (

        <Container> <Searchbar getSearch={(e) => searchFunction(e)} />
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    Schedule Village Visit
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack> 
             {
                    selected && <><Chip label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
            }
            <Card><CardContent style={{fontWeight:700}}>Project Name : {data1.project_name}</CardContent> </Card><br/>
            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <Villagevisitdrawer
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                    id={state?.id}
                />
            </Stack>
            {/* </Stack> */}

            {villageData?.list?.length!==0?villageData?.list?.map((itm) => {

                return (
                    <Card style={styles.card1} onClick={() => {
                        setClickData({ name: itm.training_batch_name, title: "Schedule a Village visit",id:itm?.training_batch_id })
                        handleOpenFilter()
                    }}>

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15}}>
                          <Typography variant="subtitle1" gutterBottom>
                                {` ${itm?.training_batch_name}`}
                            </Typography>
                            {/* {console.log(itm?.list?.gelathiname,'<-------gelathinamegelathiname')} */}
                        </Grid>
                      
                    </Card>)
              }):
              <>
              <h1>No Schedule Village Visit Found</h1>
              </>}

        </Container>

    );
}
const styles = {
    card1: {
        backgroundColor: '#f5f5f5',
        opacity: 0.9,
        marginTop: "20px",
        padding: "1rem"
    },
}