import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import NoteList from './components/NoteList/NoteList'
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
  
  changeFolder = (folderId) => {
    console.log(`changeFolder ran and state changed`)
    this.setState({
      folderId: folderId
    })
  }

  render() {
    console.log(this.state.folderId);
    console.log(this.state.notes);
    return (
      <div className='App'>
          <header>
            <a href="/" className="header-link">Noteful</a>
          </header>
          <main>
              <div className="wrapper">
                  <Sidebar folders={this.state.folders} changeFolder={this.changeFolder}/>
                  <NoteList notes={this.state.notes} folderId={this.state.folderId}/>
              </div>
          </main>
      </div>
    );
  }
}

export default App;
