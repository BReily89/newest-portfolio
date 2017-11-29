import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import Projects from './components/projects/Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/"component={HomePage} />
      </Router>
    );
  }
}

export default App;
