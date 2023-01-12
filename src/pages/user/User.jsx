import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Stack, Typography, Box, Toolbar, Button, TextField, Select, MenuItem } from '@mui/material';
// components
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
import AddUser from './AddUser';
// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  const [users, setUsers] = useState([]);
  const [ceoUser, setCeoUser] = useState([])

  const [scroll, setScroll] = useState('paper');
  const [projects, setProjects] = useState([])

  const descriptionElementRef = useRef(null);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };



  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  useEffect(() => {
    user()

  }, []
  )


  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);






  const user = async () => {
    const data = JSON.stringify({
      "search": "",
      "user_id": 310,
      "role_id": 1,
      "filter_id": 0,
      "type": "",
      "pageNum": 1
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
        let ceo = []
        response.data.list.map(r => (r.role_name === "CEO") ? ceo = [...ceo, { label: r.first_name, ...r }] : null)
        setCeoUser([...ceo])
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Page title="All Users">

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          People
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
        <ProductCartWidget />
      </Container>

      <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
        <AddUser data={ceoUser} />
      </Stack>
    </Page >
  );
}
