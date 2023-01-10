import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import axios from 'axios';

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



const rows1 = [
  createData('Buses', 18),
]
export default function Demography() {
  const [demo, setDemo] = useState();
  useEffect(() => {
    demoi()
  }, []
  )
  const demoi = async () => {

    const data = JSON.stringify({
      "project_id": "",
      "taluk_id": "",
      "district_id": "",
      "funder_id": ""
    });

    const config = {
      // http://3.7.7.138/appTest/getDemoGraphy.php
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getDemoGraphy.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setDemo(response.data.list)
        console.log(response.data, '<----223swswsws');
      })
      .catch((error) => {
        console.log(error);
      });
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
  return (
    <>
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

                {/* <TableCell size={'medium'} align="center" style={{     padding: "0px 12px 0px 0px"
justifyContent: 'center', textAlign: 'center', }}>Resources</TableCell> */}
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

                <StyledTableCell xs={12} sm={12} md={12} style={{ justifyContent: 'center', textAlign: 'center', }} colSpan={2}>Assets</StyledTableCell>
                {/* <StyledTableCell>Available Quantity</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <StyledTableRow key={row.R1}>
                  <StyledTableCell component="th" scope="row">
                    {row.R1}
                  </StyledTableCell>
                  <StyledTableCell>{row.R2}</StyledTableCell>
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
                {/* <StyledTableCell>Available Quantity</StyledTableCell> */}
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
    </>
  );
}
