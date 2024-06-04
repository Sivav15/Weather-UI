import React from 'react'
import { FaBell, FaCircle } from 'react-icons/fa';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import SelectOption from '../components/SelectOption';


const Dashboard = () => {
    return (
        <div className='text-slate-500 w-full'>
            <div className='flex justify-end px-10 py-3'>
                <div className='flex gap-5'>
                    <FaBell />
                    <FaCircle />
                </div>
            </div>

            <div className=' w-10/12 mx-auto'>
                <div className='bg-[#573A9E]  mx-auto my-5 rounded-3xl px-5 flex flex-wrap items-center  text-white'>
                    <div className='w-3/12'>
                        <SelectOption width={'12rem'} />
                    </div>

                    <div className='w-3/12 py-1 '>
                        <span >Total Earnings</span>
                        <span className='font-semibold text-lg pl-2 text-[#E1949E]'>$54.36</span>
                    </div>
                    <div className='w-3/12 py-1 '>
                        <span>Total Space</span>
                        <span className='font-semibold text-lg pl-2 text-[#E1949E]'>$54.36</span>
                    </div>
                    <div className='w-3/12 py-1'>
                        <span>Total posts</span>
                        <span className='font-semibold text-lg pl-2 text-[#E1949E]'>72</span>
                    </div>

                </div>
                <div className='mt-10'>
                    <div className='flex justify-between px-5 flex-wrap'>
                        <div className='flex gap-16 items-start'>
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
                        <div className='flex flex-col gap-3'>
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
            </div>

        </div >
    )
}

export default Dashboard