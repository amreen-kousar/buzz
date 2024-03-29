import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// mock
import account from '../../_mock/account';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';
import defaultImage from '../../assets/images/default.png';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  // display: 'flex',
  // alignItems: 'center',
  // textAlign:'center',
  // padding: theme.spacing(2, 12),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  // backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const data = localStorage?.getItem('userId')

  var account = localStorage?.getItem('userDetails')
  account = JSON.parse(account)

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  const [filteredNavConfig, setNavConfig] = useState([])

  const roleDashboard = { 1:['1','5','6','7','8','9','10','11','12','13',],2: ['7', '5', '8', '9', '10', '12', '13'],9:['1','5','6','7','8','10','12','13'],5:['2','5','6','7','10','12','13'],12:['1','5','6','7','8','9','10','11','12','13'],4:['4','5','6','7','8','9','10','12','13'],13:['3','6','7','10','12','13'],6:['3','6','7','10','12','13'],3:['1','5','6','7','8','9','10','11','12','13'],11:['1','5','6','7','8','9','10','11','12','13']}

  useEffect(() => {
    let temp = []
    for (let r = 0; r < roleDashboard[data].length; r++) {
      let s = roleDashboard[data][r]
      // console.log(navConfig[s].id.includes(data), data, "ssssssssssssssssssssssssssssssss")
      if (navConfig[s].id.includes(data)) {
        temp.push(navConfig[s])
      }
    }
    setNavConfig(temp)
  }, [])


  let tempnavConfig = []

  console.log(filteredNavConfig, "temp navv config")

  useEffect(() => {

    // roleDashboard[data].map(r => navConfig[r].id.filter(account => itm?.find(it => it == data)))


    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);



  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Logo />
      </div>
      
      {console.log(account.displayName, account.role, "<--yghuj")}
      <Box sx={{ mb: 5, mx: 2.5 }} backgroundColor="#ff7424">
        <Link underline="none" component={RouterLink} to="/dashboard/profile">
          {/* <AccountStyle > */}
          <div style={{ paddingTop: 20, paddingLeft: 100 }}>
            <Avatar src={account?.profile_pic} alt="photoURL" />

            {/* </AccountStyle> */}</div>
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" color='#ffffff' style={{ textAlign: "center" }}>
              Welcome, {account.first_name}  ({account.role_name})
            </Typography>
            <Typography variant="body2" sx={{ color: '#ffffff' }} style={{ textAlign: 'center' }}>
            
            
            </Typography>
          </Box>
        </Link>
      </Box>

      <NavSection navConfig={filteredNavConfig} />

      <Box sx={{ flexGrow: 1 }} />

      {/* <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
          <Box
            component="img"
            src="/static/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              From only $69
            </Typography>
          </Box>

          <Button href="https://material-ui.com/store/items/minimal-dashboard/" target="_blank" variant="contained">
            Upgrade to Pro
          </Button>
        </Stack>
      </Box> */}
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
