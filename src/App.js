import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './comps/Register';
import Adminpannel from './comps/Adminpannel';
import User from './comps/User';
import Login from './comps/Login';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
 
} from "react-router-dom";
import AddVacation from './comps/AddVacation';
import { connect } from "react-redux";
import {LoadVacation} from "./state/action"





class App extends Component {
  
  refresh(){
    this.props.loadvacation()

  }


  render() {
    return (
      <Router>
          <div className="App">
          <Link to="/">Register</Link>
          <Link to="/login">Login</Link>

          <Switch>
              <Route exact path="/"  render={()=><Register/>} />
              <Route   path="/login"  render={(props)=><Login location={props.location} {...props}/>} />
              <Route exact path="/Adminpannel"  render={(props)=><Adminpannel refresh={this.refresh.bind(this)} location={props.location} {...props}/>} />
              <Route exact path="/User"  render={()=><User refresh={this.refresh.bind(this)}/>} />
              <Route exact path="/add"  render={(props)=><AddVacation refresh={this.refresh.bind(this)} location={props.location} {...props}/>} />


          </Switch>
          </div>
      </Router>
    );
  }
}


const mapDispatchToProps = dispatch => {  

  return  {
    
    loadvacation: function(){ 
      
      return dispatch(LoadVacation())

  }
  } 

  }; 

const app = connect(null, mapDispatchToProps)(App);

export default app;
