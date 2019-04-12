import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoadVacation} from "../state/action"

class Adminpannel extends Component {

  render() {

   return(
     
    <div className="Adminpannel">
    <h1>Hello Admin</h1>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Change Vacation Details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Destination: <input name="Destination" onChange={this.handelTxt.bind(this)}/><br/><br/>
      Description: <input name="Description" onChange={this.handelTxt.bind(this)}/><br/><br/>
      Dates: <input name="Dates" onChange={this.handelTxt.bind(this)}/><br/><br/>
      Price: <input name="Price" onChange={this.handelTxt.bind(this)}/><br/><br/>
      Image: <input name="Image" type="file" onChange={this.handelTxt.bind(this)} onChange={this.handelimg.bind(this)}/><br/><br/>



      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.saveChanges.bind(this)}>Save changes</button>
      </div>
    </div>
  </div>
</div>

    
    <button className="btn btn-outline-dark btnpossion" onClick={this.addvacation.bind(this)}>Add Vacation</button>
   {this.props.vacation.map(v=>{
   return  <div className="card bg-dark text-white cardextra" id={v.id} key={v.id}><h1 className="card-title destination" >{v.Destination}</h1><h4 name="description" className="card-content">{v.Description}</h4><h5 name="dates">Dates:{v.Dates} Price:{v.Price}</h5><h6 >Followers: {v.Followers}</h6><button  onClick={this.deletevacation.bind(this,v)}>Remove</button><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.params.bind(this,v)}>Edit</button></div>})}


    </div>
   )
  }
  
  params(v)
  {
    this.setState(v)
  }

  saveChanges()
  {
    fetch('http://localhost:3000/admin/change', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(r=>r.json())
    .then(data=>
      {
     console.log(data.msg)
     this.props.loadvacation()
        this.props.refresh()

      })
  }




  handelimg(ev)
  {
    var file = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) =>{

      this.setState({Image:e.target.result})

    };
  
    reader.readAsText(file);
  }


  handelTxt(ev)
  
  {
    this.setState({[ev.target.name]:ev.target.value})
  }

  

  addvacation(){
    {this.props.history.push('/add')}
  }


  deletevacation(v){
    fetch(`http://localhost:3000/admin/${v.id}`, {
  method: 'DELETE',
  headers: {'Content-Type': 'application/json'}
})
.then(res => res.json()) 
.then(res => {
  alert(res.msg)
  this.props.loadvacation()
  this.props.refresh()
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

const mapStateToProps = state => {
  return { vacation: state.vacation  };
}; 

const adminpannel = connect(mapStateToProps, mapDispatchToProps)(Adminpannel);


export default adminpannel;
