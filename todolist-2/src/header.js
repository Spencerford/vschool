import React from "react";

import TodoItem from "./components/todo"

class Header extends React.Component {
  render() {
    return (
      <div>
        <TodoItem text="Test in container"/>
      </div>
    );
  }
}

export default Header;