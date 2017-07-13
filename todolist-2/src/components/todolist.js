import React from "react";

//import component
import TodoItem from "./todo-item.js";

class TodoList extends React.Component {
  items() {
    return this.props.items.map((item)=> {
      return (<TodoItem text={item}/>)
    });
  }
  render() {
    return (
      <div>
        {this.items()}
      </div>
    )
  }
}

export default TodoList;