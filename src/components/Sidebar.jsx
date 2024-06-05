import React, { useEffect, useState } from 'react';
import { FaThLarge, FaUserFriends, FaFileAlt, FaCog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './sidebar.css'
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { menuToggle } from '../features/sidebarSlice';

const Sidebar = () => {

    const toggle = useSelector(state => state.sidebarReducer.menuToggle)
    const dispatch = useDispatch()

    const values = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: <FaThLarge size={17} />,
        },
        {
            name: 'Connect',
            path: '/connect',
            icon: <FaUserFriends size={17} />,
        },
        {
            name: 'Report',
            path: '/report',
            icon: <FaFileAlt size={17} />,
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: <FaCog size={17} />,
        }
    ];



    return (
        <nav className='nav-bar relative' style={toggle ? {
            left: '0',
        } : {}}>
            <div className='absolute left-48 py-2.5 px-1.5 cursor-pointer x-icon'>
                <FaXmark size={25}
                    onClick={() => dispatch(menuToggle(!toggle))}
                />
            </div>
            <div className=' bg-[#573A9E] h-screen rounded-tr-3xl'>
                <div className='py-5 text-center font-bold text-white tracking-normal'>Platform</div>
                {values.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive, isPending }) => (
                            "flex gap-2 items-center px-10 mb-4 font-semibold" +
                            (isActive ? " text-[#E1949E]" : " text-white")
                        )}
                    >
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Sidebar;
