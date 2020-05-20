import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotePage from './components/NotePage/NotePage'
import MainPage from './components/MainPage/MainPage'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={MainPage} />
        </Switch>
    )
}