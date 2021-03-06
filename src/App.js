import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'
import StickyFooter from 'react-sticky-footer';




function App() {
  return (
    <div className="App">
        <div>
          <NavBar/>
        </div>
        <Router>
          <Switch>
            <Route exact path="/AboutMe/" component={AboutMe}/>
            <Route exact path="/" component={Home}/>
            <Route path="/Projects/" component={Projects}/>
          </Switch>
        </Router>
        <StickyFooter>
          <Footer/>
        </StickyFooter>
    </div>
  );
}

export default App;
