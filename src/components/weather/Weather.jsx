import React, { useEffect } from 'react'
import Item from './Item'
import axios from 'axios'
import HorizontalBarChart from '../HorizontalBarChart'



const Weather = () => {

    const getweather = async () => {
        const apiKey = 'feb185625e4a4755894113544240306'
        const url = `https://api.weatherapi.com/v1//forecast.json?key=${apiKey}&q=india&aqi=no&days=1`

        const { status, data } = await axios.get(url)
        console.log(data.forecast.forecastday[0]);
    }




    useEffect(() => {
        getweather()
    }, [])
    return (
        <div className="flex weathersection">
            <div className="section1">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className="section2">
                <Item />
            </div>
        </div>
    )
}

export default Weather