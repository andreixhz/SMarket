import React from 'react';
import {Container, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {FiLogOut} from 'react-icons/fi'
import { useEffect } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeMenu from '../components/Home/HomeMenu';

// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
    
    content:{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        justifyContent:"space-between",
    },

}));

function Home() {
    
    const classes = useStyles();

    return(
        <div className={classes.content}>
            <HomeHeader/>
            <HomeMenu/>
            <Box style={{padding:'35px'}}>Version: 0.1</Box>
        </div>
    )
}

export default Home;