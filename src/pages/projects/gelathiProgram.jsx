import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import GelathiProgrameDrawer from '../projects/Components/GelathiProgrameDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';

export default function gelathiProgram(props) {
    const {state} = useLocation();
  console.log(props,"<----props",state)
    const [clcikData, setClickData] = useState()
    const [programe,setPrograme] = useState('')
    useEffect(() => {
        gelathiPrograme();
        }, []
    )
    const gelathiPrograme = async =>{
        var data = JSON.stringify({
            "filter": "",
            "end_date": "",
            "search": "",
            "project_id": state?.id,
            "gelathi_id": "",
            "start_date": "",
            "emp_id": 492
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
            console.log(response.data,'<--------------setProgramesetProgramesetPrograme');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (

        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    All gelathi Program
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack>
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
            {programe?.list?.map((itm) => {
                        console.log(itm, "<---programeprogrameprograme")
                        return (
                            <Card style={styles.card1} onClick={() => {
                                setClickData({ name: itm.gf_session_id, title: "Gelathi program Name" })
                                handleOpenFilter()
                            }}>  
                     
                   

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {` GF Name : ${itm?.gf_session_name}`}
                            </Typography>
                        </Grid>
                        <Grid style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle2" gutterBottom >
                               Day 1 : {itm?.plan_date}</Typography>

                          
                            <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }}>
                            Day 2 : {itm?.status}</Typography>
                            
                        </Grid>
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