import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Stack, Typography, Box, Toolbar, Button, TextField, Select, MenuItem } from '@mui/material';
// components
import Pagination from '@mui/material/Pagination';

import Page from '../../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../../sections/@dashboard/products';
// mock
import PRODUCTS from '../../_mock/products';
import UserDrawer from '../Components/UserDrawer';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Autocomplete from '@mui/material/Autocomplete';
import UserFilter from '../Components/Peoplefilters/Userfilters';
// ----------------------------------------------------------------------
import Scrollbar from '../../components/Scrollbar';
import DashboardNavbar from 'src/layouts/dashboard/DashboardNavbar';
// ----------------------------------------------------------------------
import AddUser from './AddUser';

export default function User() {
  const [openFilter, setOpenFilter] = useState(false);
  const [users, setUsers] = useState([]);
  const [ceoUser, setCeoUser] = useState([])
  const [peopleFilter, setpeopleFilter] = useState(false)
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [projects, setProjects] = useState([])
  const [searchUser, setSearchUser] = useState("");
  const [page, setPage] = useState(1)
  const [count, setCount] = useState('')
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
    // getProjects()
  };

  const handleClose = () => {
    console.log(AddUser)
    setOpen(false);
  };
  const descriptionElementRef = useRef(null);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handlepeopleOpenFilter = () => {
    setpeopleFilter(true);

  };
  const submitBus = () => {
    console.log(AddUser)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handlepeopleCloseFilter = () => {
    setpeopleFilter(false);
  };
  useEffect(() => {
    user()

  }, [searchUser]
  )

  const getProjects = async (d) => {


    const data = JSON.stringify({
      "search": "",
      "id": 1,
      "role_id": 1,
      "filter_id": 0,
      "type": "",
      "pageNum": d ? d : 1
    });

    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getProjects.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setProjects(response.data)
        console.log(projects)
      })
      .catch((error) => {
        console.log(error);
      });


  }

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);



  var userAccess = ['2']

  var userIdCheck = localStorage?.getItem('userId')


  const user = async (d) => {
    const dataid = localStorage?.getItem('userDetails')
    const data = JSON.stringify({
      "search": searchUser,
      "user_id": JSON?.parse(dataid)?.id,
      "role_id": JSON?.parse(dataid)?.role,
      "filter_id": "",
      "type": "",
      "pageNum": d ? d : 1
    });

    const config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getAllPeople.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setUsers(response.data.list)

        setCount(response?.data?.total_count % 25 == 0 ? parseInt(response?.data?.total_count / 25) : parseInt(response?.data?.total_count / 25) + 1)
        let ceo = []
        response.data.list.map(r => (r.role_name === "CEO") ? ceo = [...ceo, { label: r.first_name, ...r }] : null)
        setCeoUser([...ceo])
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(users, '<------------------response.data.list')
  const pageChange = (event, newPage) => {
    setPage(newPage)
    user(newPage)
    console.log(newPage, "<----efesfdsefsd")
  }

  

  return (
    <Page title="All Users">
      <DashboardNavbar getSearch={(e) => setSearchUser(e)} onOpenSidebar={() => setOpen(true)} />

      <div>
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <UserFilter
            isOpenFilter={openFilter}
            onOpenFilter={handlepeopleOpenFilter}
            onCloseFilter={handlepeopleCloseFilter}
          />
        </Stack>
        {userAccess.includes(userIdCheck) &&
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <AddUser data={ceoUser} />
          </Stack>
        }
      </div>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          People
          <Button style={{ float: "right", color: '#ed6c02' }}
            sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
              },
            }}
            onClick={() => {
              handlepeopleOpenFilter()
            }}>Filters</Button>
        </Typography>
      

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ mb: 1 }}>
            <UserDrawer
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Stack>
        </Stack>

        <ProductList users={users} products={PRODUCTS} isOpenFilter={openFilter}
          onOpenFilter={handleOpenFilter}
          onCloseFilter={handleCloseFilter} />
        <ProductCartWidget /><br></br>
        <Pagination page={page} onChange={pageChange} rowsPerPage={25} count={count} variant="outlined" color="warning" sx={{color:"#ffd796"}} style={{float:"right"}} />
      </Container>
    </Page >
  );
}
