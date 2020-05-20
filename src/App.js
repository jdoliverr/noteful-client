import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routes from './Routes'
import STORE from './store'
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        folders: [],
        notes: []
      }
  }

  componentDidMount() {
    this.setState({
      folders: STORE.folders,
      notes: STORE.notes
    })
  }

  render() {
    return (
      <div className='App'>
          <header>
            <NavLink to='/' className="header-link">Noteful</NavLink>
          </header>
          <main>
            <Routes folders={this.state.folders} notes={this.state.notes}/>
          </main>
      </div>
    );
  }
}

export default App;