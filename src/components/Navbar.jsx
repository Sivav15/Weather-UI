import React from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function Navbar() {
    return (
        <div >
            <div className='flex justify-between px-5 flex-wrap'>
                <div className='flex max-sm:gap-12 sm:gap-16 items-start mt-10'>
                    <div className=' font-semibold text-lg border-solid border-[#E1949E] border-b-4 rounded-sm pb-2'>
                        <span className='px-2'>overall</span>
                    </div>
                    <div className=' font-semibold text-lg border-solid border-[#E1949E] border-b-4 rounded-sm pb-2'>
                        <span className='px-2'>Platform</span>
                    </div>
                    <div className=' font-semibold text-lg border-solid border-[#E1949E] border-b-4 rounded-sm pb-2'>

                        <span className='px-2'>Platform</span>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-10'>
                    <div className='flex justify-between items-center gap-1 text-white bg-[#E1949E] rounded-full py-1.5 px-2'>
                        <div>19 April 24</div>
                        <div>-</div>
                        <div>09 May 24</div>
                    </div >
                    <div className='flex justify-between text-[#573A9E] items-center rounded-full py-1.5 px-2 border-solid border-[#573A9E] border-[2px]'>
                        <div>Selected Account</div>
                        <div><FaAngleDown /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar