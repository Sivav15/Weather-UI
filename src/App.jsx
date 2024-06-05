import React, { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Connect from './pages/Connect';
import Report from './pages/Report';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';


const App = () => {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "connect",
          element: <Connect />,
        },
        {
          path: "report",
          element: <Report />,
        },
        {
          path: "settings",
          element: <Settings />,
        },

      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App