import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Card, CardActions, CardContent, Button, TextField, Grid, Checkbox, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

export default function LoginForm() {
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = async () => {
		navigate('/dashboard/app', { replace: true });
	};

	return (
		<>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item md={6}>
							<TextField id="firstName" label="First Name" fullWidth='true' variant='outlined' autoFocus='true' />
						</Grid>
						<Grid item md={6}>
							<TextField id="lastName" label="Last Name" fullWidth='true' variant='outlined' />
						</Grid>
						<Grid item md={12}>
							<TextField id="emailID" label="Email ID" fullWidth='true' variant='outlined' />
						</Grid>
						<Grid item md={8}>
							<TextField id="phoneNumber" label="Phone Number" fullWidth='true' variant='outlined' type="number" inputProps={{maxLength: 10}} />
						</Grid>
						<Grid item md={4}>
							<Button fullWidth='true' variant="contained" size='large'>Send OTP</Button>
						</Grid>
						<Grid item md={12}>
							<TextField id="otp" label="Enter OTP" fullWidth='true' variant='outlined' />
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Button style={{ marginLeft: '18px' }} fullWidth='true' variant="contained" onClick={() => onSubmit()}>Login</Button>
				</CardActions>
			</Card>
		</>
	);
}
