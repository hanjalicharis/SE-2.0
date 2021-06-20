import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Paper, Button, Grid, Typography, Container, Icon } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './style';
import Input from './Input';
import GoogleIcon from './googleIcon';
import { signin, signup } from '../../actions/auth';

const initial = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Authentication = () => {

    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initial);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const switchMode = () => {
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp)
        setShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignedUp) {
            dispatch(signup(formData, history));
        }
        else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');

        } catch (error) {
            console.log(error)
        }
    };
    const googleFailure = () => {
        console.log("Google sign in/up failed. Please try again later.")
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5"> {isSignedUp ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        {
                            isSignedUp && (
                                <>
                                    <Input name="firstName" label="First name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last name" handleChange={handleChange} half />
                                </>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignedUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignedUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="906589705303-omdfcai8rilmgvf92pahv8avoijbkl9k.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<GoogleIcon />}
                                variant="contained"> Sign in with Google</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignedUp ? 'Already have an account? Sign in!' : "New to this site? Sign up!"}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Authentication;
