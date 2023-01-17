import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Funders({ selectDATA, getData }) {
  const [fund, setFund] = useState();
  useEffect(() => {
    console.log(selectDATA, "<--dffgdfgdfn ---- funder")
    if (selectDATA) {
      funder()
    }
  }, [selectDATA]
  )
  const funder = async () => {
    const data = JSON.stringify({
      "role_id": 1,
      "filter_type": selectDATA,
      "pageNum": 1,
      "emp_id": 206
    });

    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getPeopleFilters.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setFund(response?.data?.data)
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>


      <Card style={{ marginTop: 20 }}>
        {fund?.length !== 0 ? fund?.map(itm => {
          return (
            <CardContent>
              <TableContainer >
                <Table aria-label="customized table"  >
                  <TableBody  >
                    <TableRow style={{ height: "10px !important" }} onClick={() => getData(itm, selectDATA)} >
                      <TableCell style={{ width: "10px" }}> <Iconify icon="mdi:user-circle" width={20} height={20} /> </TableCell>
                      <TableCell >  {itm?.name}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          
          )
        }) : null}
      </Card>

    </div>
  )
}