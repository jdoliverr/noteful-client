import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotePage from './components/NotePage/NotePage'
import MainPage from './components/MainPage/MainPage'
import STORE from './store'


class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          folders: STORE.folders,
          notes: STORE.notes,
          folderId: 'all'
          
        }
    }
    
    render() {
        return (
            <Switch>
                <Route 
                    exact path='/' 
                    render={() => {
                        const folderId = 'all'
                        return (
                        <MainPage 
                            folders={this.state.folders}
                            notes={this.state.notes}
                            folderId={folderId}
                        />)
                    }}
                />
                <Route 
                    path='/folder/:folderId'
                    render={(routeProps) => {
                        const currentNotes = this.state.notes.filter(note => note.folderId === routeProps.match.params.folderId);
                        return (
                        <MainPage
                            folders={this.state.folders}
                            notes={currentNotes}
                            folderId = {routeProps.match.params.folderId}
                        />
                        )
                    }}
                />
                <Route 
                    path='/note/:noteId'
                    render={(routeProps) => {
                        const currentNote = this.state.notes.find(note => note.id === routeProps.match.params.noteId);
                        console.log(currentNote)
                        return (
                        <NotePage
                            folders={this.state.folders}
                            currentNote={currentNote}
                            onHomeClick={() => routeProps.history.push('/')}
                        />)
                    }}
                />
            </Switch>
        )
    }
}

export default Routes