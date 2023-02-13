import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles'
import { red } from '@mui/material/colors';
import defaultImage from '../../../assets/images/default.png'
import { Card, CardContent, Grid, Typography, Avatar, Badge, Button } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: 'ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""',
//     },
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0,
//     },
//   },
// }));

export default function ProductList({ isOpenFilter, onOpenFilter, onCloseFilter, products, users, ...other }) {

  const viewUser = (itm) => {
    localStorage.setItem('people', JSON.stringify(itm))
    onOpenFilter()
  }

  return (
    <>
      <Grid container spacing={3} {...other}>
        {/* {users.map((product) => ( */}
        {users.map((itm, index) => (
          <Grid key={index} item xs={4} sm={4} md={4} >
            {/* <Button> */}

            <Card onClick={() => { viewUser(itm) }}>
              <CardContent>
                <Grid direction={'column'} spacing={2} height="180px">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img style={{ borderRadius: 50 }} src={itm?.profile_pic && itm.profile_pic != '1' ? itm?.profile_pic : defaultImage} />
                  </div>
                  {/* <Avatar sx={{ bgcolor: red[500], width: 50, height: '16vh', bgcolor: '#ff7424' }} src={itm?.profile_pic} aria-label="recipe">
                  {itm?.first_name.substring(0, 1)}
                </Avatar> */}
                  <Typography sx={{ fontSize: 20, fontWeight: 'medium' }} mt={3} textAlign={'center'} >
                    {/* {users?.first_name} */}
                    {`${itm?.first_name} ${itm?.last_name}`}
                  </Typography>
                  <div style={{ textAlign: "center", fontSize: "0.8rem" }}>
                    {itm?.role_name}
                  </div>
                </Grid>
              </CardContent>
            </Card>
            {/* </Button> */}
            {/* <ShopProductCard product={product} /> */}
          </Grid>
        ))
        }

      </Grid>{users?.length == 0 && (

        <div>
          <h1 style={{ fontWeight: 900, textAlign: 'center' }}><br />Data not found</h1>
        </div>

      )}</>
  );
}
