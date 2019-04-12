import React, { Component } from 'react';
import { connect } from "react-redux";
import io from 'socket.io-client';

class User extends Component {

  componentDidMount()
  {
    const socket = io('http://localhost:8888');
    socket.on('addVacation', (msg)=>{
      this.props.refresh()
    });

  }

  render() {

    

   return(
    <div className="User">
    <h1>Hello User</h1>
    
   {this.props.vacation.map(v=>{
   return <div className="card bg-dark text-white cardextra" key={v.id}><h1 className="card-title">{v.Destination}</h1><h4 className="card-content">{v.Description}</h4><h5>Dates:{v.Dates} Price:{v.Price}</h5><h6>Followers: {v.Followers}</h6>    <button v={v} onClick={this.enterFollow.bind(this,v)}>FOLLOW</button>
   </div>})}
    </div>
   )
  }

 
  enterFollow(v)
  {
    debugger;
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(v)
    }).then(r=>r.json())
    .then(data=>
      {
      if(data.msg==="followed")
      {
        
      }        
      })
  }

}












const mapStateToProps = state => {
  return { vacation: state.vacation  };
}; 

const user = connect(mapStateToProps, null)(User);


export default user;
