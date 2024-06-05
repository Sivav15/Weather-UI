import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import './homeLayout.css'

const MainLayout = ({ toggle, setToggle }) => {
    return (
        <div className='flex-container w-full'>
            <div className='sidebar'>
                <Sidebar toggle={toggle} setToggle={setToggle} />
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout