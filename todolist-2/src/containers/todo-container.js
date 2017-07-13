import React from "react";

//import component
import TodoItem from "../components/todo.js";


class TodoContainer extends React.Component {
  render() {
    return (
      <div>
        <TodoItem text="Test in container"/>
      </div>
    );
  }
}

export default TodoContainer;
