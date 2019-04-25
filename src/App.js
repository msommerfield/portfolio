import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
        <div>
          <NavBar/>
        </div>
        <Router>
          <Switch>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
