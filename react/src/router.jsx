import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Surveys from './components/Surveys';
import Login from './components/Login';
import Signup from './components/Signup';
import GuestLayout from './components/Layouts/GuestLayout';
import { Children } from 'react';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>
    },
    {
        path: '/surveys',
        element: <Surveys/>
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    }
    
])

export default router;