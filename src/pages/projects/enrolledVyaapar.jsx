import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip,CardContent, Container, Typography, Grid, IconButton,Button } from '@mui/material';
import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import Vyaparprogram from './Components/Vyaparprogram';
import Searchbar from 'src/layouts/dashboard/Searchbar';
import GetVyaparProgram from './Getvyaparprogram';
import Filtersmain from './projectfilters/filtersmain';
export default function enrolledVyaaparList() {
    const {state} = useLocation()
    const [clcikData, setClickData] = useState()
    const roleid = JSON.parse(localStorage?.getItem('userDetails'))?.role
    const [filterData, setFilterData] = useState({})
     const [data1, setData1] = useState('')
    var [search, setSearch] = useState('')
    var [selected, setSelected] = useState(null)
    const [vyaapar, setVyaapar] = useState('');
    var [selected, setSelected] = useState(null)
      const [count,setCount]= useState('');
const [remove,setremove]=useState('');
 const searchFunction = (e) => {
       
        search = e
        setSearch(search)
        setSelected({ name: e, type: "Search" })
        enrolledVyaapar()
    }


      const handleDelete = () => {
        setSelected(null)
        search = ''
        setSearch(search)
        enrolledVyaapar();
    }

    useEffect(() => {
        enrolledVyaapar();
        // setenrolledVyaapar([{ stockname: "fist" }, { stockname: "second" }])
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);
    const [filter,setFilter]=useState(false);
    const [reload, setReload] = useState(false);
    
const changeState = () => {
  setReload(!reload);
  console.log('changeState is called ');
};


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
    const enrolledVyaapar= async(id,i,g) =>{
        var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
        var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
        var data = JSON.stringify({
            "search": search,
            "project_id": state?.id,
            "emp_id": idvalue,
            "gelathi_id":id?.emp_id?id?.emp_id:'',
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/new/getEnrollVyaparEnrollment.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setVyaapar(response?.data)
            changeState();
            setCount(response?.data?.list.length)
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
      "emp_id": idvalue,
      
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
  const getData = (itm, i) => {
    console.log(itm,"getdata")
    setSelected({itm,type:'Gelathi Facilitators'})
    const data = i === 6 ? { "gelathi_id": itm?.id } : i === 1 ? { "partner_id": itm?.id } : { "project_id": itm?.id }
    enrolledVyaapar(itm, i)
    console.log(data, i, itm, "<----sdfssreerfer")
    setFilterData(data)
    handleclose()
    console.log("sdfgsdfdfssd", itm, i)
    }
    const role = JSON.parse(localStorage?.getItem('userDetails'))?.role
  const removevyapar=async(itm)=>{
    if(confirm("Do You want to Remove Gelathi?")){
    var data = JSON.stringify({
      "id": itm?.id,
      "tb_id": itm?.tb_id
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/new/removeVyaparEnrollment.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setremove(response.data)
      enrolledVyaapar()
    })
    .catch(function (error) {
      console.log(error);
    });
}}

    return (

        <Container> <Searchbar getSearch={(e) => searchFunction(e)} />
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                   Enrolled Vyaapar
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
          {console.log(clcikData,"clickeddataaaaaa")}
           {(role==1 || role==3||role==5||role==4||role==12)?<Button style={{ float: "right",right:30,position:'absolute', color: '#ff7424' }} sx={{ '&:hover': { backgroundColor: '#ffd796', }, }} onClick={() => { handleopen() }}>
            Filter
          </Button>:null}
            </Stack>
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <Filtersmain
                    type="Vyapar"
                    data1={data1}
                    isOpenFilter={filter}
                    getData={getData}
                    onOpenFilter={handleopen}
                    onCloseFilter={handleclose}
                />
            </Stack>
            
                {
                    selected && (selected?.type=='Search') && <><Chip label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
                }
                 {
                    selected && (selected?.type=='Gelathi Facilitators') && <><Chip label={`${selected?.type} : ${selected?.itm?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
                }
                <Card><CardContent style={{fontWeight:700}}>Project Name : {data1.project_name}</CardContent> </Card><br/>
                <Typography style={{fontWeight:500,marginLeft:2}}>Enrolled Vyapar : ({count})</Typography> 
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

            {vyaapar?.list?.length!==0?vyaapar?.list?.map((itm) => {
               console.log(itm,'<---------------vyaaparvyaaparvyaaparvyaapar')
                return (
                    <Card style={styles.card1} >
                      <div>{(role==13 || role==6)?<IconButton style={{float:'right',right:30}} onClick={()=>removevyapar(itm)} ><Iconify icon="ic:sharp-remove-circle"/></IconButton>:null}{(itm?.is_survey)?<GetVyaparProgram itm={itm}/>:<Vyaparprogram itm={itm} changeState={changeState}/>}</div>
                        <div onClick={() => {
                        setClickData({ name: itm.gelathiname, title: "Enrolled Vyaapar Name" ,id:itm?.id})
                        handleOpenFilter()
                    }} pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {` Gelathi Name : ${itm?.gelathiname}`}
                            </Typography>
                     
                        <Typography variant="subtitle1" gutterBottom>
                                {`  Village Name : ${itm?.villagename}`}
                            </Typography>
                           {(roleid==1 || roleid==3 || roleid==4 || roleid==12)?<Typography variant="subtitle1" gutterBottom>
                                {`  Enrolled By : ${itm?.enrolled_by}`}
                            </Typography>:null}
                            <Typography variant="subtitle1" gutterBottom>
                                {` Enrolled Date : ${itm?.enroll_date}`}
                            </Typography>
                        </div>
                      
                    </Card>)
            }):
            <>
            <h4 style={{textAlign:'center'}}>No  Enrolled  Vyapar Found</h4>
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