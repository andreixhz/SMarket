import React from 'react';
import Login from './screens/Login/index';
import Home from './screens/Home';

import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

// import { Container } from './styles';

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
    
}

export default App

