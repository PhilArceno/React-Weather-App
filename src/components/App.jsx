import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as Pages from '../pages'

const renderHomePage = routerData => {
    return <Pages.HomePage history={routerData.history}/>
}

const renderWeatherApp = routerData => {
    return <Pages.WeatherApp/>
}

export default function App(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" render={renderHomePage}/>
                <Route exact={true} path="/weather" render={renderWeatherApp}/>
                <Route>{'404'}</Route>
            </Switch>
        </BrowserRouter>
    )
}