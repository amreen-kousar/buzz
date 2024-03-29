import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip, Container,CardContent, Typography, Grid, IconButton, } from '@mui/material';
// import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import Searchbar from 'src/layouts/dashboard/Searchbar';
import VillageDialog from './projectfilters/Villagesdialog';
export default function assignedVillages() {
    const {state} = useLocation()
    const [data1, setData1] = useState('')
    const [batch,setBatch] = useState('')
    const [batchState,setBatchState] = useState()
    var [search, setSearch] = useState('')
    var [selected, setSelected] = useState(null)
    const [count,setCount]= useState('');
    const [clcikData, setClickData] = useState()
    const [villageData, setVillageData] = useState('');

    useEffect(() => {
        assignedVillages();
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const assignedVillages = async =>{
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
            setCount(response?.data?.list.length)
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    const searchFunction = (e) => {
        search = e
        setSearch(search)
        setSelected({ name: e, type: "Search" })
        assignedVillages()
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
   assignedVillages();
}
useEffect(() => {
  getTrainingBatch();
 // console.log(batchState)
  
}, [batchState])
const getTrainingBatch = async =>{
        
  console.log(batchState,"<---batchStatebatchState",batchState?.training_batch_id?batchState?.training_batch_id:clcikData?.id)
  var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
  var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
  var data = JSON.stringify({
      "batch_id": batchState?.training_batch_id?batchState?.training_batch_id:clcikData?.id,
      "role_id": role
    });
    
    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getTrainingBatchData.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      setBatch(response.data)
    
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
}


    return (

        <Container><Searchbar getSearch={(e) => searchFunction(e)} />
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                   Assigned Villages
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack>
            {
                    selected && <> <Chip style={{ backgroundColor: '#ffd796', color: '#000' }}label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} /><br/>&nbsp;</>
            }
             <Card><CardContent style={{fontWeight:700}}>Project Name : {data1.project_name}</CardContent> </Card><br/>
            <Typography style={{fontWeight:500,marginLeft:2}}>Villages ({count})</Typography> 
            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <VillageDialog
                    batchState={batchState}
                    batch={batch}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                />
            </Stack>
            {/* </Stack> */}
            {villageData?.list?.map((itm) => {
                return (
                    <Card style={styles.card1} onClick={() => {
                      setBatchState(itm)
                        setClickData({ name: itm.training_batch_name, title: "Participant Details",id:itm?.training_batch_id})
                        handleOpenFilter()
                    }}>

                        <div pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {`  ${itm?.training_batch_name}`}
                            </Typography>
                            {/* {console.log(itm?.list?.gelathiname,'<-------gelathinamegelathiname')} */}
                        </div>
                       
                    </Card>)
            })}

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