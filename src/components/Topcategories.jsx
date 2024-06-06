import React from 'react'
import HorizontalBarChart from './HorizontalBarChart'

const Topcategories = ({ data, lable }) => {
    return (
        <div style={{
            backgroundColor: 'white'
        }} className='item lg:pt-5 xl:pt-10'>


            <HorizontalBarChart data={data} lable={lable} />
        </div>
    )
}

export default Topcategories