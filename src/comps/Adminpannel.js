import React, { Component } from 'react';
import { connect } from "react-redux";

class Adminpannel extends Component {
  render() {
   return(
    <div className="Adminpannel">
    <h1>Hello</h1>
    
      
    </div>
   )
  }
}
const mapStateToProps = state => { 
  return { vacation: state.vacation  };
}; 
const adminpannel = connect(mapStateToProps, null)(Adminpannel);

export default adminpannel;
