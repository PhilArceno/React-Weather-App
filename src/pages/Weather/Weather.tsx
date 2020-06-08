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
    },[])

    return (
        <div>
            weather
            {position && position.latitude ? position.latitude : ''}
        </div>
    )
}

export { WeatherApp }