import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar';
import Authentication from './components/Authentication/Authentication';

const App = () => {

    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/auth" exact component={Authentication} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;