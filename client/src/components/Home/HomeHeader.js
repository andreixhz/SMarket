import React from 'react';
import {Box, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {FiLogOut} from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    
    headerTop:{
        display: "flex",
        justifyContent: "space-between",
        padding:"35px"
    },

    userOptions:{
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        
    },

    userOptionsAlt:{
        display: 'flex',
        marginRight: '10px',
        flexDirection: 'column',
        alignItems: 'center'
    }
    
}));


function HomeHeader() {
    const classes = useStyles();
	const history = useHistory();
    const [user, setUser] = useState({data:{nome:'a', sobrenome:'a'}});
    const [myFunc, setMyFunc] = useState('none');

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('user'));
        if(local.data.type === 0){
            setMyFunc('Administrator');
        }
        if(local.data.type === 1){
            setMyFunc('Employer');
        }
        setUser(local);
    }, []);

    function Logout(){
        console.log('A');
        localStorage.removeItem('user');
        history.push('/login');
    }

    return (
        <Box className={classes.headerTop}>
            <img width="90px" height="40px" src="http://localhost:3325/cfg/logo"/>
            <Box className={classes.userOptions}>
                <Box className={classes.userOptionsAlt}>
                    <Box>
                        {user.data.nome} {user.data.sobrenome}
                    </Box>
                    <Box>
                        ({myFunc})
                    </Box>
                </Box>
                <Box>
                    <Button onClick={Logout} style={ { padding:0 }}>
                        <FiLogOut strokeWidth={1} size={40}/>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeHeader;