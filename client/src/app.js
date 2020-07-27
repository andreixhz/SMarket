import React from 'react';

import Login from './screens/Login';
import Home from './screens/Home';

import {useState, useEffect} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

// import { Container } from './styles';

function app() {

    return (
        <Router>
            <Switch>
                <Route path="/"><Login /></Route>
                <Route path="/home"><Home /></Route>
            </Switch>
        </Router>
    )
}

export default app;