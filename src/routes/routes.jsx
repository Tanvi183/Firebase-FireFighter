import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children : [
            {
                index : true,
                element : <HomePage />
            },
            {
                path : '/about-us',
                element : <About />
            },
            {
                 path : '/profile',
                element : <Profile />
            },
        ]
    },
])