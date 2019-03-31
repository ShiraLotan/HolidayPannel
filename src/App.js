import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './comps/Register';
import Login from './comps/Login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>

      <Route exact path="/"  render={()=><Register/>} />
      <Route   path="/login"  render={()=><Login/>} />


        
      </div>
      </Router>
    );
  }
}

export default App;
