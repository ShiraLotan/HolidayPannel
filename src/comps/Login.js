import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoadVacation} from "../state/action"




class Login extends Component {




  render() {
    return (
      <div className="Login">
        <h1>Login</h1>

       Username: <input required name="loginusername" placeholder="Username" onChange={this.handeltext.bind(this)}/><br/><br/>
       Password: <input required name="loginpassword" placeholder="Password" onChange={this.handeltext.bind(this)}/><br/><br/>

       <button className="btn btn-outline-dark" onClick={this.sendData.bind(this)}>Login</button>
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
        debugger;
        if(data.resualt.length>0)
        {
          console.log(data.resualt[0].Name)
          if(data.resualt[0].Name==='admin'){
            this.props.loadvacation()
          this.props.history.push('/Adminpannel')
          }else{
            this.props.loadvacation()
          this.props.history.push('/User')
          }

          
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
