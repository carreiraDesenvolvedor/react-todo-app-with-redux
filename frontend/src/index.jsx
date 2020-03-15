import React from "react"
import ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import './template/custom.css'

import Menu from "./template/Menu"

import {createStore, applyMiddleware} from 'redux'

import promise from 'redux-promise';
import thunk from 'redux-thunk'
import multi from 'redux-multi'


import {Provider} from 'react-redux'

import Reducers from './redux/reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools)

const container = document.getElementById("root")
container ?
    ReactDOM.render(
            <Provider store={store} >
                <div className="container">
                    <Menu/>
                </div>
            </Provider>
        , container)

    : false