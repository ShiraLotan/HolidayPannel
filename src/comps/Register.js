import React, { Component } from 'react';


class Register extends Component {
  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <input required name="firstname" placeholder="Name" onChange={this.handeltext.bind(this)}/><br/><br/>
        <input required name="lastname" placeholder="Last Name" onChange={this.handeltext.bind(this)}/><br/><br/>
        <input required name="username" placeholder="Username" onChange={this.handeltext.bind(this)}/><br/><br/>
        <input required max="8" min="3" name="password" placeholder="Password" onChange={this.handeltext.bind(this)}/><br/><br/>

        <button onClick={this.sendData.bind(this)}>Register</button>


          
      </div>
    );
  }
  handeltext(ev)
  {
    this.setState({[ev.target.name]:ev.target.value})
  }

 
  sendData()
  {
    fetch('http://localhost:3000/register', {
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

export default Register;
