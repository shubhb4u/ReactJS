import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(){
        super();
        this.state = {
            tasks:["Revise JS", "Revise DBMS"],
            currTask : "",
        };
    }

    handleAddTask = () => {

      this.setState({
        tasks: [...this.state.tasks,this.state.currTask]
      })

    }

    handleChange = (e) => {

      console.log(e.target.value);
      this.setState({
        currTask : e.target.value
      })

    }



  render() {
    return (
      <div>
          <input 
          type = "text" 
          placeholder = "Enter your task"
          onChange = {this.handleChange}
          />
        <button onClick={this.handleAddTask}>Add</button>
        {this.state.tasks.map((task) => {

            return (

                <li>
                    <p>{task}</p>
                    <button>Delete</button>
                </li>
            );
        })}

      </div>
    )
  }
}
