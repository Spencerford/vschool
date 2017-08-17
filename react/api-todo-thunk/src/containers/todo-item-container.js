import React, { Component } from 'react';
import autoBind from "react-autobind";


import Todo from "../components/todo";

class TodoItemContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
            ...this.props.item,
            edit: false
        }
        autoBind(this);
    }

    handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  toggleEdit(){
      this.setState({
          edit: !this.state.edit
      });
  }

    render() {
        
        return (
            <div className="text-center">
                <Todo toggleEdit={this.toggleEdit} input={this.state} handleChange={this.handleChange} handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} item={this.props.item}/>
            </div>
        );
    }
}

export default TodoItemContainer;