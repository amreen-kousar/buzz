import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Stack, Chip, Container, Typography,CardContent, Grid, IconButton, Button} from '@mui/material';
import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import GreenSurvey from './Components/GreenSurvey'
import Searchbar from 'src/layouts/dashboard/Searchbar';
import Filtersmain from './projectfilters/filtersmain';
export default function enrolledGreenMotivatorsList() {
    const {state} = useLocation()
    console.log("nwewepewrwe",state)
    const [clcikData, setClickData] = useState()
    const [green , setGreen] = useState('')
     const [filterData, setFilterData] = useState({})
    var [selected, setSelected] = useState(null)
    const [data1, setData1] = useState('')
    var [search, setSearch] = useState('')
    const [count,setCount]= useState('');
    useEffect(() => {
        enrolledGreenMotivators();
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);
    const [filter,setFilter]=useState(false);
    const searchFunction = (e) => {
      
        search = e
        setSearch(search)
        setSelected({ name: e, type: "Search" })
        enrolledGreenMotivators()
    }
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
    const enrolledGreenMotivators = async(id,i,g) =>{
      console.log(id,'hy',i)
        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
        var data = JSON.stringify({
            "search": search,
            "project_id": state?.id,
            "emp_id": idvalue,
            "gelathi_id":id?.emp_id?id?.emp_id:""
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/new/getEnrollGreenMotivators.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setGreen(response.data)
            setCount(response?.data?.list.length)
            console.log(response.data);
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
    enrolledGreenMotivators();
}

const getData = (itm, i) => {
  console.log(itm,"getdata")
  setSelected({itm,type:'Gelathi Facilitators'})
 
  const data = i === 6 ? { "gelathi_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : { "project_id": itm?.id }
  enrolledGreenMotivators(itm, i)
  console.log(data, i, itm, "<----sdfssreerfer")
  setFilterData(data)
  handleclose()
  console.log("sdfgsdfdfssd", itm, i)
  }
    return (

        <Container><Searchbar getSearch={(e) => searchFunction(e)} />
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    All Enrolled Green Motivators
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            <Button style={{ float: "right",right:30,position:'absolute', color: '#ff7424' }} sx={{ '&:hover': { backgroundColor: '#ffd796', }, }} onClick={() => { handleopen() }}>
            Filter
          </Button>
            </Stack>
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <Filtersmain
                    type="GreenMotivators"
                    isOpenFilter={filter}
                    data1={data1}
                    getData={getData}
                    onOpenFilter={handleopen}
                    onCloseFilter={handleclose}
                />
            </Stack>
            
            {
                    selected &&(selected?.type=='Search')&& <><Chip label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
            } 
            {
                    selected &&(selected?.type=='Gelathi Facilitators') &&<><Chip label={`${selected?.type} : ${selected?.itm?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
            } 
            
            <Card><CardContent style={{fontWeight:700}}>Project Name : {data1.project_name}</CardContent> </Card><br/>
            <Typography style={{fontWeight:500,marginLeft:2}}>Green Motivators : ({count})</Typography> 
            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}

            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <ParticipantDrawer
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                />
            </Stack>
            {/* </Stack> */}

            {green?.list?.length!==0?green?.list?.map((itm) => {
                console.log(itm,'<----------greengreengreen')
                return (
                    <Card style={styles.card1} onClick={() => {
                        setClickData({ name: itm, title: "Enrolled Green Motivator Name",id:itm?.id})
                        handleOpenFilter()
                    }}>
                        
              <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15}}>
             <Typography variant="subtitle1" gutterBottom>
                                {` Enrolled Gelathi Name : ${itm?.gelathiname}`}     
                            </Typography><GreenSurvey />
              </Grid>
              <Grid style={{ marginLeft: 15 }}>
              <Typography variant="subtitle2" gutterBottom  >
              {` Enrolled Village Name : ${itm?.villagename}`}
                </Typography>
                <Typography variant="body2"  gutterBottom >
                {` Enrolled Date : ${itm?.enroll_date}`}
                 
                </Typography>
              

              </Grid>
                      
                       
                    </Card>)
            }):
            <>
            <h4 style={{textAlign:'center'}}>No Green  Motivators Found</h4>
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