import React, { Component } from 'react';
import { connect } from "react-redux";

class User extends Component {



  render() {

    

   return(
    <div className="User">
    <h1>Hello User</h1>
    
   {this.props.vacation.map(v=>{
   return <div  key={v.id}><h1>{v.Destination}</h1><h4>{v.Description}</h4><h5>Dates:{v.Dates} Price:{v.Price}</h5><h6>Followers: {v.Followers}</h6></div>})}
    </div>
   )
  }
}
const mapStateToProps = state => {
  return { vacation: state.vacation  };
}; 

const user = connect(mapStateToProps, null)(User);


export default user;
