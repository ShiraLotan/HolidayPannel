import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoadVacation} from "../state/action"
import {Redirect} from "react-router-dom";
import Adminpannel from './Adminpannel';



class Login extends Component {

// componentDidMount(){
//   this.props.loadvacation()

// }


  render() {
    return (
      <div className="Login">
        <h1>Login</h1>

       Username: <input name="loginusername" placeholder="Username" onChange={this.handeltext.bind(this)}/><br/><br/>
       Password: <input name="loginpassword" placeholder="Password" onChange={this.handeltext.bind(this)}/><br/><br/>

       <button onClick={this.sendData.bind(this)}>Login</button>

      </div>
    );
  }

  handeltext(ev)
  {
    this.setState({[ev.target.name]:ev.target.value})
  }

  sendData(){
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(r=>r.json())
    .then(data=>
      {
        // console.log(data.resualt)
        alert(data.msg)

        if(data.resualt.length>0)
        {

          this.props.loadvacation()
        }
      })
  }
}





const mapDispatchToProps = dispatch => {  

  return  {
    
    loadvacation: function(){ 
      
      return dispatch(LoadVacation())

  }
  } 

  }; 

const login = connect(null, mapDispatchToProps)(Login);

export default login;
