import { useState, useEffect } from 'react';
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import ProjectMultiDrawer from '../Components/ProjectMultiDrawer';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/Iconify';

export default function busTestList() {

    const [clcikData, setClickData] = useState()
    const [busTest, setbusTest] = useState([{ stockname: "fist" }, { stockname: "second" }]);

    useEffect(() => {
        // setbusTest([{ stockname: "fist" }, { stockname: "second" }])
    }, []
    )

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
                    All busTest and Check List
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack>
            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <ProjectMultiDrawer
                    clcikData={clcikData}
                    isOpenFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                />
            </Stack>
            {/* </Stack> */}
            {busTest?.map((itm) => {
                return (
                    <Card style={styles.card1} onClick={() => {
                        setClickData({ name: itm.stockname, title: "Bus Name" })
                        handleOpenFilter()
                    }}>

                        <Grid pt={1} pb={1} container xs={12} md={4} direction="row" alignItems="center" justifyContent="space-between" style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                {` Bus Test Name : ${itm?.stockname}`}
                            </Typography>
                        </Grid>
                        <Grid style={{ marginLeft: 15 }}>
                            <Typography variant="subtitle2" gutterBottom >
                                Today Checklist Status : <Chip label="Published" size="small" color="success" variant="outlined" />

                            </Typography>
                            <Typography variant="subtitle2" gutterBottom style={{ color: '#707EA3' }}>
                                Checked/Total : 0/16
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