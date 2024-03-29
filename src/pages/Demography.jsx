import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Button, Stack, CardContent, Chip , Typography,Container} from '@mui/material';
import axios from 'axios';
import DemographyFilter from './Components/DemographyFilters/DemographyFilter';
import { assertTSAnyKeyword } from '@babel/types';
import FiltersHome from './Filters/FiltersHome';
import Page from 'src/components/Page';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories };
}
function createData1(R1, R2) {
  return { R1, R2 };
}

function createData2(r1, r2) {
  return { r1, r2 };
}
export default function Demography() {
  const intialValues = {
    funder: "",
    project: "",
  }



  const [openFilter, setOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState({})
  const [selected, setSelected] = useState()



  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const [demo, setDemo] = useState();
  console.log("🚀 ~ file: Demography.jsx:70 ~ Demography ~ demo:", demo)
  useEffect(() => {
    demoi()
  }, []
  )
  const demoi = async (id, i, g) => {
    console.log("'hscjh", id)
    const data = {
      taluk_id: g === "country" ? i : "",
      district_id: g === "country" ? id : "",
      trainerId: g ? "" : i === 5 ? id?.id : '',
      somId: g ? "" : i === 12 ? id?.id : '',
      gflId: g ? "" : i === 13 ? id?.id : '',
      funder_id: g ? "" : i === 2 ? id?.id : '',
      partner_id: g ? "" : i === 1 ? id?.id : '',
      project_id: g ? "" : i === 3 ? id?.id : '',
      opsManager: g ? "" : i === 4 ? id?.id : '',
      
    };
    const datas = {
      end_date: i,
      taluk_id: "",
      district_id: "",
      trainerId: '',
      emp_id: 1,
      start_date: id,
      somId: '',
      gflId: '',
      funder_id: "",
      partner_id: "",
      project_id: '',
      opsManager: '',
    };

    console.log(data, "datttttttaaaaaaaaaa")
    const config = {
      // http://3.7.7.138/appTest/getDemoGraphy.php
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getDemoGraphy.php',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data
    };
    console.log(data, "_______>data")
    axios(config)
      .then((response) => {
        setDemo(response.data.list)
        console.log(response.data, '<----223swswsws');
      })
      .catch((error) => {
        console.log(error);
      });

  }




  const onSumbit = (e, i) => {
    console.log("🚀 ~ file: Demography.jsx:130 ~ onSumbit ~ e:", e)
    setSelected({ type: 'Location', name: ` ${e?.stateName} ; District : ${e?.districtName} ; Taluk : ${e?.talukName}` })
    handleCloseFilter()
    demoi(e?.district_id, e?.talaq_id, "country")
    console.log(e, i, "<----datssdasdsa")
  }


  const rows = [
    createData('Admins', demo?.adminCount),
    createData('Funders', demo?.funderCount),
    createData('Partners', demo?.partnerCount),
    createData('Programe Manager', demo?.pmCount),
    createData('Sr. Operation Manager', demo?.somCount),
    createData('Operation Manager', demo?.opmCount),
    createData('Gelathi Facilator Leads', demo?.gflCount),
    createData('Trainer', demo?.trainerCount),
    createData('Gelathi Facilator', demo?.gelathiCount),
    createData('Drivers', demo?.driverCount),
  ];

  const assetrows = [
    createData1('Buses', demo?.busCount),
  ];

  const executionrows = [
    createData2('Number of Projects', demo?.project_count),
    createData2('Completed Training Batches', demo?.tb_count),
    createData2('Completed Village Visits', demo?.vv_count),
    createData2('Completed Circle Meetings', demo?.cm_count),
    createData2('Completed Beehive Visits', demo?.bh_count),
  ];

  const getData = (itm, i) => {
    setSelected(itm)
    const data = i === 2 ? { "funder_id": itm?.id } : { "project_id": itm?.id }
    demoi(itm, i);
    console.log("helloooo--->", data)
    console.log(data, i, itm, "<----sdfssreerfer");
    setFilterData(data);
    handleCloseFilter();
    console.log("itemmmm", itm);
    console.log("iiii", i);
  }

  const handleDelete = () => {
    setSelected(null)
    demoi()
  }


  return (
    <Page title="Demography">
      <Container>
         <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom >
         Demography
          </Typography>
          <Button style={{ float: "right", color: '#ff7424' }}
        sx={{
          '&:hover': {
            backgroundColor: '#ffd796',
          },
        }}
        onClick={() => {
          handleOpenFilter()
        }}>
        Filter
      </Button>
        </Stack>

     
      {
        selected?.type &&  <Chip style={{ backgroundColor: '#ffd796', color: '#000' }}label={`${selected?.type} : ${selected?.name} `} onDelete={() => { handleDelete(selected) }} />
      }

   
      <Stack direction="row" spacing={1} flexShrink={0} >
        <FiltersHome
          type="Demography"
          getData={getData}
          onSumbit={onSumbit}
          isOpenFilter={openFilter}
          onOpenFilter={handleOpenFilter}
          onCloseFilter={handleCloseFilter}
        />
      </Stack>
      <Grid
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
      >

        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ width: "max-content", justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>


                <StyledTableCell colSpan={2} style={{ width: 'max-content', justifyContent: 'center', textAlign: 'center', }}>Resources</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.calories}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>

                <StyledTableCell colSpan={2} xs={12} sm={12} md={12} style={{ justifyContent: 'center', textAlign: 'center', }}>Assets</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              {assetrows.map((row) => (
                <StyledTableRow key={row.R1}>
                  <StyledTableCell component="th" scope="row">
                    {row.R1}
                  </StyledTableCell>
                  <StyledTableCell style={{ textAlign: 'center', paddingLeft: 8 }}>{row.R2}</StyledTableCell>
                </StyledTableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>

                <StyledTableCell colSpan={2} xs={12} sm={12} md={12} style={{ justifyContent: 'center', textAlign: 'center', }}>Excecution</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {executionrows.map((row) => (
                <StyledTableRow key={row.r1}>
                  <StyledTableCell component="th" scope="row">
                    {row.r1}
                  </StyledTableCell>
                  <StyledTableCell>{row.r2}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>


      <Grid item xs={12} sm={12} md={12} marginTop={3}>
        {demo?.data?.map((itm) => {
          return (
            <Card
              style={{
                backgroundColor: '#f5f5f5',
                flexDirection: 'column',
                borderRadius: 12,
                border: '2px solid',
                borderColor: '#ffcc80',
                marginBottom: '40px',
              }}>
              <CardContent>
                <Typography variant="h4" component="h2" marginLeft={2}>
                  {itm?.nmae}
                </Typography>
                <Grid
                  sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                  }}
                >

                  <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                      <TableHead>
                        <TableRow style={{ width: "max-content", justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>

                          <StyledTableCell colSpan={2} style={{ width: 'max-content', justifyContent: 'center', textAlign: 'center', }}>Resources</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Admins
                          </StyledTableCell>
                          <StyledTableCell>{demo?.adminCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Funders
                          </StyledTableCell>
                          <StyledTableCell>{demo?.funderCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Partners
                          </StyledTableCell>
                          <StyledTableCell>{demo?.partnerCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Program Manager
                          </StyledTableCell>
                          <StyledTableCell>{demo?.pmCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Sr.Operation Manager
                          </StyledTableCell>
                          <StyledTableCell>{demo?.somCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Operation Manager
                          </StyledTableCell>
                          <StyledTableCell>{demo?.opmCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Gelathi Faciliator Leads
                          </StyledTableCell>
                          <StyledTableCell>{demo?.gflCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Trainer
                          </StyledTableCell>
                          <StyledTableCell>{demo?.trainerCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Gelathi Faciliator
                          </StyledTableCell>
                          <StyledTableCell>{demo?.gelathiCount}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Drivers
                          </StyledTableCell>
                          <StyledTableCell>{demo?.driverCount}</StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>

                <Grid
                  sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                      <TableHead>
                        <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>

                          <StyledTableCell colSpan={2} xs={12} sm={12} md={12} style={{ justifyContent: 'center', textAlign: 'center', }}>Assets</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            Buses
                          </StyledTableCell>
                          <StyledTableCell style={{ textAlign: 'center', paddingLeft: 2 }}>{demo?.busCount}</StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>

                <Grid
                  sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                      <TableHead>
                        <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>

                          <StyledTableCell colSpan={2} xs={12} sm={12} md={12} style={{ justifyContent: 'center', textAlign: 'center', }}>Excecution</StyledTableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>

                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Number of Projects
                          </StyledTableCell>
                          <StyledTableCell>{demo?.project_count}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Completed Training Batches
                          </StyledTableCell>
                          <StyledTableCell>{demo?.tb_count}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Completed Village Visits
                          </StyledTableCell>
                          <StyledTableCell>{demo?.vv_count}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Completed Circle Meetings
                          </StyledTableCell>
                          <StyledTableCell>{demo?.cm_count}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                          <StyledTableCell component="th" scope="row">
                            Completed Beehive Visits
                          </StyledTableCell>
                          <StyledTableCell>{demo?.bh_count}</StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </CardContent>
            </Card>

          )
        })}  </Grid>
        </Container>
    </Page>
  );
}
