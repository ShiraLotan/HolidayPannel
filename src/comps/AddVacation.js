import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoadVacation} from "../state/action"
import ImageUploader from 'react-images-upload';

class AddVacation extends Component {

  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    })}

  render() {

    

   return(
    <div className="AddVacation">
    <h1>Add Vacation</h1><br/><br/>

    Destination:<input name="destination" onChange={this.handeltxt.bind(this)}/><br/><br/>
    Description:<input name="description" onChange={this.handeltxt.bind(this)}/><br/><br/>
    Dates: <input name="dates" onChange={this.handeltxt.bind(this)}/><br/><br/>
    Price:<input name="price" onChange={this.handeltxt.bind(this)}/><br/><br/>
    
              <ImageUploader
                withIcon={true}
               buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
           /> 


    <button onClick={this.sendData.bind(this)}>ADD</button>


    </div>
   )
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
