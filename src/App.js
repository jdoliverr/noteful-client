import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import NoteList from './components/NoteList/NoteList'
import STORE from './store'
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   state = {

  //   }
  // }

  render() {
    return (
      <div className='App'>
          <header>
            <a href="/" className="header-link">Noteful</a>
          </header>
          <main>
              <div className="wrapper">
                  <Sidebar folders={STORE.folders} />
                  <NoteList notes={STORE.notes}/>
              </div>
          </main>
      </div>
    );
  }
}

export default App;
