import React from 'react'
import { FaBell, FaCircle } from 'react-icons/fa';

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { menuToggle } from '../features/sidebarSlice';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Weather from '../components/weather/Weather';


const Dashboard = () => {
    const toggle = useSelector(state => state.sidebarReducer.menuToggle)
    const dispatch = useDispatch()

    return (
        <div className='text-slate-500 w-full '>
            <div className='flex justify-between  px-5 py-3 sticky top-0 bg-[#F7ECEB]'>
                <div className='flex gap-2 m-icon'>
                    <AiOutlineMenuUnfold style={{ cursor: 'pointer' }} color={'black'} size={25} onClick={() => dispatch(menuToggle(!toggle))} />
                </div>
                <div className='flex gap-5'>
                    <FaBell />
                    <FaCircle />
                </div>
            </div>

            <div className=' max-sm:w-11/12 sm:w-11/12 md:10/12 mx-auto'>
                <Header />
                <Navbar />
                <Weather />
            </div>

        </div >
    )
}

export default Dashboard