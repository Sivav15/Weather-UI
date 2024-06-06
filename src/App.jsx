import React, { useState } from 'react'
import './App.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
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
          path: "/",
          element: <Navigate to="/dashboard" replace />,
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