import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';


import hanjaries from './img/memories.jpeg';

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center"> Hanjary </Typography>
                <img src={hanjaries} height="120" alt="hanjaries-logo" />
            </AppBar>

        </Container>
    );
}

export default App;