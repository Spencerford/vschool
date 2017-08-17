import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./css/index.css"

//import redux
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


import FormContainer from "./containers/form-container.js";
import ChatContainer from "./containers/chat-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div>
                <FormContainer />
                <ChatContainer />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));