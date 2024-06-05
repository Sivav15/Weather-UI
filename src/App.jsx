import React, { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Connect from './pages/Connect';
import Report from './pages/Report';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';


const App = () => {

  const [toggle, setToggle] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout toggle={toggle} setToggle={setToggle} />,
      children: [
        {
          index: true,
          element: <Dashboard toggle={toggle} setToggle={setToggle} />,
        },
        {
          path: "dashboard",
          element: <Dashboard toggle={toggle} setToggle={setToggle} />,
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