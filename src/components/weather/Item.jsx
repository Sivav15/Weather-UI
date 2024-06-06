import React from "react";


const Item = ({ value, symbol, text }) => {
    return (
        <div style={{
            backgroundColor: 'white'

        }} className='item'>
            <div className=" max-sm:pt-2  max-sm:px-2 sm:p-3 max-md:font-semibold max-md:text-md md:font-semibold md:text-lg">
                {text}
            </div>
            <div className=' max-md:font-semibold max-md:text-md md:font-bold md:text-lg pl-2 text-[#573A9E]  flex justify-center items-center h-[50%]'>
                <div>
                    {value} {symbol}
                </div>
            </div>
        </div>
    );
};

export default Item;
