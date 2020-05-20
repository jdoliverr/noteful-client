import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import NoteList from './components/NoteList/NoteList'
import SingleFolder from './components/Sidebar/SingleFolder/SingleFolder'
import NotePage from './components/NotePage/NotePage'
import MainPage from './components/MainPage/MainPage'
import Routes from './Routes'
import STORE from './store'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes,
      folderId: 'all'
      
    }
  }

  changeNotes = (folderId) => {
    console.log(`changeNotes ran`)
    const currentNotes = STORE.notes.filter(notes => notes.id !== folderId);
    this.setState({
      notes: currentNotes
    })
  }

  resetFolderId = () => {
    this.setState({
      folderId: 'all'
    })
  }
  
  changeFolder = (folderId) => {
    console.log(`changeFolder ran and state changed`)
    this.setState({
      folderId: folderId
    })
  }

  // One route shows both main sidebar and note list
  // Make a grouping/wrapping component to use with route
  // pass match in and do filter on App within the render


  render() {
    console.log(this.state.folderId);
    console.log(this.state.notes);
    

    return (
      <div className='App'>
          <header>
            <NavLink to='/' className="header-link">Noteful</NavLink>
          </header>
          <main>
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
          </main>
      </div>
    );
  }
}

export default App;

