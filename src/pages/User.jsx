import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Stack, Typography, Box } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import UserDrawer from './Components/UserDrawer';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  const [users, setUsers] = useState([]);
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
      url: 'http://3.7.7.138/appTest/getAllPeople.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        setUsers(response.data.list)
        console.log(response.data);
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
    </Page>
  );
}
