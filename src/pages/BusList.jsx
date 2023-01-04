import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState,useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Chip,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Grid
} from '@mui/material';
import axios from 'axios';

// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import BuslistDrawer from './Components/BuslistDrawer';


// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [clcikData,setClickData] = useState()

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [buses,setBuses] = useState();
  useEffect(()=>{
    busesd()
    },[]
    )
  const busesd = async () => {
  const data = JSON.stringify({
    "date": "",
    "role_id": 1,
    "project_id": "",
    "taluk_id": "",
    "district_id": "",
    "funder_id": "",
    "emp_id": 206
  });
  
  const config = {
    method: 'post',
    url: 'http://3.7.7.138/appTest/getBuses.php',
    headers: { 
      'Content-Type': 'application/json'
    },
     data
  };
 
  axios(config)
 
  .then((response)=> {
    setBuses(response?.data)
    console.log(JSON.stringify(response.data));
  })
  .catch( (error)=> {
    console.log(error);
  });
}

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            All Bus List
          </Typography>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>
        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}> */}
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <BuslistDrawer
            clcikData={clcikData}
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
        {/* </Stack> */}
        {buses?.list?.map((itm)=>{
return(
        <Card style={styles.card1} onClick={()=>{
          setClickData(itm)
          handleOpenFilter()}}>
           
          <Grid pt={1} pb={1} container xs={12} md={4}  direction="row" alignItems="center" justifyContent="space-between" style={{marginLeft:15}}>
          <Typography variant="subtitle1" gutterBottom >
           { `Bus Number : ${itm?.register_number}`}
            </Typography>
            
            <Typography variant="subtitle1" gutterBottom>
             {` Project Name : ${itm?.project_name}`}
              </Typography>
              </Grid>
              <Grid style={{marginLeft:15}}>
            <Typography variant="subtitle2" gutterBottom >
              Today Checklist Status : <Chip label="Published" size="small" color="success" variant="outlined" />

              </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'#707EA3'}}>
              Checked/Total : 0/16
              </Typography>
          </Grid>
        </Card>)
        })}

      </Container>
    </Page>
  );
}
const styles = {
  card1: {
   backgroundColor:'#f5f5f5',
   opacity:0.9,
   marginTop:"10px"
  },
}