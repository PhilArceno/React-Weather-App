import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'

interface State {
    position: {
        longtitude: number,
        latitude: number
    }
}

function WeatherApp(): JSX.Element {
    const position = useSelector((state: State) => state.position)

    useEffect(() => {
        fetchWeather
    },[])

    const fetchWeather = async () => {
        console.log('fetch weather')
        let data = new FormData
        data.append('longtitude', position.longtitude.toString())
        data.append('latitude', position.longtitude.toString())
        let weatherApi = await fetch('/get/weather', {method: 'POST', body: data});
        let response = await weatherApi.text();
        let parsed = JSON.parse(response)
        console.log(parsed)
    }

    return (
        <div>
            weather
            {position && position.latitude ? position.latitude : ''}
        </div>
    )
}

export { WeatherApp }