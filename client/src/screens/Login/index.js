import React from 'react';
import {Box, TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Style';

const useStyles = makeStyles((theme) => ({
	inputText: {
		marginButtom: '25px',
		width: '300px',
		height: '70px'
	},

	logo:{
		marginBottom:'72px'
	}

}));
  

function Login() {
	const classes = useStyles();
	return (
		<div className="d-flex d-all-center">
			<form>
				<Box alignItems="center" display="flex" flexDirection="column">
					<img src="http://localhost:3325/cfg/logo" height="77" width="180" className={classes.logo}/>
					<TextField id="standard-basic" label="Usuario" variant="outlined" className={classes.inputText} />
					<TextField id="standard-basic" label="Senha" variant="outlined" className={classes.inputText} />
					<Button variant="contained" color="#f1f1f1">
						Primary
					</Button>
				</Box>
			</form>
		</div>
	);
}

export default Login;