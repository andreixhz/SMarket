import React from 'react';
import {Box, TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ipcRenderer } from 'electron';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	inputText: {
		marginButtom: '25px',
		width: '300px',
		height: '70px'
	},

	logo:{
		marginBottom:'72px'
	},
	btn:{
		color:'#fff',
		width:'100px',
		height:'35px'
	}

}));
  

function Login() {
	const classes = useStyles();

	const [color, setColor] = useState('#f1f1f1');
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		ipcRenderer.send ('getConfig', '');
	}, [])

	ipcRenderer.on('getConfig', (e, args) => {
		setColor(args.color);
		setLoaded(true);
	});

	return (
		<div className="d-flex d-all-center">
		{
			loaded ? 
				<form>
					<Box alignItems="center" display="flex" flexDirection="column">
						<img src="http://localhost:3325/cfg/logo" height="77" width="180" className={classes.logo}/>
						<TextField id="standard-basic" label="Usuario" variant="outlined" className={classes.inputText} />
						<TextField id="standard-basic" type="password" label="Senha" variant="outlined" className={classes.inputText} />
						<Button variant="contained" className={classes.btn} style={{backgroundColor:color}}>
							Login
						</Button>
					</Box>
				</form>
			: ''
			
		}
		</div>
	);
}

export default Login;