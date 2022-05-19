// https://v5.reactrouter.com/web/example/basic
// https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, HashRouter as Router, } from "react-router-dom";

import Navigation from "gadgets/Navigation";
import Footer from 'gadgets/Footer'

import Main from 'components/Main';
import People from 'components/People';
import Research from 'components/Research';
import Publication from 'components/Publication';

import FeatureInteraction from "pages/research/FeatureInteraction";


export default function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/people' component={People} />
                    <Route exact path='/research' component={Research} />
                    <Route exact path='/publication' component={Publication} />

                    {/* custom project pages */}
                    <Route exact path='/research/feature-interaction' component={FeatureInteraction} />

                </Switch>
                <Footer />
            </Router>
        </>
    );
}


