import React from 'react'
import SelectOption from './SelectOption'

function Header() {
    return (
        <div className=' bg-[#573A9E] max-md:flex-col mx-auto my-1 rounded-3xl px-5 flex flex-wrap md:items-center justify-around text-white xl::gap-10 md:gap-2'>
            <div className='w-[12rem]'>
                <SelectOption width={'9rem'} />
            </div>

            <div className='py-1 '>
                <span >Total Earnings</span>
                <span className='font-semibold text-lg pl-2 text-[#E1949E]'>$54.36</span>
            </div>
            <div className=' py-1 '>
                <span>Total Space</span>
                <span className='font-semibold text-lg pl-2 text-[#E1949E]'>$54.36</span>
            </div>
            <div className='py-1'>
                <span>Total posts</span>
                <span className='font-semibold text-lg pl-2 text-[#E1949E]'>72</span>
            </div>

        </div>
    )
}

export default Header