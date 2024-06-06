import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";


function SelectOption({ width }) {



    return (

        <div className="bg-[#573A9E] py-2" style={{
            border: 'none',
            outline: 'none',
            width
        }} >
            <div className='flex justify-between text-[#573A9E] items-center rounded-full py-1.5 px-2 border-solid border-[#573A9E] border-[2px]'>
                <div className='text-white'>Daily</div>
                <div><FaAngleDown color='white' /></div>
            </div>
        </div>





    );
}

export default SelectOption;
