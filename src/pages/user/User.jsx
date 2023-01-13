import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Stack, Typography, } from '@mui/material';
// components
import Page from '../../components/Page';
import { ProductList, ProductCartWidget, } from '../../sections/@dashboard/products';
// mock
import PRODUCTS from '../../_mock/products';
import UserDrawer from '../Components/UserDrawer';

import AddUser from './AddUser';
// ----------------------------------------------------------------------

export default function UserHome() {

  var userAccess = ['2']

  var userIdCheck = localStorage?.getItem('userId')

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
       
      </Container>
      {userAccess.includes(userIdCheck) &&
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <AddUser data={ceoUser} />
        </Stack>
      }
    </Page >
  );
}
