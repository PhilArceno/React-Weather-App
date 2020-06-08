import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import React from "react"
import App from './components/App'
import './components/main.css'
import { store } from './store'

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>  
, document.getElementById('root'))