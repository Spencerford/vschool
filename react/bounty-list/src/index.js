import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

//import css
import "./index.css";

//import containers
import FormContainer from "./containers/form-container.js";
import HitListContainer from "./containers/hitlist-container.js";

//create store
const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
            
                <FormContainer />
                <HitListContainer />
                
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"))