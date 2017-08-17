import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

//import css
import "./index.css";

//import conainers
import FormContainer from "./containers/form-container";
import ArtistListContainer from "./containers/artist-list-container.js";

const store = createStore(reducers, applyMiddleware(thunk));


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FormContainer />
                <ArtistListContainer />
                
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"))