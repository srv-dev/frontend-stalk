import React from 'react'
import axios from 'axios'

const userID = localStorage.getItem('userId')

class AddPlant extends React.Component {

  //must be logged in to create a plant - render error if not logged in
  state = {
    user_id: localStorage.getItem('userId'),
  }

  handleChange = ( evt ) => {
    this.setState({ [evt.target.name] : evt.target.value })
  }

  componentDidMount(){
    console.log('user_id:', userID);
  }


  handleSubmit = ( event ) => {
    event.preventDefault();

    const plant = { plant:  this.state }

    axios.post('http://localhost:3000/plants.json', plant )
      .then(this.props.history.push(`/mygarden/${userID}`))
      .catch( err => console.warn( err ))
  } // end of handleSubmit


  render(){
    return(
      <div className='App'>
        <h2>AddPlant</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <label>Plant Type</label>
            <input type="text" name="planttype" onChange={this.handleChange}/> <br/>

            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange}/> <br/>

            <label>About your plant:</label>
            <input type="text" name="description" onChange={this.handleChange}/> <br/>

            <label>Date Acquired</label>
            <input type="date" name="date_acquired" onChange={this.handleChange}/> <br/>

            <label>Days between watering</label>
            <input type="text" name="water_days" onChange={this.handleChange}/> <br/>

            <input type="submit"/>
        </form>
      </div>
    )
  }

} // Class

export default AddPlant
