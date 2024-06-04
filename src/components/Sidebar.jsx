import React from 'react';
import { FaThLarge, FaUserFriends, FaFileAlt, FaCog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

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
        <nav className='fixed top-0 left-0'>
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
