import React, { Component } from 'react';


class Login extends Component {
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
        alert(data.msg)
      })
  }
}

export default Login;
