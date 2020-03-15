import React,{Component} from 'react'

import Todo from '../todo/Todo'
import About from '../about/About'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default props => (
    <Router>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <i className={"fa fa-calendar-check-o"}></i>
                        ToDo
                    </a>
                </div>
                <ul className="nav navbar-nav">

                    <li>
                        <Link to="/todos">Tasks</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <Switch>
            <Route path="/todos">
                <Todo />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route exact path="/">
                <Todo />
            </Route>
        </Switch>

    </Router>
)