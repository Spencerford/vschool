import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";

//import css
import "./css/index.css"

//import containers
import FormContainer from "./containers/form-container.js"

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FormContainer />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));