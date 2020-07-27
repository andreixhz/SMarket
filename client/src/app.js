import React from 'react';
import Loading from './screens/Loading';
import Login from './screens/Login/index';
import Home from './screens/Home';

const { ipcRenderer } = require('electron')

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
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Loading}/>
            </Switch>
        </BrowserRouter>
    )
    
}

export default App

