// import { useState, useEffect } from 'react';
// import React from 'react';
// import axios from 'axios';
// import { useTheme } from '@mui/material/styles';
// import {
//   Grid,
//   Container,
//   Typography,
//   Stack,
//   Divider,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   ButtonGroup,
//   IconButton,
// } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
// import Iconify from '../../components/Iconify';
// import Page from '../../components/Page';
// import Chip from '@mui/material/Chip';
// import { AppWidgetSummary } from '../../sections/@dashboard/app';
// import { useNavigate } from 'react-router-dom';
// import FiltersHome from '../Filters/FiltersHome';
// import DialogForm from './components/DialogForm'
// export default function QualityAssurance() {
//   const [loader, setLoader] = useState(false);

//   const [openFilter, setOpenFilter] = useState(false);

//   const [filterData, setFilterData] = useState({});

//   const [slected, setSelected] = useState(null);

//   const [summaryData, setSummaryData] = useState([]);

//   const [open, setOpen] = React.useState(false);

//   const [batch,setBatch] = useState('')

//   const [shown,setShown] = React.useState(false);



//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//   const handleOpenFilter = () => {
//     setOpenFilter(true);
//   };

//   const handleCloseFilter = () => {
//     setOpenFilter(false);
//   };


//   return (
//     <>
//       <Page title="Dashboard">
//         <Stack direction="row" alignItems="center" justifyContent="space-between">
//           <Typography variant="h5" gutterBottom sx={{ ml: 4 }}>
//             Summary
//           </Typography>
//           <Button
//             style={{ float: 'right', color: '#ff7424' }}
//             sx={{ '&:hover': { backgroundColor: '#ffd796' } }}
//             onClick={() => {
//               handleOpenFilter();
//             }}
//           >
//             Filter
//           </Button>
//         </Stack>
//         <Container maxWidth="xl">
//           <Grid item spacing={10}></Grid>

//           <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
//             <FiltersHome
//               type="Dashboard"
//               // onDateSubmit={onDateSubmit}
//               // onSumbit={onSumbit}
//               // getData={getData}
//               isOpenFilter={openFilter}
//               onOpenFilter={handleOpenFilter}
//               onCloseFilter={handleCloseFilter}
//             />
//           </Stack>

//           <Grid justifyContent="center" container spacing={3} marginTop={1}>
//             <Grid onClick={handleClickOpen} item xs={4} sm={8} md={4}>
//               <AppWidgetSummary title="Self Shakti Training Program" total={1352831} color="primary" />
//             </Grid>

//             <Grid onClick={handleClickOpen} item xs={4} sm={8} md={4}>
//               <AppWidgetSummary title="Gelathi Program" total={1352831} color="secondary" />
//             </Grid>
//             <Grid item xs={4} sm={8} md={4}>
//               <AppWidgetSummary title="Self Shakti by Gelathi" total={1352831} color="gelathis" />
//             </Grid>
//           </Grid>
//           <DialogForm batch={batch} shown={shown} setShown={(e)=>{setShown(e)}} />
//           <Card onClick={()=>{setShown(true),console.log("ferfgreg")}}
//             style={{ marginTop: 20 }}>
          
           
//             <CardContent>
            
//               <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
//                 <Iconify icon="material-symbols:add" width={30} height={30} />
//               </div>
//               <Typography>Self Shakti Training Program</Typography>
//             </CardContent>
//           </Card>
//           <Card
//             onClick={() => {
//               setShown(true), console.log('ferfgreg');
//             }}
//             style={{ marginTop: 20 }}
//           >
//             <CardContent>
//               <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
//                 <Iconify icon="material-symbols:add" width={30} height={30} />
//               </div>
//               <Typography>Gelathi Program</Typography>
//             </CardContent>
//           </Card>
//           <Card
//             onClick={() => {
//               setShown(true), console.log('ferfgreg');
//             }}
//             style={{ marginTop: 20 }}
//           >
//             <CardContent>
//               <div style={{ float: 'right', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white' }}>
//                 <Iconify icon="material-symbols:add" width={30} height={30} />
//               </div>
//               <Typography>Self Shakti by Gelathi</Typography>
//             </CardContent>
//           </Card>
//         </Container>
//       </Page>
//     </>
//   );
// }
