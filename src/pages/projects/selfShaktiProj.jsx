import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react"
import { Card, Stack, Chip,CardContent, Container, Typography, Grid, IconButton, } from '@mui/material';
import ProjectMultiDrawer from '../Components/ProjectMultiDrawer';
import Iconify from 'src/components/Iconify';
import { Link, useLocation } from 'react-router-dom';
import Searchbar from 'src/layouts/dashboard/Searchbar';

export default function selfShaktiProj() {
    const {state} = useLocation()
    console.log("shaktishakti",state)
    const [clcikData, setClickData] = useState()
    const [count,setCount] = useState();
    var [selected, setSelected] = useState(null)
    var [search, setSearch] = useState('')
    // const [selfShakthi, setselfShakthi] = useState([{ stockname: "fist" }, { stockname: "second" }]);
    const searchFunction = (e) => {
        search = e
        setSearch(search)
        setSelected({ name: e, type: "Search" })
        shakti()
    } 
    
    
    const [data1, setData1] = useState('');
    const [openFilter, setOpenFilter] = useState(false);
    const [selfShakti,setSelfShakthi] = useState('');
    const [batchState,setBatchState] = useState()
    var  [selected, setSelected] = useState(null)
    var [search, setSearch] = useState('')
    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
    useEffect(() => {
      shakti();
  
    }, [])
    const shakti = async =>{

        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
        var data = JSON.stringify({
            "end_date": "",
            "search": search,
            "project_id": state?.id,
            "filter_type": "",
            "start_date": "",
            "trainer_id": "",
            "emp_id": idvalue
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatch.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setSelfShakthi(response.data)
            setCount(response.data.list.length)
            console.log(response.data,'<-------------setSelfShakthisetSelfShakthisetSelfShakthi');
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
        shakti();
    }
  
   

    return (

        <Container>
                           <Searchbar getSearch={(e) => searchFunction(e)} />
                           <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    All Self Shakthi
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
                <ProjectMultiDrawer
                batchState={batchState}
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                />
            </Stack>
            {/* </Stack> */}
            {/* {selfShakti?.map((itm) => {
                return ( */}
                    {selfShakti?.list?.length!==0?selfShakti?.list?.map((itm) => {
                        console.log(itm, "<---asdasdasdsadas")
                        return (
                          
                     
                    <Card style={styles.card1} 
                    onClick={() => {
                        setBatchState(itm)
                        setClickData({ name: itm.batch_name, title: "self Shakthi name" })
                        handleOpenFilter()
                    }}
                    >
                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {` Self Shakthi Name : ${itm?.batch_name}`}
                            </Typography>
                        </Grid>
                        <Grid style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }} >
                               Day 1 : {itm?.day1}</Typography>

                           
                            <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }}>
                            Day 2 : {itm?.day2}</Typography>
                            
                        </Grid>
                    </Card>)
            }):
            <>
            <h1>No Self Shakthi Project  Found</h1>
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