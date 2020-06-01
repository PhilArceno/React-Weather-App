import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'

function WeatherApp(props) {
    const position = useSelector(state => state.position)

    useEffect(() => {
    },[])
    return (
        <div>
            weather
            {position && position.latitude ? position.latitude : ''}
        </div>
    )
}

export { WeatherApp }