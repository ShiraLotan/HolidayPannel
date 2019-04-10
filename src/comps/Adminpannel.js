import React, { Component } from 'react';
import { connect } from "react-redux";

class Adminpannel extends Component {



  render() {

    console.log(this.props.vacation)
    

   return(
     
    <div className="Adminpannel">
    <h1>Hello Admin</h1>
    <button className="btn btn-outline-dark btnpossion" onClick={this.addvacation.bind(this)}>Add Vacation</button>
   {this.props.vacation.map(v=>{
   return  <div className="card bg-dark text-white cardextra"  key={v.id}><h1 className="card-title">{v.Destination}</h1><h4 className="card-content">{v.Description}</h4><h5>Dates:{v.Dates} Price:{v.Price}</h5><h6>Followers: {v.Followers}</h6><button className="btn btn-outline-dark" onClick={this.deletevacation.bind(this)}>Remove</button></div>})}
    </div>
   )
  }

  
  addvacation(){
    {this.props.history.push('/add')}
  }


  deletevacation(){
    fetch(`http://localhost:3000/admin`, {
  method: 'DELETE',
  headers: {'Content-Type': 'application/json'}
})
.then(res => res.json()) 
.then(res => {

})
  }



}
const mapStateToProps = state => {
  return { vacation: state.vacation  };
}; 

const adminpannel = connect(mapStateToProps, null)(Adminpannel);


export default adminpannel;
