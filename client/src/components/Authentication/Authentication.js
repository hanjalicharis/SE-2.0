import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Paper, Button, Grid, Typography, Container } from '@material-ui/core';

import useStyles from './style';
import Input from './Input';

const Authentication = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const [isSignedUp, setIsSignedUp] = useState(false);

    const switchMode = () => {
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp)
        handleShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handleSubmit = () => {

    };
    const handleChange = () => {

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
