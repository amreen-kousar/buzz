// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
    id: [1, 3, 4]
  },
  {
    title: 'dashboard',
    path: '/dashboard/trainer',
    icon: getIcon('eva:pie-chart-2-fill'),
    id: [5]
  },
  {
    title: 'dashboard',
    path: '/dashboard/gelathi',
    icon: getIcon('eva:pie-chart-2-fill'),
    id: [6]
  },
  {
    title: 'Plan Of Action',
    path: '/dashboard/planofaction',
    icon: getIcon('mdi:call-to-action'),
    id: [1, 3, 5, 6]
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: getIcon('grommet-icons:projects'),
    id: [1, 2, 3, 5, 6]
  },
  {
    title: 'BusList',
    path: '/dashboard/buslist',
    icon: getIcon('mdi:bus-stop'),
    id: [1, 2, 3, 4, 5]
  },
  {
    title: 'People',
    path: '/dashboard/people',
    icon: getIcon('eva:people-fill'),
    id: [1, 2, 3]
  },
  {
    title: 'Buzz Stock',
    path: '/dashboard/BuzzStock',
    icon: getIcon('ant-design:stock-outlined'),
    id: [1, 2, 3]
  },
  {
    title: 'My Profile',
    path: '/dashboard/profile',
    icon: getIcon('healthicons:ui-user-profile-negative'),
    id: [1, 2, 3, 5, 6]
  },
  {
    title: 'Demography',
    path: '/dashboard/demogrphy',
    icon: getIcon('material-symbols:demography'),
    id: [1, 3]
  },
  {
    title: 'Travel Allowance',
    path: '/dashboard/travel',
    icon: getIcon('map:travel-agency'),
    id: [1, 2, 3, 5, 6]
  },
  {
    title: 'Logout',
    path: '/dashboard/logout',
    icon: getIcon('material-symbols:exit-to-app'),
    id: [1, 2, 3, 5, 6]
  },

];

export default navConfig;