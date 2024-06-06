import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios'
import Topcategories from '../Topcategories'
import { useSelector } from 'react-redux'
import loading from '../../assets/loading.svg'


const Weather = () => {

    const [data, setData] = useState({})
    const countryName = useSelector(state => state.sidebarReducer.countryName)
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getweather = async () => {
        setLoading(true)
        setError('')
        try {
            const apiKey = 'feb185625e4a4755894113544240306'
            const url = `https://api.weatherapi.com/v1//forecast.json?key=${apiKey}&q=${countryName}&aqi=no&days=1`

            const { status, data } = await axios.get(url)

            setData(data)
        } catch (error) {
            if (error?.response?.data?.error?.message) {
                setError(error?.response?.data?.error?.message);
                return
            }
            setError(error.message);

        } finally {
            setLoading(false)

        }

    }





    useEffect(() => {
        getweather()
    }, [countryName])

    if (isLoading) return <div className='flex justify-center items-center '>
        <img src={loading} className='w-10 h-10' alt="loading" />
    </div>;
    if (error) return <p className='text-lg font-bold text-red-600 text-center'>{error}</p>;

    return (
        <div className="flex weathersection">
            <div className="section1">
                <Item value={data?.current?.temp_c} symbol={'°C'} text={'Temperature'} />
                <Item value={data?.current?.humidity} text={'Humidity'} symbol={'💧'} />
                <Item value={data?.current?.cloud} text={'Cloud'} symbol={'☁︎'} />
                <Item value={data?.current?.temp_f} text={'Temperature'} symbol={'°F'} />
                <Item value={data?.current?.uv} text={'Uv'} />
                <Item value={data?.current?.wind_kph} text={'Wind'} symbol={'kph'} />
            </div>
            <div className="section2">

                <Topcategories data={[
                    data?.current?.temp_c,
                    data?.current?.humidity,
                    data?.current?.cloud,
                    data?.current?.temp_f,
                    data?.current?.pressure_in,
                    data?.current?.wind_kph
                ]}
                    lable={["Temp °C", 'Humidity', 'Cloud', "Temp °F", "Pressure", "Wind"]}
                />
            </div>
        </div>
    )
}

export default Weather