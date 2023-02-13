// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = {
  1:
  {
    title: 'Main',
    path: '/dashboard/app',
    icon: getIcon("ic:baseline-home"),
    id: ['0', '1', '3', '7', '8', '9', '12']
  },
  2: {

    title: 'dashboard',
    path: '/dashboard/trainer',
    icon: getIcon('ic:baseline-home'),
    id: ['5']
  },
  3: {
    title: 'dashboard',
    path: '/dashboard/gelathi',
    icon: getIcon('ic:baseline-home'),
    id: ['6', '13']
  },
  4: {
    title: 'dashboard',
    path: '/dashboard/operationmanager',
    icon: getIcon('ic:baseline-home'),
    id: ['4']
  },
  5: {
    title: 'BusList',
    path: '/dashboard/buslist',
    icon: getIcon('mdi:bus-stop'),
    id: ['0', '1', '2', '3', '4', '5', '6', '9', '7', '8', '12']
  },
  6: {
    title: 'Plan Of Action',
    path: '/dashboard/planofaction',
    icon: getIcon('mdi:clipboard-text'),
    id: ['0', '1', '3', '4', '5', '6', '7', '9', '8', '12', '13']
  },
  7: {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: getIcon('ic:baseline-library-books'),
    id: ['0', '1', '2', '3', '4', '5', '6', '7', '9', '8', '12', '13']
  },

  8: {
    title: 'People',
    path: '/dashboard/people',
    icon: getIcon('eva:people-fill'),
    id: ['0', '1', '2', '3', '4', '12']
  },
  9: {
    title: 'Buzz Stock',
    path: '/dashboard/BuzzStock',
    icon: getIcon('ant-design:stock-outlined'),
    id: ['0', '1', '2', '3', '4', '12']
  },
  10: {
    title: 'My Profile',
    path: '/dashboard/profile',
    icon: getIcon('mdi:user'),
    id: ['0', '1', '2', '3', '4', '5', '6', '9', '7', '8', '12', '13']
  },
  11: {
    title: 'Demography',
    path: '/dashboard/demogrphy',
    icon: getIcon('material-symbols:demography'),
    id: ['0', '1', '3', '12']
  },
  12: {
    title: 'Travel Allowance',
    path: '/dashboard/travel',
    icon: getIcon('mdi:wallet-travel'),
    id: ['0', '1', '2', '3', '4', '5', '6', '9', '7', '8', '12', '13']
  },
  13: {
    title: 'Logout',
    path: '/dashboard/logout',
    icon: getIcon('material-symbols:exit-to-app'),
    id: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '11', '12', '13']
  },

};



export default navConfig;