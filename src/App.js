// https://v5.reactrouter.com/web/example/basic
// https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router, } from "react-router-dom";
import Navigation from "components/Navigation";

import Main from './components/Main';
import People from './components/People';
import Research from './components/Research';
import Publication from './components/Publication';


export default function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/people' component={People} />
                    <Route path='/research' component={Research} />
                    <Route path='/publication' component={Publication} />
                </Switch>
            </Router>
        </>
    );
}


