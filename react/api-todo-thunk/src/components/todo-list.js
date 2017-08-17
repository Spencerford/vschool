import React, { Component } from 'react';

import TodoItemContainer from "../containers/todo-item-container.js";

class TodoList extends Component {
    genItems() {
    return this.props.items.map((item, index) => {
      return <TodoItemContainer handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} key={item.title + index} item={item}/>
    })
  }
    render() {
        return (
            <div>
                {this.genItems() }
            </div>
        );
    }
}

export default TodoList;