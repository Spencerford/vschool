import React, { Component } from 'react';
import ReactDOM from "react-dom";

//import css
import "./index.css";

//import components
import FormContainer from "./containers/form-container";
import HighScoreContainer from "./containers/high-score-container";


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FormContainer />
                <HighScoreContainer />
                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
