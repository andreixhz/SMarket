import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    btn:{
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

function HomeMenuItem({to, icon, name, last}) {

    const classes = useStyles();
    const history = useHistory();

    return (
        <ButtonBase onClick={() => {history.push(to)}} className={classes.btn} style={{marginRight: !last ? 16 : 0}}>
            <Paper elevation={2} className={classes.item} >
                {icon}
                {name}
            </Paper>
        </ButtonBase>
    );
}

export default HomeMenuItem;