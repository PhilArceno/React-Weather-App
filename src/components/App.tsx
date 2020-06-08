import React from 'react'
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom'
import * as Pages from '../pages'

const renderHomePage = (routerData: RouteComponentProps): JSX.Element => {
    return <Pages.HomePage history={routerData.history}/>
}

// const renderWeatherApp = (routerData: RouteComponentProps): JSX.Element => {
//     return <Pages.WeatherApp/>
// }

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" render={renderHomePage}/>
                {/* <Route exact={true} path="/weather" render={renderWeatherApp}/> */}
                <Route>{'404'}</Route>
            </Switch>
        </BrowserRouter>
    )
}