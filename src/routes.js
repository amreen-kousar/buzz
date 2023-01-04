import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import BusList from './pages/BusList';
import BuzzStock from './pages/BuzzStock';
import Demography from './pages/Demography';
import PlanofAction from './pages/PlanofAction';
import TravelA from './pages/TravelA';
import Project from './pages/Project';
import Chart from './pages/Charts'

// ----------------------------------------------------------------------

export default function Router() {

    const getRoutes = 
    // [
    //  { path: 'app', element: <DashboardApp /> },
    //  { path: 'buslist', element: <BusList /> },
    //  { path: 'planofaction', element: <PlanofAction /> },
    //  // { path: 'projects', element: <Blog /> },
    //  { path: 'projects', element: <Project /> },
    //  { path: 'people', element: <User /> },
    //  { path: 'BuzzStock', element: <BuzzStock /> },
    //  { path: 'profile', element: <Profile /> },
    //  { path: 'travel', element: <TravelA /> },
    //  { path: 'demogrphy', element: <Demography /> },
    // ]
    [
        { path: 'app', element: <DashboardApp />,id:[1,3,4,5]},
        { path: 'buslist', element: <BusList />, id:[1,2,3,4,5] },
        { path: 'planofaction', element: <PlanofAction />,id:[1,2,3,5] },
        //  { path: 'projects', element: <Blog />,id=[1,2,3] },
        { path: 'projects', element: <Project />,id:[1,2,3,5] },
        { path: 'people', element: <User />,id:[1,2,3,5] },
        { path: 'BuzzStock', element: <BuzzStock />,id:[1,2,3,5] },
        { path: 'profile', element: <Profile />,id:[1,2,3,5] },
        { path: 'travel', element: <TravelA />,id:[1,2,3,5] },
        { path: 'demogrphy', element: <Demography />,id:[1,2,3,5] },
        {path: 'chart', element: <Chart />,id:[1,2,3,4,5]}
    ]

	const getProjectRoutes =[
		
	]

    const data = localStorage?.getItem('userId')
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: getRoutes?.filter(itm=>itm?.id.find(it=>it==data))
        },
        {
            path: '/',
            element: <Login />,
        },
        {
            path: 'register',
            element: <Register />,
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
}