import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import ParticipantDrawer from '../projects/Components/ParticipantDrawer';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/Iconify';

export default function scheduleCircleMeet() {

    const [clcikData, setClickData] = useState()
    const [enrolled, setenrolled] = useState('');

    useEffect(() => {
        enrolledGelathi();
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const enrolledGelathi = async =>{
        var data = JSON.stringify({
            "search": "",
            "project_id": 225,
            "emp_id": 343,
            "role_id": 6
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getEnrollGelathi.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setenrolled(response.data)
            console.log(response.data,'<---------------setenrolledsetenrolled');
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
                        scheduleCircleMeet
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
            {enrolled?.list?.map((itm) => {
                return (
                    <Card style={styles.card1} onClick={() => {
                        setClickData({ name: itm.gelathiname, title: "Participant Details",id:itm?.id })
                        handleOpenFilter()
                    }}>

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {` Enrolled Gelathi Name : ${itm?.gelathiname}`}
                            </Typography>
                            {/* {console.log(itm?.list?.gelathiname,'<-------gelathinamegelathiname')} */}
                        </Grid>
                        <Grid style={{ marginLeft: 15 }}>
                        <Typography variant="subtitle1" gutterBottom>
                                {` Enrolled Village Name : ${itm?.villagename}`}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {` Enrolled Date : ${itm?.enroll_date}`}
                            </Typography>
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