import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as Pages from '../pages'

const renderHomePage = routerData => {
    return <Pages.HomePage/>
}

export default function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Route exact={true} path="/" render={renderHomePage}/>
            </div>
        </BrowserRouter>
    )
}