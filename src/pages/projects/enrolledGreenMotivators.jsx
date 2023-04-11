import { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import { Card, Stack, Chip, Container, Typography,CardContent, Grid, IconButton, Button} from '@mui/material';
import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import GreenSurvey from './Components/GreenSurvey'
import Searchbar from 'src/layouts/dashboard/Searchbar';
import Filtersmain from './projectfilters/filtersmain';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
export default function enrolledGreenMotivatorsList() {
    const {state} = useLocation()
    console.log("nwewepewrwe",state)
    const [clcikData, setClickData] = useState()
    const [green , setGreen] = useState('')
     const [filterData, setFilterData] = useState({})
     const [openMessage, setOpenMessage] = useState(false);
     const [message, setMessage] = useState('')
    var [selected, setSelected] = useState(null)
    const [data1, setData1] = useState('')
    var [search, setSearch] = useState('')
    const [count,setCount]= useState('');
    useEffect(() => {
        enrolledGreenMotivators();
    }, []
    )
    const [successMessage,setsuccessMessage]=useState(false);

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
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

  const removeGelathi=async(itm)=>{
    if(confirm("Are you sure want to remove Gelathi")){
  var data = JSON.stringify({
    "id": itm?.id,
    "tb_id": itm?.tb_id
  });
  
  var config = {
    method: 'post',
    url: 'https://bdms.buzzwomen.org/appTest/new/removeGreenMotivators.php',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    enrolledGreenMotivators()
    // setMessage('Poa deleted successfully')
    // setOpenMessage(true)
  })
  .catch(function (error) {
    console.log(error);
  });
}
}


  const role = JSON.parse(localStorage?.getItem('userDetails'))?.role
    return (
      // {openMessage &&
      //   <Snackbar open={openMessage} autoHideDuration={6000} onClose={() => setOpenMessage(false)}>
      //     <Alert onClose={() => { setOpenMessage(false) }} severity="success" sx={{ width: '100%' }}>
      //       {message}
      //     </Alert>
      //   </Snackbar>
      // }



        <Container><Searchbar getSearch={(e) => searchFunction(e)} />
         {successMessage && (
        <Snackbar open={successMessage} autoHideDuration={6000} onClose={() => setsuccessMessage(false)}>
          <Alert
            onClose={() => {
              setsuccessMessage(false);
            }}
            severity="success"
            sx={{ width: '100%', marginLeft:'250%' }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    Green Motivators
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            {(role==1 || role==3||role==5||role==4||role==12)?<Button style={{ float: "right",right:30,position:'absolute', color: '#ff7424' }} sx={{ '&:hover': { backgroundColor: '#ffd796', }, }} onClick={() => { handleopen() }}>
            Filter
          </Button>:null}
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
                    <Card  style={styles.card1}>
                   {(role==13 || role==6)?<IconButton style={{float:'right',right:30}} onClick={()=>removeGelathi(itm)}><Iconify icon="ic:sharp-remove-circle"/></IconButton>:null}<GreenSurvey />     
              <div onClick={() => {
                        setClickData({ name: itm, title: "Enrolled Green Motivator Name",id:itm?.id})
                        handleOpenFilter()
                    }} pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15}}>
             <div variant="subtitle1" gutterBottom>
                                {` Gelathi Name : ${itm?.gelathiname}`}
                            </div>
              
              <div variant="subtitle2" gutterBottom  >
              {` Village Name : ${itm?.villagename}`}
                </div>
               {(role==1 || role==3 || role==5 || role==12 || role==4)? <div variant="subtitle2" gutterBottom  >
              {` Enrolled By : ${itm?.enrolled_by}`}
                </div>:null}
                <div variant="body2"  gutterBottom >
                {` Enrolled Date : ${itm?.enroll_date}`}
                 
                </div>
              

              </div>
                      
              {/* <TableContainer component={Paper} sx={{width:"50vw"}} style={styles.card1} >
          <Table aria-label="customized table">
           
            <TableBody onClick={() => {
                        setClickData({ name: itm, title: "Enrolled Green Motivator Name",id:itm?.id})
                        handleOpenFilter()
                    }}  direction="row" alignItems="center" justifyContent="space-between" >
             
                <TableRow>
                  <TableCell component="th" scope="row">
                  <Typography >Enrolled Gelathi Name </Typography>
                  </TableCell>
                  <TableCell>: {`${itm?.gelathiname}`}     </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                  Enrolled Village Name : 
                  </TableCell>
                  <TableCell> {`${itm?.villagename}`}     </TableCell>
                </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>         */}
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