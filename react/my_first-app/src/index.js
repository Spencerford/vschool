import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./navbar.js";
import "./index.css";


class App extends React.Component {
    render(){
        return (
            <div className="content">
            <Navbar></Navbar>
            <h1>Hello</h1>
            <h2>It's Me</h2>
            <p> welll this is a paragraph.  neat.</p>
            
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));