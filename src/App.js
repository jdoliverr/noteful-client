import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routes from './Routes'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <header>
            <NavLink to='/' className="header-link">Noteful</NavLink>
          </header>
          <main>
            <Routes />
          </main>
      </div>
    );
  }
}

export default App;