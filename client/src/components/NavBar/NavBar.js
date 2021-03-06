import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'

import useStyles from './styles';
import hanjaries from '../../img/memories.jpeg';

const NavBar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    };

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decoded = decode(token);
            if (decoded.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center"> Hanjary </Typography>
                <img className={classes.image} src={hanjaries} height="120" alt="hanjaries-logo" />
            </div>
            <Toolbar className={classes.toolbar} >
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button id="LogoutButton" variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary" id="NavbarLogin" >SIGN IN</Button>
                    )}
            </Toolbar >
        </AppBar>
    );
}

export default NavBar
