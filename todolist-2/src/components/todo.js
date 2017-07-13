import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <div className="left">
          <button className="btn btn-danger">X</button>
        </div>
        <div className="right">
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default TodoItem;