import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip, Container, Typography, Grid, IconButton,CardContent,Button } from '@mui/material';
import GelathiProgrameDrawer from '../projects/Components/GelathiProgrameDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import Filtersmain from './projectfilters/filtersmain';
import Searchbar from 'src/layouts/dashboard/Searchbar';
export default function gelathiProgram(props) {
    const {state} = useLocation();
  console.log(props,"<----props",state)
    const [clcikData, setClickData] = useState()
    const [programe,setPrograme] = useState('')
    const [filterData, setFilterData] = useState({})
    const [data1, setData1] = useState('')
    const [count,setCount]= useState('');
    var [search, setSearch] = useState('')
    var [selected, setSelected] = useState(null)
    useEffect(() => {
        gelathiPrograme();
        }, []
    )
    const gelathiPrograme = async(id,i,g) =>{
        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
        var data = JSON.stringify({
            "filter": "",
            "end_date":  g==="date"?i:'',
            "search": search,
            "project_id": state?.id,
            "gelathi_id": "",
            "start_date":  g==="date"?id:'',
            "emp_id": idvalue
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getGFSessions.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setPrograme(response.data)
            setCount(response.data?.list.length)
            console.log(response.data,'<--------------setProgramesetProgramesetPrograme');
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
    const [openFilter, setOpenFilter] = useState(false);
    const [filter,setFilter]=useState(false);
    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
    const handleopen=()=>{
      setFilter(true)
    };

    const handleclose=()=>{
      setFilter(false)
    }
    const handleDelete = () => {
      setSelected(null)
      search = ''
      setSearch(search)
      gelathiPrograme()   
  }

    const searchFunction = (e) => {
       
        search = e
        setSearch(search)
        setSelected({ name: e, type: "Search" })
        gelathiPrograme()
    }
    const onDateSubmit = (e) => {
      setSelected({ type: 'Date Range', name: `${e?.startDate} - ${e?.endDate}` })
  
      gelathiPrograme(e?.startDate, e?.endDate, "date")
      setFilterData({ from_date: e?.startDate, to_date: e?.endDate })
      handleclose()
      console.log(e, "<----scasds")
    }
    const getData = (itm, i) => {
    setSelected(itm)
    const data = i === 2 ? { "funder_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : { "project_id": itm?.id }
    gelathiPrograme(itm, i)
    console.log(data, i, itm, "<----sdfssreerfer")
    setFilterData(data)
    handleclose()
    console.log("sdfgsdfdfssd", itm, i)
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
                    All gelathi Program
                </Typography>
                <Button style={{ float: "right",right:30,position:'absolute', color: '#ff7424' }} sx={{ '&:hover': { backgroundColor: '#ffd796', }, }} onClick={() => { handleopen() }}>
            Filter
          </Button>
         
            </Stack>
            
            {
                    selected && <><Chip label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
            }
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <Filtersmain
                    type="GelathiProgram"
                    isOpenFilter={filter}
                    onDateSubmit={onDateSubmit}
                    gelathiPrograme={gelathiPrograme}
                    onOpenFilter={handleopen}
                    onCloseFilter={handleclose}
                />
            </Stack>
               <Card><CardContent style={{fontWeight:700}}>Project Name : {data1.project_name}</CardContent> </Card><br/>
               <Typography style={{fontWeight:500,marginLeft:2}}> All Gelathi Sessions ({count})</Typography> 
         {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <GelathiProgrameDrawer
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                />
            </Stack>
            {/* </Stack> */}

            {programe?.list?.length!==0?programe?.list?.map((itm) => {
                        console.log(itm, "<---programeprogrameprograme")
                        return (
                            <Card style={styles.card1} onClick={() => {
                                setClickData({ name: itm.gf_session_id, title: "Gelathi program Name" })
                                handleOpenFilter()
                            }}>  
                     
                   

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {` ${itm?.gf_session_name}`}
                            </Typography>
                        </Grid>
                        <Grid style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle2" gutterBottom >
                               Date : {itm?.plan_date}</Typography>

                          
                            {/* <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }}>
                            Day 2 : {itm?.status}</Typography> */}
                            
                        </Grid>
                    </Card>)
             }):
             <>
             <h1>No  Gelathi  Program Found</h1>
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