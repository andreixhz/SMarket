import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, ButtonBase, Paper } from '@material-ui/core';
import { FiPackage, FiUser, FiSend, FiUsers, FiShoppingCart, FiDollarSign, FiTruck, FiBarChart2,FiSettings } from 'react-icons/fi';

import HomeMenuItem from './HomeMenuItem';

const useStyles = makeStyles((theme) => ({
    
    content:{
        height: '415px',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
    },

    grid:{
        width:"560px",
        height:'100%'
    },

    btn:{
        marginRight:'16px',
        marginBottom:'16px',
        padding:'0'
    },

    item:{
        width:'128px',
        height: '128px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems:'center',
        fontSize:'15px',
        color:'#000',
    }

}));

function HomeMenu() {

    const classes = useStyles();

    return (
        <Box className={classes.content}>
            <Box className={classes.grid}>
                <HomeMenuItem to="/products" name="Products" icon={<FiPackage size={70} strokeWidth={0.6}/>}/>
                <HomeMenuItem to="/clients" name="Clients" icon={<FiUser size={70} strokeWidth={0.6}/>}/>
                <HomeMenuItem to="/sell" name="Sell" icon={<FiDollarSign size={70} strokeWidth={0.6}/>}/>
                <HomeMenuItem to="/messege" name="Messege" icon={<FiSend size={70} strokeWidth={0.6}/>} last={true}/>
                <HomeMenuItem to="/providers" name="Providers" icon={<FiTruck size={70} strokeWidth={0.6}/>}/>
                <HomeMenuItem to="/employers" name="Employers" icon={<FiUsers size={70} strokeWidth={0.6}/>}/>
                <HomeMenuItem to="/analytics" name="Analytics" icon={<FiBarChart2 size={70} strokeWidth={0.6}/>}/>
                <HomeMenuItem to="/sales" name="Sales" icon={<FiShoppingCart size={70} strokeWidth={0.6}/>} last={true}/>
                <HomeMenuItem to="/settings" name="Settings" icon={<FiSettings size={70} strokeWidth={0.6}/>}/>
            </Box>
        </Box>
    );

}

export default HomeMenu;