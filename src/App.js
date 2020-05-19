import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import NoteList from './components/NoteList/NoteList'
import SingleFolder from './components/Sidebar/SingleFolder/SingleFolder'
import NotePage from './components/NotePage/NotePage'
import MainPage from './components/MainPage/MainPage'
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

  // One route shows both main sidebar and note list
  // Make a grouping/wrapping component to use with route
  // pass match in and do filter on App within the render


  render() {
    console.log(this.state.folderId);
    console.log(this.state.notes);
    return (
      <div className='App'>
          <header>
            <a href="/" className="header-link">Noteful</a>
          </header>
          <main>
            {/* <MainPage folders={this.state.folders} changeFolder={this.changeFolder} notes={this.state.notes} folderId={this.state.folderId}/> */}
            <NotePage />
          </main>
      </div>
    );
  }
}

export default App;
