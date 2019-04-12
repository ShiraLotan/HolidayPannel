import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoadVacation} from "../state/action"

class AddVacation extends Component {

 

  render() {

    

   return(
    <div className="AddVacation">
    <h1>Add Vacation</h1><br/><br/>


    Destination:<input name="destination" onChange={this.handeltxt.bind(this)}/><br/><br/>
    Description:<input name="description" onChange={this.handeltxt.bind(this)}/><br/><br/>
    Dates: <input name="dates" onChange={this.handeltxt.bind(this)}/><br/><br/>
    Price:<input name="price" onChange={this.handeltxt.bind(this)}/><br/><br/>
    Image:   <input type="file" name="image"  id="imgUpload" onChange={this.handelimg.bind(this)}/>
    

    <button onClick={this.sendData.bind(this)}>ADD</button>

              




    </div>
   )
  }
  handelimg(ev)
  {
    var file = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) =>{

      this.setState({image:e.target.result})

    };
  
    reader.readAsText(file);
  }

  handeltxt(ev)
  {
    this.setState({[ev.target.name]:ev.target.value})
  }

  

    sendData(){
      fetch('http://localhost:3000/admin/add', {
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
          this.props.history.push('/Adminpannel')

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
  
  const addvacation = connect(null, mapDispatchToProps)(AddVacation);

export default addvacation;
