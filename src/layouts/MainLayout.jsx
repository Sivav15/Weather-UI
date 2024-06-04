import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[12%]'>
                <Sidebar />
            </div>
            <div className='w-[88%]'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout