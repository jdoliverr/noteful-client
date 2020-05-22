import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routes from './Routes'
import NotefulContext from './NotefulContext';
import './App.css';
import NotefulError from './components/NotefulError/NotefulError'

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        folders: [],
        notes: [],
        addingNote: false,
        addingFolder: false,
        hasError: false
      }
  }

  setFolders = (folders) => {
    this.setState({
      folders
    })
  }

  setNotes = (notes) => {
    this.setState({
      notes
    })
  }

  addFolder = (folder) => {
    const newFolders = [...this.state.folders, folder];
    this.setState({
      folders: newFolders,
      addingFolder: false
    })
  }

  addNote = (note) => {
    const newNotes = [...this.state.notes, note];
    this.setState({
      notes: newNotes,
      addingNote: false
    })
  }

  toggleAddingNote = () => {
    console.log(`ran toggleAddingNote`);
    this.setState({
      addingNote: true
    })
  }

  toggleAddingFolder = () => {
    console.log(`ran toggleAddingFolder`);
    this.setState({
      addingFolder: true
    })
  }

  toggleHome = () => {
    this.setState({
      addingFolder: false,
      addingNote: false
    })
  }
  
  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    const folderUrl = 'http://localhost:9090/folders';
    const noteUrl = 'http://localhost:9090/notes';
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }

    fetch(folderUrl, options)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(data => {
        this.setFolders(data)
      })
      .catch(err => {
        console.log(err)
        this.setState({hasError: true}) 
      });

    fetch(noteUrl, options)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(data => {
        this.setNotes(data)
      })
      .catch(err => {
        console.log(err)
        this.setState({hasError: true}) 
      });
        
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addingNote: this.state.addingNote,
      addingFolder: this.state.addingFolder,
      toggleAddingNote: this.toggleAddingNote,
      toggleAddingFolder: this.toggleAddingFolder,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    }
    
    if(this.state.hasError) {
      throw new Error('Error')
    }
    return (
      <div className='App'>
          <header>
            <NavLink to='/' className="header-link" onClick={this.toggleHome}>Noteful</NavLink>
          </header>
          <main>
            <NotefulContext.Provider value={contextValue}>
              <Routes />
            </NotefulContext.Provider>
          </main>
      </div>
    );
  }
}

export default App;