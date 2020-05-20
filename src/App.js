import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routes from './Routes'
import NotefulContext from './NotefulContext';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        folders: [],
        notes: []
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
      .catch(err => console.log(err));

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
      .catch(err => console.log(err));
        
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes
    }

    return (
      <div className='App'>
          <header>
            <NavLink to='/' className="header-link">Noteful</NavLink>
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