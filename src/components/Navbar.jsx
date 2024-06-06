import React from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from '../features/sidebarSlice';

function Navbar() {

    const countryName = useSelector(state => state.sidebarReducer.countryName)
    const dispatch = useDispatch()



    return (

        <div className='flex justify-between px-5 flex-wrap items-start'>
            <div className='flex max-sm:gap-12 sm:gap-10 items-start mt-5'>
                <div className=' font-semibold  max-md:text-md md:text-lg border-solid  rounded-sm pb-2'>
                    <span className='px-2'>overall</span>
                </div>
                <div style={{

                }} className={`font-semibold max-md:text-md md:text-lg border-solid cursor-pointer ${countryName === 'india' && 'border-[#E1949E]'} border-b-[3px] rounded-sm pb-2`}
                    onClick={() => {
                        if (countryName === 'india') {
                            return
                        }
                        dispatch(setCountry('india'))
                    }} >
                    <span className='px-2'>India</span>
                </div>

                <div className={`font-semibold max-md:text-md md:text-lg border-solid cursor-pointer ${countryName === 'russia' && 'border-[#E1949E]'} border-b-[3px] rounded-sm pb-2`} onClick={() => {
                    if (countryName === 'russia') {
                        return
                    }
                    dispatch(setCountry('russia'))
                }}>
                    <span className='px-2'>Russia</span>
                </div>

            </div>
            <div className='flex flex-col gap-3 mt-5'>
                <div className='flex justify-between items-center gap-1 text-white bg-[#E1949E] rounded-full py-1 px-2'>
                    <div className='max-md:text-sm md:text-md'>19 April 24</div>
                    <div className='max-md:text-sm md:text-md'>-</div>
                    <div className='max-md:text-sm md:text-md'>09 May 24</div>
                </div >
                <div className='flex justify-between text-[#573A9E] items-center rounded-full py-1 px-2 border-solid border-[#573A9E] border-[2px]'>
                    <div className='max-md:text-sm md:text-md'>Selected Account</div>
                    <div><FaAngleDown /></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar