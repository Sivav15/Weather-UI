import React from 'react'
import Item from './Item'

const Weather = () => {
    const data = [{
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    },
    {
        width: "200px",
        height: "200px",
    }

    ]

    return (
        <div className="flex flex-wrap gap-2 pt-3 justify-center mx-auto w-full">{
            data.map((item, index) => {
                return <Item key={index} item={item} />
            })
        }</div>
    )
}

export default Weather