import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotePage from './components/NotePage/NotePage';
import MainPage from './components/MainPage/MainPage';


class Routes extends React.Component {

    
    render() {
        return (
            <Switch>
                <Route 
                    exact path='/' 
                    component={MainPage}
                />
                <Route 
                    path='/folder/:folderId'
                    render={(routeProps) => {
                        return (
                        <MainPage
                            folderId={routeProps.match.params.folderId}
                        />
                        )
                    }}
                />
                <Route 
                    path='/note/:noteId'
                    render={(routeProps) => {
                        return (
                        <NotePage
                            noteId={routeProps.match.params.noteId}
                            onHomeClick={() => routeProps.history.push('/')}
                        />)
                    }}
                />
            </Switch>
        )
    }
}

export default Routes