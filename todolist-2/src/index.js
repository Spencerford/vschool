import React from "react";
import ReactDOM from "react-dom";

//import css
import "./index.css";

//import components
import Header from "./header.js";
import TodoContainer from "./containers/todo-container.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <TodoContainer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"));

