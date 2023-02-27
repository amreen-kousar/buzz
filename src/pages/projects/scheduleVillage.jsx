import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/Iconify';

export default function scheduleVillage() {

    const [clcikData, setClickData] = useState()
    const [villageData, setVillageData] = useState('');

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
        var data = JSON.stringify({
            "search": "",
            "project_id": 234,
            "emp_id": 35
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

    return (

        <Container>
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
            {villageData?.list?.map((itm) => {
                return (
                    <Card style={styles.card1} onClick={() => {
                        setClickData({ name: itm.training_batch_name, title: "Participant Details",id:itm?.training_batch_id })
                        handleOpenFilter()
                    }}>

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {` Enrolled Gelathi Name : ${itm?.training_batch_name}`}
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