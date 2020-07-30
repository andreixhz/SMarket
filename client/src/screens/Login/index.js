import React from 'react';
import {Box, TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ipcRenderer } from 'electron';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
	inputText: {
		marginBottom: '10px',
		width: '300px',
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
	const history = useHistory();

	const classes = useStyles();

	const [color, setColor] = useState('#f1f1f1');
	const [loaded, setLoaded] = useState(false);
	const [err, setErr] = useState('');

	const [userlogin, setuserlogin] = useState('');
	const [password, setPassword] = useState('');


	useEffect(() => {
		ipcRenderer.send ('getConfig', '');
	}, [])

	ipcRenderer.on('getConfig', (e, args) => {
		setColor(args.color);
		setLoaded(true);
	});

	function HandleLoginClick(e){

		if(userlogin === '') return;
		if(password === '') return;

		fetch('http://localhost:3325/auth', {
			method: 'POST',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({userlogin, password})
		}).then(response => {
			response.json().then(data => {
				localStorage.removeItem('user');
				if(data.status.msg === 'user_not_found'){
					setErr('User not found');
					return;
				}
				localStorage.setItem('user', JSON.stringify(data));
				history.push('/home')

			}).catch(err => console.log(err))
		}).catch(err => console.log(err))

	}

	const handleSubmit = e => e.preventDefault();
	const handleName = e => setuserlogin(e.target.value);
	const handlePassword = e => setPassword(e.target.value);

	return (
		<div className="d-flex d-all-center">
		{
			loaded ? 
				<form onSubmit={handleSubmit}>
					<Box alignItems="center" display="flex" flexDirection="column">
						<img src="http://localhost:3325/cfg/logo" height="77" width="180" className={classes.logo}/>
						<TextField required onChange={handleName} margin="dense" id="standard-basic" label="Usuario" variant="outlined" className={classes.inputText} />
						<TextField required onChange={handlePassword} margin="dense" id="standard-basic" type="password" label="Senha" variant="outlined" className={classes.inputText} />
						<Button onClick={HandleLoginClick} type="submit" variant="contained" className={classes.btn} style={{backgroundColor:color}}>
							Login
						</Button>
						<div style={{marginTop: 10, height:'40px'}}>
							<p>{err}</p>
						</div>
					</Box>
				</form>
			: ''		
		}
		</div>
	);
}

export default Login;