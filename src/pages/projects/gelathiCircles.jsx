import { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import GelathiCircleDrawer from '../projects/Components/GelathiCircleDrawer';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/Iconify';

export default function gelathiCirclesList() {

    const [clcikData, setClickData] = useState()
    const [gelathiCircles, setgelathiCircles] = useState('');

    useEffect(() => {

        circle();
        // setgelathiCircles([{ stockname: "fist" }, { stockname: "second" }])
    }, []
    )

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const circle = async =>{
        var data = JSON.stringify({
            "search": "",
            "project_id": 225,
            "gelathi_id": 343
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getGelathiCircle.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setgelathiCircles(response.data)
            console.log(JSON.stringify(response.data));
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
                    Gelathi Circles
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack>
            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <GelathiCircleDrawer
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                />
            </Stack>
            {/* </Stack> */}
            {gelathiCircles?.list?.map((itm) => {
                return (
                    <Card style={styles.card1} onClick={() => {
                        setClickData({ name: itm.circle_name, title: " Gelathi Cirlce Name",id:itm?.circle_id })
                        handleOpenFilter()
                    }}>

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {`  Gelathi Cirlces Name : ${itm?.circle_name}`}
                            </Typography>
                        </Grid>
                        <Grid style={{ marginLeft: 15 }}>
                           
                            <Typography variant="subtitle2" gutterBottom>
                                {`   Cirlces Date : ${itm?.circle_date}`}
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