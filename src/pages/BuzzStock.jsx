import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {Stack} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import BusListFilter from './Components/Buslistfilters/BusListFilter';
  
import axios from 'axios';
import TotalFilter from './Components/BuzzStockFilter/TotalFilter';

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

const rows = [
  createData('Biscuits', 567159),
  createData('Buzz Financial Booklet', 237),
  createData('Certificates', 26200),
  createData('Duster', 30512),
  createData('NewsLetter', 3526),
  createData('Pencils', 35226),
  createData('Training Charts', 945356),
  createData('Training RolePlay Card', 34356),
  createData('Whiteboard', 356),
  createData('Whiteboard Maker', 23156),
  createData('Whiteboard Stand', 11356),
];

export default function BuzzStock() {
  const [demo, setDemo] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [openbusfilter, setopenbusfilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleopenbusfilter = () => {
    setopenbusfilter(true);
  };

  const handleclosebusfilter = () => {
    setopenbusfilter(false);
  };
  const getData = (itm, i) => {
    setopenbusfilter(false);
    console.log(itm,i,"<-----qwertyu")
    // setSelected({
    //   id: i,
    //   name: itm?.name
    // })
    // const data = i===2?{"funder_id":itm?.id}:i===1?{"partner_id":itm?.id}:{"project_id":itm?.id}
    busesd(itm, i)
    // console.log(data,i,itm,"<----sdfssreerfer")
    // setFilterData(data)
    // handleCloseFilter()
    // console.log("sdfgsdfdfssd", itm, i)
  }
  const onSumbit = (e,i)=>{
    console.log(e,i,"<---1234567")
    handleclosebusfilter()
    busesd( e?.talaq_id,"location")
   
   }
  useEffect(() => {
    demoi()
  }, []
  )
  const demoi = async () => {

      const data = JSON.stringify({
        "from_date": "2022-1-20",
        "to_date": "2022-1-29",
        "user_id": 206,
        "role_id": 2,
        "project_id": "",
        "taluk_id": "",
        "district_id": "",
        "funder_id": ""
  });

    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getTotalStocks.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        console.log(response)
        setDemo(response.data?.data)
        console.log(JSON.stringify(response.data, '<----333ssss'));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
    <Button style={{ float: "right",color:'#ed6c02'}} 
sx={{
'&:hover': {
 backgroundColor: '#ffd796',
},
}}  
onClick={() => {
  handleopenbusfilter()
}}
>
Filter
</Button>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <BusListFilter
          getData={getData}
          onSumbit={onSumbit}
           
            same={()=>{busesd(),handleclosebusfilter()}}
            isOpenFilter={openbusfilter}
            onOpenFilter={handleopenbusfilter}
            onCloseFilter={handleclosebusfilter}
          /> */}
          <TotalFilter
            getData={getData}
            onSumbit={onSumbit}
             
              same={()=>{busesd(),handleclosebusfilter()}}
              isOpenFilter={openbusfilter}
              onOpenFilter={handleopenbusfilter}
              onCloseFilter={handleclosebusfilter} />
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
            <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
              <StyledTableCell>ITEM</StyledTableCell>
              <StyledTableCell>Available Quantity</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(demo, "<--demodedede")}
            {demo && demo.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.current_stock}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Grid>
</div>
  );
}
