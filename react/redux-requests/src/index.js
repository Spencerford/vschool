import React, { Component } from 'react';
import ReactDOM from "react-dom";

//import css
import "./css/index.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";

//import containers
import ColorContainer from "./containers/color-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <ColorContainer />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));