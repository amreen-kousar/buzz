import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link, useLocation } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import BeehiveDrawer from './Components/BeehiveDrawer';

export default function scheduleBeehiveVisit() {
   const {state} = useLocation()
   console.log("nwewepewrwe",state)
    const [clcikData, setClickData] = useState()
    const [beehive, setBeehive] = useState('');

    useEffect(() => {
        BeehiveGelathi();
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const BeehiveGelathi = async =>{
        var data = JSON.stringify({
            "search": "",
            "project_id": state?.id,
            "emp_id": 492
          });
          
          var config = {
            method: 'post',
          maxBodyLength: Infinity,
            url: 'https://bdms.buzzwomen.org/appTest/getGFAssignedBatch.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setBeehive(response.data)
            console.log(response.data,'<---------------setBeehive');
            
          })
          .catch(function (error) {
            console.log(error);
          });
       
    }

    return (

        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                        Schedule Beehive Visit
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack>
            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <BeehiveDrawer
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                    id={state?.id}
                />
            </Stack>
            {/* </Stack> */}
            {beehive?.list?.map((itm) => {
                console.log(itm,"<----itmasas")
                return (
                    <Card style={styles.card1} onClick={() => {
                        setClickData({ name: itm.training_batch_id, title: "Schedule A Beehive Visit",id:itm?.id })
                        handleOpenFilter()
                    }}>

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {itm?.training_batch_name}
                            </Typography>
                            {/* {console.log(itm?.list?.gelathiname,'<-------gelathinamegelathiname')} */}
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