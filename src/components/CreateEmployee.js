import React, { Component } from 'react'

class CreateEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         job:''
      }
    }
    handlerNameChange =(event)=>{
        this.setState({
            name:event.target.value,
        })
    }

    handlerJobChange =(event)=>{
        this.setState({
            job:event.target.value,
        })
    }
  render() {
    return (
      <form>
          <div>
              <h1>Add Employee</h1>
              <label>Name</label>
              <input type = 'text' 
              value={this.state.name} 
              onChange={this.handlerNameChange}/>
          </div>
          <div>
              <label>Job</label>
              <input type = 'text'
              value={this.state.job} 
              onChange={this.handlerJobChange}/>
          </div>
          <button type='submit'>Submit</button>
      </form>
        )
  }
}

export default CreateEmployee