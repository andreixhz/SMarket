import React from 'react';

// import { Container } from './styles';


const { ipcRenderer } = require('electron')
import { useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react';

function Loading() {
    const history = useHistory();

    useEffect(() => {
        ipcRenderer.send('initApp', 'null');
    }, [])

    ipcRenderer.on('initAppCallback', (e,data) => {
        if(!data){
            fetch('http://localhost:3325/cfg/', {method: 'GET', mode: 'cors'}).then(response => {
                response.json().then(data => {
                    ipcRenderer.send('saveConfig', data);
                })
            })
        } else {
            history.push("/login");
        }
    });

    ipcRenderer.on('saveConfigCallback', (e, data) => {
        history.push("/login");
    })
    
  return <div>LOADING</div>;
}

export default Loading;